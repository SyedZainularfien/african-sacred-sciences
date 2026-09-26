import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Typography } from "@/components/ui/typography";

const founders = [
  {
    name: "Dr. Enyinna Erengwa",
    image: "/images/founders/dr-enyinna-erengwa.png",
  },
  {
    name: 'Dr. Adedunmola "Dee" Adio-Moses Erengwa',
    image: "/images/founders/dr-dee.png",
  },
];

export function FoundersSection() {
  return (
    <section
      id="founders"
      aria-labelledby="founders-title"
      className="bg-black py-16 text-white sm:py-20 lg:pb-[60px] lg:pt-20"
    >
      <Container className="flex flex-col items-center gap-10 sm:gap-12 lg:gap-[60px]">
        <header className="flex flex-col items-center gap-5 text-center lg:gap-[25px] lg:pl-[78px]">
          <Typography variant="xs" className="font-semibold uppercase leading-[17px] tracking-[0.2em] text-gold xl:[font-size:12px]! xl:tracking-[2.42px]">
            The People Behind the Work
          </Typography>
          <div className="flex flex-col items-center gap-5">
          <Typography
            as="h2"
            variant="mdMedium"
            id="founders-title"
            className="[font-size:clamp(2.25rem,3.4vw,6rem)]! leading-[1.15] xl:[font-size:48px]! xl:leading-[1.083333] xl:[text-box-trim:trim-both] xl:[text-box-edge:cap_alphabetic]"
          >
            Meet the{" "}
            <span className="bg-plum-gradient bg-clip-text font-serif [font-size:1.12em]! italic leading-[0.9] text-transparent xl:[font-size:1.208333em]! xl:leading-[1.158621]">
              Founders
            </span>
          </Typography>
          <Typography variant="mdMedium" className="text-xl leading-[1.4] text-gold lg:[font-size:clamp(1.25rem,2vw,3.5rem)]! xl:bg-gold-gradient xl:bg-clip-text xl:[font-size:28px]! xl:leading-[1.821429] xl:text-transparent">
            A Shared Life of Leadership, Enterprise, Wisdom, and Service
          </Typography>
          </div>
        </header>

        <div className="flex w-full flex-col gap-8 sm:gap-10 lg:max-w-[1080px] lg:gap-[60px]">
          <ul className="flex flex-col items-stretch gap-5 md:flex-row lg:gap-5">
            {founders.map(({ name, image }) => (
              <li key={name} className="flex min-w-0 flex-1 flex-col overflow-hidden rounded-[24px] border border-plum lg:rounded-[22px]">
                <Image
                  src={image}
                  alt={name}
                  width={1587}
                  height={840}
                  sizes="(min-width: 1024px) 37vw, (min-width: 768px) 45vw, 100vw"
                  className="h-auto w-full lg:aspect-[528/280] lg:object-cover"
                />
                <div className="flex min-h-[77px] flex-1 items-center px-5 py-6 sm:px-7 lg:items-start lg:pb-5 lg:pt-[28px]">
                  <Typography as="h3" variant="mdMedium" className="text-lg font-semibold leading-[1.3] lg:[font-size:clamp(1rem,1.4vw,2.5rem)]! xl:[font-size:20px]! xl:leading-[25.2px]">
                    {name}
                  </Typography>
                </div>
              </li>
            ))}
          </ul>

          <Typography variant="md" className="text-center leading-[1.7] text-white/75 sm:text-lg lg:[font-size:clamp(1.125rem,1.65vw,3rem)]! xl:[font-size:24px]! xl:leading-[40px] xl:text-grey">
            Dr. Enyinna Erengwa and Dr. Adedunmola “Dee” Adio-Moses Erengwa are global
            consultants, established entrepreneurs, authors, spiritual teachers, and
            co-founders of African Sacred Science™ and its expanding knowledge
            ecosystem. Their combined experience spans banking and finance,
            international consulting, entrepreneurship, organizational leadership,
            education, publishing, spiritual formation, and humanitarian service.
          </Typography>
        </div>
      </Container>
    </section>
  );
}
