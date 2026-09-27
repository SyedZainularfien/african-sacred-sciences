import type { HTMLAttributes, ReactNode } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Container({ children, className = "", ...props }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[2880px] px-5 sm:px-8 lg:px-[4.861111%] ${className}`} {...props}>
      {children}
    </div>
  );
}
