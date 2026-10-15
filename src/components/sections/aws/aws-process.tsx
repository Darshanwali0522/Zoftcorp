import React from 'react';
import {
  Search,
  FileText,
  CloudUpload,
  Settings2,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';
import { AWS_PROCESS_STAGES } from '@/data/partnerships/aws';

export const AwsProcess: React.FC = () => {
  const stageIcons = [
    <Search key="01" className="w-5 h-5 text-[#0077FF]" />,
    <FileText key="02" className="w-5 h-5 text-[#FF6F00]" />,
    <CloudUpload key="03" className="w-5 h-5 text-[#00BFA5]" />,
    <Settings2 key="04" className="w-5 h-5 text-[#8B5CF6]" />,
    <TrendingUp key="05" className="w-5 h-5 text-[#E91E63]" />,
  ];

  const colorStyles = [
    {
      numBg: 'bg-[#0077FF]',
      iconBg: 'bg-[#0077FF]/10 border-[#0077FF]/25',
      barBg: 'bg-[#0077FF]',
      glow: 'hover:shadow-[0_8px_25px_rgba(0,119,255,0.12)]',
    },
    {
      numBg: 'bg-[#FF6F00]',
      iconBg: 'bg-[#FF6F00]/10 border-[#FF6F00]/25',
      barBg: 'bg-[#FF6F00]',
      glow: 'hover:shadow-[0_8px_25px_rgba(255,111,0,0.12)]',
    },
    {
      numBg: 'bg-[#00BFA5]',
      iconBg: 'bg-[#00BFA5]/10 border-[#00BFA5]/25',
      barBg: 'bg-[#00BFA5]',
      glow: 'hover:shadow-[0_8px_25px_rgba(0,191,165,0.12)]',
    },
    {
      numBg: 'bg-[#8B5CF6]',
      iconBg: 'bg-[#8B5CF6]/10 border-[#8B5CF6]/25',
      barBg: 'bg-[#8B5CF6]',
      glow: 'hover:shadow-[0_8px_25px_rgba(139,92,246,0.12)]',
    },
    {
      numBg: 'bg-[#E91E63]',
      iconBg: 'bg-[#E91E63]/10 border-[#E91E63]/25',
      barBg: 'bg-[#E91E63]',
      glow: 'hover:shadow-[0_8px_25px_rgba(233,30,99,0.12)]',
    },
  ];

  return (
    <section className="relative w-full bg-[#F8FAFC] text-slate-900 py-20 md:py-28 overflow-hidden border-b border-slate-200">
      {/* Background Architectural Blueprint Grid */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00b3ff06_1px,transparent_1px),linear-gradient(to_bottom,#00b3ff06_1px,transparent_1px)] bg-[size:3rem_3rem]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="mb-14">
          <div className="w-12 h-1 bg-[#00B3FF] rounded-full mb-3" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#01153B] tracking-tight font-sans">
            Our <span className="text-[#00B3FF]">AWS Consulting Process</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mt-3 font-sans">
            A structured approach to deliver secure, scalable, and future-ready cloud solutions on AWS.
          </p>
        </div>

        {/* Desktop: Horizontal Deployment Pipeline (5 Connected Architectural Modules) */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-4 relative items-stretch">
          {AWS_PROCESS_STAGES.map((stage, idx) => {
            const style = colorStyles[idx];
            const isLast = idx === AWS_PROCESS_STAGES.length - 1;

            return (
              <div key={stage.number} className="relative flex flex-col">
                {/* Pipeline Header with Stage Circle & Directional Arrow */}
                <div className="flex items-center justify-between mb-4 px-2">
                  <div
                    className={`w-8 h-8 rounded-full ${style.numBg} text-white font-mono text-xs font-bold flex items-center justify-center shadow-md`}
                  >
                    {stage.number}
                  </div>

                  {!isLast && (
                    <div className="flex-1 mx-2 flex items-center justify-center">
                      <div className="w-full border-t border-dashed border-slate-300 relative">
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 absolute -right-1 -top-1.5" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Architectural Stage Module Card */}
                <div
                  className={`flex-1 rounded-2xl bg-white border border-slate-200 p-5 flex flex-col justify-between transition-all duration-300 ${style.glow} hover:-translate-y-1 relative overflow-hidden`}
                >
                  <div className="space-y-4">
                    {/* Icon Bubble */}
                    <div
                      className={`w-11 h-11 rounded-full ${style.iconBg} border flex items-center justify-center`}
                    >
                      {stageIcons[idx]}
                    </div>

                    {/* Stage Title */}
                    <h3 className="text-base font-bold text-[#01153B] tracking-tight font-sans leading-snug">
                      {stage.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">
                      {stage.description}
                    </p>
                  </div>

                  {/* Bottom Accent Bar */}
                  <div className="mt-5 pt-3">
                    <div className={`h-1.5 w-12 rounded-full ${style.barBg}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile & Tablet: Sequential Architectural Flow with Left Rail Connector */}
        <div className="lg:hidden space-y-6 relative pl-6 before:content-[''] before:absolute before:left-3 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-[#0077FF] before:via-[#00BFA5] before:to-[#E91E63]">
          {AWS_PROCESS_STAGES.map((stage, idx) => {
            const style = colorStyles[idx];

            return (
              <div key={stage.number} className="relative flex items-start gap-4">
                {/* Rail Node Circle */}
                <div
                  className={`absolute -left-6 top-4 w-6 h-6 rounded-full ${style.numBg} text-white font-mono text-[10px] font-bold flex items-center justify-center shadow-md z-10`}
                >
                  {stage.number}
                </div>

                {/* Card */}
                <div
                  className={`w-full rounded-2xl bg-white border border-slate-200 p-5 shadow-sm space-y-3 relative overflow-hidden ${style.glow}`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-full ${style.iconBg} border flex items-center justify-center shrink-0`}
                    >
                      {stageIcons[idx]}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-600 font-semibold">
                        {stage.stage}
                      </span>
                      <h3 className="text-base font-bold text-[#01153B] tracking-tight font-sans">
                        {stage.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {stage.description}
                  </p>

                  <div className="pt-2">
                    <div className={`h-1 w-10 rounded-full ${style.barBg}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
