'use client';

import React, { useState, useRef, KeyboardEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { VERIFIED_SERVICES } from '@/data/services';

const SERVICE_HREFS: Record<string, string> = {
  'db-finops': '/consulting/cloud-finops',
  'performance-tuning': '/offerings/performance-tuning-delivery',
  'managed-services': '/offerings/managed-dba-services',
  'migration-transformation': '/offerings/database-migrations-and-transformations',
};

export function ServicesSection() {
  const [activeId, setActiveId] = useState<string>(VERIFIED_SERVICES[0].id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex = index;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      nextIndex = (index + 1) % VERIFIED_SERVICES.length;
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      nextIndex = (index - 1 + VERIFIED_SERVICES.length) % VERIFIED_SERVICES.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextIndex = VERIFIED_SERVICES.length - 1;
    }

    if (nextIndex !== index) {
      setActiveId(VERIFIED_SERVICES[nextIndex].id);
      tabRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <section
      id="services"
      aria-label="Core Services"
      className="relative bg-[#01153B] text-white py-16 md:py-20 lg:py-24 overflow-hidden border-t border-slate-800"
    >
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] bg-[#00B3FF]/10 blur-[160px] rounded-full"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#031E4D]/50 blur-[140px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 md:mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#00B3FF] border border-[#00B3FF]/30 mb-3 shadow-2xs">
            <span className="flex h-1.5 w-1.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00B3FF] opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00B3FF]" />
            </span>
            CORE SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 font-sans leading-[1.12]">
            Expertise That Solves
            <br />
            <span className="text-slate-300 font-normal">What Matters.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-sans">
            From database performance and cloud cost optimization to managed operations and modernization, ZOFT helps organizations build technology environments that perform reliably.
          </p>
        </div>

        {/* Desktop Layout: Interactive Editorial Split (Service List on Left, Detail Card & Image Beside Each Other on Right) */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-10 items-start">
          {/* Left Column: Vertical Service Navigation */}
          <div
            role="tablist"
            aria-label="ZOFT Core Services"
            aria-orientation="vertical"
            className="lg:col-span-4 xl:col-span-4 flex flex-col divide-y divide-slate-800/80 border-y border-slate-800/80"
          >
            {VERIFIED_SERVICES.map((service, idx) => {
              const isActive = service.id === activeId;
              return (
                <button
                  key={service.id}
                  ref={(el) => {
                    tabRefs.current[idx] = el;
                  }}
                  role="tab"
                  id={`tab-${service.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${service.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveId(service.id)}
                  onMouseEnter={() => setActiveId(service.id)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  className={`group text-left py-4 sm:py-5 px-4 transition-all duration-200 ease-out relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B3FF] focus-visible:ring-inset ${
                    isActive
                      ? 'bg-[#031E4D] pl-5 sm:pl-6 shadow-xs'
                      : 'hover:bg-[#031E4D]/60 hover:pl-5 text-slate-400'
                  }`}
                >
                  {/* Active Border Accent */}
                  <span
                    className={`absolute left-0 top-0 bottom-0 w-1 bg-[#00B3FF] transition-all duration-200 ease-out ${
                      isActive ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-50 group-hover:opacity-40 group-hover:scale-y-75'
                    }`}
                    aria-hidden="true"
                  />

                  <div className="flex items-baseline gap-3.5">
                    <span
                      className={`font-mono text-xs sm:text-sm font-bold tracking-wider transition-colors duration-200 ${
                        isActive ? 'text-[#00B3FF]' : 'text-slate-400 group-hover:text-slate-300'
                      }`}
                    >
                      {service.number}
                    </span>
                    <div className="flex-1 min-w-0">
                      <span
                        className={`block text-lg sm:text-xl font-bold tracking-tight transition-colors duration-200 truncate ${
                          isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'
                        }`}
                      >
                        {service.title}
                      </span>
                      <p className="text-xs sm:text-sm text-[#00B3FF] font-medium mt-0.5 font-sans truncate">
                        “{service.tagline}”
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Area: Detail Card and Image Side-by-Side */}
          <div className="lg:col-span-8 xl:col-span-8 sticky top-24">
            {VERIFIED_SERVICES.map((service) => {
              const isActive = service.id === activeId;
              if (!isActive) return null;

              const href = SERVICE_HREFS[service.id] || '/offerings';

              return (
                <div
                  key={service.id}
                  id={`panel-${service.id}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${service.id}`}
                  tabIndex={0}
                  className="grid grid-cols-1 md:grid-cols-12 gap-5 xl:gap-6 items-stretch transition-opacity duration-200 ease-out animate-fadeIn focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B3FF] rounded-2xl"
                >
                  {/* Detail Card (BESIDE the image) */}
                  <div className="md:col-span-6 lg:col-span-7 flex flex-col justify-between bg-[#031E4D]/90 border border-slate-700/80 rounded-2xl p-5 sm:p-6 backdrop-blur-sm shadow-xl space-y-4">
                    <div className="space-y-3.5">
                      {/* Header with Title, Tagline, and CTA */}
                      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-slate-700/80 pb-3.5">
                        <div className="min-w-0">
                          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-sans">
                            {service.title}
                          </h3>
                          <span className="text-xs sm:text-sm font-semibold text-[#00B3FF] italic mt-0.5 block font-sans">
                            “{service.tagline}”
                          </span>
                        </div>
                        <Link
                          href={href}
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#00B3FF] hover:text-[#33C2FF] transition-colors group focus-visible:outline-2 focus-visible:outline-[#00B3FF] rounded py-1 px-2.5 bg-[#01153B]/70 hover:bg-[#01153B] border border-cyan-500/20 shrink-0"
                        >
                          <span>View Architecture</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 ease-out group-hover:translate-x-1 motion-reduce:transform-none" />
                        </Link>
                      </div>

                      {/* Description */}
                      <p className="text-slate-300 leading-relaxed font-sans text-xs sm:text-sm">
                        {service.description}
                      </p>

                      {/* Deliverables */}
                      <div className="pt-1">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2 font-semibold">
                          KEY CAPABILITY DELIVERABLES
                        </span>
                        <ul className="space-y-2">
                          {service.details.map((detail, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 bg-[#01153B]/80 px-3 py-2 rounded-lg border border-slate-800 transition-colors duration-150 hover:border-slate-700"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF] mt-1.5 shrink-0 shadow-[0_0_8px_rgba(0,179,255,0.6)]" />
                              <span className="leading-snug">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Corresponding Image (on the right) */}
                  <div className="md:col-span-6 lg:col-span-5 relative min-h-[280px] sm:min-h-[320px] max-h-[440px] w-full rounded-2xl overflow-hidden border border-slate-700 bg-[#031E4D] shadow-2xl group">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 35vw"
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transform-none"
                    />

                    {/* Subtle Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#01153B] via-transparent to-transparent opacity-85" />

                    {/* Image Subtle Badge Overlay */}
                    <div className="absolute top-3.5 left-3.5 flex items-center gap-2.5 bg-[#01153B]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 shadow-md z-10">
                      <span className="font-mono text-xs font-bold text-[#00B3FF]">
                        {service.number}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-slate-500" />
                      <span className="text-xs font-medium text-slate-200">
                        {service.category}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet Stacked Layout (< 1024px) */}
        <div className="lg:hidden space-y-10">
          {VERIFIED_SERVICES.map((service) => {
            const href = SERVICE_HREFS[service.id] || '/offerings';

            return (
              <article
                key={service.id}
                className="bg-[#031E4D]/80 border border-slate-700 rounded-2xl overflow-hidden p-6 sm:p-8 space-y-6 shadow-xl"
              >
                {/* Number and Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-[#00B3FF] bg-[#00B3FF]/10 px-2.5 py-1 rounded border border-[#00B3FF]/20">
                      {service.number}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      {service.category}
                    </span>
                  </div>
                  <Link
                    href={href}
                    className="text-xs font-mono font-bold text-[#00B3FF] hover:text-[#33C2FF] inline-flex items-center gap-1"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight mb-1 font-sans">
                    {service.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#00B3FF] mb-3 italic">
                    “{service.tagline}”
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed font-sans">
                    {service.description}
                  </p>
                </div>

                {/* Large Image */}
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-slate-700 bg-[#01153B]">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Capabilities */}
                <div className="pt-4 border-t border-slate-700/80">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3 font-semibold">
                    Key Deliverables
                  </span>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF] mt-1.5 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
