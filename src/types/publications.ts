/**
 * Publication Types for Zoftcorp Case Studies and White Papers
 * Corresponds to Supabase table: public.case_studies_whitepapers
 */

export type PublicationType = 'case_study' | 'white_paper';

export type PublicationStatus = 'draft' | 'published';

export interface RawPublicationRecord {
  id: string;
  title: string;
  slug: string;
  publication_type: PublicationType;
  short_description?: string | null;
  content?: string | null;
  category?: string | null;
  featured_image_url?: string | null;
  pdf_url?: string | null;
  author?: string | null;
  publication_date?: string | null;
  seo_title?: string | null;
  seo_description?: string | null;
  status: PublicationStatus;
  created_at: string;
  updated_at?: string | null;
  published_at?: string | null;
  client?: string | null;
}

export interface DynamicPublication {
  id: string;
  slug: string;
  title: string;
  publicationType: PublicationType;
  publication_type: PublicationType; // Compatibility alias
  typeLabel: 'Case Study' | 'White Paper';
  shortDescription: string;
  excerpt: string; // Compatibility alias for listing cards
  content: string; // Sanitized HTML
  category: string;
  featuredImageUrl?: string | null;
  image: string; // Display image with fallback
  author: string;
  publicationDate: string;
  publishedAt: string;
  formattedDate: string;
  readingTime: string;
  seoTitle?: string;
  seoDescription?: string;
  status: PublicationStatus;
  createdAt: string;
  updatedAt?: string;
  isStaticFallback?: boolean;
  pdfUrl?: string | null;
  client?: string;
  challenge?: string;
  approach?: string;
  solution?: string;
  outcome?: string;
  technologies?: string[];
}

export interface PublicationFilterOptions {
  type?: 'all' | PublicationType;
  category?: string;
  search?: string;
}
