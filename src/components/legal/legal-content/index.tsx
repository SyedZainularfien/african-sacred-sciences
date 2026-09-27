import { Container } from "@/components/layout/container";
import { Typography } from "@/components/ui/typography";
import type { LegalSection } from "@/constants/legal";

interface LegalContentProps {
  title: string;
  sections: readonly LegalSection[];
}

export function LegalContent({ title, sections }: LegalContentProps) {
  return (
    <main className="relative isolate overflow-hidden bg-black py-16 text-white sm:py-20 lg:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-0 -z-10 h-72 w-72 rounded-full bg-gold/20 blur-3xl sm:h-96 sm:w-96" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-28 bottom-0 -z-10 h-72 w-72 rounded-full bg-plum/30 blur-3xl sm:h-96 sm:w-96" />
      <Container className="flex max-w-[1120px] flex-col gap-10 sm:gap-12">
        <Typography as="h1" variant="h1" className="text-[clamp(2.5rem,5vw,3.5rem)]! leading-[1.1] text-white">
          {title}
        </Typography>
        <div className="rounded-[28px] bg-[linear-gradient(55deg,#303030_0%,#303030_80%,#c69b34_100%)] p-px sm:rounded-[32px]">
          <div className="flex flex-col gap-9 rounded-[27px] bg-[linear-gradient(115deg,#080808_0%,#1a1a1a_100%)] p-6 sm:gap-11 sm:rounded-[31px] sm:p-8 lg:p-10">
            {sections.map((section, index) => (
              <section key={`${index}-${section.title}`} aria-labelledby={`legal-section-${index}`} className="flex flex-col gap-3">
                <Typography as="h2" id={`legal-section-${index}`} variant="h6" className="font-sans! font-semibold leading-[1.3] text-white">
                  {index === 0 ? <><span className="block">1.</span>{section.title}</> : `${index + 1}. ${section.title}`}
                </Typography>
                {section.paragraphs?.map((paragraph, paragraphIndex) => (
                  <Typography key={paragraphIndex} variant="sm" className="leading-[1.6] text-white/70">
                    {paragraph}
                  </Typography>
                ))}
                {section.items && (
                  <ul className="flex list-disc flex-col gap-0 pl-5 text-white/70">
                    {section.items.map((item) => (
                      <li key={item}>
                        <Typography as="span" variant="sm" className="leading-[1.6]">{item}</Typography>
                      </li>
                    ))}
                  </ul>
                )}
                {section.closing && <Typography variant="sm" className="leading-[1.6] text-white/70">{section.closing}</Typography>}
                {section.contact && (
                  <div className="flex flex-col gap-1">
                    <Typography variant="sm" className="leading-[1.6] text-white/70"><strong className="text-white">Email:</strong> support@oriinu.ai</Typography>
                    <Typography variant="sm" className="leading-[1.6] text-white/70"><strong className="text-white">Website:</strong> www.oriinu.ai</Typography>
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
