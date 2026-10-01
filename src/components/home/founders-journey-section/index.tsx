import { Container } from "@/components/layout/container";
import { Typography } from "@/components/ui/typography";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

import { milestones } from "@/constants/home";

export function FoundersJourneySection() {
  return (
    <section aria-labelledby="founders-journey-title" className="bg-black pb-[60px] pt-4 text-white sm:pt-10">
      <Container className="flex flex-col items-start gap-8 xl:flex-row xl:gap-12">
        <div className="flex w-full min-w-0 flex-col gap-8 sm:gap-5 xl:max-w-[803px] xl:flex-1">
          <div className="flex flex-col gap-11 sm:gap-14">
            <ScrollReveal>
              <Typography
              as="h2"
              variant="mdMedium"
              id="founders-journey-title"
              className="[font-size:clamp(1.625rem,2.1vw,1.875rem)]! font-bold! leading-[1.3] text-white xl:max-w-[750px]"
            >
              A shared journey rooted in spiritual wisdom, practical intelligence, and generational purpose.
              </Typography>
            </ScrollReveal>

            <ScrollReveal delay={0.12} className="flex flex-col gap-6 text-[#bdbdbd] sm:gap-8">
              <Typography variant="xl" className="leading-[36px]">
                Their combined experience spans banking and finance, international consulting,
                entrepreneurship, organizational leadership, spiritual formation, publishing,
                education, and humanitarian service.
              </Typography>
              <Typography variant="xl" className="leading-[36px]">
                Yet their work has never been defined by professional achievement alone.
              </Typography>
              <Typography variant="xl" className="leading-[36px]">
                At the heart of their shared journey is a lifelong commitment to understanding the
                spiritual principles that shape consciousness, character, relationships, prosperity,
                leadership, destiny, and generational legacy. Both hold doctoral degrees in Holistic
                Life Counseling and bring to their teaching African cultural memory, spiritual wisdom,
                financial intelligence, entrepreneurial experience, and practical knowledge of human
                transformation.
              </Typography>
            </ScrollReveal>
          </div>

          <div className="flex flex-col gap-12">
            <ScrollReveal className="flex flex-col gap-6 rounded-[20px] border border-plum bg-[linear-gradient(135deg,#17031d,#3c1037)] px-[30px] py-10 sm:gap-4">
              <Typography as="h3" variant="sm" className="font-semibold! uppercase leading-5 tracking-[1.2px] text-gold">
                Core Principles
              </Typography>
              <Typography variant="lg" className="[font-size:17px]! leading-[34px] text-[#c9bec8]">
                Their approach refuses to separate the spiritual from the practical. They understand
                that consciousness influences decisions; character shapes how power is used;
                prosperity carries responsibility; leadership must serve a purpose greater than
                personal recognition; and true success should leave a blessing for generations yet to
                come.
              </Typography>
            </ScrollReveal>

            <ScrollReveal className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-8">
                <Typography variant="xl" className="leading-[36px] text-[#bdbdbd]">
                  Their leadership is grounded in one shared conviction:
                </Typography>
                <div className="flex flex-col gap-8 rounded-[20px] border border-plum bg-black px-[38px] py-10 sm:gap-4">
                  <Typography as="h3" variant="mdMedium" className="[font-size:26px]! font-semibold! leading-[42px] text-white">
                    Africa&apos;s wisdom is not merely an inheritance to be admired.
                  </Typography>
                  <Typography variant="xl" className="leading-[36px] text-[#bdbdbd]">
                    It is a living source of knowledge, consciousness, and spiritual intelligence
                    with the power to illuminate humanity&apos;s future.
                  </Typography>
                </div>
              </div>
              <div className="flex min-h-[60px] items-center justify-center border-x-4 border-plum bg-[radial-gradient(ellipse_at_center,#390a2e_0%,#170515_58%,#000_100%)] px-4 text-center">
                <Typography variant="mdMedium" className="font-serif! [font-size:20px]! leading-7 text-white">
                  Remember . Align . Flourish.
                </Typography>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="flex w-full min-w-0 flex-col gap-6 xl:w-[433px] xl:shrink-0">
          <ScrollReveal delay={0.1} className="flex flex-col gap-8 rounded-[23px] border border-gold px-[25px] py-10 sm:gap-4">
            <Typography as="h3" variant="sm" className="font-semibold! uppercase leading-5 tracking-[1.2px] text-gold">
              Three Decades of Shared Service
            </Typography>
            <ol className="flex flex-col gap-8 sm:gap-[18px]">
              {milestones.map(({ title, description }, index) => (
                <li key={title} className="flex gap-[22px]">
                  <div aria-hidden="true" className="flex w-4 shrink-0 flex-col items-center gap-[9px]">
                    <span className="h-3 w-3 shrink-0 rounded-full bg-plum" />
                    <span className="w-px flex-1 bg-white/70" />
                  </div>
                  <div className="flex min-w-0 flex-col gap-6 sm:gap-4">
                    <Typography as="h4" variant="lg" className={`font-semibold! leading-7 text-white ${index === 1 ? "xl:max-w-[300px]" : ""}`}>
                      {title}
                    </Typography>
                    <Typography variant="md" className="leading-[26px] text-[#bdbdbd]">
                      {description}
                    </Typography>
                  </div>
                </li>
              ))}
            </ol>
          </ScrollReveal>

          <ScrollReveal delay={0.18} className="flex flex-col gap-6 rounded-[23px] border border-gold bg-[#0b0b0b] px-[25px] py-10 sm:gap-4">
            <Typography as="h3" variant="sm" className="font-semibold! uppercase leading-5 tracking-[1.2px] text-gold">
              The Doctrine of Divine Alignment™
            </Typography>
            <Typography variant="md" className="leading-[34px] text-[#bdbdbd]">
              Together, they developed The Doctrine of Divine Alignment™, the foundational
              philosophy of African Sacred Science, and established an ecosystem devoted to
              recovering, researching, preserving, interpreting, teaching, and applying African
              wisdom for contemporary life.
            </Typography>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
