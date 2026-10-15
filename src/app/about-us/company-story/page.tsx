import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  Shield,
  ShieldCheck,
  Zap,
  HeartHandshake,
  Compass,
  Layers,
  Award,
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import {
  HERO_CONTENT,
  COMPANY_INTRODUCTION,
  COMPANY_VALUES,
  CORE_PANELS,
} from '@/data/company-story';

export const metadata: Metadata = {
  title: 'Company Story | About Us | ZOFT Corp',
  description:
    'Zoftcorp Innovations is a boutique consulting firm founded by industry veterans with 20+ years of expertise. Guided by honesty, hard work, and trust, we deliver enterprise-grade consulting across Data, AI, and Cloud.',
  alternates: {
    canonical: 'https://zoftcorp.com/about-us/company-story',
  },
  openGraph: {
    title: 'Company Story | About Us | ZOFT Corp',
    description:
      'Zoftcorp Innovations is a boutique consulting firm founded by industry veterans with 20+ years of expertise across Data, AI, and Cloud.',
    url: 'https://zoftcorp.com/about-us/company-story',
    siteName: 'ZOFT Corp',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Company Story | About Us | ZOFT Corp',
    description:
      'Zoftcorp Innovations is a boutique consulting firm founded by industry veterans with 20+ years of expertise across Data, AI, and Cloud.',
  },
};

