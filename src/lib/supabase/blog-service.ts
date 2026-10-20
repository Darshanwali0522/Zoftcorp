import { BLOG_POSTS, BLOG_CATEGORIES, BlogPost as StaticBlogPost } from '@/data/blogs';

export interface DynamicBlogPost {
  id?: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  categorySlug: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  publishedAt: string;
  formattedDate: string;
  readingTime: string;
  image: string;
  featured?: boolean;
  metaDescription: string;
  originalUrl?: string;
  tags: string[];
  status?: 'draft' | 'published';
  seoTitle?: string;
  seoDescription?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  schemaType?: string;
}

export interface DynamicCategory {
  id: string;
  label: string;
  description?: string;
}

interface RawPostRecord {
  id?: string;
  slug: string;
  title: string;
  excerpt?: string | null;
  content?: string | null;
  category?: string | null;
  category_slug?: string | null;
  author_name?: string | null;
  published_at?: string | null;
  created_at?: string | null;
  reading_time?: string | null;
  featured_image?: string | null;
  featured?: boolean | null;
  tags?: string[] | null;
  status?: 'draft' | 'published';
  seo_title?: string | null;
  seo_description?: string | null;
  canonical_url?: string | null;
  og_title?: string | null;
  og_description?: string | null;
  og_image?: string | null;
  schema_type?: string | null;
}

interface RawCategoryRecord {
  name: string;
  slug: string;
  description?: string | null;
}

function formatDate(dateStr?: string | null): string {
  if (!dateStr) return 'Recent';
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

// Convert a database record into a standardized DynamicBlogPost
function mapRecordToPost(record: RawPostRecord): DynamicBlogPost {

  const publishedDate = record.published_at || record.created_at || new Date().toISOString();
  const formatted = formatDate(publishedDate);

  // Default image fallback if none provided
  const image = record.featured_image || '/images/blogs/failover-cluster-slipstream.jpg';

  return {
    id: record.id,
    slug: record.slug,
    title: record.title,
    excerpt: record.excerpt || '',
    content: record.content || '',
    category: record.category || 'General',
    categorySlug: record.category_slug || 'general',
    author: {
      name: record.author_name || 'ZoftCorp Engineering Team',
      role: 'ZoftCorp Engineering Team',
    },
    publishedAt: publishedDate.split('T')[0],
    formattedDate: formatted,
    readingTime: record.reading_time || '3 min read',
    image: image,
    featured: Boolean(record.featured),
    metaDescription: record.seo_description || record.excerpt || record.title,
    tags: Array.isArray(record.tags) ? record.tags : [],
    status: record.status,
    seoTitle: record.seo_title || undefined,
    seoDescription: record.seo_description || undefined,
    canonicalUrl: record.canonical_url || undefined,
    ogTitle: record.og_title || undefined,
    ogDescription: record.og_description || undefined,
    ogImage: record.og_image || undefined,
    schemaType: record.schema_type || 'BlogPosting',
  };
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

/**
 * Retrieve all published blog posts from Supabase.
 * Enforces explicit 'published' filter so drafts are never returned.
 * Returns the published posts from Supabase when available (even if empty).
 * Falls back to static BLOG_POSTS only if Supabase is unconfigured or unreachable.
 */
export async function getPublishedPosts(): Promise<DynamicBlogPost[]> {
  const { url, key, isConfigured } = getSupabaseEnv();

  if (isConfigured) {
    try {
      const res = await fetch(
        `${url}/rest/v1/posts?select=*&status=eq.published&order=published_at.desc`,
        {
          headers: getHeaders(key),
          next: { revalidate: 60 },
        }
      );

      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) {
          return data.map(mapRecordToPost);
        }
      } else {
        console.warn(`[Supabase] HTTP ${res.status} error fetching published posts, falling back to static`);
      }
    } catch (err) {
      console.warn('[Supabase] Network exception fetching published posts, falling back to static:', err);
    }
  }

  // Fallback to static articles only when Supabase is unavailable
  return (BLOG_POSTS as StaticBlogPost[]).map((sp) => ({
    ...sp,
    content: '',
  }));
}

/**
 * Retrieve a single published post by slug.
 * If the slug does not exist or the post is a draft, returns null (triggering notFound / 404).
 */
export async function getPostBySlug(slug: string): Promise<DynamicBlogPost | null> {
  const { url, key, isConfigured } = getSupabaseEnv();

  if (isConfigured) {
    try {
      const res = await fetch(
        `${url}/rest/v1/posts?select=*&status=eq.published&slug=eq.${encodeURIComponent(slug)}`,
        {
          headers: getHeaders(key),
          next: { revalidate: 60 },
        }
      );

      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          return mapRecordToPost(data[0]);
        }
        // If Supabase returned 0 published records:
        // Allow legacy static article not in DB (azure-sql-managed-instance-pool), otherwise null
        const staticMatch = BLOG_POSTS.find((p) => p.slug === slug);
        if (staticMatch && staticMatch.slug === 'azure-sql-managed-instance-pool') {
          return {
            ...staticMatch,
            content: '',
          };
        }
        return null;
      } else {
        console.warn(`[Supabase] HTTP ${res.status} error fetching post slug "${slug}"`);
      }
    } catch (err) {
      console.warn(`[Supabase] Network exception fetching post by slug "${slug}":`, err);
    }
  }

  // Fallback check in static data only if Supabase is unconfigured or fetch threw
  const staticMatch = BLOG_POSTS.find((p) => p.slug === slug);
  if (staticMatch) {
    return {
      ...staticMatch,
      content: '',
    };
  }

  return null;
}

/**
 * Retrieve all active categories from Supabase, or fall back to BLOG_CATEGORIES.
 */
export async function getBlogCategories(): Promise<DynamicCategory[]> {
  const { url, key, isConfigured } = getSupabaseEnv();

  if (isConfigured) {
    try {
      const res = await fetch(
        `${url}/rest/v1/categories?select=name,slug,description&order=name.asc`,
        {
          headers: getHeaders(key),
          next: { revalidate: 60 },
        }
      );

      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          return [
            { id: 'all', label: 'All Posts' },
            ...data.map((c: RawCategoryRecord) => ({
              id: c.slug,
              label: c.name,
              description: c.description || undefined,
            })),
          ];
        }
      }
    } catch {
      // Continue to fallback
    }
  }

  return BLOG_CATEGORIES.map((c) => ({
    id: c.id,
    label: c.label,
  }));
}


