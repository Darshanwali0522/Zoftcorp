import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  ArrowRight,
  Network,
  Database,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import {
  PARTNERSHIPS_HERO,
  VERIFIED_TECH_ENGINES,
} from '@/data/partnerships';
import { getPublishedPartners } from '@/lib/supabase/partners-service';
import { PartnershipForm } from '@/components/forms/partnership-form';

export const instant = false;

export default async function PartnershipsPage() {
  const partners = await getPublishedPartners();
  return (
    <div className="w-full bg-white text-slate-900 selection:bg-[#00B3FF]/20 selection:text-[#01153B]">
      {/* 1. CONCISE HERO */}
      <section className="relative w-full bg-[#01153B] text-white pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden border-b border-slate-800">
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-0 right-1/4 w-[480px] h-[480px] bg-[#00B3FF]/15 blur-[150px] rounded-full"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-6">
            <Link
              href="/about-us"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#00B3FF] hover:text-[#00B3FF]/80 transition-colors focus-visible:outline-2 focus-visible:outline-[#00B3FF] rounded px-1 py-0.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to About Us</span>
            </Link>
          </div>

          <div className="max-w-3xl space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#00B3FF] bg-[#00B3FF]/10 border border-[#00B3FF]/20">
              <Network className="w-3.5 h-3.5" />
              <span>{PARTNERSHIPS_HERO.eyebrow}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] font-sans">
              Technology Ecosystems.{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00B3FF] via-sky-200 to-[#FF6F00] mt-1">
                Connected by Expertise.
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed font-sans font-normal">
              Zoftcorp collaborates across leading hyperscale cloud providers and enterprise database platforms to architect, tune, and maintain resilient data infrastructure with vendor-agnostic technical discipline.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#partner-grid"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#00B3FF] hover:bg-[#0099db] text-[#01153B] font-bold text-sm transition-all duration-200 shadow-md shadow-[#00B3FF]/20 focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
              >
                <span>View Partner Ecosystems</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#partnership-inquiry"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition-all duration-200 border border-slate-700 focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
              >
                <span>Partner Inquiry Form</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PARTNER ECOSYSTEM GRID (MODERN, CONCISE CARDS) */}
      <section id="partner-grid" className="relative bg-slate-50/70 text-slate-900 py-20 md:py-24 border-b border-slate-200/80 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#00B3FF]" />
              VERIFIED ECOSYSTEMS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-sans">
              Enterprise Cloud &amp; Database Ecosystems
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2 font-sans">
              Practical engineering advisory and technical delivery across verified platform environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:border-[#00B3FF]/50 hover:shadow-xl transition-all duration-300 p-8 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle top accent gradient */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00B3FF]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="space-y-6">
                  {/* Top Bar: Logo & Index */}
                  <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-5">
                    <div className="h-12 w-32 relative flex items-center justify-start bg-slate-50/80 px-3 py-1.5 rounded-lg border border-slate-200/60 group-hover:border-[#00B3FF]/30 transition-colors">
                      {partner.logoPath ? (
                        <Image
                          src={partner.logoPath}
                          alt={`${partner.name} logo`}
                          width={120}
                          height={40}
                          className="object-contain max-h-8 w-auto"
                        />
                      ) : (
                        <span className="font-mono font-bold text-sm text-[#01153B]">
                          {partner.name}
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-[#00B3FF] transition-colors">
                      ECOSYSTEM // {partner.number}
                    </span>
                  </div>

                  {/* Partner Name & Factual Summary */}
                  <div className="space-y-2.5">
                    <h3 className="text-2xl font-bold text-slate-900 font-sans tracking-tight group-hover:text-[#01153B] transition-colors">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-slate-600 font-sans leading-relaxed">
                      {partner.details}
                    </p>
                  </div>

                  {/* Connected Capabilities Pills */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                      Core Competencies
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {partner.connectedAreas.map((area) => (
                        <span
                          key={area}
                          className="text-xs font-sans px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md border border-slate-200/80 font-medium group-hover:bg-[#00B3FF]/5 group-hover:border-[#00B3FF]/20 group-hover:text-[#01153B] transition-colors"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">
                    {partner.shortName} Advisory
                  </span>
                  <Link
                    href={partner.detailRoute}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0066CC] hover:text-[#004C99] group-hover:translate-x-0.5 transition-all focus-visible:outline-2 focus-visible:outline-[#00B3FF] rounded px-1.5 py-0.5"
                    aria-label={`Explore ${partner.name} Details`}
                  >
                    <span>Explore {partner.shortName} Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VERIFIED ENGINES & PLATFORMS (COMPACT & CLEAN) */}
      <section className="relative bg-white text-slate-900 py-16 md:py-20 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20">
              <Database className="w-3.5 h-3.5 text-[#00B3FF]" />
              TECHNICAL ENGINES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-sans">
              Verified Database &amp; Platform Engines
            </h2>
            <p className="text-sm text-slate-600 font-sans">
              Direct engineering depth across enterprise transactional engines and hyperscale platforms.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {VERIFIED_TECH_ENGINES.map((tech) => (
              <div
                key={tech.name}
                className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 text-center flex flex-col items-center justify-center space-y-2 hover:border-[#00B3FF]/40 hover:bg-white transition-all shadow-xs"
              >
                {tech.logoPath ? (
                  <div className="h-8 w-16 relative flex items-center justify-center">
                    <Image
                      src={tech.logoPath}
                      alt={`${tech.name} logo`}
                      width={64}
                      height={32}
                      className="object-contain max-h-7 w-auto"
                    />
                  </div>
                ) : (
                  <Database className="w-6 h-6 text-[#0066CC]" />
                )}
                <span className="text-xs font-bold text-slate-800 font-sans line-clamp-1">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PARTNERSHIP INQUIRY FORM */}
      <section id="partnership-inquiry" className="relative bg-slate-50/70 text-slate-900 py-20 md:py-28 border-b border-slate-200/80 scroll-mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20">
              <Network className="w-3.5 h-3.5 text-[#00B3FF]" />
              STRATEGIC ALLIANCES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-sans">
              Partner With Zoftcorp
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
              Interested in strategic alliance, co-engineering, or joint enterprise delivery? Submit your organization&apos;s details below and our partnerships team will connect with you.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200/90 shadow-sm">
            <PartnershipForm />
          </div>
        </div>
      </section>

      {/* 5. CONCISE FINAL CTA */}
      <section
        aria-label="Working Across a Complex Technology Environment"
        className="relative bg-[#01153B] text-white py-20 md:py-24 overflow-hidden border-t border-slate-800"
      >
        <div
          className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00B3FF]/10 blur-[140px] rounded-full"
          aria-hidden="true"
        />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#00B3FF] border border-[#00B3FF]/20">
            <MessageSquare className="w-3.5 h-3.5" />
            DIRECT ADVISORY
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans leading-[1.15]">
            Working Across a Complex Multi-Cloud Environment?
          </h2>

          <p className="text-base text-slate-300 leading-relaxed font-sans max-w-xl mx-auto">
            Discuss architecture, performance trade-offs, and platform decisions with our enterprise engineering team.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-[#FF6F00] hover:bg-[#e66400] text-white font-semibold text-sm transition-all duration-200 shadow-md shadow-[#FF6F00]/25 focus-visible:outline-2 focus-visible:outline-[#FF6F00]"
            >
              Talk to ZOFT
            </Link>
            <Link
              href="/consulting"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-white hover:bg-white/10 transition-all duration-200 border border-white/20 focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
            >
              <span>Explore Consulting</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
