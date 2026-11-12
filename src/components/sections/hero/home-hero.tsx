import React from "react";
import Link from "next/link";
import { ArrowRight, TrendingDown, Gauge, ShieldCheck } from "lucide-react";
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
            <div className="inline-flex items-center gap-2 max-w-full">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/30 shadow-2xs max-w-full truncate">
                <span className="flex h-2 w-2 relative shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00B3FF] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00B3FF]" />
                </span>
                <span className="truncate">ENTERPRISE CLOUD &amp; DATABASE EXPERTS</span>
              </span>
            </div>

            {/* Main Headline with Confident Editorial Scale */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-[62px] font-extrabold text-[#01153B] tracking-tight leading-[1.1] max-w-2xl font-sans">
              Cloud and Database Experts <br className="hidden sm:inline" />
              Powered by AI
            </h1>

            {/* Supporting Copy with Calibrated Measure */}
            <p className="text-slate-600 text-lg sm:text-xl font-normal leading-relaxed max-w-xl font-sans">
              Delivering Enterprise-grade consulting with boutique consulting Agility
            </p>

            {/* CTA Group with High-Contrast Hierarchy (Brand Orange Primary Action) */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full sm:min-w-[210px] text-base font-semibold shadow-md hover:shadow-lg">
                  Get a Free consultation
                </Button>
              </Link>
              <Link
                href="/offerings"
                className="inline-flex items-center gap-2 text-base font-semibold text-[#01153B] hover:text-[#00B3FF] transition-colors py-2.5 px-3 group rounded-lg focus-visible:outline-2 focus-visible:outline-[#00B3FF] hover:bg-slate-100/70"
              >
                <span>Explore Our Capabilities</span>
                <ArrowRight className="w-4 h-4 text-[#00B3FF] group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

            {/* 3 Core Value Propositions — Cohesive Corporate Navy/Blue Visual Treatment */}
            <div className="pt-8 border-t border-slate-200/90">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5 max-w-3xl">
                {/* Benefit 1: FinOps 20–30% Savings */}
                <div className="group relative flex flex-col justify-between p-5 sm:p-7 rounded-2xl bg-gradient-to-br from-[#01153B] via-[#021B4D] to-[#02255E] border border-[#0066CC]/30 hover:border-[#00B3FF]/70 shadow-lg shadow-[#01153B]/10 hover:shadow-2xl hover:shadow-[#0066CC]/20 hover:-translate-y-1.5 transition-all duration-300 ease-out overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0066CC] via-[#00B3FF] to-sky-400 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                  <div
                    className="pointer-events-none absolute -bottom-10 -right-10 w-32 h-32 bg-[#00B3FF]/10 rounded-full blur-2xl group-hover:bg-[#00B3FF]/20 transition-all duration-500"
                    aria-hidden="true"
                  />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-[11px] font-mono font-bold text-[#00B3FF] uppercase tracking-wider bg-[#00B3FF]/15 px-2.5 py-1 rounded-md border border-[#00B3FF]/30">
                        01 // FINOPS
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-[#00B3FF]/15 text-[#00B3FF] flex items-center justify-center shrink-0 border border-[#00B3FF]/25 group-hover:scale-105 transition-transform">
                        <TrendingDown className="w-4 h-4" />
                      </div>
                    </div>
                    <h2 className="text-xl sm:text-2xl lg:text-[26px] font-extrabold text-white tracking-tight leading-snug group-hover:text-sky-100 transition-colors">
                      20–30% Savings
                    </h2>
                  </div>
                  <p className="relative z-10 text-sm text-slate-300 mt-3 leading-relaxed font-sans font-medium">
                    on cloud &amp; database spend
                  </p>
                </div>

                {/* Benefit 2: Performance Faster Databases */}
                <div className="group relative flex flex-col justify-between p-5 sm:p-7 rounded-2xl bg-gradient-to-br from-[#01153B] via-[#021B4D] to-[#02255E] border border-[#0066CC]/30 hover:border-[#00B3FF]/70 shadow-lg shadow-[#01153B]/10 hover:shadow-2xl hover:shadow-[#0066CC]/20 hover:-translate-y-1.5 transition-all duration-300 ease-out overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0066CC] via-[#00B3FF] to-sky-400 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                  <div
                    className="pointer-events-none absolute -bottom-10 -right-10 w-32 h-32 bg-[#00B3FF]/10 rounded-full blur-2xl group-hover:bg-[#00B3FF]/20 transition-all duration-500"
                    aria-hidden="true"
                  />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-[11px] font-mono font-bold text-[#00B3FF] uppercase tracking-wider bg-[#00B3FF]/15 px-2.5 py-1 rounded-md border border-[#00B3FF]/30">
                        02 // PERFORMANCE
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-[#00B3FF]/15 text-[#00B3FF] flex items-center justify-center shrink-0 border border-[#00B3FF]/25 group-hover:scale-105 transition-transform">
                        <Gauge className="w-4 h-4" />
                      </div>
                    </div>
                    <h2 className="text-xl sm:text-2xl lg:text-[26px] font-extrabold text-white tracking-tight leading-snug group-hover:text-sky-100 transition-colors">
                      Faster Databases
                    </h2>
                  </div>
                  <p className="relative z-10 text-sm text-slate-300 mt-3 leading-relaxed font-sans font-medium">
                    with expert tuning
                  </p>
                </div>

                {/* Benefit 3: Compliance Stay Secure & Compliant */}
                <div className="group relative flex flex-col justify-between p-5 sm:p-7 rounded-2xl bg-gradient-to-br from-[#01153B] via-[#021B4D] to-[#02255E] border border-[#0066CC]/30 hover:border-[#00B3FF]/70 shadow-lg shadow-[#01153B]/10 hover:shadow-2xl hover:shadow-[#0066CC]/20 hover:-translate-y-1.5 transition-all duration-300 ease-out overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0066CC] via-[#00B3FF] to-sky-400 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                  <div
                    className="pointer-events-none absolute -bottom-10 -right-10 w-32 h-32 bg-[#00B3FF]/10 rounded-full blur-2xl group-hover:bg-[#00B3FF]/20 transition-all duration-500"
                    aria-hidden="true"
                  />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-[11px] font-mono font-bold text-[#00B3FF] uppercase tracking-wider bg-[#00B3FF]/15 px-2.5 py-1 rounded-md border border-[#00B3FF]/30">
                        03 // COMPLIANCE
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-[#00B3FF]/15 text-[#00B3FF] flex items-center justify-center shrink-0 border border-[#00B3FF]/25 group-hover:scale-105 transition-transform">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                    </div>
                    <h2 className="text-xl sm:text-2xl lg:text-[26px] font-extrabold text-white tracking-tight leading-snug group-hover:text-sky-100 transition-colors">
                      Stay Secure &amp; Compliant
                    </h2>
                  </div>
                  <p className="relative z-10 text-sm text-slate-300 mt-3 leading-relaxed font-sans font-medium">
                    with resilience built-in
                  </p>
                </div>
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
