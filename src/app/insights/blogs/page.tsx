import { Metadata } from 'next';
import { BlogListing } from '@/components/blog/blog-listing';
import { getPublishedPosts, getBlogCategories } from '@/lib/supabase/blog-service';
import { getPublishedPublications } from '@/lib/supabase/publications-service';

export const metadata: Metadata = {
  title: 'Case Studies, White Papers & Blogs | Insights | Zoftcorp',
  description:
    'Explore verified engineering case studies, white papers, real-world outcomes, and technical blogs across databases, cloud architecture, performance tuning, and high availability.',
  alternates: {
    canonical: 'https://zoftcorp.com/insights/blogs',
  },
  openGraph: {
    title: 'Case Studies, White Papers & Blogs | Insights | Zoftcorp',
    description:
      'Explore verified engineering case studies, white papers, real-world outcomes, and technical blogs across databases, cloud architecture, performance tuning, and high availability.',
    url: 'https://zoftcorp.com/insights/blogs',
    siteName: 'Zoftcorp',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies, White Papers & Blogs | Insights | Zoftcorp',
    description:
      'Explore verified engineering case studies, white papers, real-world outcomes, and technical blogs across databases, cloud architecture, performance tuning, and high availability.',
  },
};

export default async function BlogsPage() {
  const [posts, categories, publications] = await Promise.all([
    getPublishedPosts(),
    getBlogCategories(),
    getPublishedPublications(),
  ]);

  return (
    <BlogListing
      baseRoute="/insights/blogs"
      initialPosts={posts}
      initialCategories={categories}
      initialPublications={publications}
    />
  );
}
