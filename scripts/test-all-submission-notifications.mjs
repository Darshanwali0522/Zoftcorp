// @ts-check
import assert from 'node:assert';

console.log('================================================================');
console.log('ZOFTCORP ALL FORMS DUAL EMAIL NOTIFICATIONS TEST');
console.log('Admin Target: info@zoftcorp.com');
console.log('Forms: Contact Us, Career Application, Partnership Inquiry');
console.log('================================================================\n');

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

import {
  sendContactFormEmails,
  sendCareerApplicationEmails,
  sendPartnershipEmails,
  getAdminNotificationEmail,
  getSenderEmail,
  safeLog,
} from '../src/lib/email/mailer.ts';

// -----------------------------------------------------------------------------
// TEST SUITE 1: Configuration & Safe Logging
// -----------------------------------------------------------------------------
console.log('--- TEST SUITE 1: Configuration & Privacy Safe Logging ---');

runTest('Admin notification email defaults strictly to info@zoftcorp.com', () => {
  const original = process.env.ADMIN_NOTIFICATION_EMAIL;
  delete process.env.ADMIN_NOTIFICATION_EMAIL;
  delete process.env.ADMIN_EMAIL;

  const adminEmail = getAdminNotificationEmail();
  assert.strictEqual(adminEmail, 'info@zoftcorp.com');

  if (original) process.env.ADMIN_NOTIFICATION_EMAIL = original;
});

runTest('Admin notification email respects ADMIN_NOTIFICATION_EMAIL env var', () => {
  process.env.ADMIN_NOTIFICATION_EMAIL = 'info@zoftcorp.com';
  assert.strictEqual(getAdminNotificationEmail(), 'info@zoftcorp.com');
});

runTest('Sender email respects EMAIL_FROM and GMAIL_USER env vars', () => {
  process.env.EMAIL_FROM = 'Zoftcorp Alliances <alliances@zoftcorp.com>';
  assert.strictEqual(getSenderEmail(), 'Zoftcorp Alliances <alliances@zoftcorp.com>');

  delete process.env.EMAIL_FROM;
  process.env.GMAIL_USER = 'system@zoftcorp.com';
  assert.strictEqual(getSenderEmail(), '"Zoftcorp" <system@zoftcorp.com>');

  delete process.env.GMAIL_USER;
});

runTest('Safe logging sanitizes emails and phone numbers from logs', () => {
  let captured = '';
  const originalErr = console.error;
  console.error = (...args) => { captured = args.join(' '); };

  safeLog('Delivery failure', new Error('Failed to send to confidential.user@secretcorp.com via +91 99887 76655'));
  console.error = originalErr;

  assert.ok(!captured.includes('confidential.user@secretcorp.com'), 'Email must be redacted');
  assert.ok(!captured.includes('99887 76655'), 'Phone must be redacted');
  assert.ok(captured.includes('[REDACTED_EMAIL]'), 'Redaction placeholder must be present');
});

// -----------------------------------------------------------------------------
// TEST SUITE 2: Contact Us Form Dual Emails
// -----------------------------------------------------------------------------
console.log('\n--- TEST SUITE 2: Contact Us Form Dual Emails ---');

