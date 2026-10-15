import React from "react";

export const PlatformsVisual: React.FC = () => {
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
        <div className="absolute top-2.5 left-2.5 text-[9px] font-mono text-slate-400 font-bold select-none">+ 03.PLATFORMS</div>
        <div className="absolute top-2.5 right-2.5 text-[9px] font-mono text-slate-400 font-bold select-none">FEDERATED_MESH +</div>

        {/* Central Content */}
        <div className="relative z-10 space-y-4">
          {/* Main Visual SVG Canvas */}
          <div className="relative w-full aspect-[4/3] rounded-xl bg-[#01153B] text-white p-5 sm:p-6 flex flex-col justify-between overflow-hidden shadow-2xl border border-[#031E4D]">
            {/* Ambient Technical Radial Shading */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#00B3FF]/12 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#031E4D]/80 rounded-full blur-2xl pointer-events-none" />

            {/* SVG Multi-Cloud Mesh Pathways */}
            <svg
              className="absolute inset-0 w-full h-full opacity-35"
              viewBox="0 0 440 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="cloud-mesh-grid" width="22" height="22" patternUnits="userSpaceOnUse">
                  <path d="M 22 0 L 0 0 0 22" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.75" />
                </pattern>
              </defs>
              <rect width="440" height="320" fill="url(#cloud-mesh-grid)" />

              {/* Central Multi-Cloud Core */}
              <circle cx="220" cy="160" r="38" fill="none" stroke="#00B3FF" strokeWidth="1.5" strokeDasharray="4 4" className="animate-flowDash" />
              <circle cx="220" cy="160" r="10" fill="#00B3FF" />

              {/* Connected Spokes to 4 Cloud Nodes */}
              <path d="M 220 122 L 220 60 L 100 60" stroke="#00B3FF" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M 220 122 L 220 60 L 340 60" stroke="#00B3FF" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M 220 198 L 220 260 L 100 260" stroke="#00B3FF" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M 220 198 L 220 260 L 340 260" stroke="#00B3FF" strokeWidth="1.5" strokeDasharray="4 4" />

              {/* Platform Terminal Node Circles */}
              <circle cx="100" cy="60" r="6" fill="#00B3FF" />
              <circle cx="340" cy="60" r="6" fill="#00B3FF" />
              <circle cx="100" cy="260" r="6" fill="#00B3FF" />
              <circle cx="340" cy="260" r="6" fill="#00B3FF" />
            </svg>

            {/* Top Telemetry Header */}
            <div className="relative z-10 flex items-center justify-between pb-3 border-b border-[#031E4D]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00B3FF]" />
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-200">
                  MULTI-CLOUD TOPOLOGY
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#00B3FF] bg-[#031E4D] border border-[#00B3FF]/40 px-2 py-0.5 rounded">
                ENTERPRISE MESH
              </span>
            </div>

            {/* Central Cloud Node Architecture Grid */}
            <div className="relative z-10 my-auto py-2 grid grid-cols-2 gap-3">
              {/* Node 1: AWS */}
              <div className="p-3 rounded-lg bg-[#031E4D]/90 border border-slate-700/80 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-[#00B3FF] uppercase">NODE 01 // AWS</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
                </div>
                <div className="text-xs font-bold text-slate-100">Amazon Web Services</div>
                <span className="text-[10px] font-mono text-slate-400 block">Aurora • RDS • EKS</span>
              </div>

              {/* Node 2: Azure */}
              <div className="p-3 rounded-lg bg-[#031E4D]/90 border border-slate-700/80 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-[#00B3FF] uppercase">NODE 02 // AZURE</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
                </div>
                <div className="text-xs font-bold text-slate-100">Microsoft Azure</div>
                <span className="text-[10px] font-mono text-slate-400 block">SQL MI • Synapse • AKS</span>
              </div>

              {/* Node 3: GCP */}
              <div className="p-3 rounded-lg bg-[#031E4D]/90 border border-slate-700/80 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-[#00B3FF] uppercase">NODE 03 // GOOGLE CLOUD</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
                </div>
                <div className="text-xs font-bold text-slate-100">Google Cloud</div>
                <span className="text-[10px] font-mono text-slate-400 block">Spanner • BigQuery • GKE</span>
              </div>

              {/* Node 4: Oracle */}
              <div className="p-3 rounded-lg bg-[#031E4D]/90 border border-slate-700/80 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-[#00B3FF] uppercase">NODE 04 // ORACLE</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
                </div>
                <div className="text-xs font-bold text-slate-100">Oracle Cloud (OCI)</div>
                <span className="text-[10px] font-mono text-slate-400 block">Exadata • RAC • DB</span>
              </div>
            </div>

            {/* Bottom Footer Annotation */}
            <div className="relative z-10 pt-3 border-t border-[#031E4D] flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span className="text-slate-300 font-semibold">UNIFIED CLUSTER LANDING ZONES</span>
              <span className="text-[#00B3FF] font-bold">CROSS-PLATFORM</span>
            </div>
          </div>

          {/* Minimal Platform Descriptors */}
          <div className="pt-2 flex items-center justify-between text-[11px] font-mono font-semibold text-slate-600 tracking-wider px-1">
            <span className="text-[#01153B] font-bold">AWS</span>
            <span className="text-slate-300">•</span>
            <span className="text-[#01153B] font-bold">AZURE</span>
            <span className="text-slate-300">•</span>
            <span className="text-[#01153B] font-bold">GOOGLE CLOUD</span>
            <span className="text-slate-300">•</span>
            <span className="text-[#01153B] font-bold">ORACLE</span>
          </div>
        </div>
      </div>
    </div>
  );
};
