// @ts-check
import assert from 'node:assert';

console.log('====================================================');
console.log('ZOFTCORP DUAL EMAIL NOTIFICATIONS & CONTACT API TEST');
console.log('====================================================\n');

let failures = 0;

function runTest(name, fn) {
  try {
    fn();
    console.log(`✅ PASS: ${name}`);
  } catch (err) {
    console.error(`❌ FAIL: ${name}`);
    console.error('   ', err.message);
    failures++;
  }
}

async function runAsyncTest(name, fn) {
  try {
    await fn();
    console.log(`✅ PASS: ${name}`);
  } catch (err) {
    console.error(`❌ FAIL: ${name}`);
    console.error('   ', err.message);
    failures++;
  }
}

// ----------------------------------------------------
// 1. Test Rate Limiter and Duplicate Submission Store
// ----------------------------------------------------
console.log('--- TEST SUITE 1: Rate Limiter & Duplicate Prevention ---');

import { checkRateLimit, isDuplicateSubmission } from '../src/lib/rate-limiter.ts';

runTest('Rate limiter allows requests under threshold', () => {
  const testIp = '10.200.1.1';
  const r1 = checkRateLimit(testIp, 3, 60000);
  assert.strictEqual(r1.allowed, true);
  assert.strictEqual(r1.remaining, 2);

  const r2 = checkRateLimit(testIp, 3, 60000);
  assert.strictEqual(r2.allowed, true);
  assert.strictEqual(r2.remaining, 1);

  const r3 = checkRateLimit(testIp, 3, 60000);
  assert.strictEqual(r3.allowed, true);
  assert.strictEqual(r3.remaining, 0);

  const r4 = checkRateLimit(testIp, 3, 60000);
  assert.strictEqual(r4.allowed, false);
  assert.strictEqual(r4.remaining, 0);
});

runTest('Duplicate submission detection catches duplicate signatures within window', () => {
  const sig1 = 'user@example.com:Database Tuning:High query latency on Aurora';
  const firstAttempt = isDuplicateSubmission(sig1, 60000);
  assert.strictEqual(firstAttempt, false, 'First attempt should not be a duplicate');

  const secondAttempt = isDuplicateSubmission(sig1, 60000);
  assert.strictEqual(secondAttempt, true, 'Second attempt within 60s should be detected as duplicate');

  const differentSig = 'other@example.com:Database Tuning:High query latency on Aurora';
  assert.strictEqual(isDuplicateSubmission(differentSig, 60000), false, 'Different submission is not a duplicate');
});

// ----------------------------------------------------
// 2. Test Contact Mailer Template Generation & Logic
// ----------------------------------------------------
console.log('\n--- TEST SUITE 2: Email Template Rendering & Security ---');

import { sendContactFormEmails } from '../src/lib/email/contact-mailer.ts';

await runAsyncTest('Mailer gracefully handles unconfigured SMTP credentials without crashing', async () => {
  const savedUser = process.env.SMTP_USER;
  const savedPass = process.env.SMTP_PASSWORD;
  delete process.env.SMTP_USER;
  delete process.env.SMTP_PASSWORD;

  const result = await sendContactFormEmails({
    firstName: 'Jane',
    lastName: 'Doe',
    workEmail: 'jane.doe@enterprise.com',
    phone: '+91 98765 43210',
    companyName: 'Acme Global',
    topic: 'Database Performance & Tuning',
    subject: 'High Latency Advisory',
    message: 'Need help optimizing PostgreSQL indexing and buffer pool.',
    referralSource: 'Industry Referral',
    formSource: 'contact_page',
    submittedAt: new Date(),
  });

  assert.strictEqual(result.skipped, true);
  assert.strictEqual(result.adminDelivered, false);
  assert.strictEqual(result.userDelivered, false);

  if (savedUser) process.env.SMTP_USER = savedUser;
  if (savedPass) process.env.SMTP_PASSWORD = savedPass;
});

// ----------------------------------------------------
// 3. Test Full Email Content & Mock SMTP Transport
// ----------------------------------------------------
console.log('\n--- TEST SUITE 3: Automated Dual Email Delivery Simulation ---');

