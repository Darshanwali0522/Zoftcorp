import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CONSULTING_CAPABILITIES_DATA } from '@/data/consulting';
import { ConsultingDetailHero } from '@/components/sections/consulting-detail/consulting-detail-hero';
import { ConsultingDetailWhyMatters } from '@/components/sections/consulting-detail/consulting-detail-why-matters';
import { ConsultingDetailFocusAreas } from '@/components/sections/consulting-detail/consulting-detail-focus-areas';
import { ConsultingDetailVisualBreak } from '@/components/sections/consulting-detail/consulting-detail-visual-break';
import { ConsultingDetailApproach } from '@/components/sections/consulting-detail/consulting-detail-approach';
import { ConsultingDetailDeliverables } from '@/components/sections/consulting-detail/consulting-detail-deliverables';
import { ConsultingDetailCTA } from '@/components/sections/consulting-detail/consulting-detail-cta';
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld';

interface SubPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return CONSULTING_CAPABILITIES_DATA.map((cap) => ({
    slug: cap.id,
  }));
}

export async function generateMetadata({ params }: SubPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const capability = CONSULTING_CAPABILITIES_DATA.find((c) => c.id === resolvedParams.slug);

  if (!capability) {
    return {
      title: 'Consulting | ZOFT Corp',
    };
  }

  const pageUrl = `https://zoftcorp.com/consulting/${capability.id}`;

  return {
    title: `${capability.name} | ZOFT Corp`,
    description: capability.description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${capability.name} | ZOFT Corp`,
      description: capability.description,
      url: pageUrl,
      siteName: 'ZOFT Corp',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${capability.name} | ZOFT Corp`,
      description: capability.description,
    },
  };
}

export default async function ConsultingSubPage({ params }: SubPageProps) {
  const resolvedParams = await params;
  const capability = CONSULTING_CAPABILITIES_DATA.find((c) => c.id === resolvedParams.slug);

  if (!capability) {
    notFound();
  }

  const pageUrl = `https://zoftcorp.com/consulting/${capability.id}`;
  const breadcrumbItems = [
    { name: 'Home', url: 'https://zoftcorp.com' },
    { name: 'Consulting', url: 'https://zoftcorp.com/consulting' },
    { name: capability.name, url: pageUrl },
  ];

  return (
    <div className="w-full">
      <ServiceJsonLd name={capability.name} description={capability.description} url={pageUrl} />
      <BreadcrumbJsonLd items={breadcrumbItems} />

      {/* 1. HERO */}
      <ConsultingDetailHero capability={capability} />

      {/* 1.5. OVERVIEW */}
      {capability.overviewHeadline && (
        <section className="relative bg-white text-[#01153B] py-16 md:py-20 border-b border-slate-200/90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl space-y-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
                OVERVIEW
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#01153B] font-sans leading-[1.15]">
                {capability.overviewHeadline}
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-[#00B3FF] to-[#FF6F00] rounded-full my-4" />
              <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-sans font-normal">
                {capability.overviewCopy}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* 2. WHY THIS MATTERS & ARCHITECTURE BEFORE INFRASTRUCTURE */}
      <ConsultingDetailWhyMatters capability={capability} />

      {/* 3. TECHNICAL FOCUS AREAS */}
      <ConsultingDetailFocusAreas capability={capability} />

      {/* 4. VISUAL BREAK */}
      <ConsultingDetailVisualBreak capability={capability} />

      {/* 5. OUR APPROACH */}
      <ConsultingDetailApproach capability={capability} />

      {/* 6. KEY TECHNICAL DELIVERABLES */}
      <ConsultingDetailDeliverables capability={capability} />

      {/* 7. FINAL CTA */}
      <ConsultingDetailCTA capability={capability} />
    </div>
  );
}

