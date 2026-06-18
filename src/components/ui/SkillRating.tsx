"use client";

import { motion } from "framer-motion";
import type { Skill } from "@/types/portfolio";

interface SkillRatingProps {
  skills: Skill[];
}

export function SkillRating({ skills }: SkillRatingProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className="group rounded-2xl border border-border bg-surface/50 p-5 backdrop-blur-sm transition-colors hover:border-border-hover hover:bg-surface-elevated"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: index * 0.05, duration: 0.5 }}
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-medium text-foreground">{skill.name}</span>
            <span className="text-xs font-mono text-muted">
              {skill.rating}/5
            </span>
          </div>
          <div className="flex gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-border"
              >
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full bg-accent"
                  initial={{ width: 0 }}
                  whileInView={{
                    width: i < skill.rating ? "100%" : "0%",
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.05 + i * 0.08,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                />
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
