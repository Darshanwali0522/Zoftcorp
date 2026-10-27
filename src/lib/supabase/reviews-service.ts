import { CLIENT_REVIEWS, ClientReview } from '@/data/reviews';

export interface RawReviewRecord {
  id: string;
  client_name: string;
  company_name?: string | null;
  rating: number;
  review_text: string;
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

function mapRecordToReview(record: RawReviewRecord): ClientReview {
  // Validate and clamp rating to integer 1 to 5
  let rating: number | undefined = undefined;
  if (record.rating !== undefined && record.rating !== null) {
    const parsed = Number(record.rating);
    if (Number.isInteger(parsed) && parsed >= 1 && parsed <= 5) {
      rating = parsed;
    }
  }

  return {
    id: record.id,
    clientName: record.client_name,
    companyName: record.company_name || '',
    rating,
    quote: record.review_text,
    verifiedAt: record.created_at,
    published: record.status === 'published',
  };
}

/**
 * Retrieve all approved and published client reviews from Supabase.
 * Enforces explicit 'published' filter so unapproved/draft reviews are never returned.
 * Strictly validates ratings (integer 1 to 5).
 * Falls back to CLIENT_REVIEWS (which is an empty array by design, avoiding fabricated testimonials).
 */
export async function getPublishedReviews(): Promise<ClientReview[]> {
  const { url, key, isConfigured } = getSupabaseEnv();

  if (isConfigured) {
    try {
      const res = await fetch(
        `${url}/rest/v1/client_reviews?select=*&status=eq.published&order=created_at.desc`,
        {
          headers: getHeaders(key),
          next: { revalidate: 60, tags: ['client-reviews'] },
        }
      );

      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) {
          return data.map(mapRecordToReview);
        }
      } else {
        console.warn(`[Supabase] HTTP ${res.status} error fetching client reviews, falling back to static reviews`);
      }
    } catch (err) {
      console.warn('[Supabase] Exception fetching client reviews, falling back to static reviews:', err);
    }
  }

  return CLIENT_REVIEWS;
}
