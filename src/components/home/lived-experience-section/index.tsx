import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import { Container } from "@/components/layout/container";

import { reflectionQuestions } from "@/constants/home";

export function LivedExperienceSection() {
  return (
    <section aria-labelledby="lived-experience-title" className="bg-background-yellow py-16 text-full-black sm:py-20 xl:pb-[84px] xl:pt-[111px]">
      <Container className="flex flex-col items-center gap-10 sm:gap-12 xl:flex-row xl:items-start xl:gap-[90px]">
        <div className="flex w-full min-w-0 flex-col gap-8 xl:w-[570px] xl:shrink-0">
          <div className="flex flex-col gap-10 xl:gap-[52px]">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-5">
                <Typography variant="xs" className="font-semibold uppercase leading-[17px] tracking-[2.42px] text-gold">From Knowledge to Lived Experience</Typography>
                <Typography as="h2" variant="mdMedium" id="lived-experience-title" className="[font-size:clamp(2rem,3.4vw,3rem)]! leading-[52px] xl:[text-box-trim:trim-both] xl:[text-box-edge:cap_alphabetic]">
                  African Sacred Science<br />Is Meant to <span className="bg-plum-gradient bg-clip-text font-serif [font-size:1.208333em]! font-semibold italic text-transparent">Be Lived</span>
                </Typography>
              </div>
              <Typography variant="md" className="leading-[25px] text-full-black/90">Knowledge becomes transformative when it speaks to the questions, decisions and realities we actually face.</Typography>
            </div>
            <ul className="flex w-full max-w-[532px] flex-col gap-[10px]">
              {reflectionQuestions.map((question) => (
                <li key={question} className="rounded-[20px] border border-plum/18 bg-plum/[0.07] px-5 py-5 sm:px-8">
                  <Typography variant="mdMedium" className="[font-size:18px]! leading-[33px]">{question}</Typography>
                </li>
              ))}
            </ul>
          </div>
          <Typography variant="lg" className="flex min-h-[49px] w-full max-w-[563px] items-center border-l-4 border-gold bg-[linear-gradient(90deg,#eec97c,transparent)] px-[26px] py-2 font-semibold leading-[25px]">This Is Where ORIINU™ Comes To Life.</Typography>
        </div>
        <div className="w-full max-w-[640px] xl:w-[calc(100%_-_660px)] xl:pt-[25px]">
          <Image src="/images/knowledge-live-exp-right-section.png" alt="Two speakers sharing African Sacred Science with a seated audience" width={1280} height={1414} sizes="(min-width: 1280px) 45vw, (min-width: 768px) 640px, 100vw" className="h-auto w-full" />
        </div>
      </Container>
    </section>
  );
}
