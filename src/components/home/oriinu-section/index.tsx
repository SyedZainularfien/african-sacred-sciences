import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

const topics = [
  "Personal Direction",
  "Business & Strategy",
  "Finances & Wealth",
  "Productivity & Focus",
  "Relationships",
  "Purpose",
  "Life Decisions",
  "Personal Growth",
];

const stages = [
  {
    title: "Ask",
    description:
      "Bring a real question about direction, a decision, a relationship, purpose, or what matters most.",
  },
  {
    title: "Reflect",
    description:
      "Explore what lies beneath the question through a deeper framework of understanding.",
  },
  {
    title: "Align",
    description:
      "Consider what is consistent with your values, character and direction.",
  },
  {
    title: "Act",
    description: "Move forward with greater clarity, intention and purpose.",
  },
];

export function OriinuSection() {
  return (
    <section
      id="oriinu"
      aria-labelledby="oriinu-title"
      className="bg-black py-12 text-white sm:py-16 lg:pb-[4vw] lg:pt-[2.15vw]"
    >
      <Container className="space-y-5 lg:space-y-[1.4vw]">
        <div className="relative isolate overflow-hidden rounded-[28px] border border-gold bg-[#0b0b0b] lg:rounded-[2.4vw]">
          <div className="relative z-10 px-6 pt-10 sm:px-10 sm:pt-12 lg:w-[54%] lg:px-[4.1vw] lg:py-[4.1vw] lg:pr-[2vw]">
            <Typography as="p" variant="xs" className="text-xs font-semibold uppercase tracking-[0.22em] text-gold xl:text-[clamp(0.75rem,0.9vw,1.125rem)]">
              Powered by African Sacred Science
            </Typography>

            <h2
              id="oriinu-title"
              className="mt-5 text-[clamp(2.5rem,3.45vw,5rem)] font-medium leading-[1.1] lg:mt-[1.5vw]"
            >
              Meet{" "}
              <span className="bg-plum-gradient bg-clip-text font-serif text-[1.12em] font-medium italic leading-[0.9] text-transparent">
                ORIINU<sup className="text-[0.45em]">™</sup>
              </span>
            </h2>
            <Typography as="p" variant="md" className="mt-3 text-[clamp(1.25rem,1.95vw,2.75rem)] font-medium leading-tight text-gold lg:mt-[0.9vw]">
              Awaken Your Inner Intelligence.
            </Typography>

            <Typography as="p" variant="md" className="mt-7 text-md leading-[1.85] text-white/70 lg:mt-[2.2vw] xl:text-[clamp(1rem,1.15vw,1.625rem)]">
              ORIINU is the AI-powered personal intelligence experience within
              the African Sacred Science ecosystem. It brings African Sacred
              Science into conversation with the questions, decisions and
              opportunities of everyday life.
            </Typography>

            <Typography as="p" variant="md" className="mt-8 text-md leading-relaxed text-white/85 lg:mt-[2.7vw] xl:text-[clamp(1rem,1.15vw,1.625rem)]">
              Use ORIINU to explore questions involving:
            </Typography>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:mt-[1.65vw] lg:gap-[0.55vw]">
              {topics.map((topic) => (
                <li
                  key={topic}
                  className="flex items-center gap-3 rounded-xl border border-gold/20 bg-white/5 px-4 py-3 text-sm leading-snug text-white/70 lg:rounded-[0.7vw] lg:px-[1vw] lg:py-[0.72vw] xl:text-[clamp(0.875rem,1vw,1.375rem)]"
                >
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                  />
                  {topic}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto mt-5 aspect-[1126/1276] w-full max-w-[480px] lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:aspect-auto lg:w-[43%] lg:max-w-none">
            <Image
              src="/images/meet-oriunu.png"
              alt="A luminous blue profile traced with golden lines and points of light"
              fill
              sizes="(min-width: 1024px) 39vw, (min-width: 640px) 480px, 90vw"
              className="object-contain object-right"
            />
          </div>
        </div>

        <section
          aria-labelledby="oriinu-stages-title"
          style={{
            backgroundImage: 'url("/images/how-orinnu-works-bg.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="relative isolate overflow-hidden rounded-[28px] border border-gold bg-black px-6 py-10 sm:px-10 sm:py-12 lg:rounded-[2.4vw] lg:px-[2.7vw] lg:py-[4.1vw]"
        >
          <Typography as="p" variant="xs" className="text-xs font-semibold uppercase tracking-[0.22em] text-gold xl:text-[clamp(0.75rem,0.9vw,1.125rem)]">
            How ORIINU Works
          </Typography>
          <h2
            id="oriinu-stages-title"
            className="mt-4 text-[clamp(2rem,3.45vw,5rem)] font-medium leading-[1.15] lg:mt-[1vw]"
          >
            Four Stages of{" "}
            <span className="bg-plum-gradient bg-clip-text font-serif text-[1.12em] font-medium italic leading-[0.9] text-transparent">
              Clarity
            </span>
          </h2>

          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-[2.5vw] lg:grid-cols-4 lg:gap-[1.3vw]">
            {stages.map(({ title, description }, index) => (
              <li
                key={title}
                className="rounded-[24px] border border-gold/20 bg-black px-6 py-8 lg:min-h-[18.8vw] lg:rounded-[1.4vw] lg:pl-[2vw] lg:pr-[0.9vw] lg:py-[2.5vw]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-xs font-semibold lg:h-[2.5vw] lg:w-[2.5vw] xl:text-[clamp(0.75rem,0.8vw,1.125rem)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-2xl font-semibold lg:mt-[1.5vw] xl:text-[clamp(1.5rem,1.7vw,2.5rem)]">
                  {title}
                </h3>
                <Typography as="p" variant="md" className="mt-3 text-md leading-[1.7] text-white/70 lg:mt-[1vw] xl:text-[clamp(1rem,1vw,1.5rem)]">
                  {description}
                </Typography>
              </li>
            ))}
          </ol>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:mt-[2.1vw] lg:gap-[1.4vw]">
            <Button className="max-sm:w-full lg:min-h-[4.15vw] lg:min-w-[13vw] lg:px-[2.4vw] lg:py-[1.2vw] lg:[&>span]:text-[1.15vw]">
              Launch ORIINU
            </Button>
            <Button
              variant="outline"
              showArrow
              className="bg-black max-sm:w-full lg:min-h-[4.15vw] lg:min-w-[20.4vw] lg:px-[2.4vw] lg:py-[1.2vw] lg:[&>span]:text-[1.15vw]"
            >
              Learn How ORIINU Works
            </Button>
          </div>
        </section>
      </Container>
    </section>
  );
}
