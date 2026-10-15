import BlogPostPage, {
  generateStaticParams,
  generateMetadata,
} from '@/app/insights/blogs/[slug]/page';
export const instant = false;
export { generateStaticParams, generateMetadata };
export default BlogPostPage;
