import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Typography } from "@/components/ui/typography";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

import { navigation, socialIcons } from "@/constants/navigation";

function ArrowFlourish({ reversed = false }: { reversed?: boolean }) {
  return (
    <Image
      src={`/images/footer-arrows/${reversed ? "right" : "left"}.svg`}
      alt=""
      aria-hidden="true"
      width={279}
      height={40}
      className="hidden h-10 w-[279px] shrink-0 lg:block"
    />
  );
}


function SocialMarks() {
  return (
    <div className="flex items-center gap-3.5">
      {socialIcons.map(({ label, file, width, height }) => (
        <span
          key={label}
          aria-hidden="true"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-plum bg-transparent"
        >
          <Image
            src={`/images/footer-arrows/${file}`}
            alt=""
            width={width}
            height={height}
          />
        </span>
      ))}
    </div>
  );
}

export function Footer({ homePage = true, creamCorners = false }: { homePage?: boolean; creamCorners?: boolean }) {
  return (
    <footer className={`${creamCorners ? "bg-background-yellow" : "bg-black"} text-white`}>
      <div className="overflow-hidden rounded-t-[72px] border-t border-plum bg-black sm:rounded-t-[100px]">
        <Container className="flex min-h-[220px] flex-col items-center justify-center gap-8 py-14 lg:min-h-0 lg:flex-row lg:justify-between lg:gap-10 lg:py-20">
          <ScrollReveal as="nav" aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 lg:justify-start">
              {navigation.map(({ label, ...item }) => (
                <li key={label}>
                  {"href" in item ? (
                    <Link
                      href={
                        !homePage && item.href.startsWith("#")
                          ? `/${item.href}`
                          : item.href
                      }
                      className="text-base text-white/80 hover:text-gold focus-visible:outline-2 focus-visible:outline-gold"
                    >
                      {label}
                    </Link>
                  ) : (
                    <Typography
                      as="span"
                      variant="md"
                      className="text-white/80"
                    >
                      {label}
                    </Typography>
                  )}
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="flex items-center gap-8 whitespace-nowrap">
            <Link href="/privacy-policy" className="text-white/65 hover:text-gold focus-visible:outline-2 focus-visible:outline-gold">
              <Typography as="span" variant="sm">Privacy Policy</Typography>
            </Link>
            <Link href="/terms-and-conditions" className="text-white/65 hover:text-gold focus-visible:outline-2 focus-visible:outline-gold">
              <Typography as="span" variant="sm">Terms &amp; Conditions</Typography>
            </Link>
          </ScrollReveal>
        </Container>

        <div className="border-t border-white/20">
          <div className="flex flex-col gap-12 pb-[10px] pt-12">
            <Container className="flex items-center justify-center gap-8 lg:justify-between">
              <ArrowFlourish />
              <ScrollReveal delay={0.1}>
                <SocialMarks />
              </ScrollReveal>
              <ArrowFlourish reversed />
            </Container>
            <ScrollReveal delay={0.14} distance={12} className="w-full">
              <Typography
                as="div"
                variant="mdMedium"
                className="w-full whitespace-nowrap bg-[linear-gradient(180deg,#070708_-11.58%,#1E1E21_100%)] bg-clip-text text-center text-[clamp(1.25rem,7.7vw,9rem)]! font-black! leading-none tracking-[-0.08em] text-transparent"
              >
                AFRICAN SACRED SCIENCE
              </Typography>
            </ScrollReveal>
            <ScrollReveal delay={0.18} className="w-full">
              <Container className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
                <Typography variant="sm" className="text-white/45">
                  © 2026 African Sacred Science™. All rights reserved.
                </Typography>
                <Typography variant="sm" className="text-white/60">
                  Built with{" "}
                  <span aria-label="love" className="text-red-500">
                    ❤️
                  </span>{" "}
                  by{" "}
                  <Link
                    href="https://linktr.ee/theflopstudios"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer font-semibold text-white/85 underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-gold"
                  >
                    TheFlopStudios
                  </Link>
                </Typography>
              </Container>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </footer>
  );
}
