"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <ScrollReveal className="mb-16 max-w-3xl">
      <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
        {subtitle}
      </p>
      <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
        {title}
      </h2>
    </ScrollReveal>
  );
}
