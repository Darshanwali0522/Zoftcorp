import React from "react";
import { Container } from "@/components/ui/container";
import { DatabaseVisual } from "./database-visual";
import { Database, Server, Cpu } from "lucide-react";

export interface DatabaseTechItem {
  id: string;
  name: string;
  tag: string;
  description: string;
  specs: string[];
  icon: React.ReactNode;
}

const DATABASE_TECHNOLOGIES: DatabaseTechItem[] = [
  {
    id: "sql-server",
    name: "SQL Server",
    tag: "01 // ENTERPRISE DATA ENGINE",
    description: "Enterprise-grade reliability for mission-critical workloads.",
    specs: ["Always On Availability Groups", "Query Store & Plan Diagnostics", "In-Memory OLTP"],
    icon: <Database className="w-5 h-5" />,
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    tag: "02 // ADVANCED RELATIONAL ENGINE",
    description: "Enterprise-grade reliability for mission-critical workloads.",
    specs: ["Multi-Tenant Partitioning", "pgvector & Extensions", "Connection Pooling (PgBouncer)"],
    icon: <Server className="w-5 h-5" />,
  },
  {
    id: "mysql",
    name: "MySQL",
    tag: "03 // WEB & SAAS ENGINE",
    description: "Lightweight, fast, and proven for web and SaaS applications.",
    specs: ["InnoDB Engine Tuning", "Read Replica Topologies", "Group Replication"],
    icon: <Cpu className="w-5 h-5" />,
  },
];

export const DatabaseTechnologySection: React.FC = () => {
  return (
    <section className="relative w-full bg-white text-[#01153B] border-y border-slate-200/90 py-16 sm:py-20 lg:py-24">
      {/* Background Architectural Blueprint Pattern */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Technology Items List */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Heading Block */}
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/30 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
                DATABASE TECHNOLOGY
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#01153B] tracking-tight leading-tight font-sans">
                Optimized Databases. <br />
                <span className="text-[#01153B]">Backed by Proven Technology Depth.</span>
              </h2>

              <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed max-w-xl font-sans">
                Powered by experienced architects who understand the database technologies behind critical business systems.
              </p>
            </div>

            {/* Editorial Database Technology Cards */}
            <div className="space-y-4 pt-1">
              {DATABASE_TECHNOLOGIES.map((tech) => (
                <div
                  key={tech.id}
                  className="group relative p-5 sm:p-6 rounded-xl bg-white border border-slate-200 hover:border-[#00B3FF] transition-all duration-200 hover:shadow-card-elevated"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-[#00B3FF]/10 text-[#00B3FF] border border-[#00B3FF]/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#00B3FF]/15 group-hover:border-[#00B3FF] transition-colors">
                      {tech.icon}
                    </div>
                    <div className="space-y-2 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-[10px] font-mono font-bold text-[#00B3FF] uppercase tracking-wider">
                          {tech.tag}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-[#01153B] group-hover:text-[#00B3FF] transition-colors font-sans">
                        {tech.name}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed font-sans">
                        {tech.description}
                      </p>
                      {/* Technical Specs Tags */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {tech.specs.map((spec, i) => (
                          <span
                            key={i}
                            className="text-[11px] font-mono font-medium text-[#01153B] bg-slate-100 px-2.5 py-0.5 rounded border border-slate-200"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Abstract Database Visual */}
          <div className="lg:col-span-5 w-full">
            <DatabaseVisual />
          </div>
        </div>
      </Container>
    </section>
  );
};
