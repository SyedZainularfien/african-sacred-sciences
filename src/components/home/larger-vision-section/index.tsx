import { Container } from "@/components/layout/container";
import { Typography } from "@/components/ui/typography";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

import { visionSteps } from "@/constants/home";

function VisionDiagram() {
  return (
    <div
      role="img"
      aria-label="African Sacred Science at the center of seven actions: preserve, apply, pass forward, interpret, research, recover, and remember."
      className="relative aspect-square w-full max-w-[600px] shrink-0"
    >
      <svg aria-hidden="true" className="absolute inset-0 h-full w-full" viewBox="0 0 800 800" fill="none">
        <g stroke="#a27829" strokeOpacity="0.15" strokeWidth="1.5">
          <circle cx="400" cy="400" r="380" />
          <circle cx="400" cy="400" r="305" />
          <circle cx="400" cy="400" r="228" />
          <circle cx="400" cy="400" r="150" />
        </g>
        <g stroke="#a27829" strokeOpacity="0.32" strokeWidth="1.5">
          <path d="M400 400V32M400 400 696 176M400 400 772 464M400 400 568 704M400 400 232 704M400 400 28 464M400 400 104 176" />
        </g>
      </svg>

      <div className="absolute left-1/2 top-1/2 flex h-[26%] w-[26%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-plum/40 bg-[radial-gradient(circle,#491044_0%,#310832_68%,#200522_100%)] text-center">
        <Typography as="span" variant="mdMedium" className="font-serif text-[clamp(1.15rem,2.1vw,1.5rem)]! font-medium! italic leading-[1.1] text-white">
          African<br />Sacred<br />Science
        </Typography>
      </div>

      {visionSteps.map(({ label, position }) => (
        <div key={label} className={`absolute flex -translate-x-1/2 flex-col items-center gap-3 ${position}`}>
          <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 bg-[#16091e] sm:h-12 sm:w-12">
            <span className="h-2 w-2 rounded-full bg-gold sm:h-2.5 sm:w-2.5" />
          </span>
          <Typography as="span" variant="md" className={`whitespace-nowrap text-center text-[10px]! uppercase leading-5 tracking-[0.04em] text-white/90 sm:text-sm! xl:text-base! ${label === "Pass Forward" ? "max-md:-translate-x-1/3" : ""}`}>
            {label}
          </Typography>
        </div>
      ))}
    </div>
  );
}

export function LargerVisionSection() {
  return (
    <section aria-labelledby="larger-vision-title" className="overflow-hidden bg-[linear-gradient(180deg,#0a0313_0%,#0c0317_46%,#210a35_100%)] py-16 text-white lg:min-h-[800px] lg:py-20">
      <Container className="flex flex-col items-center justify-between gap-16 min-[1025px]:min-h-[640px] min-[1025px]:flex-row min-[1025px]:gap-10">
        <div className="flex w-full min-w-0 flex-col gap-8 min-[1025px]:max-w-[575px] min-[1025px]:self-start min-[1025px]:pt-[66px]">
          <div className="flex flex-col gap-7 sm:gap-9">
            <div className="flex flex-col gap-8 sm:gap-8">
              <ScrollReveal>
                <Typography variant="xs" className="font-semibold uppercase leading-[17px] tracking-[2.42px] text-gold">The Larger Vision</Typography>
              </ScrollReveal>
              <ScrollReveal delay={0.12}>
                <Typography as="h2" id="larger-vision-title" variant="mdMedium" className="text-[clamp(2.5rem,3.4vw,3rem)]! font-medium! leading-[1.34]">
                  Africa&apos;s Wisdom<br />
                  Belongs in <span className="bg-plum-gradient bg-clip-text font-serif text-[1.12em]! italic leading-none text-transparent">Humanity&apos;s</span><br />
                  <span className="bg-plum-gradient bg-clip-text font-serif text-[1.12em]! italic leading-none text-transparent">Future.</span>
                </Typography>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.24}>
              <Typography variant="md" className="max-w-[555px] leading-[31px] text-[#c9c2ce]">African Sacred Science is not simply about returning to the past. It is about recovering what remains valuable, understanding it responsibly and asking what it can contribute to human flourishing now and in generations to come.</Typography>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.32} className="flex min-h-[50px] items-center border-l-4 border-plum bg-[linear-gradient(90deg,#3a0a39_0%,#23072e_55%,transparent_100%)] px-7 py-3">
            <Typography variant="mdMedium" className="text-lg font-semibold! leading-6 text-white">
              The Wisdom Continues
            </Typography>
          </ScrollReveal>
        </div>

        <ScrollReveal distance={0} scale={0.97} duration={0.8} className="flex w-full min-w-0 justify-center min-[1025px]:w-[600px] min-[1025px]:shrink-0">
          <VisionDiagram />
        </ScrollReveal>
      </Container>
    </section>
  );
}
