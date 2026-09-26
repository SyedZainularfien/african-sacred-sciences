import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

const navigationItems = [
  "Home",
  "African Sacred Science",
  "The Doctrine",
  "Research",
  "ORIINU",
  "Books",
  "Academy",
  "About",
];

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-10 pt-[15px] text-white">
      <Container>
        <div className="flex items-center justify-between gap-3 rounded-[20px] border border-white/25 bg-[#d9d9d9]/20 px-3 py-3 backdrop-blur-sm sm:gap-5 sm:px-5 min-[90rem]:min-h-[68px] min-[90rem]:gap-10 min-[90rem]:py-2 min-[90rem]:pl-[19px] min-[90rem]:pr-[10px]">
          <Link href="/" aria-label="African Sacred Science home" className="shrink-0">
            <Image
              src="/images/header-logo.png"
              alt="African Sacred Science"
              width={328}
              height={99}
              priority
              className="h-auto w-[140px] sm:w-[155px] lg:w-[164px]"
            />
          </Link>

          <nav aria-label="Main navigation" className="hidden min-w-0 flex-1 min-[90rem]:block">
            <ul className="flex items-center justify-start gap-[25px] whitespace-nowrap text-sm leading-6">
              {navigationItems.map((item) => (
                <li key={item}>
                  {item === "Home" ? (
                    <Link href="/" className="hover:text-gold focus-visible:outline-gold">
                      {item}
                    </Link>
                  ) : (
                    <span>{item}</span>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden shrink-0 min-[768px]:block">
            <Button size="compact" className="h-[46px] w-[214px]" showArrow>Experience ORIINU</Button>
          </div>

          <details className="relative shrink-0 min-[90rem]:hidden">
            <summary className="cursor-pointer list-none rounded-full border border-white/40 px-4 py-2 text-sm font-semibold marker:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">
              Menu
            </summary>
            <nav aria-label="Mobile navigation" className="absolute right-0 top-[calc(100%+1rem)] max-h-[calc(100dvh-7rem)] w-[min(18rem,calc(100vw-4.25rem))] flex flex-col gap-6 overflow-y-auto rounded-2xl border border-white/25 bg-full-black p-5 shadow-xl">
              <ul className="flex flex-col gap-4 text-sm">
                {navigationItems.map((item) => (
                  <li key={item}>
                    {item === "Home" ? <Link href="/">{item}</Link> : <span>{item}</span>}
                  </li>
                ))}
              </ul>
              <div className="min-[768px]:hidden">
                <Button width="full" size="compact" showArrow>Experience ORIINU</Button>
              </div>
            </nav>
          </details>
        </div>
      </Container>
    </header>
  );
}
