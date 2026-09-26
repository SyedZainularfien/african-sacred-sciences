import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Typography } from "@/components/ui/typography";

export const buttonVariants = cva(
  "inline-flex max-w-full min-w-0 items-center justify-center gap-3 rounded-full border text-center",
  {
    variants: {
      variant: {
        primary: "border-transparent bg-gold-gradient text-full-black",
        outline: "border-plum bg-full-black text-white",
      },
      size: {
        default: "px-4 py-3.5 sm:px-6 sm:py-4",
        compact: "px-4 py-2.5 sm:px-[22px] sm:py-[9px]",
      },
      width: {
        auto: "w-fit",
        full: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      width: "auto",
    },
  },
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  showArrow?: boolean;
}

export function Button({
  children,
  className,
  showArrow = false,
  type = "button",
  variant,
  size,
  width,
  ...props
}: ButtonProps) {
  return (
    <button className={buttonVariants({ variant, size, width, className })} type={type} {...props}>
      <Typography as="span" variant="cta" className="max-sm:text-sm">
        {children}
      </Typography>
      {showArrow ? (
        <svg
          aria-hidden="true"
          className="h-5 w-5 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 12h16m-7-7 7 7-7 7" />
        </svg>
      ) : null}
    </button>
  );
}
