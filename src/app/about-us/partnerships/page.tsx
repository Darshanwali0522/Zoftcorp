'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  ArrowRight,
  Layers,
  Database,
  MessageSquare,
  Network,
  Compass,
} from 'lucide-react';
import {
  PARTNERSHIPS_HERO,
  PARTNERS,
  VERIFIED_TECH_ENGINES,
  PARTNERSHIP_ECOSYSTEM_AREAS,
} from '@/data/partnerships';

export default function PartnershipsPage() {
  const [activePartnerIndex, setActivePartnerIndex] = useState(0);

  const activePartner = PARTNERS[activePartnerIndex];

  return (
    <div className="w-full bg-white text-slate-900 selection:bg-[#00B3FF]/20 selection:text-[#01153B]">
      {/* 1. HERO */}
      <section className="relative w-full bg-[#01153B] text-white py-16 md:py-28 overflow-hidden border-b border-slate-800/80">
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
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#00B3FF] hover:text-[#00B3FF]/80 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to About Us</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
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

              <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-sans font-normal">
                {PARTNERSHIPS_HERO.copy}
              </p>
            </div>

            {/* Right Side Architectural Ecosystem Map */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-[#031E4D]/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-5 shadow-2xl backdrop-blur-sm">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#00B3FF]">
                    <Layers className="w-4 h-4" />
                    <span>ECOSYSTEM MAP</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest bg-[#01153B] px-2 py-0.5 rounded border border-slate-800">
                    INTEROPERABILITY
                  </span>
                </div>

                {/* Central Node Visual */}
                <div className="relative py-4 space-y-4 font-mono text-xs text-center">
                  <div className="p-3 rounded-xl bg-[#01153B] border border-[#00B3FF]/40 text-white font-bold font-sans tracking-wide">
                    ZOFT CONSULTING & ENGINEERING
                  </div>

                  <div className="text-slate-400 font-mono text-xs">↕ CROSS-PLATFORM BREADTH ↕</div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2.5 rounded-lg bg-[#01153B] border border-slate-800 text-[#FF6F00] font-bold text-[11px]">
                      AWS
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#01153B] border border-slate-800 text-[#00B3FF] font-bold text-[11px]">
                      AZURE
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#01153B] border border-slate-800 text-sky-300 font-bold text-[11px]">
                      GOOGLE CLOUD
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#01153B] border border-slate-800 text-amber-300 font-bold text-[11px]">
                      ORACLE
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>DOMAINS: CLOUD & DATABASES</span>
                  <span className="text-[#00B3FF]">PRACTICAL EXPERTISE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="relative bg-slate-50/70 text-slate-900 py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Headline */}
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
                SYSTEM INTEROPERABILITY
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-sans leading-[1.15]">
                Technology Does Not Exist in Isolation.
              </h2>
            </div>

            {/* Right Supporting Copy */}
            <div className="lg:col-span-6 pl-0 lg:pl-8 border-l-0 lg:border-l-2 border-slate-300 space-y-4">
              <p className="text-lg text-slate-700 leading-relaxed font-sans">
                Modern technology environments often span multiple platforms, databases, cloud
                services, and engineering systems.
              </p>
              <p className="text-base text-slate-600 leading-relaxed font-sans">
                ZOFT&apos;s role is to help organizations understand and work across those
                environments while keeping architecture, performance, reliability, and business
                requirements in view.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PARTNER ECOSYSTEM (PREMIUM INTERACTIVE SELECTOR) */}
      <section className="relative bg-white text-slate-900 py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-4">
              <Layers className="w-3.5 h-3.5 text-[#00B3FF]" />
              ECOSYSTEMS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-sans">
              Explore the ZOFT Technology Ecosystem
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Navigation Tabs */}
            <div
              className="lg:col-span-4 space-y-3"
              role="tablist"
              aria-label="ZOFT Technology Ecosystems"
            >
              {PARTNERS.map((partner, index) => {
                const isActive = activePartnerIndex === index;
                return (
                  <button
                    key={partner.id}
                    id={`partner-tab-${index}`}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`partner-panel-${index}`}
                    onClick={() => setActivePartnerIndex(index)}
                    className={`w-full text-left p-5 rounded-2xl transition-all duration-200 flex items-center justify-between border focus-visible:outline-2 focus-visible:outline-[#00B3FF] ${
                      isActive
                        ? 'bg-[#01153B] text-white border-[#00B3FF]/40 shadow-xl'
                        : 'bg-slate-50 text-slate-800 border-slate-200/90 hover:border-[#00B3FF]/40'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`font-mono text-xs font-bold px-2.5 py-1 rounded ${
                          isActive
                            ? 'bg-[#00B3FF]/20 text-[#00B3FF] border border-[#00B3FF]/30'
                            : 'bg-slate-200 text-slate-700'
                        }`}
                      >
                        {partner.number}
                      </span>
                      <span className="text-lg font-bold font-sans tracking-tight">
                        {partner.name}
                      </span>
                    </div>
                    <ArrowRight
                      className={`w-4 h-4 transition-transform ${
                        isActive ? 'text-[#00B3FF] translate-x-1' : 'text-slate-400'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Display Panel */}
            <div className="lg:col-span-8">
              <div
                id={`partner-panel-${activePartnerIndex}`}
                role="tabpanel"
                aria-labelledby={`partner-tab-${activePartnerIndex}`}
                className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 sm:p-12 space-y-8 shadow-sm min-h-[440px] flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                    <div className="flex items-center gap-4">
                      {activePartner.logoPath ? (
                        <div className="h-10 w-24 relative flex items-center justify-center">
                          <Image
                            src={activePartner.logoPath}
                            alt={`${activePartner.name} logo`}
                            width={96}
                            height={40}
                            className="object-contain max-h-10 w-auto"
                          />
                        </div>
                      ) : (
                        <span className="font-mono font-bold text-lg text-slate-900">
                          {activePartner.name}
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-xs text-[#01153B] font-bold bg-[#00B3FF]/10 px-3 py-1 rounded border border-[#00B3FF]/20 uppercase tracking-wider">
                      VERIFIED ECOSYSTEM
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-sans tracking-tight">
                    {activePartner.description}
                  </h3>

                  <p className="text-base text-slate-600 font-sans leading-relaxed">
                    {activePartner.details}
                  </p>

                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block">
                      CONNECTED CAPABILITIES
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activePartner.connectedAreas.map((area) => (
                        <span
                          key={area}
                          className="text-xs font-mono px-3 py-1.5 bg-white text-slate-800 rounded-lg border border-slate-200 font-semibold"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500">
                    TECHNOLOGY ECOSYSTEM // {activePartner.shortName}
                  </span>
                  <Link
                    href={activePartner.detailRoute}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#01153B] hover:text-[#00B3FF] transition-colors"
                  >
                    <span>Explore {activePartner.shortName} Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY MULTI-ECOSYSTEM EXPERTISE MATTERS */}
      <section className="relative bg-slate-50/70 text-slate-900 py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20">
                <Compass className="w-3.5 h-3.5 text-[#00B3FF]" />
                WORKLOAD-FIRST PHILOSOPHY
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-sans leading-[1.15]">
                Architecture Should Follow the Need, Not the Platform.
              </h2>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-sans">
                Organizations work across different technology ecosystems based on specific workload
                requirements, existing investments, and operational demands.
              </p>
              <p className="text-base text-slate-600 leading-relaxed font-sans">
                ZOFT brings broader expertise across databases, cloud architecture, data platforms,
                performance optimization, and technical governance into those environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONNECTION TO ZOFT CAPABILITIES */}
      <section className="relative bg-white text-slate-900 py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              CAPABILITY INTEGRATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-sans">
              Where the Ecosystem Meets the Work.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/consulting"
              className="bg-slate-50 p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-3 hover:border-[#00B3FF]/40 transition-colors group"
            >
              <h3 className="text-xl font-bold text-slate-900 font-sans group-hover:text-[#00B3FF] transition-colors">
                Consulting
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Strategic advice and platform architecture alignment.
              </p>
              <div className="pt-2 text-xs font-semibold text-[#01153B] group-hover:text-[#00B3FF] flex items-center gap-1 transition-colors">
                <span>Explore Consulting</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            <Link
              href="/offerings"
              className="bg-slate-50 p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-3 hover:border-[#00B3FF]/40 transition-colors group"
            >
              <h3 className="text-xl font-bold text-slate-900 font-sans group-hover:text-[#00B3FF] transition-colors">
                Our Offerings
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Structured technical delivery and DBA services.
              </p>
              <div className="pt-2 text-xs font-semibold text-[#01153B] group-hover:text-[#00B3FF] flex items-center gap-1 transition-colors">
                <span>Explore Offerings</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            <Link
              href="/zoftstudio"
              className="bg-[#01153B] text-white p-6 rounded-2xl border border-slate-800 shadow-md space-y-3 hover:border-[#00B3FF]/40 transition-colors group"
            >
              <h3 className="text-xl font-bold text-white font-sans group-hover:text-[#00B3FF] transition-colors">
                ZoftStudio
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Digital experience and creative technical execution.
              </p>
              <div className="pt-2 text-xs font-semibold text-[#00B3FF] flex items-center gap-1">
                <span>Explore ZoftStudio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            <Link
              href="/insights"
              className="bg-slate-50 p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-3 hover:border-[#00B3FF]/40 transition-colors group"
            >
              <h3 className="text-xl font-bold text-slate-900 font-sans group-hover:text-[#00B3FF] transition-colors">
                Insights
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Technical articles, case studies, and discussions.
              </p>
              <div className="pt-2 text-xs font-semibold text-[#01153B] group-hover:text-[#00B3FF] flex items-center gap-1 transition-colors">
                <span>Explore Insights</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. TECHNOLOGY DEPTH */}
      <section className="relative bg-slate-50/70 text-slate-900 py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-4">
              <Database className="w-3.5 h-3.5 text-[#00B3FF]" />
              VERIFIED TECH STACK
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-sans">
              Technology Depth Across Platforms & Engines
            </h2>
          </div>

          <div className="space-y-10">
            {/* Database Engines */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                VERIFIED DATABASE ENGINES
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {VERIFIED_TECH_ENGINES.filter((t) => t.category === 'database-engine').map(
                  (tech) => (
                    <div
                      key={tech.name}
                      className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm flex items-center justify-between hover:border-[#00B3FF]/30 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Database className="w-5 h-5 text-[#00B3FF]" />
                        <span className="text-base font-bold text-slate-900 font-sans">
                          {tech.name}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-slate-400">DATABASE</span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Cloud & Platform Ecosystems */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                VERIFIED CLOUD & PLATFORM ECOSYSTEMS
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {VERIFIED_TECH_ENGINES.filter((t) => t.category === 'cloud-platform').map(
                  (tech) => (
                    <div
                      key={tech.name}
                      className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col items-center justify-center space-y-3 hover:border-[#00B3FF]/30 transition-colors"
                    >
                      {tech.logoPath ? (
                        <div className="h-10 w-24 relative flex items-center justify-center">
                          <Image
                            src={tech.logoPath}
                            alt={`${tech.name} logo`}
                            width={96}
                            height={40}
                            className="object-contain max-h-10 w-auto"
                          />
                        </div>
                      ) : null}
                      <span className="text-sm font-bold text-slate-900 font-sans">{tech.name}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. VISUAL BREAK */}
      <section className="relative bg-[#01153B] text-white py-20 md:py-28 overflow-hidden border-b border-slate-800/80">
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:3rem_3rem]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00B3FF]/10 blur-[150px] rounded-full"
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.2] font-sans">
            “Different Platforms. One Practical Perspective.”
          </blockquote>

          <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-xs font-bold text-[#00B3FF]">
            {PARTNERSHIP_ECOSYSTEM_AREAS.map((area) => (
              <span
                key={area}
                className="px-4 py-2 rounded-lg bg-[#031E4D] border border-slate-800"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 8. INDIVIDUAL PARTNER PAGE NAVIGATION */}
      <section className="relative bg-slate-50/70 text-slate-900 py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              ECOSYSTEM DEEP DIVES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-sans">
              Explore Specific Ecosystem Environments
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PARTNERS.map((p) => (
              <Link
                key={p.id}
                href={p.detailRoute}
                className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-4 hover:border-[#00B3FF]/40 transition-colors group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="font-mono text-xs text-[#00B3FF] font-bold block">{p.number}</span>
                  <h3 className="text-2xl font-bold text-slate-900 font-sans group-hover:text-[#00B3FF] transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">{p.description}</p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center gap-1 text-xs font-semibold text-[#01153B] group-hover:text-[#00B3FF] transition-colors">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. ABOUT US NAVIGATION STRIP */}
      <section className="relative bg-white text-slate-900 py-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/about-us/company-story"
              className="bg-slate-50 p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-2 hover:border-[#00B3FF]/40 transition-colors group"
            >
              <h3 className="text-lg font-bold text-slate-900 font-sans group-hover:text-[#00B3FF] transition-colors">
                Company Story
              </h3>
              <p className="text-xs text-slate-600">Our background and evolution.</p>
            </Link>

            <Link
              href="/about-us/why-zoftcorp"
              className="bg-slate-50 p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-2 hover:border-[#00B3FF]/40 transition-colors group"
            >
              <h3 className="text-lg font-bold text-slate-900 font-sans group-hover:text-[#00B3FF] transition-colors">
                Why Zoftcorp?
              </h3>
              <p className="text-xs text-slate-600">Our 7 core differentiators.</p>
            </Link>

            <div className="bg-[#01153B] text-white p-6 rounded-2xl border border-slate-800 shadow-md space-y-2">
              <span className="text-[10px] font-mono text-[#00B3FF] font-bold uppercase tracking-widest bg-[#031E4D] px-2 py-0.5 rounded border border-slate-800 inline-block">
                CURRENT PAGE
              </span>
              <h3 className="text-lg font-bold text-white font-sans">Partnerships</h3>
              <p className="text-xs text-slate-300">Technology platform ecosystem.</p>
            </div>

            <Link
              href="/about-us/career"
              className="bg-slate-50 p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-2 hover:border-[#00B3FF]/40 transition-colors group"
            >
              <h3 className="text-lg font-bold text-slate-900 font-sans group-hover:text-[#00B3FF] transition-colors">
                Career
              </h3>
              <p className="text-xs text-slate-600">Opportunities to join ZOFT.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section
        aria-label="Working Across a Complex Technology Environment"
        className="relative bg-[#01153B] text-white py-24 md:py-32 overflow-hidden border-t border-slate-800"
      >
        <div
          className="pointer-events-none absolute bottom-0 right-0 w-[550px] h-[550px] bg-[#00B3FF]/10 blur-[150px] rounded-full"
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#00B3FF] border border-[#00B3FF]/20">
            <MessageSquare className="w-3.5 h-3.5" />
            START A CONVERSATION
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-sans leading-[1.12]">
            Working Across a Complex Technology Environment?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
            Let&apos;s discuss the architecture, platforms, and technology decisions behind your
            environment.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#FF6F00] hover:bg-[#e66400] text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-[#FF6F00]/25 focus-visible:outline-2 focus-visible:outline-[#FF6F00]"
            >
              Talk to ZOFT
            </Link>
            <Link
              href="/consulting"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-lg text-base font-semibold text-white hover:bg-white/10 transition-all duration-200 border border-white/20 focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
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
