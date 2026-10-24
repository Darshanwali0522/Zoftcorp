import React from 'react';
import { Metadata } from 'next';
import { SpecializedManagedDBaaSView } from '@/components/sections/dbaas/specialized-managed-dbaas-view';

export const metadata: Metadata = {
  title: 'Specialized Managed Services (DBaaS) | ZOFT Corp',
  description:
    'Zoftcorp provides next gen database-as-a-service (DBaaS) for SQL Server, MySQL, PostgreSQL, NoSQL, and Vector databases across on-premises, cloud, and hybrid environments.',
  alternates: {
    canonical: 'https://zoftcorp.com/offerings/managed-dba-services',
  },
  openGraph: {
    title: 'Specialized Managed Services (DBaaS) | ZOFT Corp',
    description:
      'Next-generation Database-as-a-Service (DBaaS) platform designed to simplify how teams provision, operate, and scale databases across on-premises, cloud, and hybrid environments.',
    url: 'https://zoftcorp.com/offerings/managed-dba-services',
    siteName: 'ZOFT Corp',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Specialized Managed Services (DBaaS) | ZOFT Corp',
    description:
      'Next-generation Database-as-a-Service (DBaaS) platform designed to simplify how teams provision, operate, and scale databases across on-premises, cloud, and hybrid environments.',
  },
};

export default function ManagedDBAServicesOfferingPage() {
  return <SpecializedManagedDBaaSView pageUrl="https://zoftcorp.com/offerings/managed-dba-services" />;
}
