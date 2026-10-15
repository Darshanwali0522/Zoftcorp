import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Career | About Us | ZOFT Corp',
  description:
    "Explore careers and opportunities to contribute to ZOFT's work across data, AI, cloud, databases, architecture, engineering, and digital experiences.",
  alternates: {
    canonical: 'https://zoftcorp.com/about-us/career',
  },
  openGraph: {
    title: 'Career | About Us | ZOFT Corp',
    description:
      "Explore careers and opportunities to contribute to ZOFT's work across data, AI, cloud, databases, architecture, engineering, and digital experiences.",
    url: 'https://zoftcorp.com/about-us/career',
    siteName: 'ZOFT Corp',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Career | About Us | ZOFT Corp',
    description:
      "Explore careers and opportunities to contribute to ZOFT's work across data, AI, cloud, databases, architecture, engineering, and digital experiences.",
  },
};

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
