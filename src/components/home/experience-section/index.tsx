"use client";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="relative isolate flex min-h-[640px] overflow-hidden bg-black py-20 text-white sm:pt-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_38%_50%_at_50%_100%,#48143d_0%,transparent_100%)]"
      />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-[680px] w-[1360px] max-w-none -translate-x-1/2"
        viewBox="0 0 1360 680"
        fill="none"
      >
        <g stroke="white" strokeOpacity="0.055">
          <circle cx="680" cy="680" r="638" />
          <circle cx="680" cy="680" r="495" />
          <circle cx="680" cy="680" r="350" />
        </g>
      </svg>

      <Container className="relative z-10 flex flex-col items-center gap-10 text-center">
        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-col items-center gap-7">
            <ScrollReveal>
              <Typography variant="xs" className="font-semibold uppercase leading-[17px] tracking-[2.42px] text-gold">You Have Discovered the Wisdom.</Typography>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <Typography as="h2" id="experience-title" variant="mdMedium" className="text-[clamp(2.75rem,4.5vw,4rem)]! font-medium! leading-[1.1] text-white">Now Experience It.</Typography>
            </ScrollReveal>
          </div>
          <div className="flex flex-col items-center gap-3">
            <ScrollReveal delay={0.25}>
              <Typography variant="mdMedium" className="bg-gold-gradient bg-clip-text font-serif text-[clamp(2.5rem,3.4vw,3rem)]! italic leading-none text-transparent">ORIINU<sup className="text-[0.45em]">™</sup></Typography>
            </ScrollReveal>
            <ScrollReveal delay={0.36}>
              <Typography variant="xl" className="text-[clamp(1.25rem,1.6vw,1.375rem)]! font-medium! leading-[1.4] text-white/70">Awaken Your Inner Intelligence.</Typography>
            </ScrollReveal>
          </div>
        </div>
        <ScrollReveal delay={0.48}>
          <ButtonLink
            href="https://oriinu.ai/"
            target="_blank"
            rel="noopener noreferrer"
            showArrow
            size="compact"
            className="h-[54px] uppercase tracking-[0.1em] [&_span]:text-sm! [&_svg]:h-4 [&_svg]:w-4"
          >
            Launch ORIINU
          </ButtonLink>
        </ScrollReveal>
      </Container>
    </section>
  );
}
