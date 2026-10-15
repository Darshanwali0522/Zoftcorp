import React from 'react';
import { ConsultingCapabilityDetail } from '@/data/consulting';

interface Props {
  capability: ConsultingCapabilityDetail;
}

export function ConsultingDetailVisualBreak({ capability }: Props) {
  const statement =
    capability.visualBreak ||
    'Better Technology Decisions Start With Better Technical Understanding.';

  return (
    <section className="relative bg-[#01153B] text-white py-20 md:py-28 overflow-hidden border-t border-b border-white/10">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00B3FF]/10 blur-[150px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="font-mono text-xs font-semibold text-[#00B3FF] uppercase tracking-widest bg-[#00B3FF]/10 px-3 py-1 rounded-full border border-[#00B3FF]/30">
            {"//"} ARCHITECTURAL THESIS
          </span>
        </div>

        <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-[1.25] font-sans">
          “{statement}”
        </blockquote>

        <div className="w-16 h-0.5 bg-gradient-to-r from-[#00B3FF] to-[#FF6F00] mx-auto my-6 rounded-full" />

        {capability.visualBreakCopy && (
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans">
            {capability.visualBreakCopy}
          </p>
        )}
      </div>
    </section>
  );
}
