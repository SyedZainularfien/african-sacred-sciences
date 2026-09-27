import { Container } from "@/components/layout/container";
import { DimensionIcon } from "@/components/doctrine/dimension-icon";
import { Typography } from "@/components/ui/typography";
import { DOCTRINE_DIAGRAM_DIMENSIONS } from "@/constants/doctrine";

function DimensionsDiagram() {
  return (
    <div aria-hidden="true" className="relative aspect-[620/600] w-full max-w-[620px] shrink-0 self-center">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 620 600" fill="none">
        <g stroke="#c69b34" strokeOpacity="0.12" strokeWidth="0.8">
          <circle cx="330" cy="290" r="120" />
          <circle cx="330" cy="290" r="175" />
          <circle cx="330" cy="290" r="220" />
          <path d="M330 90 520 228 445 450 215 450 140 228Z" />
          <path d="M330 290V90M330 290 520 228M330 290 445 450M330 290 215 450M330 290 140 228" />
        </g>
        <circle cx="330" cy="290" r="72" fill="#5b194f" stroke="#c69b34" strokeOpacity="0.5" />
      </svg>
      <Typography as="span" variant="sm" className="absolute left-[53.2%] top-[48.3%] -translate-x-1/2 -translate-y-1/2 text-center font-serif! text-[clamp(11px,1vw,14px)]! italic leading-[1.3] text-white/85">
        Divine<br />Alignment
      </Typography>
      {DOCTRINE_DIAGRAM_DIMENSIONS.map(({ name, alignment, icon, point, label }) => (
        <div key={name}>
          <span className={`absolute ${point} flex h-[clamp(24px,2.5vw,36px)] w-[clamp(24px,2.5vw,36px)] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold/30 bg-[#291126]/80`}>
            <DimensionIcon icon={icon} className="h-4 w-4" />
          </span>
          <div className={`absolute ${label} flex w-[clamp(100px,11vw,150px)] -translate-x-1/2 flex-col items-center gap-1 text-center`}>
            <Typography as="span" variant="sm" className="text-[clamp(10px,1vw,14px)]! leading-[1.2] text-white/80">{name}</Typography>
            <Typography as="span" variant="xs" className="text-[clamp(9px,0.9vw,12px)]! leading-[1.2] text-gold">{alignment}</Typography>
          </div>
        </div>
      ))}
    </div>
  );
}

export function DoctrineDimensionsSection() {
  return (
    <section id="dimensions" aria-labelledby="dimensions-title" className="overflow-hidden bg-[#0d0319] bg-[radial-gradient(ellipse_45%_65%_at_34%_50%,rgba(79,19,69,0.33),transparent_80%)] py-16 text-white xl:pb-[98px] xl:pt-[90px]">
      <Container className="flex flex-col gap-12 xl:flex-row xl:items-start xl:gap-[6.62%]">
        <div className="w-full xl:w-[47.7%]">
          <DimensionsDiagram />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-9">
          <div className="flex flex-col gap-5">
            <Typography as="span" variant="xs" className="font-semibold uppercase tracking-[0.25em] text-gold">The Five Dimensions</Typography>
            <Typography as="h2" id="dimensions-title" variant="mdMedium" className="text-[clamp(2.5rem,3vw,2.75rem)]! leading-[1.2]">
              Five Dimensions of <span className="bg-plum-gradient bg-clip-text font-serif text-[1.12em]! italic text-transparent">Alignment</span>
            </Typography>
            <Typography variant="md" className="max-w-[540px] leading-[30px] text-white/75">
              The Doctrine of Divine Alignment examines five interconnected dimensions of human life — each drawing on African philosophical and wisdom traditions, each inviting a different quality of attention.
            </Typography>
          </div>

          <ul className="flex flex-col gap-6">
            {DOCTRINE_DIAGRAM_DIMENSIONS.map(({ name, alignment, description, icon }) => (
              <li key={name} className="flex items-start gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/25 bg-gold/[0.06]">
                  <DimensionIcon icon={icon} className="h-4 w-4" />
                </span>
                <div className="flex flex-col gap-1">
                  <Typography as="h3" variant="xs" className="text-[13px]! font-semibold uppercase tracking-[0.15em] text-gold">
                    {name} — {alignment}
                  </Typography>
                  <Typography variant="sm" className="leading-[1.55] text-white/75 sm:text-[15px]!">
                    {description}
                  </Typography>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
