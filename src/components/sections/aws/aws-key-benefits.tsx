import React from 'react';
import { AWS_KEY_BENEFITS } from '@/data/partnerships/aws';

export const AwsKeyBenefits: React.FC = () => {
  return (
    <section className="relative w-full bg-[#01153B] text-white py-20 md:py-28 overflow-hidden border-b border-slate-800">
      {/* Background Ambience */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00b3ff08_1px,transparent_1px),linear-gradient(to_bottom,#00b3ff08_1px,transparent_1px)] bg-[size:4rem_4rem]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 left-0 w-[450px] h-[450px] bg-[#00B3FF]/10 blur-[170px] rounded-full"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-10 w-[420px] h-[420px] bg-[#FF6F00]/10 blur-[160px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="mb-14">
          <div className="w-12 h-1 bg-[#00B3FF] rounded-full mb-3" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
            Key Benefits of Our{' '}
            <span className="text-[#00B3FF]">AWS Consulting Services</span>
          </h2>
        </div>

        {/* 3-Column x 2-Row Rectangular Feature Panels Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* 01: Cloud Strategy & Roadmap */}
          <div className="relative rounded-2xl bg-[#031E4D]/85 border border-slate-800 hover:border-[#00B3FF]/50 p-6 sm:p-7 flex flex-col justify-between overflow-hidden group transition-all duration-300 shadow-xl hover:shadow-[0_10px_30px_rgba(0,179,255,0.15)] min-h-[380px]">
            {/* Visual Graphic: Winding Mountain Road towards Sunset Beacon */}
            <div className="relative w-full h-36 rounded-xl overflow-hidden mb-5 bg-gradient-to-b from-[#01153B] to-[#0A265E] border border-slate-800/80 flex items-center justify-center">
              <svg viewBox="0 0 280 140" className="w-full h-full" fill="none">
                {/* Mountain Silhouettes */}
                <path d="M0 140L60 65L120 140Z" fill="#021A42" opacity="0.6" />
                <path d="M90 140L160 40L230 140Z" fill="#01153B" opacity="0.8" />
                <path d="M180 140L240 75L280 140Z" fill="#032152" opacity="0.5" />
                {/* Glowing Sun / Summit Horizon */}
                <circle cx="160" cy="40" r="16" fill="#FF6F00" opacity="0.4" filter="blur(8px)" />
                <circle cx="160" cy="40" r="4" fill="#FFB74D" />
                {/* Illuminated Roadmap */}
                <path
                  d="M40 140C70 120 90 115 110 95C130 75 145 60 160 40"
                  stroke="url(#roadGradient)"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <path
                  d="M40 140C70 120 90 115 110 95C130 75 145 60 160 40"
                  stroke="#FFD54F"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  strokeLinecap="round"
                />
                {/* Flag Beacon */}
                <path d="M160 40V24M160 24L172 29L160 34" stroke="#FF6F00" strokeWidth="2" strokeLinecap="round" />
                <defs>
                  <linearGradient id="roadGradient" x1="40" y1="140" x2="160" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00B3FF" />
                    <stop offset="0.6" stopColor="#FF9100" />
                    <stop offset="1" stopColor="#FFD54F" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute top-2.5 right-3 text-[10px] font-mono text-cyan-300/80 uppercase tracking-widest bg-[#01153B]/70 px-2 py-0.5 rounded border border-slate-800">
                ROADMAP
              </div>
            </div>

            {/* Content & Outlined Number */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-3xl sm:text-4xl font-mono font-extrabold text-transparent [-webkit-text-stroke:1.5px_#00B3FF] tracking-wider">
                  {AWS_KEY_BENEFITS[0].number}
                </span>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  STRATEGY
                </span>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight font-sans">
                {AWS_KEY_BENEFITS[0].title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                {AWS_KEY_BENEFITS[0].description}
              </p>
            </div>
          </div>

          {/* 02: Seamless Migration */}
          <div className="relative rounded-2xl bg-[#031E4D]/85 border border-slate-800 hover:border-[#00B3FF]/50 p-6 sm:p-7 flex flex-col justify-between overflow-hidden group transition-all duration-300 shadow-xl hover:shadow-[0_10px_30px_rgba(0,179,255,0.15)] min-h-[380px]">
            {/* Visual Graphic: Glowing Cloud Migration Upload Stream over Server Racks */}
            <div className="relative w-full h-36 rounded-xl overflow-hidden mb-5 bg-gradient-to-b from-[#01153B] to-[#0A265E] border border-slate-800/80 flex items-center justify-center">
              <svg viewBox="0 0 280 140" className="w-full h-full" fill="none">
                {/* Server Racks at bottom */}
                <rect x="50" y="100" width="50" height="35" rx="3" fill="#01153B" stroke="#00B3FF" strokeWidth="1" opacity="0.7" />
                <line x1="56" y1="108" x2="94" y2="108" stroke="#00B3FF" strokeWidth="1" opacity="0.5" />
                <line x1="56" y1="116" x2="94" y2="116" stroke="#00B3FF" strokeWidth="1" opacity="0.5" />
                <line x1="56" y1="124" x2="94" y2="124" stroke="#00B3FF" strokeWidth="1" opacity="0.5" />
                <circle cx="88" cy="108" r="1.5" fill="#00E5FF" />
                <circle cx="88" cy="116" r="1.5" fill="#FF9100" />
                <circle cx="88" cy="124" r="1.5" fill="#00E5FF" />

                <rect x="180" y="100" width="50" height="35" rx="3" fill="#01153B" stroke="#00B3FF" strokeWidth="1" opacity="0.7" />
                <line x1="186" y1="108" x2="224" y2="108" stroke="#00B3FF" strokeWidth="1" opacity="0.5" />
                <line x1="186" y1="116" x2="224" y2="116" stroke="#00B3FF" strokeWidth="1" opacity="0.5" />
                <line x1="186" y1="124" x2="224" y2="124" stroke="#00B3FF" strokeWidth="1" opacity="0.5" />
                <circle cx="218" cy="108" r="1.5" fill="#00E5FF" />
                <circle cx="218" cy="116" r="1.5" fill="#00E5FF" />
                <circle cx="218" cy="124" r="1.5" fill="#FF9100" />

                {/* Cloud Silhouette */}
                <path
                  d="M110 55C110 44 118 36 128 36C131 36 134 37 137 39C140 32 147 28 155 28C165 28 174 36 174 46C179 47 182 51 182 56C182 62 177 67 171 67H117C113 67 110 62 110 55Z"
                  fill="#00B3FF"
                  opacity="0.15"
                />
                <path
                  d="M110 55C110 44 118 36 128 36C131 36 134 37 137 39C140 32 147 28 155 28C165 28 174 36 174 46C179 47 182 51 182 56C182 62 177 67 171 67H117C113 67 110 62 110 55Z"
                  stroke="#00E5FF"
                  strokeWidth="1.5"
                />
                {/* Glowing Migration Upload Arrow */}
                <path d="M145 92V52M145 52L135 62M145 52L155 62" stroke="#00E5FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M145 100V94" stroke="#FF6F00" strokeWidth="2" strokeDasharray="2 2" />
              </svg>
              <div className="absolute top-2.5 right-3 text-[10px] font-mono text-cyan-300/80 uppercase tracking-widest bg-[#01153B]/70 px-2 py-0.5 rounded border border-slate-800">
                MIGRATION
              </div>
            </div>

            {/* Content & Outlined Number */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-3xl sm:text-4xl font-mono font-extrabold text-transparent [-webkit-text-stroke:1.5px_#00B3FF] tracking-wider">
                  {AWS_KEY_BENEFITS[1].number}
                </span>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  EXECUTION
                </span>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight font-sans">
                {AWS_KEY_BENEFITS[1].title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                {AWS_KEY_BENEFITS[1].description}
              </p>
            </div>
          </div>

          {/* 03: Performance Optimization */}
          <div className="relative rounded-2xl bg-[#031E4D]/85 border border-slate-800 hover:border-[#00B3FF]/50 p-6 sm:p-7 flex flex-col justify-between overflow-hidden group transition-all duration-300 shadow-xl hover:shadow-[0_10px_30px_rgba(0,179,255,0.15)] min-h-[380px]">
            {/* Visual Graphic: Speedometer / High-Throughput Gauge */}
            <div className="relative w-full h-36 rounded-xl overflow-hidden mb-5 bg-gradient-to-b from-[#01153B] to-[#0A265E] border border-slate-800/80 flex items-center justify-center">
              <svg viewBox="0 0 280 140" className="w-full h-full" fill="none">
                {/* Speedometer Gauge Arcs */}
                <path
                  d="M70 110 A 70 70 0 1 1 210 110"
                  stroke="#01153B"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
                <path
                  d="M70 110 A 70 70 0 1 1 210 110"
                  stroke="url(#speedoGradient)"
                  strokeWidth="5"
                  strokeDasharray="2 6"
                  strokeLinecap="round"
                />
                {/* Inner Gauge Active Arc */}
                <path
                  d="M78 106 A 62 62 0 0 1 190 70"
                  stroke="#00E5FF"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  filter="drop-shadow(0 0 6px #00B3FF)"
                />
                {/* Needle Pointing to High Performance */}
                <line x1="140" y1="110" x2="182" y2="76" stroke="#FF6F00" strokeWidth="3" strokeLinecap="round" />
                <circle cx="140" cy="110" r="7" fill="#031E4D" stroke="#00E5FF" strokeWidth="2" />
                <circle cx="140" cy="110" r="3" fill="#FF6F00" />
                {/* Acceleration Boost Chevrons */}
                <path d="M216 70L224 64L216 58" stroke="#FF9100" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M226 70L234 64L226 58" stroke="#FF6F00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                  <linearGradient id="speedoGradient" x1="70" y1="110" x2="210" y2="110" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00B3FF" />
                    <stop offset="0.7" stopColor="#00E5FF" />
                    <stop offset="1" stopColor="#FF6F00" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute top-2.5 right-3 text-[10px] font-mono text-cyan-300/80 uppercase tracking-widest bg-[#01153B]/70 px-2 py-0.5 rounded border border-slate-800">
                THROUGHPUT
              </div>
            </div>

            {/* Content & Outlined Number */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-3xl sm:text-4xl font-mono font-extrabold text-transparent [-webkit-text-stroke:1.5px_#00B3FF] tracking-wider">
                  {AWS_KEY_BENEFITS[2].number}
                </span>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  EFFICIENCY
                </span>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight font-sans">
                {AWS_KEY_BENEFITS[2].title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                {AWS_KEY_BENEFITS[2].description}
              </p>
            </div>
          </div>

          {/* 04: Cost Management (FinOps) */}
          <div className="relative rounded-2xl bg-[#031E4D]/85 border border-slate-800 hover:border-[#00B3FF]/50 p-6 sm:p-7 flex flex-col justify-between overflow-hidden group transition-all duration-300 shadow-xl hover:shadow-[0_10px_30px_rgba(0,179,255,0.15)] min-h-[380px]">
            {/* Visual Graphic: Stacks of Gold/Bronze Coins with Ascending Financial Graph */}
            <div className="relative w-full h-36 rounded-xl overflow-hidden mb-5 bg-gradient-to-b from-[#01153B] to-[#0A265E] border border-slate-800/80 flex items-center justify-center">
              <svg viewBox="0 0 280 140" className="w-full h-full" fill="none">
                {/* Coin Stack 1 */}
                <ellipse cx="75" cy="115" rx="18" ry="6" fill="#FF8F00" opacity="0.8" />
                <ellipse cx="75" cy="107" rx="18" ry="6" fill="#FFA000" />
                <ellipse cx="75" cy="99" rx="18" ry="6" fill="#FFB300" stroke="#FFE082" strokeWidth="0.8" />

                {/* Coin Stack 2 */}
                <ellipse cx="115" cy="118" rx="18" ry="6" fill="#FF8F00" opacity="0.8" />
                <ellipse cx="115" cy="110" rx="18" ry="6" fill="#FFA000" />
                <ellipse cx="115" cy="102" rx="18" ry="6" fill="#FFA000" />
                <ellipse cx="115" cy="94" rx="18" ry="6" fill="#FFB300" />
                <ellipse cx="115" cy="86" rx="18" ry="6" fill="#FFC107" stroke="#FFE082" strokeWidth="0.8" />

                {/* Coin Stack 3 */}
                <ellipse cx="155" cy="120" rx="18" ry="6" fill="#FF8F00" opacity="0.8" />
                <ellipse cx="155" cy="112" rx="18" ry="6" fill="#FFA000" />
                <ellipse cx="155" cy="104" rx="18" ry="6" fill="#FFA000" />
                <ellipse cx="155" cy="96" rx="18" ry="6" fill="#FFB300" />
                <ellipse cx="155" cy="88" rx="18" ry="6" fill="#FFB300" />
                <ellipse cx="155" cy="80" rx="18" ry="6" fill="#FFC107" />
                <ellipse cx="155" cy="72" rx="18" ry="6" fill="#FFD54F" stroke="#FFF9C4" strokeWidth="0.8" />

                {/* Upward Growth Arrow Curve */}
                <path
                  d="M50 110C95 105 130 90 215 35"
                  stroke="#00E5FF"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  filter="drop-shadow(0 0 6px #00B3FF)"
                />
                <path d="M205 32L217 34L215 46" stroke="#00E5FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="215" cy="35" r="4" fill="#00E5FF" />
              </svg>
              <div className="absolute top-2.5 right-3 text-[10px] font-mono text-cyan-300/80 uppercase tracking-widest bg-[#01153B]/70 px-2 py-0.5 rounded border border-slate-800">
                FINOPS
              </div>
            </div>

            {/* Content & Outlined Number */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-3xl sm:text-4xl font-mono font-extrabold text-transparent [-webkit-text-stroke:1.5px_#00B3FF] tracking-wider">
                  {AWS_KEY_BENEFITS[3].number}
                </span>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  GOVERNANCE
                </span>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight font-sans">
                {AWS_KEY_BENEFITS[3].title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                {AWS_KEY_BENEFITS[3].description}
              </p>
            </div>
          </div>

          {/* 05: Security & Compliance */}
          <div className="relative rounded-2xl bg-[#031E4D]/85 border border-slate-800 hover:border-[#00B3FF]/50 p-6 sm:p-7 flex flex-col justify-between overflow-hidden group transition-all duration-300 shadow-xl hover:shadow-[0_10px_30px_rgba(0,179,255,0.15)] min-h-[380px]">
            {/* Visual Graphic: Glowing Cyber Shield with Padlock and Circuits */}
            <div className="relative w-full h-36 rounded-xl overflow-hidden mb-5 bg-gradient-to-b from-[#01153B] to-[#0A265E] border border-slate-800/80 flex items-center justify-center">
              <svg viewBox="0 0 280 140" className="w-full h-full" fill="none">
                {/* Circuit Traces */}
                <path d="M50 40H80L95 55H110" stroke="#00B3FF" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                <circle cx="50" cy="40" r="2.5" fill="#00E5FF" />
                <path d="M50 100H85L100 85H110" stroke="#00B3FF" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                <circle cx="50" cy="100" r="2.5" fill="#00E5FF" />
                <path d="M230 40H200L185 55H170" stroke="#00B3FF" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                <circle cx="230" cy="40" r="2.5" fill="#00E5FF" />
                <path d="M230 100H195L180 85H170" stroke="#00B3FF" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                <circle cx="230" cy="100" r="2.5" fill="#00E5FF" />

                {/* Cyber Shield Outer Glow */}
                <path
                  d="M140 24L172 36V66C172 90 140 110 140 110C140 110 108 90 108 66V36L140 24Z"
                  fill="#00B3FF"
                  opacity="0.12"
                />
                <path
                  d="M140 24L172 36V66C172 90 140 110 140 110C140 110 108 90 108 66V36L140 24Z"
                  stroke="#00E5FF"
                  strokeWidth="2"
                  filter="drop-shadow(0 0 8px #00B3FF)"
                />
                {/* Inner Lock */}
                <rect x="130" y="60" width="20" height="18" rx="3" fill="#01153B" stroke="#00E5FF" strokeWidth="1.5" />
                <path d="M134 60V54C134 50.7 136.7 48 140 48C143.3 48 146 50.7 146 54V60" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="140" cy="68" r="2" fill="#FF6F00" />
              </svg>
              <div className="absolute top-2.5 right-3 text-[10px] font-mono text-cyan-300/80 uppercase tracking-widest bg-[#01153B]/70 px-2 py-0.5 rounded border border-slate-800">
                SECURITY
              </div>
            </div>

            {/* Content & Outlined Number */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-3xl sm:text-4xl font-mono font-extrabold text-transparent [-webkit-text-stroke:1.5px_#00B3FF] tracking-wider">
                  {AWS_KEY_BENEFITS[4].number}
                </span>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  COMPLIANCE
                </span>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight font-sans">
                {AWS_KEY_BENEFITS[4].title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                {AWS_KEY_BENEFITS[4].description}
              </p>
            </div>
          </div>

          {/* 06: Innovation Enablement */}
          <div className="relative rounded-2xl bg-[#031E4D]/85 border border-slate-800 hover:border-[#00B3FF]/50 p-6 sm:p-7 flex flex-col justify-between overflow-hidden group transition-all duration-300 shadow-xl hover:shadow-[0_10px_30px_rgba(0,179,255,0.15)] min-h-[380px]">
            {/* Visual Graphic: Futuristic Glowing Lightbulb on Microchip Platform */}
            <div className="relative w-full h-36 rounded-xl overflow-hidden mb-5 bg-gradient-to-b from-[#01153B] to-[#0A265E] border border-slate-800/80 flex items-center justify-center">
              <svg viewBox="0 0 280 140" className="w-full h-full" fill="none">
                {/* Microchip Platform Pedestal */}
                <rect x="90" y="105" width="100" height="18" rx="3" fill="#01153B" stroke="#00B3FF" strokeWidth="1.5" />
                <line x1="100" y1="123" x2="100" y2="132" stroke="#00B3FF" strokeWidth="1.5" />
                <line x1="115" y1="123" x2="115" y2="132" stroke="#00B3FF" strokeWidth="1.5" />
                <line x1="130" y1="123" x2="130" y2="132" stroke="#00B3FF" strokeWidth="1.5" />
                <line x1="150" y1="123" x2="150" y2="132" stroke="#00B3FF" strokeWidth="1.5" />
                <line x1="165" y1="123" x2="165" y2="132" stroke="#00B3FF" strokeWidth="1.5" />
                <line x1="180" y1="123" x2="180" y2="132" stroke="#00B3FF" strokeWidth="1.5" />

                {/* Glowing Lightbulb Bulb Outline */}
                <path
                  d="M125 76C117 70 114 62 114 53C114 38 126 26 140 26C154 26 166 38 166 53C166 62 163 70 155 76L151 90H129L125 76Z"
                  fill="#FF9100"
                  opacity="0.18"
                />
                <path
                  d="M125 76C117 70 114 62 114 53C114 38 126 26 140 26C154 26 166 38 166 53C166 62 163 70 155 76L151 90H129L125 76Z"
                  stroke="#FFB300"
                  strokeWidth="2"
                  filter="drop-shadow(0 0 8px #FF6F00)"
                />
                {/* Glowing Filament */}
                <path d="M135 70L135 52C135 47 145 47 145 52L145 70" stroke="#FFE082" strokeWidth="2" strokeLinecap="round" />
                <circle cx="140" cy="46" r="3" fill="#FFF" />
                {/* Screw Base */}
                <rect x="131" y="90" width="18" height="4" rx="1" fill="#00E5FF" />
                <rect x="133" y="96" width="14" height="4" rx="1" fill="#00E5FF" />
                {/* Radial Glow Rays */}
                <line x1="140" y1="16" x2="140" y2="10" stroke="#FF6F00" strokeWidth="2" strokeLinecap="round" />
                <line x1="166" y1="24" x2="172" y2="18" stroke="#FF6F00" strokeWidth="2" strokeLinecap="round" />
                <line x1="114" y1="24" x2="108" y2="18" stroke="#FF6F00" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <div className="absolute top-2.5 right-3 text-[10px] font-mono text-cyan-300/80 uppercase tracking-widest bg-[#01153B]/70 px-2 py-0.5 rounded border border-slate-800">
                INNOVATION
              </div>
            </div>

            {/* Content & Outlined Number */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-3xl sm:text-4xl font-mono font-extrabold text-transparent [-webkit-text-stroke:1.5px_#00B3FF] tracking-wider">
                  {AWS_KEY_BENEFITS[5].number}
                </span>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  SERVERLESS & AI
                </span>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight font-sans">
                {AWS_KEY_BENEFITS[5].title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                {AWS_KEY_BENEFITS[5].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
