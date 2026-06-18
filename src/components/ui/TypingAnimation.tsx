"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypingAnimationProps {
  titles: string[];
  className?: string;
}

export function TypingAnimation({ titles, className }: TypingAnimationProps) {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentTitle) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const typingSpeed = isDeleting ? 40 : 80;

    timeout = setTimeout(() => {
      setDisplayText((prev) => {
        if (isDeleting) {
          return currentTitle.substring(0, prev.length - 1);
        }
        return currentTitle.substring(0, prev.length + 1);
      });
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex, titles]);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-accent"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        aria-hidden
      />
    </span>
  );
}
