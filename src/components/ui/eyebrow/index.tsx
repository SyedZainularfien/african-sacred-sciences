import type { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
}

export function Eyebrow({ children }: EyebrowProps) {
  return <p className="text-sm font-medium uppercase tracking-wide text-zinc-600">{children}</p>;
}
