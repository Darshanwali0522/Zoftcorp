import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Cloud,
  ShieldCheck,
  BarChart3,
  Settings,
  ChevronRight,
} from 'lucide-react';
import { AWS_HERO_CONTENT } from '@/data/partnerships/aws';

export const AwsHero: React.FC = () => {
  return (
    <section className="relative w-full bg-[#01153B] text-white py-16 md:py-24 lg:py-28 overflow-hidden border-b border-slate-800">
      {/* Background Gradients & Grid */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00b3ff08_1px,transparent_1px),linear-gradient(to_bottom,#00b3ff08_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-10 right-1/4 w-[500px] h-[500px] bg-[#00B3FF]/15 blur-[160px] rounded-full"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-10 w-[380px] h-[380px] bg-[#FF6F00]/10 blur-[140px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb: Home / AWS */}
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider text-slate-400"
        >
          <Link
            href="/"
            className="hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-[#00B3FF] rounded"
          >
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-[#00B3FF] font-semibold">AWS</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Title, Copy, CTA */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] font-sans">
              {AWS_HERO_CONTENT.headingPrefix}{' '}
              <span className="text-[#00B3FF]">
                {AWS_HERO_CONTENT.headingSuffix}
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-sans font-normal">
              {AWS_HERO_CONTENT.description}
            </p>

            <div className="pt-2">
              <Link
                href={AWS_HERO_CONTENT.ctaHref}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-[#FF6F00] to-[#E65100] hover:from-[#FF7D1A] hover:to-[#FF6F00] shadow-lg shadow-orange-950/40 hover:shadow-orange-700/30 transition-all duration-200 transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-[#FF6F00] focus-visible:outline-offset-2"
              >
                <span>{AWS_HERO_CONTENT.ctaLabel}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: 3D Isometric Infrastructure Composition */}
          <div className="lg:col-span-5 w-full flex items-center justify-center">
            <div className="relative w-full max-w-[500px] min-h-[360px] sm:min-h-[400px] flex items-center justify-center p-4">
              {/* Radial Glow Underlay */}
              <div
                className="absolute inset-0 bg-gradient-to-tr from-[#00B3FF]/20 via-sky-500/10 to-[#FF6F00]/15 rounded-3xl blur-2xl opacity-75"
                aria-hidden="true"
              />

              {/* Central Glowing Platform Visual */}
              <div className="relative z-10 w-full flex flex-col items-center">
                {/* 3D Tiered Platform Graphic */}
                <div className="relative w-72 sm:w-80 h-48 sm:h-56 flex items-center justify-center">
                  {/* Perspective Grid Pedestal */}
                  <div
                    className="absolute inset-x-4 bottom-2 h-28 bg-[#031E4D]/90 border border-[#00B3FF]/40 rounded-2xl shadow-[0_0_35px_rgba(0,179,255,0.25)] transform -skew-y-3 backdrop-blur-md overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#00b3ff15_1px,transparent_1px),linear-gradient(to_bottom,#00b3ff15_1px,transparent_1px)] bg-[size:1rem_1rem]" />
                    <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#00B3FF] to-transparent" />
                  </div>

                  {/* Second Tier Platform */}
                  <div
                    className="absolute inset-x-10 bottom-8 h-20 bg-[#01153B]/95 border border-cyan-400/50 rounded-xl shadow-[0_0_25px_rgba(0,229,255,0.3)] transform -skew-y-3 flex items-center justify-center overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00B3FF]/10 via-cyan-400/20 to-[#FF6F00]/10" />
                  </div>

                  {/* Top Tier Floating AWS Pedestal */}
                  <div className="relative z-20 px-6 py-4 rounded-2xl bg-[#031E4D] border border-cyan-400/80 shadow-[0_10px_35px_rgba(0,179,255,0.4)] flex flex-col items-center justify-center gap-1.5 transform hover:scale-105 transition-transform duration-300">
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#00B3FF] via-cyan-300 to-[#FF6F00] opacity-40 blur-sm" />
                    <div className="relative z-10 flex flex-col items-center">
                      <Image
                        src="/platforms/aws-white.svg"
                        alt="AWS"
                        width={90}
                        height={50}
                        className="h-10 sm:h-12 w-auto object-contain filter drop-shadow-[0_2px_10px_rgba(255,153,0,0.4)]"
                        priority
                      />
                      <span className="text-[10px] font-mono tracking-widest uppercase text-cyan-300 mt-1 font-semibold">
                        CLOUD ECOSYSTEM
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Node 1: Scalable Infrastructure (Top Left) */}
                <div
                  className="absolute -top-1 left-0 sm:left-2 bg-[#031E4D]/90 border border-cyan-400/40 rounded-xl p-2.5 sm:p-3 shadow-xl backdrop-blur-md flex items-center gap-2.5 z-20 transform hover:-translate-y-1 transition-transform"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center text-cyan-300">
                    <Cloud className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white leading-tight">
                      Scalable
                    </div>
                    <div className="text-[10px] text-slate-300 leading-tight">
                      Infrastructure
                    </div>
                  </div>
                </div>

                {/* Floating Node 2: Security & Compliance (Top Right) */}
                <div
                  className="absolute top-2 right-0 sm:right-2 bg-[#031E4D]/90 border border-[#00B3FF]/40 rounded-xl p-2.5 sm:p-3 shadow-xl backdrop-blur-md flex items-center gap-2.5 z-20 transform hover:-translate-y-1 transition-transform"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#00B3FF]/20 border border-[#00B3FF]/50 flex items-center justify-center text-[#00B3FF]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white leading-tight">
                      Security &amp;
                    </div>
                    <div className="text-[10px] text-slate-300 leading-tight">
                      Compliance
                    </div>
                  </div>
                </div>

                {/* Floating Node 3: Cost Optimization (Middle-Right) */}
                <div
                  className="absolute bottom-14 -right-1 sm:right-0 bg-[#031E4D]/90 border border-sky-400/40 rounded-xl p-2.5 sm:p-3 shadow-xl backdrop-blur-md flex items-center gap-2.5 z-20 transform hover:-translate-y-1 transition-transform"
                >
                  <div className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-400/50 flex items-center justify-center text-sky-300">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white leading-tight">
                      Cost
                    </div>
                    <div className="text-[10px] text-slate-300 leading-tight">
                      Optimization
                    </div>
                  </div>
                </div>

                {/* Floating Node 4: Operational Excellence (Bottom-Right / Center) */}
                <div
                  className="absolute -bottom-2 right-6 sm:right-10 bg-[#031E4D]/90 border border-cyan-400/40 rounded-xl p-2.5 sm:p-3 shadow-xl backdrop-blur-md flex items-center gap-2.5 z-20 transform hover:-translate-y-1 transition-transform"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#00B3FF]/20 border border-[#00B3FF]/50 flex items-center justify-center text-cyan-300">
                    <Settings className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white leading-tight">
                      Operational
                    </div>
                    <div className="text-[10px] text-slate-300 leading-tight">
                      Excellence
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
