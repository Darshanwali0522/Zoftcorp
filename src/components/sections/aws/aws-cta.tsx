import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export const AwsCta: React.FC = () => {
  return (
    <section className="relative w-full bg-[#01153B] text-white py-20 md:py-24 overflow-hidden">
      {/* Background Ambience */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00b3ff08_1px,transparent_1px),linear-gradient(to_bottom,#00b3ff08_1px,transparent_1px)] bg-[size:4rem_4rem]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#00B3FF]/20 via-sky-400/10 to-[#FF6F00]/15 blur-[140px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/15 text-[#00B3FF] border border-[#00B3FF]/30 mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ENTERPRISE AWS PARTNERSHIP</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans leading-tight">
          Ready to Accelerate Your{' '}
          <span className="text-[#00B3FF]">AWS Cloud Journey?</span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mt-4 font-sans leading-relaxed">
          Partner with certified AWS architects to design, migrate, and modernize your cloud workloads with zero downtime and measurable cost discipline.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact?service=aws-consulting"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-[#FF6F00] to-[#E65100] hover:from-[#FF7D1A] hover:to-[#FF6F00] shadow-lg shadow-orange-950/40 hover:shadow-orange-700/30 transition-all duration-200 transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-[#FF6F00] focus-visible:outline-offset-2"
          >
            <span>Talk to Our AWS Experts</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/consulting"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-200 bg-[#031E4D] hover:bg-[#042866] border border-slate-700/80 hover:border-[#00B3FF]/50 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#00B3FF] focus-visible:outline-offset-2"
          >
            <span>Explore Consulting Capabilities</span>
          </Link>
        </div>

        {/* Reassurance Badges */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#00B3FF]" />
            <span>AWS CERTIFIED ARCHITECTS</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6F00]" />
            <span>TRANSPARENT SOWs &amp; FINOPS</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>ZERO UNEXPECTED DOWNTIME</span>
          </div>
        </div>
      </div>
    </section>
  );
};
