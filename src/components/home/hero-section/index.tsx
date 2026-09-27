"use client";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

export function HeroSection() {
  return (
    <section
      id="home"
      className="bg-black bg-[url('/images/home-hero-bg.png')] bg-cover bg-center bg-no-repeat text-white"
    >
      <Container className="flex flex-col items-center gap-10 pb-16 pt-36 sm:gap-12 sm:pb-20 sm:pt-44 min-[90rem]:min-h-[800px] min-[90rem]:flex-row min-[90rem]:items-start min-[90rem]:gap-[77px] min-[90rem]:pb-[93px] min-[90rem]:pt-[138px]">
        <div className="flex w-full min-w-0 max-w-[720px] flex-col gap-[30px] min-[90rem]:w-[563px] min-[90rem]:shrink-0 min-[90rem]:pt-[70px]">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-[10px]">
                <Typography
                  variant="xs"
                  className="font-semibold uppercase leading-[17px] tracking-[2.42px] text-gold"
                >
                  Welcome to African Sacred Science
                </Typography>
                <Typography
                  as="h1"
                  variant="mdMedium"
                  className="flex flex-col"
                >
                  <span className="[font-size:clamp(2.375rem,7vw,3.875rem)]! leading-[1.16] min-[90rem]:leading-[72px]">
                    Ancient Wisdom
                  </span>
                  <span className="bg-plum-gradient bg-clip-text font-serif [font-size:clamp(2.75rem,6.4vw,5.125rem)]! font-semibold italic leading-[1.25] text-transparent min-[90rem]:whitespace-nowrap">
                    Living Intelligence.
                  </span>
                </Typography>
              </div>
              <Typography variant="md" className="leading-8 text-grey">
                Africa’s knowledge traditions contain profound insights into
                identity, character, destiny, consciousness, community,
                prosperity, leadership, the natural world and our relationship
                with the Divine. African Sacred Science brings this wisdom
                forward for modern life.
              </Typography>
            </div>
            <div className="flex flex-col gap-5 sm:flex-row sm:flex-wrap min-[90rem]:flex-nowrap">
              <Button
                width="full"
                className="sm:w-fit min-[90rem]:h-[60px] min-[90rem]:w-[313px] min-[90rem]:shrink-0"
              >
                Discover African Sacred Science
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  window.open(
                    "https://oriinu.ai/",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
                width="full"
                className="bg-black! sm:w-fit min-[90rem]:h-[60px] min-[90rem]:w-[230px] min-[90rem]:shrink-0 [&>span]:whitespace-nowrap"
              >
                Experience ORIINU →
              </Button>
            </div>
          </div>
          <Typography
            variant="md"
            className="flex min-h-[37px] items-center border-l-4 border-plum bg-[linear-gradient(90deg,rgba(127,22,105,0.45),transparent)] px-[26px] py-1 leading-7 text-white/90"
          >
            Remember . Align . Flourish.
          </Typography>
        </div>
        <Image
          src="/images/hero-right.png"
          alt="African sacred science, wisdom, community, and research collage"
          width={1320}
          height={1138}
          priority
          className="h-auto w-full max-w-[720px] min-[90rem]:w-[calc(100%_-_640px)] min-[90rem]:max-w-none"
        />
      </Container>
    </section>
  );
}
