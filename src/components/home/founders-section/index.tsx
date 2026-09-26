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
      className="bg-black py-16 text-white sm:py-20 lg:pb-[2.5vw] lg:pt-[5.4vw]"
    >
      <Container className="flex flex-col items-center gap-10 sm:gap-12 lg:gap-[4.8vw]">
        <header className="flex flex-col items-center gap-5 text-center lg:gap-[1.3vw]">
          <Typography variant="xs" className="font-semibold uppercase tracking-[0.2em] text-gold xl:text-[12px] xl:tracking-[2.42px]">
            The People Behind the Work
          </Typography>
          <Typography
            as="h2"
            variant="mdMedium"
            id="founders-title"
            className="text-[clamp(2.25rem,3.4vw,6rem)] leading-[1.15] xl:text-[clamp(3rem,3.333333vw,6rem)] xl:leading-[1.083333]"
          >
            Meet the{" "}
            <span className="bg-plum-gradient bg-clip-text font-serif text-[1.12em] italic leading-[0.9] text-transparent xl:text-[1.208333em] xl:leading-[1.158621]">
              Founders
            </span>
          </Typography>
          <Typography variant="mdMedium" className="text-xl leading-[1.4] text-gold lg:text-[clamp(1.25rem,2vw,3.5rem)] xl:bg-gold-gradient xl:bg-clip-text xl:text-[clamp(1.75rem,1.944444vw,3.5rem)] xl:leading-[1.821429] xl:text-transparent">
            A Shared Life of Leadership, Enterprise, Wisdom, and Service
          </Typography>
        </header>

        <div className="flex w-full flex-col gap-8 sm:gap-10 lg:w-5/6 lg:gap-[4.2vw]">
          <ul className="flex flex-col items-stretch gap-5 md:flex-row lg:gap-[1.3vw]">
            {founders.map(({ name, image }) => (
              <li key={name} className="flex min-w-0 flex-1 flex-col overflow-hidden rounded-[24px] border border-plum lg:rounded-[1.5vw]">
                <Image
                  src={image}
                  alt={name}
                  width={1587}
                  height={840}
                  sizes="(min-width: 1024px) 37vw, (min-width: 768px) 45vw, 100vw"
                  className="h-auto w-full"
                />
                <div className="flex flex-1 items-center px-5 py-6 sm:px-7 lg:px-[2vw] lg:py-[1.8vw]">
                  <Typography as="h3" variant="mdMedium" className="text-lg font-semibold leading-[1.3] lg:text-[clamp(1rem,1.4vw,2.5rem)] xl:text-[20px] xl:leading-[25.2px]">
                    {name}
                  </Typography>
                </div>
              </li>
            ))}
          </ul>

          <Typography variant="md" className="text-center leading-[1.7] text-white/75 sm:text-lg lg:text-[clamp(1.125rem,1.65vw,3rem)] xl:text-[24px] xl:leading-[40px] xl:text-grey">
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
