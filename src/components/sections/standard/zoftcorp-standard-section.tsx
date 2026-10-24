import React from "react";
import { Container } from "@/components/ui/container";
import { Layers, CheckCircle2, TrendingUp, Cpu } from "lucide-react";

interface StandardPillar {
  number: string;
  tag: string;
  title: string;
  content: string;
  icon: React.ElementType;
}

const STANDARD_PILLARS: StandardPillar[] = [
  {
    number: "01",
    tag: "FRAMEWORK",
    title: "One Engineering Framework",
    content:
      "All Zoftcorp services operate under a disciplined, battle-tested framework, ensuring structural consistency, predictable telemetry, and absolute accountability across your data estate.",
    icon: Layers,
  },
  {
    number: "02",
    tag: "VALIDATION",
    title: "Evidence Before Intervention",
    content:
      "We don't experiment with unproven paradigms. Every intervention is production-validated, enterprise-ready, and optimized for hard business outcomes.",
    icon: CheckCircle2,
  },
  {
    number: "03",
    tag: "OUTCOMES",
    title: "Outcome-Based Business",
    content:
      "We measure success by telemetry, not billable hours. Clients invest in measurable results: lower query latency, reduced cloud spend, and stronger compliance controls.",
    icon: TrendingUp,
  },
  {
    number: "04",
    tag: "PRAGMATISM",
    title: "Engineering Over Hype",
    content:
      "We separate architectural value from vendor narrative. Every recommendation is evaluated against workload characteristics, failure modes, lifecycle economics, operational complexity, and long-term maintainability.",
    icon: Cpu,
  },
];

export const ZoftcorpStandardSection: React.FC = () => {
  return (
    <section
      id="zoftcorp-standard"
      aria-label="The Zoftcorp Standard"
      className="relative w-full bg-slate-50/70 text-[#01153B] py-16 sm:py-20 lg:py-24 border-b border-slate-200/90 overflow-hidden"
    >
      {/* Background Architectural Blueprint Pattern */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />

      {/* Subtle ambient lighting */}
      <div
        className="pointer-events-none absolute -top-24 right-1/4 w-96 h-96 bg-[#00B3FF]/5 blur-3xl rounded-full"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 left-1/4 w-96 h-96 bg-[#01153B]/5 blur-3xl rounded-full"
        aria-hidden="true"
      />

      <Container size="wide" className="relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/30 shadow-2xs">
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00B3FF] opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00B3FF]" />
              </span>
              CORE PRINCIPLES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#01153B] font-sans leading-[1.12]">
            The Zoftcorp Standard
          </h2>

          <div className="space-y-3 pt-1 text-slate-600 font-sans max-w-3xl">
            <p className="text-lg sm:text-xl font-bold text-[#01153B] leading-snug">
              Your business moves at the speed of its database.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-slate-600">
              When execution paths degrade, queries spike, and technical debt compounds, the bottleneck isn’t merely lines of code. It bleeds directly into Total Cost of Ownership, degrades user experience, strains valuable engineering bandwidth — and exposes compliance risks that can’t be ignored.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-[#01153B] font-medium pt-0.5">
              That’s where Zoftcorp comes in. Founded by veteran Enterprise Architects, we replace reactive firefighting with principle-led architectural precision.
            </p>
          </div>
        </div>

        {/* 4-Pillar Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STANDARD_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="group relative flex flex-col justify-between bg-white rounded-2xl border border-slate-200/90 hover:border-[#00B3FF]/60 p-6 sm:p-7 shadow-xs hover:shadow-xl transition-all duration-300 ease-out overflow-hidden"
              >
                {/* Top Subtle Hover Accent Bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00B3FF] via-[#33C2FF] to-[#01153B] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                />

                <div className="space-y-4">
                  {/* Card Header: Number / Tag & Technical Icon */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
                      <span className="text-xs font-mono font-bold text-[#00B3FF] uppercase tracking-wider">
                        {`${pillar.number} // ${pillar.tag}`}
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200/70 text-[#01153B] group-hover:text-[#00B3FF] group-hover:bg-[#00B3FF]/10 group-hover:border-[#00B3FF]/30 flex items-center justify-center transition-colors duration-200">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Pillar Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#01153B] font-sans tracking-tight leading-snug">
                    {pillar.title}
                  </h3>

                  {/* Pillar Content */}
                  <p className="text-sm text-slate-600 leading-relaxed font-sans">
                    {pillar.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
