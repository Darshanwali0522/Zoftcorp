import React from 'react';
import { Target, Compass } from 'lucide-react';
import { Container } from '@/components/ui/container';

interface VisionMissionSectionProps {
  id?: string;
  showTagline?: boolean;
}

export function VisionMissionSection({
  id = 'vision-mission',
  showTagline = false,
}: VisionMissionSectionProps) {
  return (
    <section
      id={id}
      aria-label="Vision and Mission"
      className="relative w-full bg-slate-50/70 text-[#01153B] py-16 sm:py-20 lg:py-24 border-b border-slate-200/90 overflow-hidden"
    >
      {/* Blueprint Grid Accent */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />

      <Container size="wide" className="relative z-10">
        {/* Dual Cards: Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* VISION */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-8 sm:p-12 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-center space-y-6 group">
            <div className="w-12 h-12 rounded-xl bg-[#00B3FF]/10 text-[#00B3FF] flex items-center justify-center border border-[#00B3FF]/20 group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#01153B] font-sans tracking-tight">
              Vision
            </h2>

            <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed font-sans font-medium">
              A world where critical data never fails.
            </p>
          </div>

          {/* MISSION */}
          <div className="bg-[#01153B] text-white rounded-2xl border border-slate-700/80 p-8 sm:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-center space-y-6 group">
            <div className="w-12 h-12 rounded-xl bg-[#00B3FF]/20 text-[#00B3FF] flex items-center justify-center border border-[#00B3FF]/30 group-hover:scale-105 transition-transform">
              <Target className="w-6 h-6" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-sans tracking-tight">
              Mission
            </h2>

            <p className="text-xl sm:text-2xl text-slate-100 leading-relaxed font-sans font-medium">
              We engineer secure, resilient, always-on data platforms that keep businesses moving and innovation accelerating.
            </p>
          </div>
        </div>

        {/* Official Tagline as Centered Elegant Brand Statement */}
        {showTagline && (
          <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-200/80 text-center max-w-3xl mx-auto px-4">
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0066CC] font-sans tracking-tight">
              Data Always On. Business Always Moving.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}
