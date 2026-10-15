import { Metadata } from 'next';
import { BreadcrumbJsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'Microsoft Azure | Partnerships | About Us | ZOFT Corp',
  description:
    'Explore how ZOFT approaches cloud, database, data, performance, and architecture considerations across Microsoft Azure environments.',
  alternates: {
    canonical: 'https://zoftcorp.com/about-us/partnerships/azure',
  },
  openGraph: {
    title: 'Microsoft Azure | Partnerships | About Us | ZOFT Corp',
    description:
      'Explore how ZOFT approaches cloud, database, data, performance, and architecture considerations across Microsoft Azure environments.',
    url: 'https://zoftcorp.com/about-us/partnerships/azure',
    siteName: 'ZOFT Corp',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Microsoft Azure | Partnerships | About Us | ZOFT Corp',
    description:
      'Explore how ZOFT approaches cloud, database, data, performance, and architecture considerations across Microsoft Azure environments.',
  },
};

export default function AzurePartnershipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://zoftcorp.com' },
    { name: 'About Us', url: 'https://zoftcorp.com/about-us' },
    { name: 'Partnerships', url: 'https://zoftcorp.com/about-us/partnerships' },
    { name: 'Azure', url: 'https://zoftcorp.com/about-us/partnerships/azure' },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} />
      {children}
    </>
  );
}

