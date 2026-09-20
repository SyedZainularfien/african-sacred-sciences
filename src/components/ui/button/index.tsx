import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children, className = "", type = "button", ...props }: ButtonProps) {
  return (
    <button
      className={`rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white ${className}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
