import { Metadata } from 'next';
import { BreadcrumbJsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'Google Cloud | Partnerships | About Us | ZOFT Corp',
  description:
    'Explore how ZOFT approaches cloud, data, database, performance, and architecture considerations across Google Cloud environments.',
  alternates: {
    canonical: 'https://zoftcorp.com/about-us/partnerships/gcp',
  },
  openGraph: {
    title: 'Google Cloud | Partnerships | About Us | ZOFT Corp',
    description:
      'Explore how ZOFT approaches cloud, data, database, performance, and architecture considerations across Google Cloud environments.',
    url: 'https://zoftcorp.com/about-us/partnerships/gcp',
    siteName: 'ZOFT Corp',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Cloud | Partnerships | About Us | ZOFT Corp',
    description:
      'Explore how ZOFT approaches cloud, data, database, performance, and architecture considerations across Google Cloud environments.',
  },
};

export default function GcpPartnershipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://zoftcorp.com' },
    { name: 'About Us', url: 'https://zoftcorp.com/about-us' },
    { name: 'Partnerships', url: 'https://zoftcorp.com/about-us/partnerships' },
    { name: 'Google Cloud', url: 'https://zoftcorp.com/about-us/partnerships/gcp' },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} />
      {children}
    </>
  );
}

