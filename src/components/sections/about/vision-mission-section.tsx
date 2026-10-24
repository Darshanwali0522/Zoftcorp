import React from 'react';
import { Target, Compass, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/container';

interface VisionMissionSectionProps {
  id?: string;
}

export function VisionMissionSection({
  id = 'vision-mission',
}: VisionMissionSectionProps) {
  return (
    <section
      id={id}
      aria-label="Vision and Mission"
      className="relative w-full bg-slate-50/70 text-[#01153B] py-16 sm:py-20 lg:py-24 border-b border-slate-200/90 overflow-hidden"
    >
      {/* Blueprint Grid Accent */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />

      <Container size="wide" className="relative z-10 space-y-12 sm:space-y-14">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/30 shadow-2xs">
              <Compass className="w-3.5 h-3.5 text-[#00B3FF]" />
              <span>COMPANY DIRECTION</span>
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#01153B] font-sans leading-[1.12]">
            Vision &amp; Mission
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans max-w-2xl font-normal">
            Our guiding purpose and architectural commitment — replacing reactive firefighting with principle-led engineering, structural consistency, and measurable business value.
          </p>
        </div>

        {/* Dual Cards: Our Mission & Our Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* 1. OUR MISSION (Reusing existing approved website content) */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-8 sm:p-10 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <span className="w-10 h-10 rounded-xl bg-[#00B3FF]/10 text-[#00B3FF] flex items-center justify-center">
                    <Target className="w-5 h-5" />
                  </span>
                  <span className="font-mono text-xs font-bold text-[#00B3FF] uppercase tracking-wider">
                    FOUNDATIONAL COMMITMENT
                  </span>
                </div>
                <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
                  PURPOSE
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#01153B] font-sans tracking-tight">
                Our Mission
              </h3>

              {/* Exact Grounded Website Content */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-sans font-medium">
                Our mission is to empower businesses with tailored solutions that drive growth, optimize performance, and unlock new opportunities. We believe in a client-centric approach, where understanding your unique needs and challenges is the foundation of everything we do.
              </p>

              {/* Key Mission Pillars */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-[#00B3FF] shrink-0 mt-0.5" />
                  <span><strong>Client-Centric Precision:</strong> Engineering solutions designed around your exact workloads, constraints, and business goals.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-[#00B3FF] shrink-0 mt-0.5" />
                  <span><strong>Performance Optimization:</strong> Converting unoptimized database layers into high-throughput, low-latency business assets.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-[#00B3FF] shrink-0 mt-0.5" />
                  <span><strong>Unlocking Growth:</strong> Providing scalable cloud architectures and rigorous governance that support long-term enterprise expansion.</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>PILLAR: CLIENT EMPOWERMENT</span>
              <span className="text-[#00B3FF] font-bold">MEASURABLE IMPACT</span>
            </div>
          </div>

          {/* 2. OUR VISION (Grounded in Zoftcorp's enterprise architectural tenets) */}
          <div className="bg-[#01153B] text-white rounded-2xl border border-slate-750 p-8 sm:p-10 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <span className="w-10 h-10 rounded-xl bg-[#00B3FF]/20 text-[#00B3FF] flex items-center justify-center">
                    <Compass className="w-5 h-5" />
                  </span>
                  <span className="font-mono text-xs font-bold text-[#00B3FF] uppercase tracking-wider">
                    LONG-TERM ASPIRATION
                  </span>
                </div>
                <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[#00B3FF] bg-[#00B3FF]/15 px-2.5 py-1 rounded border border-[#00B3FF]/30">
                  DIRECTION
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight">
                Our Vision
              </h3>

              {/* Architectural Tenet Statement */}
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-sans font-medium">
                To be the premier enterprise cloud and database advisory partner, transforming mission-critical data infrastructure into resilient, high-performance, and cost-optimized strategic assets through principle-led engineering and boutique agility.
              </p>

              {/* Key Vision Pillars */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00B3FF] shrink-0 mt-0.5" />
                  <span><strong>Principle-Led Engineering:</strong> Replace reactive firefighting with battle-tested frameworks, evidence before intervention, and telemetry-backed accountability.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6F00] shrink-0 mt-0.5" />
                  <span><strong>Cost &amp; Compliance Discipline:</strong> Embed FinOps optimization and DPDP/GDPR regulatory safeguards directly into every technical architecture.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Operational Continuity:</strong> Ensure zero-downtime evolution, seamless cloud-native transitions, and 24x7 mission-critical resilience.</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>PILLAR: ARCHITECTURAL EXCELLENCE</span>
              <span className="text-[#00B3FF] font-bold">ENTERPRISE AGILITY</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
