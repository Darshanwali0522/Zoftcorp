import { JobPosting, JobType, WorkMode, JobStatus } from '@/types/jobs';

export interface RawJobRecord {
  id: string;
  title: string;
  slug: string;
  department?: string | null;
  job_type?: JobType | null;
  work_mode?: WorkMode | null;
  location?: string | null;
  experience_level?: string | null;
  description?: string | null;
  responsibilities?: string[] | null;
  requirements?: string[] | null;
  salary_range?: string | null;
  application_deadline?: string | null;
  openings?: number | null;
  status: JobStatus;
  display_order?: number | null;
  created_at: string;
  updated_at: string;
}

function sanitizeCompanyName(val?: string | null): string {
  if (!val) return '';
  return val
    .replace(/\bZOFT\s+CORP\b/g, 'ZOFTCORP')
    .replace(/\bZOFT\s+Corp\b/g, 'Zoftcorp')
    .replace(/\bZoft\s+Corp\b/g, 'Zoftcorp')
    .replace(/\bZoftCorp\b/g, 'Zoftcorp');
}

function getSupabaseEnv() {
  let url = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').trim();
  let key = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').trim();

  // Strip surrounding quotes if present from environment variable values
  if ((url.startsWith('"') && url.endsWith('"')) || (url.startsWith("'") && url.endsWith("'"))) {
    url = url.slice(1, -1).trim();
  }
  if ((key.startsWith('"') && key.endsWith('"')) || (key.startsWith("'") && key.endsWith("'"))) {
    key = key.slice(1, -1).trim();
  }

  // Strip trailing slashes from URL
  url = url.replace(/\/+$/, '');

  const isConfigured = Boolean(
    url && key && !url.includes('placeholder') && !key.includes('placeholder')
  );
  return { url, key, isConfigured };
}

function getHeaders(key: string) {
  return {
    apikey: key,
    Authorization: `Bearer ${key}`,
    Accept: 'application/json',
  };
}

function mapRecordToJobPosting(record: RawJobRecord): JobPosting {
  return {
    id: record.id,
    title: sanitizeCompanyName(record.title),
    slug: record.slug,
    department: record.department || 'Engineering',
    job_type: record.job_type || 'Full-time',
    work_mode: record.work_mode || 'Remote',
    location: record.location || 'Bengaluru, India',
    experience_level: record.experience_level || 'Mid-level',
    description: sanitizeCompanyName(record.description || ''),
    responsibilities: Array.isArray(record.responsibilities)
      ? record.responsibilities.map((r) => sanitizeCompanyName(r))
      : [],
    requirements: Array.isArray(record.requirements)
      ? record.requirements.map((r) => sanitizeCompanyName(r))
      : [],
    salary_range: record.salary_range || null,
    application_deadline: record.application_deadline || null,
    openings: typeof record.openings === 'number' && record.openings > 0 ? record.openings : 1,
    status: record.status,
    display_order: typeof record.display_order === 'number' ? record.display_order : 0,
    created_at: record.created_at,
    updated_at: record.updated_at,
  };
}

/**
 * Retrieve all published job postings from Supabase.
 * - Strictly filters for status = 'published' (drafts are never returned).
 * - Respects Row Level Security (RLS) on public.job_postings using anonymous key.
 * - Ordered by display_order ascending, then created_at descending.
 * - Cached server-side with Next.js revalidation interval of 60 seconds.
 * - Returns empty array if no published jobs exist or if database is unreachable.
 */
export async function getPublishedJobs(): Promise<JobPosting[]> {
  const { url, key, isConfigured } = getSupabaseEnv();

  if (!isConfigured) {
    console.warn('[JobsService] Supabase credentials not configured, returning empty jobs list');
    return [];
  }

  try {
    const endpoint = `${url}/rest/v1/job_postings?select=*&status=eq.published&order=display_order.asc,created_at.desc`;
    const res = await fetch(endpoint, {
      headers: getHeaders(key),
      next: { revalidate: 60, tags: ['job-postings'] },
    });

    if (!res.ok) {
      console.warn(`[JobsService] HTTP ${res.status} error fetching published jobs from Supabase`);
      return [];
    }

    const data = await res.json();
    if (!Array.isArray(data)) {
      return [];
    }

    return data.map(mapRecordToJobPosting);
  } catch (err) {
    console.warn('[JobsService] Exception fetching published jobs:', err);
    return [];
  }
}

/**
 * Retrieve a single published job posting by slug.
 * - Strictly filters for status = 'published'.
 * - Returns null if the job does not exist, is in draft status, or cannot be loaded.
 * - Cached server-side with Next.js revalidation interval of 60 seconds.
 */
export async function getJobBySlug(slug: string): Promise<JobPosting | null> {
  if (!slug || typeof slug !== 'string' || slug.trim() === '') {
    return null;
  }

  const { url, key, isConfigured } = getSupabaseEnv();

  if (!isConfigured) {
    console.warn('[JobsService] Supabase credentials not configured, cannot fetch job by slug');
    return null;
  }

  try {
    const endpoint = `${url}/rest/v1/job_postings?select=*&slug=eq.${encodeURIComponent(slug.trim())}&status=eq.published`;
    const res = await fetch(endpoint, {
      headers: getHeaders(key),
      next: { revalidate: 60, tags: [`job-posting-${slug}`] },
    });

    if (!res.ok) {
      console.warn(`[JobsService] HTTP ${res.status} error fetching job by slug ${slug}`);
      return null;
    }

    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) {
      return null;
    }

    const job = mapRecordToJobPosting(data[0]);
    if (job.status !== 'published') {
      return null;
    }

    return job;
  } catch (err) {
    console.warn(`[JobsService] Exception fetching job by slug ${slug}:`, err);
    return null;
  }
}
