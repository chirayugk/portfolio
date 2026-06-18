"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { scrollToSection } from "@/lib/scroll";
import { TypingAnimation } from "@/components/ui/TypingAnimation";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const { hero } = portfolioData;
  const titleTexts = hero.titles.map((t) => t.text);
  const isResumePlaceholder = hero.resumeUrl.includes("RESUME_URL");

  return (
    <section className="relative flex min-h-screen items-center px-6 pt-20 pb-24 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/8 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] translate-x-1/4 translate-y-1/4 rounded-full bg-accent/5 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-1 flex flex-col items-center text-center lg:order-none lg:items-start lg:text-left">
          <motion.p
            className="mb-4 text-sm font-medium uppercase tracking-widest text-accent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Portfolio
          </motion.p>

          <motion.h1
            className="mb-6 text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {hero.name}
          </motion.h1>

          <motion.div
            className="mb-8 h-10 text-2xl font-medium text-muted sm:text-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <TypingAnimation titles={titleTexts} />
          </motion.div>

          <motion.div
            className="mb-8 flex flex-wrap justify-center gap-2 lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            {hero.titles.map((title) => (
              <button
                key={title.sectionId}
                type="button"
                onClick={() => scrollToSection(title.sectionId)}
                className="rounded-full border border-border bg-surface/60 px-4 py-1.5 text-sm font-medium text-muted backdrop-blur-sm transition-all hover:border-accent/50 hover:bg-surface-elevated hover:text-foreground"
              >
                {title.text}
              </button>
            ))}
          </motion.div>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <SocialLinks links={hero.socialLinks} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            <Button
              variant="primary"
              size="lg"
              disabled={isResumePlaceholder}
              onClick={() => {
                if (!isResumePlaceholder) {
                  window.open(hero.resumeUrl, "_blank", "noopener,noreferrer");
                }
              }}
              aria-label="Download resume"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              Download Resume
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="order-2 flex justify-center lg:order-none"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 blur-2xl" />
            <div className="relative h-64 w-64 overflow-hidden rounded-full border border-border bg-surface-elevated shadow-2xl shadow-accent/10 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
              <Image
                src={hero.profileImage}
                alt={`${hero.name} profile`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
              />
            </div>
            <motion.div
              className="absolute -right-2 -bottom-2 h-24 w-24 rounded-full border border-border bg-surface/80 backdrop-blur-md sm:-right-4 sm:-bottom-4 sm:h-32 sm:w-32"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex h-full items-center justify-center">
                <span className="text-2xl sm:text-3xl">✦</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
