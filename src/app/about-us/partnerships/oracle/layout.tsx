import { Metadata } from 'next';
import { BreadcrumbJsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'Oracle | Partnerships | About Us | ZOFT Corp',
  description:
    'Explore how ZOFT approaches database, cloud, data, performance, and architecture considerations across Oracle environments.',
  alternates: {
    canonical: 'https://zoftcorp.com/about-us/partnerships/oracle',
  },
  openGraph: {
    title: 'Oracle | Partnerships | About Us | ZOFT Corp',
    description:
      'Explore how ZOFT approaches database, cloud, data, performance, and architecture considerations across Oracle environments.',
    url: 'https://zoftcorp.com/about-us/partnerships/oracle',
    siteName: 'ZOFT Corp',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oracle | Partnerships | About Us | ZOFT Corp',
    description:
      'Explore how ZOFT approaches database, cloud, data, performance, and architecture considerations across Oracle environments.',
  },
};

export default function OraclePartnershipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://zoftcorp.com' },
    { name: 'About Us', url: 'https://zoftcorp.com/about-us' },
    { name: 'Partnerships', url: 'https://zoftcorp.com/about-us/partnerships' },
    { name: 'Oracle', url: 'https://zoftcorp.com/about-us/partnerships/oracle' },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} />
      {children}
    </>
  );
}

