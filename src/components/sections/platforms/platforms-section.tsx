import React from "react";
import { Container } from "@/components/ui/container";
import { PlatformsVisual } from "./platforms-visual";
import {
  AwsLogo,
  AzureLogo,
  GoogleCloudLogo,
  OracleLogo,
} from "@/components/ui/platform-logos";

export interface PlatformItem {
  id: string;
  name: string;
  descriptor: string;
  tag: string;
  capabilities: string[];
  logo: React.ReactNode;
}

const SUPPORTED_PLATFORMS: PlatformItem[] = [
  {
    id: "aws",
    name: "AWS",
    tag: "CLOUD SERVICES",
    descriptor: "Cloud infrastructure and services.",
    capabilities: ["Aurora", "RDS", "EKS", "FinOps"],
    logo: <AwsLogo size="md" />,
  },
  {
    id: "azure",
    name: "Microsoft Azure",
    tag: "ENTERPRISE CLOUD",
    descriptor: "Enterprise cloud and infrastructure.",
    capabilities: ["SQL MI", "Synapse", "Cosmos DB", "AKS"],
    logo: <AzureLogo size="md" />,
  },
  {
    id: "gcp",
    name: "Google Cloud",
    tag: "DATA & INFRASTRUCTURE",
    descriptor: "Cloud infrastructure and data services.",
    capabilities: ["Spanner", "BigQuery", "Cloud SQL", "GKE"],
    logo: <GoogleCloudLogo size="md" />,
  },
  {
    id: "oracle",
    name: "Oracle",
    tag: "DATABASE & CLOUD",
    descriptor: "Enterprise database and cloud technologies.",
    capabilities: ["Exadata", "RAC", "OCI Database", "Autonomous"],
    logo: <OracleLogo size="md" />,
  },
];

export const PlatformsSection: React.FC = () => {
  return (
    <section className="relative w-full bg-white text-[#01153B] border-b border-slate-200/90 py-16 sm:py-20 lg:py-24">
      {/* Background Architectural Blueprint Pattern */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (Desktop) / Main Column (Mobile) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Heading Block */}
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/30 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
                PLATFORMS WE SUPPORT
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#01153B] tracking-tight leading-tight font-sans">
                Cloud Platforms. <br />
                <span className="text-[#01153B]">Built Around Your Business.</span>
              </h2>

              <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed max-w-xl font-sans">
                From cloud infrastructure to database environments, ZOFT works across the platforms enterprises rely on to build, modernize, and operate critical systems.
              </p>
            </div>

            {/* Mobile Visual Placement (visible on <lg screens between copy and platform items) */}
            <div className="block lg:hidden w-full my-6">
              <PlatformsVisual />
            </div>

            {/* 4 Platforms Editorial Grid with Official Brand Logos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {SUPPORTED_PLATFORMS.map((platform) => (
                <div
                  key={platform.id}
                  className="group relative p-6 rounded-xl bg-white border border-slate-200 hover:border-[#00B3FF]/60 hover:-translate-y-1 transition-all duration-200 ease-out-smooth hover:shadow-card-elevated space-y-4 motion-reduce:hover:translate-y-0"
                >
                  <div className="flex items-center justify-between min-h-[36px]">
                    <div className="transition-transform duration-200 group-hover:translate-x-0.5">
                      {platform.logo}
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#00B3FF] uppercase tracking-wider">
                      {platform.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#01153B] group-hover:text-[#00B3FF] transition-colors font-sans">
                      {platform.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-1 font-normal font-sans">
                      {platform.descriptor}
                    </p>
                  </div>

                  {/* Capability Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1 border-t border-slate-100">
                    {platform.capabilities.map((cap, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono font-medium text-[#01153B] bg-slate-100 px-2 py-0.5 rounded border border-slate-200"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Abstract Cloud Platform Visual (Desktop only) */}
          <div className="hidden lg:block lg:col-span-5 w-full">
            <PlatformsVisual />
          </div>
        </div>
      </Container>
    </section>
  );
};
