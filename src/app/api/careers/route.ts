import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { getSupabaseServerClient } from '@/lib/supabase/server';

const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB

const ALLOWED_EXTENSIONS = new Set(['pdf', 'docx']);
const ALLOWED_MIME_TYPES = new Set([
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/msword',
]);

function sanitizeString(val: unknown, maxLen: number): string | null {
  if (typeof val !== 'string') return null;
  const trimmed = val.trim();
  if (trimmed.length === 0) return null;
  return trimmed.slice(0, maxLen);
}

function getSafeFileExtension(filename: string): string | null {
  // Disallow hidden files or paths
  const cleanName = filename.replace(/^.*[\\/]/, '');
  const parts = cleanName.toLowerCase().split('.');
  if (parts.length < 2) return null;

  // Prevent double extension attacks (e.g. resume.pdf.exe)
  const ext = parts[parts.length - 1];
  if (!ALLOWED_EXTENSIONS.has(ext)) return null;

  return ext;
}

function verifyMagicBytes(buffer: Buffer, ext: string): boolean {
  if (buffer.length < 4) return false;

  if (ext === 'pdf') {
    // PDF starts with %PDF- (0x25, 0x50, 0x44, 0x46)
    return (
      buffer[0] === 0x25 &&
      buffer[1] === 0x50 &&
      buffer[2] === 0x44 &&
      buffer[3] === 0x46
    );
  }

  if (ext === 'docx') {
    // DOCX is a zip archive starting with PK\x03\x04 (0x50, 0x4b, 0x03, 0x04)
    return (
      buffer[0] === 0x50 &&
      buffer[1] === 0x4b &&
      buffer[2] === 0x03 &&
      buffer[3] === 0x04
    );
  }

  return false;
}

