'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Layers, Camera } from 'lucide-react';
import { ConsultingCapabilityDetail } from '@/data/consulting';
import { ConsultingServiceDiagram } from './consulting-service-diagrams';

interface Props {
  capability: ConsultingCapabilityDetail;
}

export function ConsultingDetailHero({ capability }: Props) {
  const [activeVisualTab, setActiveVisualTab] = useState<'diagram' | 'photo'>('diagram');

  return (
    <section className="relative w-full bg-[#01153B] text-white py-12 md:py-20 lg:py-24 overflow-hidden border-b border-white/10">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#00B3FF]/10 blur-[150px] rounded-full"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#031E4D]/60 blur-[120px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
          <Link href="/" className="hover:text-[#00B3FF] transition-colors">Home</Link>
          <span className="text-slate-600">/</span>
          <Link href="/consulting" className="hover:text-[#00B3FF] transition-colors">Consulting</Link>
          <span className="text-slate-600">/</span>
          <span className="text-slate-200 truncate">{capability.name}</span>
        </nav>

        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/consulting"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#00B3FF] hover:text-[#00B3FF]/80 transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Consulting Overview</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading, Context & Actions */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2.5">
              <span className="font-mono text-xs font-bold text-[#00B3FF] bg-[#00B3FF]/10 px-3.5 py-1 rounded-full border border-[#00B3FF]/30 uppercase tracking-wider">
                CAPABILITY {capability.number}
              </span>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest hidden sm:inline-block">
                {"//"} ENTERPRISE ADVISORY
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12] font-sans">
              {capability.name}
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl font-sans font-normal">
              {capability.description}
            </p>

            {/* CTA Group with Premium Micro-Interactions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-[#FF6F00] hover:bg-[#E66400] text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#FF6F00]/25 hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
              >
                Talk to an Expert
              </Link>
              <Link
                href="/consulting"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg text-sm font-semibold text-white hover:bg-white/10 transition-all duration-200 border border-white/20 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-[#00B3FF] group"
              >
                <span>Explore Other Capabilities</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Architectural Engagement Highlights */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#00B3FF] block uppercase tracking-wider">
                  ENGAGEMENT MODEL
                </span>
                <span className="text-xs font-semibold text-white block mt-0.5">
                  Senior Advisory
                </span>
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-[#00B3FF] block uppercase tracking-wider">
                  DELIVERABLES
                </span>
                <span className="text-xs font-semibold text-white block mt-0.5">
                  {capability.deliverables.length} Strategic Assets
                </span>
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-[#00B3FF] block uppercase tracking-wider">
                  METHODOLOGY
                </span>
                <span className="text-xs font-semibold text-white block mt-0.5">
                  4-Stage Framework
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Purpose-Built Technical Visual or Photography Frame */}
          <div className="lg:col-span-6 w-full">
            <div className="bg-[#031E4D]/80 backdrop-blur-md rounded-2xl border border-white/10 p-2 shadow-2xl">
              {/* Visual Mode Selector Tabs */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 mb-3">
                <span className="text-[11px] font-mono text-slate-300 uppercase tracking-wider font-semibold">
                  TECHNICAL VISUALIZATION
                </span>
                <div className="flex items-center gap-1.5 bg-[#01153B] p-1 rounded-lg border border-white/10">
                  <button
                    type="button"
                    onClick={() => setActiveVisualTab('diagram')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono font-semibold transition-colors ${
                      activeVisualTab === 'diagram'
                        ? 'bg-[#00B3FF] text-[#01153B]'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Architecture Diagram</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveVisualTab('photo')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono font-semibold transition-colors ${
                      activeVisualTab === 'photo'
                        ? 'bg-[#00B3FF] text-[#01153B]'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <span>Environment Context</span>
                  </button>
                </div>
              </div>

              {/* Tab 1: Bespoke Technical Architecture Diagram */}
              {activeVisualTab === 'diagram' && (
                <div className="animate-fadeIn">
                  <ConsultingServiceDiagram slug={capability.id} />
                </div>
              )}

              {/* Tab 2: High Resolution Environment Photography */}
              {activeVisualTab === 'photo' && (
                <div className="relative aspect-[16/11] w-full rounded-xl overflow-hidden border border-white/10 bg-[#01153B] animate-fadeIn">
                  <Image
                    src={capability.image}
                    alt={capability.alt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#01153B] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 bg-[#01153B]/90 backdrop-blur-md px-4 py-2.5 rounded-lg border border-white/10 flex items-center justify-between">
                    <span className="text-xs font-semibold text-white">
                      {capability.name}
                    </span>
                    <span className="text-[10px] font-mono text-[#00B3FF] uppercase tracking-widest">
                      ENTERPRISE ADVISORY
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
