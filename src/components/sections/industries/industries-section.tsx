'use client';

import React, { useState, useRef, KeyboardEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { VERIFIED_INDUSTRIES } from '@/data/industries';

export function IndustriesSection() {
  const [activeId, setActiveId] = useState<string>(VERIFIED_INDUSTRIES[0].id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex = index;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      nextIndex = (index + 1) % VERIFIED_INDUSTRIES.length;
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      nextIndex = (index - 1 + VERIFIED_INDUSTRIES.length) % VERIFIED_INDUSTRIES.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextIndex = VERIFIED_INDUSTRIES.length - 1;
    }

    if (nextIndex !== index) {
      setActiveId(VERIFIED_INDUSTRIES[nextIndex].id);
      tabRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <section
      id="industries"
      aria-label="Industry & Domain Expertise"
      className="relative bg-white text-[#01153B] py-24 md:py-32 overflow-hidden border-t border-slate-200/90"
    >
      {/* Background Architectural Blueprint Pattern */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/30 mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
            INDUSTRY &amp; DOMAIN EXPERTISE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#01153B] mb-5 font-sans leading-[1.12]">
            Technology That Understands
            <br />
            <span className="text-slate-600 font-normal">the Domain.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-sans">
            Technology decisions become more effective when they are grounded in the realities of the business. ZOFT brings database, cloud, and data engineering expertise to environments where reliability and performance matter.
          </p>
        </div>

        {/* Desktop Layout: Asymmetric Interactive Showcase (2 Columns) */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-16 items-start">
          {/* Left Column: Interactive Industry Navigation */}
          <div
            role="tablist"
            aria-label="Industry Navigation"
            aria-orientation="vertical"
            className="lg:col-span-5 flex flex-col divide-y divide-slate-200/90 border-y border-slate-200/90 bg-white rounded-2xl overflow-hidden shadow-sm border"
          >
            {VERIFIED_INDUSTRIES.map((industry, idx) => {
              const isActive = industry.id === activeId;
              return (
                <button
                  key={industry.id}
                  ref={(el) => {
                    tabRefs.current[idx] = el;
                  }}
                  role="tab"
                  id={`ind-tab-${industry.id}`}
                  aria-selected={isActive}
                  aria-controls={`ind-panel-${industry.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveId(industry.id)}
                  onMouseEnter={() => setActiveId(industry.id)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  className={`group text-left py-6 px-6 transition-all duration-250 ease-out-smooth relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B3FF] focus-visible:ring-inset border-l-4 ${
                    isActive
                      ? 'bg-slate-50/80 border-l-[#00B3FF] text-[#01153B]'
                      : 'hover:bg-slate-50/50 hover:border-l-[#00B3FF]/40 text-slate-600 border-l-transparent'
                  }`}
                >
                  <div className="flex items-baseline gap-4">
                    <span
                      className={`font-mono text-sm font-bold tracking-wider transition-colors duration-200 ${
                        isActive ? 'text-[#00B3FF]' : 'text-slate-400 group-hover:text-slate-600'
                      }`}
                    >
                      {industry.number}
                    </span>
                    <div className="flex-1">
                      <span
                        className={`block text-xl font-bold tracking-tight transition-colors duration-200 font-sans ${
                          isActive ? 'text-[#01153B]' : 'text-slate-700 group-hover:text-[#01153B]'
                        }`}
                      >
                        {industry.name}
                      </span>
                      <p
                        className={`text-xs leading-relaxed mt-2 transition-colors duration-200 font-sans ${
                          isActive ? 'text-slate-600' : 'text-slate-500'
                        }`}
                      >
                        {industry.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Photographic Visual Display */}
          <div className="lg:col-span-7 sticky top-28">
            {VERIFIED_INDUSTRIES.map((industry) => {
              const isActive = industry.id === activeId;
              if (!isActive) return null;

              return (
                <div
                  key={industry.id}
                  id={`ind-panel-${industry.id}`}
                  role="tabpanel"
                  aria-labelledby={`ind-tab-${industry.id}`}
                  tabIndex={0}
                  className="space-y-6 transition-opacity duration-250 ease-out-smooth animate-fadeIn focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B3FF] rounded-2xl"
                >
                  {/* High Quality Hero Photography */}
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-slate-200 bg-[#01153B] shadow-xl group">
                    <Image
                      src={industry.image}
                      alt={industry.alt}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transform-none"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#01153B]/80 via-transparent to-transparent" />

                    {/* Subtle Overlay Badge */}
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-slate-200 shadow-sm">
                      <span className="font-mono text-xs font-bold text-[#00B3FF]">
                        {industry.number}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-slate-400" />
                      <span className="text-xs font-semibold text-[#01153B] font-sans">
                        {industry.name}
                      </span>
                    </div>
                  </div>

                  {/* Industry Capability Highlights */}
                  <div className="bg-white rounded-2xl p-6 md:p-7 border border-slate-200 shadow-card-elevated space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <span className="text-xs font-mono uppercase tracking-widest text-slate-500 block font-bold">
                        DOMAIN TECHNOLOGY REQUIREMENTS
                      </span>
                      <Link
                        href="/offerings/data-engineering-and-analytics/industries"
                        className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#00B3FF] hover:text-[#0099DD] transition-colors group focus-visible:outline-2 focus-visible:outline-[#00B3FF] rounded py-0.5"
                      >
                        <span>Explore Domain</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 ease-out-smooth group-hover:translate-x-1 motion-reduce:transform-none" />
                      </Link>
                    </div>

                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {industry.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs font-medium text-[#01153B] leading-snug flex items-start gap-2.5 font-sans transition-colors duration-150 hover:border-[#00B3FF]/30 hover:bg-slate-50/90"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF] mt-1 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet Stacked Accordion Layout (< 1024px) */}
        <div className="lg:hidden space-y-8">
          {VERIFIED_INDUSTRIES.map((industry) => (
            <article
              key={industry.id}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden p-6 shadow-sm space-y-5"
            >
              {/* Header Badge & Title */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-[#00B3FF] bg-[#00B3FF]/10 px-2.5 py-1 rounded border border-[#00B3FF]/20">
                    {industry.number}
                  </span>
                  <h3 className="text-xl font-bold text-[#01153B] tracking-tight font-sans">
                    {industry.name}
                  </h3>
                </div>
                <Link
                  href="/offerings/data-engineering-and-analytics/industries"
                  className="text-xs font-mono font-bold text-[#00B3FF] hover:text-[#0099DD] inline-flex items-center gap-1"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                {industry.description}
              </p>

              {/* Large Image */}
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-slate-200 bg-[#01153B]">
                <Image
                  src={industry.image}
                  alt={industry.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Highlights */}
              <div className="pt-3 border-t border-slate-150">
                <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 block mb-2 font-semibold">
                  Domain Requirements
                </span>
                <ul className="space-y-1.5">
                  {industry.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-[#01153B] font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF] shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
