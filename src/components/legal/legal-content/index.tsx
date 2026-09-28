import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Typography } from "@/components/ui/typography";
import type { LegalSection } from "@/constants/legal";
import { siteUrl } from "@/lib/site-url";

interface LegalContentProps {
  title: string;
  accent: string;
  description: string;
  heroImage: string;
  companion: { href: string; label: string };
  sections: readonly LegalSection[];
}

export function LegalContent({ title, accent, description, heroImage, companion, sections }: LegalContentProps) {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-[#09050b] text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_80%_at_75%_75%,rgba(107,27,92,0.54),transparent_75%),radial-gradient(ellipse_45%_60%_at_0%_0%,rgba(75,23,70,0.36),transparent_78%)]" />
        <svg aria-hidden="true" className="pointer-events-none absolute -right-52 bottom-[-18rem] -z-10 h-[48rem] w-[48rem] opacity-40 lg:-right-24 lg:bottom-[-27rem] lg:h-[70rem] lg:w-[70rem]" viewBox="0 0 800 800" fill="none">
          <g stroke="#C69B34" strokeOpacity="0.25" strokeWidth="0.7">
            <circle cx="400" cy="400" r="120" /><circle cx="400" cy="400" r="205" />
            <circle cx="400" cy="400" r="290" /><circle cx="400" cy="400" r="375" />
          </g>
        </svg>
        <Container className="relative flex max-w-[1440px] flex-col gap-9 pb-20 pt-44 sm:pb-24 sm:pt-48 lg:flex-row lg:items-center lg:gap-10 lg:pb-20 lg:pt-40">
          <div className="flex min-w-0 flex-1 flex-col gap-9 lg:gap-12">
            <div className="flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-8 bg-gold" />
              <Typography as="span" variant="xs" className="font-semibold uppercase tracking-[0.24em] text-gold">The essentials</Typography>
            </div>
            <div className="flex max-w-[800px] flex-col gap-7">
              <Typography as="h1" variant="h1" className="flex flex-col font-normal! leading-[0.98]! tracking-[-0.025em] text-[clamp(3.75rem,8vw,7.5rem)]!">
                <span>{title}</span>
                <span className="bg-[linear-gradient(100deg,#e9b4df_0%,#c789bb_55%,#ae609e_100%)] bg-clip-text italic text-transparent">{accent}</span>
              </Typography>
              <Typography variant="lg" className="max-w-[620px] leading-[1.8] text-white/70">{description}</Typography>
            </div>
            <a href="#legal-content" className="flex w-fit items-center gap-3 text-gold transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">
              <Typography as="span" variant="xs" className="font-semibold uppercase tracking-[0.18em]">Explore the document</Typography>
              <span aria-hidden="true" className="text-xl leading-none">↓</span>
            </a>
          </div>
          <div className="hidden lg:flex lg:w-[42%] lg:max-w-[480px] lg:shrink-0 lg:items-center lg:justify-center">
            <Image
              src={heroImage}
              alt=""
              aria-hidden="true"
              width={1024}
              height={1536}
              sizes="(min-width: 1440px) 480px, (min-width: 1024px) 42vw, 0px"
              className="h-auto max-h-[560px] w-full object-contain"
            />
          </div>
        </Container>
      </section>

      <section id="legal-content" className="scroll-mt-6 bg-background-yellow py-16 text-full-black sm:py-20 lg:py-28">
        <Container className="flex max-w-[1440px] flex-col gap-14 lg:flex-row lg:items-start lg:gap-20">
          <aside className="hidden w-[250px] shrink-0 lg:sticky lg:top-10 lg:flex lg:flex-col lg:gap-7">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-6 bg-plum" />
              <Typography as="span" variant="xs" className="font-semibold uppercase tracking-[0.18em] text-plum">On this page</Typography>
            </div>
            <nav aria-label={`${title} ${accent} sections`}>
              <ol className="flex flex-col border-l border-plum/20">
                {sections.map((section, index) => (
                  <li key={section.title}>
                    <a href={`#legal-section-${index + 1}`} className="flex items-baseline gap-3 border-l-2 border-transparent py-2.5 pl-4 text-[#5c5058] transition-colors hover:border-plum hover:text-plum focus-visible:border-plum focus-visible:text-plum focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">
                      <Typography as="span" variant="xs" className="shrink-0 font-medium tabular-nums text-gold">{String(index + 1).padStart(2, "0")}</Typography>
                      <Typography as="span" variant="sm" className="leading-5">{section.title}</Typography>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className="flex min-w-0 flex-1 flex-col">
            <div className="flex flex-col gap-3 border-b border-plum/20 pb-8 sm:pb-10">
              <Typography as="span" variant="xs" className="font-semibold uppercase tracking-[0.2em] text-plum">African Sacred Science</Typography>
              <Typography as="h2" variant="h3" className="font-normal! leading-[1.15] text-[#241526]">{title} <span className="italic text-plum">{accent}</span></Typography>
            </div>
            {sections.map((section, index) => (
              <section key={section.title} id={`legal-section-${index + 1}`} aria-labelledby={`legal-heading-${index + 1}`} className="scroll-mt-10 flex flex-col gap-5 border-b border-plum/15 py-9 sm:gap-6 sm:py-11">
                <div className="flex items-start gap-4 sm:gap-6">
                  <Typography as="span" variant="sm" className="pt-1 font-medium tabular-nums text-gold">{String(index + 1).padStart(2, "0")}</Typography>
                  <Typography as="h3" id={`legal-heading-${index + 1}`} variant="h4" className="font-normal! leading-[1.12] text-[#281429] max-sm:text-[1.75rem]!">{section.title}</Typography>
                </div>
                <div className="flex max-w-[760px] flex-col gap-5 pl-9 sm:pl-12">
                  {section.paragraphs?.map((paragraph, paragraphIndex) => (
                    <Typography key={paragraphIndex} variant="md" className="leading-[1.85] text-[#514850]">{paragraph}</Typography>
                  ))}
                  {section.items && (
                    <ul className="flex flex-col gap-3">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                          <Typography as="span" variant="md" className="leading-[1.8] text-[#514850]">{item}</Typography>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.closing && <Typography variant="md" className="leading-[1.85] text-[#514850]">{section.closing}</Typography>}
                  {section.contact && (
                    <a href={siteUrl.href} className="flex w-fit items-center gap-3 break-all border-b border-plum/30 pb-1 text-plum transition-colors hover:border-plum hover:text-[#3b0e34] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">
                      <Typography as="span" variant="mdMedium">{siteUrl.href}</Typography>
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </section>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-background-yellow pb-20 sm:pb-28">
        <Container className="max-w-[1440px]">
          <div className="flex flex-col items-start justify-between gap-8 overflow-hidden rounded-[24px] border border-gold/25 bg-[#220d25] bg-[radial-gradient(ellipse_65%_140%_at_100%_100%,rgba(107,27,92,0.75),transparent_80%)] px-7 py-9 text-white sm:px-11 sm:py-12 lg:flex-row lg:items-end">
            <div className="flex flex-col gap-4">
              <Typography as="span" variant="xs" className="font-semibold uppercase tracking-[0.2em] text-gold">Continue reading</Typography>
              <Typography as="h2" variant="h3" className="font-normal! leading-[1.15]">{companion.label}</Typography>
            </div>
            <Link href={companion.href} className="flex min-h-12 items-center gap-4 border-b border-gold pb-1 text-gold transition-colors hover:border-white hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">
              <Typography as="span" variant="sm" className="font-semibold uppercase tracking-[0.1em]">Read the document</Typography>
              <span aria-hidden="true" className="text-xl">↗</span>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
