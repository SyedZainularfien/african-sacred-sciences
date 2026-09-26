import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Typography } from "@/components/ui/typography";

const navigation = [
  { label: "Home", href: "/" },
  { label: "African Sacred Science", href: "#what-is-african-sacred-science" },
  { label: "Research", href: "#research" },
  { label: "ORIINU", href: "#oriinu" },
  { label: "Books" },
  { label: "Academy" },
  { label: "About", href: "#founders" },
] as const;

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

const socialIcons = [
  { label: "LinkedIn", file: "linkedin.svg", width: 13, height: 13 },
  { label: "X", file: "x.svg", width: 16, height: 14 },
  { label: "Discord", file: "discord.svg", width: 17, height: 12 },
  { label: "Telegram", file: "telegram.svg", width: 16, height: 15 },
] as const;

function SocialMarks() {
  return (
    <div
      role="group"
      aria-label="Social media"
      className="flex items-center gap-3.5"
    >
      {socialIcons.map(({ label, file, width, height }) => (
        <button
          key={label}
          type="button"
          aria-label={label}
          className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-plum transition-colors hover:bg-plum focus-visible:bg-plum focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold bg-transparent}`}
        >
          <Image
            src={`/images/footer-arrows/${file}`}
            alt=""
            width={width}
            height={height}
          />
        </button>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="overflow-hidden rounded-t-[72px] border-t border-plum bg-black sm:rounded-t-[100px]">
        <Container className="flex min-h-[220px] flex-col items-center justify-center gap-8 py-14 lg:flex-row lg:justify-between lg:gap-10 lg:py-20">
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 lg:justify-start">
              {navigation.map(({ label, ...item }) => (
                <li key={label}>
                  {"href" in item ? (
                    <Link
                      href={item.href}
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
          </nav>
          <div className="flex items-center gap-8 whitespace-nowrap">
            <Typography as="span" variant="sm" className="text-white/65">
              Privacy Policy
            </Typography>
            <Typography as="span" variant="sm" className="text-white/65">
              Terms &amp; Conditions
            </Typography>
          </div>
        </Container>

        <div className="border-t border-white/20">
          <div className="flex flex-col gap-16 pb-5 pt-[68px]">
            <Container className="flex items-center justify-center gap-8 lg:justify-between">
              <ArrowFlourish />
              <SocialMarks />
              <ArrowFlourish reversed />
            </Container>
            <Typography
              as="div"
              variant="mdMedium"
              className="w-full whitespace-nowrap bg-[linear-gradient(180deg,#070708_-11.58%,#1E1E21_100%)] bg-clip-text text-center text-[clamp(3.4rem,7.7vw,9rem)]! font-black! leading-none tracking-[-0.08em] text-transparent"
            >
              AFRICAN SACRED SCIENCE
            </Typography>
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
                <span className="font-semibold text-white/85">
                  TheFlopStudios
                </span>
              </Typography>
            </Container>
          </div>
        </div>
      </div>
    </footer>
  );
}
