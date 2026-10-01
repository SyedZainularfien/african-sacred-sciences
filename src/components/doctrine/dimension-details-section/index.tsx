import { Container } from "@/components/layout/container";
import { DimensionIcon } from "@/components/doctrine/dimension-icon";
import { Typography } from "@/components/ui/typography";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import headingSpacing from "@/components/doctrine/heading-spacing.module.css";
import { DOCTRINE_DIMENSION_DETAILS } from "@/constants/doctrine";

export function DoctrineDimensionDetailsSection() {
  return (
    <section
      id="dimension-details"
      aria-labelledby="dimension-details-title"
      className="bg-background-yellow py-16 text-full-black lg:pb-[100px] lg:pt-20"
    >
      <Container className="flex flex-col items-center gap-12 sm:gap-14 lg:gap-16">
        <ScrollReveal className={`${headingSpacing.group} flex flex-col items-center gap-8 text-center sm:gap-5`}>
          <Typography
            as="span"
            variant="xs"
            className="font-semibold uppercase tracking-[0.25em] text-gold"
          >
            Each Dimension
          </Typography>
          <Typography
            as="h2"
            id="dimension-details-title"
            variant="mdMedium"
            className="text-[clamp(2.5rem,4vw,2.75rem)]! leading-[1.2]"
          >
            Understanding the
            <br />
            Dimensions of{" "}
            <span className="bg-plum-gradient bg-clip-text font-serif text-[1.08em]! italic text-transparent">
              Alignment
            </span>
          </Typography>
        </ScrollReveal>

        <div className="flex w-full max-w-[1200px] flex-col gap-7">
          {DOCTRINE_DIMENSION_DETAILS.map(
            (
              { name, alignment, summary, icon, paragraphs, reflection },
              index,
            ) => (
              <ScrollReveal
                as="article"
                key={name}
                distance={18}
                className="flex flex-col overflow-hidden rounded-[20px] border border-[#e6d9cf] bg-[#faf8f4] lg:flex-row"
              >
                <div
                  className={`flex flex-col justify-center gap-6 px-8 sm:gap-6 py-9 text-white lg:w-[280px] lg:shrink-0 lg:px-9 ${index % 2 === 0 ? "bg-[linear-gradient(135deg,#10051d,#2b0d3d)]" : "bg-[linear-gradient(135deg,#26072f,#6d195d)]"}`}
                >
                  <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-gold/35 bg-gold/[0.06]">
                    <DimensionIcon icon={icon} className="h-6 w-6" />
                  </span>
                  <div className="flex flex-col gap-4 sm:gap-2">
                    <Typography
                      as="h3"
                      variant="xl"
                      className="font-medium leading-[1.2]"
                    >
                      {name}
                    </Typography>
                    <Typography
                      as="span"
                      variant="xs"
                      className="font-semibold uppercase tracking-[0.18em] text-gold"
                    >
                      {alignment}
                    </Typography>
                  </div>
                  <Typography
                    variant="sm"
                    className="font-serif! text-[16px]! italic leading-[1.45] text-white/70"
                  >
                    {summary}
                  </Typography>
                </div>

                <div className="flex min-w-0 flex-1 flex-col justify-between gap-6 px-6 sm:gap-8 py-9 sm:px-9 lg:px-11 lg:pb-9 lg:pt-11">
                  <div className="flex flex-col gap-6 sm:gap-4">
                    {paragraphs.map((paragraph) => (
                      <Typography
                        key={paragraph}
                        variant="md"
                        className="leading-[30px] text-[#282828]"
                      >
                        {paragraph}
                      </Typography>
                    ))}
                  </div>
                  <div className="flex flex-col gap-4 rounded-[14px] sm:gap-2 border border-l-4 border-plum bg-plum/[0.055] px-5 py-4">
                    <Typography
                      as="span"
                      variant="sm"
                      className="font-semibold text-plum"
                    >
                      A Reflection
                    </Typography>
                    <Typography
                      as="span"
                      variant="md"
                      className="font-serif! text-[17px]! italic leading-[1.4] text-[#282828]"
                    >
                      &quot;{reflection}&quot;
                    </Typography>
                  </div>
                </div>
              </ScrollReveal>
            ),
          )}
        </div>
      </Container>
    </section>
  );
}
