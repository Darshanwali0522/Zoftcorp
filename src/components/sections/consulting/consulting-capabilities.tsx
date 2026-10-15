'use client';

import React, { useState, useRef, KeyboardEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { CONSULTING_CAPABILITIES } from '@/data/consulting';

export function ConsultingCapabilities() {
  const [activeId, setActiveId] = useState<string>(CONSULTING_CAPABILITIES[0].id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex = index;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      nextIndex = (index + 1) % CONSULTING_CAPABILITIES.length;
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      nextIndex = (index - 1 + CONSULTING_CAPABILITIES.length) % CONSULTING_CAPABILITIES.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextIndex = CONSULTING_CAPABILITIES.length - 1;
    }

    if (nextIndex !== index) {
      setActiveId(CONSULTING_CAPABILITIES[nextIndex].id);
      tabRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <section
      id="capabilities"
      aria-label="Consulting Capabilities"
      className="relative bg-slate-50/60 text-[#01153B] py-24 md:py-32 overflow-hidden border-b border-slate-200/90"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/30 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
            CONSULTING CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#01153B] mb-5 font-sans leading-[1.15]">
            Expert Guidance for
            <br />
            <span className="text-slate-600 font-normal">Complex Technology Decisions.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-sans">
            From modern cloud architecture to database performance and governance, ZOFT brings practical technical expertise to the decisions that shape critical technology environments.
          </p>
        </div>

        {/* Desktop Layout: Interactive Capability Navigator (2 Columns) */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-16 items-start">
          {/* Left Column: Capability Selector List */}
          <div
            role="tablist"
            aria-label="Consulting Capabilities"
            aria-orientation="vertical"
            className="lg:col-span-5 flex flex-col divide-y divide-slate-200/90 border-y border-slate-200/90 bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-sm border"
          >
            {CONSULTING_CAPABILITIES.map((cap, idx) => {
              const isActive = cap.id === activeId;
              return (
                <button
                  key={cap.id}
                  ref={(el) => {
                    tabRefs.current[idx] = el;
                  }}
                  role="tab"
                  id={`cap-tab-${cap.id}`}
                  aria-selected={isActive}
                  aria-controls={`cap-panel-${cap.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveId(cap.id)}
                  onMouseEnter={() => setActiveId(cap.id)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  className={`group text-left py-5 px-6 transition-all duration-200 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B3FF] focus-visible:ring-inset ${
                    isActive
                      ? 'bg-white shadow-md border-l-4 border-l-[#00B3FF] text-[#01153B]'
                      : 'hover:bg-slate-100/60 text-slate-600 border-l-4 border-l-transparent'
                  }`}
                >
                  <div className="flex items-baseline gap-4">
                    <span
                      className={`font-mono text-sm font-bold tracking-wider transition-colors duration-200 ${
                        isActive ? 'text-[#00B3FF]' : 'text-slate-400 group-hover:text-slate-600'
                      }`}
                    >
                      {cap.number}
                    </span>
                    <div className="flex-1">
                      <span
                        className={`block text-lg font-bold tracking-tight transition-colors duration-200 ${
                          isActive ? 'text-[#01153B]' : 'text-slate-700 group-hover:text-[#01153B]'
                        }`}
                      >
                        {cap.name}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Visual Storytelling & Details Panel */}
          <div className="lg:col-span-7 sticky top-28">
            {CONSULTING_CAPABILITIES.map((cap) => {
              const isActive = cap.id === activeId;
              if (!isActive) return null;

              return (
                <div
                  key={cap.id}
                  id={`cap-panel-${cap.id}`}
                  role="tabpanel"
                  aria-labelledby={`cap-tab-${cap.id}`}
                  className="space-y-6 transition-all duration-300 animate-fadeIn"
                >
                  {/* High Quality Hero Photography */}
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-xl group">
                    <Image
                      src={cap.image}
                      alt={cap.alt}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                    {/* Overlay Badge */}
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-slate-200 shadow-sm">
                      <span className="font-mono text-xs font-bold text-[#00B3FF]">
                        {cap.number}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-slate-400" />
                      <span className="text-xs font-semibold text-[#01153B]">
                        {cap.name}
                      </span>
                    </div>
                  </div>

                  {/* Capability Details Card */}
                  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-5">
                    <div>
                      <h3 className="text-2xl font-bold text-[#01153B] tracking-tight mb-2 font-sans">
                        {cap.name}
                      </h3>
                      <p className="text-slate-600 leading-relaxed font-sans text-base">
                        {cap.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100">
                      <span className="text-xs font-mono uppercase tracking-widest text-slate-500 block mb-3 font-semibold">
                        KEY CONSULTING FOCUS AREAS
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {cap.deliverables.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                            <CheckCircle2 className="w-4 h-4 text-[#00B3FF] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <Link
                        href={cap.href}
                        className="inline-flex items-center justify-between w-full sm:w-auto gap-3 px-6 py-3 rounded-lg bg-[#01153B] hover:bg-[#031E4D] text-white font-semibold text-sm transition-all duration-200 shadow hover:-translate-y-0.5 active:scale-[0.98] group"
                      >
                        <span>{cap.ctaText}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet Stacked Layout (< 1024px) */}
        <div className="lg:hidden space-y-8">
          {CONSULTING_CAPABILITIES.map((cap) => (
            <article
              key={cap.id}
              className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden p-6 shadow-sm space-y-5 hover:border-[#00B3FF]/40 hover:shadow-md transition-all duration-200 ease-out-smooth"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-[#00B3FF] bg-[#00B3FF]/10 px-2.5 py-1 rounded border border-[#00B3FF]/30">
                  {cap.number}
                </span>
                <h3 className="text-xl font-bold text-[#01153B] tracking-tight">
                  {cap.name}
                </h3>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {cap.description}
              </p>

              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-slate-200 bg-slate-900">
                <Image
                  src={cap.image}
                  alt={cap.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-4">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 block mb-2 font-semibold">
                    Focus Areas
                  </span>
                  <div className="space-y-1.5 mb-4">
                    {cap.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={cap.href}
                  className="inline-flex items-center justify-between w-full px-5 py-2.5 rounded-lg bg-[#01153B] text-white text-xs font-semibold hover:bg-[#031E4D] transition-colors group active:scale-[0.98]"
                >
                  <span>{cap.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200 ease-out-smooth motion-reduce:transform-none" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
