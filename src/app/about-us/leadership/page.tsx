import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { BreadcrumbJsonLd } from '@/components/seo/json-ld';
import { LeadershipSection } from '@/components/sections/about/leadership-section';

export const metadata: Metadata = {
  title: 'Company Leadership | About Us | ZOFT Corp',
  description:
    'Meet the executive leadership and practice leaders driving Zoftcorp’s enterprise database engineering, cloud FinOps, commercial partnerships, and regulatory governance.',
  alternates: {
    canonical: 'https://zoftcorp.com/about-us/leadership',
  },
  openGraph: {
    title: 'Company Leadership | About Us | ZOFT Corp',
    description:
      'Meet the executive leadership and practice leaders driving Zoftcorp’s enterprise database engineering, cloud FinOps, commercial partnerships, and regulatory governance.',
    url: 'https://zoftcorp.com/about-us/leadership',
    siteName: 'ZOFT Corp',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Company Leadership | About Us | ZOFT Corp',
    description:
      'Meet the executive leadership and practice leaders driving Zoftcorp’s enterprise database engineering, cloud FinOps, commercial partnerships, and regulatory governance.',
  },
};

export default function LeadershipPage() {
  const pageUrl = 'https://zoftcorp.com/about-us/leadership';
  const breadcrumbItems = [
    { name: 'Home', url: 'https://zoftcorp.com' },
    { name: 'About Us', url: 'https://zoftcorp.com/about-us' },
    { name: 'Leadership', url: pageUrl },
  ];

  return (
    <div className="w-full bg-white text-[#01153B] selection:bg-[#00B3FF]/20 selection:text-[#01153B]">
      <BreadcrumbJsonLd items={breadcrumbItems} />

      {/* Top Header & Breadcrumb Bar */}
      <section className="bg-[#01153B] text-white pt-24 pb-6 sm:pt-28 border-b border-slate-800">
        <Container size="wide">
          <nav
            aria-label="Breadcrumb"
            className="mb-4 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400"
          >
            <Link href="/" className="hover:text-[#00B3FF] transition-colors">
              Home
            </Link>
            <span className="text-slate-600">/</span>
            <Link href="/about-us" className="hover:text-[#00B3FF] transition-colors">
              About Us
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-slate-200 truncate">Leadership</span>
          </nav>

          <div>
            <Link
              href="/about-us"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#00B3FF] hover:text-[#00B3FF]/80 transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to About Us</span>
            </Link>
          </div>
        </Container>
      </section>

      {/* Full Leadership Section */}
      <LeadershipSection id="company-leadership" />

      {/* Action CTA */}
      <section
        aria-label="Connect With Leadership"
        className="relative bg-white text-[#01153B] py-16 sm:py-20 border-t border-slate-200/90 text-center"
      >
        <Container size="wide" className="space-y-6 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#01153B] font-sans">
            Ready to Connect with Our Leadership Team?
          </h2>
          <p className="text-base text-slate-600 font-sans leading-relaxed">
            Reach out directly to discuss high-concurrency database architecture, cloud cost optimization, commercial alliances, or statutory DPDP compliance readiness.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#FF6F00] hover:bg-[#E66400] text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#FF6F00]/25 hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
            >
              Contact Our Leadership
            </Link>
            <Link
              href="/about-us/vision-mission"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-slate-700 hover:text-[#01153B] hover:bg-slate-100 transition-all duration-200 border border-slate-300 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
            >
              <span>Explore Vision &amp; Mission</span>
              <ArrowRight className="w-4 h-4 text-[#00B3FF]" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
