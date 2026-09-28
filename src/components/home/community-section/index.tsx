"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import Link from "next/link";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";

import { principles } from "@/constants/home";
import { motionTiming } from "@/lib/motion";
import { useAnimationReady } from "@/lib/use-animation-ready";

const textReveal: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, delay, ease: motionTiming.ease },
  }),
};

const gradientReveal: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.76, delay: 0.24, ease: motionTiming.ease },
  },
};

const quoteReveal: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.68, ease: motionTiming.ease },
  },
};

const ctaReveal: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, delay: 0.58, ease: motionTiming.ease },
  },
};

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, delay: index * 0.1, ease: motionTiming.ease },
  }),
};

function AlignmentDiagram() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1000 1000"
      fill="none"
      className="pointer-events-none absolute left-1/2 top-[51%] w-[min(110vw,1280px)] -translate-x-1/2 -translate-y-1/2 text-gold opacity-[0.035] xl:w-[69%]"
    >
      <g stroke="currentColor" strokeWidth="0.75">
        <circle cx="500" cy="500" r="150" />
        <circle cx="500" cy="500" r="275" />
        <circle cx="500" cy="500" r="385" />
        <circle cx="500" cy="500" r="490" />
        <path d="M500 500V10M500 500 34 349M500 500 212 896M500 500 788 896M500 500 966 349" />
      </g>
    </svg>
  );
}

export function CommunitySection() {
  const reduceMotion = useReducedMotion();
  const animate = useAnimationReady() && !reduceMotion;

  return (
    <section id="doctrine" aria-labelledby="divine-alignment-title" className="relative isolate overflow-hidden py-16 text-white sm:py-20 xl:pb-[82px] xl:pt-[130px]" style={{ background: "radial-gradient(80% 65% at 50% 50%, rgba(107, 27, 92, 0.22) 0%, rgba(85, 22, 98, 0.15) 27.5%, rgba(25, 7, 115, 0.08) 55%, rgba(25, 7, 115, 0) 75%), linear-gradient(180deg, #020104 0%, #180619 40%, #320a2d 100%)" }}>
      <AlignmentDiagram />
      <Container className="relative z-10 flex flex-col items-center">
        <div className="flex w-full max-w-[1200px] flex-col items-center gap-12 xl:gap-[72px]">
          <div className="flex w-full flex-col items-center gap-12 xl:gap-16">
            <motion.header
              key={animate ? "animated" : "static"}
              initial={animate ? "hidden" : false}
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="flex w-full flex-col items-center gap-10 text-center"
            >
              <div className="flex w-full flex-col items-center gap-7">
                <div className="flex flex-col items-center gap-5">
                  <motion.div data-motion-reveal custom={0} variants={textReveal}>
                    <Typography variant="xs" className="font-semibold uppercase leading-[17px] tracking-[2.42px] text-gold">The Foundational Philosophy</Typography>
                  </motion.div>
                  <Typography as="h2" variant="mdMedium" id="divine-alignment-title" className="[font-size:clamp(2rem,3.45vw,3rem)]! leading-[62px]">
                    <motion.span data-motion-reveal custom={0.12} variants={textReveal} className="inline-block">The Doctrine of</motion.span>{" "}
                    <motion.span data-motion-reveal variants={gradientReveal} className="bg-plum-gradient bg-clip-text font-serif [font-size:clamp(2.75rem,3.9vw,3.5rem)]! font-semibold italic text-transparent">Divine Alignment<sup className="align-super [font-size:0.45em]! not-italic">™</sup></motion.span>
                  </Typography>
                </div>
                <motion.div data-motion-reveal custom={0.4} variants={textReveal} className="w-full max-w-[680px]">
                  <Typography variant="md" className="max-w-[680px] leading-[31px] text-grey">At the heart of African Sacred Science™ is the principle of Divine Alignment: that human flourishing is strengthened when our inner life, character, purpose, choices and actions come into greater alignment with Divine order.</Typography>
                </motion.div>
              </div>
              <motion.div data-motion-reveal custom={0.54} variants={textReveal} className="w-full max-w-[780px]">
                <Typography variant="md" className="max-w-[780px] leading-[29.666667px] text-grey">The Doctrine of Divine Alignment™ provides a unifying philosophical foundation for African Sacred Science while respecting the diversity of Africa&apos;s spiritual, philosophical and knowledge traditions. It invites us to examine the relationship between:</Typography>
              </motion.div>
            </motion.header>
            <ul className="flex w-full flex-wrap justify-center gap-[10px]">
              {principles.map(({ name, alignment, description, icon }, index) => (
                <motion.li
                  key={`${name}-${animate ? "animated" : "static"}`}
                  data-motion-reveal
                  initial={animate ? "hidden" : false}
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={cardReveal}
                  custom={index}
                  className="flex w-full flex-col items-center gap-[14px] rounded-[18px] border border-gold/18 bg-white/[0.035] px-[22px] pb-[19px] pt-8 text-center sm:w-[calc((100%_-_10px)/2)] lg:w-[calc((100%_-_20px)/3)] xl:min-h-[270px] xl:w-[calc((100%_-_40px)/5)]"
                >
                  <div className="flex flex-col items-center gap-4">
                    <Image src={`/images/foundational-philosophy/${icon}`} alt="" width={88} height={88} className="h-11 w-11 object-contain" />
                    <div className="flex flex-col items-center gap-3">
                      <Typography as="h3" variant="mdMedium" className="leading-4 [font-family:var(--font-plus-jakarta-sans)]!">{name}</Typography>
                      <Typography variant="xs" className="font-semibold uppercase leading-[14px] tracking-[1.44px] text-gold">{alignment}</Typography>
                    </div>
                  </div>
                  <span aria-hidden="true" className="h-px w-6 shrink-0 bg-gold/20" />
                  <Typography variant="sm" className="max-w-[240px] leading-[21.45px] text-white/75">{description}</Typography>
                </motion.li>
              ))}
            </ul>
          </div>
          <motion.div
            key={animate ? "animated" : "static"}
            initial={animate ? "hidden" : false}
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            className="flex w-full flex-col items-center gap-10"
          >
            <motion.div data-motion-reveal variants={quoteReveal} className="w-full max-w-[500px]">
              <Typography variant="mdMedium" className="w-full max-w-[500px] border-y border-gold/10 py-8 text-center font-serif [font-size:28px]! italic leading-[42px] text-gold xl:whitespace-nowrap">Alignment is not a destination. It is a way of living.</Typography>
            </motion.div>
            <motion.div
              data-motion-reveal
              variants={ctaReveal}
              className="w-full max-w-[297px]"
            >
              <motion.div
                whileHover={reduceMotion ? undefined : { y: -2, scale: 1.01 }}
                whileTap={reduceMotion ? undefined : { scale: 0.985 }}
                transition={{ duration: motionTiming.hover, ease: motionTiming.ease }}
              >
                <Link
                  href="/doctrine"
                  className={buttonVariants({
                    className: "h-[53px] w-full max-w-[297px]! bg-[linear-gradient(124.26deg,#c69b34_4.765%,#eec97c_50.434%,#c69b34_95.235%)]! uppercase tracking-[1.68px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold [&>span]:text-sm [&>span]:leading-[21px]",
                  })}
                >
                  <Typography as="span" variant="cta">Explore the Doctrine →</Typography>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
