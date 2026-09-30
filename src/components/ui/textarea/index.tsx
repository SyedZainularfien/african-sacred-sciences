import type { TextareaHTMLAttributes } from "react";
import { Typography } from "@/components/ui/typography";
import { fieldClassName, fieldLabelClassName } from "@/components/ui/field-styles";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
  error?: string;
}

export function Textarea({ id, label, error, required, className = "", ...props }: TextareaProps) {
  const errorId = `${id}-error`;

  return (
    <div className="flex flex-col gap-1.5 sm:gap-2">
      <label htmlFor={id} className={fieldLabelClassName}>
        <Typography as="span" variant="sm" className="font-semibold">{label}</Typography>
        {required && <span aria-hidden="true" className="text-plum"> *</span>}
      </label>
      <textarea
        id={id}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`${fieldClassName} min-h-28 resize-y px-3.5 py-2.5 sm:min-h-40 sm:px-4 sm:py-3 ${className}`}
        {...props}
      />
      {error && <Typography as="span" id={errorId} variant="xs" className="text-plum">{error}</Typography>}
    </div>
  );
}
