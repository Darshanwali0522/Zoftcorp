import React from 'react';
import { ConsultingCapabilityDetail } from '@/data/consulting';
import { ArrowRight } from 'lucide-react';

interface Props {
  capability: ConsultingCapabilityDetail;
}

export function ConsultingDetailApproach({ capability }: Props) {
  return (
    <section className="relative bg-[#031E4D] text-white py-24 md:py-32 overflow-hidden border-t border-b border-white/10">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#00B3FF]/10 blur-[150px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#00B3FF]/10 text-[#00B3FF] border border-[#00B3FF]/30 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
            {capability.approach.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 font-sans leading-[1.15]">
            {capability.approach.headline}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-sans">
            ZOFT guides organizations through a structured technical process to bring clarity to complex architecture decisions.
          </p>
        </div>

        {/* 4-Stage Methodology Process Pipeline */}
        <div className="relative">
          {/* Connecting line on desktop */}
          <div
            className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-gradient-to-r from-[#00B3FF] via-[#00B3FF]/40 to-[#FF6F00] z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {capability.approach.stages.map((stage, idx) => (
              <div
                key={stage.number}
                className="bg-[#01153B] border border-white/10 rounded-2xl p-6 sm:p-7 space-y-4 flex flex-col justify-between backdrop-blur-sm hover:border-[#00B3FF] hover:-translate-y-1 transition-all duration-200 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#00B3FF] bg-[#00B3FF]/15 px-3 py-1.5 rounded-full border border-[#00B3FF]/40 inline-flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
                      STAGE {stage.number}
                    </span>
                    {idx < capability.approach.stages.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-slate-400 hidden lg:block group-hover:text-[#00B3FF] group-hover:translate-x-1 transition-all" />
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight font-sans mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-medium">
                    {stage.title.toUpperCase()} PHASE
                  </span>
                  <span className="text-[10px] font-mono text-[#00B3FF] font-semibold">
                    0{idx + 1}/04
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
