import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { DOCTRINE_CLOSING_RING_RADII } from "@/constants/doctrine";

function ClosingRings() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1440 760"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <g stroke="#C69B34" strokeOpacity="0.045" strokeWidth="0.7">
        {DOCTRINE_CLOSING_RING_RADII.map((radius) => (
          <circle key={radius} cx="720" cy="385" r={radius} />
        ))}
      </g>
    </svg>
  );
}

export function DoctrineClosingSection() {
  return (
    <section
      id="doctrine-closing"
      aria-labelledby="doctrine-closing-title"
      className="relative isolate overflow-hidden bg-[#030303] bg-[radial-gradient(ellipse_42%_48%_at_50%_48%,rgba(71,15,55,0.24),transparent_88%)] px-5 pb-24 pt-20 text-white lg:pb-[162px] lg:pt-[140px]"
    >
      <ClosingRings />
      <div className="relative z-10 flex w-full max-w-[780px] flex-col items-center gap-12 border-y border-gold/10 py-[52px] text-center lg:mx-auto lg:gap-[60px] lg:pb-[57px] lg:pt-[48px]">
        <div className="flex flex-col items-center gap-12 lg:gap-[66px]">
          <Typography
            as="h2"
            id="doctrine-closing-title"
            variant="h2"
            className="flex flex-col font-normal! italic leading-[1.08]! max-sm:text-[clamp(2.5rem,9vw,3.25rem)]! sm:text-[3.25rem]!"
          >
            <ScrollReveal as="span">Alignment is not a destination.</ScrollReveal>
            <ScrollReveal as="span" delay={0.15} className="text-[#d5a846]">It is a way of living.</ScrollReveal>
          </Typography>

          <ScrollReveal delay={0.26}>
            <Typography
              variant="md"
              className="max-w-[680px] text-center leading-[1.9] text-white/70"
            >
              The Doctrine of Divine Alignment is not a set of rules or a fixed
              programme. It is a philosophical orientation, an invitation to examine
              the degree to which the various dimensions of our life are moving in
              the same direction.
            </Typography>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.38} className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:gap-[14px]">
          <Link
            href="https://oriinu.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              className:
                "min-h-[54px] w-full gap-2 px-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:w-auto sm:shrink-0 sm:px-[23px]",
            })}
          >
            <Typography
              as="span"
              variant="cta"
              className="text-sm! uppercase tracking-[0.12em] sm:whitespace-nowrap"
            >
              Experience Through ORIINU
            </Typography>
            <span aria-hidden="true" className="text-xl leading-none">
              →
            </span>
          </Link>
          <Link
            href="/"
            className="inline-flex min-h-[54px] w-full items-center justify-center gap-2 rounded-full border border-white/20 px-5 text-center text-white/60 transition-colors hover:border-white/40 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:w-auto sm:shrink-0 sm:px-[19px]"
          >
            <span aria-hidden="true" className="text-xl leading-none">
              ←
            </span>
            <Typography
              as="span"
              variant="cta"
              className="text-sm! uppercase tracking-[0.12em] sm:whitespace-nowrap"
            >
              Return to African Sacred Science
            </Typography>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
