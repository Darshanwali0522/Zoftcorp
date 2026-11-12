# ZOFTCORP Website – Hostinger Deployment Guide (Next.js 16 Standalone)

This guide documents the verified, production deployment procedure for the **ZOFTCORP Next.js 16.4.2 Website** using Next.js **Standalone Output** (`output: 'standalone'`).

---

## 1. Core Architectural Requirements

### A. Node.js Version
- **Requirement:** **Node.js 20.9.0+ or Node.js 22.x LTS**.
- Next.js 16 requires a minimum of Node.js 20.9.0. Verify your version on the server using `node -v`.

### B. CRITICAL: When to Configure Environment Variables
Next.js handles environment variables in two fundamentally different ways:

1. **`NEXT_PUBLIC_*` Variables (Client-Side Inlining at BUILD TIME):**
   - Variables prefixed with `NEXT_PUBLIC_` (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `NEXT_PUBLIC_SITE_URL`) are **permanently inlined into browser JavaScript bundles during `npm run build`**.
   - **MUST be configured in `.env.production` or the Hostinger environment BEFORE running `npm run build`.**
   - If configured *after* `npm run build`, client browsers will receive empty or fallback values, breaking client-side database connectivity and authentication.

2. **Server-Only Secrets (Runtime Evaluation):**
   - Variables without the prefix (`SUPABASE_SERVICE_ROLE_KEY`, `ADMIN_NOTIFICATION_EMAIL`, `EMAIL_FROM`, `GMAIL_USER`, `GMAIL_APP_PASSWORD`) are read by Node.js dynamically on each API route execution.
   - These can be updated anytime without rebuilding the application.

---

## 2. How the Standalone Deployment Works

In `next.config.ts`, the project uses `output: 'standalone'`:
1. When you run `npm run build`, Next.js compiles the site and automatically traces dependencies to create a lightweight, self-contained server at `.next/standalone/server.js`.
2. Our automated postbuild script (`scripts/copy-standalone-assets.js`) automatically copies:
   - `public/` &rarr; `.next/standalone/public/`
   - `.next/static/` &rarr; `.next/standalone/.next/static/`
   This guarantees that all images, brand assets, CSS chunks, and JavaScript bundles are directly available to the standalone server without requiring a separate CDN.
3. The project provides a root `server.js` entrypoint that cleanly routes to `.next/standalone/server.js`.
4. In `package.json`, `npm start` executes `node server.js`.

**The single unified startup command is:**
```bash
node server.js
```

---

## 3. Hostinger Deployment Procedure

### Method 1: Hostinger VPS / Cloud Server (Recommended)

Hostinger VPS provides full process control via PM2 and Nginx reverse proxy.

#### Step 1: Upload and Extract Archive
Upload `zoftcorp-hostinger-deployment.zip` to your server (e.g., `/var/www/zoftcorp-website`) and extract:
```bash
mkdir -p /var/www/zoftcorp-website
unzip zoftcorp-hostinger-deployment.zip -d /var/www/zoftcorp-website
cd /var/www/zoftcorp-website
```

#### Step 2: Configure Production Environment Variables (BEFORE BUILD)
Create `.env.production` in `/var/www/zoftcorp-website`:
```bash
nano .env.production
```
Paste your production environment variables (refer to `ENVIRONMENT_VARIABLES_REQUIRED.txt`):
```env
# 1. Client-Inlined (REQUIRED BEFORE BUILD)
NEXT_PUBLIC_SUPABASE_URL=https://[your-project-id].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[your-supabase-anon-key]
NEXT_PUBLIC_SITE_URL=https://zoftcorp.com

# 2. Server-Only Secrets
SUPABASE_SERVICE_ROLE_KEY=[your-supabase-service-role-key]
ADMIN_NOTIFICATION_EMAIL=info@zoftcorp.com
EMAIL_FROM=Zoftcorp <info@zoftcorp.com>
GMAIL_USER=info@zoftcorp.com
GMAIL_APP_PASSWORD=[your-16-char-google-app-password]

# 3. Node Runtime
NODE_ENV=production
PORT=3000
HOSTNAME=0.0.0.0
```

#### Step 3: Install Dependencies and Build
```bash
# 1. Install production dependencies
npm install

# 2. Build production assets (automatically copies public/ and .next/static/ into standalone)
npm run build
```

#### Step 4: Start the Application with PM2
```bash
# Install PM2 if not installed
npm install -g pm2

# Start the standalone server via the unified root entrypoint
pm2 start server.js --name "zoftcorp-website"

# Configure PM2 to auto-restart on system reboot
pm2 save
pm2 startup
```

#### Step 5: Configure Nginx Reverse Proxy
In `/etc/nginx/sites-available/zoftcorp.com`:
```nginx
server {
    server_name zoftcorp.com www.zoftcorp.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```
Enable the site and configure SSL via Let's Encrypt:
```bash
sudo ln -s /etc/nginx/sites-available/zoftcorp.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
sudo certbot --nginx -d zoftcorp.com -d www.zoftcorp.com
```

---

### Method 2: Hostinger hPanel Node.js Application Manager

If deploying on Hostinger Cloud or Business Web Hosting with the hPanel Node.js feature:

#### Step 1: Upload Files
1. Open Hostinger **File Manager**.
2. Extract `zoftcorp-hostinger-deployment.zip` into your designated application directory (e.g., `/home/[username]/public_html`).

#### Step 2: Configure Environment Variables in hPanel (BEFORE BUILD)
In hPanel &rarr; **Websites** &rarr; **Node.js** &rarr; **Environment Variables**, configure:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_SITE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `ADMIN_NOTIFICATION_EMAIL`
- `EMAIL_FROM`
- `GMAIL_USER`
- `GMAIL_APP_PASSWORD`
- `NODE_ENV=production`

#### Step 3: Configure Node.js Application Settings in hPanel
- **Node.js version:** Select `Node.js 20.x` or `Node.js 22.x`.
- **Application root:** `/home/[username]/public_html` (the directory containing `package.json`).
- **Application startup file:** `server.js` (this executes our verified standalone forwarder).
- **Application mode:** `Production`.

#### Step 4: Install Dependencies & Run Build
Open Hostinger **SSH / Terminal**:
```bash
cd /home/[username]/public_html
npm install
npm run build
```

#### Step 5: Start / Restart Application
In hPanel **Node.js Manager**, click **Restart Application**.

---

## 4. Verification & Testing

Verify that:
1. `https://zoftcorp.com` loads with full CSS styling and images (verifying `.next/static` and `public/` are served).
2. `https://zoftcorp.com/contact` allows submitting an inquiry, saving to Supabase and triggering dual email notifications.
3. Dynamic routes load properly (`/insights/blogs`, `/consulting/cloud-finops`, `/careers/[slug]`).
