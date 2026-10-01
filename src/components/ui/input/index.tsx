import type { InputHTMLAttributes } from "react";
import { Typography } from "@/components/ui/typography";
import { fieldClassName, fieldLabelClassName } from "@/components/ui/field-styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  error?: string;
}

export function Input({ id, label, error, required, className = "", ...props }: InputProps) {
  const errorId = `${id}-error`;

  return (
    <div className="flex min-w-0 flex-1 flex-col gap-1.5 sm:gap-2">
      <label htmlFor={id} className={fieldLabelClassName}>
        <Typography as="span" variant="sm" className="font-semibold">{label}</Typography>
        {required && <span aria-hidden="true" className="text-plum"> *</span>}
      </label>
      <input
        id={id}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`${fieldClassName} h-11 px-3.5 sm:h-14 sm:px-4 ${className}`}
        {...props}
      />
      {error && <Typography as="span" id={errorId} variant="xs" className="text-red-600">{error}</Typography>}
    </div>
  );
}
