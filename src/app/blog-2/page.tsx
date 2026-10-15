import { Metadata } from 'next';
import { BlogListing } from '@/components/blog/blog-listing';
import { getPublishedPosts, getBlogCategories } from '@/lib/supabase/blog-service';
export const instant = false;

export const metadata: Metadata = {
  title: 'Expert Knowledge. Real-World Solutions. | Blogs | ZOFT Corp',
  description:
    'Explore our latest blogs, technical guides, and expert insights on databases, cloud, performance tuning, and modern data platforms.',
  alternates: {
    canonical: 'https://zoftcorp.com/blog-2/',
  },
  openGraph: {
    title: 'Expert Knowledge. Real-World Solutions. | Blogs | ZOFT Corp',
    description:
      'Explore our latest blogs, technical guides, and expert insights on databases, cloud, performance tuning, and modern data platforms.',
    url: 'https://zoftcorp.com/blog-2/',
    siteName: 'ZOFT Corp',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Knowledge. Real-World Solutions. | Blogs | ZOFT Corp',
    description:
      'Explore our latest blogs, technical guides, and expert insights on databases, cloud, performance tuning, and modern data platforms.',
  },
};

export default async function Blog2Page() {
  const [posts, categories] = await Promise.all([
    getPublishedPosts(),
    getBlogCategories(),
  ]);

  return (
    <BlogListing
      baseRoute="/blog-2"
      initialPosts={posts}
      initialCategories={categories}
    />
  );
}
