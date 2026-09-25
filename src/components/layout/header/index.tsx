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
    <header className="absolute inset-x-0 top-0 z-10 pt-4 text-white">
      <Container>
        <div className="flex items-center justify-between gap-5 rounded-[20px] border border-white/25 bg-[#d9d9d9]/20 px-4 py-3 backdrop-blur-sm sm:px-5 2xl:gap-11">
          <Link href="/" aria-label="African Sacred Science home" className="shrink-0">
            <Image
              src="/images/header-logo.png"
              alt="African Sacred Science"
              width={328}
              height={99}
              priority
              className="h-auto w-[155px] lg:w-[165px] 2xl:w-[195px]"
            />
          </Link>

          <nav aria-label="Main navigation" className="hidden min-w-0 flex-1 xl:block">
            <ul className="flex items-center justify-start gap-3 whitespace-nowrap text-xs min-[1400px]:text-sm 2xl:gap-5 2xl:text-base">
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

          <Button className="hidden shrink-0 lg:inline-flex" size="compact" showArrow>
            Experience ORIINU
          </Button>

          <details className="relative xl:hidden">
            <summary className="cursor-pointer list-none rounded-full border border-white/40 px-4 py-2 text-sm font-semibold marker:hidden">
              Menu
            </summary>
            <nav aria-label="Mobile navigation" className="absolute right-0 top-[calc(100%+1rem)] w-64 rounded-2xl border border-white/25 bg-full-black p-5 shadow-xl">
              <ul className="space-y-4 text-sm">
                {navigationItems.map((item) => (
                  <li key={item}>
                    {item === "Home" ? <Link href="/">{item}</Link> : <span>{item}</span>}
                  </li>
                ))}
              </ul>
              <Button className="mt-6 lg:hidden" width="full" size="compact" showArrow>
                Experience ORIINU
              </Button>
            </nav>
          </details>
        </div>
      </Container>
    </header>
  );
}
