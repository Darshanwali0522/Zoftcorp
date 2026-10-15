import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageSquare } from 'lucide-react';

export function ConsultingCTA() {
  return (
    <section
      aria-label="Talk to an Expert"
      className="relative bg-[#01153B] text-white py-24 md:py-32 overflow-hidden border-t border-white/10"
    >
      {/* Background ambient light */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-[550px] h-[550px] bg-[#00B3FF]/10 blur-[150px] rounded-full"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-0 left-0 w-[400px] h-[400px] bg-[#031E4D]/80 blur-[130px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#00B3FF]/10 text-[#00B3FF] border border-[#00B3FF]/30">
          <MessageSquare className="w-3.5 h-3.5" />
          TALK TO AN EXPERT
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-sans leading-[1.12] max-w-3xl mx-auto">
          Have a Complex Technology Decision Ahead?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
          Bring us your architecture, database, cloud, performance, or governance challenge. We&apos;ll help you understand the options and determine a practical path forward.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#FF6F00] hover:bg-[#E66400] text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-[#FF6F00]/25 hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
          >
            Talk to an Expert
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-lg text-base font-semibold text-white hover:bg-white/10 transition-all duration-200 border border-white/20 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-[#00B3FF] group"
          >
            <span>Contact ZOFT</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
