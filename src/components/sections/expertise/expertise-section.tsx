import React from 'react';
import Image from 'next/image';
import { EXPERTISE_DATA } from '@/data/expertise';

export function ExpertiseSection() {
  return (
    <section
      id="expertise"
      aria-label="Expertise in Action"
      className="relative bg-[#031E4D] text-white py-24 md:py-32 overflow-hidden border-t border-slate-800"
    >
      {/* Restrained background ambient glow */}
      <div
        className="pointer-events-none absolute top-1/4 left-0 w-[550px] h-[550px] bg-[#00B3FF]/10 blur-[160px] rounded-full"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#FF6F00]/10 blur-[150px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Editorial Split: Header (Left) + Large Hero Photo (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 lg:mb-24">
          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#FF6F00]/10 text-[#FF6F00] border border-[#FF6F00]/30 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6F00]" />
              {EXPERTISE_DATA.eyebrow}
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans leading-[1.12]">
              {EXPERTISE_DATA.headlineLine1}
              <br />
              <span className="text-slate-300 font-normal">
                {EXPERTISE_DATA.headlineLine2}
              </span>
            </h2>

            <div className="w-20 h-0.5 bg-gradient-to-r from-[#FF6F00] via-[#00B3FF] to-transparent rounded-full" />

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-xl">
              {EXPERTISE_DATA.supportingCopy}
            </p>

            {/* Editorial Highlight Quote Box */}
            <div className="p-5 rounded-xl bg-[#01153B]/90 border-l-2 border-[#FF6F00] border-y border-r border-slate-700/80 text-sm text-slate-300 space-y-2 shadow-lg backdrop-blur-xs">
              <p className="font-semibold text-white">
                Engineering for High-Consequence Systems
              </p>
              <p className="text-xs text-slate-400 leading-normal font-sans">
                ZOFT brings battle-tested engineering methodologies to ensure high throughput, transactional integrity, and zero unexpected downtime.
              </p>
            </div>
          </div>

          {/* Right Hero Image Column */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden border border-slate-700 bg-[#01153B] shadow-2xl group">
              <Image
                src={EXPERTISE_DATA.heroImage.src}
                alt={EXPERTISE_DATA.heroImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Subtle Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#031E4D] via-transparent to-black/20 opacity-80" />

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-center justify-between bg-[#01153B]/90 backdrop-blur-md px-4 py-3 rounded-lg border border-slate-700 shadow-lg">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#FF6F00] animate-pulse" />
                  <span className="text-xs sm:text-sm font-medium text-slate-200 font-sans">
                    {EXPERTISE_DATA.heroImage.caption}
                  </span>
                </div>
                <span className="hidden sm:inline-block text-[11px] font-mono text-[#00B3FF] uppercase tracking-widest font-semibold">
                  LIVE FIELD OPERATIONS
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Capability & Expertise Proof Grid */}
        <div className="pt-12 border-t border-slate-800">
          <div className="mb-8 flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block font-bold">
              CORE TECHNICAL PILLARS
            </span>
            <span className="text-[11px] font-mono text-[#00B3FF]">
              04 ARCHITECTURAL CAPABILITIES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 divide-slate-800">
            {EXPERTISE_DATA.pillars.map((pillar, idx) => (
              <div
                key={pillar.id}
                className={`pt-6 md:pt-0 ${
                  idx !== 0 ? 'lg:border-l lg:border-slate-800 lg:pl-8' : ''
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono text-xs font-bold text-[#FF6F00] bg-[#FF6F00]/10 px-2 py-0.5 rounded border border-[#FF6F00]/20">
                    {pillar.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-2 font-sans">
                  {pillar.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-4 font-sans">
                  {pillar.description}
                </p>

                <ul className="space-y-2 pt-3 border-t border-slate-800/80">
                  {pillar.focusAreas.map((area, areaIdx) => (
                    <li
                      key={areaIdx}
                      className="flex items-start gap-2 text-xs font-mono text-slate-400"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF] mt-1 shrink-0" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
