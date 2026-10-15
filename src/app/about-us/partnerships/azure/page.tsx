'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  ArrowRight,
  Layers,
  Sparkles,
  Database,
  MessageSquare,
  Cpu,
  Compass,
  LineChart,
} from 'lucide-react';
import {
  AZURE_PARTNERSHIP_HERO,
  AZURE_ARCHITECTURE_AREAS,
  AZURE_DATABASE_DEPTH,
  AZURE_RELATED_CONSULTING,
  AZURE_RELATED_OFFERINGS,
} from '@/data/partnerships/azure';

export default function AzurePartnershipPage() {
  const [activeAreaIndex, setActiveAreaIndex] = useState(0);

  const activeArea = AZURE_ARCHITECTURE_AREAS[activeAreaIndex];

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
          <div className="mb-6 flex items-center gap-4 text-xs font-mono font-semibold uppercase tracking-wider">
            <Link
              href="/about-us/partnerships"
              className="inline-flex items-center gap-2 text-[#00B3FF] hover:text-[#00B3FF]/80 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Partnerships</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#00B3FF] bg-[#00B3FF]/10 border border-[#00B3FF]/20">
                <Image
                  src={AZURE_PARTNERSHIP_HERO.logoPath}
                  alt="Microsoft Azure logo"
                  width={24}
                  height={14}
                  className="object-contain h-3.5 w-auto"
                />
                <span>{AZURE_PARTNERSHIP_HERO.eyebrow}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] font-sans">
                Cloud Architecture With Azure.{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00B3FF] via-sky-200 to-[#FF6F00] mt-1">
                  Guided by Technical Expertise.
                </span>
              </h1>

              <blockquote className="border-l-2 border-[#00B3FF] pl-4 py-1 text-slate-200 text-lg sm:text-xl font-sans italic font-normal leading-relaxed">
                &ldquo;{AZURE_PARTNERSHIP_HERO.copy}&rdquo;
              </blockquote>
            </div>

            {/* Right Side Azure Architecture Diagram */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-[#031E4D]/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-5 shadow-2xl backdrop-blur-sm">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#00B3FF]">
                    <Layers className="w-4 h-4" />
                    <span>AZURE ARCHITECTURE MODEL</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest bg-[#01153B] px-2 py-0.5 rounded border border-slate-800">
                    ECOSYSTEM DEPTH
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs text-center">
                  <div className="p-3 rounded-xl bg-[#01153B] border border-[#00B3FF]/40 text-[#00B3FF] font-bold font-sans tracking-wide flex items-center justify-center gap-2">
                    <Image
                      src={AZURE_PARTNERSHIP_HERO.logoPath}
                      alt="Microsoft Azure logo"
                      width={24}
                      height={14}
                      className="object-contain h-3.5 w-auto"
                    />
                    <span>MICROSOFT AZURE ENVIRONMENT</span>
                  </div>

                  <div className="text-slate-400 text-xs">↓ TECHNICAL INTEGRATION ↓</div>

                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2 rounded-lg bg-[#01153B] border border-slate-800 text-slate-200">
                      CLOUD ARCHITECTURE
                    </div>
                    <div className="p-2 rounded-lg bg-[#01153B] border border-slate-800 text-slate-200">
                      DATABASE STRATEGY
                    </div>
                    <div className="p-2 rounded-lg bg-[#01153B] border border-slate-800 text-slate-200">
                      DATA ENGINEERING
                    </div>
                    <div className="p-2 rounded-lg bg-[#01153B] border border-slate-800 text-slate-200">
                      PERFORMANCE AUDITS
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>ENVIRONMENT: AZURE</span>
                  <span className="text-[#00B3FF]">ZOFT PERSPECTIVE</span>
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
                TECHNICAL PERSPECTIVE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-sans leading-[1.15]">
                Cloud Strategy Extends Beyond the Platform.
              </h2>
            </div>

            {/* Right Supporting Copy */}
            <div className="lg:col-span-6 pl-0 lg:pl-8 border-l-0 lg:border-l-2 border-slate-300 space-y-4">
              <p className="text-lg text-slate-700 leading-relaxed font-sans">
                Azure environments involve more than infrastructure selection.
              </p>
              <p className="text-base text-slate-600 leading-relaxed font-sans">
                Technology decisions can also involve database architecture, workload requirements,
                performance, cost discipline, data, security governance, operational needs, and long-term
                architectural direction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. AZURE + ZOFT ECOSYSTEM */}
      <section className="relative bg-white text-slate-900 py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-4">
              <Layers className="w-3.5 h-3.5 text-[#00B3FF]" />
              CONCEPTUAL RELATIONSHIP
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-sans">
              Where Azure Meets the ZOFT Perspective
            </h2>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-3 items-center text-center font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-[#01153B] text-white font-bold font-sans flex items-center justify-center gap-2">
                <Image
                  src={AZURE_PARTNERSHIP_HERO.logoPath}
                  alt="Microsoft Azure logo"
                  width={18}
                  height={14}
                  className="object-contain h-3.5 w-auto"
                />
                <span>AZURE</span>
              </div>
              <div className="text-slate-400 font-bold hidden md:block">→</div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 font-bold font-sans">
                CLOUD ARCHITECTURE
              </div>
              <div className="text-slate-400 font-bold hidden md:block">→</div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 font-bold font-sans">
                DATABASE STRATEGY
              </div>
              <div className="text-slate-400 font-bold hidden md:block">→</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-center text-center font-mono text-xs mt-4 pt-4 border-t border-slate-200/80">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 font-bold font-sans">
                DATA ENGINEERING
              </div>
              <div className="text-slate-400 font-bold hidden md:block">→</div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 font-bold font-sans">
                PERFORMANCE
              </div>
              <div className="text-slate-400 font-bold hidden md:block">→</div>
              <div className="p-3.5 rounded-xl bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/30 font-bold font-sans">
                TECHNICAL ARCHITECTURE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE AREAS (INTERACTIVE SELECTOR) */}
      <section className="relative bg-slate-50/70 text-slate-900 py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#00B3FF]" />
              ARCHITECTURAL CONSIDERATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-sans">
              Areas That Shape the Architecture
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Navigation Tabs */}
            <div
              className="lg:col-span-5 space-y-2.5"
              role="tablist"
              aria-label="Areas That Shape Azure Architecture"
            >
              {AZURE_ARCHITECTURE_AREAS.map((area, index) => {
                const isActive = activeAreaIndex === index;
                return (
                  <button
                    key={area.id}
                    id={`area-tab-${index}`}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`area-panel-${index}`}
                    onClick={() => setActiveAreaIndex(index)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-200 flex items-center justify-between border focus-visible:outline-2 focus-visible:outline-[#00B3FF] ${
                      isActive
                        ? 'bg-[#01153B] text-white border-[#00B3FF]/40 shadow-lg'
                        : 'bg-white text-slate-800 border-slate-200/90 hover:border-[#00B3FF]/40'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`font-mono text-xs font-bold px-2.5 py-1 rounded ${
                          isActive
                            ? 'bg-[#00B3FF]/20 text-[#00B3FF] border border-[#00B3FF]/30'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {area.number}
                      </span>
                      <span className="text-base font-bold font-sans tracking-tight">
                        {area.title}
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
            <div className="lg:col-span-7">
              <div
                id={`area-panel-${activeAreaIndex}`}
                role="tabpanel"
                aria-labelledby={`area-tab-${activeAreaIndex}`}
                className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 space-y-6 shadow-sm min-h-[380px] flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                    <span className="font-mono text-xs font-bold text-[#01153B] bg-[#00B3FF]/10 px-3 py-1 rounded border border-[#00B3FF]/20 uppercase tracking-wider">
                      AREA {activeArea.number}
                    </span>
                    <span className="font-mono text-xs text-slate-500 font-semibold uppercase tracking-wider">
                      {activeArea.tagline}
                    </span>
                  </div>

                  <h3 className="text-3xl font-extrabold text-slate-900 font-sans tracking-tight">
                    {activeArea.title}
                  </h3>

                  <p className="text-lg text-slate-800 font-semibold font-sans leading-relaxed">
                    {activeArea.description}
                  </p>

                  <p className="text-base text-slate-600 font-sans leading-relaxed pt-2">
                    {activeArea.details}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 text-xs font-mono text-slate-500">
                  EDITORIAL ARCHITECTURE PERSPECTIVE // AZURE
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CLOUD + DATABASE DEPTH */}
      <section className="relative bg-white text-slate-900 py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-4">
              <Database className="w-3.5 h-3.5 text-[#00B3FF]" />
              DATABASE ALIGNMENT
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-sans">
              Cloud Infrastructure Still Depends on the Data Layer.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-sans mt-4">
              Regardless of cloud platform, database engines remain core to organizational workloads.
              ZOFT connects Azure cloud strategy directly with verified database engine capabilities
              across SQL Server, PostgreSQL, and MySQL.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {AZURE_DATABASE_DEPTH.map((engine) => (
              <div
                key={engine.name}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200/90 shadow-sm flex items-center justify-between hover:border-[#00B3FF]/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Database className="w-5 h-5 text-[#00B3FF]" />
                  <span className="text-base font-bold text-slate-900 font-sans">
                    {engine.name}
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-400">VERIFIED ENGINE</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. COST + PERFORMANCE */}
      <section className="relative bg-slate-50/70 text-slate-900 py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20">
                <LineChart className="w-3.5 h-3.5 text-[#00B3FF]" />
                WORKLOAD BALANCING
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-sans leading-[1.15]">
                Architecture Decisions Affect More Than Performance.
              </h2>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-sans">
                Workload efficiency in cloud environments is an interconnected balance between
                performance, cost discipline, reliability, operations, and scalability.
              </p>

              <div className="pt-2 flex flex-col gap-3 font-sans text-sm font-semibold text-slate-800">
                <Link
                  href="/consulting/performance-audits"
                  className="p-4 bg-white rounded-xl border border-slate-200 flex items-center justify-between hover:border-[#00B3FF]/40 transition-colors group"
                >
                  <span className="text-slate-900 group-hover:text-[#00B3FF] transition-colors">Performance Audits</span>
                  <ArrowRight className="w-4 h-4 text-[#00B3FF]" />
                </Link>

                <Link
                  href="/consulting/cloud-finops"
                  className="p-4 bg-white rounded-xl border border-slate-200 flex items-center justify-between hover:border-[#00B3FF]/40 transition-colors group"
                >
                  <span className="text-slate-900 group-hover:text-[#00B3FF] transition-colors">Cloud FinOPs Strategy</span>
                  <ArrowRight className="w-4 h-4 text-[#00B3FF]" />
                </Link>

                <Link
                  href="/offerings/performance-tuning-delivery"
                  className="p-4 bg-white rounded-xl border border-slate-200 flex items-center justify-between hover:border-[#00B3FF]/40 transition-colors group"
                >
                  <span className="text-slate-900 group-hover:text-[#00B3FF] transition-colors">Performance Tuning Delivery</span>
                  <ArrowRight className="w-4 h-4 text-[#00B3FF]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONSULTING + AZURE */}
      <section className="relative bg-white text-slate-900 py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-4">
              <Compass className="w-3.5 h-3.5 text-[#00B3FF]" />
              STRATEGIC ADVISORY
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-sans">
              Architecture Before Infrastructure.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-sans mt-4">
              ZOFT&apos;s Consulting capabilities support broader technology decision-making around
              cloud and database environments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AZURE_RELATED_CONSULTING.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-3 hover:border-[#00B3FF]/40 transition-colors group flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 font-sans group-hover:text-[#00B3FF] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">{item.description}</p>
                </div>
                <div className="pt-2 text-xs font-semibold text-[#01153B] group-hover:text-[#00B3FF] flex items-center gap-1 transition-colors">
                  <span>Explore Advisory</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. AZURE + OUR OFFERINGS */}
      <section className="relative bg-slate-50/70 text-slate-900 py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-4">
              <Cpu className="w-3.5 h-3.5 text-[#00B3FF]" />
              TECHNICAL DELIVERY
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-sans">
              From Architecture to Delivery.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-sans mt-4">
              See how Azure environments sit within ZOFT&apos;s broader structured delivery
              capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AZURE_RELATED_OFFERINGS.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-3 hover:border-[#00B3FF]/40 transition-colors group flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 font-sans group-hover:text-[#00B3FF] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">{item.description}</p>
                </div>
                <div className="pt-2 text-xs font-semibold text-[#01153B] group-hover:text-[#00B3FF] flex items-center gap-1 transition-colors">
                  <span>Explore Offering</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. VISUAL BREAK */}
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
            “Cloud Is the Environment. Architecture Is the Discipline.”
          </blockquote>

          <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-xs font-bold text-[#00B3FF]">
            {['CLOUD', 'DATA', 'DATABASES', 'PERFORMANCE', 'ARCHITECTURE'].map((tag) => (
              <span key={tag} className="px-4 py-2 rounded-lg bg-[#031E4D] border border-slate-800">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 10. RELATED ECOSYSTEMS NAVIGATION */}
      <section className="relative bg-white text-slate-900 py-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-2">
              ECOSYSTEM NAVIGATION
            </span>
            <h3 className="text-xl font-bold text-slate-900 font-sans">
              Explore the Technology Ecosystem
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Link
              href="/about-us/partnerships/aws"
              className="bg-slate-50 p-5 rounded-2xl border border-slate-200/90 text-center space-y-1 hover:border-[#00B3FF]/40 transition-colors"
            >
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                ECOSYSTEM
              </span>
              <span className="text-base font-bold font-sans text-slate-900">AWS</span>
            </Link>

            <div className="bg-[#01153B] text-white p-5 rounded-2xl border border-slate-800 text-center space-y-1">
              <span className="text-[10px] font-mono text-[#00B3FF] font-bold uppercase tracking-wider block">
                CURRENT PAGE
              </span>
              <span className="text-base font-bold font-sans">Microsoft Azure</span>
            </div>

            <Link
              href="/about-us/partnerships/gcp"
              className="bg-slate-50 p-5 rounded-2xl border border-slate-200/90 text-center space-y-1 hover:border-[#00B3FF]/40 transition-colors"
            >
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                ECOSYSTEM
              </span>
              <span className="text-base font-bold font-sans text-slate-900">Google Cloud</span>
            </Link>

            <Link
              href="/about-us/partnerships/oracle"
              className="bg-slate-50 p-5 rounded-2xl border border-slate-200/90 text-center space-y-1 hover:border-[#00B3FF]/40 transition-colors"
            >
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                ECOSYSTEM
              </span>
              <span className="text-base font-bold font-sans text-slate-900">Oracle</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 11. ABOUT US NAVIGATION STRIP */}
      <section className="relative bg-slate-50/70 text-slate-900 py-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/about-us/company-story"
              className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-2 hover:border-[#00B3FF]/40 transition-colors group"
            >
              <h3 className="text-lg font-bold text-slate-900 font-sans group-hover:text-[#00B3FF] transition-colors">
                Company Story
              </h3>
              <p className="text-xs text-slate-600">Our background and evolution.</p>
            </Link>

            <Link
              href="/about-us/why-zoftcorp"
              className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-2 hover:border-[#00B3FF]/40 transition-colors group"
            >
              <h3 className="text-lg font-bold text-slate-900 font-sans group-hover:text-[#00B3FF] transition-colors">
                Why Zoftcorp?
              </h3>
              <p className="text-xs text-slate-600">Our 7 core differentiators.</p>
            </Link>

            <Link
              href="/about-us/partnerships"
              className="bg-[#01153B] text-white p-6 rounded-2xl border border-slate-800 shadow-md space-y-2"
            >
              <span className="text-[10px] font-mono text-[#00B3FF] font-bold uppercase tracking-widest bg-[#031E4D] px-2 py-0.5 rounded border border-slate-800 inline-block">
                PARENT MODULE
              </span>
              <h3 className="text-lg font-bold text-white font-sans">Partnerships</h3>
              <p className="text-xs text-slate-300">Technology platform ecosystem.</p>
            </Link>

            <Link
              href="/about-us/career"
              className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-2 hover:border-[#00B3FF]/40 transition-colors group"
            >
              <h3 className="text-lg font-bold text-slate-900 font-sans group-hover:text-[#00B3FF] transition-colors">
                Career
              </h3>
              <p className="text-xs text-slate-600">Opportunities to join ZOFT.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section
        aria-label="Planning Your Next Cloud Decision"
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
            Planning Your Next Cloud Decision?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
            Let&apos;s discuss the architecture, data, performance, and technology considerations
            behind your environment.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#FF6F00] hover:bg-[#e66400] text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-[#FF6F00]/25 focus-visible:outline-2 focus-visible:outline-[#FF6F00]"
            >
              Talk to ZOFT
            </Link>
            <Link
              href="/consulting/cloud-database-strategy"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-lg text-base font-semibold text-white hover:bg-white/10 transition-all duration-200 border border-white/20 focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
            >
              <span>Explore Cloud & Database Strategy</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
