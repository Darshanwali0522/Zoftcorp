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
                <span>CLOUD &amp; DATABASE EXPERTS • BOUTIQUE CONSULTING AGILITY</span>
              </span>
            </div>

            {/* Main Headline with Confident Editorial Scale */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[66px] font-extrabold text-[#01153B] tracking-tight leading-[1.04] max-w-2xl font-sans">
              Enterprise Technology. <br className="hidden sm:inline" />
              <span className="text-[#01153B]">Built for Reliability.</span>
            </h1>

            {/* Supporting Copy with Calibrated Measure */}
            <p className="text-slate-600 text-lg sm:text-xl font-normal leading-relaxed max-w-xl font-sans">
              ZOFT delivers practical cloud, database, and data engineering solutions backed by experienced experts—helping organizations reduce infrastructure costs, accelerate query performance, and operate critical systems.
            </p>

            {/* CTA Group with High-Contrast Hierarchy (Brand Orange Primary Action) */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="min-w-[180px] text-base font-semibold shadow-md hover:shadow-lg">
                  Talk to an Expert
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

            {/* Architectural Capability Focus Ledger */}
            <div className="pt-8 border-t border-slate-200/90 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
              <div className="p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200">
                <span className="text-[10px] font-mono font-bold text-[#00B3FF] block uppercase tracking-wider">
                  01 // CLOUD
                </span>
                <span className="text-xs font-bold text-[#01153B] block mt-1">
                  Architecture &amp; Migration
                </span>
                <span className="text-[11px] text-slate-500 block mt-0.5 leading-tight">
                  Multi-cloud alignment
                </span>
              </div>
              <div className="p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200">
                <span className="text-[10px] font-mono font-bold text-[#00B3FF] block uppercase tracking-wider">
                  02 // DATABASE
                </span>
                <span className="text-xs font-bold text-[#01153B] block mt-1">
                  Performance Tuning
                </span>
                <span className="text-[11px] text-slate-500 block mt-0.5 leading-tight">
                  Query &amp; engine tuning
                </span>
              </div>
              <div className="p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200">
                <span className="text-[10px] font-mono font-bold text-[#00B3FF] block uppercase tracking-wider">
                  03 // DATA
                </span>
                <span className="text-xs font-bold text-[#01153B] block mt-1">
                  Platform Engineering
                </span>
                <span className="text-[11px] text-slate-500 block mt-0.5 leading-tight">
                  Pipelines &amp; streaming
                </span>
              </div>
              <div className="p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200">
                <span className="text-[10px] font-mono font-bold text-[#00B3FF] block uppercase tracking-wider">
                  04 // SYSTEMS
                </span>
                <span className="text-xs font-bold text-[#01153B] block mt-1">
                  Reliability Advisory
                </span>
                <span className="text-[11px] text-slate-500 block mt-0.5 leading-tight">
                  Mission-critical systems
                </span>
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
