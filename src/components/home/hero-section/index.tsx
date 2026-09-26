import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

export function HeroSection() {
  return (
    <section
      id="home"
      className="bg-black bg-[url('/images/home-hero-bg.png')] bg-cover bg-center bg-no-repeat text-white min-[1440px]:min-h-[800px]"
    >
      <Container className="grid items-center gap-10 pb-16 pt-36 sm:gap-12 sm:pb-20 sm:pt-44 min-[1440px]:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] min-[1440px]:gap-[2.8vw] min-[1440px]:pb-[120px] min-[1440px]:pt-[9.5vw]">
        <div className="min-w-0 min-[1440px]:translate-y-10">
          <Typography as="p" variant="xs" className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-gold">
            Welcome to African Sacred Science
          </Typography>

          <Typography variant="h1" className="leading-[1.05]">
            <span className="block font-sans text-[clamp(2.375rem,7vw,3.875rem)] font-medium">Ancient Wisdom</span>
            <span className="mt-1 block bg-plum-gradient bg-clip-text pb-2 font-serif text-[clamp(2.75rem,6.4vw,5rem)] font-bold italic leading-[0.95] text-transparent min-[1440px]:text-[clamp(4rem,5.2vw,5rem)]">
              Living Intelligence.
            </span>
          </Typography>

          <Typography variant="md" className="mt-5 max-w-[590px] leading-7 text-white/75 sm:leading-8">
            Africa’s knowledge traditions contain profound insights into identity, character,
            destiny, consciousness, community, prosperity, leadership, the natural world and our
            relationship with the Divine. African Sacred Science brings this wisdom forward for
            modern life.
          </Typography>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-5">
            <Button width="full" className="sm:w-fit">Discover African Sacred Science</Button>
            <Button variant="outline" width="full" className="sm:w-fit" showArrow>
              Experience ORIINU
            </Button>
          </div>

          <Typography as="p" variant="sm" className="mt-7 max-w-[560px] border-l-4 border-plum bg-[linear-gradient(90deg,rgba(127,22,105,0.45),transparent)] px-5 py-2 text-sm text-white/90 sm:text-md">
            Remember . Align . Flourish.
          </Typography>
        </div>

        <Image
          src="/images/hero-right.png"
          alt="African sacred science, wisdom, community, and research collage"
          width={1320}
          height={1138}
          priority
          className="mx-auto h-auto w-full max-w-[720px] min-[1440px]:max-w-none"
        />
      </Container>
    </section>
  );
}
