import React from 'react';
import { Users } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { LEADERSHIP_TEAM } from '@/data/leadership';

interface LeadershipSectionProps {
  id?: string;
  showBackLink?: boolean;
}

export function LeadershipSection({
  id = 'leadership',
}: LeadershipSectionProps) {
  return (
    <section
      id={id}
      aria-label="Company Leadership"
      className="relative w-full bg-[#01153B] text-white py-16 sm:py-20 lg:py-24 border-b border-slate-800 overflow-hidden"
    >
      {/* Background Architectural Blueprint Pattern & Glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00B3FF08_1px,transparent_1px),linear-gradient(to_bottom,#00B3FF08_1px,transparent_1px)] bg-[size:36px_36px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#00B3FF]/10 blur-[150px] rounded-full"
        aria-hidden="true"
      />

      <Container size="wide" className="relative z-10 space-y-12 sm:space-y-14">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#00B3FF] border border-[#00B3FF]/30 shadow-2xs">
              <Users className="w-3.5 h-3.5" />
              <span>COMPANY LEADERSHIP</span>
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans leading-[1.12]">
            Leadership
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans max-w-2xl font-normal">
            Meet the leadership team guiding Zoftcorp across enterprise operations, database FinOps, commercial partnerships, and statutory compliance.
          </p>
        </div>

        {/* Leadership Team Grid: 5 Verified Profiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch">
          {LEADERSHIP_TEAM.map((leader, idx) => (
            <div
              key={leader.name}
              className="group relative flex flex-col justify-between bg-[#031E4D]/90 border border-slate-700/80 hover:border-[#00B3FF]/60 rounded-2xl p-6 sm:p-7 shadow-xl hover:shadow-2xl transition-all duration-300 ease-out hover:-translate-y-1"
            >
              {/* Top Accent Bar on Hover */}
              <span
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00B3FF] via-[#33C2FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-t-2xl"
                aria-hidden="true"
              />

              <div className="space-y-5">
                {/* Monogram Badge & Index Marker */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-700/60">
                  <div className="w-12 h-12 rounded-xl bg-[#01153B] border border-slate-700 group-hover:border-[#00B3FF]/50 flex items-center justify-center text-[#00B3FF] font-mono font-bold text-base shadow-inner transition-colors">
                    {leader.initials}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest bg-[#01153B] px-2 py-1 rounded border border-slate-800">
                    {`0${idx + 1}`}
                  </span>
                </div>

                {/* Name & Exact Role */}
                <div className="space-y-1.5">
                  <h3 className="text-xl font-bold text-white font-sans tracking-tight leading-snug group-hover:text-[#00B3FF] transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#00B3FF] font-sans leading-snug">
                    {leader.role}
                  </p>
                </div>
              </div>

              {/* Card Footer: Verified Leadership Role */}
              <div className="pt-4 mt-6 border-t border-slate-700/60 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="text-[11px] text-[#00B3FF]/80 uppercase tracking-wider font-semibold">
                  LEADERSHIP
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF] shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
