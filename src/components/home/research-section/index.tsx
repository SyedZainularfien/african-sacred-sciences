import { Typography } from "@/components/ui/typography";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";


import { researchSources, knowledgeCategories } from "@/constants/home";

export function ResearchSection() {
  return (
    <section id="research" aria-labelledby="research-title" className="bg-background-yellow py-16 text-[#292929] sm:py-20 lg:min-h-[772px] lg:pb-[167px] lg:pt-[99px]" style={{ backgroundImage: "radial-gradient(ellipse at 10% 22%, rgba(107, 27, 92, 0.045), transparent 34%)" }}>
      <Container className="flex flex-col items-start gap-10 sm:gap-12 lg:flex-row lg:gap-20">
        <div className="flex min-w-0 flex-1 flex-col gap-10 sm:gap-12">
          <div className="flex flex-col gap-10 sm:gap-12">
            <ScrollReveal as="header" className="flex flex-col gap-8 sm:gap-8">
              <Typography variant="xs" className="font-semibold uppercase leading-[17px] tracking-[2.42px] text-gold">Behind the Knowledge</Typography>
              <Typography as="h2" variant="mdMedium" id="research-title" className="[font-size:clamp(2.5rem,3.75vw,3.375rem)]! leading-[1.2] lg:leading-[57px] text-[#10051d]">Research Matters.</Typography>
            </ScrollReveal>
            <ScrollReveal delay={0.15} className="flex flex-col gap-8 sm:gap-8 [&>p]:leading-[30.94px]">
              <Typography variant="md">African knowledge deserves seriousness, documentation and intellectual care. African Sacred Science is being developed through an expanding research initiative.</Typography>
              <Typography variant="md">Our approach seeks to distinguish among different categories of knowledge, ensuring intellectual honesty and responsible presentation of African wisdom traditions.</Typography>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.24} className="flex flex-col gap-[10px]">
            {researchSources.map((row) => (
              <ul key={row[0]} className="flex flex-wrap gap-[15px]">
                {row.map((source) => (
                  <li key={source} className="max-w-full rounded-full border border-plum/20 bg-plum/[0.07] px-4 py-2 text-[#4c414b]">
                    <Typography as="span" variant="sm" className="block leading-[19.5px]">{source}</Typography>
                  </li>
                ))}
              </ul>
            ))}
          </ScrollReveal>
        </div>
        <div className="flex w-full min-w-0 flex-1 flex-col gap-5">
          <ScrollReveal delay={0.12} className="flex flex-col gap-6 rounded-[20px] border border-gold/20 bg-[linear-gradient(155deg,#10031d_0%,#320c35_50%,#651958_100%)] px-6 pb-[52px] pt-8 text-white sm:gap-4 sm:px-9">
            <Typography variant="sm" className="font-semibold leading-[15px]">Institution</Typography>
            <Typography as="h3" variant="mdMedium" className="[font-size:1.5rem]! leading-[26px]">African Sacred Science Research Institute<sup className="[font-size:0.5em]!">™</sup></Typography>
            <Typography variant="mdMedium" className="font-serif [font-size:18px]! italic leading-6 text-gold">Preserving Africa&apos;s Wisdom. Illuminating Humanity&apos;s Future.</Typography>
          </ScrollReveal>
          <ScrollReveal delay={0.22} className="overflow-hidden rounded-[20px] border border-plum/20">
            <Typography as="h3" variant="md" className="flex min-h-[60px] items-center bg-plum/[0.07] px-6 py-[14px] font-semibold leading-[17px] text-plum">Knowledge Integrity Framework</Typography>
            <ul className="flex flex-col">
              {knowledgeCategories.map((category) => (
                <li key={category} className="flex items-center gap-[14px] border-t border-plum/[0.06] px-6 py-[14px] odd:bg-white/55">
                  <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <Typography as="span" variant="sm" className="leading-[21px]">{category}</Typography>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
