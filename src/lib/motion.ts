import type { Variants } from "motion/react";

export const motionTiming = {
  entrance: 0.55,
  hero: 0.7,
  hover: 0.28,
  stagger: 0.12,
  ease: [0.22, 1, 0.36, 1] as const,
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: motionTiming.entrance, ease: motionTiming.ease } },
};

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: motionTiming.hero, ease: motionTiming.ease } },
};

export const staggerReveal: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: motionTiming.stagger } },
};

export const hoverScale = {
  scale: 1.025,
  transition: { duration: motionTiming.hover, ease: motionTiming.ease },
};