export default function CompanyStoryPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Company Story - Zoftcorp',
    url: 'https://zoftcorp.com/about-us/company-story',
    description:
      'Zoftcorp Innovations is a boutique consulting firm founded by industry veterans with 20+ years of expertise across Data, AI, and Cloud.',
    mainEntity: {
      '@type': 'Organization',
      name: 'Zoftcorp Innovations',
      url: 'https://zoftcorp.com',
      logo: 'https://zoftcorp.com/brand/zoft-logo.png',
      values: ['Honesty', 'Hard Work', 'Trust'],
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://zoftcorp.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About Us',
        item: 'https://zoftcorp.com/about-us',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Company Story',
        item: 'https://zoftcorp.com/about-us/company-story',
      },
    ],
  };

  return (
    <div className="w-full bg-white text-[#01153B] font-sans selection:bg-[#00B3FF]/20 selection:text-[#01153B]">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* =========================================================================
          1. OPENING HERO (PRESERVED DESIGN WITH ORIGINAL CONTENT & BRAND LOGO)
          ========================================================================= */}
      <section
        className="relative w-full bg-[#01153B] text-white py-16 md:py-24 lg:py-28 overflow-hidden border-b border-slate-800"
        aria-label="About Us Hero"
      >
        {/* Ambient background grid and glow */}
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b18_1px,transparent_1px),linear-gradient(to_bottom,#1e293b18_1px,transparent_1px)] bg-[size:4rem_4rem]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-0 right-1/4 w-[480px] h-[480px] bg-[#00B3FF]/10 blur-[150px] rounded-full"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 left-10 w-[380px] h-[380px] bg-[#FF6F00]/10 blur-[140px] rounded-full"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <div className="mb-6">
            <Link
              href="/about-us"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#00B3FF] hover:text-cyan-300 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to About Us</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Eyebrow Tag */}
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#00B3FF] bg-[#00B3FF]/15 border border-[#00B3FF]/30">
                  <Shield className="w-3.5 h-3.5" />
                  <span>{HERO_CONTENT.eyebrow}</span>
                </span>
              </div>

              {/* Original Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
                {HERO_CONTENT.heading}
              </h1>

              {/* Original Supporting Statement */}
              <blockquote className="border-l-2 border-[#00B3FF] pl-5 py-1 text-slate-200 text-lg sm:text-xl lg:text-2xl font-sans italic font-normal leading-relaxed max-w-2xl">
                &ldquo;{HERO_CONTENT.quote}&rdquo;
              </blockquote>
            </div>

            {/* Right Side Geometric Team Composition */}
            <div className="lg:col-span-5 w-full flex items-center justify-center">
              <div className="relative w-full max-w-[480px] lg:max-w-none">
                <div
                  className="absolute -inset-4 bg-gradient-to-r from-[#00B3FF]/20 to-[#FF6F00]/20 rounded-3xl blur-2xl opacity-60"
                  aria-hidden="true"
                />
                <div className="relative rounded-2xl overflow-hidden p-2 sm:p-4">
                  <Image
                    src={HERO_CONTENT.image}
                    alt="Zoftcorp Geometric Composition"
                    width={680}
                    height={430}
                    className="w-full h-auto object-contain max-h-[420px] drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          2. BREADCRUMB BAR (HOME / ABOUT US / COMPANY STORY)
          ========================================================================= */}
      <div className="bg-[#FAFAFA] border-b border-slate-200/80 py-3 text-xs text-slate-600 font-sans">
        <Container>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 list-none p-0 m-0">
              <li>
                <Link href="/" className="hover:text-[#00B3FF] transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-slate-400">/</li>
              <li>
                <Link href="/about-us" className="hover:text-[#00B3FF] transition-colors">
                  About Us
                </Link>
              </li>
              <li className="text-slate-400">/</li>
              <li className="text-slate-900 font-medium" aria-current="page">
                Company Story
              </li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* =========================================================================
          3. RESTORED ORIGINAL COMPANY INTRODUCTION (TECH SPHERE + 3 PARAGRAPHS)
          ========================================================================= */}
      <section
        className="relative bg-white text-[#01153B] py-16 md:py-24 border-b border-slate-200/90"
        aria-label="Company Introduction"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Technology-themed Image */}
            <div className="lg:col-span-5 w-full flex items-center justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-[420px] lg:max-w-none">
                <div
                  className="absolute -inset-2 bg-[#00B3FF]/10 rounded-full blur-2xl"
                  aria-hidden="true"
                />
                <div className="relative p-4 rounded-3xl bg-slate-50/80 border border-slate-200/80 shadow-sm flex items-center justify-center">
                  <Image
                    src={COMPANY_INTRODUCTION.image}
                    alt="Data, AI, and Design Innovation at Zoftcorp"
                    width={560}
                    height={410}
                    className="w-full h-auto object-contain max-h-[380px] drop-shadow-md"
                  />
                </div>
              </div>
            </div>

            {/* Right: Restored Authentic Content */}
            <div className="lg:col-span-7 space-y-6 text-left order-1 lg:order-2">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
                {COMPANY_INTRODUCTION.eyebrow}
              </span>

              {/* Exact Original Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#01153B] font-sans leading-[1.18]">
                {COMPANY_INTRODUCTION.heading}
              </h2>

              <div className="w-16 h-1 bg-gradient-to-r from-[#00B3FF] to-[#FF6F00] rounded-full" />

              {/* Three Concise Original Paragraphs */}
              <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-sans font-normal">
                <p>
                  <strong>Zoftcorp Innovations</strong> is a boutique consulting firm founded by
                  industry veterans with <strong>20+ years of expertise</strong>. Guided by our values
                  of <strong>honesty, hard work, and trust</strong>, we deliver enterprise-grade
                  consulting across <strong>Data, AI, and Cloud</strong>.
                </p>

                <p>
                  Our <strong>Data &amp; AI Services</strong> help organizations unlock value through
                  strategy, engineering, modernization, and analytics, powered by our proprietary{' '}
                  <strong>Datacops platform</strong> for resilience and precision.
                </p>

                <p>
                  Through <strong>ZoftStudio</strong>, we craft bold, consistent digital experiences
                  that blend creativity with enterprise-grade design discipline — building trusted
                  partnerships that last.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          4. PRESERVED "A COMPANY BUILT ON EXPERIENCE AND TRUST" (3 VALUES CARDS)
          ========================================================================= */}
      <section
        className="relative bg-slate-50/70 text-[#01153B] py-16 md:py-24 border-b border-slate-200/90"
        aria-label="Core Values"
      >
        <Container>
          <div className="max-w-3xl mb-14 text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#FF6F00]/10 text-[#FF6F00] border border-[#FF6F00]/20 mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FF6F00]" />
              OUR FOUNDATION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#01153B] font-sans leading-[1.15]">
              A Company Built on Experience and Trust.
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-sans mt-4">
              Zoftcorp describes itself as a boutique consulting firm founded by industry veterans,
              with a foundation built around honesty, hard work, and trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COMPANY_VALUES.map((val, idx) => {
              const ValueIcon =
                idx === 0 ? ShieldCheck : idx === 1 ? Zap : HeartHandshake;
              const accentColor =
                idx === 0
                  ? 'text-[#00B3FF] bg-[#00B3FF]/10 border-[#00B3FF]/20'
                  : idx === 1
                  ? 'text-[#FF6F00] bg-[#FF6F00]/10 border-[#FF6F00]/20'
                  : 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20';

              return (
                <div
                  key={val.name}
                  className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6 hover:border-[#00B3FF]/50 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#01153B] bg-slate-100 px-2.5 py-1 rounded border border-slate-200 uppercase tracking-wider">
                        0{idx + 1} / VALUE
                      </span>
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center border ${accentColor}`}
                      >
                        <ValueIcon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#01153B] font-sans tracking-tight group-hover:text-[#00B3FF] transition-colors">
                      {val.name}
                    </h3>

                    <p className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider">
                      {val.tagline}
                    </p>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                      {val.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 text-[11px] font-mono text-slate-400 uppercase tracking-widest">
                    CORE VALUE PRINCIPLE
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          5. RESTORED ORIGINAL CONTENT PANELS: MISSION, WHAT WE DO, WHY CHOOSE US
          ========================================================================= */}
      <section
        className="relative bg-[#01153B] text-white py-16 md:py-24 overflow-hidden"
        aria-label="Mission, What We Do, and Why Choose Us"
      >
        {/* Ambient lighting accents */}
        <div
          className="pointer-events-none absolute top-0 left-1/3 w-[500px] h-[350px] bg-[#00B3FF]/10 blur-[140px] rounded-full"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 right-10 w-[400px] h-[300px] bg-[#FF6F00]/10 blur-[130px] rounded-full"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <div className="max-w-3xl mb-12 text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase text-[#00B3FF] bg-[#00B3FF]/10 border border-[#00B3FF]/20 mb-4">
              <Compass className="w-3.5 h-3.5" />
              <span>CORE COMMITMENT</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans leading-[1.15]">
              Purpose, Capabilities, and Commitment.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans mt-3">
              Delivering tailored digital solutions with client-centric focus at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CORE_PANELS.map((panel, idx) => {
              const PanelIcon = idx === 0 ? Compass : idx === 1 ? Layers : Award;
              const iconAccent =
                idx === 0
                  ? 'text-[#00B3FF] bg-[#00B3FF]/15 border-[#00B3FF]/30'
                  : idx === 1
                  ? 'text-[#FF6F00] bg-[#FF6F00]/15 border-[#FF6F00]/30'
                  : 'text-sky-300 bg-sky-400/15 border-sky-400/30';

              return (
                <div
                  key={panel.id}
                  className="bg-[#031E4D] rounded-3xl p-8 sm:p-9 border border-slate-700/80 shadow-xl flex flex-col justify-between space-y-6 hover:border-[#00B3FF]/50 transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#00B3FF] bg-[#01153B] px-2.5 py-1 rounded border border-slate-750 uppercase tracking-wider">
                        {panel.number} / COMMITMENT
                      </span>
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center border ${iconAccent}`}
                      >
                        <PanelIcon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans group-hover:text-[#00B3FF] transition-colors">
                      {panel.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans font-normal">
                      {panel.content}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    <span>ZOFTCORP CORE</span>
                    <span className="text-[#00B3FF]">CLIENT-CENTRIC</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
}
