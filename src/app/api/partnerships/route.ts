import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseServerClient } from '@/lib/supabase/server';
import { sendPartnershipEmails } from '@/lib/email/mailer';

const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

import { PARTNERSHIP_TYPES } from '@/data/partnerships';
export { PARTNERSHIP_TYPES };

interface ValidatedPartnershipPayload {
  companyName: string;
  contactName: string;
  businessEmail: string;
  partnershipType: string;
  message: string;
}

function sanitizeString(val: unknown, maxLen: number): string | null {
  if (typeof val !== 'string') return null;
  const trimmed = val.trim();
  if (trimmed.length === 0) return null;
  return trimmed.slice(0, maxLen);
}

function validatePayload(body: unknown): { error?: string; data?: ValidatedPartnershipPayload } {
  if (!body || typeof body !== 'object') {
    return { error: 'Request body must be a valid JSON object.' };
  }

  const record = body as Record<string, unknown>;

  // 1. Honeypot anti-spam verification
  const honeypot = record.website || record.company_website || record.b_url || record.hp_field;
  if (honeypot && typeof honeypot === 'string' && honeypot.trim().length > 0) {
    return { error: 'Invalid submission.' };
  }

  // 2. Validate Company Name (Required, 1-150 chars)
  const companyName = sanitizeString(record.companyName ?? record.company_name, 150);
  if (!companyName || companyName.length < 2) {
    return { error: 'Company name is required (at least 2 characters).' };
  }

  // 3. Validate Contact Name (Required, 1-100 chars)
  const contactName = sanitizeString(record.contactName ?? record.contact_name ?? record.name, 100);
  if (!contactName || contactName.length < 2) {
    return { error: 'Contact person’s name is required.' };
  }

  // 4. Validate Business Email (Required, 5-255 chars, valid format)
  const rawEmail = record.businessEmail ?? record.business_email ?? record.email;
  const businessEmail = sanitizeString(rawEmail, 255);
  if (!businessEmail || businessEmail.length < 5 || !EMAIL_REGEX.test(businessEmail)) {
    return { error: 'A valid business email address is required.' };
  }

  // 5. Validate Partnership Type (Required, 1-150 chars)
  const rawType = record.partnershipType ?? record.partnership_type;
  const partnershipType = sanitizeString(rawType, 150);
  if (!partnershipType || partnershipType.length < 2 || partnershipType === 'Select partnership area *') {
    return { error: 'Please select a partnership type or area of interest.' };
  }

  // 6. Validate Message (Required, 5-5000 chars)
  const message = sanitizeString(record.message, 5000);
  if (!message || message.length < 5) {
    return { error: 'Please share details about your company and partnership goals (at least 5 characters).' };
  }

  return {
    data: {
      companyName,
      contactName,
      businessEmail,
      partnershipType,
      message,
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

  const validation = validatePayload(body);
  if (validation.error || !validation.data) {
    return NextResponse.json(
      { error: validation.error },
      { status: 400 }
    );
  }

  const { data } = validation;

  const supabase = getSupabaseServerClient();
  if (!supabase) {
    console.error('[API /api/partnerships] Server Supabase client is unconfigured.');
    return NextResponse.json(
      { error: 'Partnership inquiry service is temporarily unavailable. Please try again later.' },
      { status: 503 }
    );
  }

  try {
    // Attempt 1: Insert into dedicated partnership_inquiries table if configured
    const primaryInsert = await supabase.from('partnership_inquiries').insert({
      company_name: data.companyName,
      contact_name: data.contactName,
      business_email: data.businessEmail,
      partnership_type: data.partnershipType,
      message: data.message,
      status: 'new',
    });

    let insertSuccess = false;

    if (!primaryInsert.error) {
      insertSuccess = true;
    } else {
      // If dedicated table is not yet created in Supabase (e.g. 404 / 42P01), fallback safely to contact_submissions
      console.warn(
        '[API /api/partnerships] partnership_inquiries table not available. Falling back to contact_submissions:',
        primaryInsert.error.message
      );

      const fallbackInsert = await supabase.from('contact_submissions').insert({
        first_name: data.contactName,
        last_name: '(Partnership)',
        work_email: data.businessEmail,
        company_name: data.companyName,
        topic: `Partnership: ${data.partnershipType}`.slice(0, 150),
        message: data.message,
        form_source: 'contact_page',
        status: 'new',
        metadata: {
          inquiry_type: 'partnership_inquiry',
          partnership_type: data.partnershipType,
        },
      });

      if (!fallbackInsert.error) {
        insertSuccess = true;
      } else {
        console.error('[API /api/partnerships] Both storage attempts failed:', fallbackInsert.error.message);
      }
    }

    if (!insertSuccess) {
      return NextResponse.json(
        { error: 'Unable to record your partnership inquiry. Please try again later.' },
        { status: 500 }
      );
    }

    // Trigger automated dual email notifications (Admin alert to info@zoftcorp.com + Partner acknowledgement)
    // Email delivery errors are safely caught and logged without failing the recorded submission
    try {
      const emailResult = await sendPartnershipEmails({
        companyName: data.companyName,
        contactName: data.contactName,
        businessEmail: data.businessEmail,
        partnershipType: data.partnershipType,
        message: data.message,
        submittedAt: new Date(),
      });

      if (!emailResult.success && !emailResult.skipped) {
        console.warn('[API /api/partnerships] Automated email delivery had warnings:', emailResult.error);
      }
    } catch (emailErr) {
      console.error('[API /api/partnerships] Unexpected error while dispatching partnership emails:', emailErr);
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your partnership inquiry. Our strategic alliances team will be in touch.',
      },
      { status: 200 }
    );
  } catch (err) {
    console.error('[API /api/partnerships] Unexpected server exception:', err);
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
