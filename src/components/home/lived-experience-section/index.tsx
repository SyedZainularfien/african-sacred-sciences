import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import { Container } from "@/components/layout/container";

const reflectionQuestions = [
  "What should I do?",
  "What am I not seeing?",
  "What is truly important here?",
  "What aligns with my values?",
  "How should I move forward?",
];

export function LivedExperienceSection() {
  return (
    <section
      aria-labelledby="lived-experience-title"
      className="bg-background-yellow py-16 text-full-black sm:py-20 lg:py-[7.8vw]"
    >
      <Container className="grid items-center gap-10 sm:gap-12 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1fr)] lg:gap-[4.3vw]">
        <div className="min-w-0">
          <Typography as="p" variant="xs" className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            From Knowledge to Lived Experience
          </Typography>

          <h2
            id="lived-experience-title"
            className="mt-4 font-sans text-[clamp(2rem,3.4vw,4rem)] font-medium leading-[1.08]"
          >
            African Sacred Science
            <br />
            Is Meant to{" "}
            <span className="inline-block bg-plum-gradient bg-clip-text font-serif text-[1.12em] font-bold italic text-transparent">
              Be Lived
            </span>
          </h2>

          <Typography as="p" variant="md" className="mt-4 max-w-[720px] text-md leading-relaxed text-full-black/90 xl:mt-7 xl:max-w-[90%] xl:text-md font-normal">
            Knowledge becomes transformative when it speaks to the questions,
            decisions and realities we actually face.
          </Typography>

          <ul className="mt-8 grid gap-3 lg:mt-[3.7vw] lg:max-w-[89%]">
            {reflectionQuestions.map((question) => (
              <li
                key={question}
                className="rounded-[20px] border border-plum/18 bg-plum/[0.07] px-5 py-5 text-md font-medium leading-snug sm:px-7 lg:px-[2.2vw] lg:py-[1.65vw] xl:text-lg 2xl:text-xl"
              >
                {question}
              </li>
            ))}
          </ul>

          <Typography as="p" variant="md" className="mt-7 border-l-4 border-gold bg-[linear-gradient(90deg,#eec97c,transparent)] px-5 py-3 text-md font-semibold leading-snug sm:px-7 lg:mt-[2.1vw] xl:text-lg 2xl:text-xl">
            This Is Where ORIINU™ Comes To Life.
          </Typography>
        </div>

        <Image
          src="/images/knowledge-live-exp-right-section.png"
          alt="Two speakers sharing African Sacred Science with a seated audience"
          width={1280}
          height={1414}
          sizes="(min-width: 1024px) 45vw, (min-width: 768px) 640px, 100vw"
          className="mx-auto h-auto w-full max-w-[640px] lg:max-w-none"
        />
      </Container>
    </section>
  );
}
