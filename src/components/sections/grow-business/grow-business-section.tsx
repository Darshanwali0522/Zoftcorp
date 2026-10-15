import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { GROW_BUSINESS_DATA } from '@/data/grow-business';
import { Button } from '@/components/ui/button';

export function GrowBusinessSection() {
  return (
    <section
      id="grow-business"
      aria-label="Grow Your Business with Us"
      className="relative bg-[#01153B] text-white py-24 md:py-32 overflow-hidden border-t border-slate-800"
    >
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute top-1/3 left-0 w-[550px] h-[550px] bg-[#00B3FF]/10 blur-[160px] rounded-full"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#031E4D]/60 blur-[140px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & Growth Points */}
          <div className="lg:col-span-7 space-y-8">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#00B3FF] border border-[#00B3FF]/30 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              {GROW_BUSINESS_DATA.eyebrow}
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans leading-[1.12]">
              {GROW_BUSINESS_DATA.headlineLine1}
              <br />
              <span className="text-slate-300 font-normal">
                {GROW_BUSINESS_DATA.headlineLine2}
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl">
              {GROW_BUSINESS_DATA.supportingCopy}
            </p>

            {/* 4 Value Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4 border-t border-slate-800">
              {GROW_BUSINESS_DATA.points.map((point, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#031E4D]/80 border border-slate-700/80 space-y-1.5 hover:border-[#00B3FF]/40 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-[#00B3FF]" />
                    <h3 className="text-sm font-bold text-white font-sans">
                      {point.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans pl-6">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Action Group with Brand Orange Primary Button */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href={GROW_BUSINESS_DATA.ctaPrimary.href}>
                <Button variant="primary" size="lg" className="min-w-[170px] text-base font-semibold shadow-md">
                  {GROW_BUSINESS_DATA.ctaPrimary.label}
                </Button>
              </Link>
              <Link
                href={GROW_BUSINESS_DATA.ctaSecondary.href}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg text-sm font-semibold text-slate-300 hover:text-white hover:bg-[#031E4D] transition-all duration-200 border border-slate-700 hover:border-slate-600 group focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
              >
                <span>{GROW_BUSINESS_DATA.ctaSecondary.label}</span>
                <ArrowRight className="w-4 h-4 text-[#00B3FF] group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Photographic Display */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-slate-700 bg-[#031E4D] shadow-2xl group">
              <Image
                src={GROW_BUSINESS_DATA.image.src}
                alt={GROW_BUSINESS_DATA.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#01153B] via-transparent to-transparent opacity-85" />

              {/* Bottom Overlay Label */}
              <div className="absolute bottom-5 left-5 right-5 bg-[#031E4D]/90 backdrop-blur-md p-4 rounded-xl border border-slate-700 shadow-lg">
                <span className="text-xs font-mono font-bold text-[#00B3FF] block uppercase tracking-wider mb-1">
                  ZOFT CORP COMMITMENT
                </span>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  Enterprise-grade database performance tuning, cloud cost optimization, and proactive DBA reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
