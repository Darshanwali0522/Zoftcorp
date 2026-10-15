import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function ConsultingHero() {
  return (
    <section className="relative w-full bg-white text-[#01153B] overflow-hidden border-b border-slate-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center min-h-[75vh] lg:min-h-[82vh] py-16 sm:py-20 lg:py-24">
          {/* Left Column: Hero Text & Actions */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2.5">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/30">
                CONSULTING
              </span>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest hidden sm:inline-block">
                {"//"} ENTERPRISE TECHNOLOGY ADVISORY
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#01153B] tracking-tight leading-[1.08] font-sans">
              Technology Decisions.
              <br />
              <span className="text-slate-600 font-normal">Backed by Experience.</span>
            </h1>

            <p className="text-slate-600 text-lg sm:text-xl font-normal leading-relaxed max-w-xl font-sans">
              ZOFT helps organizations make better technology decisions across cloud, databases, performance, governance, and modern data architectures.
            </p>

            <div className="flex flex-wrap items-center gap-5 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-[#FF6F00] hover:bg-[#E66400] text-white font-semibold text-base transition-all duration-200 shadow-md shadow-[#FF6F00]/20 hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
              >
                Talk to an Expert
              </Link>
              <a
                href="#capabilities"
                className="inline-flex items-center gap-2 text-base font-semibold text-[#01153B] hover:text-[#00B3FF] transition-colors py-3 px-2 group rounded-lg focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
              >
                <span>Explore Consulting Capabilities</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>

            {/* Subtle Focus Metrics */}
            <div className="pt-8 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl">
              <div>
                <span className="text-[11px] font-mono font-bold text-[#00B3FF] block uppercase tracking-wider">
                  01 // ADVISORY
                </span>
                <span className="text-xs font-semibold text-slate-800 block mt-0.5">
                  Cloud &amp; Database Strategy
                </span>
              </div>
              <div>
                <span className="text-[11px] font-mono font-bold text-[#00B3FF] block uppercase tracking-wider">
                  02 // AUDITING
                </span>
                <span className="text-xs font-semibold text-slate-800 block mt-0.5">
                  Performance &amp; Cloud FinOPs
                </span>
              </div>
              <div>
                <span className="text-[11px] font-mono font-bold text-[#FF6F00] block uppercase tracking-wider">
                  03 // LEADERSHIP
                </span>
                <span className="text-xs font-semibold text-slate-800 block mt-0.5">
                  Fractional Architect
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Photography Composition */}
          <div className="lg:col-span-5 w-full">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-2xl group">
              <Image
                src="/images/consulting/hero.jpg"
                alt="Enterprise technology architecture planning and consulting leadership"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
              
              {/* Technical Badge Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200/90 shadow-lg space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#01153B] uppercase tracking-wider">
                    EXPERT TECHNICAL ADVISORY
                  </span>
                  <span className="text-[10px] font-mono font-semibold text-[#00B3FF] bg-[#00B3FF]/10 px-2 py-0.5 rounded border border-[#00B3FF]/30">
                    6 PRACTICE AREAS
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-1.5 pt-1 text-[11px] font-medium text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00B3FF]" />
                    <span>Cloud Architecture</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00B3FF]" />
                    <span>Database Tuning</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00B3FF]" />
                    <span>AI-Ready Stacks</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00B3FF]" />
                    <span>FinOPs &amp; Governance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
