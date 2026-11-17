import { MetadataRoute } from 'next';
import { getPublishedPosts, DynamicBlogPost } from '@/lib/supabase/blog-service';
import { getPublishedPublications } from '@/lib/supabase/publications-service';
import { DynamicPublication } from '@/types/publications';
import { BLOG_POSTS, BlogPost as StaticBlogPost } from '@/data/blogs';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://zoftcorp.vercel.app').replace(/\/+$/, '');
  const siteBuildDate = new Date('2026-10-20T00:00:00.000Z');

  // Static core routes with verified paths, priority, and changeFrequency
  const staticRoutes: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  }[] = [
      // 1. Core
      { path: '', priority: 1.0, changeFrequency: 'daily' },
      { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },

      // 2. About Us
      { path: '/about-us/career', priority: 0.7, changeFrequency: 'monthly' },
      { path: '/about-us/partnerships', priority: 0.8, changeFrequency: 'monthly' },

      // 3. Consulting
      { path: '/consulting/ai-ready-architectures', priority: 0.8, changeFrequency: 'monthly' },
      { path: '/consulting/cloud-database-strategy', priority: 0.8, changeFrequency: 'monthly' },
      { path: '/consulting/cloud-finops', priority: 0.8, changeFrequency: 'monthly' },
      { path: '/consulting/compliance-governance', priority: 0.8, changeFrequency: 'monthly' },
      { path: '/consulting/fractional-architect', priority: 0.8, changeFrequency: 'monthly' },
      { path: '/consulting/resilience-compliance', priority: 0.8, changeFrequency: 'monthly' },

      // 4. Offerings & Solutions
      { path: '/offerings/data-engineering-and-analytics', priority: 0.8, changeFrequency: 'monthly' },
      { path: '/offerings/database-migrations-and-transformations', priority: 0.8, changeFrequency: 'monthly' },
      { path: '/offerings/managed-dba-services', priority: 0.8, changeFrequency: 'monthly' },
      { path: '/offerings/performance-tuning-delivery', priority: 0.8, changeFrequency: 'monthly' },
      { path: '/data-engineering', priority: 0.8, changeFrequency: 'monthly' },
      { path: '/database-support-services', priority: 0.8, changeFrequency: 'monthly' },
      { path: '/performance-tuning-services', priority: 0.8, changeFrequency: 'monthly' },

      // 5. Insights
      { path: '/insights/blogs', priority: 0.9, changeFrequency: 'daily' },
      { path: '/insights/events', priority: 0.8, changeFrequency: 'weekly' },
    ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: siteBuildDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // Fetch published blog posts and publications from Supabase safely in parallel
  const [postsResult, pubsResult] = await Promise.allSettled([
    getPublishedPosts(),
    getPublishedPublications(),
  ]);

  let publishedPosts: DynamicBlogPost[] = [];
  if (postsResult.status === 'fulfilled') {
    publishedPosts = postsResult.value;
  } else {
    console.warn('[sitemap] Failed to retrieve published posts from Supabase, using fallback:', postsResult.reason);
    publishedPosts = BLOG_POSTS.map((sp: StaticBlogPost) => ({
      ...sp,
      content: '',
    }));
  }

  let publishedPublications: DynamicPublication[] = [];
  if (pubsResult.status === 'fulfilled') {
    publishedPublications = pubsResult.value;
  } else {
    console.warn('[sitemap] Failed to retrieve publications from Supabase, using fallback:', pubsResult.reason);
  }

  // Build dynamic article entries using the canonical /insights/blogs route
  const seenSlugs = new Set<string>();
  const dynamicEntries: MetadataRoute.Sitemap = [];

  // Add blog posts
  for (const post of publishedPosts) {
    if (!post.slug || seenSlugs.has(post.slug)) continue;
    seenSlugs.add(post.slug);

    let lastModDate: Date = siteBuildDate;
    if (post.publishedAt) {
      const parsed = new Date(post.publishedAt);
      if (!isNaN(parsed.getTime())) {
        lastModDate = parsed;
      }
    }

    dynamicEntries.push({
      url: `${baseUrl}/insights/blogs/${encodeURIComponent(post.slug)}`,
      lastModified: lastModDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    });
  }

  // Add published case studies and white papers
  for (const pub of publishedPublications) {
    if (!pub.slug || seenSlugs.has(pub.slug)) continue;
    seenSlugs.add(pub.slug);

    let lastModDate: Date = siteBuildDate;
    if (pub.publishedAt) {
      const parsed = new Date(pub.publishedAt);
      if (!isNaN(parsed.getTime())) {
        lastModDate = parsed;
      }
    }

    const canonicalPath =
      pub.publicationType === 'white_paper'
        ? `/insights/white-papers/${encodeURIComponent(pub.slug)}`
        : `/insights/case-studies/${encodeURIComponent(pub.slug)}`;

    dynamicEntries.push({
      url: `${baseUrl}${canonicalPath}`,
      lastModified: lastModDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  }

  // Ensure legacy post 'azure-sql-managed-instance-pool' is present if not already returned
  if (!seenSlugs.has('azure-sql-managed-instance-pool')) {
    const legacy = BLOG_POSTS.find((p) => p.slug === 'azure-sql-managed-instance-pool');
    if (legacy) {
      dynamicEntries.push({
        url: `${baseUrl}/insights/blogs/azure-sql-managed-instance-pool`,
        lastModified: new Date('2024-02-12T00:00:00.000Z'),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    }
  }

  return [...staticEntries, ...dynamicEntries];
}