await runAsyncTest('Dual email simulation verifies Admin and User email contents, Reply-To, and HTML escaping', async () => {
  /** @type {any[]} */
  const sentMails = [];

  const mockTransporter = {
    // @ts-ignore
    sendMail: async (mailOptions) => {
      sentMails.push(mailOptions);
      return { messageId: `msg-${Date.now()}` };
    },
  };

  process.env.SMTP_USER = 'notifications@zoftcorp.com';
  process.env.ADMIN_EMAIL = 'admin@zoftcorp.com';

  const testPayload = {
    firstName: 'Alice <script>alert(1)</script>',
    lastName: 'Smith',
    workEmail: 'alice.smith@cyberdyne.com\r\nbcc:hacker@evil.com',
    phone: '+1 (555) 019-2834',
    companyName: 'Cyberdyne & Sons Ltd.',
    topic: 'AI-Ready Architectures',
    subject: 'Vector DB & Hybrid Search Scaling',
    message: 'Hello Team,\nWe need low-latency similarity search.\nRegards,\nAlice',
    referralSource: 'Search Engine',
    formSource: 'contact_page',
    submittedAt: new Date('2026-11-10T10:00:00Z'),
  };

  // @ts-ignore
  const delivery = await sendContactFormEmails(testPayload, mockTransporter);

  assert.strictEqual(delivery.success, true);
  assert.strictEqual(delivery.adminDelivered, true);
  assert.strictEqual(delivery.userDelivered, true);
  assert.strictEqual(sentMails.length, 2, 'Exactly 2 emails should be dispatched (admin + user)');

  // 1. Verify Admin Notification Email
  const adminEmail = sentMails[0];
  assert.strictEqual(adminEmail.to, 'admin@zoftcorp.com');
  assert.strictEqual(adminEmail.subject, 'New Contact Form Enquiry Received');
  assert.ok(
    adminEmail.replyTo.includes('alice.smith@cyberdyne.com'),
    'Admin Reply-To must be the visitor email'
  );
  assert.ok(
    !adminEmail.replyTo.includes('\r') && !adminEmail.replyTo.includes('\n'),
    'Reply-To header must be sanitized against CRLF header injection'
  );

  // Verify Admin HTML Content
  assert.ok(adminEmail.html.includes('Alice &lt;script&gt;alert(1)&lt;/script&gt; Smith'), 'HTML must escape visitor name');
  assert.ok(adminEmail.html.includes('+1 (555) 019-2834'), 'Admin email must contain phone number');
  assert.ok(adminEmail.html.includes('Cyberdyne &amp; Sons Ltd.'), 'Admin email must contain escaped company name');
  assert.ok(adminEmail.html.includes('Vector DB &amp; Hybrid Search Scaling'), 'Admin email must contain subject');
  assert.ok(adminEmail.html.includes('Hello Team,<br />We need low-latency similarity search.'), 'Admin email must convert newlines in message');
  assert.ok(adminEmail.html.includes('Zoftcorp Website Enquiry'), 'Admin email must display Zoftcorp branding');

  // 2. Verify User Confirmation Email
  const userEmail = sentMails[1];
  assert.ok(userEmail.to.includes('alice.smith@cyberdyne.com'), 'User confirmation must be sent to visitor');
  assert.strictEqual(userEmail.subject, 'Thank You for Contacting Us!');
  assert.ok(userEmail.text.includes('Dear Alice <script>alert(1)</script>,'), 'Text version contains visitor name');
  assert.ok(userEmail.text.includes('Thank you for reaching out to us.'), 'Text contains required greeting');
  assert.ok(userEmail.text.includes('We have successfully received your enquiry.'), 'Text contains receipt confirmation');
  assert.ok(userEmail.text.includes('Our team appreciates your interest and will review your message. We will get back to you as soon as possible.'), 'Text contains response commitment');
  assert.ok(userEmail.text.includes('Thank you for considering us.'), 'Text contains consideration note');
  assert.ok(userEmail.text.includes('Zoftcorp Innovations Private Limited'), 'Text contains company signature');

  // Verify User HTML Content
  assert.ok(userEmail.html.includes('ZOFT'), 'HTML contains ZOFT brand header');
  assert.ok(userEmail.html.includes('Thank you for reaching out to us.'), 'HTML contains greeting');
  assert.ok(userEmail.html.includes('We have successfully received your enquiry.'), 'HTML contains receipt confirmation');
  assert.ok(userEmail.html.includes('Zoftcorp Innovations Private Limited'), 'HTML contains signature');

  delete process.env.SMTP_USER;
  delete process.env.ADMIN_EMAIL;
});

// ----------------------------------------------------
// 4. Test API Route HTTP Request handling
// ----------------------------------------------------
console.log('\n--- TEST SUITE 4: API Endpoint Validation & Security ---');

import http from 'node:http';

function makeRequest(path, method, body, clientIp = '10.0.0.1') {
  return new Promise((resolve, reject) => {
    const payload = body ? JSON.stringify(body) : '';
    const reqHeaders = {
      'x-forwarded-for': clientIp,
    };
    if (body) {
      reqHeaders['Content-Type'] = 'application/json';
      reqHeaders['Content-Length'] = Buffer.byteLength(payload);
    }

    const req = http.request(
      `http://localhost:3000${path}`,
      { method, headers: reqHeaders },
      (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
          let parsed;
          try {
            parsed = JSON.parse(data);
          } catch {
            parsed = data;
          }
          resolve({ status: res.statusCode, headers: res.headers, body: parsed });
        });
      }
    );

    req.on('error', reject);
    if (body) req.write(payload);
    req.end();
  });
}

await runAsyncTest('Honeypot spam is rejected with HTTP 400', async () => {
  const res = await makeRequest('/api/contact', 'POST', {
    firstName: 'SpamBot',
    lastName: 'User',
    workEmail: 'bot@spam.com',
    topic: 'Database Performance & Tuning',
    formSource: 'contact_page',
    website: 'https://malicious-link.com',
  }, '10.0.1.1');

  assert.strictEqual(res.status, 400);
  assert.strictEqual(res.body.error, 'Invalid submission.');
});

