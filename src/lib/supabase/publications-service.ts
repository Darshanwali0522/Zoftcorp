import { CASE_STUDIES, CaseStudy } from '@/data/case-studies';
import {
  DynamicPublication,
  PublicationFilterOptions,
  PublicationType,
  RawPublicationRecord,
} from '@/types/publications';

function formatDate(dateStr?: string | null): string {
  if (!dateStr) return 'Recent';
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

function sanitizeCompanyName(val?: string | null): string {
  if (!val) return '';
  return val
    .replace(/\bZOFT\s+CORP\b/g, 'ZOFTCORP')
    .replace(/\bZOFT\s+Corp\b/g, 'Zoftcorp')
    .replace(/\bZoft\s+Corp\b/g, 'Zoftcorp')
    .replace(/\bZoftCorp\b/g, 'Zoftcorp');
}

function calculateReadingTime(content?: string | null): string {
  if (!content) return '5 min read';
  const text = content.replace(/<[^>]*>/g, ' ').trim();
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(2, Math.ceil(wordCount / 200));
  return `${minutes} min read`;
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

function getDefaultPublicationImage(
  type: 'white_paper' | 'case_study',
  category?: string | null,
  slug?: string
): string {
  if (type === 'white_paper') {
    return '/images/blogs/sql-database-file-sizes.jpg';
  }
  const cat = (category || '').toLowerCase();
  const s = (slug || '').toLowerCase();
  if (cat.includes('cloud') || s.includes('cloud') || cat.includes('finops')) {
    return '/images/consulting/cloud-finops.jpg';
  }
  if (cat.includes('performance') || s.includes('performance') || cat.includes('tuning')) {
    return '/images/consulting/performance-audits.jpg';
  }
  return '/images/consulting/cloud-database-strategy.jpg';
}

function extractPdfUrl(record: RawPublicationRecord): string | null {
  if (record.pdf_url) return record.pdf_url;
  if (record.content) {
    const pdfMatch = record.content.match(/href=["']([^"']+\.pdf(?:\?[^"']*)?)["']/i);
    if (pdfMatch) return pdfMatch[1];
  }
  return null;
}

/**
 * Standardize a Supabase database record into a DynamicPublication.
 * Normalizes company names and sets fallbacks.
 */
function mapRecordToPublication(record: RawPublicationRecord): DynamicPublication {
  const publishedDate =
    record.publication_date || record.published_at || record.created_at || '2026-10-10T12:00:00.000Z';
  const formatted = formatDate(publishedDate);
  const typeLabel: 'Case Study' | 'White Paper' =
    record.publication_type === 'white_paper' ? 'White Paper' : 'Case Study';

  const defaultImage = getDefaultPublicationImage(
    record.publication_type,
    record.category,
    record.slug
  );

  const image = record.featured_image_url || defaultImage;
  const rawAuthor = record.author || 'Zoftcorp Engineering Team';
  const authorName = sanitizeCompanyName(rawAuthor);

  return {
    id: record.id,
    slug: record.slug,
    title: sanitizeCompanyName(record.title),
    publicationType: record.publication_type,
    publication_type: record.publication_type,
    typeLabel,
    shortDescription: sanitizeCompanyName(record.short_description || ''),
    excerpt: sanitizeCompanyName(record.short_description || ''),
    content: sanitizeCompanyName(record.content || ''),
    category: record.category || (record.publication_type === 'white_paper' ? 'White Paper' : 'Architecture'),
    featuredImageUrl: record.featured_image_url || null,
    image,
    author: authorName,
    publicationDate: publishedDate.split('T')[0],
    publishedAt: publishedDate,
    formattedDate: formatted,
    readingTime: calculateReadingTime(record.content),
    seoTitle: record.seo_title ? sanitizeCompanyName(record.seo_title) : undefined,
    seoDescription: record.seo_description ? sanitizeCompanyName(record.seo_description) : undefined,
    status: record.status,
    createdAt: record.created_at,
    updatedAt: record.updated_at || undefined,
    isStaticFallback: false,
    pdfUrl: extractPdfUrl(record),
    client: record.client ? sanitizeCompanyName(record.client) : undefined,
  };
}

/**
 * Convert a static CaseStudy definition into a DynamicPublication for graceful fallback.
 */
function mapStaticCaseStudyToPublication(study: CaseStudy): DynamicPublication {
  const fallbackHtml = `
    <div class="space-y-6">
      <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200">
        <h3 class="text-lg font-bold text-[#01153B] mb-2">The Challenge</h3>
        <p class="text-slate-700 leading-relaxed">${study.challenge}</p>
      </div>
      <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200">
        <h3 class="text-lg font-bold text-[#01153B] mb-2">Engineering Approach</h3>
        <p class="text-slate-700 leading-relaxed">${study.approach}</p>
      </div>
      <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200">
        <h3 class="text-lg font-bold text-[#00B3FF] mb-2">Technical Solution</h3>
        <p class="text-slate-700 leading-relaxed">${study.solution}</p>
      </div>
      <div class="bg-emerald-50 p-6 rounded-2xl border border-emerald-200">
        <h3 class="text-lg font-bold text-emerald-900 mb-2">Validated Outcome</h3>
        <p class="text-emerald-950 font-medium leading-relaxed">${study.outcome}</p>
      </div>
    </div>
  `;

  const fallbackImage =
    study.image ||
    getDefaultPublicationImage('case_study', study.industry, study.slug);

  return {
    id: `static-${study.slug}`,
    slug: study.slug,
    title: sanitizeCompanyName(study.title),
    publicationType: 'case_study',
    publication_type: 'case_study',
    typeLabel: 'Case Study',
    shortDescription: sanitizeCompanyName(study.excerpt),
    excerpt: sanitizeCompanyName(study.excerpt),
    content: fallbackHtml,
    category: study.industry,
    featuredImageUrl: study.image || null,
    image: fallbackImage,
    author: 'Zoftcorp Engineering Team',
    publicationDate: '2026-10-10',
    publishedAt: '2026-10-10T12:00:00.000Z',
    formattedDate: 'October 10, 2026',
    readingTime: '5 min read',
    seoTitle: `${study.title} | Zoftcorp Case Study`,
    seoDescription: study.excerpt,
    status: 'published',
    createdAt: '2026-10-10T12:00:00.000Z',
    isStaticFallback: true,
    client: study.client ? sanitizeCompanyName(study.client) : undefined,
    challenge: study.challenge,
    approach: study.approach,
    solution: study.solution,
    outcome: study.outcome,
    technologies: study.technologies,
    pdfUrl: null,
  };
}

/**
 * Retrieve static fallback publications when Supabase returns 0 records.
 */
function getStaticFallbackPublications(typeFilter?: 'all' | PublicationType): DynamicPublication[] {
  if (typeFilter === 'white_paper') {
    return [];
  }
  return CASE_STUDIES.map(mapStaticCaseStudyToPublication);
}

/**
 * Retrieve published publications (Case Studies & White Papers) from Supabase.
 * - Filters strictly by status = 'published' (drafts are never returned).
 * - Supports filtering by type ('all' | 'case_study' | 'white_paper').
 * - Cached with Next.js revalidate: 60.
 * - Falls back to static CASE_STUDIES when no published database records are available.
 */
export async function getPublishedPublications(
  filter?: PublicationFilterOptions | 'all' | PublicationType
): Promise<DynamicPublication[]> {
  const typeFilter: 'all' | PublicationType =
    typeof filter === 'string' ? filter : filter?.type || 'all';

  const categoryFilter = typeof filter === 'object' ? filter.category : undefined;
  const searchFilter = typeof filter === 'object' ? filter.search : undefined;

  const { url, key, isConfigured } = getSupabaseEnv();

  if (isConfigured) {
    try {
      let endpoint = `${url}/rest/v1/case_studies_whitepapers?select=*&status=eq.published&order=publication_date.desc`;

      if (typeFilter && typeFilter !== 'all') {
        endpoint += `&publication_type=eq.${encodeURIComponent(typeFilter)}`;
      }

      if (categoryFilter && categoryFilter !== 'all') {
        endpoint += `&category=eq.${encodeURIComponent(categoryFilter)}`;
      }

      const res = await fetch(endpoint, {
        headers: getHeaders(key),
        next: { revalidate: 60 },
      });

      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          let publications = data.map(mapRecordToPublication);

          if (searchFilter && searchFilter.trim() !== '') {
            const q = searchFilter.toLowerCase();
            publications = publications.filter(
              (p) =>
                p.title.toLowerCase().includes(q) ||
                p.shortDescription.toLowerCase().includes(q) ||
                p.category.toLowerCase().includes(q)
            );
          }

          return publications;
        }
      } else {
        console.warn(`[Supabase] HTTP ${res.status} error fetching publications, falling back to static`);
      }
    } catch (err) {
      console.warn('[Supabase] Network exception fetching publications, falling back to static:', err);
    }
  }

  // Fallback to static case studies if no database records are available
  const fallbacks = getStaticFallbackPublications(typeFilter);
  if (searchFilter && searchFilter.trim() !== '') {
    const q = searchFilter.toLowerCase();
    return fallbacks.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }
  return fallbacks;
}

