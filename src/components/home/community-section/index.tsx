import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

const principles = [
  {
    name: "Orí Inú",
    alignment: "Inner Alignment",
    description: "The inner self, consciousness and sense of direction.",
    icon: "1.png",
  },
  {
    name: "Ìwà Pẹ̀lẹ́",
    alignment: "Character Alignment",
    description: "The cultivation of sacred character, integrity and responsible conduct.",
    icon: "2.png",
  },
  {
    name: "Àyànmọ̀",
    alignment: "Purpose Alignment",
    description: "Living consciously in relationship with destiny, calling and meaningful purpose.",
    icon: "3.png",
  },
  {
    name: "Àṣẹ",
    alignment: "Creative Alignment",
    description: "Bringing speech, intention and action into responsible creative expression.",
    icon: "4.png",
  },
  {
    name: "Community",
    alignment: "Relational Alignment",
    description: "Individual flourishing is inseparable from responsibility, relationship and community.",
    icon: "5.png",
  },
] as const;

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
  return (
    <section
      aria-labelledby="divine-alignment-title"
      className="relative isolate overflow-hidden py-16 text-white sm:py-20 lg:py-24 xl:pb-[5.65vw] xl:pt-[8.6vw]"
      style={{
        background:
          "radial-gradient(80% 65% at 50% 50%, rgba(107, 27, 92, 0.22) 0%, rgba(85, 22, 98, 0.15) 27.5%, rgba(25, 7, 115, 0.08) 55%, rgba(25, 7, 115, 0) 75%), linear-gradient(180deg, #020104 0%, #180619 40%, #320a2d 100%)",
      }}
    >
      <AlignmentDiagram />

      <Container className="relative z-10">
        <header className="mx-auto max-w-[1100px] text-center">
          <Typography as="p" variant="xs" className="text-xs font-semibold uppercase tracking-[0.2em] text-gold sm:text-sm xl:text-[clamp(0.75rem,0.92vw,1rem)]">
            The Foundational Philosophy
          </Typography>

          <h2
            id="divine-alignment-title"
            className="mt-5 font-sans text-[clamp(2rem,3.45vw,4rem)] font-normal leading-[1.15] xl:mt-[1.8vw]"
          >
            <span>The Doctrine of </span>
            <span className="bg-plum-gradient bg-clip-text font-serif text-[clamp(2.75rem,3.8vw,4.5rem)] font-bold italic text-transparent">
              Divine Alignment<sup className="align-super text-[0.45em] not-italic">™</sup>
            </span>
          </h2>

          <Typography as="p" variant="md" className="mx-auto mt-6 max-w-[860px] text-md leading-7 text-white/70 sm:mt-8 sm:leading-8 xl:mt-[2.4vw] xl:max-w-[47vw] xl:text-[clamp(1rem,1.15vw,1.375rem)] xl:leading-[1.85]">
            At the heart of African Sacred Science™ is the principle of Divine Alignment: that
            human flourishing is strengthened when our inner life, character, purpose, choices and
            actions come into greater alignment with Divine order.
          </Typography>

          <Typography as="p" variant="md" className="mx-auto mt-8 max-w-[980px] text-md leading-7 text-white/70 sm:mt-10 sm:leading-8 xl:mt-[3.2vw] xl:max-w-[54vw] xl:text-[clamp(1rem,1.15vw,1.375rem)] xl:leading-[1.85]">
            The Doctrine of Divine Alignment™ provides a unifying philosophical foundation for
            African Sacred Science while respecting the diversity of Africa&apos;s spiritual,
            philosophical and knowledge traditions. It invites us to examine the relationship
            between:
          </Typography>
        </header>

        <ul className="mx-auto mt-12 grid max-w-[1540px] gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 xl:mt-[4.5vw] xl:w-[92.5%] xl:grid-cols-5 xl:gap-3">
          {principles.map(({ name, alignment, description, icon }) => (
            <li
              key={name}
              className="flex flex-col items-center rounded-[20px] border border-gold/18 bg-white/[0.035] px-5 py-7 text-center sm:px-6 xl:min-h-[18.75vw] xl:px-[1.7vw] xl:pb-[1.4vw] xl:pt-[2.2vw]"
            >
              <Image
                src={`/images/foundational-philosophy/${icon}`}
                alt=""
                width={88}
                height={88}
                className="h-11 w-11 object-contain xl:h-[3.15vw] xl:max-h-14 xl:w-[3.15vw] xl:max-w-14"
              />
              <h3 className="mt-3 text-lg font-normal leading-tight xl:mt-[1vw] xl:text-[clamp(1rem,1.15vw,1.375rem)]">{name}</h3>
              <Typography as="p" variant="xs" className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-gold xl:text-[clamp(0.625rem,0.85vw,1rem)]">
                {alignment}
              </Typography>
              <span aria-hidden="true" className="my-4 h-px w-6 shrink-0 bg-gold/20 xl:my-[1vw]" />
              <Typography as="p" variant="sm" className="max-w-[240px] text-sm leading-6 text-white/75 xl:text-[clamp(0.875rem,1.03vw,1.25rem)] xl:leading-[1.45]">
                {description}
              </Typography>
            </li>
          ))}
        </ul>

        <Typography as="p" variant="md" className="mx-auto mt-12 max-w-[850px] border-y border-gold/10 py-7 text-center font-serif text-[clamp(1.75rem,2vw,2.5rem)] font-normal italic leading-[1.3] text-gold sm:mt-14 lg:mt-16 xl:mt-[5vw] xl:w-[42%] xl:py-[2.5vw]">
          Alignment is not a destination. It is a way of living.
        </Typography>

        <div className="mx-auto mt-8 w-full max-w-[360px] sm:mt-10 xl:mt-[2.8vw]">
          <Button width="full" className="uppercase tracking-[0.1em]" showArrow>
            Explore the Doctrine
          </Button>
        </div>
      </Container>
    </section>
  );
}
