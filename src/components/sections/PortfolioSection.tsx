"use client";

import type { SectionData } from "@/types/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SkillRating } from "@/components/ui/SkillRating";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface PortfolioSectionProps {
  data: SectionData;
  variant?: "default" | "alternate";
}

export function PortfolioSection({
  data,
  variant = "default",
}: PortfolioSectionProps) {
  return (
    <section
      id={data.id}
      className={`relative scroll-mt-20 px-6 py-24 sm:px-8 lg:px-12 lg:py-32 ${
        variant === "alternate" ? "bg-surface/30" : ""
      }`}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-80 w-80 rounded-full bg-accent/3 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader title={data.title} subtitle={data.subtitle} />

        <ScrollReveal className="mb-16 max-w-3xl" delay={0.1}>
          <p className="text-lg leading-relaxed text-muted sm:text-xl">
            {data.introduction}
          </p>
        </ScrollReveal>

        <div className="mb-20">
          <ScrollReveal className="mb-8" delay={0.15}>
            <h3 className="text-sm font-medium uppercase tracking-widest text-muted">
              Core Skills
            </h3>
          </ScrollReveal>
          <SkillRating skills={data.skills} />
        </div>

        <div>
          <ScrollReveal className="mb-8" delay={0.2}>
            <h3 className="text-sm font-medium uppercase tracking-widest text-muted">
              Featured Projects
            </h3>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {data.projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
