"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/types/portfolio";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const hasLiveUrl = project.liveUrl && !project.liveUrl.includes("LIVE_URL");
  const hasGithubUrl =
    project.githubUrl && !project.githubUrl.includes("GITHUB_URL");

  return (
    <motion.article
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/60 backdrop-blur-sm transition-colors hover:border-border-hover"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -4 }}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-elevated">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-lg font-semibold tracking-tight text-foreground">
          {project.title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mb-5 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-surface-elevated px-2.5 py-0.5 text-xs font-medium text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={hasLiveUrl ? project.liveUrl : undefined}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex h-9 flex-1 items-center justify-center rounded-full text-sm font-medium transition-all",
              hasLiveUrl
                ? "bg-foreground text-background hover:opacity-90"
                : "pointer-events-none cursor-not-allowed border border-border bg-surface text-muted opacity-50"
            )}
            aria-disabled={!hasLiveUrl}
            tabIndex={hasLiveUrl ? 0 : -1}
          >
            Live Demo
          </a>
          <a
            href={hasGithubUrl ? project.githubUrl : undefined}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex h-9 flex-1 items-center justify-center rounded-full border text-sm font-medium transition-all",
              hasGithubUrl
                ? "border-border bg-surface-elevated text-foreground hover:bg-surface"
                : "pointer-events-none cursor-not-allowed border-border text-muted opacity-50"
            )}
            aria-disabled={!hasGithubUrl}
            tabIndex={hasGithubUrl ? 0 : -1}
          >
            Github
          </a>
        </div>
      </div>
    </motion.article>
  );
}
