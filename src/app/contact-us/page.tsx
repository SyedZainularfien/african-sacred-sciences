import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact/contact-form";
import { Container } from "@/components/layout/container";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Typography } from "@/components/ui/typography";
import { absoluteUrl } from "@/lib/site-url";

const email = "Support@Africansacredscience.ai";
const [emailName, emailDomain] = email.split("@");

export const metadata: Metadata = {
  title: "Contact Us | African Sacred Science",
  description: "Get in touch with African Sacred Science about our work, research, collaborations, or this website.",
  alternates: { canonical: absoluteUrl("/contact-us") },
};

function ContactArtwork() {
  return (
    <div aria-hidden="true" className="relative flex aspect-square w-full max-w-[540px] items-center justify-center">
      <div className="absolute inset-[7%] rounded-full border border-gold/35 bg-[radial-gradient(circle_at_50%_50%,rgba(150,67,120,0.24),rgba(17,7,21,0.1)_58%,transparent_72%)]" />
      <div className="absolute inset-[17%] rounded-full border border-gold/15" />
      <div className="absolute inset-[28%] rounded-full border border-gold/20" />
      <div className="absolute inset-[5%] rounded-full border border-dashed border-gold/15" />
      <span className="absolute left-1/2 top-[7%] size-2 -translate-x-1/2 rounded-full bg-gold shadow-[0_0_20px_6px_rgba(198,155,52,0.45)]" />
      <span className="absolute bottom-[7%] left-1/2 size-2 -translate-x-1/2 rounded-full bg-gold/70" />
      <span className="absolute left-[7%] top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-gold/70" />
      <span className="absolute right-[7%] top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-gold/70" />
      <svg viewBox="0 0 240 240" fill="none" className="relative w-[42%] text-[#d8b668]" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M38 73h164a12 12 0 0 1 12 12v93a12 12 0 0 1-12 12H38a12 12 0 0 1-12-12V85a12 12 0 0 1 12-12Z" />
        <path d="m28 81 87 65a9 9 0 0 0 10 0l87-65M29 184l64-55m118 55-64-55" />
        <path d="M120 44v-17m-8 8h16M56 52l-8-8m136 8 8-8" strokeOpacity=".65" />
      </svg>
      <Typography as="span" variant="xs" className="absolute bottom-[1%] font-semibold uppercase tracking-[0.3em] text-gold/70">An open invitation</Typography>
    </div>
  );
}

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-background-yellow">
      <Header activeItem="Contact Us" />
      <main>
        <section className="relative isolate overflow-hidden bg-[#09050b] text-white">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_80%_at_78%_52%,rgba(107,27,92,0.42),transparent_75%),radial-gradient(ellipse_40%_60%_at_0%_0%,rgba(75,23,70,0.32),transparent_80%)]" />
          <Container className="flex max-w-[1440px] flex-col gap-14 pb-24 pt-44 sm:pb-28 sm:pt-48 lg:min-h-[700px] lg:flex-row lg:items-center lg:gap-12 lg:pb-24 lg:pt-40">
            <div className="flex min-w-0 flex-1 flex-col gap-10">
              <ScrollReveal className="flex items-center gap-4">
                <span aria-hidden="true" className="h-px w-8 bg-gold" />
                <Typography as="span" variant="xs" className="font-semibold uppercase tracking-[0.24em] text-gold">Contact African Sacred Science</Typography>
              </ScrollReveal>
              <div className="flex flex-col gap-7">
                <ScrollReveal delay={0.1}>
                  <Typography as="h1" variant="h1" className="flex flex-col font-normal! leading-[0.98]! tracking-[-0.03em] text-[clamp(3.75rem,7vw,7rem)]!">
                    <span>Let’s begin a</span>
                    <span className="bg-[linear-gradient(100deg,#e9b4df_0%,#c789bb_55%,#ae609e_100%)] bg-clip-text italic text-transparent">conversation.</span>
                  </Typography>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                  <Typography variant="lg" className="max-w-[550px] leading-[1.8] text-white/70">
                    Questions about our work, an idea to share, or a reason to connect? We’d like to hear from you.
                  </Typography>
                </ScrollReveal>
              </div>
              <ScrollReveal delay={0.3}>
                <a href="#reach-us" className="flex w-fit items-center gap-3 text-gold transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">
                  <Typography as="span" variant="xs" className="font-semibold uppercase tracking-[0.18em]">Find your way in</Typography>
                  <span aria-hidden="true" className="text-xl leading-none">↓</span>
                </a>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2} distance={0} scale={0.98} className="hidden w-[44%] shrink-0 items-center justify-center lg:flex">
              <ContactArtwork />
            </ScrollReveal>
          </Container>
        </section>

        <section id="reach-us" aria-labelledby="reach-us-heading" className="scroll-mt-6 bg-background-yellow py-20 text-[#241526] sm:py-28 lg:py-32">
          <Container className="flex max-w-[1440px] flex-col gap-14 lg:gap-20">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
              <ScrollReveal className="flex max-w-[650px] flex-col gap-5">
                <div className="flex items-center gap-3">
                  <span aria-hidden="true" className="h-px w-7 bg-plum" />
                  <Typography as="span" variant="xs" className="font-semibold uppercase tracking-[0.2em] text-plum">A direct line</Typography>
                </div>
                <Typography as="h2" id="reach-us-heading" variant="h2" className="font-normal! leading-[1.08] text-[clamp(2.8rem,5vw,5.25rem)]!">
                  Reach out. <span className="italic text-plum">We’re listening.</span>
                </Typography>
              </ScrollReveal>
              <ScrollReveal delay={0.12} className="max-w-[390px]">
                <Typography variant="md" className="leading-[1.8] text-[#655765]">
                  Tell us what’s on your mind. The right conversation can start with a single note.
                </Typography>
              </ScrollReveal>
            </div>

            <div className="flex flex-col items-start gap-8 lg:flex-row lg:gap-10">
              <ScrollReveal delay={0.1} className="w-full min-w-0 lg:flex-1">
                <ContactForm />
              </ScrollReveal>
              <ScrollReveal delay={0.2} className="w-full lg:w-[34%] lg:shrink-0">
                <div className="relative flex flex-col gap-9 overflow-hidden rounded-[28px] border border-gold/30 bg-[#210d24] px-7 py-9 text-white sm:px-9 sm:py-10">
                  <span aria-hidden="true" className="pointer-events-none absolute -right-32 -top-36 size-[400px] rounded-full border border-gold/20 bg-[radial-gradient(circle,rgba(133,43,104,0.35),transparent_68%)]" />
                  <div className="relative flex flex-col gap-4">
                    <Typography as="span" variant="xs" className="font-semibold uppercase tracking-[0.22em] text-gold">Prefer email?</Typography>
                    <div className="flex flex-col gap-2">
                      <Typography as="h3" variant="h4" className="font-normal! leading-[1.1]">Reach us <span className="italic text-[#dba9ce]">directly.</span></Typography>
                      <Typography variant="sm" className="leading-[1.75] text-white/65">You can always send a note from your own email app.</Typography>
                    </div>
                  </div>
                  <a href={`mailto:${email}`} className="relative flex w-fit max-w-full items-center gap-3 border-b border-gold/50 pb-2 text-gold transition-colors hover:border-white hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">
                    <Typography as="span" variant="sm" className="min-w-0 font-semibold">
                      {emailName}@<wbr /><span className="whitespace-nowrap">{emailDomain}</span>
                    </Typography>
                    <span aria-hidden="true" className="shrink-0 text-xl">↗</span>
                  </a>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal className="flex flex-col items-start justify-between gap-6 border-t border-plum/20 pt-10 sm:flex-row sm:items-center">
              <Typography variant="md" className="text-[#655765]">New here? Explore the ideas behind our work.</Typography>
              <Link href="/doctrine" className="flex items-center gap-3 border-b border-plum/40 pb-1 text-plum transition-colors hover:border-plum hover:text-[#3b0e34] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">
                <Typography as="span" variant="sm" className="font-semibold uppercase tracking-[0.1em]">Explore the Doctrine</Typography>
                <span aria-hidden="true" className="text-xl">↗</span>
              </Link>
            </ScrollReveal>
          </Container>
        </section>
      </main>
      <Footer homePage={false} creamCorners />
    </div>
  );
}
