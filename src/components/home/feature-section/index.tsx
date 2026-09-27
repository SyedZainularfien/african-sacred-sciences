import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Typography } from "@/components/ui/typography";

import { features } from "@/constants/home";

export function FeatureSection() {
  return (
    <section
      aria-labelledby="wisdom-for-the-future"
      className="pb-[60px] pt-16 text-white sm:pt-20"
      style={{
        background:
          "radial-gradient(80% 60% at 50% 0%, rgba(107, 27, 92, 0.45) 0%, rgba(107, 27, 92, 0) 65%), #130b1d",
      }}
    >
      <Container className="flex flex-col items-center gap-10">
        <div className="flex w-full flex-col items-center gap-12 lg:gap-[72px]">
        <div className="flex w-full max-w-[1009px] flex-col items-center gap-5 text-center">
          <div className="flex flex-col gap-[10px]">
          <Typography as="p" variant="xs" className="text-xs font-semibold uppercase leading-[17px] tracking-[2.42px] text-gold">
            The Wisdom We Need for the Future
          </Typography>

          <Typography id="wisdom-for-the-future" variant="h2" className="flex flex-col">
            <span className="font-sans [font-size:clamp(2rem,4vw,3rem)]! font-medium leading-[72px]">
              What If Some of the
            </span>
            <span className="bg-plum-gradient bg-clip-text font-serif [font-size:clamp(2.75rem,5vw,3.625rem)]! font-semibold italic leading-[62px] text-transparent">
              Wisdom We Need for the Future
            </span>
            <span className="font-sans [font-size:clamp(2rem,4vw,3rem)]! font-medium leading-[72px]">
              Has Been With Us All Along?
            </span>
          </Typography>

          </div>
          <Typography variant="md" className="leading-8 text-grey">
            For generations, important African knowledge has been fragmented, overlooked,
            misunderstood or separated from the intellectual traditions that produced it. African
            Sacred Science seeks to bring these traditions into renewed conversation with
            contemporary life.
          </Typography>
        </div>

        <ul className="flex w-full flex-wrap gap-5">
          {features.map(({ title, question, icon }) => (
            <li
              key={title}
              className="flex min-h-[125px] w-full items-center gap-5 rounded-[20px] border border-gold/18 bg-white/5 px-5 py-[23px] md:w-[calc((100%_-_20px)/2)] xl:w-[calc((100%_-_40px)/3)] xl:gap-10 xl:px-10"
            >
              <Image
                src={`/images/wisdom-for-future/${icon}`}
                alt=""
                width={160}
                height={158}
                className="h-[77px] w-[78px] shrink-0 object-contain"
              />
              <div className="flex min-w-0 flex-col gap-[15px]">
                <Typography as="h3" variant="xl" className="font-semibold leading-[1.2] xl:[text-box-trim:trim-both] xl:[text-box-edge:cap_alphabetic]">{title}</Typography>
                <Typography as="p" variant="md" className="leading-[22px] text-grey xl:[text-box-trim:trim-both] xl:[text-box-edge:cap_alphabetic]">{question}</Typography>
              </div>
            </li>
          ))}
        </ul>

        </div>
        <Typography as="p" variant="mdMedium" className="max-w-[760px] bg-gold-gradient bg-clip-text text-center font-serif [font-size:26px]! italic leading-[39px] text-transparent [-webkit-text-fill-color:transparent]">
          Ancient knowledge does not have to remain in the past.
          <span className="block">It can help illuminate the future.</span>
        </Typography>
      </Container>
    </section>
  );
}