await runAsyncTest('Missing first name is rejected with HTTP 400', async () => {
  const res = await makeRequest('/api/contact', 'POST', {
    lastName: 'User',
    workEmail: 'user@company.com',
    topic: 'Database Performance & Tuning',
    formSource: 'contact_page',
  }, '10.0.1.2');

  assert.strictEqual(res.status, 400);
  assert.ok(res.body.error.includes('First name is required'));
});

await runAsyncTest('Missing last name is rejected with HTTP 400', async () => {
  const res = await makeRequest('/api/contact', 'POST', {
    firstName: 'User',
    workEmail: 'user@company.com',
    topic: 'Database Performance & Tuning',
    formSource: 'contact_page',
  }, '10.0.1.3');

  assert.strictEqual(res.status, 400);
  assert.ok(res.body.error.includes('Last name is required'));
});

await runAsyncTest('Invalid work email format is rejected with HTTP 400', async () => {
  const res = await makeRequest('/api/contact', 'POST', {
    firstName: 'User',
    lastName: 'Smith',
    workEmail: 'invalid-email-format',
    topic: 'Database Performance & Tuning',
    formSource: 'contact_page',
  }, '10.0.1.4');

  assert.strictEqual(res.status, 400);
  assert.ok(res.body.error.includes('valid corporate or work email'));
});

await runAsyncTest('Placeholder topic is rejected with HTTP 400', async () => {
  const res = await makeRequest('/api/contact', 'POST', {
    firstName: 'User',
    lastName: 'Smith',
    workEmail: 'user@company.com',
    topic: 'Select a topic *',
    formSource: 'contact_page',
  }, '10.0.1.5');

  assert.strictEqual(res.status, 400);
  assert.ok(res.body.error.includes('valid inquiry topic must be selected'));
});

await runAsyncTest('Rate limiter returns HTTP 429 when client IP exceeds 20 requests', async () => {
  const floodIp = '10.99.99.99';
  let got429 = false;

  for (let i = 0; i < 22; i++) {
    const res = await makeRequest('/api/contact', 'POST', {
      firstName: 'Flood',
      lastName: `Test${i}`,
      workEmail: `flood.${i}@example.com`,
      topic: 'Database Performance & Tuning',
      formSource: 'contact_page',
    }, floodIp);

    if (res.status === 429) {
      got429 = true;
      assert.ok(res.body.error.includes('Too many submissions'));
      break;
    }
  }

  assert.strictEqual(got429, true, 'Rate limiter must return HTTP 429 upon flooding');
});

await runAsyncTest('Duplicate submission within 60s is detected and handled cleanly', async () => {
  const dupIp = '10.88.88.88';
  const duplicatePayload = {
    firstName: 'Bruce',
    lastName: 'Wayne',
    workEmail: 'bruce@wayneenterprises.com',
    topic: 'Cloud & Database Strategy',
    message: 'High availability multi-cloud database deployment.',
    formSource: 'contact_page',
  };

  const res1 = await makeRequest('/api/contact', 'POST', duplicatePayload, dupIp);
  // First attempt returns either 200 (if DB configured) or 503 (if DB offline in test)
  assert.ok(res1.status === 200 || res1.status === 503);

  // Second immediate attempt must be recognized as duplicate and return friendly 200
  const res2 = await makeRequest('/api/contact', 'POST', duplicatePayload, dupIp);
  assert.strictEqual(res2.status, 200);
  assert.ok(res2.body.message.includes('already received'));
});

await runAsyncTest('Valid contact submission with optional phone and company is accepted', async () => {
  const uniqueId = Date.now();
  const res = await makeRequest('/api/contact', 'POST', {
    firstName: 'David',
    lastName: 'Miller',
    workEmail: `david.miller.${uniqueId}@enterprise-test.com`,
    phone: '+91 99887 76655',
    companyName: 'Apex Data Labs',
    topic: 'Cloud & Database Strategy',
    subject: 'Multi-region Database Strategy',
    message: 'Looking for advice on active-active SQL Server clusters and latency.',
    referralSource: 'Industry Referral',
    formSource: 'contact_page',
  }, `10.0.2.${uniqueId % 200}`);

  assert.ok(res.status === 200 || res.status === 503, `Expected HTTP 200 or 503, got ${res.status}`);
  if (res.status === 200) {
    assert.strictEqual(res.body.success, true);
    assert.ok(res.body.message.includes('Thank you'));
  }
});

console.log('\n====================================================');
if (failures === 0) {
  console.log('🎉 ALL DUAL EMAIL & CONTACT API TESTS PASSED! (0 failures)');
  console.log('====================================================\n');
  process.exit(0);
} else {
  console.error(`💥 TEST SUITE COMPLETED WITH ${failures} FAILURE(S).`);
  console.log('====================================================\n');
  process.exit(1);
}