/**
 * Retrieve a single published publication by slug.
 * - Filters strictly by status = 'published' (drafts return null).
 * - If not found in database, checks static CASE_STUDIES fallback.
 * - Returns null if neither database nor static fallback matches.
 */
export async function getPublicationBySlug(slug: string): Promise<DynamicPublication | null> {
  const { url, key, isConfigured } = getSupabaseEnv();

  if (isConfigured) {
    try {
      const res = await fetch(
        `${url}/rest/v1/case_studies_whitepapers?select=*&status=eq.published&slug=eq.${encodeURIComponent(slug)}`,
        {
          headers: getHeaders(key),
          next: { revalidate: 60 },
        }
      );

      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          return mapRecordToPublication(data[0]);
        }
      } else {
        console.warn(`[Supabase] HTTP ${res.status} error fetching publication slug "${slug}"`);
      }
    } catch (err) {
      console.warn(`[Supabase] Network exception fetching publication by slug "${slug}":`, err);
    }
  }

  // Fallback check in static CASE_STUDIES
  const staticMatch = CASE_STUDIES.find((s) => s.slug === slug);
  if (staticMatch) {
    return mapStaticCaseStudyToPublication(staticMatch);
  }

  return null;
}

/**
 * Retrieve a single published case study by slug.
 */
export async function getCaseStudyBySlug(slug: string): Promise<DynamicPublication | null> {
  const pub = await getPublicationBySlug(slug);
  if (pub && pub.publicationType === 'case_study') {
    return pub;
  }
  return null;
}

/**
 * Retrieve a single published white paper by slug.
 */
export async function getWhitePaperBySlug(slug: string): Promise<DynamicPublication | null> {
  const pub = await getPublicationBySlug(slug);
  if (pub && pub.publicationType === 'white_paper') {
    return pub;
  }
  return null;
}

/**
 * Retrieve all published case studies (Supabase + fallback to static CASE_STUDIES).
 */
export async function getPublishedCaseStudies(): Promise<DynamicPublication[]> {
  return getPublishedPublications('case_study');
}

/**
 * Retrieve all published white papers.
 */
export async function getPublishedWhitePapers(): Promise<DynamicPublication[]> {
  return getPublishedPublications('white_paper');
}
