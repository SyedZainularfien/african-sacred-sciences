import { Container } from "@/components/layout/container";
import { Typography } from "@/components/ui/typography";

export function DoctrineIntroductionSection() {
  return (
    <section aria-label="About the Doctrine of Divine Alignment" className="bg-background-yellow py-16 text-full-black lg:pb-[88px] lg:pt-[99px]">
      <Container>
        <div className="mx-auto flex w-full max-w-[900px] flex-col gap-10 lg:gap-14">
          <Typography
            as="blockquote"
            variant="mdMedium"
            className="border-l-4 border-plum bg-[linear-gradient(90deg,#e0cfd0_0%,#e5d9d1_43%,#efe9dc_100%)] px-6 py-7 font-serif! text-[clamp(1.75rem,3vw,2.25rem)]! font-normal! italic leading-[1.4] sm:px-9 lg:py-[31px]"
          >
            The Doctrine of Divine Alignment<sup className="text-[0.5em]!">TM</sup> provides a unifying philosophical foundation for African Sacred Science while respecting the diversity of Africa&apos;s spiritual, philosophical and knowledge traditions.
          </Typography>

          <div className="flex flex-col gap-8 lg:gap-9">
            <Typography variant="md" className="leading-[31px] text-[#282828]">
              It is not a claim that Africa has one single belief system or one unified spiritual tradition. African Sacred Science recognises and respects the profound diversity of African civilisations, peoples, languages and philosophical lineages.
            </Typography>
            <Typography variant="md" className="leading-[31px] text-[#282828]">
              Rather, the Doctrine of Divine Alignment invites us to examine a set of relationships that appear — in various forms and expressions — across many of Africa&apos;s wisdom traditions: the relationship between the inner self and outer life, between character and action, between individual purpose and communal responsibility, between human choices and the larger order within which human life unfolds.
            </Typography>
          </div>
        </div>
      </Container>
    </section>
  );
}
