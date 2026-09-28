"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/layout/container";
import { ButtonLink, buttonVariants } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { motionTiming, slideUp, staggerReveal } from "@/lib/motion";
import { useAnimationReady } from "@/lib/use-animation-ready";

const collageReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
    clipPath: "polygon(0 0, 0 0, -35% 100%, 0 100%)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: { duration: 1.2, delay: 0.16, ease: motionTiming.ease },
  },
};

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const animate = useAnimationReady() && !reduceMotion;
  const heroRef = useRef<HTMLElement>(null);
  const collageRef = useRef<HTMLDivElement>(null);
  const scrollLayerRef = useRef<HTMLDivElement>(null);
  const pointerLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const collage = collageRef.current;
    const scrollLayer = scrollLayerRef.current;
    const pointerLayer = pointerLayerRef.current;
    if (reduceMotion || !hero || !collage || !scrollLayer || !pointerLayer) return;

    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.fromTo(scrollLayer, { y: 0 }, {
        y: -25,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, collage);

    const media = gsap.matchMedia();
    media.add("(min-width: 1024px) and (hover: hover) and (pointer: fine)", () => {
      const moveX = gsap.quickTo(pointerLayer, "x", { duration: 0.7, ease: "power3.out" });
      const moveY = gsap.quickTo(pointerLayer, "y", { duration: 0.7, ease: "power3.out" });
      const rotateX = gsap.quickTo(pointerLayer, "rotationX", { duration: 0.7, ease: "power3.out" });
      const rotateY = gsap.quickTo(pointerLayer, "rotationY", { duration: 0.7, ease: "power3.out" });

      const onMove = (event: PointerEvent) => {
        const bounds = collage.getBoundingClientRect();
        const x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
        const y = ((event.clientY - bounds.top) / bounds.height) * 2 - 1;
        moveX(x * 7);
        moveY(y * 6);
        rotateX(-y * 3);
        rotateY(x * 3);
      };
      const onLeave = () => {
        moveX(0);
        moveY(0);
        rotateX(0);
        rotateY(0);
      };

      collage.addEventListener("pointermove", onMove);
      collage.addEventListener("pointerleave", onLeave);
      return () => {
        collage.removeEventListener("pointermove", onMove);
        collage.removeEventListener("pointerleave", onLeave);
        gsap.killTweensOf(pointerLayer);
        gsap.set(pointerLayer, { clearProps: "transform" });
      };
    });

    return () => {
      media.revert();
      context.revert();
    };
  }, [reduceMotion]);

  return (
    <section
      ref={heroRef}
      id="home"
      className="bg-black bg-[url('/images/home-hero-bg.webp')] bg-cover bg-center bg-no-repeat text-white"
    >
      <Container className="flex flex-col items-center gap-10 pb-16 pt-36 sm:gap-12 sm:pb-20 sm:pt-44 min-[90rem]:min-h-[800px] min-[90rem]:flex-row min-[90rem]:items-start min-[90rem]:gap-[77px] min-[90rem]:pb-[93px] min-[90rem]:pt-[138px]">
        <motion.div
          key={animate ? "animated" : "static"}
          initial={animate ? "hidden" : false}
          animate="visible"
          variants={staggerReveal}
          className="flex w-full min-w-0 max-w-[720px] flex-col gap-[30px] min-[90rem]:w-[563px] min-[90rem]:shrink-0 min-[90rem]:pt-[70px]"
        >
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-[10px]">
                <motion.div data-motion-reveal variants={slideUp}>
                  <Typography
                    variant="xs"
                    className="font-semibold uppercase leading-[17px] tracking-[2.42px] text-gold"
                  >
                    Welcome to African Sacred Science
                  </Typography>
                </motion.div>
                <Typography
                  as="h1"
                  variant="mdMedium"
                  className="flex flex-col"
                >
                  <motion.span data-motion-reveal variants={slideUp} className="[font-size:clamp(2.375rem,7vw,3.875rem)]! leading-[1.16] min-[90rem]:leading-[72px]">
                    Ancient Wisdom
                  </motion.span>
                  <motion.span data-motion-reveal variants={slideUp} className="bg-plum-gradient bg-clip-text font-serif [font-size:clamp(2.75rem,6.4vw,5.125rem)]! font-semibold italic leading-[1.25] text-transparent min-[90rem]:whitespace-nowrap">
                    Living Intelligence.
                  </motion.span>
                </Typography>
              </div>
              <motion.div data-motion-reveal variants={slideUp}>
                <Typography variant="md" className="leading-8 text-grey">
                  Africa’s knowledge traditions contain profound insights into
                  identity, character, destiny, consciousness, community,
                  prosperity, leadership, the natural world and our relationship
                  with the Divine. African Sacred Science brings this wisdom
                  forward for modern life.
                </Typography>
              </motion.div>
            </div>
            <div className="flex flex-col gap-5 sm:flex-row sm:flex-wrap min-[90rem]:flex-nowrap">
              <motion.div data-motion-reveal variants={slideUp} className="w-full sm:w-fit">
                <a
                  href="#african-sacred-science"
                  className={buttonVariants({
                    width: "full",
                    className: "sm:w-fit min-[90rem]:h-[60px] min-[90rem]:w-[313px] min-[90rem]:shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
                  })}
                >
                  <Typography as="span" variant="cta" className="max-sm:text-sm">
                    Discover African Sacred Science
                  </Typography>
                </a>
              </motion.div>
              <motion.div data-motion-reveal variants={slideUp} className="w-full sm:w-fit">
                <ButtonLink
                  href="https://oriinu.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  width="full"
                  className="bg-black! sm:w-fit min-[90rem]:h-[60px] min-[90rem]:w-[230px] min-[90rem]:shrink-0 [&>span]:whitespace-nowrap"
                >
                  Experience ORIINU →
                </ButtonLink>
              </motion.div>
            </div>
          </div>
          <motion.div data-motion-reveal variants={slideUp}>
            <Typography
              variant="md"
              className="flex min-h-[37px] items-center border-l-4 border-plum bg-[linear-gradient(90deg,rgba(127,22,105,0.45),transparent)] px-[26px] py-1 leading-7 text-white/90"
            >
              Remember . Align . Flourish.
            </Typography>
          </motion.div>
        </motion.div>
        <div
          ref={collageRef}
          role="img"
          aria-label="African sacred science, wisdom, community, and research collage"
          className="relative aspect-[1320/1138] w-full max-w-[720px] [perspective:1200px] min-[90rem]:w-[calc(100%_-_640px)] min-[90rem]:max-w-none"
        >
          <div ref={scrollLayerRef} className="absolute inset-0">
            <div ref={pointerLayerRef} className="absolute inset-0">
              <motion.div
                data-motion-reveal
                key={animate ? "animated" : "static"}
                initial={animate ? "hidden" : false}
                animate="visible"
                variants={collageReveal}
                className="absolute inset-0"
              >
                <Image
                  src="/images/hero-right.webp"
                  alt=""
                  fill
                  priority
                  sizes="(min-width: 180rem) 1960px, (min-width: 90rem) calc(90vw - 640px), (min-width: 40rem) min(720px, calc(100vw - 64px)), calc(100vw - 40px)"
                  className="object-contain"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