await runAsyncTest('Contact Us triggers admin email to info@zoftcorp.com and user acknowledgement', async () => {
  /** @type {any[]} */
  const sent = [];
  const mockTransporter = {
    // @ts-ignore
    sendMail: async (opts) => {
      sent.push(opts);
      return { messageId: 'contact-test-1' };
    },
  };

  process.env.ADMIN_NOTIFICATION_EMAIL = 'info@zoftcorp.com';
  process.env.GMAIL_USER = 'smtp-account@gmail.com';

  const payload = {
    firstName: 'Marcus',
    lastName: 'Vance',
    workEmail: 'marcus.vance@vancetech.com',
    phone: '+1 415 555 2671',
    companyName: 'Vance Technologies',
    topic: 'Database Performance & Tuning',
    subject: 'PostgreSQL Aurora Performance Audit',
    message: 'We are experiencing 250ms p99 latency during peak transaction hours.',
    referralSource: 'Industry Referral',
    formSource: 'contact_page',
    submittedAt: new Date('2026-11-10T10:30:00Z'),
  };

  // @ts-ignore
  const result = await sendContactFormEmails(payload, mockTransporter);

  assert.strictEqual(result.success, true);
  assert.strictEqual(sent.length, 2, 'Must dispatch exactly 2 emails');

  // Admin Notification
  const adminMail = sent[0];
  assert.strictEqual(adminMail.to, 'info@zoftcorp.com');
  assert.strictEqual(adminMail.subject, 'New Contact Form Enquiry Received');
  assert.ok(adminMail.replyTo.includes('marcus.vance@vancetech.com'));
  assert.ok(adminMail.html.includes('Marcus Vance'));
  assert.ok(adminMail.html.includes('+1 415 555 2671'));
  assert.ok(adminMail.html.includes('Vance Technologies'));
  assert.ok(adminMail.html.includes('PostgreSQL Aurora Performance Audit'));
  assert.ok(adminMail.html.includes('250ms p99 latency'));

  // User Confirmation
  const userMail = sent[1];
  assert.strictEqual(userMail.to, 'marcus.vance@vancetech.com');
  assert.strictEqual(userMail.subject, 'Thank You for Contacting Us!');
  assert.ok(userMail.html.includes('Dear Marcus'));
  assert.ok(userMail.html.includes('Thank you for reaching out to us.'));
  assert.ok(userMail.html.includes('We have successfully received your enquiry.'));
  assert.ok(userMail.text.includes('Best Regards,\nZoftcorp Innovations Private Limited'));
});

// -----------------------------------------------------------------------------
// TEST SUITE 3: Career Application Form Dual Emails
// -----------------------------------------------------------------------------
console.log('\n--- TEST SUITE 3: Career Application Form Dual Emails ---');

await runAsyncTest('Career Application triggers admin email to info@zoftcorp.com without attaching resume', async () => {
  /** @type {any[]} */
  const sent = [];
  const mockTransporter = {
    // @ts-ignore
    sendMail: async (opts) => {
      sent.push(opts);
      return { messageId: 'career-test-1' };
    },
  };

  const careerPayload = {
    fullName: 'Elena Rostova',
    email: 'elena.rostova@engineer.dev',
    phone: '+44 20 7946 0912',
    role: 'Lead Cloud & Database Architect',
    resumeStoragePath: 'resumes/resume_1792683204779_uuid.pdf',
    originalFilename: 'Elena_Rostova_Staff_DBA_CV.pdf',
    fileSizeBytes: 245000,
    notes: 'Over 12 years of hands-on experience optimizing mission-critical SQL Server and PostgreSQL fleets.',
    submittedAt: new Date('2026-11-10T10:35:00Z'),
  };

  // @ts-ignore
  const result = await sendCareerApplicationEmails(careerPayload, mockTransporter);

  assert.strictEqual(result.success, true);
  assert.strictEqual(sent.length, 2, 'Must dispatch exactly 2 emails');

  // Admin Notification
  const adminMail = sent[0];
  assert.strictEqual(adminMail.to, 'info@zoftcorp.com');
  assert.strictEqual(adminMail.subject, 'New Career Application Received - Lead Cloud & Database Architect');
  assert.ok(adminMail.replyTo.includes('elena.rostova@engineer.dev'));
  assert.ok(!adminMail.attachments || adminMail.attachments.length === 0, 'CRITICAL: Resumes must NOT be attached to emails');
  assert.ok(adminMail.html.includes('Elena Rostova'));
  assert.ok(adminMail.html.includes('Elena_Rostova_Staff_DBA_CV.pdf'));
  assert.ok(adminMail.html.includes('resumes/resume_1792683204779_uuid.pdf'));
  assert.ok(adminMail.html.includes('Lead Cloud &amp; Database Architect'));

  // Candidate Acknowledgement
  const userMail = sent[1];
  assert.strictEqual(userMail.to, 'elena.rostova@engineer.dev');
  assert.strictEqual(userMail.subject, 'Application Received – Zoftcorp Careers');
  assert.ok(userMail.html.includes('Dear Elena'));
  assert.ok(userMail.html.includes('Lead Cloud &amp; Database Architect'));
  assert.ok(userMail.text.includes('Zoftcorp Talent Acquisition Team'));
});

// -----------------------------------------------------------------------------
// TEST SUITE 4: Partnership Inquiry Form Dual Emails
// -----------------------------------------------------------------------------
console.log('\n--- TEST SUITE 4: Partnership Inquiry Form Dual Emails ---');

