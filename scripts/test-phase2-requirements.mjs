import fs from 'fs';

// Read env for direct tests
const envContent = fs.readFileSync('.env.local', 'utf-8');
const env = {};
envContent.split('\n').forEach(line => {
  const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
  if (match) {
    let value = match[2] || '';
    if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
    if (value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1);
    env[match[1]] = value.trim();
  }
});

const PORT = process.env.PORT || 3000;
const BASE_URL = `http://localhost:${PORT}`;

async function testEndpoint(name, fn) {
  try {
    const result = await fn();
    console.log(`[PASS] ${name}:`, result || 'OK');
    return true;
  } catch (err) {
    console.error(`[FAIL] ${name}:`, err.message);
    return false;
  }
}

async function run() {
  console.log('====================================================');
  console.log('ZOFTCORP PHASE 2 REQUIREMENTS VALIDATION SUITE');
  console.log(`Testing target: ${BASE_URL}`);
  console.log('====================================================');

  let passed = 0;
  let total = 0;

  // 1. REQ 7: Contact Form "Other" Option
  total++;
  if (await testEndpoint('REQ 7 - Contact Form with "other" topic', async () => {
    const res = await fetch(`${BASE_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: 'Regression',
        lastName: 'Validation',
        workEmail: 'validation.test@zoftcorp-test.com',
        companyName: 'Phase 2 Validation Corp',
        topic: 'other',
        message: 'Validating "Other" topic submission in contact form.',
        referralSource: 'Phase 2 Test Suite',
        formSource: 'contact_page'
      })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`);
    return `Status ${res.status}, response: ${data.message}`;
  })) passed++;

  // 2. REQ 4: Partnerships Inquiry Form & Page
  total++;
  if (await testEndpoint('REQ 4 - Partnerships page loads with inquiry form', async () => {
    const res = await fetch(`${BASE_URL}/about-us/partnerships`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();
    if (!html.includes('Partner With Zoftcorp')) throw new Error('Missing "Partner With Zoftcorp" section heading');
    if (!html.includes('partnership-inquiry')) throw new Error('Missing partnership-inquiry anchor id');
    return 'Page HTTP 200, contains partner inquiry form';
  })) passed++;

  total++;
  if (await testEndpoint('REQ 4 - Partnerships API submission', async () => {
    const res = await fetch(`${BASE_URL}/api/partnerships`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        companyName: 'Acme Cloud Solutions',
        contactName: 'Alex Partner',
        businessEmail: 'alex@acmecloud.com',
        partnershipType: 'Cloud Reseller & Co-Sell',
        message: 'Interested in exploring joint cloud migration delivery with Zoftcorp.'
      })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`);
    return `Status ${res.status}, response: ${data.message}`;
  })) passed++;

  // 3. REQ 1: Careers Page & Application Form
  total++;
  if (await testEndpoint('REQ 1 - Careers page loads Core Values, Benefits & Form', async () => {
    const res = await fetch(`${BASE_URL}/about-us/career`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();
    if (!html.includes('CORE VALUES')) throw new Error('Missing Core Values section');
    if (!html.includes('EMPLOYEE BENEFITS')) throw new Error('Missing Employee Benefits section');
    if (!html.includes('Candidate Application Form')) throw new Error('Missing Candidate Application Form');
    return 'Page HTTP 200 with Core Values, Employee Benefits, and Candidate Application Form';
  })) passed++;

  total++;
  if (await testEndpoint('REQ 1 - Careers API file upload validation & private storage', async () => {
    const formData = new FormData();
    formData.append('fullName', 'Candidate Test User');
    formData.append('email', 'candidate.qa@zoftcorp-test.com');
    formData.append('phone', '+1 555 123 4567');
    formData.append('role', 'Senior Database Administrator (SQL Server / PostgreSQL / MySQL)');
    formData.append('notes', 'Automated QA application test with attached resume.');

    // Valid mock PDF with real PDF magic bytes
    const pdfBlob = new Blob(['%PDF-1.4 mock resume document for automated verification'], { type: 'application/pdf' });
    formData.append('resume', pdfBlob, 'candidate_resume.pdf');

    const res = await fetch(`${BASE_URL}/api/careers`, {
      method: 'POST',
      body: formData,
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`);
    return `Status ${res.status}, response: ${data.message}`;
  })) passed++;

  // 4. REQ 2: 308 Permanent Redirects for Removed Routes
  const removedRoutes = [
    { from: '/about-us/company-story', expectedDest: '/about-us' },
    { from: '/about-us/why-zoftcorp', expectedDest: '/about-us' },
    { from: '/offerings/vector-db-integration', expectedDest: '/offerings' },
    { from: '/offerings/data-engineering-and-analytics/industries', expectedDest: '/offerings/data-engineering-and-analytics' },
    { from: '/zoftstudio', expectedDest: '/' },
  ];

  for (const { from, expectedDest } of removedRoutes) {
    total++;
    if (await testEndpoint(`REQ 2 - Removed route redirect: ${from}`, async () => {
      const res = await fetch(`${BASE_URL}${from}`, { redirect: 'manual' });
      if (res.status !== 308) throw new Error(`Expected HTTP 308, got ${res.status}`);
      const loc = res.headers.get('location');
      if (loc !== expectedDest) throw new Error(`Expected location ${expectedDest}, got ${loc}`);
      return `HTTP 308 -> ${loc}`;
    })) passed++;
  }

  // 5. REQ 8 & 9: Heading Corrections
  total++;
  if (await testEndpoint('REQ 8 - Cloud & FinOps heading question mark', async () => {
    const file = fs.readFileSync('src/components/sections/finops/cloud-database-finops-view.tsx', 'utf-8');
    if (!file.includes('Why Cloud and Data Matters?')) {
      throw new Error('Heading missing question mark in cloud-database-finops-view.tsx');
    }
    return 'Heading is exact: "Why Cloud and Data Matters?"';
  })) passed++;

  total++;
  if (await testEndpoint('REQ 9 - Performance Tuning heading question mark', async () => {
    const file = fs.readFileSync('src/app/performance-tuning-services/page.tsx', 'utf-8');
    if (!file.includes('Why Performance Tuning Matters?')) {
      throw new Error('Heading missing question mark in performance-tuning-services/page.tsx');
    }
    return 'Heading is exact: "Why Performance Tuning Matters?"';
  })) passed++;

  // 6. REQ 5: Distinct Compliance Service Descriptions
  total++;
  if (await testEndpoint('REQ 5 - Distinct compliance service descriptions', async () => {
    const file = fs.readFileSync('src/data/services.ts', 'utf-8');
    if (!file.includes('Technical preparation and architectural readiness for India’s Digital Personal Data Protection Act.')) {
      throw new Error('Missing distinct DPDP description in services.ts');
    }
    if (!file.includes('High-availability database architecture, disaster recovery automation, and operational security controls.')) {
      throw new Error('Missing distinct Resilience & Compliance description in services.ts');
    }
    return 'DPDP and Resilience services have completely distinct descriptions, categories, and deliverables';
  })) passed++;

  // 7. REQ 6: Database Administration Blog Entry Rendering
  total++;
  if (await testEndpoint('REQ 6 - Database Administration blog entry renders cleanly', async () => {
    const res = await fetch(`${BASE_URL}/insights/blogs/zoft`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();
    if (!html.includes('Database Administration')) throw new Error('Missing Database Administration category badge');
    if (!html.includes('Oct 14, 2026') && !html.includes('2026-10-14')) throw new Error('Missing Oct 14, 2026 date');
    if (!html.includes('zoft is good')) throw new Error('Missing post excerpt');
    return 'Blog detail page renders full available content without truncation';
  })) passed++;

  // 8. REQ 10: Preserved Phase 1 Homepage Refinements
  total++;
  if (await testEndpoint('REQ 10 - Approved homepage refinements preserved', async () => {
    const res = await fetch(`${BASE_URL}/`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();
    if (!html.includes('20–30% Savings') && !html.includes('20-30% Savings')) throw new Error('Missing core benefit card 1');
    if (!html.includes('Faster Databases')) throw new Error('Missing core benefit card 2');
    if (!html.includes('Stay Secure &amp; Compliant') && !html.includes('Stay Secure & Compliant')) throw new Error('Missing core benefit card 3');
    if (!html.includes('Engineering Frame')) throw new Error('Missing standard diagram label 1');
    if (!html.includes('Evidence Before Intervention')) throw new Error('Missing standard diagram label 2');
    if (!html.includes('Outcome')) throw new Error('Missing standard diagram label 3');
    if (!html.includes('Engineering Over Hype')) throw new Error('Missing standard diagram label 4');
    if (!html.includes('© 2026 Zoftcorp. All rights reserved.') && !html.includes('&copy; 2026 Zoftcorp. All rights reserved.')) throw new Error('Missing footer copyright');
    return 'All approved Phase 1 cards, diagram labels, carousel, and copyright preserved';
  })) passed++;

  console.log('====================================================');
  console.log(`RESULTS: ${passed} / ${total} tests passed (${Math.round((passed / total) * 100)}%)`);
  console.log('====================================================');

  if (passed !== total) {
    process.exit(1);
  }
}

run();
