"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/layout/container";
import { Typography } from "@/components/ui/typography";
import { features } from "@/constants/home";
import { motionTiming } from "@/lib/motion";

const headingReveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, delay, ease: motionTiming.ease },
  }),
};

const gradientReveal: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.82, delay: 0.24, ease: motionTiming.ease },
  },
};

const closingReveal: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.64, ease: motionTiming.ease },
  },
};

export function FeatureSection() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (reduceMotion || !sectionRef.current || !gridRef.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const cards = Array.from(gridRef.current.children) as HTMLLIElement[];
    const icons = cards.map((card) => card.querySelector("img") as HTMLImageElement);
    const context = gsap.context(() => {
      const media = gsap.matchMedia();

      media.add("(min-width: 1280px)", () => {
        const diagonalOrder = [0, 1, 3, 2, 4, 6, 5, 7, 8];
        gsap.set(cards, { opacity: 0, y: 20 });
        gsap.set(icons, { opacity: 0.6, scale: 0.94 });

        const reveal = gsap.timeline({
          scrollTrigger: { trigger: gridRef.current, start: "top 82%", once: true },
        });
        diagonalOrder.forEach((index, position) => {
          const at = position * 0.1;
          reveal.to(cards[index], { opacity: 1, y: 0, duration: 0.58, ease: "power2.out" }, at);
          reveal.to(icons[index], { opacity: 1, scale: 1, duration: 0.42, ease: "power2.out" }, at + 0.12);
        });
      });

      media.add("(max-width: 1279px)", () => {
        cards.forEach((card, index) => {
          gsap.set(card, { opacity: 0, y: 20 });
          gsap.set(icons[index], { opacity: 0.6, scale: 0.94 });
          const reveal = gsap.timeline({
            scrollTrigger: { trigger: card, start: "top 88%", once: true },
          });
          reveal.to(card, { opacity: 1, y: 0, duration: 0.58, ease: "power2.out" });
          reveal.to(icons[index], { opacity: 1, scale: 1, duration: 0.42, ease: "power2.out" }, "<0.12");
        });
      });

      media.add("(min-width: 1024px) and (hover: hover) and (pointer: fine)", () => {
        const enter = cards.map((card, index) => () => {
          gsap.to(card, { y: -4, borderColor: "rgba(198, 155, 52, 0.38)", duration: 0.26, ease: "power2.out", overwrite: "auto" });
          gsap.to(icons[index], { scale: 1.05, duration: 0.26, ease: "power2.out", overwrite: "auto" });
        });
        const leave = cards.map((card, index) => () => {
          gsap.to(card, { y: 0, borderColor: "rgba(198, 155, 52, 0.18)", duration: 0.26, ease: "power2.out", overwrite: "auto" });
          gsap.to(icons[index], { scale: 1, duration: 0.26, ease: "power2.out", overwrite: "auto" });
        });
        cards.forEach((card, index) => {
          card.addEventListener("mouseenter", enter[index]);
          card.addEventListener("mouseleave", leave[index]);
        });
        return () => {
          cards.forEach((card, index) => {
            card.removeEventListener("mouseenter", enter[index]);
            card.removeEventListener("mouseleave", leave[index]);
          });
          gsap.killTweensOf([...cards, ...icons]);
        };
      });

      return () => media.revert();
    }, sectionRef);

    return () => context.revert();
  }, [reduceMotion]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="wisdom-for-the-future"
      className="pb-[60px] pt-16 text-white sm:pt-20"
      style={{
        background:
          "radial-gradient(80% 60% at 50% 0%, rgba(107, 27, 92, 0.45) 0%, rgba(107, 27, 92, 0) 65%), #130b1d",
      }}
    >
      <Container className="flex flex-col items-center gap-10">
        <div className="flex w-full flex-col items-center gap-12 lg:gap-[72px]">
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            className="flex w-full max-w-[1009px] flex-col items-center gap-5 text-center"
          >
            <div className="flex flex-col gap-[10px]">
              <motion.div data-motion-reveal custom={0} variants={headingReveal}>
                <Typography as="p" variant="xs" className="text-xs font-semibold uppercase leading-[17px] tracking-[2.42px] text-gold">
                  The Wisdom We Need for the Future
                </Typography>
              </motion.div>

              <Typography id="wisdom-for-the-future" variant="h2" className="flex flex-col">
                <motion.span
                  data-motion-reveal
                  custom={0.12}
                  variants={headingReveal}
                  className="font-sans [font-size:clamp(2rem,4vw,3rem)]! font-medium leading-[72px]"
                >
                  What If Some of the
                </motion.span>
                <motion.span
                  data-motion-reveal
                  variants={gradientReveal}
                  className="bg-plum-gradient bg-clip-text font-serif [font-size:clamp(2.75rem,5vw,3.625rem)]! font-semibold italic leading-[62px] text-transparent"
                >
                  Wisdom We Need for the Future
                </motion.span>
                <motion.span
                  data-motion-reveal
                  custom={0.4}
                  variants={headingReveal}
                  className="font-sans [font-size:clamp(2rem,4vw,3rem)]! font-medium leading-[72px]"
                >
                  Has Been With Us All Along?
                </motion.span>
              </Typography>
            </div>
            <motion.div data-motion-reveal custom={0.55} variants={headingReveal}>
              <Typography variant="md" className="leading-8 text-grey">
                For generations, important African knowledge has been fragmented, overlooked,
                misunderstood or separated from the intellectual traditions that produced it. African
                Sacred Science seeks to bring these traditions into renewed conversation with
                contemporary life.
              </Typography>
            </motion.div>
          </motion.div>

          <ul ref={gridRef} className="flex w-full flex-wrap gap-5">
            {features.map(({ title, question, icon }) => (
              <li
                key={title}
                data-wisdom-card
                className="flex min-h-[125px] w-full items-center gap-5 rounded-[20px] border border-gold/18 bg-white/5 px-5 py-[23px] md:w-[calc((100%_-_20px)/2)] xl:w-[calc((100%_-_40px)/3)] xl:gap-10 xl:px-10"
              >
                <Image
                  src={`/images/wisdom-for-future/${icon}`}
                  alt=""
                  width={160}
                  height={158}
                  className="h-[77px] w-[78px] shrink-0 object-contain"
                />
                <div className="flex min-w-0 flex-col gap-[15px]">
                  <Typography as="h3" variant="xl" className="font-semibold leading-[1.2] xl:[text-box-trim:trim-both] xl:[text-box-edge:cap_alphabetic]">{title}</Typography>
                  <Typography as="p" variant="md" className="leading-[22px] text-grey xl:[text-box-trim:trim-both] xl:[text-box-edge:cap_alphabetic]">{question}</Typography>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <motion.div
          data-motion-reveal
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={closingReveal}
          className="w-full max-w-[760px]"
        >
          <Typography as="p" variant="mdMedium" className="max-w-[760px] bg-gold-gradient bg-clip-text text-center font-serif [font-size:26px]! italic leading-[39px] text-transparent [-webkit-text-fill-color:transparent]">
            Ancient knowledge does not have to remain in the past.
            <span className="block">It can help illuminate the future.</span>
          </Typography>
        </motion.div>
      </Container>
    </section>
  );
}
