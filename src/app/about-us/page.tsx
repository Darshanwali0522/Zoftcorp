import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Shield,
  Compass,
  Database,
  Layers,
  MessageSquare,
} from 'lucide-react';
import {
  ABOUT_PRINCIPLES,
  TECHNOLOGY_DEPTH_AREAS,
  ECOSYSTEM_TECHNOLOGIES,
  ABOUT_DESTINATIONS,
} from '@/data/about';

export const metadata: Metadata = {
  title: 'About Us | ZOFT Corp',
  description:
    "Learn about ZOFT's technology perspective, engineering approach, capabilities, and technology ecosystem.",
  alternates: {
    canonical: 'https://zoftcorp.com/about-us',
  },
  openGraph: {
    title: 'About Us | ZOFT Corp',
    description:
      "Learn about ZOFT's technology perspective, engineering approach, capabilities, and technology ecosystem.",
    url: 'https://zoftcorp.com/about-us',
    siteName: 'ZOFT Corp',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | ZOFT Corp',
    description:
      "Learn about ZOFT's technology perspective, engineering approach, capabilities, and technology ecosystem.",
  },
};

export default function AboutUsPage() {
  return (
    <div className="w-full bg-white text-[#01153B] selection:bg-[#00B3FF]/20 selection:text-[#01153B]">
      {/* 1. HERO */}
      <section className="relative w-full bg-[#01153B] text-white py-16 md:py-28 overflow-hidden border-b border-slate-800">
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-0 right-1/4 w-[480px] h-[480px] bg-[#00B3FF]/10 blur-[150px] rounded-full"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#00B3FF] bg-[#00B3FF]/10 border border-[#00B3FF]/20">
                <Shield className="w-3.5 h-3.5" />
                <span>ABOUT ZOFTCORP</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] font-sans">
                Technology Expertise With a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B3FF] via-sky-200 to-[#FF6F00]">
                  Practical Perspective.
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-sans font-normal">
                ZOFT helps organizations make better technology decisions and build reliable
                technology environments across cloud, databases, data, performance, and modern
                architectures.
              </p>
            </div>

            {/* Right Side Layered Architectural Composition */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-[#031E4D]/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-5 shadow-2xl backdrop-blur-sm">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#00B3FF]">
                    <Layers className="w-4 h-4" />
                    <span>ARCHITECTURAL BREADTH</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest bg-[#01153B] px-2 py-0.5 rounded border border-slate-750">
                    ZOFT FRAMEWORK
                  </span>
                </div>

                {/* Layered Stack */}
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-[#01153B] border border-slate-800 flex items-center justify-between">
                    <span className="text-[#00B3FF] font-bold">01 / STRATEGY</span>
                    <span className="text-[11px] text-slate-400 font-sans">
                      Aligning tech with goals
                    </span>
                  </div>

                  <div className="text-center text-slate-500 text-xs py-0.5">↓</div>

                  <div className="p-3 rounded-xl bg-[#01153B] border border-slate-800 flex items-center justify-between">
                    <span className="text-[#FF6F00] font-bold">02 / ARCHITECTURE</span>
                    <span className="text-[11px] text-slate-400 font-sans">
                      Resilient system design
                    </span>
                  </div>

                  <div className="text-center text-slate-500 text-xs py-0.5">↓</div>

                  <div className="p-3 rounded-xl bg-[#01153B] border border-slate-800 flex items-center justify-between">
                    <span className="text-[#00B3FF] font-bold">03 / ENGINEERING</span>
                    <span className="text-[11px] text-slate-400 font-sans">
                      Practical implementation
                    </span>
                  </div>

                  <div className="text-center text-slate-500 text-xs py-0.5">↓</div>

                  <div className="p-3 rounded-xl bg-[#01153B] border border-slate-800 flex items-center justify-between">
                    <span className="text-emerald-400 font-bold">04 / OPERATIONS</span>
                    <span className="text-[11px] text-slate-400 font-sans">
                      Performance & reliability
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>SCOPE: END-TO-END</span>
                  <span className="text-[#00B3FF]">PRACTICAL EXECUTION</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT ZOFT */}
      <section className="relative bg-slate-50/60 text-[#01153B] py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Large Statement */}
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
                OUR PERSPECTIVE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#01153B] font-sans leading-[1.15]">
                Technology Should Solve Real Problems.
              </h2>
            </div>

            {/* Right Supporting Copy with Vertical Rule Accent */}
            <div className="lg:col-span-6 pl-0 lg:pl-8 border-l-0 lg:border-l-2 border-slate-300 space-y-4">
              <p className="text-lg text-slate-700 leading-relaxed font-sans font-normal">
                ZOFT&apos;s work sits at the intersection of architecture, databases, cloud, data,
                performance, and engineering. The focus is not technology for its own sake, but
                technology that works in the environment where it is actually used.
              </p>
              <p className="text-sm text-slate-500 font-mono">POSITIONING STATEMENT // ZOFT CORP</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW ZOFT THINKS */}
      <section className="relative bg-[#01153B] text-white py-24 md:py-32 overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#00B3FF] border border-[#00B3FF]/20 mb-4">
              <Compass className="w-3.5 h-3.5" />
              ENGINEERING PRINCIPLES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-sans leading-[1.12]">
              How We Approach Technology
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ABOUT_PRINCIPLES.map((principle, idx) => (
              <div
                key={principle.number}
                className="bg-[#031E4D] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 flex flex-col justify-between backdrop-blur-sm relative group hover:border-[#00B3FF]/50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#00B3FF] bg-[#00B3FF]/10 px-2.5 py-1 rounded border border-[#00B3FF]/20 uppercase tracking-wider">
                      {principle.number}
                    </span>
                    {idx < ABOUT_PRINCIPLES.length - 1 && (
                      <span className="hidden lg:inline-block font-mono text-slate-500 text-xs">
                        →
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight font-sans mb-2 uppercase">
                    {principle.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {principle.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 uppercase tracking-widest">
                  STEP {principle.number}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TECHNOLOGY DEPTH */}
      <section className="relative bg-slate-50/60 text-[#01153B] py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              CAPABILITY AREAS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#01153B] font-sans">
              Where Technology Meets Depth.
            </h2>
          </div>

          <div className="divide-y divide-slate-200">
            {TECHNOLOGY_DEPTH_AREAS.map((area) => (
              <div
                key={area.number}
                className="py-8 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-6 items-center group hover:bg-white hover:px-4 rounded-xl transition-all duration-200"
              >
                <div className="md:col-span-4 flex items-baseline gap-4">
                  <span className="font-mono text-base font-bold text-[#01153B]">{area.number}</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#01153B] font-sans uppercase group-hover:text-[#00B3FF] transition-colors">
                    {area.title}
                  </h3>
                </div>
                <div className="md:col-span-8">
                  <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHAT MAKES ZOFT DIFFERENT */}
      <section className="relative bg-white text-[#01153B] py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              OUR DIFFERENTIATORS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#01153B] font-sans">
              Built Around the Technology Behind the Business.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* 1. EXPERTISE (Featured Card) */}
            <div className="lg:col-span-5 bg-[#01153B] text-white rounded-3xl p-8 sm:p-10 border border-[#00B3FF]/30 shadow-xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-mono text-[#00B3FF] font-bold uppercase tracking-wider block">
                  01 / EXPERTISE
                </span>
                <h3 className="text-3xl font-extrabold text-white font-sans tracking-tight">
                  EXPERTISE
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  Deep technical understanding across databases, cloud, data, performance, and
                  architecture.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800 text-xs font-mono text-slate-400">
                TECHNICAL DEPTH
              </div>
            </div>

            {/* 2 & 3. PRACTICALITY & PARTNERSHIP */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-slate-50/60 rounded-3xl p-8 border border-slate-200/90 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <span className="text-xs font-mono text-[#FF6F00] font-bold uppercase tracking-wider block">
                    02 / PRACTICALITY
                  </span>
                  <h3 className="text-2xl font-bold text-[#01153B] font-sans tracking-tight">
                    PRACTICALITY
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans">
                    Technology decisions grounded in real workloads and operational realities.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200 text-xs font-mono text-slate-500">
                  REAL-WORLD ALIGNMENT
                </div>
              </div>

              <div className="bg-slate-50/60 rounded-3xl p-8 border border-slate-200/90 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <span className="text-xs font-mono text-[#01153B] font-bold uppercase tracking-wider block">
                    03 / PARTNERSHIP
                  </span>
                  <h3 className="text-2xl font-bold text-[#01153B] font-sans tracking-tight">
                    PARTNERSHIP
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans">
                    Working alongside organizations to understand challenges and guide technical
                    decisions.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200 text-xs font-mono text-slate-500">
                  COLLABORATIVE ADVISORY
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUR TECHNOLOGY ECOSYSTEM */}
      <section className="relative bg-slate-50/60 text-[#01153B] py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              TECHNOLOGY STACK
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#01153B] font-sans">
              An Ecosystem Built Around Modern Technology.
            </h2>
          </div>

          {/* Cloud Platforms Grid with Verified Logos */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                CLOUD PLATFORMS
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {ECOSYSTEM_TECHNOLOGIES.filter((t) => t.category === 'cloud-platform').map((tech) => (
                  <div
                    key={tech.name}
                    className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col items-center justify-center space-y-3 hover:border-[#00B3FF]/40 transition-colors"
                  >
                    {tech.logoPath ? (
                      <div className="h-10 w-24 relative flex items-center justify-center">
                        <Image
                          src={tech.logoPath}
                          alt={`${tech.name} logo`}
                          width={96}
                          height={40}
                          className="object-contain max-h-10 w-auto"
                        />
                      </div>
                    ) : null}
                    <span className="text-sm font-bold text-[#01153B] font-sans">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Database Engines Grid */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                DATABASE ENGINES
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {ECOSYSTEM_TECHNOLOGIES.filter((t) => t.category === 'database-engine').map(
                  (tech) => (
                    <div
                      key={tech.name}
                      className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm flex items-center justify-between hover:border-[#00B3FF]/40 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Database className="w-5 h-5 text-[#00B3FF]" />
                        <span className="text-base font-bold text-[#01153B] font-sans">
                          {tech.name}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-slate-400">ENGINE</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. EXPLORE ABOUT ZOFT */}
      <section className="relative bg-white text-[#01153B] py-20 md:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
              EXPLORE ABOUT ZOFT
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#01153B] font-sans">
              Explore About ZOFT
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ABOUT_DESTINATIONS.map((destination) => (
              <div
                key={destination.title}
                className="bg-slate-50/60 p-8 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6 hover:border-[#00B3FF]/40 transition-colors"
              >
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-[#01153B] font-sans">
                    {destination.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans">
                    {destination.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <Link
                    href={destination.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#01153B] hover:text-[#00B3FF] transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. EDITORIAL STATEMENT */}
      <section className="relative bg-[#031E4D] text-white py-20 md:py-28 overflow-hidden border-b border-slate-800">
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:3rem_3rem]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00B3FF]/10 blur-[150px] rounded-full"
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#00B3FF] via-sky-200 to-[#FF6F00] mx-auto mb-6 rounded-full" />

          <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.2] font-sans">
            “Good Technology Is Built Around Better Understanding.”
          </blockquote>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans">
            Understanding the problem, the architecture, the workload, and the people behind the
            technology leads to better technical decisions.
          </p>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section
        aria-label="Let's Talk Technology"
        className="relative bg-[#01153B] text-white py-24 md:py-32 overflow-hidden border-t border-slate-800"
      >
        <div
          className="pointer-events-none absolute bottom-0 right-0 w-[550px] h-[550px] bg-[#00B3FF]/10 blur-[150px] rounded-full"
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#00B3FF] border border-[#00B3FF]/20">
            <MessageSquare className="w-3.5 h-3.5" />
            START A CONVERSATION
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-sans leading-[1.12]">
            Let&apos;s Talk Technology.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
            Have a technology challenge, architecture question, or modernization goal? Start a
            conversation with ZOFT.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#FF6F00] hover:bg-[#e66400] text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-[#FF6F00]/20 focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
            >
              Talk to ZOFT
            </Link>
            <Link
              href="/consulting"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-lg text-base font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200 border border-slate-800 focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
            >
              <span>Explore Consulting</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
