import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseServerClient } from '@/lib/supabase/server';
import { sendContactFormEmails } from '@/lib/email/mailer';
import { checkRateLimit, isDuplicateSubmission } from '@/lib/rate-limiter';

const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const VALID_FORM_SOURCES = new Set(['contact_page', 'homepage_section']);

interface ValidatedContactPayload {
  firstName: string;
  lastName: string;
  workEmail: string;
  phone: string | null;
  companyName: string | null;
  subject: string | null;
  topic: string;
  message: string | null;
  referralSource: string | null;
  formSource: 'contact_page' | 'homepage_section';
}

function sanitizeString(val: unknown, maxLen: number): string | null {
  if (typeof val !== 'string') return null;
  const trimmed = val.trim();
  if (trimmed.length === 0) return null;
  return trimmed.slice(0, maxLen);
}

function validatePayload(body: unknown): { error?: string; data?: ValidatedContactPayload } {
  if (!body || typeof body !== 'object') {
    return { error: 'Request body must be a valid JSON object.' };
  }

  const record = body as Record<string, unknown>;

  // 1. Spam protection: Honeypot check
  // Hidden inputs (e.g., website, company_website) are ignored by legitimate users
  // but populated by automated spam crawlers.
  const honeypot = record.website || record.company_website || record.b_url || record.hp_field;
  if (honeypot && typeof honeypot === 'string' && honeypot.trim().length > 0) {
    return { error: 'Invalid submission.' };
  }

  // 2. Validate First Name (Required, 1-100 chars)
  const rawFirstName = record.firstName ?? record.first_name;
  const firstName = sanitizeString(rawFirstName, 100);
  if (!firstName || firstName.length < 1) {
    return { error: 'First name is required (maximum 100 characters).' };
  }

  // 3. Validate Last Name (Required, 1-100 chars)
  const rawLastName = record.lastName ?? record.last_name;
  const lastName = sanitizeString(rawLastName, 100);
  if (!lastName || lastName.length < 1) {
    return { error: 'Last name is required (maximum 100 characters).' };
  }

  // 4. Validate Work Email (Required, 5-255 chars, valid email format)
  const rawEmail = record.workEmail ?? record.work_email ?? record.email;
  const workEmail = sanitizeString(rawEmail, 255);
  if (!workEmail || workEmail.length < 5 || !EMAIL_REGEX.test(workEmail)) {
    return { error: 'A valid corporate or work email address is required.' };
  }

  // 5. Validate Topic / Subject (Required, 1-150 chars, reject placeholder)
  const rawTopic = record.topic ?? record.subject;
  const topic = sanitizeString(rawTopic, 150);
  if (!topic || topic.length < 1 || topic === 'Select a topic *') {
    return { error: 'A valid inquiry topic must be selected.' };
  }

  // 6. Validate Form Source (Required, strictly 'contact_page' or 'homepage_section')
  const rawSource = record.formSource ?? record.form_source;
  if (typeof rawSource !== 'string' || !VALID_FORM_SOURCES.has(rawSource)) {
    return { error: 'Invalid form source. Must be contact_page or homepage_section.' };
  }
  const formSource = rawSource as 'contact_page' | 'homepage_section';

  // 7. Optional Fields (Phone, Company Name, Subject, Message, Referral Source)
  const rawPhone = record.phone ?? record.phoneNumber ?? record.phone_number;
  const phone = sanitizeString(rawPhone, 40);
  const companyName = sanitizeString(record.companyName ?? record.company_name, 150);
  const subject = sanitizeString(record.subject, 150);
  const message = sanitizeString(record.message, 5000);
  const referralSource = sanitizeString(record.referralSource ?? record.referral_source, 150);

  return {
    data: {
      firstName,
      lastName,
      workEmail,
      phone,
      companyName,
      subject,
      topic,
      message,
      referralSource,
      formSource,
    },
  };
}

export async function POST(request: NextRequest) {
  // 1. Client IP Extraction & Basic Rate Limiting (max 20 requests / 10 minutes per IP)
  const clientIp =
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    request.headers.get('x-real-ip') ||
    '127.0.0.1';

  const rateLimit = checkRateLimit(clientIp, 20, 10 * 60 * 1000);
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: 'Too many submissions from this connection. Please wait a few minutes before trying again.' },
      { status: 429, headers: { 'Retry-After': '600' } }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: 'Invalid JSON payload.' },
      { status: 400 }
    );
  }

  // 2. Validate inputs
  const validation = validatePayload(body);
  if (validation.error || !validation.data) {
    return NextResponse.json(
      { error: validation.error },
      { status: 400 }
    );
  }

  const { data } = validation;

  // 3. Duplicate submission prevention (identical email + topic within 60 seconds)
  const duplicateSig = `${data.workEmail.toLowerCase()}:${data.topic}:${(data.message || '').slice(0, 80)}`;
  if (isDuplicateSubmission(duplicateSig, 60 * 1000)) {
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for reaching out. We have already received your inquiry and our team is reviewing it.',
      },
      { status: 200 }
    );
  }

  // 4. Initialize server-only Supabase client
  const supabase = getSupabaseServerClient();
  if (!supabase) {
    console.error('[API /api/contact] Server Supabase client is unconfigured (missing SUPABASE_SERVICE_ROLE_KEY).');
    return NextResponse.json(
      { error: 'Inquiry service is temporarily unavailable. Please try again later.' },
      { status: 503 }
    );
  }

  try {
    // Construct metadata for optional phone or custom fields
    const metadata: Record<string, unknown> = {};
    if (data.phone) metadata.phone = data.phone;
    if (data.subject) metadata.subject = data.subject;

    // Pure INSERT operation adhering strictly to service_role privileges
    const { error } = await supabase.from('contact_submissions').insert({
      first_name: data.firstName,
      last_name: data.lastName,
      work_email: data.workEmail,
      company_name: data.companyName,
      topic: data.topic,
      message: data.message || '',
      referral_source: data.referralSource,
      form_source: data.formSource,
      status: 'new',
      metadata,
    });

    if (error) {
      console.error('[API /api/contact] Failed to insert contact submission:', error.message);
      return NextResponse.json(
        { error: 'Unable to record your inquiry. Please try again later.' },
        { status: 500 }
      );
    }

    // 5. Trigger automated dual email notifications (Admin notification + User confirmation)
    // Runs server-side. Handled gracefully so email delivery errors don't corrupt database records.
    try {
      const emailResult = await sendContactFormEmails({
        firstName: data.firstName,
        lastName: data.lastName,
        workEmail: data.workEmail,
        phone: data.phone,
        companyName: data.companyName,
        subject: data.subject,
        topic: data.topic,
        message: data.message,
        referralSource: data.referralSource,
        formSource: data.formSource,
        submittedAt: new Date(),
      });

      if (!emailResult.success && !emailResult.skipped) {
        console.warn('[API /api/contact] Dual email notification warning:', emailResult.error);
      }
    } catch (emailErr) {
      console.error('[API /api/contact] Unexpected email delivery error:', emailErr);
    }

    // 6. Generic success response
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for reaching out. We have received your inquiry.',
      },
      { status: 200 }
    );
  } catch (err) {
    console.error('[API /api/contact] Unexpected server exception:', err);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed.' },
    { status: 405, headers: { Allow: 'POST' } }
  );
}
