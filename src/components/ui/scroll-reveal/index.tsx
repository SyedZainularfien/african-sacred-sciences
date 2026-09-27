"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { motionTiming } from "@/lib/motion";

type RevealSettings = { delay: number; distance: number; duration: number; scale: number };

const reveal: Variants = {
  hidden: ({ distance, scale }: RevealSettings) => ({ opacity: 0, y: distance, scale }),
  visible: ({ delay, duration }: RevealSettings) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration, delay, ease: motionTiming.ease },
  }),
};

interface ScrollRevealProps {
  "aria-label"?: string;
  as?: "article" | "div" | "header" | "li" | "nav" | "span";
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  duration?: number;
  id?: string;
  scale?: number;
  amount?: number;
}

export function ScrollReveal({
  "aria-label": ariaLabel,
  as = "div",
  children,
  className,
  delay = 0,
  distance = 16,
  duration = 0.64,
  id,
  scale = 1,
  amount = 0.2,
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();
  const Component = as === "article" ? motion.article : as === "li" ? motion.li : as === "header" ? motion.header : as === "nav" ? motion.nav : as === "span" ? motion.span : motion.div;

  return (
    <Component
      aria-label={ariaLabel}
      id={id}
      data-motion-reveal
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={reveal}
      custom={{ delay, distance, duration, scale }}
      className={className}
    >
      {children}
    </Component>
  );
}
