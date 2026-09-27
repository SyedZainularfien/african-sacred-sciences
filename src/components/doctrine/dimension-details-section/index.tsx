import { Container } from "@/components/layout/container";
import {
  DimensionIcon,
  type DimensionIconKind,
} from "@/components/doctrine/dimension-icon";
import { Typography } from "@/components/ui/typography";

const dimensions = [
  {
    name: "Orí Inú",
    alignment: "Inner Alignment",
    summary: "The inner self, consciousness and sense of direction.",
    icon: "circle",
    paragraphs: [
      "In many African philosophical traditions, the inner head — Orí Inú — represents the deepest aspect of a person's identity: the guiding intelligence that carries purpose, memory and orientation.",
      "African Sacred Science understands this as the dimension of inner alignment — the relationship between the consciousness we inhabit, the choices we make, and the direction we move in. A life of greater alignment begins with a deeper understanding of the self that is directing it.",
    ],
    reflection: "Who is the self that is making this decision?",
  },
  {
    name: "Ìwà Pẹ̀lẹ́",
    alignment: "Character Alignment",
    summary:
      "The cultivation of sacred character, integrity and responsible conduct.",
    icon: "diamond",
    paragraphs: [
      "Across many African wisdom traditions, character is understood as the foundation of a meaningful life. Ìwà Pẹ̀lẹ́ — often translated as 'gentle character' — points to the careful, deliberate cultivation of the qualities that allow a person to act with integrity, care and wisdom.",
      "African Sacred Science recognises that character is not simply a product of talent or circumstance. It is something cultivated through practice, reflection and lived experience. The alignment of character with aspiration is one of the central disciplines of the tradition.",
    ],
    reflection: "Does how I am living reflect who I want to become?",
  },
  {
    name: "Àyànmọ̀",
    alignment: "Purpose Alignment",
    summary:
      "Living consciously in relationship with destiny, calling and meaningful purpose.",
    icon: "triangle",
    paragraphs: [
      "African philosophical traditions have long engaged with the question of destiny — not as a fixed, unalterable script, but as a chosen direction that can be entered more or less consciously.",
      "Àyànmọ̀ speaks to the idea that each person comes into life with an inherent orientation — a calling that can be developed, neglected or more fully inhabited. Purpose alignment is the practice of bringing one's choices, commitments and daily direction into greater relationship with that deeper calling.",
    ],
    reflection: "Am I moving toward something that genuinely matters?",
  },
  {
    name: "Àṣẹ",
    alignment: "Creative Alignment",
    summary:
      "Bringing speech, intention and action into responsible creative expression.",
    icon: "star",
    paragraphs: [
      "Àṣẹ is one of the most widely recognised concepts in Yorùbá thought — the creative power that moves through speech, intention and action. It points to the understanding that what we say and do carries genuine creative force.",
      "African Sacred Science holds that a life of alignment requires attentiveness to the power of expression: the words we use, the intentions we carry, and the actions we choose. Creative alignment is the practice of bringing these into greater coherence, responsibility and purposeful direction.",
    ],
    reflection:
      "Do my words, intentions and actions move in the same direction?",
  },
  {
    name: "Community",
    alignment: "Relational Alignment",
    summary:
      "Understanding that individual flourishing is inseparable from responsibility, relationship and community.",
    icon: "rings",
    paragraphs: [
      "One of the most distinctive features of African philosophical traditions is the understanding that personhood is fundamentally relational. An individual does not flourish in isolation — flourishing is always also a communal and relational matter.",
      "This dimension of alignment invites us to consider how our choices, actions and direction affect those around us. Relational alignment recognises that the health of our relationships, our contribution to community and our sense of responsibility to others are not separate from personal flourishing — they are constitutive of it.",
    ],
    reflection: "How do my choices affect those I am responsible to?",
  },
] as const satisfies ReadonlyArray<{
  name: string;
  alignment: string;
  summary: string;
  icon: DimensionIconKind;
  paragraphs: readonly string[];
  reflection: string;
}>;

export function DoctrineDimensionDetailsSection() {
  return (
    <section
      id="dimension-details"
      aria-labelledby="dimension-details-title"
      className="bg-background-yellow py-16 text-full-black lg:pb-[100px] lg:pt-20"
    >
      <Container className="flex flex-col items-center gap-14">
        <div className="flex flex-col items-center gap-3 text-center">
          <Typography
            as="span"
            variant="xs"
            className="font-semibold uppercase tracking-[0.25em] text-gold"
          >
            Each Dimension
          </Typography>
          <Typography
            as="h2"
            id="dimension-details-title"
            variant="mdMedium"
            className="text-[clamp(2.5rem,4vw,2.75rem)]! leading-[1.2]"
          >
            Understanding the
            <br />
            Dimensions of{" "}
            <span className="bg-plum-gradient bg-clip-text font-serif text-[1.08em]! italic text-transparent">
              Alignment
            </span>
          </Typography>
        </div>

        <div className="flex w-full max-w-[1200px] flex-col gap-7">
          {dimensions.map(
            (
              { name, alignment, summary, icon, paragraphs, reflection },
              index,
            ) => (
              <article
                key={name}
                className="flex flex-col overflow-hidden rounded-[20px] border border-[#e6d9cf] bg-[#faf8f4] lg:flex-row"
              >
                <div
                  className={`flex flex-col justify-center gap-5 px-8 py-9 text-white lg:w-[280px] lg:shrink-0 lg:px-9 ${index % 2 === 0 ? "bg-[linear-gradient(135deg,#10051d,#2b0d3d)]" : "bg-[linear-gradient(135deg,#26072f,#6d195d)]"}`}
                >
                  <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-gold/35 bg-gold/[0.06]">
                    <DimensionIcon icon={icon} className="h-6 w-6" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <Typography
                      as="h3"
                      variant="xl"
                      className="font-medium leading-[1.2]"
                    >
                      {name}
                    </Typography>
                    <Typography
                      as="span"
                      variant="xs"
                      className="font-semibold uppercase tracking-[0.18em] text-gold"
                    >
                      {alignment}
                    </Typography>
                  </div>
                  <Typography
                    variant="sm"
                    className="font-serif! text-[16px]! italic leading-[1.45] text-white/70"
                  >
                    {summary}
                  </Typography>
                </div>

                <div className="flex min-w-0 flex-1 flex-col justify-between gap-6 px-6 py-9 sm:px-9 lg:px-11 lg:pb-9 lg:pt-11">
                  <div className="flex flex-col gap-5">
                    {paragraphs.map((paragraph) => (
                      <Typography
                        key={paragraph}
                        variant="md"
                        className="leading-[30px] text-[#282828]"
                      >
                        {paragraph}
                      </Typography>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2 rounded-[14px] border border-l-4 border-plum bg-plum/[0.055] px-5 py-4">
                    <Typography
                      as="span"
                      variant="sm"
                      className="font-semibold text-plum"
                    >
                      A Reflection
                    </Typography>
                    <Typography
                      as="span"
                      variant="md"
                      className="font-serif! text-[17px]! italic leading-[1.4] text-[#282828]"
                    >
                      &quot;{reflection}&quot;
                    </Typography>
                  </div>
                </div>
              </article>
            ),
          )}
        </div>
      </Container>
    </section>
  );
}
