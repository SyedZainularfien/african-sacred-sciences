import Image from "next/image";
import { Typography } from "@/components/ui/typography";

export function ContentSection() {
  return (
    <section aria-labelledby="what-is-african-sacred-science" className="flex bg-background-yellow lg:min-h-[800px]">
      <div className="flex w-full items-start px-5 py-16 sm:px-8 sm:py-20 lg:w-[52.430556%] lg:pb-16 lg:pl-[4.861111%] lg:pr-[45px] lg:pt-20">
        <div className="flex w-full max-w-[640px] flex-col gap-[60px]">
          <div className="flex flex-col gap-[30px]">
          <div className="flex flex-col gap-[10px]">
          <Typography as="p" variant="mdMedium" className="leading-[17px] text-gold">What Is African Sacred Science?</Typography>

          <Typography id="what-is-african-sacred-science" variant="h2" className="flex flex-col text-full-black">
            <span className="font-sans [font-size:clamp(2.5rem,4vw,3rem)]! font-medium leading-[57px]">
              Africa&apos;s Wisdom Is
            </span>
            <span className="bg-plum-gradient bg-clip-text font-serif [font-size:clamp(3rem,4.5vw,3.625rem)]! font-bold italic leading-[58px] text-transparent">
              Vast, Diverse and Living.
            </span>
          </Typography>

          </div>
          <div className="flex max-w-[633px] flex-col gap-5 text-full-black/85 [&>p]:leading-[30.94px]">
            <Typography as="p" variant="md">
              African Sacred Science™ is a contemporary body of knowledge, studying, preserving
              and applying knowledge drawn from Africa&apos;s diverse philosophical, spiritual,
              ethical and indigenous intellectual traditions.
            </Typography>
            <Typography as="p" variant="md">
              Across African societies, questions of identity, destiny, character, community,
              nature, prosperity, healing and the Divine were often understood as interconnected
              dimensions of life. African Sacred Science explores these relationships while
              respecting the differences among Africa&apos;s many peoples, languages, civilizations
              and knowledge traditions.
            </Typography>
          </div>

          </div>
          <div className="flex flex-col gap-[10px] rounded-[18px] border border-gold bg-[#f1e5c5] px-5 py-6 text-full-black sm:px-7">
            <Typography as="h3" variant="md" className="font-semibold leading-[18px]">
              Africa Is Not One Tradition.
            </Typography>
            <Typography as="p" variant="sm" className="[font-size:15px]! leading-[25.8px]">
              African Sacred Science recognizes both shared patterns of wisdom and important
              differences among traditions. This distinction is fundamental to how the work is
              conducted.
            </Typography>
          </div>
        </div>
      </div>

      <div className="relative hidden flex-1 overflow-hidden bg-black lg:block">
        <Image
          src="/images/what-is-african-sceince-rightside-image.png"
          alt=""
          fill
          sizes="(min-width: 1024px) 47.5vw, 100vw"
          className="object-cover brightness-[1.7] contrast-[1.15]"
        />
        <Image
          src="/images/african-science-rightisde-image-color-enhancer.png"
          alt=""
          fill
          sizes="(min-width: 1024px) 47.5vw, 100vw"
          className="object-cover mix-blend-color"
        />
      </div>
    </section>
  );
}