export async function POST(request: NextRequest) {
  let formData: FormData;

  try {
    formData = await request.formData();
  } catch (err) {
    console.error('[API /api/careers] Failed to parse formData:', err);
    return NextResponse.json(
      { error: 'Invalid form submission format. Expected multipart/form-data.' },
      { status: 400 }
    );
  }

  // 1. Honeypot anti-spam check
  const honeypot = formData.get('website') || formData.get('company_website') || formData.get('hp_field');
  if (honeypot && typeof honeypot === 'string' && honeypot.trim().length > 0) {
    return NextResponse.json(
      { error: 'Invalid submission.' },
      { status: 400 }
    );
  }

  // 2. Full Name validation (Required, 2-100 characters)
  const rawFullName = formData.get('fullName') || formData.get('name');
  const fullName = sanitizeString(rawFullName, 100);
  if (!fullName || fullName.length < 2) {
    return NextResponse.json(
      { error: 'Full name is required (at least 2 characters).' },
      { status: 400 }
    );
  }

  // 3. Email validation (Required, 5-255 characters, valid format)
  const rawEmail = formData.get('email');
  const email = sanitizeString(rawEmail, 255);
  if (!email || email.length < 5 || !EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { error: 'A valid email address is required.' },
      { status: 400 }
    );
  }

  // 4. Phone validation (Optional, max 30 characters)
  const rawPhone = formData.get('phone');
  const phone = sanitizeString(rawPhone, 30);

  // 5. Desired Role validation (Required, 2-150 characters)
  const rawRole = formData.get('role');
  const role = sanitizeString(rawRole, 150);
  if (!role || role.length < 2 || role === 'Select desired role *') {
    return NextResponse.json(
      { error: 'Please specify the position or desired role you are applying for.' },
      { status: 400 }
    );
  }

  // 6. Notes / Cover message (Optional, max 3000 characters)
  const rawNotes = formData.get('notes') || formData.get('message');
  const notes = sanitizeString(rawNotes, 3000);

  // 7. Resume file validation
  const file = formData.get('resume');
  if (!file || !(file instanceof File) || typeof file.arrayBuffer !== 'function') {
    return NextResponse.json(
      { error: 'A resume/CV file is required (PDF or DOCX format, max 5MB).' },
      { status: 400 }
    );
  }

  if (file.size === 0) {
    return NextResponse.json(
      { error: 'The uploaded file is empty. Please select a valid resume document.' },
      { status: 400 }
    );
  }

  if (file.size > MAX_FILE_SIZE_BYTES) {
    return NextResponse.json(
      { error: 'Resume file size exceeds the 5MB limit. Please upload a smaller file.' },
      { status: 400 }
    );
  }

  const safeExt = getSafeFileExtension(file.name);
  if (!safeExt) {
    return NextResponse.json(
      { error: 'Invalid file format. Only PDF (.pdf) and Word (.docx) documents are accepted.' },
      { status: 400 }
    );
  }

  if (file.type && !ALLOWED_MIME_TYPES.has(file.type)) {
    return NextResponse.json(
      { error: `File MIME type '${file.type}' is not permitted. Only PDF and DOCX documents are accepted.` },
      { status: 400 }
    );
  }

  // Read buffer & check magic bytes for security against extension spoofing
  const arrayBuffer = await file.arrayBuffer();
  const fileBuffer = Buffer.from(arrayBuffer);

  if (!verifyMagicBytes(fileBuffer, safeExt)) {
    return NextResponse.json(
      { error: 'The uploaded file does not match its claimed document signature. Please upload an authentic PDF or DOCX file.' },
      { status: 400 }
    );
  }

  // 8. Initialize server Supabase client
  const supabase = getSupabaseServerClient();
  if (!supabase) {
    console.error('[API /api/careers] Supabase server client unavailable.');
    return NextResponse.json(
      { error: 'Application service is temporarily unavailable. Please try again later.' },
      { status: 503 }
    );
  }

  // 9. Store resume securely in private 'resumes' bucket
  const uniqueId = crypto.randomUUID();
  const safeFilename = `resume_${Date.now()}_${uniqueId}.${safeExt}`;
  const contentType = safeExt === 'pdf' ? 'application/pdf' : 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';

  const { data: uploadData, error: uploadErr } = await supabase.storage
    .from('resumes')
    .upload(safeFilename, fileBuffer, {
      contentType,
      upsert: false,
    });

  if (uploadErr || !uploadData) {
    console.error('[API /api/careers] Failed to store resume in private storage:', uploadErr?.message);
    return NextResponse.json(
      { error: 'Unable to securely process your resume file. Please try again later.' },
      { status: 500 }
    );
  }

  const storedResumePath = uploadData.path;

  // 10. Persist application record
  // First try dedicated career_applications table
  let insertSuccess = false;
  const { error: careerTableErr } = await supabase.from('career_applications').insert({
    full_name: fullName,
    email,
    phone: phone || null,
    role,
    resume_storage_path: storedResumePath,
    original_filename: file.name.slice(0, 150),
    file_size_bytes: file.size,
    notes: notes || null,
  });

  if (!careerTableErr) {
    insertSuccess = true;
  } else {
    // If career_applications table does not exist in Supabase (PGRST205),
    // safely persist in contact_submissions table with career metadata
    const nameParts = fullName.split(' ');
    const firstName = nameParts[0] || fullName;
    const lastName = nameParts.slice(1).join(' ') || 'Applicant';

    const { error: fallbackErr } = await supabase.from('contact_submissions').insert({
      first_name: firstName.slice(0, 100),
      last_name: lastName.slice(0, 100),
      work_email: email,
      company_name: `Applicant: ${role}`.slice(0, 150),
      topic: 'Careers Application',
      message: `Role: ${role}\nPhone: ${phone || 'Not provided'}\nStored Resume: ${storedResumePath}\nOriginal File: ${file.name}\nSize: ${file.size} bytes\n\nNotes:\n${notes || 'None'}`,
      referral_source: 'Careers Application Form',
      form_source: 'contact_page',
      status: 'new',
      metadata: {
        type: 'career_application',
        role,
        phone,
        resume_storage_path: storedResumePath,
        original_filename: file.name,
        file_size_bytes: file.size,
      },
    });

    if (!fallbackErr) {
      insertSuccess = true;
    } else {
      console.error('[API /api/careers] Failed to persist application in fallback table:', fallbackErr.message);
    }
  }

  if (!insertSuccess) {
    // If persistence completely failed, remove the uploaded resume to avoid orphaned files
    await supabase.storage.from('resumes').remove([storedResumePath]);
    return NextResponse.json(
      { error: 'Failed to record your application details. Please try again later.' },
      { status: 500 }
    );
  }

  // 11. Generic success confirmation
  return NextResponse.json(
    {
      success: true,
      message: 'Thank you for submitting your application! Our technical recruiting team has received your information.',
    },
    { status: 200 }
  );
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed.' },
    { status: 405, headers: { Allow: 'POST' } }
  );
}
