"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Typography } from "@/components/ui/typography";
import { motionTiming } from "@/lib/motion";
import { useAnimationReady } from "@/lib/use-animation-ready";

const textReveal: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, delay, ease: motionTiming.ease },
  }),
};

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.64, delay: 0.62, ease: motionTiming.ease },
  },
};

export function ContentSection() {
  const reduceMotion = useReducedMotion();
  const animate = useAnimationReady() && !reduceMotion;
  const artworkRef = useRef<HTMLDivElement>(null);
  const colorLayerRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (reduceMotion || !artworkRef.current || !colorLayerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      const media = gsap.matchMedia();
      media.add("(min-width: 1024px)", () => {
        gsap.fromTo(colorLayerRef.current, { opacity: 0.88 }, {
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: artworkRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
      return () => media.revert();
    }, artworkRef);

    return () => context.revert();
  }, [reduceMotion]);

  return (
    <motion.section
      key={animate ? "animated" : "static"}
      id="african-sacred-science"
      aria-labelledby="what-is-african-sacred-science"
      initial={animate ? "hidden" : false}
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="flex bg-background-yellow lg:min-h-[800px] min-[180rem]:bg-[linear-gradient(90deg,var(--background-yellow)_50%,#000_50%)]"
    >
      <div className="mx-auto flex w-full min-[180rem]:max-w-[2880px] min-[180rem]:px-[4.861111%]">
        <div className="flex w-full items-start bg-background-yellow px-5 py-16 sm:px-8 sm:py-20 lg:w-[52.430556%] lg:pb-16 lg:pl-[4.861111%] lg:pr-[45px] lg:pt-20 min-[180rem]:pl-0">
          <div className="flex w-full max-w-[640px] flex-col gap-10 sm:gap-12">
            <div className="flex flex-col gap-10 sm:gap-12">
              <div className="flex flex-col gap-8 sm:gap-8">
                <motion.div data-motion-reveal custom={0} variants={textReveal}>
                  <Typography as="p" variant="mdMedium" className="leading-[17px] text-gold">
                    What Is African Sacred Science?
                  </Typography>
                </motion.div>

                <Typography id="what-is-african-sacred-science" variant="h2" className="flex flex-col gap-4 text-full-black sm:gap-6">
                  <motion.span
                    data-motion-reveal
                    custom={0.11}
                    variants={textReveal}
                    className="font-sans [font-size:clamp(2.5rem,4vw,3rem)]! font-medium leading-[1.15] lg:leading-[57px]"
                  >
                    Africa&apos;s Wisdom Is
                  </motion.span>
                  <motion.span
                    data-motion-reveal
                    custom={0.22}
                    variants={textReveal}
                    className="bg-plum-gradient bg-clip-text font-serif [font-size:clamp(3rem,4.5vw,3.625rem)]! font-bold italic leading-[1.1] text-transparent lg:leading-[1.2]"
                  >
                    Vast, Diverse and Living.
                  </motion.span>
                </Typography>
              </div>

              <div className="flex max-w-[633px] flex-col gap-6 text-full-black/85 sm:gap-8">
                <motion.div data-motion-reveal custom={0.35} variants={textReveal}>
                  <Typography as="p" variant="md" className="leading-[30.94px]">
                    African Sacred Science™ is a contemporary body of knowledge, studying, preserving
                    and applying knowledge drawn from Africa&apos;s diverse philosophical, spiritual,
                    ethical and indigenous intellectual traditions.
                  </Typography>
                </motion.div>
                <motion.div data-motion-reveal custom={0.47} variants={textReveal}>
                  <Typography as="p" variant="md" className="leading-[30.94px]">
                    Across African societies, questions of identity, destiny, character, community,
                    nature, prosperity, healing and the Divine were often understood as interconnected
                    dimensions of life. African Sacred Science explores these relationships while
                    respecting the differences among Africa&apos;s many peoples, languages, civilizations
                    and knowledge traditions.
                  </Typography>
                </motion.div>
              </div>
            </div>

            <motion.div
              data-motion-reveal
              variants={cardReveal}
              className="flex flex-col gap-6 rounded-[18px] border border-gold bg-[#f1e5c5] px-5 py-6 text-full-black sm:gap-4 sm:px-7"
            >
              <Typography as="h3" variant="md" className="font-semibold leading-[18px]">
                Africa Is Not One Tradition.
              </Typography>
              <Typography as="p" variant="sm" className="[font-size:15px]! leading-[25.8px]">
                African Sacred Science recognizes both shared patterns of wisdom and important
                differences among traditions. This distinction is fundamental to how the work is
                conducted.
              </Typography>
            </motion.div>
          </div>
        </div>

        <div ref={artworkRef} className="relative hidden flex-1 overflow-hidden bg-black lg:block">
          <Image
            src="/images/what-is-african-sceince-rightside-image.webp"
            alt=""
            fill
            sizes="(min-width: 1024px) 47.5vw, 100vw"
            className="object-cover brightness-[1.7] contrast-[1.15]"
          />
          <Image
            ref={colorLayerRef}
            src="/images/african-science-rightisde-image-color-enhancer.webp"
            alt=""
            fill
            sizes="(min-width: 1024px) 47.5vw, 100vw"
            className="object-cover mix-blend-color"
          />
        </div>
      </div>
    </motion.section>
  );
}
