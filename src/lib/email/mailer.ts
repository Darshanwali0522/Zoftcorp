import nodemailer, { type Transporter } from 'nodemailer';

/**
 * Zoftcorp Centralized Email Notification Service
 * Sends automated dual email notifications for:
 * 1. Contact Us Form
 * 2. Career Application Form
 * 3. Partnership Inquiry Form
 *
 * Configured via Gmail SMTP and environment variables:
 * - ADMIN_NOTIFICATION_EMAIL: info@zoftcorp.com
 * - EMAIL_FROM: Verified sender address
 * - GMAIL_USER / GMAIL_APP_PASSWORD: For SMTP authentication
 */

// -----------------------------------------------------------------------------
// Interfaces
// -----------------------------------------------------------------------------

export interface ContactSubmissionEmailData {
  firstName: string;
  lastName: string;
  workEmail: string;
  phone?: string | null;
  companyName?: string | null;
  subject?: string | null;
  topic: string;
  message?: string | null;
  referralSource?: string | null;
  formSource?: string;
  submittedAt?: Date;
}

export interface CareerSubmissionEmailData {
  fullName: string;
  email: string;
  phone?: string | null;
  role: string;
  resumeStoragePath?: string | null;
  originalFilename?: string | null;
  fileSizeBytes?: number | null;
  notes?: string | null;
  submittedAt?: Date;
}

export interface PartnershipSubmissionEmailData {
  companyName: string;
  contactName: string;
  businessEmail: string;
  partnershipType: string;
  message: string;
  submittedAt?: Date;
}

export interface EmailDeliveryResult {
  success: boolean;
  adminDelivered: boolean;
  userDelivered: boolean;
  skipped?: boolean;
  error?: string;
}

// -----------------------------------------------------------------------------
// Helper Utilities
// -----------------------------------------------------------------------------

export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function sanitizeHeader(val: string): string {
  return val.replace(/[\r\n]+/g, ' ').trim();
}

/**
 * Log error without exposing visitor PII (strips email addresses and phone numbers)
 */
export function safeLog(context: string, err: unknown) {
  const msg = err instanceof Error ? err.message : String(err);
  const sanitized = msg
    .replace(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g, '[REDACTED_EMAIL]')
    .replace(/\+?[0-9\s\-()]{7,20}/g, '[REDACTED_PHONE]');
  console.error(`[Mailer] ${context}:`, sanitized);
}

export function getAdminNotificationEmail(): string {
  return (
    process.env.ADMIN_NOTIFICATION_EMAIL ||
    process.env.ADMIN_EMAIL ||
    'info@zoftcorp.com'
  ).trim();
}

export function getSenderEmail(): string {
  const fromEnv = (process.env.EMAIL_FROM || '').trim();
  if (fromEnv) return fromEnv;

  const authUser = (process.env.GMAIL_USER || process.env.SMTP_USER || 'info@zoftcorp.com').trim();
  return `"Zoftcorp" <${authUser}>`;
}

export function getMailTransporter(): Transporter | null {
  const user = (process.env.GMAIL_USER || process.env.SMTP_USER || 'info@zoftcorp.com').trim();
  const pass = (process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASSWORD || '').trim();

  if (!pass || pass === 'YOUR_GOOGLE_APP_PASSWORD' || pass.toLowerCase().includes('placeholder')) {
    return null;
  }

  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // STARTTLS
    auth: {
      user,
      pass,
    },
  });
}

function formatDate(d: Date = new Date()): string {
  return (
    d.toLocaleString('en-US', {
      dateStyle: 'full',
      timeStyle: 'long',
      timeZone: 'Asia/Kolkata',
    }) + ' (IST)'
  );
}

// -----------------------------------------------------------------------------
// 1. CONTACT US FORM EMAILS
// -----------------------------------------------------------------------------

