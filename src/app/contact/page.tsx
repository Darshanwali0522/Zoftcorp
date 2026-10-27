import React from 'react';
import { ContactPageView } from '@/components/contact/contact-page-view';
import { getPublishedReviews } from '@/lib/supabase/reviews-service';

export const instant = false;

export default async function ContactPage() {
  const reviews = await getPublishedReviews();
  return <ContactPageView reviews={reviews} />;
}
