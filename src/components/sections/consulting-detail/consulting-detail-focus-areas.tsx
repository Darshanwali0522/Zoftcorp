import React from 'react';
import { ConsultingCapabilityDetail } from '@/data/consulting';
import { ArrowUpRight } from 'lucide-react';

interface Props {
  capability: ConsultingCapabilityDetail;
}

export function ConsultingDetailFocusAreas({ capability }: Props) {
  return (
    <section className="relative bg-slate-50/60 text-[#01153B] py-20 md:py-28 border-b border-slate-200/90 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/30 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
            WHAT WE ADDRESS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#01153B] font-sans">
            {capability.whatWeAddressHeadline || 'Technical Focus Areas'}
          </h2>
          <p className="text-base text-slate-600 mt-3 font-sans">
            ZOFT evaluates and guides technical implementations across four core architectural domains:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {capability.whatWeAddress.map((area) => (
            <div
              key={area.number}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-4 flex flex-col justify-between hover:border-[#00B3FF] hover:-translate-y-1 hover:shadow-card-elevated transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-[#00B3FF] bg-[#00B3FF]/10 px-2.5 py-1 rounded border border-[#00B3FF]/30 inline-block">
                    DOMAIN {area.number}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-[#00B3FF] transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-[#01153B] tracking-tight font-sans">
                  {area.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans mt-2.5">
                  {area.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-medium">
                  ARCHITECTURAL SCOPE
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]/40 group-hover:bg-[#00B3FF] transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
