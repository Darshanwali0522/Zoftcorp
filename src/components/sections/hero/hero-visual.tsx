import React from "react";

export const HeroVisual: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="relative w-full max-w-xl mx-auto select-none pointer-events-none"
    >
      {/* Outer Precision Chassis */}
      <div className="relative rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-7 shadow-[0_20px_50px_-12px_rgba(1,21,59,0.12)] overflow-hidden ring-1 ring-[#01153B]/10">
        {/* Subtle Architectural Blueprint Watermark Grid */}
        <div className="absolute inset-0 bg-blueprint-grid opacity-50" />

        {/* Blueprint Corner Registration Marks */}
        <div className="absolute top-2.5 left-2.5 text-[9px] font-mono text-slate-400 font-bold select-none">+ 00.12</div>
        <div className="absolute top-2.5 right-2.5 text-[9px] font-mono text-slate-400 font-bold select-none">NODE_ORBIT +</div>

        {/* Inner Content Stack */}
        <div className="relative z-10 space-y-4">
          {/* Main Visual Terminal / Architecture Viewport */}
          <div className="relative w-full aspect-[4/3] rounded-xl bg-[#01153B] text-white p-5 sm:p-6 flex flex-col justify-between overflow-hidden shadow-2xl border border-[#031E4D]">
            {/* Ambient Brand Glow Gradients */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#00B3FF]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#FF6F00]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Background SVG Connectivity Vectors */}
            <svg
              className="absolute inset-0 w-full h-full opacity-35"
              viewBox="0 0 440 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="hero-infra-grid" width="22" height="22" patternUnits="userSpaceOnUse">
                  <path d="M 22 0 L 0 0 0 22" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.75" />
                </pattern>
                <linearGradient id="trace-grad-1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#00B3FF" />
                  <stop offset="100%" stopColor="#33C2FF" />
                </linearGradient>
              </defs>
              <rect width="440" height="320" fill="url(#hero-infra-grid)" />

              {/* Interconnected Multi-Region Cluster Bus */}
              <path
                d="M 70 80 L 220 80 L 220 160 L 370 160"
                stroke="url(#trace-grad-1)"
                strokeWidth="2"
                strokeDasharray="6 4"
                className="animate-flowDash"
              />
              <path
                d="M 110 240 L 270 240 L 270 95 L 360 95"
                stroke="#00B3FF"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <path
                d="M 220 160 L 220 240"
                stroke="#33C2FF"
                strokeWidth="1.5"
                strokeDasharray="2 3"
              />

              {/* Topology Nodes */}
              <circle cx="70" cy="80" r="5" fill="#00B3FF" />
              <circle cx="220" cy="80" r="4" fill="#031E4D" stroke="#00B3FF" strokeWidth="1.5" />
              <circle cx="220" cy="160" r="6" fill="#00B3FF" />
              <circle cx="370" cy="160" r="5" fill="#FF6F00" />
              <circle cx="270" cy="95" r="4" fill="#00B3FF" />
              <circle cx="110" cy="240" r="5" fill="#33C2FF" />
              <circle cx="270" cy="240" r="4" fill="#00B3FF" />
            </svg>

            {/* Header Telemetry Bar */}
            <div className="relative z-10 flex items-center justify-between pb-3 border-b border-[#031E4D]">
              <div className="flex items-center gap-2.5">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00B3FF] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00B3FF]" />
                </span>
                <span className="text-[11px] font-mono font-bold tracking-wider text-slate-200 uppercase">
                  TOPOLOGY MODEL // DISTRIBUTED ARCHITECTURE
                </span>
              </div>
              <span className="text-[10px] font-mono font-semibold text-[#00B3FF] bg-[#031E4D] border border-[#00B3FF]/40 px-2 py-0.5 rounded">
                ILLUSTRATIVE MODEL
              </span>
            </div>

            {/* Core Topology Cards Display */}
            <div className="relative z-10 my-auto py-2 grid grid-cols-12 gap-3 items-center">
              {/* Card 1: Core Transaction Engine */}
              <div className="col-span-6 p-3 rounded-lg bg-[#031E4D]/90 border border-slate-700/80 space-y-1.5 backdrop-blur-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-[#00B3FF] uppercase">
                    NODE 01 // ENGINE
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
                </div>
                <div className="text-xs font-bold text-slate-100">
                  Primary Transaction Fabric
                </div>
                <div className="space-y-1 pt-1">
                  <div className="h-1.5 rounded bg-[#00B3FF]/60 w-full" />
                  <div className="h-1.5 rounded bg-[#00B3FF]/30 w-4/5" />
                </div>
              </div>

              {/* Card 2: Vector & Analytics Index */}
              <div className="col-span-6 p-3 rounded-lg bg-[#031E4D]/90 border border-slate-700/80 space-y-1.5 backdrop-blur-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-[#FF6F00] uppercase">
                    NODE 02 // VECTOR
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6F00]" />
                </div>
                <div className="text-xs font-bold text-slate-100">
                  Embedding Index Matrix
                </div>
                <div className="space-y-1 pt-1">
                  <div className="h-1.5 rounded bg-[#FF6F00]/60 w-full" />
                  <div className="h-1.5 rounded bg-[#FF6F00]/30 w-3/4" />
                </div>
              </div>
            </div>

            {/* Architectural Profile HUD Strip (Accurate conceptual indicators without unverified performance statistics) */}
            <div className="relative z-10 pt-3 border-t border-[#031E4D] grid grid-cols-3 gap-2 text-left">
              <div>
                <span className="text-[9px] font-mono text-slate-400 uppercase block tracking-wider">
                  WORKLOAD
                </span>
                <span className="text-xs font-mono font-bold text-slate-100">
                  HIGH CONCURRENCY
                </span>
              </div>
              <div>
                <span className="text-[9px] font-mono text-slate-400 uppercase block tracking-wider">
                  MEMORY TIER
                </span>
                <span className="text-xs font-mono font-bold text-[#00B3FF]">
                  BUFFER OPTIMIZED
                </span>
              </div>
              <div>
                <span className="text-[9px] font-mono text-slate-400 uppercase block tracking-wider">
                  AVAILABILITY
                </span>
                <span className="text-xs font-mono font-bold text-[#00B3FF]">
                  SYNCHRONOUS MESH
                </span>
              </div>
            </div>
          </div>

          {/* Minimal Engineering Layer Markers */}
          <div className="pt-2 flex items-center justify-between text-[11px] font-mono font-semibold text-slate-600 tracking-wider px-1">
            <span className="text-[#01153B] font-bold">01 CLOUD</span>
            <span className="text-slate-300">•</span>
            <span className="text-[#01153B] font-bold">02 DATABASE</span>
            <span className="text-slate-300">•</span>
            <span className="text-[#01153B] font-bold">03 DATA</span>
            <span className="text-slate-300">•</span>
            <span className="text-[#01153B] font-bold">04 RELIABILITY</span>
          </div>
        </div>
      </div>
    </div>
  );
};
