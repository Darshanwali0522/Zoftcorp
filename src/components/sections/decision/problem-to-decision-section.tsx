import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import {
  ArrowRight,
  TrendingDown,
  Gauge,
  RefreshCw,
  ShieldCheck,
  CheckCircle2,
  Compass,
} from "lucide-react";

interface DecisionPathway {
  id: string;
  code: string;
  problem: string;
  action: string;
  href: string;
  icon: React.ElementType;
}

const DECISION_PATHWAYS: DecisionPathway[] = [
  {
    id: "finops",
    code: "01 // FINOPS",
    problem: "Cloud Costs Climbing?",
    action: "Optimize Costs",
    href: "/consulting/cloud-finops",
    icon: TrendingDown,
  },
  {
    id: "performance",
    code: "02 // PERFORMANCE",
    problem: "Slow Database?",
    action: "Fix Performance",
    href: "/offerings/performance-tuning-delivery",
    icon: Gauge,
  },
  {
    id: "migration",
    code: "03 // MIGRATION",
    problem: "Planning a Database Migration or Transformation?",
    action: "Discuss Migration",
    href: "/offerings/database-migrations-and-transformations",
    icon: RefreshCw,
  },
  {
    id: "support",
    code: "04 // SUPPORT",
    problem: "Need Reliable Support?",
    action: "Get Expert Support",
    href: "/offerings/managed-dba-services",
    icon: ShieldCheck,
  },
  {
    id: "dpdp",
    code: "05 // COMPLIANCE",
    problem: "Looking for DPDP Compliance Partner",
    action: "Request a Free Assessment",
    href: "/consulting/compliance-governance",
    icon: CheckCircle2,
  },
  {
    id: "architecture",
    code: "06 // ARCHITECTURE",
    problem: "Planning What's Next?",
    action: "Talk to our Architect",
    href: "/contact",
    icon: Compass,
  },
];

export const ProblemToDecisionSection: React.FC = () => {
  return (
    <section
      id="problem-to-decision"
      aria-label="Start with the problem. End with the right decision."
      className="relative bg-[#01153B] text-white py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-slate-800"
    >
      {/* Background Ambient Lighting */}
      <div
        className="pointer-events-none absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#00B3FF]/10 blur-[160px] rounded-full"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#031E4D]/60 blur-[140px] rounded-full"
        aria-hidden="true"
      />

      <Container size="wide" className="relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#00B3FF] border border-[#00B3FF]/30 shadow-2xs">
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00B3FF] opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00B3FF]" />
              </span>
              DECISION PATHWAYS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white font-sans leading-tight">
            START WITH THE PROBLEM. END WITH THE RIGHT DECISION.
          </h2>
        </div>

        {/* 6 Pathways Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DECISION_PATHWAYS.map((pathway) => {
            const Icon = pathway.icon;
            return (
              <Link
                key={pathway.id}
                href={pathway.href}
                className="group relative flex flex-col justify-between bg-[#031E4D]/80 border border-slate-700/80 hover:border-[#00B3FF]/60 hover:bg-[#031E4D] rounded-2xl p-6 sm:p-7 shadow-xl hover:shadow-2xl transition-all duration-200 ease-out hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B3FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#01153B]"
              >
                {/* Top Subtle Blue Glow Line on Hover */}
                <span
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00B3FF] via-[#33C2FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-t-2xl"
                  aria-hidden="true"
                />

                <div className="space-y-5">
                  {/* Card Header: Code & Icon */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-700/60">
                    <span className="text-xs font-mono font-bold text-[#00B3FF] uppercase tracking-wider">
                      {pathway.code}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#01153B] border border-slate-700 text-[#00B3FF] flex items-center justify-center transition-colors duration-200 group-hover:bg-[#00B3FF]/20 group-hover:border-[#00B3FF]/40">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Problem Statement */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                      PROBLEM
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white font-sans tracking-tight leading-snug group-hover:text-[#00B3FF] transition-colors">
                      {pathway.problem}
                    </h3>
                  </div>
                </div>

                {/* Recommended Action Footer */}
                <div className="pt-6 mt-6 border-t border-slate-700/60 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#00B3FF] block font-semibold">
                      ACTION
                    </span>
                    <span className="text-sm font-bold text-slate-100 group-hover:text-white transition-colors block">
                      {pathway.action}
                    </span>
                  </div>
                  <span className="w-9 h-9 rounded-lg bg-[#01153B] border border-slate-700 group-hover:border-[#00B3FF]/60 group-hover:bg-[#00B3FF] text-[#00B3FF] group-hover:text-[#01153B] flex items-center justify-center transition-all duration-200 shrink-0">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
