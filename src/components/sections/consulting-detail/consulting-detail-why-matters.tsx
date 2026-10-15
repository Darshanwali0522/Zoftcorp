import React from 'react';
import { ConsultingCapabilityDetail } from '@/data/consulting';
import { ShieldCheck, Cpu, Database, Network } from 'lucide-react';

interface Props {
  capability: ConsultingCapabilityDetail;
}

export function ConsultingDetailWhyMatters({ capability }: Props) {
  const calloutTitle = capability.whyMatters.calloutTitle || 'Pragmatic Engineering Over Hype';
  const calloutCopy =
    capability.whyMatters.calloutCopy ||
    `ZOFT approaches ${capability.name.toLowerCase()} by grounding technology decisions in operational realities rather than architectural speculation. Technical guidance is driven by:`;

  return (
    <section className="relative bg-white text-[#01153B] py-20 md:py-28 border-b border-slate-200/90 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Typographic Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              {capability.whyMatters.eyebrow}
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#01153B] font-sans leading-[1.15]">
              {capability.whyMatters.headline}
            </h2>

            <div className="w-16 h-0.5 bg-gradient-to-r from-[#00B3FF] to-[#FF6F00] rounded-full my-6" />

            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-sans font-normal">
              {capability.whyMatters.copy}
            </p>

            <div className="pt-4 flex items-center gap-4 text-xs font-mono text-slate-500 uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Operational Reality
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#00B3FF]" />
                Zero Vendor Bias
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#FF6F00]" />
                Measurable Impact
              </span>
            </div>
          </div>

          {/* Right Column: Architectural Callout Card in Secondary Navy */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-[#031E4D] text-white rounded-2xl p-7 sm:p-8 border border-[#00B3FF]/30 shadow-xl space-y-5 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-[11px] font-mono text-[#00B3FF] uppercase tracking-wider font-semibold">
                  ADVISORY PRINCIPLE
                </span>
                <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded">
                  ZOFT METHOD
                </span>
              </div>

              <h3 className="text-xl font-bold text-white font-sans leading-tight">
                {calloutTitle}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed font-sans font-normal">
                {calloutCopy}
              </p>

              <div className="pt-2 space-y-2.5">
                <div className="flex items-start gap-3 bg-[#01153B] p-3 rounded-xl border border-white/5">
                  <Cpu className="w-4 h-4 text-[#00B3FF] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold text-white block">Production Workload Realities</span>
                    <span className="text-[11px] text-slate-300 block">Concurrency, throughput limits, and peak behavior.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-[#01153B] p-3 rounded-xl border border-white/5">
                  <Database className="w-4 h-4 text-[#00B3FF] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold text-white block">Data Requirements &amp; Storage Semantics</span>
                    <span className="text-[11px] text-slate-300 block">Consistency models, indexing topology, and volume.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-[#01153B] p-3 rounded-xl border border-white/5">
                  <Network className="w-4 h-4 text-[#00B3FF] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold text-white block">Infrastructure Constraints</span>
                    <span className="text-[11px] text-slate-300 block">Latency, cloud boundaries, and resource ceilings.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-[#01153B] p-3 rounded-xl border border-white/5">
                  <ShieldCheck className="w-4 h-4 text-[#FF6F00] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold text-white block">Measurable Technical Guidance</span>
                    <span className="text-[11px] text-slate-300 block">Actionable next steps instead of theoretical slideware.</span>
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
