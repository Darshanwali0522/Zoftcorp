import React from 'react';

export function ConsultingVisualBreak() {
  return (
    <section className="relative bg-[#01153B] text-white py-24 md:py-32 overflow-hidden border-t border-b border-white/10">
      {/* Ambient background lighting */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#00B3FF]/10 blur-[160px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="font-mono text-xs font-semibold text-[#00B3FF] uppercase tracking-widest bg-[#00B3FF]/10 px-3 py-1 rounded-full border border-[#00B3FF]/30">
            {"//"} ENTERPRISE PERSPECTIVE
          </span>
        </div>

        <blockquote className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.2] font-sans">
          “Better Technology Decisions Start With Better Technical Understanding.”
        </blockquote>

        <div className="w-16 h-0.5 bg-gradient-to-r from-[#00B3FF] to-[#FF6F00] mx-auto my-8 rounded-full" />

        <p className="text-slate-300 text-base sm:text-lg font-sans max-w-xl mx-auto leading-relaxed">
          ZOFT combines deep engineering knowledge with practical advisory to help enterprise leaders eliminate complexity and execute with clarity.
        </p>
      </div>
    </section>
  );
}
