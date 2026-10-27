export interface ClientReview {
  id: string;
  clientName: string;
  clientRole?: string;
  companyName: string;
  companyIndustry?: string;
  rating?: number; // 1 to 5
  quote: string;
  projectScope?: string;
  verifiedAt?: string;
  published: boolean;
}

/**
 * Production reviews data source ready for future admin-portal publishing.
 * Initialized to an empty array so no fabricated testimonials or fake client names appear.
 */
export const CLIENT_REVIEWS: ClientReview[] = [];
