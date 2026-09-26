import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

const topics = [
  "Personal Direction",
  "Business & Strategy",
  "Finances & Wealth",
  "Productivity & Focus",
  "Relationships",
  "Purpose",
  "Life Decisions",
  "Personal Growth",
];

const stages = [
  {
    title: "Ask",
    description:
      "Bring a real question about direction, a decision, a relationship, purpose, or what matters most.",
  },
  {
    title: "Reflect",
    description:
      "Explore what lies beneath the question through a deeper framework of understanding.",
  },
  {
    title: "Align",
    description:
      "Consider what is consistent with your values, character and direction.",
  },
  {
    title: "Act",
    description: "Move forward with greater clarity, intention and purpose.",
  },
];

export function OriinuSection() {
  return (
    <section id="oriinu" aria-labelledby="oriinu-title" className="bg-black pb-[60px] pt-8 text-white lg:pt-[33px]">
      <Container className="flex flex-col gap-5">
        <div className="relative isolate flex flex-col overflow-hidden rounded-[28px] border border-gold bg-[#0b0b0b] lg:min-h-[640px] lg:flex-row lg:rounded-[34px]">
          <div className="relative z-10 flex min-w-0 flex-col gap-[30px] px-6 pt-10 sm:px-10 sm:pt-12 lg:w-[670px] lg:max-w-[54%] lg:pb-[55px] lg:pl-[59px] lg:pr-0 lg:pt-[59px]">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-[18px]">
                <div className="flex flex-col gap-[17px]">
                  <Typography variant="xs" className="font-semibold uppercase leading-[17px] tracking-[2.42px] text-gold">Powered by African Sacred Science</Typography>
                  <Typography as="h2" variant="mdMedium" id="oriinu-title" className="[font-size:clamp(2.5rem,3.45vw,3rem)]! leading-[52px] lg:[text-box-trim:trim-both] lg:[text-box-edge:cap_alphabetic]">
                    Meet <span className="bg-plum-gradient bg-clip-text font-serif [font-size:1.208333em]! italic text-transparent">ORIINU<sup className="[font-size:0.45em]!">™</sup></span>
                  </Typography>
                </div>
                <Typography variant="mdMedium" className="[font-size:clamp(1.25rem,1.95vw,1.75rem)]! leading-[51px] text-gold">Awaken Your Inner Intelligence.</Typography>
              </div>
              <Typography variant="md" className="leading-[30.666667px] text-white/70">ORIINU is the AI-powered personal intelligence experience within the African Sacred Science ecosystem. It brings African Sacred Science into conversation with the questions, decisions and opportunities of everyday life.</Typography>
            </div>
            <div className="flex flex-col gap-5">
              <Typography variant="md" className="leading-8 text-white/85">Use ORIINU to explore questions involving:</Typography>
              <ul className="flex flex-wrap gap-2">
                {topics.map((topic) => (
                  <li key={topic} className="flex min-h-[41.5px] w-full items-center gap-[10px] rounded-[10px] border border-gold/20 bg-white/5 px-4 py-[9.75px] sm:w-[calc((100%_-_8px)/2)]">
                    <span aria-hidden="true" className="h-[5px] w-[5px] shrink-0 rounded-full bg-gold" />
                    <Typography as="span" variant="sm" className="leading-5 text-white/70">{topic}</Typography>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative aspect-[1126/1276] w-full max-w-[480px] self-center lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-[43.3%] lg:max-w-none">
            <Image src="/images/meet-oriunu.png" alt="A luminous blue profile traced with golden lines and points of light" fill sizes="(min-width: 1024px) 39vw, (min-width: 640px) 480px, 90vw" className="object-contain object-right" />
          </div>
        </div>
        <section aria-labelledby="oriinu-stages-title" className="relative isolate flex flex-col gap-[30px] overflow-hidden rounded-[28px] border border-gold bg-black bg-[url('/images/how-orinnu-works-bg.png')] bg-cover bg-center px-6 py-10 sm:px-10 sm:py-12 lg:rounded-[34px] lg:px-[39px] lg:pb-[58px] lg:pt-[59px]">
          <div className="flex flex-col gap-10">
            <header className="flex flex-col gap-5">
              <Typography variant="xs" className="font-semibold uppercase leading-[17px] tracking-[2.42px] text-gold">How ORIINU Works</Typography>
              <Typography as="h2" variant="mdMedium" id="oriinu-stages-title" className="[font-size:clamp(2rem,3.45vw,3rem)]! leading-[52px] lg:[text-box-trim:trim-both] lg:[text-box-edge:cap_alphabetic]">Four Stages of <span className="bg-plum-gradient bg-clip-text font-serif [font-size:1.208333em]! italic text-transparent">Clarity</span></Typography>
            </header>
            <ol className="flex flex-wrap gap-[18.769px]">
              {stages.map(({ title, description }, index) => (
                <li key={title} className="flex w-full flex-col gap-5 rounded-[20px] border border-gold/20 bg-black px-7 py-9 sm:w-[calc((100%_-_18.769px)/2)] lg:first:pr-2 lg:min-h-[271px] lg:w-[calc((100%_-_56.307px)/4)]">
                  <Typography as="span" variant="xs" className="flex h-9 w-9 items-center justify-center rounded-full bg-gold font-semibold">{String(index + 1).padStart(2, "0")}</Typography>
                  <div className="flex flex-col gap-3">
                    <Typography as="h3" variant="xl" className="[font-size:1.5rem]! font-semibold leading-[33px]">{title}</Typography>
                    <Typography variant="sm" className="leading-[24.333333px] text-white/70">{description}</Typography>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Button className="h-[60px] w-full sm:w-[187px]">Launch ORIINU</Button>
            <Button variant="outline" showArrow className="h-[60px] w-full bg-black sm:w-[294px]">Learn How ORIINU Works</Button>
          </div>
        </section>
      </Container>
    </section>
  );
}
