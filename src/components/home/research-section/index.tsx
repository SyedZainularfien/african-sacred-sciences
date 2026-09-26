import { Typography } from "@/components/ui/typography";
import { Container } from "@/components/layout/container";

const researchSources = [
  ["African scholars", "Historical sources", "African-language terminology"],
  ["Philosophical traditions", "Documented indigenous knowledge"],
  ["Contemporary African researchers", "Contemporary scholarship"],
];

const knowledgeCategories = [
  "Documented Knowledge",
  "Living Traditions",
  "Scholarly Interpretation",
  "Areas of Debate",
  "Contemporary Application",
];

export function ResearchSection() {
  return (
    <section
      id="research"
      aria-labelledby="research-title"
      className="bg-background-yellow py-16 text-[#292929] sm:py-20 lg:min-h-[53.6vw] lg:pb-[12.7vw] lg:pt-[6.9vw]"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 10% 22%, rgba(107, 27, 92, 0.045), transparent 34%)",
      }}
    >
      <Container className="grid items-start gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-[5.5vw]">
        <div className="min-w-0">
          <Typography as="p" variant="xs" className="text-xs font-semibold uppercase tracking-[0.22em] text-gold xl:text-[clamp(0.75rem,0.9vw,1.125rem)]">
            Behind the Knowledge
          </Typography>
          <h2
            id="research-title"
            className="mt-5 text-[clamp(2.5rem,3.7vw,6.5rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-[#10051d] lg:mt-[1.5vw]"
          >
            Research Matters.
          </h2>

          <div className="mt-6 space-y-6 text-md leading-[1.85] lg:mt-[1.85vw] lg:space-y-[1.7vw] xl:text-[clamp(1rem,1.15vw,2rem)]">
            <Typography as="p" variant="md">
              African knowledge deserves seriousness, documentation and intellectual
              care. African Sacred Science is being developed through an expanding
              research initiative.
            </Typography>
            <Typography as="p" variant="md">
              Our approach seeks to distinguish among different categories of
              knowledge, ensuring intellectual honesty and responsible presentation
              of African wisdom traditions.
            </Typography>
          </div>

          <div className="mt-7 space-y-2.5 lg:mt-[2.4vw] lg:space-y-[0.7vw]">
            {researchSources.map((row) => (
              <ul key={row[0]} className="flex flex-wrap gap-2.5 lg:gap-[1vw]">
                {row.map((source) => (
                  <li
                    key={source}
                    className="max-w-full rounded-full border border-plum/20 bg-plum/[0.07] px-4 py-2 text-sm leading-snug text-[#4c414b] lg:px-[1.15vw] lg:py-[0.65vw] xl:text-[clamp(0.875rem,1vw,1.75rem)]"
                  >
                    {source}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="min-w-0 space-y-5 lg:space-y-[1.4vw]">
          <div className="rounded-[24px] border border-gold/20 bg-[linear-gradient(155deg,#10031d_0%,#320c35_50%,#651958_100%)] px-6 py-7 text-white sm:px-8 lg:rounded-[1.4vw] lg:px-[2.5vw] lg:py-[2.1vw]">
            <Typography as="p" variant="sm" className="text-sm font-semibold xl:text-[clamp(0.875rem,1vw,1.75rem)]">
              Institution
            </Typography>
            <h3 className="mt-2 text-2xl font-medium leading-[1.35] lg:mt-[0.5vw] xl:text-[clamp(1.25rem,1.75vw,3rem)]">
              African Sacred Science Research Institute<sup className="text-[0.5em]">™</sup>
            </h3>
            <Typography as="p" variant="xl" className="mt-4 font-serif text-xl font-medium italic leading-[1.4] text-gold lg:mt-[0.8vw] xl:text-[clamp(1.125rem,1.25vw,2.125rem)]">
              Preserving Africa&apos;s Wisdom. Illuminating Humanity&apos;s Future.
            </Typography>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-plum/20 lg:rounded-[1.4vw]">
            <h3 className="bg-plum/[0.07] px-5 py-5 text-lg font-semibold text-plum sm:px-7 lg:px-[1.65vw] lg:py-[1.3vw] xl:text-[clamp(1rem,1.15vw,2rem)]">
              Knowledge Integrity Framework
            </h3>
            <ul>
              {knowledgeCategories.map((category) => (
                <li
                  key={category}
                  className="flex items-center gap-4 border-t border-plum/[0.06] px-5 py-4 text-md leading-[1.4] odd:bg-white/55 sm:px-7 lg:gap-[1vw] lg:px-[1.65vw] lg:py-[1vw] xl:text-[clamp(0.875rem,1vw,1.75rem)]"
                >
                  <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold lg:h-[0.4vw] lg:w-[0.4vw]" />
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
