import React from "react";
import { Layers, CheckCircle2, TrendingUp, Cpu } from "lucide-react";

export const StandardDiagram: React.FC = () => {
  return (
    <div
      role="img"
      aria-label="The Zoftcorp Standard Four-Part Engineering Principles Diagram"
      className="relative w-full rounded-3xl bg-gradient-to-br from-slate-950 via-[#01153B] to-slate-900 p-6 sm:p-8 lg:p-10 border border-slate-800 shadow-2xl overflow-hidden"
    >
      {/* Background Architectural Grid Accent */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />

      {/* Atmospheric Ambient Glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#0066CC]/15 rounded-full blur-3xl"
        aria-hidden="true"
      />

      {/* Central SVG Connecting Flow Conduit with Arrows */}
      <div className="hidden sm:block absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg className="w-full h-full" viewBox="0 0 540 360" fill="none">
          <defs>
            <marker
              id="conduit-arrow"
              viewBox="0 0 10 10"
              refX="6"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#00B3FF" />
            </marker>
          </defs>

          {/* Clockwise Connecting Conduit Lines with Directional Arrows */}
          {/* Top: 1 -> 2 */}
          <path
            d="M 230 78 L 305 78"
            stroke="#00B3FF"
            strokeWidth="2"
            strokeDasharray="4 4"
            markerEnd="url(#conduit-arrow)"
          />
          {/* Right: 2 -> 3 */}
          <path
            d="M 415 130 L 415 225"
            stroke="#00B3FF"
            strokeWidth="2"
            strokeDasharray="4 4"
            markerEnd="url(#conduit-arrow)"
          />
          {/* Bottom: 3 -> 4 */}
          <path
            d="M 310 282 L 235 282"
            stroke="#00B3FF"
            strokeWidth="2"
            strokeDasharray="4 4"
            markerEnd="url(#conduit-arrow)"
          />
          {/* Left: 4 -> 1 */}
          <path
            d="M 125 230 L 125 135"
            stroke="#00B3FF"
            strokeWidth="2"
            strokeDasharray="4 4"
            markerEnd="url(#conduit-arrow)"
          />

          {/* Central Telemetry Core Node */}
          <circle cx="270" cy="180" r="36" stroke="#00B3FF" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
          <circle cx="270" cy="180" r="50" stroke="#0066CC" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.3" fill="none" />
          <circle cx="270" cy="180" r="4" fill="#00B3FF" />

          {/* Subtle Diagonal Central Spokes */}
          <line x1="235" y1="145" x2="195" y2="110" stroke="#0066CC" strokeWidth="1.2" strokeOpacity="0.3" />
          <line x1="305" y1="145" x2="345" y2="110" stroke="#0066CC" strokeWidth="1.2" strokeOpacity="0.3" />
          <line x1="305" y1="215" x2="345" y2="250" stroke="#0066CC" strokeWidth="1.2" strokeOpacity="0.3" />
          <line x1="235" y1="215" x2="195" y2="250" stroke="#0066CC" strokeWidth="1.2" strokeOpacity="0.3" />
        </svg>
      </div>

      {/* 4 Connected Nodes Layout — ONLY the 4 Principle Labels */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-x-12 sm:gap-y-16">
        {/* Node 1: Engineering Frame */}
        <div className="order-1 sm:order-1 relative group p-4 sm:p-5 rounded-2xl bg-[#021B4D]/90 backdrop-blur-md border border-[#0066CC]/40 hover:border-[#00B3FF] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-[#0066CC]/20 text-[#00B3FF] flex items-center justify-center shrink-0 border border-[#00B3FF]/30 group-hover:scale-105 transition-transform">
            <Layers className="w-5 h-5" />
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white tracking-tight font-sans leading-snug">
            Engineering Frame
          </h4>
        </div>

        {/* Node 2: Evidence Before Intervention */}
        <div className="order-2 sm:order-2 relative group p-4 sm:p-5 rounded-2xl bg-[#021B4D]/90 backdrop-blur-md border border-[#0066CC]/40 hover:border-[#00B3FF] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-[#0066CC]/20 text-[#00B3FF] flex items-center justify-center shrink-0 border border-[#00B3FF]/30 group-hover:scale-105 transition-transform">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white tracking-tight font-sans leading-snug">
            Evidence Before Intervention
          </h4>
        </div>

        {/* Node 4: Engineering Over Hype (Placed on left in 2-column layout to complete clockwise cycle) */}
        <div className="order-4 sm:order-3 relative group p-4 sm:p-5 rounded-2xl bg-[#021B4D]/90 backdrop-blur-md border border-[#0066CC]/40 hover:border-[#00B3FF] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-[#0066CC]/20 text-[#00B3FF] flex items-center justify-center shrink-0 border border-[#00B3FF]/30 group-hover:scale-105 transition-transform">
            <Cpu className="w-5 h-5" />
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white tracking-tight font-sans leading-snug">
            Engineering Over Hype
          </h4>
        </div>

        {/* Node 3: Outcome (Placed on right in 2-column layout) */}
        <div className="order-3 sm:order-4 relative group p-4 sm:p-5 rounded-2xl bg-[#021B4D]/90 backdrop-blur-md border border-[#0066CC]/40 hover:border-[#00B3FF] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-[#0066CC]/20 text-[#00B3FF] flex items-center justify-center shrink-0 border border-[#00B3FF]/30 group-hover:scale-105 transition-transform">
            <TrendingUp className="w-5 h-5" />
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white tracking-tight font-sans leading-snug">
            Outcome
          </h4>
        </div>
      </div>
    </div>
  );
};
