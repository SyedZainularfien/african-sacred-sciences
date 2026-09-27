import type { DimensionIconKind } from "@/components/doctrine/dimension-icon";

export const DOCTRINE_DIAGRAM_DIMENSIONS = [
  {
    name: "Orí Inú",
    alignment: "Inner Alignment",
    description: "The inner self, consciousness and sense of direction.",
    icon: "circle",
    point: "left-[53.2%] top-[15%]",
    label: "left-[53.2%] top-[3%]",
  },
  {
    name: "Ìwà Pẹ̀lẹ́",
    alignment: "Character Alignment",
    description: "The cultivation of sacred character, integrity and responsible conduct.",
    icon: "diamond",
    point: "left-[83.9%] top-[38%]",
    label: "left-[83.9%] top-[46%]",
  },
  {
    name: "Àyànmọ̀",
    alignment: "Purpose Alignment",
    description: "Living consciously in relationship with destiny, calling and meaningful purpose.",
    icon: "triangle",
    point: "left-[71.8%] top-[75%]",
    label: "left-[71.8%] top-[79%]",
  },
  {
    name: "Àṣẹ",
    alignment: "Creative Alignment",
    description: "Bringing speech, intention and action into responsible creative expression.",
    icon: "star",
    point: "left-[34.7%] top-[75%]",
    label: "left-[34.7%] top-[79%]",
  },
  {
    name: "Community",
    alignment: "Relational Alignment",
    description: "Understanding that individual flourishing is inseparable from responsibility, relationship and community.",
    icon: "rings",
    point: "left-[22.6%] top-[38%]",
    label: "left-[22.6%] top-[46%]",
  },
] as const satisfies ReadonlyArray<{
  name: string;
  alignment: string;
  description: string;
  icon: DimensionIconKind;
  point: string;
  label: string;
}>;

export const DOCTRINE_HERO_DIMENSIONS = [
  { icon: "circle", label: "Inner Alignment" },
  { icon: "diamond", label: "Character Alignment" },
  { icon: "triangle", label: "Purpose Alignment" },
  { icon: "star", label: "Creative Alignment" },
  { icon: "rings", label: "Relational Alignment" },
] as const;

export const DOCTRINE_DIMENSION_DETAILS = [
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

export const DOCTRINE_HERO_RING_RADII = [80, 160, 240, 320, 400, 480] as const;

export const DOCTRINE_CLOSING_RING_RADII = [110, 220, 330, 440] as const;
