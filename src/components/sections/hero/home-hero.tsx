import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { HeroVisual } from "./hero-visual";

export const HomeHero: React.FC = () => {
  return (
    <section className="relative w-full bg-white text-[#01153B] overflow-hidden border-b border-slate-200/90">
      {/* Background Architectural Blueprint Grid Accent */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center min-h-[75vh] lg:min-h-[84vh] py-16 sm:py-20 lg:py-24">
          {/* Left Column: Editorial Value Proposition & Actions */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Architectural Telemetry Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/30 shadow-2xs">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00B3FF] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00B3FF]" />
                </span>
                <span>ENTERPRISE CLOUD &amp; DATABASE ADVISORY</span>
              </span>
            </div>

            {/* Main Headline with Confident Editorial Scale */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[62px] font-extrabold text-[#01153B] tracking-tight leading-[1.08] max-w-2xl font-sans">
              Cloud and Database Experts <br className="hidden sm:inline" />
              Powered by AI
            </h1>

            {/* Supporting Copy with Calibrated Measure */}
            <p className="text-slate-600 text-lg sm:text-xl font-normal leading-relaxed max-w-xl font-sans">
              Delivering Enterprise-grade consulting with boutique consulting Agility
            </p>

            {/* CTA Group with High-Contrast Hierarchy (Brand Orange Primary Action) */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="min-w-[210px] text-base font-semibold shadow-md hover:shadow-lg">
                  Get a Free consultation
                </Button>
              </Link>
              <Link
                href="/offerings"
                className="inline-flex items-center gap-2 text-base font-semibold text-[#01153B] hover:text-[#00B3FF] transition-colors py-3 px-3 group rounded-lg focus-visible:outline-2 focus-visible:outline-[#00B3FF] hover:bg-slate-100/70"
              >
                <span>Explore Our Capabilities</span>
                <ArrowRight className="w-4 h-4 text-[#00B3FF] group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

            {/* 3 Value Points Ledger — Prominent Scannable Benefits */}
            <div className="pt-10 border-t border-slate-200/90 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5 max-w-3xl">
              {/* Benefit 1 */}
              <div className="p-5 rounded-2xl bg-white hover:bg-slate-50/50 transition-all duration-200 border border-slate-200/90 hover:border-[#00B3FF]/50 shadow-xs hover:shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#00B3FF]" />
                  <span className="text-[11px] font-mono font-bold text-[#00B3FF] uppercase tracking-wider">
                    01 // FINOPS
                  </span>
                </div>
                <h2 className="text-lg sm:text-xl font-extrabold text-[#01153B] tracking-tight leading-snug">
                  20–30% Savings
                </h2>
                <p className="text-sm text-slate-600 mt-1.5 leading-normal font-sans font-medium">
                  on cloud &amp; database spend
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="p-5 rounded-2xl bg-white hover:bg-slate-50/50 transition-all duration-200 border border-slate-200/90 hover:border-[#FF6F00]/50 shadow-xs hover:shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#FF6F00]" />
                  <span className="text-[11px] font-mono font-bold text-[#FF6F00] uppercase tracking-wider">
                    02 // PERFORMANCE
                  </span>
                </div>
                <h2 className="text-lg sm:text-xl font-extrabold text-[#01153B] tracking-tight leading-snug">
                  Faster Databases
                </h2>
                <p className="text-sm text-slate-600 mt-1.5 leading-normal font-sans font-medium">
                  with expert tuning
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="p-5 rounded-2xl bg-white hover:bg-slate-50/50 transition-all duration-200 border border-slate-200/90 hover:border-[#00B3FF]/50 shadow-xs hover:shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#00B3FF]" />
                  <span className="text-[11px] font-mono font-bold text-[#00B3FF] uppercase tracking-wider">
                    03 // COMPLIANCE
                  </span>
                </div>
                <h2 className="text-lg sm:text-xl font-extrabold text-[#01153B] tracking-tight leading-snug">
                  Stay Secure &amp; Compliant
                </h2>
                <p className="text-sm text-slate-600 mt-1.5 leading-normal font-sans font-medium">
                  with resilience built in
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Visual Composition */}
          <div className="lg:col-span-5 w-full">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
};
