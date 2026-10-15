import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CONSULTING_PRINCIPLES } from '@/data/consulting';

export function ConsultingApproach() {
  return (
    <section
      aria-label="How We Consult"
      className="relative bg-white text-[#01153B] py-24 md:py-32 border-b border-slate-200/90 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/30 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
            HOW WE CONSULT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#01153B] mb-5 font-sans leading-[1.15]">
            Practical Expertise.
            <br />
            <span className="text-slate-600 font-normal">Clearer Technology Decisions.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-sans">
            Our advisory process is structured to deliver pragmatic, actionable technical direction—minimizing risk and accelerating execution.
          </p>
        </div>

        {/* 4 Approach Principles Process Grid with Connecting Line */}
        <div className="relative">
          <div
            className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-gradient-to-r from-[#00B3FF] via-[#00B3FF]/40 to-[#FF6F00] z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {CONSULTING_PRINCIPLES.map((principle, idx) => (
              <div
                key={principle.number}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-4 hover:border-[#00B3FF] hover:-translate-y-1 hover:shadow-card-elevated transition-all duration-200 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#00B3FF] bg-[#00B3FF]/10 px-3 py-1.5 rounded-full border border-[#00B3FF]/30 inline-flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
                      PHASE {principle.number}
                    </span>
                    {idx < CONSULTING_PRINCIPLES.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-slate-300 hidden lg:block group-hover:text-[#00B3FF] group-hover:translate-x-1 transition-all" />
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-[#01153B] tracking-tight font-sans mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans">
                    {principle.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-medium">
                    ADVISORY MILESTONE
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
