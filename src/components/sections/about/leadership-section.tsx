import React from 'react';
import Image from 'next/image';
import { Users, UserX } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { LEADERSHIP_TEAM } from '@/data/leadership';
import { DynamicLeaderProfile } from '@/lib/supabase/leadership-service';

interface LeadershipSectionProps {
  id?: string;
  showBackLink?: boolean;
  profiles?: DynamicLeaderProfile[];
}

export function LeadershipSection({
  id = 'leadership',
  profiles,
}: LeadershipSectionProps) {
  // Use dynamic profiles if passed; fallback to client frozen static data
  const teamList: DynamicLeaderProfile[] = profiles !== undefined
    ? profiles
    : LEADERSHIP_TEAM.map((leader, idx) => ({
        id: `static-${idx}`,
        name: leader.name,
        role: leader.role,
        initials: leader.initials,
        photoUrl: undefined,
        bio: 'Executive practice leader driving enterprise cloud database engineering and advisory excellence.',
        linkedinUrl: leader.linkedinUrl,
        displayOrder: idx + 1,
        status: 'published' as const,
      }));

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

        {/* Graceful Empty State */}
        {teamList.length === 0 ? (
          <div className="rounded-2xl bg-[#031E4D]/80 border border-slate-700 p-10 text-center max-w-xl mx-auto space-y-4">
            <UserX className="w-12 h-12 text-[#00B3FF] mx-auto opacity-70" />
            <h3 className="text-xl font-bold text-white font-sans">
              Leadership Profiles Updating
            </h3>
            <p className="text-sm text-slate-300 font-sans leading-relaxed">
              Company leadership profiles are currently being curated. Please check back shortly or reach out to our team directly.
            </p>
          </div>
        ) : (
          /* Leadership Team Grid: Dynamic Profiles */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch">
            {teamList.map((leader, idx) => (
              <div
                key={leader.id || leader.name}
                className="group relative flex flex-col justify-between bg-[#031E4D]/90 border border-slate-700/80 hover:border-[#00B3FF]/60 rounded-2xl p-6 sm:p-7 shadow-xl hover:shadow-2xl transition-all duration-300 ease-out hover:-translate-y-1"
              >
                {/* Top Accent Bar on Hover */}
                <span
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00B3FF] via-[#33C2FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-t-2xl"
                  aria-hidden="true"
                />

                <div className="space-y-5">
                  {/* Photograph or Monogram Badge & Index Marker */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-700/60">
                    {leader.photoUrl ? (
                      <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-slate-700 group-hover:border-[#00B3FF]/60 transition-colors shadow-inner">
                        <Image
                          src={leader.photoUrl}
                          alt={leader.name}
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-xl bg-[#01153B] border border-slate-700 group-hover:border-[#00B3FF]/50 flex items-center justify-center text-[#00B3FF] font-mono font-bold text-base shadow-inner transition-colors">
                        {leader.initials}
                      </div>
                    )}
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest bg-[#01153B] px-2 py-1 rounded border border-slate-800">
                      {`0${leader.displayOrder ?? idx + 1}`}
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
                    {leader.bio && (
                      <p className="text-xs text-slate-300 font-sans pt-2 leading-relaxed line-clamp-3">
                        {leader.bio}
                      </p>
                    )}
                  </div>
                </div>

                {/* Card Footer: Verified Leadership Role & Optional LinkedIn */}
                <div className="pt-4 mt-6 border-t border-slate-700/60 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-[11px] text-[#00B3FF]/80 uppercase tracking-wider font-semibold">
                    LEADERSHIP
                  </span>
                  {leader.linkedinUrl ? (
                    <a
                      href={leader.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${leader.name}'s LinkedIn profile (opens in new tab)`}
                      className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-[#01153B] text-slate-300 hover:text-[#00B3FF] hover:bg-[#00B3FF]/15 border border-slate-700 hover:border-[#00B3FF]/50 transition-all focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z" />
                      </svg>
                    </a>
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF] shrink-0" />
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
