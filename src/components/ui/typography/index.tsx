import { cva, type VariantProps } from "class-variance-authority";
import type { ElementType, HTMLAttributes } from "react";

export const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "font-serif text-h1 font-bold",
      h2: "font-serif text-h2 font-bold",
      h3: "font-serif text-h3 font-bold",
      h4: "font-serif text-h4 font-bold",
      h5: "font-serif text-h5 font-bold",
      h6: "font-serif text-h6 font-bold",
      cta: "font-sans text-md font-semibold leading-[1.625]",
      xl: "font-sans text-xl font-normal",
      lg: "font-sans text-lg font-normal",
      md: "font-sans text-md font-normal",
      mdMedium: "font-sans text-md font-medium",
      sm: "font-sans text-sm font-normal",
      smLight: "font-sans text-sm font-light",
      xs: "font-sans text-xs font-light",
    },
  },
  defaultVariants: {
    variant: "md",
  },
});

type TypographyVariant = NonNullable<VariantProps<typeof typographyVariants>["variant"]>;

const defaultElements: Record<TypographyVariant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  cta: "span",
  xl: "p",
  lg: "p",
  md: "p",
  mdMedium: "p",
  sm: "p",
  smLight: "p",
  xs: "p",
};

interface TypographyProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: ElementType;
}

export function Typography({ as, className, variant, ...props }: TypographyProps) {
  const resolvedVariant = variant ?? "md";
  const Component = as ?? defaultElements[resolvedVariant];

  return <Component className={typographyVariants({ variant: resolvedVariant, className })} {...props} />;
}