export function renderContactAdminHtml(data: ContactSubmissionEmailData, dateStr: string): string {
  const fullName = escapeHtml(`${data.firstName} ${data.lastName}`.trim());
  const email = escapeHtml(data.workEmail);
  const phone = data.phone ? escapeHtml(data.phone) : 'Not provided';
  const company = data.companyName ? escapeHtml(data.companyName) : 'Not provided';
  const displaySubject = escapeHtml(data.subject || data.topic);
  const messageHtml = data.message
    ? escapeHtml(data.message).replace(/\n/g, '<br />')
    : '<em>No additional message provided.</em>';
  const referral = data.referralSource ? escapeHtml(data.referralSource) : 'Not specified';
  const source = data.formSource ? escapeHtml(data.formSource) : 'Website Form';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Enquiry Received</title>
  <style>
    body { margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b; }
    .email-container { max-width: 600px; margin: 24px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; }
    .header { background-color: #01153B; padding: 28px 32px; border-bottom: 3px solid #00B3FF; }
    .header h1 { margin: 0; color: #ffffff; font-size: 20px; font-weight: 700; }
    .header p { margin: 6px 0 0; color: #94a3b8; font-size: 13px; font-family: monospace; text-transform: uppercase; }
    .content { padding: 32px; }
    .badge { display: inline-block; padding: 4px 10px; background-color: #e0f2fe; color: #0369a1; border: 1px solid #bae6fd; border-radius: 9999px; font-size: 11px; font-weight: 700; font-family: monospace; text-transform: uppercase; margin-bottom: 16px; }
    .info-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .info-table th { text-align: left; padding: 10px 12px; background-color: #f8fafc; color: #475569; font-size: 12px; font-family: monospace; text-transform: uppercase; border-bottom: 1px solid #e2e8f0; width: 35%; }
    .info-table td { padding: 10px 12px; color: #0f172a; font-size: 14px; border-bottom: 1px solid #f1f5f9; }
    .message-box { background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #FF6F00; border-radius: 6px; padding: 16px; margin: 20px 0; }
    .message-title { margin: 0 0 8px; font-size: 12px; font-family: monospace; font-weight: 700; text-transform: uppercase; color: #475569; }
    .message-text { margin: 0; font-size: 14px; line-height: 1.6; color: #1e293b; }
    .footer { background-color: #f8fafc; padding: 20px 32px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; }
    .reply-tip { background-color: #eff6ff; border: 1px solid #bfdbfe; border-radius: 6px; padding: 10px 14px; font-size: 12px; color: #1e40af; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h1>Zoftcorp Website Enquiry</h1>
      <p>Contact Form Notification</p>
    </div>
    <div class="content">
      <span class="badge">Contact Enquiry</span>
      <h2 style="margin: 0 0 16px; font-size: 18px; color: #0f172a;">Topic: ${displaySubject}</h2>

      <table class="info-table" role="presentation">
        <tr><th>Visitor Name</th><td><strong>${fullName}</strong></td></tr>
        <tr><th>Email Address</th><td><a href="mailto:${email}" style="color: #0284c7;">${email}</a></td></tr>
        <tr><th>Phone Number</th><td>${phone}</td></tr>
        <tr><th>Company Name</th><td>${company}</td></tr>
        <tr><th>Subject / Topic</th><td>${displaySubject}</td></tr>
        <tr><th>Referral Source</th><td>${referral}</td></tr>
        <tr><th>Form Source</th><td>${source}</td></tr>
        <tr><th>Submission Time</th><td>${dateStr}</td></tr>
      </table>

      <div class="message-box">
        <p class="message-title">Enquiry Message</p>
        <div class="message-text">${messageHtml}</div>
      </div>

      <div class="reply-tip">
        <strong>Direct Reply:</strong> Click &ldquo;Reply&rdquo; in your email client to respond directly to <strong>${fullName}</strong> at <code>${email}</code>.
      </div>
    </div>
    <div class="footer">
      <p style="margin: 0;">Automated notification for Zoftcorp Administrators. &copy; ${new Date().getFullYear()} Zoftcorp Innovations Private Limited.</p>
    </div>
  </div>
</body>
</html>`;
}

export function renderContactUserHtml(data: ContactSubmissionEmailData): string {
  const visitorName = escapeHtml(data.firstName.trim());

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting Us!</title>
  <style>
    body { margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b; }
    .email-container { max-width: 600px; margin: 24px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; }
    .header { background-color: #01153B; padding: 32px; border-bottom: 3px solid #00B3FF; }
    .logo-text { color: #ffffff; font-size: 22px; font-weight: 800; margin: 0; }
    .logo-accent { color: #00B3FF; }
    .header p { margin: 6px 0 0; color: #94a3b8; font-size: 13px; font-family: monospace; }
    .content { padding: 36px 32px; line-height: 1.7; color: #334155; font-size: 15px; }
    .signature { margin-top: 28px; padding-top: 20px; border-top: 1px solid #e2e8f0; }
    .signature-name { font-weight: 700; color: #01153B; }
    .signature-company { color: #64748b; font-size: 13px; }
    .footer { background-color: #f8fafc; padding: 24px 32px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center; }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h1 class="logo-text">ZOFT<span class="logo-accent">CORP</span></h1>
      <p>Cloud &amp; Database Experts</p>
    </div>
    <div class="content">
      <p>Dear ${visitorName},</p>
      <p>Thank you for reaching out to us.</p>
      <p>We have successfully received your enquiry. Our team appreciates your interest and will review your message. We will get back to you as soon as possible.</p>
      <p>Thank you for considering us.</p>
      <div class="signature">
        <p style="margin: 0 0 4px; color: #64748b; font-size: 13px;">Best Regards,</p>
        <div class="signature-name">Zoftcorp Team</div>
        <div class="signature-company">Zoftcorp Innovations Private Limited</div>
      </div>
    </div>
    <div class="footer">
      <p style="margin: 0 0 6px;"><strong>Zoftcorp Innovations Private Limited</strong></p>
      <p style="margin: 0;">Bengaluru, Karnataka, India &bull; info@zoftcorp.com</p>
    </div>
  </div>
</body>
</html>`;
}

export async function sendContactFormEmails(
  data: ContactSubmissionEmailData,
  injectedTransporter?: Transporter | null
): Promise<EmailDeliveryResult> {
  const transporter = injectedTransporter !== undefined ? injectedTransporter : getMailTransporter();

  if (!transporter) {
    console.warn('[Mailer] SMTP credentials are not configured. Contact form automated emails skipped.');
    return {
      success: true,
      adminDelivered: false,
      userDelivered: false,
      skipped: true,
      error: 'SMTP credentials not configured',
    };
  }

  const adminEmail = getAdminNotificationEmail();
  const sender = getSenderEmail();
  const submissionDate = data.submittedAt || new Date();
  const dateStr = formatDate(submissionDate);

  const visitorFullName = sanitizeHeader(`${data.firstName} ${data.lastName}`.trim());
  const visitorEmail = sanitizeHeader(data.workEmail);

  let adminDelivered = false;
  let userDelivered = false;
  let lastError: string | undefined;

  // 1. Admin Notification
  try {
    await transporter.sendMail({
      from: sender,
      to: adminEmail,
      replyTo: `${visitorFullName} <${visitorEmail}>`,
      subject: 'New Contact Form Enquiry Received',
      text: `NEW CONTACT FORM ENQUIRY RECEIVED\n\nName: ${visitorFullName}\nEmail: ${data.workEmail}\nPhone: ${data.phone || 'Not provided'}\nCompany: ${data.companyName || 'Not provided'}\nSubject: ${data.subject || data.topic}\nDate/Time: ${dateStr}\n\nMessage:\n${data.message || 'None'}\n`,
      html: renderContactAdminHtml(data, dateStr),
    });
    adminDelivered = true;
    console.log(`[Mailer] Contact admin notification sent to ${adminEmail}`);
  } catch (err) {
    safeLog('Failed to send contact admin email', err);
    lastError = 'Failed to deliver admin notification';
  }

  // 2. User Confirmation
  try {
    await transporter.sendMail({
      from: sender,
      to: visitorEmail,
      subject: 'Thank You for Contacting Us!',
      text: `Dear ${data.firstName.trim()},\n\nThank you for reaching out to us.\n\nWe have successfully received your enquiry. Our team appreciates your interest and will review your message. We will get back to you as soon as possible.\n\nThank you for considering us.\n\nBest Regards,\nZoftcorp Innovations Private Limited\n`,
      html: renderContactUserHtml(data),
    });
    userDelivered = true;
    console.log(`[Mailer] Contact user confirmation sent to visitor email`);
  } catch (err) {
    safeLog('Failed to send contact user confirmation', err);
    lastError = lastError ? `${lastError} | User confirmation failed` : 'User confirmation failed';
  }

  return {
    success: adminDelivered && userDelivered,
    adminDelivered,
    userDelivered,
    error: lastError,
  };
}

// -----------------------------------------------------------------------------
// 2. CAREER APPLICATION FORM EMAILS
// -----------------------------------------------------------------------------

export function renderCareerAdminHtml(data: CareerSubmissionEmailData, dateStr: string): string {
  const fullName = escapeHtml(data.fullName);
  const email = escapeHtml(data.email);
  const phone = data.phone ? escapeHtml(data.phone) : 'Not provided';
  const role = escapeHtml(data.role);
  const originalFile = data.originalFilename ? escapeHtml(data.originalFilename) : 'Uploaded Document';
  const storagePath = data.resumeStoragePath ? escapeHtml(data.resumeStoragePath) : 'Secure Supabase Storage';
  const fileSize = data.fileSizeBytes ? `${(data.fileSizeBytes / 1024).toFixed(1)} KB` : 'Attached via portal';
  const notesHtml = data.notes
    ? escapeHtml(data.notes).replace(/\n/g, '<br />')
    : '<em>No additional cover notes provided.</em>';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Career Application Received</title>
  <style>
    body { margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b; }
    .email-container { max-width: 600px; margin: 24px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; }
    .header { background-color: #01153B; padding: 28px 32px; border-bottom: 3px solid #00B3FF; }
    .header h1 { margin: 0; color: #ffffff; font-size: 20px; font-weight: 700; }
    .header p { margin: 6px 0 0; color: #94a3b8; font-size: 13px; font-family: monospace; text-transform: uppercase; }
    .content { padding: 32px; }
    .badge { display: inline-block; padding: 4px 10px; background-color: #e0f2fe; color: #0369a1; border: 1px solid #bae6fd; border-radius: 9999px; font-size: 11px; font-weight: 700; font-family: monospace; text-transform: uppercase; margin-bottom: 16px; }
    .info-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .info-table th { text-align: left; padding: 10px 12px; background-color: #f8fafc; color: #475569; font-size: 12px; font-family: monospace; text-transform: uppercase; border-bottom: 1px solid #e2e8f0; width: 35%; }
    .info-table td { padding: 10px 12px; color: #0f172a; font-size: 14px; border-bottom: 1px solid #f1f5f9; }
    .resume-box { background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #00B3FF; border-radius: 6px; padding: 16px; margin: 20px 0; }
    .resume-title { margin: 0 0 6px; font-size: 12px; font-family: monospace; font-weight: 700; text-transform: uppercase; color: #0369a1; }
    .notes-box { background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 14px; margin: 16px 0; }
    .footer { background-color: #f8fafc; padding: 20px 32px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h1>New Career Application</h1>
      <p>Role: ${role}</p>
    </div>
    <div class="content">
      <span class="badge">Job Application</span>
      <h2 style="margin: 0 0 16px; font-size: 18px; color: #0f172a;">Candidate: ${fullName}</h2>

      <table class="info-table" role="presentation">
        <tr><th>Candidate Name</th><td><strong>${fullName}</strong></td></tr>
        <tr><th>Email Address</th><td><a href="mailto:${email}" style="color: #0284c7;">${email}</a></td></tr>
        <tr><th>Phone Number</th><td>${phone}</td></tr>
        <tr><th>Applied Role</th><td><strong>${role}</strong></td></tr>
        <tr><th>Application Time</th><td>${dateStr}</td></tr>
      </table>

      <div class="resume-box">
        <p class="resume-title">Resume / CV Information</p>
        <p style="margin: 0 0 6px; font-size: 13px; color: #334155;"><strong>Original File:</strong> ${originalFile} (${fileSize})</p>
        <p style="margin: 0; font-size: 12px; font-family: monospace; color: #64748b;"><strong>Storage Reference:</strong> ${storagePath}</p>
        <p style="margin: 8px 0 0; font-size: 12px; color: #64748b;"><em>Note: In accordance with security policies, resume files are stored directly in the private Supabase resumes vault and accessible via the Zoftcorp Admin Portal.</em></p>
      </div>

      <div class="notes-box">
        <p style="margin: 0 0 6px; font-size: 12px; font-family: monospace; font-weight: 700; text-transform: uppercase; color: #475569;">Candidate Cover Notes</p>
        <div style="font-size: 13px; line-height: 1.6; color: #1e293b;">${notesHtml}</div>
      </div>
    </div>
    <div class="footer">
      <p style="margin: 0;">Automated notification for Zoftcorp Talent Acquisition. &copy; ${new Date().getFullYear()} Zoftcorp Innovations Private Limited.</p>
    </div>
  </div>
</body>
</html>`;
}

export function renderCareerUserHtml(data: CareerSubmissionEmailData): string {
  const candidateName = escapeHtml(data.fullName.split(' ')[0] || data.fullName);
  const role = escapeHtml(data.role);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Application Received – Zoftcorp Careers</title>
  <style>
    body { margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b; }
    .email-container { max-width: 600px; margin: 24px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; }
    .header { background-color: #01153B; padding: 32px; border-bottom: 3px solid #00B3FF; }
    .logo-text { color: #ffffff; font-size: 22px; font-weight: 800; margin: 0; }
    .logo-accent { color: #00B3FF; }
    .content { padding: 36px 32px; line-height: 1.7; color: #334155; font-size: 15px; }
    .signature { margin-top: 28px; padding-top: 20px; border-top: 1px solid #e2e8f0; }
    .signature-name { font-weight: 700; color: #01153B; }
    .signature-company { color: #64748b; font-size: 13px; }
    .footer { background-color: #f8fafc; padding: 24px 32px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center; }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h1 class="logo-text">ZOFT<span class="logo-accent">CORP</span></h1>
      <p style="margin: 6px 0 0; color: #94a3b8; font-size: 13px; font-family: monospace;">Talent Acquisition</p>
    </div>
    <div class="content">
      <p>Dear ${candidateName},</p>
      <p>Thank you for your interest in joining Zoftcorp.</p>
      <p>We have successfully received your application for the <strong>${role}</strong> position. Our technical recruitment team is reviewing your profile and qualifications against our current opportunities.</p>
      <p>If your background aligns with our requirements, we will reach out to discuss the next steps in our hiring process.</p>
      <p>Thank you for considering Zoftcorp as the next step in your career.</p>
      <div class="signature">
        <p style="margin: 0 0 4px; color: #64748b; font-size: 13px;">Best Regards,</p>
        <div class="signature-name">Zoftcorp Talent Acquisition Team</div>
        <div class="signature-company">Zoftcorp Innovations Private Limited</div>
      </div>
    </div>
    <div class="footer">
      <p style="margin: 0 0 6px;"><strong>Zoftcorp Innovations Private Limited</strong></p>
      <p style="margin: 0;">Bengaluru, Karnataka, India &bull; info@zoftcorp.com</p>
    </div>
  </div>
</body>
</html>`;
}

export async function sendCareerApplicationEmails(
  data: CareerSubmissionEmailData,
  injectedTransporter?: Transporter | null
): Promise<EmailDeliveryResult> {
  const transporter = injectedTransporter !== undefined ? injectedTransporter : getMailTransporter();

  if (!transporter) {
    console.warn('[Mailer] SMTP credentials are not configured. Career application automated emails skipped.');
    return {
      success: true,
      adminDelivered: false,
      userDelivered: false,
      skipped: true,
      error: 'SMTP credentials not configured',
    };
  }

  const adminEmail = getAdminNotificationEmail();
  const sender = getSenderEmail();
  const submissionDate = data.submittedAt || new Date();
  const dateStr = formatDate(submissionDate);

  const candidateFullName = sanitizeHeader(data.fullName);
  const candidateEmail = sanitizeHeader(data.email);

  let adminDelivered = false;
  let userDelivered = false;
  let lastError: string | undefined;

  // 1. Admin Notification (No attachments - includes storage path and details instead)
  try {
    await transporter.sendMail({
      from: sender,
      to: adminEmail,
      replyTo: `${candidateFullName} <${candidateEmail}>`,
      subject: `New Career Application Received - ${sanitizeHeader(data.role)}`,
      text: `NEW CAREER APPLICATION RECEIVED\n\nCandidate: ${candidateFullName}\nEmail: ${data.email}\nPhone: ${data.phone || 'Not provided'}\nRole: ${data.role}\nResume File: ${data.originalFilename || 'Uploaded'} (Storage: ${data.resumeStoragePath || 'N/A'})\nDate/Time: ${dateStr}\n\nCover Notes:\n${data.notes || 'None'}\n`,
      html: renderCareerAdminHtml(data, dateStr),
    });
    adminDelivered = true;
    console.log(`[Mailer] Career admin notification sent to ${adminEmail}`);
  } catch (err) {
    safeLog('Failed to send career admin email', err);
    lastError = 'Failed to deliver admin notification';
  }

  // 2. Candidate Acknowledgement
  try {
    await transporter.sendMail({
      from: sender,
      to: candidateEmail,
      subject: 'Application Received – Zoftcorp Careers',
      text: `Dear ${data.fullName.split(' ')[0] || data.fullName},\n\nThank you for your interest in joining Zoftcorp.\n\nWe have successfully received your application for the ${data.role} position. Our technical recruitment team is reviewing your profile and qualifications.\n\nIf your background aligns with our requirements, we will reach out to discuss the next steps.\n\nBest Regards,\nZoftcorp Talent Acquisition Team\nZoftcorp Innovations Private Limited\n`,
      html: renderCareerUserHtml(data),
    });
    userDelivered = true;
    console.log(`[Mailer] Career user acknowledgement sent to applicant email`);
  } catch (err) {
    safeLog('Failed to send career candidate acknowledgement', err);
    lastError = lastError ? `${lastError} | Candidate email failed` : 'Candidate email failed';
  }

  return {
    success: adminDelivered && userDelivered,
    adminDelivered,
    userDelivered,
    error: lastError,
  };
}

// -----------------------------------------------------------------------------
// 3. PARTNERSHIP INQUIRY FORM EMAILS
// -----------------------------------------------------------------------------

export function renderPartnershipAdminHtml(data: PartnershipSubmissionEmailData, dateStr: string): string {
  const company = escapeHtml(data.companyName);
  const contactName = escapeHtml(data.contactName);
  const email = escapeHtml(data.businessEmail);
  const type = escapeHtml(data.partnershipType);
  const messageHtml = escapeHtml(data.message).replace(/\n/g, '<br />');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Strategic Partnership Inquiry Received</title>
  <style>
    body { margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b; }
    .email-container { max-width: 600px; margin: 24px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; }
    .header { background-color: #01153B; padding: 28px 32px; border-bottom: 3px solid #00B3FF; }
    .header h1 { margin: 0; color: #ffffff; font-size: 20px; font-weight: 700; }
    .header p { margin: 6px 0 0; color: #94a3b8; font-size: 13px; font-family: monospace; text-transform: uppercase; }
    .content { padding: 32px; }
    .badge { display: inline-block; padding: 4px 10px; background-color: #fef3c7; color: #92400e; border: 1px solid #fde68a; border-radius: 9999px; font-size: 11px; font-weight: 700; font-family: monospace; text-transform: uppercase; margin-bottom: 16px; }
    .info-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .info-table th { text-align: left; padding: 10px 12px; background-color: #f8fafc; color: #475569; font-size: 12px; font-family: monospace; text-transform: uppercase; border-bottom: 1px solid #e2e8f0; width: 35%; }
    .info-table td { padding: 10px 12px; color: #0f172a; font-size: 14px; border-bottom: 1px solid #f1f5f9; }
    .message-box { background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #FF6F00; border-radius: 6px; padding: 16px; margin: 20px 0; }
    .footer { background-color: #f8fafc; padding: 20px 32px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h1>New Partnership Inquiry</h1>
      <p>Company: ${company}</p>
    </div>
    <div class="content">
      <span class="badge">Strategic Partnership</span>
      <h2 style="margin: 0 0 16px; font-size: 18px; color: #0f172a;">Ecosystem Area: ${type}</h2>

      <table class="info-table" role="presentation">
        <tr><th>Company Name</th><td><strong>${company}</strong></td></tr>
        <tr><th>Contact Person</th><td>${contactName}</td></tr>
        <tr><th>Business Email</th><td><a href="mailto:${email}" style="color: #0284c7;">${email}</a></td></tr>
        <tr><th>Partnership Type</th><td><strong>${type}</strong></td></tr>
        <tr><th>Submission Time</th><td>${dateStr}</td></tr>
      </table>

      <div class="message-box">
        <p style="margin: 0 0 8px; font-size: 12px; font-family: monospace; font-weight: 700; text-transform: uppercase; color: #475569;">Partnership Objectives</p>
        <div style="font-size: 14px; line-height: 1.6; color: #1e293b;">${messageHtml}</div>
      </div>
    </div>
    <div class="footer">
      <p style="margin: 0;">Automated notification for Zoftcorp Strategic Alliances. &copy; ${new Date().getFullYear()} Zoftcorp Innovations Private Limited.</p>
    </div>
  </div>
</body>
</html>`;
}

export function renderPartnershipUserHtml(data: PartnershipSubmissionEmailData): string {
  const contactName = escapeHtml(data.contactName);
  const company = escapeHtml(data.companyName);
  const type = escapeHtml(data.partnershipType);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Partnership Inquiry Received – Zoftcorp</title>
  <style>
    body { margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b; }
    .email-container { max-width: 600px; margin: 24px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; }
    .header { background-color: #01153B; padding: 32px; border-bottom: 3px solid #00B3FF; }
    .logo-text { color: #ffffff; font-size: 22px; font-weight: 800; margin: 0; }
    .logo-accent { color: #00B3FF; }
    .content { padding: 36px 32px; line-height: 1.7; color: #334155; font-size: 15px; }
    .signature { margin-top: 28px; padding-top: 20px; border-top: 1px solid #e2e8f0; }
    .signature-name { font-weight: 700; color: #01153B; }
    .signature-company { color: #64748b; font-size: 13px; }
    .footer { background-color: #f8fafc; padding: 24px 32px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center; }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h1 class="logo-text">ZOFT<span class="logo-accent">CORP</span></h1>
      <p style="margin: 6px 0 0; color: #94a3b8; font-size: 13px; font-family: monospace;">Strategic Alliances</p>
    </div>
    <div class="content">
      <p>Dear ${contactName},</p>
      <p>Thank you for your interest in partnering with Zoftcorp.</p>
      <p>We have successfully received your inquiry regarding <strong>${type}</strong> collaboration for <strong>${company}</strong>. Our strategic alliances team will review your proposal and get in touch to explore synergies.</p>
      <p>Thank you for reaching out to us.</p>
      <div class="signature">
        <p style="margin: 0 0 4px; color: #64748b; font-size: 13px;">Best Regards,</p>
        <div class="signature-name">Zoftcorp Strategic Alliances Team</div>
        <div class="signature-company">Zoftcorp Innovations Private Limited</div>
      </div>
    </div>
    <div class="footer">
      <p style="margin: 0 0 6px;"><strong>Zoftcorp Innovations Private Limited</strong></p>
      <p style="margin: 0;">Bengaluru, Karnataka, India &bull; info@zoftcorp.com</p>
    </div>
  </div>
</body>
</html>`;
}

export async function sendPartnershipEmails(
  data: PartnershipSubmissionEmailData,
  injectedTransporter?: Transporter | null
): Promise<EmailDeliveryResult> {
  const transporter = injectedTransporter !== undefined ? injectedTransporter : getMailTransporter();

  if (!transporter) {
    console.warn('[Mailer] SMTP credentials are not configured. Partnership automated emails skipped.');
    return {
      success: true,
      adminDelivered: false,
      userDelivered: false,
      skipped: true,
      error: 'SMTP credentials not configured',
    };
  }

  const adminEmail = getAdminNotificationEmail();
  const sender = getSenderEmail();
  const submissionDate = data.submittedAt || new Date();
  const dateStr = formatDate(submissionDate);

  const contactPerson = sanitizeHeader(data.contactName);
  const businessEmail = sanitizeHeader(data.businessEmail);

  let adminDelivered = false;
  let userDelivered = false;
  let lastError: string | undefined;

  // 1. Admin Notification
  try {
    await transporter.sendMail({
      from: sender,
      to: adminEmail,
      replyTo: `${contactPerson} <${businessEmail}>`,
      subject: 'New Strategic Partnership Inquiry Received',
      text: `NEW STRATEGIC PARTNERSHIP INQUIRY\n\nCompany: ${data.companyName}\nContact: ${contactPerson}\nEmail: ${businessEmail}\nPartnership Type: ${data.partnershipType}\nDate/Time: ${dateStr}\n\nObjectives / Message:\n${data.message}\n`,
      html: renderPartnershipAdminHtml(data, dateStr),
    });
    adminDelivered = true;
    console.log(`[Mailer] Partnership admin notification sent to ${adminEmail}`);
  } catch (err) {
    safeLog('Failed to send partnership admin email', err);
    lastError = 'Failed to deliver admin notification';
  }

  // 2. Partner Acknowledgement
  try {
    await transporter.sendMail({
      from: sender,
      to: businessEmail,
      subject: 'Partnership Inquiry Received – Zoftcorp',
      text: `Dear ${data.contactName},\n\nThank you for your interest in partnering with Zoftcorp.\n\nWe have successfully received your inquiry regarding ${data.partnershipType} collaboration for ${data.companyName}. Our strategic alliances team will review your proposal and get in touch.\n\nBest Regards,\nZoftcorp Strategic Alliances Team\nZoftcorp Innovations Private Limited\n`,
      html: renderPartnershipUserHtml(data),
    });
    userDelivered = true;
    console.log(`[Mailer] Partnership user acknowledgement sent to business email`);
  } catch (err) {
    safeLog('Failed to send partnership partner acknowledgement', err);
    lastError = lastError ? `${lastError} | Partner email failed` : 'Partner email failed';
  }

  return {
    success: adminDelivered && userDelivered,
    adminDelivered,
    userDelivered,
    error: lastError,
  };
}
