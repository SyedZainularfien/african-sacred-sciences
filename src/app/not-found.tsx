import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ButtonLink } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background-yellow">
      <Header activeItem={null} />
      <main>
        <section className="relative isolate overflow-hidden bg-[#09050b] text-white">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_55%_75%_at_78%_45%,rgba(107,27,92,0.38),transparent_75%),radial-gradient(ellipse_45%_60%_at_0%_100%,rgba(75,23,70,0.28),transparent_80%)]" />
          <Container className="flex min-h-[720px] flex-col items-center justify-center gap-12 pb-20 pt-40 sm:pb-28 sm:pt-48 lg:min-h-[780px] lg:flex-row lg:gap-16 lg:pb-32">
            <div className="flex w-full min-w-0 flex-col items-start gap-8 lg:w-[53%]">
              <div className="flex items-center gap-4">
                <span aria-hidden="true" className="h-px w-8 bg-gold" />
                <Typography as="span" variant="xs" className="font-semibold uppercase tracking-[0.24em] text-gold">The page is missing</Typography>
              </div>
              <div className="flex flex-col gap-5">
                <Typography as="h1" variant="h1" className="font-normal! leading-[0.98]! tracking-[-0.025em] text-[clamp(3.75rem,7vw,7.5rem)]!">
                  A little off <span className="italic text-[#dba9ce]">the path.</span>
                </Typography>
                <Typography variant="lg" className="max-w-[520px] leading-[1.8] text-white/65">
                  The page you’re looking for isn’t here. Let’s help you find your way back to the ideas that brought you here.
                </Typography>
              </div>
              <div className="flex flex-wrap items-center gap-5">
                <ButtonLink href="/" showArrow className="transition-[filter] hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">
                  Return home
                </ButtonLink>
                <Link href="/contact-us" className="border-b border-gold/50 pb-1 text-gold transition-colors hover:border-white hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">
                  <Typography as="span" variant="sm" className="font-semibold">Need a hand?</Typography>
                </Link>
              </div>
            </div>

            <div aria-hidden="true" className="relative flex aspect-square w-full max-w-[440px] shrink-0 items-center justify-center lg:w-[41%] lg:max-w-[540px]">
              <div className="absolute inset-[3%] rounded-full border border-gold/25" />
              <div className="absolute inset-[12%] rounded-full border border-dashed border-gold/20" />
              <div className="absolute inset-[22%] rounded-full border border-gold/30 bg-[radial-gradient(circle,rgba(107,27,92,0.32),transparent_72%)]" />
              <span className="absolute left-1/2 top-[3%] size-2 -translate-x-1/2 rounded-full bg-gold shadow-[0_0_18px_5px_rgba(198,155,52,0.4)]" />
              <span className="absolute bottom-[3%] left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-gold/70" />
              <span className="absolute left-[3%] top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-gold/70" />
              <span className="absolute right-[3%] top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-gold/70" />
              <Typography as="span" variant="h1" className="relative bg-gold-gradient bg-clip-text font-serif text-[clamp(6rem,15vw,12rem)]! font-normal! leading-none text-transparent">404</Typography>
              <Typography as="span" variant="xs" className="absolute bottom-[14%] font-semibold uppercase tracking-[0.32em] text-gold/80">Lost in the cosmos</Typography>
            </div>
          </Container>
        </section>

        <section className="bg-background-yellow py-14 text-[#241526] sm:py-20">
          <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
            <div className="flex flex-col gap-2">
              <Typography as="span" variant="xs" className="font-semibold uppercase tracking-[0.2em] text-plum">Continue exploring</Typography>
              <Typography as="h2" variant="h4" className="font-normal!">There’s more to <span className="italic text-plum">discover.</span></Typography>
            </div>
            <Link href="/doctrine" className="flex w-fit items-center gap-3 border-b border-plum/40 pb-1 text-plum transition-colors hover:border-plum hover:text-[#3b0e34] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">
              <Typography as="span" variant="sm" className="font-semibold uppercase tracking-[0.1em]">Explore the Doctrine</Typography>
              <span aria-hidden="true" className="text-xl">↗</span>
            </Link>
          </Container>
        </section>
      </main>
      <Footer homePage={false} creamCorners />
    </div>
  );
}
