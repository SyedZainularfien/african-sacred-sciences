export type DimensionIconKind = "circle" | "diamond" | "triangle" | "star" | "rings";

export function DimensionIcon({ icon, className = "h-5 w-5" }: { icon: DimensionIconKind; className?: string }) {
  return (
    <svg aria-hidden="true" className={`shrink-0 text-gold ${className}`} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
      {icon === "circle" && <circle cx="10" cy="10" r="7" />}
      {icon === "diamond" && <path d="M10 3 17 10 10 17 3 10Z" />}
      {icon === "triangle" && <path d="M10 3 17 17H3Z" />}
      {icon === "star" && <path d="m10 2 2.1 5.9L18 10l-5.9 2.1L10 18l-2.1-5.9L2 10l5.9-2.1Z" fill="currentColor" stroke="none" />}
      {icon === "rings" && <><circle cx="10" cy="10" r="7" /><circle cx="10" cy="10" r="4" /></>}
    </svg>
  );
}
