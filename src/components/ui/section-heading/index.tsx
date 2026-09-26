import type { ReactNode } from "react";

interface SectionHeadingProps {
  children: ReactNode;
}

export function SectionHeading({ children }: SectionHeadingProps) {
  return <h2 className="text-2xl font-semibold tracking-tight">{children}</h2>;
}
