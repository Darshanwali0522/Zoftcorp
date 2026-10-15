import React from 'react';
import { FileCode, CheckCircle2 } from 'lucide-react';
import { ConsultingCapabilityDetail } from '@/data/consulting';

interface Props {
  capability: ConsultingCapabilityDetail;
}

export function ConsultingDetailDeliverables({ capability }: Props) {
  const headline = capability.deliverablesHeadline || 'Actionable Engineering Guidance';
  const intro =
    capability.deliverablesIntro ||
    "Potential technical deliverables tailored to your organization's specific architecture requirements may include:";

  return (
    <section className="relative bg-white text-[#01153B] py-20 md:py-28 border-b border-slate-200/90 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              KEY TECHNICAL DELIVERABLES
            </span>
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest hidden sm:inline-block">
              {"//"} {capability.deliverables.length} CORE ARTIFACTS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#01153B] font-sans">
            {headline}
          </h2>
          <p className="text-base text-slate-600 mt-3 font-sans leading-relaxed">
            {intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capability.deliverables.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/80 p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#00B3FF] hover:-translate-y-1 hover:shadow-card-elevated transition-all duration-200 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-[#00B3FF] bg-[#00B3FF]/10 px-2.5 py-1 rounded border border-[#00B3FF]/20">
                    ARTIFACT 0{idx + 1}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white text-[#00B3FF] flex items-center justify-center border border-slate-200 group-hover:border-[#00B3FF] group-hover:bg-[#00B3FF]/10 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-[#00B3FF]" />
                  </div>
                </div>

                <p className="text-base font-bold text-[#01153B] font-sans leading-snug pt-1">
                  {item}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 mt-4 flex items-center justify-between text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                <span className="flex items-center gap-1.5">
                  <FileCode className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#00B3FF] transition-colors" />
                  Engineering Asset
                </span>
                <span className="font-semibold text-slate-500">Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