await runAsyncTest('Partnership Inquiry triggers admin email to info@zoftcorp.com and partner confirmation', async () => {
  /** @type {any[]} */
  const sent = [];
  const mockTransporter = {
    // @ts-ignore
    sendMail: async (opts) => {
      sent.push(opts);
      return { messageId: 'partner-test-1' };
    },
  };

  const partnerPayload = {
    companyName: 'Apex Cloud Solutions GmbH',
    contactName: 'Hans Gruber',
    businessEmail: 'hans.gruber@apexcloud.de',
    partnershipType: 'Cloud Reseller & Co-Sell',
    message: 'We are expanding our managed cloud offering across DACH and would like to partner for specialized DBA delivery.',
    submittedAt: new Date('2026-11-10T10:40:00Z'),
  };

  // @ts-ignore
  const result = await sendPartnershipEmails(partnerPayload, mockTransporter);

  assert.strictEqual(result.success, true);
  assert.strictEqual(sent.length, 2, 'Must dispatch exactly 2 emails');

  // Admin Notification
  const adminMail = sent[0];
  assert.strictEqual(adminMail.to, 'info@zoftcorp.com');
  assert.strictEqual(adminMail.subject, 'New Strategic Partnership Inquiry Received');
  assert.ok(adminMail.replyTo.includes('hans.gruber@apexcloud.de'));
  assert.ok(adminMail.html.includes('Apex Cloud Solutions GmbH'));
  assert.ok(adminMail.html.includes('Hans Gruber'));
  assert.ok(adminMail.html.includes('Cloud Reseller &amp; Co-Sell'));

  // Partner Acknowledgement
  const userMail = sent[1];
  assert.strictEqual(userMail.to, 'hans.gruber@apexcloud.de');
  assert.strictEqual(userMail.subject, 'Partnership Inquiry Received – Zoftcorp');
  assert.ok(userMail.html.includes('Dear Hans Gruber'));
  assert.ok(userMail.html.includes('Cloud Reseller &amp; Co-Sell'));
  assert.ok(userMail.text.includes('Zoftcorp Strategic Alliances Team'));
});

// -----------------------------------------------------------------------------
// TEST SUITE 5: Failure Resilience (Email Delivery Failures Do Not Break Forms)
// -----------------------------------------------------------------------------
console.log('\n--- TEST SUITE 5: Email Delivery Failure Resilience ---');

await runAsyncTest('Failing transporter does not crash application or throw unhandled exceptions', async () => {
  const brokenTransporter = {
    // @ts-ignore
    sendMail: async () => {
      throw new Error('SMTP Connection timeout to smtp.gmail.com:587');
    },
  };

  // @ts-ignore
  const contactRes = await sendContactFormEmails({
    firstName: 'Test',
    lastName: 'Fallback',
    workEmail: 'test@fallback.com',
    topic: 'Database Tuning',
  }, brokenTransporter);

  assert.strictEqual(contactRes.success, false);
  assert.strictEqual(contactRes.adminDelivered, false);
  assert.strictEqual(contactRes.userDelivered, false);
  assert.ok(contactRes.error, 'Error message is returned safely');

  // @ts-ignore
  const careerRes = await sendCareerApplicationEmails({
    fullName: 'Test Candidate',
    email: 'candidate@test.com',
    role: 'Database Engineer',
  }, brokenTransporter);

  assert.strictEqual(careerRes.success, false);
  assert.strictEqual(careerRes.adminDelivered, false);

  // @ts-ignore
  const partnerRes = await sendPartnershipEmails({
    companyName: 'Partner Corp',
    contactName: 'Contact Person',
    businessEmail: 'contact@partner.com',
    partnershipType: 'Consulting & Advisory Network',
    message: 'Testing fallback resilience.',
  }, brokenTransporter);

  assert.strictEqual(partnerRes.success, false);
  assert.strictEqual(partnerRes.adminDelivered, false);
});

console.log('\n================================================================');
if (failures === 0) {
  console.log('🎉 ALL THREE FORM NOTIFICATION TESTS PASSED! (0 failures)');
  console.log('================================================================\n');
  process.exit(0);
} else {
  console.error(`💥 TEST SUITE COMPLETED WITH ${failures} FAILURE(S).`);
  console.log('================================================================\n');
  process.exit(1);
}
