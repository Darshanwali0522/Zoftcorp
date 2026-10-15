import React from 'react';
import {
  Cpu,
  Database,
  Layers,
  Zap,
  BarChart3,
  ShieldCheck,
  Check,
} from 'lucide-react';
import { AWS_SPECIALIZED_SERVICES } from '@/data/partnerships/aws';

export const AwsSpecializedServices: React.FC = () => {
  const serviceIcons = [
    <Cpu key="ec2" className="w-5 h-5 text-[#00B3FF]" />,
    <Database key="rds" className="w-5 h-5 text-[#FF6F00]" />,
    <Layers key="s3" className="w-5 h-5 text-cyan-400" />,
    <Zap key="lambda" className="w-5 h-5 text-amber-400" />,
    <BarChart3 key="redshift" className="w-5 h-5 text-[#00B3FF]" />,
    <ShieldCheck key="security" className="w-5 h-5 text-emerald-400" />,
  ];

  return (
    <section className="relative w-full bg-white text-slate-900 py-20 md:py-28 overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="w-12 h-1 bg-[#00B3FF] rounded-full mb-3" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#01153B] tracking-tight font-sans">
            AWS Services <span className="text-[#00B3FF]">We Specialize In</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-3xl mt-3 font-sans">
            Engineering depth across foundational compute, mission-critical relational and NoSQL databases, storage lifecycle automation, serverless execution, and zero-trust security.
          </p>
        </div>

        {/* Structured Infrastructure Layer Grid (3 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {AWS_SPECIALIZED_SERVICES.map((service, idx) => (
            <div
              key={service.name}
              className="rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-[#00B3FF]/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/5 group relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#00B3FF]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-4">
                {/* Header: Icon & Category */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                    {serviceIcons[idx]}
                  </div>
                  <span className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded bg-[#01153B]/5 text-[#01153B] font-semibold border border-slate-200">
                    LAYER 0{idx + 1}
                  </span>
                </div>

                {/* Service Name & Category */}
                <div>
                  <h3 className="text-lg font-bold text-[#01153B] tracking-tight font-sans">
                    {service.name}
                  </h3>
                  <div className="text-xs font-mono text-[#00B3FF] mt-0.5 font-semibold">
                    {service.category}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {service.description}
                </p>
              </div>

              {/* Service Capabilities Tags */}
              <div className="pt-6 mt-6 border-t border-slate-200/80">
                <div className="text-[11px] font-mono text-slate-600 font-semibold uppercase tracking-wider mb-2.5">
                  Core Technologies:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[11px] font-sans text-slate-700 shadow-2xs group-hover:border-[#00B3FF]/30 transition-colors"
                    >
                      <Check className="w-3 h-3 text-[#00B3FF] shrink-0" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
