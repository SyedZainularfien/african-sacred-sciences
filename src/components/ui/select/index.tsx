"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { CaretDownIcon } from "@phosphor-icons/react/dist/csr/CaretDown";
import { CheckIcon } from "@phosphor-icons/react/dist/csr/Check";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  id: string;
  name: string;
  value: string;
  placeholder: string;
  options: readonly SelectOption[];
  onValueChange: (value: string) => void;
  className?: string;
  labelId: string;
  required?: boolean;
  invalid?: boolean;
  errorId?: string;
}

export function Select({ id, name, value, placeholder, options, onValueChange, className = "", labelId, required = false, invalid = false, errorId }: SelectProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listId = useId();
  const selectedIndex = options.findIndex((option) => option.value === value);

  useEffect(() => {
    if (!open) return;
    const closeOutside = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, [open]);

  function choose(index: number) {
    onValueChange(options[index].value);
    setOpen(false);
    triggerRef.current?.focus();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      if (!open) {
        setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);
        setOpen(true);
      } else {
        setActiveIndex((current) => (current + (event.key === "ArrowDown" ? 1 : -1) + options.length) % options.length);
      }
    } else if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      setActiveIndex(event.key === "Home" ? 0 : options.length - 1);
      setOpen(true);
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (open) choose(activeIndex);
      else {
        setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);
        setOpen(true);
      }
    } else if (event.key === "Escape" || event.key === "Tab") {
      setOpen(false);
    }
  }

  return (
    <div ref={rootRef} className="relative w-full">
      <input type="hidden" name={name} value={value} />
      <button
        ref={triggerRef}
        id={id}
        type="button"
        role="combobox"
        aria-labelledby={labelId}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-activedescendant={open ? `${listId}-option-${activeIndex}` : undefined}
        aria-required={required}
        aria-invalid={invalid}
        aria-describedby={invalid ? errorId : undefined}
        onClick={() => {
          setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);
          setOpen((current) => !current);
        }}
        onKeyDown={handleKeyDown}
        className={`flex items-center justify-between gap-3 text-left ${className} ${open ? "border-plum ring-2 ring-plum/15" : ""}`}
      >
        <span className={`min-w-0 flex-1 truncate ${value ? "text-[#241526]" : "text-[#91858e]"}`}>{selectedIndex >= 0 ? options[selectedIndex].label : placeholder}</span>
        <span aria-hidden="true" className="flex size-7 shrink-0 items-center justify-center rounded-lg border border-plum/10 bg-[#f7f3f5] text-plum sm:size-8">
          <CaretDownIcon size={16} weight="bold" className={`transition-transform ${open ? "rotate-180" : ""}`} />
        </span>
      </button>
      {open && (
        <div id={listId} role="listbox" aria-labelledby={labelId} className="absolute inset-x-0 top-[calc(100%+0.5rem)] z-30 flex flex-col gap-1 rounded-2xl border border-plum/20 bg-[#fffdf8] p-1.5 shadow-[0_20px_55px_rgba(42,17,43,0.2)]">
          {options.map((option, index) => (
            <button
              key={option.value}
              id={`${listId}-option-${index}`}
              type="button"
              role="option"
              aria-selected={value === option.value}
              tabIndex={-1}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => choose(index)}
              className={`flex min-h-11 items-center justify-between gap-3 rounded-xl px-3.5 py-2 text-left text-sm transition-colors sm:px-4 ${activeIndex === index ? "bg-plum/10 text-plum" : "text-[#342935] hover:bg-plum/5"}`}
            >
              <span>{option.label}</span>
              {value === option.value && <CheckIcon aria-hidden="true" size={17} weight="bold" className="shrink-0 text-plum" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
