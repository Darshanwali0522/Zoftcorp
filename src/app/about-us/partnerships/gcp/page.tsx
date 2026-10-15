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
  BarChart3,
} from 'lucide-react';
import {
  GCP_PARTNERSHIP_HERO,
  GCP_ARCHITECTURE_AREAS,
  GCP_DATA_FOUNDATION,
  GCP_DATABASE_DEPTH,
  GCP_RELATED_CONSULTING,
  GCP_RELATED_OFFERINGS,
} from '@/data/partnerships/gcp';

export default function GcpPartnershipPage() {
  const [activeAreaIndex, setActiveAreaIndex] = useState(0);

  const activeArea = GCP_ARCHITECTURE_AREAS[activeAreaIndex];

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
                  src={GCP_PARTNERSHIP_HERO.logoPath}
                  alt="Google Cloud logo"
                  width={24}
                  height={14}
                  className="object-contain h-3.5 w-auto"
                />
                <span>{GCP_PARTNERSHIP_HERO.eyebrow}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] font-sans">
                Cloud and Data Architecture With{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00B3FF] via-sky-200 to-[#FF6F00] mt-1">
                  Google Cloud.
                </span>
              </h1>

              <blockquote className="border-l-2 border-[#00B3FF] pl-4 py-1 text-slate-200 text-lg sm:text-xl font-sans italic font-normal leading-relaxed">
                &ldquo;{GCP_PARTNERSHIP_HERO.copy}&rdquo;
              </blockquote>
            </div>

            {/* Right Side Cloud & Data Architecture Visual */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-[#031E4D]/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-5 shadow-2xl backdrop-blur-sm">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#00B3FF]">
                    <Layers className="w-4 h-4" />
                    <span>CLOUD & DATA MODEL</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest bg-[#01153B] px-2 py-0.5 rounded border border-slate-800">
                    ANALYTICS BREADTH
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs text-center">
                  <div className="p-3 rounded-xl bg-[#01153B] border border-[#00B3FF]/40 text-[#00B3FF] font-bold font-sans tracking-wide flex items-center justify-center gap-2">
                    <Image
                      src={GCP_PARTNERSHIP_HERO.logoPath}
                      alt="Google Cloud logo"
                      width={24}
                      height={14}
                      className="object-contain h-3.5 w-auto"
                    />
                    <span>GOOGLE CLOUD ENVIRONMENT</span>
                  </div>

                  <div className="text-slate-400 text-xs">↓ DATA & INFRASTRUCTURE ↓</div>

                  <div className="p-3 rounded-xl bg-[#01153B] border border-[#00B3FF]/30 text-sky-200 font-bold font-sans tracking-wider">
                    DATA ENGINEERING & ANALYTICS FOUNDATION
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                    <div className="p-2 rounded-lg bg-[#01153B] border border-slate-800 text-slate-300">
                      CLOUD ARCHITECTURE
                    </div>
                    <div className="p-2 rounded-lg bg-[#01153B] border border-slate-800 text-slate-300">
                      DATABASE STRATEGY
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>ENVIRONMENT: GOOGLE CLOUD</span>
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
                DATA & CLOUD ALIGNMENT
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-sans leading-[1.15]">
                Cloud Architecture and Data Architecture Belong in the Same Conversation.
              </h2>
            </div>

            {/* Right Supporting Copy */}
            <div className="lg:col-span-6 pl-0 lg:pl-8 border-l-0 lg:border-l-2 border-slate-300 space-y-4">
              <p className="text-lg text-slate-700 leading-relaxed font-sans">
                Modern cloud environments are closely connected to how organizations collect, move,
                manage, transform, and use data.
              </p>
              <p className="text-base text-slate-600 leading-relaxed font-sans">
                Technology decisions involve cloud architecture, data foundations, database engine
                alignment, workload performance, governance, operational discipline, and long-term
                architectural direction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GOOGLE CLOUD + ZOFT ECOSYSTEM */}
      <section className="relative bg-white text-slate-900 py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-4">
              <Layers className="w-3.5 h-3.5 text-[#00B3FF]" />
              CONCEPTUAL RELATIONSHIP
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-sans">
              Where Google Cloud Meets the ZOFT Perspective
            </h2>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-3 items-center text-center font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-[#01153B] text-white font-bold font-sans flex items-center justify-center gap-2">
                <Image
                  src={GCP_PARTNERSHIP_HERO.logoPath}
                  alt="Google Cloud logo"
                  width={18}
                  height={14}
                  className="object-contain h-3.5 w-auto"
                />
                <span>GOOGLE CLOUD</span>
              </div>
              <div className="text-slate-400 font-bold hidden md:block">→</div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 font-bold font-sans">
                CLOUD ARCHITECTURE
              </div>
              <div className="text-slate-400 font-bold hidden md:block">→</div>
              <div className="p-3.5 rounded-xl bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/30 font-bold font-sans">
                DATA ENGINEERING
              </div>
              <div className="text-slate-400 font-bold hidden md:block">→</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-center text-center font-mono text-xs mt-4 pt-4 border-t border-slate-200/80">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 font-bold font-sans">
                DATABASE STRATEGY
              </div>
              <div className="text-slate-400 font-bold hidden md:block">→</div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 font-bold font-sans">
                PERFORMANCE
              </div>
              <div className="text-slate-400 font-bold hidden md:block">→</div>
              <div className="p-3.5 rounded-xl bg-[#01153B] text-white font-bold font-sans">
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
              aria-label="Areas That Shape Google Cloud Architecture"
            >
              {GCP_ARCHITECTURE_AREAS.map((area, index) => {
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
                  EDITORIAL ARCHITECTURE PERSPECTIVE // GOOGLE CLOUD
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DATA FOUNDATION */}
      <section className="relative bg-white text-slate-900 py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20">
                <BarChart3 className="w-3.5 h-3.5 text-[#00B3FF]" />
                DATA ENGINEERING FOCUS
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-sans">
                Better Analytics Starts With Better Data Foundations.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-sans">
                Connecting cloud platforms to enterprise analytics requires strong data engineering
                foundations—from ingestion and transformation to schema modeling and discovery.
              </p>
              <div>
                <Link
                  href="/offerings/data-engineering-and-analytics"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#01153B] hover:bg-[#031E4D] text-white font-semibold text-sm transition-all duration-200 shadow-md focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
                >
                  <span>Explore Data Engineering Offering</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Data Foundation Items Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {GCP_DATA_FOUNDATION.map((item) => (
                <div
                  key={item.title}
                  className="bg-slate-50 p-6 rounded-2xl border border-slate-200/90 space-y-2 hover:border-[#00B3FF]/30 transition-colors"
                >
                  <span className="text-xs font-mono font-bold text-[#01153B] uppercase tracking-wider block">
                    {item.title}
                  </span>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CLOUD + DATABASE DEPTH */}
      <section className="relative bg-slate-50/70 text-slate-900 py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-4">
              <Database className="w-3.5 h-3.5 text-[#00B3FF]" />
              DATABASE ALIGNMENT
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-sans">
              Cloud Data Still Depends on the Database Layer.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-sans mt-4">
              Regardless of the cloud platform, database engines remain central to transactional and
              analytical systems. ZOFT connects Google Cloud environment planning with verified database
              engine expertise across SQL Server, PostgreSQL, and MySQL.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {GCP_DATABASE_DEPTH.map((engine) => (
              <div
                key={engine.name}
                className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm flex items-center justify-between hover:border-[#00B3FF]/30 transition-colors"
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

      {/* 7. PERFORMANCE + ARCHITECTURE */}
      <section className="relative bg-white text-slate-900 py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20">
                <LineChart className="w-3.5 h-3.5 text-[#00B3FF]" />
                OPERATIONAL IMPACT
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-sans leading-[1.15]">
                Data Architecture Has Operational Consequences.
              </h2>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-sans">
                Data pipeline choices and query design influence system performance, infrastructure cost,
                reliability, operations, and scalability.
              </p>

              <div className="pt-2 flex flex-col gap-3 font-sans text-sm font-semibold text-slate-800">
                <Link
                  href="/consulting/performance-audits"
                  className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between hover:border-[#00B3FF]/40 transition-colors group"
                >
                  <span className="text-slate-900 group-hover:text-[#00B3FF] transition-colors">Performance Audits</span>
                  <ArrowRight className="w-4 h-4 text-[#00B3FF]" />
                </Link>

                <Link
                  href="/consulting/cloud-finops"
                  className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between hover:border-[#00B3FF]/40 transition-colors group"
                >
                  <span className="text-slate-900 group-hover:text-[#00B3FF] transition-colors">Cloud FinOPs Strategy</span>
                  <ArrowRight className="w-4 h-4 text-[#00B3FF]" />
                </Link>

                <Link
                  href="/offerings/performance-tuning-delivery"
                  className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between hover:border-[#00B3FF]/40 transition-colors group"
                >
                  <span className="text-slate-900 group-hover:text-[#00B3FF] transition-colors">Performance Tuning Delivery</span>
                  <ArrowRight className="w-4 h-4 text-[#00B3FF]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CONSULTING + GOOGLE CLOUD */}
      <section className="relative bg-slate-50/70 text-slate-900 py-20 md:py-28 border-b border-slate-200/80">
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
              cloud and data environments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GCP_RELATED_CONSULTING.map((item) => (
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
                  <span>Explore Advisory</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. GOOGLE CLOUD + OUR OFFERINGS */}
      <section className="relative bg-white text-slate-900 py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-4">
              <Cpu className="w-3.5 h-3.5 text-[#00B3FF]" />
              TECHNICAL DELIVERY
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-sans">
              From Data Foundations to Delivery.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-sans mt-4">
              See how Google Cloud environments sit within ZOFT&apos;s broader structured delivery
              capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GCP_RELATED_OFFERINGS.map((item) => (
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
                  <span>Explore Offering</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 10. VISUAL BREAK */}
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
            “Cloud Enables the Environment. Data Gives It Direction.”
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

      {/* 11. RELATED ECOSYSTEMS NAVIGATION */}
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

            <Link
              href="/about-us/partnerships/azure"
              className="bg-slate-50 p-5 rounded-2xl border border-slate-200/90 text-center space-y-1 hover:border-[#00B3FF]/40 transition-colors"
            >
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                ECOSYSTEM
              </span>
              <span className="text-base font-bold font-sans text-slate-900">Microsoft Azure</span>
            </Link>

            <div className="bg-[#01153B] text-white p-5 rounded-2xl border border-slate-800 text-center space-y-1">
              <span className="text-[10px] font-mono text-[#00B3FF] font-bold uppercase tracking-wider block">
                CURRENT PAGE
              </span>
              <span className="text-base font-bold font-sans">Google Cloud</span>
            </div>

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

      {/* 12. ABOUT US NAVIGATION STRIP */}
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

      {/* 13. FINAL CTA */}
      <section
        aria-label="Building Your Next Cloud and Data Environment"
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
            Building Your Next Cloud and Data Environment?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
            Let&apos;s discuss the architecture, data foundations, performance, and technology
            decisions behind your environment.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#FF6F00] hover:bg-[#e66400] text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-[#FF6F00]/25 focus-visible:outline-2 focus-visible:outline-[#FF6F00]"
            >
              Talk to ZOFT
            </Link>
            <Link
              href="/offerings/data-engineering-and-analytics"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-lg text-base font-semibold text-white hover:bg-white/10 transition-all duration-200 border border-white/20 focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
            >
              <span>Explore Data Engineering and Analytics</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
