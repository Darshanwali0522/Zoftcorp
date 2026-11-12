// @ts-check
import { getMailTransporter, getAdminNotificationEmail, getSenderEmail } from '../src/lib/email/mailer.ts';
import fs from 'node:fs';

console.log('================================================================');
console.log('ZOFTCORP LIVE SMTP AUTHENTICATION & DELIVERY TEST');
console.log('================================================================\n');

// 1. Manually check .env.local for presence of credentials
let envLocalContent = '';
if (fs.existsSync('.env.local')) {
  envLocalContent = fs.readFileSync('.env.local', 'utf-8');
}

const hasUser = /^\s*(GMAIL_USER|SMTP_USER)\s*=\s*(.+)$/m.test(envLocalContent);
const hasPass = /^\s*(GMAIL_APP_PASSWORD|SMTP_PASSWORD)\s*=\s*(.+)$/m.test(envLocalContent);

console.log('--- Credential Presence in .env.local ---');
console.log('GMAIL_USER configured:', hasUser ? 'YES' : 'NO (defaulting to info@zoftcorp.com)');
console.log('GMAIL_APP_PASSWORD configured:', hasPass ? 'YES' : 'NO');

// Load environment into process.env if present
for (const line of envLocalContent.split('\n')) {
  const match = line.match(/^\s*([A-Za-z0-9_]+)\s*=\s*(.*)?\s*$/);
  if (match) {
    let val = (match[2] || '').trim();
    if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
    if (!process.env[match[1]]) {
      process.env[match[1]] = val;
    }
  }
}

const transporter = getMailTransporter();
const adminEmail = getAdminNotificationEmail();
const sender = getSenderEmail();

console.log('Sender Address:', sender);
console.log('Target Admin Recipient:', adminEmail);

if (!transporter) {
  console.log('\n⚠️ LIVE SMTP TEST CANNOT RUN YET:');
  console.log('The authorised Google App Password (GMAIL_APP_PASSWORD) has not been provided in .env.local.');
  console.log('Per instructions: "Do not invent or generate credentials."');
  console.log('\nTo run this live test, add your 16-character Google App Password to .env.local:');
  console.log('  GMAIL_APP_PASSWORD=xxxx-xxxx-xxxx-xxxx');
  console.log('Then re-run: npx tsx scripts/test-live-smtp-handshake.mjs\n');
  process.exit(0);
}

async function runLiveTest() {
  console.log('\n--- Initiating Google SMTP Server Handshake (smtp.gmail.com:587) ---');
  try {
    // 1. Test SMTP Connection & Authentication
    await transporter.verify();
    console.log('✅ Google SMTP Authentication SUCCESSFUL!');

    // 2. Dispatch Live Verification Email to info@zoftcorp.com
    console.log(`\n--- Sending Live Test Notification to ${adminEmail} ---`);
    const info = await transporter.sendMail({
      from: sender,
      to: adminEmail,
      subject: 'Live SMTP Verification – Zoftcorp Notifications',
      text: `This is a live SMTP verification email sent from the official Zoftcorp website system.\n\nSender: ${sender}\nRecipient: ${adminEmail}\nTimestamp: ${new Date().toISOString()}\n\nAll automated dual notifications are configured and operational.\n`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #01153B; margin-top: 0;">Live SMTP Verification</h2>
          <p style="color: #334155;">This is a live SMTP verification test sent from the official Zoftcorp website mailer.</p>
          <ul style="color: #475569; font-size: 14px;">
            <li><strong>Sender:</strong> ${sender}</li>
            <li><strong>Admin Recipient:</strong> ${adminEmail}</li>
            <li><strong>Timestamp:</strong> ${new Date().toISOString()}</li>
          </ul>
          <p style="color: #0284c7; font-weight: bold;">Authentication and transmission verified successfully.</p>
        </div>
      `,
    });

    console.log(`✅ Verification email delivered successfully! Message ID: ${info.messageId}`);
    console.log('================================================================');
  } catch (err) {
    console.error('❌ Google SMTP Handshake / Delivery FAILED:');
    console.error('   ', err.message);
    console.log('================================================================');
    process.exit(1);
  }
}

runLiveTest();
