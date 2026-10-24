import React from 'react';
import { Metadata } from 'next';
import { DatabaseMigrationsView } from '@/components/sections/migrations/database-migrations-view';

export const metadata: Metadata = {
  title: 'Migration & Transformations | ZOFT Corp',
  description:
    'At Zoftcorp, we simplify the complexity of database migrations — whether you’re modernizing within the same ecosystem or transforming across platforms. Our proven methodology ensures minimal downtime, cost-aware execution, and compliance-ready transitions.',
  alternates: {
    canonical: 'https://zoftcorp.com/offerings/database-migrations-and-transformations',
  },
  openGraph: {
    title: 'Migration & Transformations | ZOFT Corp',
    description:
      'At Zoftcorp, we simplify the complexity of database migrations — whether you’re modernizing within the same ecosystem or transforming across platforms. Our proven methodology ensures minimal downtime, cost-aware execution, and compliance-ready transitions.',
    url: 'https://zoftcorp.com/offerings/database-migrations-and-transformations',
    siteName: 'ZOFT Corp',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Migration & Transformations | ZOFT Corp',
    description:
      'At Zoftcorp, we simplify the complexity of database migrations — whether you’re modernizing within the same ecosystem or transforming across platforms. Our proven methodology ensures minimal downtime, cost-aware execution, and compliance-ready transitions.',
  },
};

export default function DatabaseMigrationsOfferingPage() {
  return (
    <DatabaseMigrationsView pageUrl="https://zoftcorp.com/offerings/database-migrations-and-transformations" />
  );
}
