import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Zoftcorp? | About Us | ZOFT Corp',
  description:
    'Discover why organizations choose ZOFT for tailored technology solutions, cross-domain expertise, client-centric collaboration, measurable outcomes, and long-term partnership.',
  alternates: {
    canonical: 'https://zoftcorp.com/about-us/why-zoftcorp',
  },
  openGraph: {
    title: 'Why Zoftcorp? | About Us | ZOFT Corp',
    description:
      'Discover why organizations choose ZOFT for tailored technology solutions, cross-domain expertise, client-centric collaboration, measurable outcomes, and long-term partnership.',
    url: 'https://zoftcorp.com/about-us/why-zoftcorp',
    siteName: 'ZOFT Corp',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Zoftcorp? | About Us | ZOFT Corp',
    description:
      'Discover why organizations choose ZOFT for tailored technology solutions, cross-domain expertise, client-centric collaboration, measurable outcomes, and long-term partnership.',
  },
};

export default function WhyZoftcorpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
