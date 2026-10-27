import { PARTNERS, PartnerEcosystem } from '@/data/partnerships';

export interface RawPartnerRecord {
  id: string;
  name: string;
  slug: string;
  description: string;
  details?: string | null;
  logo_url: string;
  status: 'draft' | 'published';
  created_at: string;
  updated_at: string;
}

function getSupabaseEnv() {
  let url = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').trim();
  let key = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').trim();

  // Strip surrounding quotes if present
  if ((url.startsWith('"') && url.endsWith('"')) || (url.startsWith("'") && url.endsWith("'"))) {
    url = url.slice(1, -1).trim();
  }
  if ((key.startsWith('"') && key.endsWith('"')) || (key.startsWith("'") && key.endsWith("'"))) {
    key = key.slice(1, -1).trim();
  }

  url = url.replace(/\/+$/, '');
  const isConfigured = Boolean(url && key && !url.includes('placeholder') && !key.includes('placeholder'));
  return { url, key, isConfigured };
}

function getHeaders(key: string) {
  return {
    apikey: key,
    Authorization: `Bearer ${key}`,
    Accept: 'application/json',
  };
}

const KNOWN_AREAS: Record<string, string[]> = {
  aws: ['Cloud Architecture', 'Database Migration', 'Data Engineering', 'Performance Audits', 'FinOps Governance'],
  azure: ['Azure Infrastructure', 'SQL Server Optimization', 'Data Lakehouse', 'Security Governance', 'Workload Scaling'],
  gcp: ['Analytics Platforms', 'Vector DB Integration', 'Cloud Migration', 'Performance Tuning', 'AI Readiness'],
  oracle: ['Oracle DB Advisory', 'High Availability', 'Performance Tuning', 'Managed DBA Services', 'Schema Transformation'],
};

const KNOWN_SHORT_NAMES: Record<string, string> = {
  aws: 'AWS',
  azure: 'Azure',
  gcp: 'Google Cloud',
  oracle: 'Oracle',
};

function mapRecordToPartner(record: RawPartnerRecord, index: number): PartnerEcosystem {
  const slug = (record.slug || '').toLowerCase();
  const indexStr = String(index + 1).padStart(2, '0');

  const isCore = ['aws', 'azure', 'gcp', 'oracle'].includes(slug);
  const detailRoute = isCore
    ? `/about-us/partnerships/${slug}`
    : `/about-us/partnerships#partner-${slug}`;

  const shortName = KNOWN_SHORT_NAMES[slug] || record.name;
  const connectedAreas = KNOWN_AREAS[slug] || [
    'Enterprise Architecture',
    'Cloud & Data Engineering',
    'Performance Optimization',
  ];

  return {
    id: slug || record.id,
    number: indexStr,
    name: record.name,
    shortName,
    description: record.description,
    details: record.details || record.description,
    logoPath: record.logo_url,
    detailRoute,
    connectedAreas,
  };
}

/**
 * Retrieve all published partner ecosystems from Supabase.
 * Enforces explicit 'published' filter so drafts are never returned to public visitors.
 * Falls back to static PARTNERS array if Supabase is unconfigured, unreachable, or table is missing.
 */
export async function getPublishedPartners(): Promise<PartnerEcosystem[]> {
  const { url, key, isConfigured } = getSupabaseEnv();

  if (isConfigured) {
    try {
      const res = await fetch(
        `${url}/rest/v1/partners?select=*&status=eq.published&order=created_at.asc`,
        {
          headers: getHeaders(key),
          next: { revalidate: 60, tags: ['partners'] },
        }
      );

      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          return data.map((item, idx) => mapRecordToPartner(item, idx));
        }
      } else {
        console.warn(`[Supabase] HTTP ${res.status} error fetching partners, falling back to static ecosystems`);
      }
    } catch (err) {
      console.warn('[Supabase] Exception fetching partners, falling back to static ecosystems:', err);
    }
  }

  // Fallback to verified static PARTNERS array
  return PARTNERS;
}
