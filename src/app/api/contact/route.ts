import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseServerClient } from '@/lib/supabase/server';

const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const VALID_FORM_SOURCES = new Set(['contact_page', 'homepage_section']);

interface ValidatedContactPayload {
  firstName: string;
  lastName: string;
  workEmail: string;
  companyName: string | null;
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

  // 5. Validate Topic (Required, 1-150 chars, reject placeholder)
  const rawTopic = record.topic;
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

  // 7. Optional Fields (Company Name, Message, Referral Source)
  const companyName = sanitizeString(record.companyName ?? record.company_name, 150);
  const message = sanitizeString(record.message, 5000);
  const referralSource = sanitizeString(record.referralSource ?? record.referral_source, 150);

  return {
    data: {
      firstName,
      lastName,
      workEmail,
      companyName,
      topic,
      message,
      referralSource,
      formSource,
    },
  };
}

export async function POST(request: NextRequest) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: 'Invalid JSON payload.' },
      { status: 400 }
    );
  }

  // Validate inputs
  const validation = validatePayload(body);
  if (validation.error || !validation.data) {
    return NextResponse.json(
      { error: validation.error },
      { status: 400 }
    );
  }

  const { data } = validation;

  // Initialize server-only Supabase client
  const supabase = getSupabaseServerClient();
  if (!supabase) {
    console.error('[API /api/contact] Server Supabase client is unconfigured (missing SUPABASE_SERVICE_ROLE_KEY).');
    return NextResponse.json(
      { error: 'Inquiry service is temporarily unavailable. Please try again later.' },
      { status: 503 }
    );
  }

  try {
    // Pure INSERT operation: intentionally avoid .select(), .single(), or RETURNING
    // to adhere strictly to the service_role's least-privilege INSERT grant.
    const { error } = await supabase.from('contact_submissions').insert({
      first_name: data.firstName,
      last_name: data.lastName,
      work_email: data.workEmail,
      company_name: data.companyName,
      topic: data.topic,
      message: data.message,
      referral_source: data.referralSource,
      form_source: data.formSource,
      status: 'new',       // Client-supplied status is explicitly overridden
      metadata: {},        // Client-supplied metadata is explicitly ignored
    });

    if (error) {
      // Log on server only; never expose raw database errors or schema names to client
      console.error('[API /api/contact] Failed to insert contact submission:', error.message);
      return NextResponse.json(
        { error: 'Unable to record your inquiry. Please try again later.' },
        { status: 500 }
      );
    }

    // Generic success response to avoid leaking internal IDs or database state
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
