import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-[800px] bg-black bg-[url('/images/home-hero-bg.png')] bg-cover bg-center bg-no-repeat text-white"
    >
      <Container className="grid items-center gap-12 pb-20 pt-36 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-[2.8vw] lg:pb-[120px] lg:pt-[9.5vw]">
        <div className="min-w-0 lg:translate-y-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-gold">
            Welcome to African Sacred Science
          </p>

          <Typography variant="h1" className="leading-[1.05]">
            <span className="block font-sans text-[clamp(2.5rem,8vw,3.5rem)] font-medium">Ancient Wisdom</span>
            <span className="mt-1 block bg-plum-gradient bg-clip-text pb-2 font-serif text-[clamp(2.5rem,5.2vw,5rem)] font-bold italic leading-[0.95] text-transparent">
              Living Intelligence.
            </span>
          </Typography>

          <Typography variant="xl" className="mt-5 max-w-[590px] leading-[1.9] text-white/75">
            Africa’s knowledge traditions contain profound insights into identity, character,
            destiny, consciousness, community, prosperity, leadership, the natural world and our
            relationship with the Divine. African Sacred Science brings this wisdom forward for
            modern life.
          </Typography>

          <div className="mt-9 flex flex-wrap gap-5">
            <Button>Discover African Sacred Science</Button>
            <Button variant="outline" showArrow>
              Experience ORIINU
            </Button>
          </div>

          <p className="mt-7 max-w-[560px] border-l-4 border-plum bg-[linear-gradient(90deg,rgba(127,22,105,0.45),transparent)] px-5 py-2 text-md text-white/90">
            Remember . Align . Flourish.
          </p>
        </div>

        <Image
          src="/images/hero-right.png"
          alt="African sacred science, wisdom, community, and research collage"
          width={1320}
          height={1138}
          priority
          className="h-auto w-full"
        />
      </Container>
    </section>
  );
}
