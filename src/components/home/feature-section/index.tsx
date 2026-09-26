import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Typography } from "@/components/ui/typography";

const features = [
  { title: "Identity", question: "Who am I?", icon: "1.png" },
  { title: "Destiny", question: "What am I becoming?", icon: "2.png" },
  { title: "Character", question: "Who must I become?", icon: "3.png" },
  { title: "Consciousness", question: "What am I aware of?", icon: "4.png" },
  { title: "Community", question: "Who am I responsible to?", icon: "5.png" },
  { title: "Prosperity", question: "What does flourishing mean?", icon: "6.png" },
  { title: "Nature", question: "How are we connected?", icon: "7.png" },
  { title: "Leadership", question: "How should power be used?", icon: "8.png" },
  { title: "The Divine", question: "What is my relationship with the sacred?", icon: "9.png" },
] as const;

export function FeatureSection() {
  return (
    <section
      aria-labelledby="wisdom-for-the-future"
      className="py-16 text-white sm:py-20 lg:py-24"
      style={{
        background:
          "radial-gradient(80% 60% at 50% 0%, rgba(107, 27, 92, 0.45) 0%, rgba(107, 27, 92, 0) 65%), #130b1d",
      }}
    >
      <Container>
        <div className="mx-auto max-w-[1120px] text-center">
          <Typography as="p" variant="xs" className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            The Wisdom We Need for the Future
          </Typography>

          <Typography id="wisdom-for-the-future" variant="h2" className="mt-5 leading-[1.12]">
            <span className="block font-sans text-[clamp(2rem,4vw,3.5rem)] font-medium">
              What If Some of the
            </span>
            <span className="my-1 block bg-plum-gradient bg-clip-text pb-2 font-serif text-[clamp(2.75rem,5vw,4.5rem)] font-bold italic leading-[0.95] text-transparent">
              Wisdom We Need for the Future
            </span>
            <span className="block font-sans text-[clamp(2rem,4vw,3.5rem)] font-medium">
              Has Been With Us All Along?
            </span>
          </Typography>

          <Typography variant="md" className="mx-auto mt-7 max-w-[1050px] leading-7 text-white/70 sm:mt-8 sm:leading-8">
            For generations, important African knowledge has been fragmented, overlooked,
            misunderstood or separated from the intellectual traditions that produced it. African
            Sacred Science seeks to bring these traditions into renewed conversation with
            contemporary life.
          </Typography>
        </div>

        <ul className="mt-14 grid gap-4 sm:mt-16 md:grid-cols-2 xl:grid-cols-3 xl:gap-5">
          {features.map(({ title, question, icon }) => (
            <li
              key={title}
              className="flex min-h-[116px] items-center gap-5 rounded-2xl border border-gold/18 bg-white/5 px-5 py-5 sm:gap-6 sm:px-8"
            >
              <Image
                src={`/images/wisdom-for-future/${icon}`}
                alt=""
                width={160}
                height={158}
                className="h-16 w-16 shrink-0 object-contain sm:h-20 sm:w-20"
              />
              <div className="min-w-0">
                <h3 className="text-lg font-semibold leading-tight">{title}</h3>
                <Typography as="p" variant="md" className="mt-1 text-md leading-snug text-white/70">{question}</Typography>
              </div>
            </li>
          ))}
        </ul>

        <Typography as="p" variant="md" className="mx-auto mt-12 max-w-[760px] bg-gold-gradient bg-clip-text text-center font-serif text-[clamp(1.75rem,2.4vw,2.25rem)] font-semibold italic leading-[1.3] text-transparent [-webkit-text-fill-color:transparent] sm:mt-14">
          Ancient knowledge does not have to remain in the past.
          <span className="block">It can help illuminate the future.</span>
        </Typography>
      </Container>
    </section>
  );
}
