import React from 'react';
import Image from 'next/image';
import {
  Users,
  FileCheck2,
  ShieldCheck,
  Building2,
  CheckCircle2,
} from 'lucide-react';
import {
  AWS_WHY_MATTERS_CONTENT,
  AWS_CREDIBILITY_ITEMS,
} from '@/data/partnerships/aws';

export const AwsWhyMatters: React.FC = () => {
  return (
    <section className="relative w-full bg-white text-slate-900 py-16 md:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="w-12 h-1 bg-[#00B3FF] rounded-full mb-3" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#01153B] tracking-tight font-sans">
            {AWS_WHY_MATTERS_CONTENT.headingPrefix}{' '}
            <span className="text-[#00B3FF]">
              {AWS_WHY_MATTERS_CONTENT.headingSuffix}
            </span>
          </h2>
        </div>

        {/* 3-Column Editorial Grid: Text | Skyscraper Architectural Visual | Credibility Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Authoritative Editorial Paragraph */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-sans">
              {AWS_WHY_MATTERS_CONTENT.body}
            </p>

            <div className="pt-2 space-y-3 font-sans text-sm text-slate-600">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00B3FF] shrink-0" />
                <span>Eliminate cloud waste with disciplined architectural governance</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00B3FF] shrink-0" />
                <span>Zero-downtime database and workload migration protocols</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00B3FF] shrink-0" />
                <span>Proactive security posture aligned with enterprise compliance</span>
              </div>
            </div>
          </div>

          {/* Center Column: AWS Skyscraper Architectural Visual */}
          <div className="lg:col-span-4 flex items-center justify-center">
            <div className="relative w-full max-w-[340px] h-[340px] sm:h-[380px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-gradient-to-br from-[#01153B] via-[#031E4D] to-[#0A2558] group">
              {/* Glass Facade Grid Patterns */}
              <div
                className="absolute inset-0 bg-[linear-gradient(to_right,#00b3ff15_1px,transparent_1px),linear-gradient(to_bottom,#00b3ff15_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-70 transform rotate-12 scale-125"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#01153B] via-transparent to-[#00B3FF]/20"
                aria-hidden="true"
              />

              {/* Perspective Architectural Building Graphic */}
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div className="flex items-center justify-between z-10">
                  <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded bg-[#01153B]/80 text-[#00B3FF] border border-[#00B3FF]/30 backdrop-blur-sm">
                    ENTERPRISE CLOUD
                  </span>
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                </div>

                {/* Central Building Wall with AWS Signage */}
                <div className="relative my-auto flex flex-col items-center justify-center py-8">
                  {/* Building Window Facade Reflection Lines */}
                  <div className="absolute -inset-x-8 h-40 bg-gradient-to-b from-sky-400/10 via-transparent to-transparent -skew-y-12 pointer-events-none" />

                  {/* 3D Illuminated AWS Signage Box on Building Exterior */}
                  <div className="relative z-20 px-6 py-4 rounded-xl bg-[#01153B]/90 border border-[#00B3FF]/50 shadow-[0_15px_35px_rgba(0,179,255,0.25)] backdrop-blur-md flex flex-col items-center gap-1 transform group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src="/platforms/aws-white.svg"
                      alt="AWS Cloud Architecture"
                      width={80}
                      height={46}
                      className="h-9 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(255,153,0,0.5)]"
                    />
                    <span className="text-[9px] font-mono tracking-widest text-slate-300 uppercase">
                      INFRASTRUCTURE HUB
                    </span>
                  </div>
                </div>

                {/* Bottom Architectural Base Bar */}
                <div className="z-10 pt-3 border-t border-slate-700/60 flex items-center justify-between text-[11px] font-mono text-slate-300">
                  <span>AWS PARTNERSHIP</span>
                  <span className="text-[#00B3FF]">ZOFTCORP</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Compact Credibility Cards Stack */}
          <div className="lg:col-span-3 space-y-3.5">
            {AWS_CREDIBILITY_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 hover:border-[#00B3FF]/40 hover:bg-sky-50/40 transition-all duration-200 flex items-start gap-3.5 shadow-sm"
              >
                <div className="w-9 h-9 rounded-lg bg-[#00B3FF]/10 border border-[#00B3FF]/20 flex items-center justify-center text-[#00B3FF] shrink-0 mt-0.5">
                  {item.iconType === 'architects' && <Users className="w-4 h-4" />}
                  {item.iconType === 'projects' && <FileCheck2 className="w-4 h-4" />}
                  {item.iconType === 'compliance' && <ShieldCheck className="w-4 h-4" />}
                  {item.iconType === 'tailored' && <Building2 className="w-4 h-4" />}
                </div>
                <div className="space-y-0.5">
                  {item.value ? (
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xl font-extrabold text-[#01153B] font-sans">
                        {item.value}
                      </span>
                      <span className="text-xs font-bold text-slate-800">
                        {item.label}
                      </span>
                    </div>
                  ) : (
                    <div className="text-xs font-bold text-slate-900 leading-tight">
                      {item.label}
                    </div>
                  )}
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
