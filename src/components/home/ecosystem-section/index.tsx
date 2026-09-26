import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import styles from "./ecosystem-section.module.css";

const ecosystem = [
  {
    category: "Personal Intelligence",
    title: "ORIINU",
    trademark: true,
    description: "Interactive AI-powered guidance and reflection.",
    action: "Launch ORIINU",
    image: "oriinu.png",
    width: 195,
    height: 231,
    imageClassName: "w-[76%]",
  },
  {
    category: "Research & Preservation",
    title: "African Sacred Science Research Institute",
    trademark: true,
    description: "Scholarly research, source development and knowledge preservation.",
    action: "Explore the Institute",
    image: "africa-sacred-sciences.png",
    width: 243,
    height: 230,
    imageClassName: "w-[95%]",
  },
  {
    category: "Learning & Formation",
    title: "The Enlightenment Academy",
    trademark: true,
    description: "Courses, formation journeys and deeper study.",
    action: "Explore the Academy",
    image: "enlighten.png",
    width: 258,
    height: 258,
    imageClassName: "w-full",
  },
  {
    category: "Read & Study",
    title: "Books & Publications",
    trademark: false,
    description: "Books, journals, formation texts and other resources.",
    action: "Explore Publications",
    image: "book&publications.png",
    width: 254,
    height: 182,
    imageClassName: "w-full",
  },
] as const;

export function EcosystemSection() {
  return (
    <section
      id="ecosystem"
      aria-labelledby="ecosystem-title"
      className={`${styles.section} bg-[#0d0319] py-16 text-white sm:py-20`}
    >
      <Container className="flex flex-col gap-10 sm:gap-12 lg:gap-[3.7vw]">
        <header className="flex flex-col items-center gap-4 text-center lg:gap-[1vw]">
          <Typography as="p" variant="xs" className="text-xs font-semibold uppercase tracking-[0.22em] text-gold xl:text-[clamp(0.75rem,0.9vw,1.5rem)]">
            The Ecosystem
          </Typography>
          <h2
            id="ecosystem-title"
            className="flex flex-col text-[clamp(2rem,3.4vw,6rem)] font-medium leading-[1.15]"
          >
            <span>One Body of Knowledge.</span>
            <span>
              Multiple Ways to{" "}
              <span className="bg-plum-gradient bg-clip-text font-serif text-[1.12em] font-medium italic leading-[0.9] text-transparent">
                Encounter It.
              </span>
            </span>
          </h2>
        </header>

        <ul className="flex flex-wrap gap-5 lg:gap-[1.3vw]">
          {ecosystem.map((item) => (
            <li
              key={item.title}
              className="flex w-full items-center justify-between gap-4 rounded-[24px] border border-plum bg-black px-5 py-8 sm:gap-7 sm:px-8 lg:min-h-[17vw] lg:w-[calc((100%_-_1.3vw)/2)] lg:gap-[2vw] lg:rounded-[1.4vw] lg:px-[2.2vw] lg:py-[1.3vw]"
            >
              <div className="flex min-w-0 flex-1 flex-col gap-6 lg:gap-[1.8vw]">
                <div className="flex flex-col gap-3 lg:gap-[0.8vw]">
                  <Typography as="p" variant="md" className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-gold sm:text-xs xl:text-[clamp(0.75rem,0.9vw,1.5rem)]">
                    {item.category}
                  </Typography>
                  <h3 className="text-xl font-semibold leading-[1.3] sm:text-2xl xl:text-[clamp(1.25rem,1.7vw,3rem)]">
                    {item.title}
                    {item.trademark ? <sup className="text-[0.5em]">™</sup> : null}
                  </h3>
                  <Typography as="p" variant="sm" className="text-sm leading-[1.55] text-white/70 sm:text-md xl:text-[clamp(1rem,1.15vw,2rem)]">
                    {item.description}
                  </Typography>
                </div>

                <button
                  type="button"
                  className="flex w-fit items-center gap-2 rounded-sm text-left text-sm font-semibold tracking-[0.06em] text-[#e5be68] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold xl:text-[clamp(0.875rem,1vw,1.75rem)]"
                >
                  {item.action}
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[1em] w-[1em] shrink-0">
                    <path d="M4 12h16m-7-7 7 7-7 7" />
                  </svg>
                </button>
              </div>

              <div className="flex w-16 shrink-0 items-center justify-center sm:w-28 lg:w-[9vw]">
                <Image
                  src={`/images/the-ecosystem/${item.image}`}
                  alt=""
                  width={item.width}
                  height={item.height}
                  sizes="(min-width: 1024px) 9vw, (min-width: 640px) 112px, 64px"
                  className={`h-auto object-contain ${item.imageClassName}`}
                />
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
