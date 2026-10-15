import React from "react";

export const DatabaseVisual: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="relative w-full max-w-xl mx-auto select-none pointer-events-none"
    >
      {/* Outer Architectural Container */}
      <div className="relative rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-7 shadow-[0_16px_40px_-12px_rgba(1,21,59,0.08)] overflow-hidden ring-1 ring-[#01153B]/10">
        {/* Subtle Background Blueprint Grid */}
        <div className="absolute inset-0 bg-blueprint-grid opacity-50" />

        {/* Technical Corner Markers */}
        <div className="absolute top-2.5 left-2.5 text-[9px] font-mono text-slate-400 font-bold select-none">+ 02.DB</div>
        <div className="absolute top-2.5 right-2.5 text-[9px] font-mono text-slate-400 font-bold select-none">BUFFER_CORE +</div>

        {/* Central Abstract Database Architecture Canvas */}
        <div className="relative z-10 space-y-4">
          {/* Main Visual SVG Canvas */}
          <div className="relative w-full aspect-[4/3] rounded-xl bg-[#01153B] text-white p-5 sm:p-6 flex flex-col justify-between overflow-hidden shadow-2xl border border-[#031E4D]">
            {/* Ambient Brand Shading */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-[#00B3FF]/12 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-44 h-44 bg-[#FF6F00]/10 rounded-full blur-2xl pointer-events-none" />

            {/* Blueprint Grid & Connective Trace Lines */}
            <svg
              className="absolute inset-0 w-full h-full opacity-30"
              viewBox="0 0 440 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="db-visual-grid" width="22" height="22" patternUnits="userSpaceOnUse">
                  <path d="M 22 0 L 0 0 0 22" fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="0.75" />
                </pattern>
              </defs>
              <rect width="440" height="320" fill="url(#db-visual-grid)" />

              {/* Data Bus & Buffer Cache Traces */}
              <path
                d="M 80 80 L 220 80 L 220 240 M 140 160 L 360 160 M 220 240 L 360 240"
                stroke="#00B3FF"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                className="animate-flowDash"
              />
              <circle cx="80" cy="80" r="4" fill="#00B3FF" />
              <circle cx="220" cy="80" r="5" fill="#031E4D" stroke="#00B3FF" strokeWidth="1.5" />
              <circle cx="220" cy="160" r="6" fill="#00B3FF" />
              <circle cx="360" cy="160" r="4" fill="#33C2FF" />
              <circle cx="220" cy="240" r="5" fill="#FF6F00" />
              <circle cx="360" cy="240" r="4" fill="#00B3FF" />
            </svg>

            {/* Top Telemetry Header */}
            <div className="relative z-10 flex items-center justify-between pb-3 border-b border-[#031E4D]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00B3FF]" />
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-200">
                  DATABASE ENGINE KERNEL
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#00B3FF] bg-[#031E4D] border border-[#00B3FF]/40 px-2 py-0.5 rounded">
                STORAGE &amp; COMPUTE
              </span>
            </div>

            {/* Central Layered Architecture Tiers */}
            <div className="relative z-10 my-auto py-2 space-y-3">
              {/* Tier 1: Query Optimizer & Execution Plan */}
              <div className="p-3 rounded-lg bg-[#031E4D]/90 border border-slate-750/90 space-y-1.5 backdrop-blur-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-[#00B3FF] uppercase">
                    TIER 01 // QUERY OPTIMIZER
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">COST-BASED PLAN</span>
                </div>
                <div className="flex items-center justify-between text-xs font-semibold text-slate-200">
                  <span>Index Seek &amp; Hash Join Parallelism</span>
                  <span className="text-[#00B3FF] font-mono text-[11px]">OPTIMIZED</span>
                </div>
                <div className="grid grid-cols-4 gap-1.5 pt-1">
                  <div className="h-1 rounded bg-[#00B3FF]/70" />
                  <div className="h-1 rounded bg-[#00B3FF]/50" />
                  <div className="h-1 rounded bg-[#00B3FF]/30" />
                  <div className="h-1 rounded bg-[#00B3FF]/20" />
                </div>
              </div>

              {/* Tier 2: Memory Buffer Pool & Storage Engine */}
              <div className="p-3 rounded-lg bg-[#031E4D]/90 border border-slate-750/90 space-y-1.5 backdrop-blur-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-[#FF6F00] uppercase">
                    TIER 02 // BUFFER POOL &amp; WAL
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">MEMORY KERNEL</span>
                </div>
                <div className="flex items-center justify-between text-xs font-semibold text-slate-200">
                  <span>ACID Transaction Log &amp; Data Pages</span>
                  <span className="text-[#FF6F00] font-mono text-[11px]">ALLOCATED</span>
                </div>
                <div className="grid grid-cols-5 gap-1.5 pt-1">
                  <div className="h-1 rounded bg-[#FF6F00]/70" />
                  <div className="h-1 rounded bg-[#FF6F00]/50" />
                  <div className="h-1 rounded bg-[#FF6F00]/40" />
                  <div className="h-1 rounded bg-[#FF6F00]/30" />
                  <div className="h-1 rounded bg-[#FF6F00]/20" />
                </div>
              </div>
            </div>

            {/* Bottom Engine Annotation */}
            <div className="relative z-10 pt-3 border-t border-[#031E4D] flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span className="text-slate-300 font-semibold">SQL SERVER • POSTGRESQL • MYSQL</span>
              <span className="text-[#00B3FF] font-bold">ENGINE ARCHITECTURE</span>
            </div>
          </div>

          {/* Minimal Engine Capability Descriptors */}
          <div className="pt-2 flex items-center justify-between text-[11px] font-mono font-semibold text-slate-600 tracking-wider px-1">
            <span className="text-[#01153B] font-bold">CORE ENGINES</span>
            <span className="text-slate-300">•</span>
            <span className="text-[#01153B] font-bold">INDEX ARCHITECTURE</span>
            <span className="text-slate-300">•</span>
            <span className="text-[#01153B] font-bold">DATA INTEGRITY</span>
          </div>
        </div>
      </div>
    </div>
  );
};
