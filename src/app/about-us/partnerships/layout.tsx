import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partnerships | About Us | Zoftcorp',
  description:
    'Explore the technology ecosystems Zoftcorp works across, including AWS, Microsoft Azure, Google Cloud, and Oracle.',
  alternates: {
    canonical: 'https://zoftcorp.com/about-us/partnerships',
  },
  openGraph: {
    title: 'Partnerships | About Us | Zoftcorp',
    description:
      'Explore the technology ecosystems Zoftcorp works across, including AWS, Microsoft Azure, Google Cloud, and Oracle.',
    url: 'https://zoftcorp.com/about-us/partnerships',
    siteName: 'Zoftcorp',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Partnerships | About Us | Zoftcorp',
    description:
      'Explore the technology ecosystems Zoftcorp works across, including AWS, Microsoft Azure, Google Cloud, and Oracle.',
  },
};

export default function PartnershipsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
