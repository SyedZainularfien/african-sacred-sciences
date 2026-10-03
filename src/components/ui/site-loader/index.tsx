"use client";

import { motion, useReducedMotion } from "motion/react";
import { Typography } from "@/components/ui/typography";
import { motionTiming } from "@/lib/motion";
import styles from "./site-loader.module.css";

const rings = [104, 128, 151];
const particles = [
  { radius: 104, angle: 35, duration: 28 },
  { radius: 128, angle: 195, duration: 36 },
  { radius: 151, angle: 285, duration: 44 },
];

export function SiteLoader() {
  const reduceMotion = useReducedMotion();
  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 8 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduceMotion ? 0.15 : 0.65, delay: reduceMotion ? 0 : delay, ease: motionTiming.ease },
  });

  return (
    <motion.div
      id="site-loader-overlay"
      className={styles.loader}
      role="status"
      aria-live="polite"
      aria-label="Loading African Sacred Science"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduceMotion ? 0.15 : 0.55, ease: motionTiming.ease }}
    >
      <motion.div
        className={styles.content}
        exit={{ scale: reduceMotion ? 1 : 1.025, opacity: 0 }}
        transition={{ duration: reduceMotion ? 0.15 : 0.55, ease: motionTiming.ease }}
      >
        <div className={styles.orbits} aria-hidden="true">
          <svg className={styles.orbitArtwork} viewBox="0 0 340 340" fill="none">
            {rings.map((radius, index) => (
              <motion.circle
                key={radius}
                cx="170"
                cy="170"
                r={radius}
                className={styles.ring}
                initial={{ pathLength: reduceMotion ? 1 : 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0.42, 0.28, 0.18][index] }}
                transition={{ duration: reduceMotion ? 0.15 : 1.1, delay: reduceMotion ? 0 : 0.45 + index * 0.12, ease: motionTiming.ease }}
              />
            ))}
            {particles.map(({ radius, angle, duration }, index) => (
              <motion.g
                key={radius}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: reduceMotion ? 0 : 1 + index * 0.12 }}
              >
                <motion.g
                  initial={{ rotate: angle }}
                  animate={{ rotate: reduceMotion ? angle : angle + 360 }}
                  transition={{ duration, repeat: Infinity, ease: "linear", delay: 1 }}
                  className={styles.orbitRotation}
                >
                  {/* Center the SVG group's bounds for Motion's rotation origin. */}
                  <circle cx="170" cy="170" r={radius} fill="none" opacity="0" />
                  <circle cx="170" cy={170 - radius} r={index === 1 ? 2 : 2.5} className={styles.particle} />
                </motion.g>
              </motion.g>
            ))}
          </svg>
          <motion.div
            className={styles.symbol}
            initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: reduceMotion ? 0.15 : 0.8, delay: reduceMotion ? 0 : 0.2, ease: motionTiming.ease }}
          >
            <motion.svg
              viewBox="36 0 171 156"
              className={styles.symbolArtwork}
              animate={reduceMotion ? undefined : { scale: [1, 1.025, 1], filter: ["drop-shadow(0 0 8px rgba(198,155,52,0.08))", "drop-shadow(0 0 14px rgba(198,155,52,0.18))", "drop-shadow(0 0 8px rgba(198,155,52,0.08))"] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <image href="/images/the-ecosystem/africa-sacred-sciences.webp" width="243" height="230" />
            </motion.svg>
          </motion.div>
        </div>

        <div className={styles.copy}>
          <motion.div {...reveal(1.05)}>
            <svg viewBox="0 164 243 66" role="img" aria-label="African Sacred Science" className={styles.wordmark}>
              <image href="/images/the-ecosystem/africa-sacred-sciences.webp" width="243" height="230" />
            </svg>
          </motion.div>
          <motion.div {...reveal(1.35)} className={styles.taglineRow}>
            <span className={styles.rule} aria-hidden="true" />
            <Typography as="span" variant="xs" className={styles.tagline}>Unveiling Ancient Wisdom</Typography>
            <span className={styles.rule} aria-hidden="true" />
          </motion.div>
          <motion.div {...reveal(1.55)} className={styles.dots} aria-hidden="true">
            {[0, 1, 2].map((index) => (
              <motion.span
                key={index}
                className={styles.dot}
                animate={reduceMotion ? undefined : { opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.8, repeat: Infinity, delay: 1.7 + index * 0.2, ease: "easeInOut" }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
