import { getPublishedPosts, DynamicBlogPost } from '@/lib/supabase/blog-service';
import { CASE_STUDIES } from '@/data/case-studies';

export interface UnifiedInsight {
  id: string;
  slug: string;
  type: 'case-study' | 'blog';
  typeLabel: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  formattedDate: string;
  href: string;
  image?: string;
  technologies?: string[];
  readingTime?: string;
}

// Canonical publication dates for verified case studies to enable unified chronological sorting
const CASE_STUDY_DATES: Record<string, { publishedAt: string; formattedDate: string }> = {
  'database-architecture-modernization': {
    publishedAt: '2026-10-10T12:00:00.000Z',
    formattedDate: 'October 10, 2026',
  },
  'cloud-infrastructure-optimization': {
    publishedAt: '2026-09-20T12:00:00.000Z',
    formattedDate: 'September 20, 2026',
  },
  'performance-investigation-engineering': {
    publishedAt: '2026-09-05T12:00:00.000Z',
    formattedDate: 'September 5, 2026',
  },
};

/**
 * Aggregates published content across both Case Studies and Supabase Blog Posts.
 * Filters strictly for publicly published items (drafts/unlisted excluded).
 * Sorts chronologically by publishedAt descending (newest first).
 * Limits to the requested count (default: 3).
 */
export async function getLatestInsights(limit = 3): Promise<UnifiedInsight[]> {
  // 1. Fetch published blog posts from Supabase (enforces status = 'published')
  let blogPosts: DynamicBlogPost[] = [];
  try {
    blogPosts = await getPublishedPosts();
  } catch (err) {
    console.warn('[InsightsAggregator] Failed to fetch blog posts, falling back to static:', err);
  }

  // 2. Map blog posts to UnifiedInsight
  const mappedBlogs: UnifiedInsight[] = blogPosts
    .filter((post) => post.status === 'published' || !post.status)
    .map((post) => ({
      id: post.id || `blog-${post.slug}`,
      slug: post.slug,
      type: 'blog',
      typeLabel: 'Blog Post',
      title: post.title,
      excerpt: post.excerpt || '',
      category: post.category || 'Database & Cloud',
      publishedAt: post.publishedAt || '2026-10-01T00:00:00.000Z',
      formattedDate: post.formattedDate || 'October 2026',
      href: `/insights/blogs/${post.slug}`,
      image: post.image || undefined,
      readingTime: post.readingTime || '5 min read',
    }));

  // 3. Map case studies to UnifiedInsight
  const mappedCaseStudies: UnifiedInsight[] = CASE_STUDIES.map((study) => {
    const dates = CASE_STUDY_DATES[study.slug] || {
      publishedAt: '2026-09-01T00:00:00.000Z',
      formattedDate: 'September 2026',
    };
    return {
      id: `case-study-${study.slug}`,
      slug: study.slug,
      type: 'case-study',
      typeLabel: 'Case Study',
      title: study.title,
      excerpt: study.excerpt || study.challenge || '',
      category: study.industry || 'Enterprise Advisory',
      publishedAt: dates.publishedAt,
      formattedDate: dates.formattedDate,
      href: '/insights/case-studies',
      technologies: study.technologies,
      readingTime: '6 min read',
    };
  });

  // 4. Combine and sort chronologically by publishedAt descending (newest first)
  const combined = [...mappedBlogs, ...mappedCaseStudies].sort((a, b) => {
    const timeA = new Date(a.publishedAt).getTime();
    const timeB = new Date(b.publishedAt).getTime();
    return timeB - timeA;
  });

  // 5. Return top N items
  return combined.slice(0, limit);
}
