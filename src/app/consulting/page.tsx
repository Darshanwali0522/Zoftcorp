import { Metadata } from 'next';
import { ConsultingHero } from '@/components/sections/consulting/consulting-hero';
import { ConsultingCapabilities } from '@/components/sections/consulting/consulting-capabilities';
import { ConsultingVisualBreak } from '@/components/sections/consulting/consulting-visual-break';
import { ConsultingApproach } from '@/components/sections/consulting/consulting-approach';
import { ConsultingCTA } from '@/components/sections/consulting/consulting-cta';

export const metadata: Metadata = {
  title: 'Consulting | ZOFT Corp',
  description:
    'Enterprise technology consulting across cloud architecture, database strategy, AI-ready infrastructure, performance audits, Cloud FinOPs, and compliance.',
  alternates: {
    canonical: 'https://zoftcorp.com/consulting',
  },
  openGraph: {
    title: 'Consulting | ZOFT Corp',
    description:
      'Enterprise technology consulting across cloud architecture, database strategy, AI-ready infrastructure, performance audits, Cloud FinOPs, and compliance.',
    url: 'https://zoftcorp.com/consulting',
    siteName: 'ZOFT Corp',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consulting | ZOFT Corp',
    description:
      'Enterprise technology consulting across cloud architecture, database strategy, AI-ready infrastructure, performance audits, Cloud FinOPs, and compliance.',
  },
};

export default function ConsultingPage() {
  return (
    <div className="w-full">
      <ConsultingHero />
      <ConsultingCapabilities />
      <ConsultingVisualBreak />
      <ConsultingApproach />
      <ConsultingCTA />
    </div>
  );
}
