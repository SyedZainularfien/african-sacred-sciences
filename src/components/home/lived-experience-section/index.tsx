"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Typography } from "@/components/ui/typography";
import { Container } from "@/components/layout/container";
import { reflectionQuestions } from "@/constants/home";
import { motionTiming } from "@/lib/motion";

const textReveal: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.64, delay, ease: motionTiming.ease },
  }),
};

const gradientReveal: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.78, delay: 0.38, ease: motionTiming.ease },
  },
};

const photoReveal: Variants = {
  hidden: { opacity: 0, scale: 1.04 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, delay: 0.16, ease: motionTiming.ease },
  },
};

export function LivedExperienceSection() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const questionsRef = useRef<HTMLUListElement>(null);
  const conclusionRef = useRef<HTMLDivElement>(null);
  const photoFrameRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduceMotion || !sectionRef.current || !questionsRef.current || !conclusionRef.current || !photoFrameRef.current || !photoRef.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const questions = Array.from(questionsRef.current.children) as HTMLLIElement[];
    let activeIndex = -1;
    const setActiveQuestion = (index: number) => {
      if (index === activeIndex) return;
      activeIndex = index;
      questions.forEach((question, questionIndex) => {
        question.dataset.active = String(questionIndex === index);
      });
    };

    const context = gsap.context(() => {
      const updateActiveQuestion = (self: ScrollTrigger) => {
        if (self.scroll() < self.start) {
          setActiveQuestion(-1);
          return;
        }

        if (window.matchMedia("(min-width: 1280px)").matches) {
          setActiveQuestion(Math.min(questions.length - 1, Math.floor(self.progress * questions.length)));
          return;
        }

        const threshold = window.innerHeight * 0.75;
        let index = -1;
        questions.forEach((question, questionIndex) => {
          if (question.getBoundingClientRect().top <= threshold) index = questionIndex;
        });
        setActiveQuestion(index);
      };

      ScrollTrigger.create({
        trigger: questionsRef.current,
        start: "top 75%",
        endTrigger: conclusionRef.current,
        end: "top 42%",
        invalidateOnRefresh: true,
        onUpdate: updateActiveQuestion,
        onRefresh: updateActiveQuestion,
        onLeaveBack: () => setActiveQuestion(-1),
      });

      gsap.fromTo(photoRef.current, { yPercent: -0.6 }, {
        yPercent: 0.6,
        ease: "none",
        scrollTrigger: {
          trigger: photoFrameRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      return () => {
        questions.forEach((question) => delete question.dataset.active);
      };
    }, sectionRef);

    return () => context.revert();
  }, [reduceMotion]);

  return (
    <section ref={sectionRef} aria-labelledby="lived-experience-title" className="bg-background-yellow py-16 text-full-black sm:py-20 xl:pb-[84px] xl:pt-[111px]">
      <Container className="flex flex-col items-center gap-10 sm:gap-12 xl:flex-row xl:items-start xl:gap-[90px]">
        <div className="flex w-full min-w-0 flex-col gap-8 xl:w-[570px] xl:shrink-0">
          <div className="flex flex-col gap-10 xl:gap-[52px]">
            <motion.div initial={reduceMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true, amount: 0.4 }} className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-5">
                <motion.div data-motion-reveal custom={0} variants={textReveal}>
                  <Typography variant="xs" className="font-semibold uppercase leading-[17px] tracking-[2.42px] text-gold">From Knowledge to Lived Experience</Typography>
                </motion.div>
                <Typography as="h2" variant="mdMedium" id="lived-experience-title" className="[font-size:clamp(2rem,3.4vw,3rem)]! leading-[52px] xl:[text-box-trim:trim-both] xl:[text-box-edge:cap_alphabetic]">
                  <motion.span data-motion-reveal custom={0.12} variants={textReveal} className="block">African Sacred Science</motion.span>
                  <motion.span data-motion-reveal custom={0.24} variants={textReveal} className="block">Is Meant to <motion.span data-motion-reveal variants={gradientReveal} className="bg-plum-gradient bg-clip-text font-serif [font-size:1.208333em]! font-semibold italic text-transparent">Be Lived</motion.span></motion.span>
                </Typography>
              </div>
              <motion.div data-motion-reveal custom={0.54} variants={textReveal}>
                <Typography variant="md" className="leading-[25px] text-full-black/90">Knowledge becomes transformative when it speaks to the questions, decisions and realities we actually face.</Typography>
              </motion.div>
            </motion.div>
            <ul ref={questionsRef} className="flex w-full max-w-[532px] flex-col gap-[10px]">
              {reflectionQuestions.map((question) => (
                <li key={question} className="rounded-[20px] border border-plum/18 bg-plum/[0.07] px-5 py-5 transition-colors duration-300 data-[active=true]:border-gold/55 data-[active=true]:bg-gold/12 sm:px-8">
                  <Typography variant="mdMedium" className="[font-size:18px]! leading-[33px]">{question}</Typography>
                </li>
              ))}
            </ul>
          </div>
          <motion.div ref={conclusionRef} data-motion-reveal initial={reduceMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true, amount: 0.6 }} variants={textReveal} custom={0}>
            <Typography variant="lg" className="flex min-h-[49px] w-full max-w-[563px] items-center border-l-4 border-gold bg-[linear-gradient(90deg,#eec97c,transparent)] px-[26px] py-2 font-semibold leading-[25px]">This Is Where ORIINU™ Comes To Life.</Typography>
          </motion.div>
        </div>
        <div className="w-full max-w-[640px] xl:w-[calc(100%_-_660px)] xl:pt-[25px]">
          <motion.div ref={photoFrameRef} data-motion-reveal initial={reduceMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={photoReveal} className="overflow-hidden rounded-[6%]">
            <div ref={photoRef} className={reduceMotion ? undefined : "scale-[1.02]"}>
              <Image src="/images/knowledge-live-exp-right-section.png" alt="Two speakers sharing African Sacred Science with a seated audience" width={1280} height={1414} sizes="(min-width: 1280px) 45vw, (min-width: 768px) 640px, 100vw" className="h-auto w-full" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
