import Image from "next/image";
import { Typography } from "@/components/ui/typography";

export function ContentSection() {
  return (
    <section aria-labelledby="what-is-african-sacred-science" className="grid bg-background-yellow lg:min-h-[800px] lg:grid-cols-[52.5%_47.5%]">
      <div className="flex items-center px-5 py-16 sm:px-8 sm:py-20 lg:py-16 lg:pl-[4.86vw] lg:pr-10">
        <div className="w-full max-w-[640px]">
          <Typography as="p" variant="md" className="mb-3 text-md font-medium text-gold">What Is African Sacred Science?</Typography>

          <Typography id="what-is-african-sacred-science" variant="h2" className="leading-[1.05] text-full-black">
            <span className="block font-sans text-[clamp(2.5rem,4vw,3.5rem)] font-medium">
              Africa&apos;s Wisdom Is
            </span>
            <span className="mt-1 block bg-plum-gradient bg-clip-text pb-2 font-serif text-[clamp(3rem,4.5vw,4rem)] font-bold italic leading-[0.95] text-transparent">
              Vast, Diverse and Living.
            </span>
          </Typography>

          <div className="mt-6 space-y-6 text-md leading-7 text-full-black/85 sm:mt-8 sm:leading-8">
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

          <div className="mt-10 rounded-2xl border border-gold bg-[#f1e5c5] px-5 py-5 text-full-black sm:mt-12 sm:px-7 sm:py-6">
            <h3 className="font-sans text-md font-semibold sm:text-lg">
              Africa Is Not One Tradition.
            </h3>
            <Typography as="p" variant="sm" className="mt-2 text-sm leading-7 sm:text-md sm:leading-8">
              African Sacred Science recognizes both shared patterns of wisdom and important
              differences among traditions. This distinction is fundamental to how the work is
              conducted.
            </Typography>
          </div>
        </div>
      </div>

      <div className="relative hidden overflow-hidden bg-black lg:block lg:min-h-full">
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
