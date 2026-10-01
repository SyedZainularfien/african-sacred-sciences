import Link from "next/link";
import { DimensionIcon } from "@/components/doctrine/dimension-icon";
import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

import { DOCTRINE_HERO_DIMENSIONS, DOCTRINE_HERO_RING_RADII } from "@/constants/doctrine";

function AlignmentRings() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1440 825"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <g stroke="#C69B34" strokeOpacity="0.045" strokeWidth="0.6">
        {DOCTRINE_HERO_RING_RADII.map((radius) => (
          <circle key={radius} cx="720" cy="415" r={radius} />
        ))}
        <path d="M720 415V0M720 415 0 175M720 415 0 655M720 415 280 825M720 415 1160 825M720 415 1440 655M720 415 1440 175" />
      </g>
    </svg>
  );
}

export function DoctrineHeroSection() {
  return (
    <section className="relative isolate flex min-h-screen overflow-hidden bg-[#050308] bg-[radial-gradient(ellipse_55%_65%_at_50%_65%,rgba(91,18,74,0.6)_0%,rgba(47,9,58,0.5)_43%,transparent_90%),radial-gradient(ellipse_45%_60%_at_18%_50%,rgba(58,13,44,0.45),transparent_85%)] text-white">
      <AlignmentRings />
      <Container className="relative z-10 flex flex-col pb-12 pt-36 sm:pb-20 sm:pt-44 lg:pb-[128px] lg:pt-52">
        <div className="flex max-w-[1120px] flex-col gap-10 sm:gap-12">
          <div className="flex flex-col gap-10 sm:gap-9">
            <div className="flex flex-col gap-8 sm:gap-4">
              <ScrollReveal>
                <Typography
                  as="span"
                  variant="xs"
                  className="font-semibold uppercase tracking-[0.25em] text-gold lg:[font-size:12px]!"
                >
                  The Foundational Philosophy
                </Typography>
              </ScrollReveal>
              <Typography
                as="h1"
                variant="mdMedium"
                className="flex flex-col font-normal!"
              >
                <ScrollReveal as="span" delay={0.12} className="text-[clamp(2.375rem,7vw,3.875rem)]! leading-[1.1]">
                  The Doctrine of
                </ScrollReveal>
                <ScrollReveal as="span" delay={0.26} className="w-fit bg-[linear-gradient(100deg,#e8b1dd_0%,#d090bd_48%,#8c2879_100%)] bg-clip-text font-serif text-[clamp(2.75rem,6.4vw,5.125rem)]! italic leading-[1.25] text-transparent lg:leading-[1.20]">
                  Divine Alignment
                  <sup className="relative -top-[0.15em] ml-1 align-super text-[0.43em]! not-italic">
                    TM
                  </sup>
                </ScrollReveal>
              </Typography>
            </div>

            <ScrollReveal delay={0.38}>
              <Typography
                variant="md"
                className="max-w-[700px] leading-8 text-white/75"
              >
                At the heart of African Sacred Science™ is the principle of Divine
                Alignment: that human flourishing is strengthened when our inner
                life, character, purpose, choices and actions come into greater
                alignment with Divine order.
              </Typography>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.48}>
            <ul className="flex flex-wrap gap-3">
            {DOCTRINE_HERO_DIMENSIONS.map(({ icon, label }) => (
              <li
                key={label}
                className="flex min-h-[43px] items-center gap-3 rounded-full border border-gold/20 bg-white/[0.025] px-[19px] py-2"
              >
                <DimensionIcon icon={icon} />
                <Typography
                  as="span"
                  variant="sm"
                  className="whitespace-nowrap text-white/75"
                >
                  {label}
                </Typography>
              </li>
            ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.58} className="flex flex-wrap items-center gap-x-4 gap-y-6 sm:gap-y-5">
            <Link
              href="#dimensions"
              className={buttonVariants({
                className:
                  "min-h-[53px] w-full gap-2 px-5 text-full-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:w-[302px]",
              })}
            >
              <Typography
                as="span"
                variant="cta"
                className="whitespace-nowrap text-sm! uppercase tracking-[0.08em]"
              >
                Explore the Dimensions
              </Typography>
              <span aria-hidden="true" className="text-xl leading-none">
                ↓
              </span>
            </Link>
            <Link
              href="https://oriinu.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-sm text-sm font-semibold tracking-[0.12em] text-[#a897aa] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold max-sm:w-full max-sm:justify-center"
            >
              Experience Through ORIINU <span aria-hidden="true">→</span>
            </Link>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
