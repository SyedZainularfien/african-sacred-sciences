"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "African Sacred Science", href: "/#african-sacred-science" },
  { label: "The Doctrine", href: "/doctrine" },
  { label: "Research", href: "/#research" },
  { label: "ORIINU", href: "/#oriinu" },
  { label: "Books" },
  { label: "Academy" },
  { label: "About", href: "/#founders" },
];

function Brand({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      aria-label="African Sacred Science home"
      onClick={onClick}
      className="block shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
    >
      <Image
        src="/images/header-logo.png"
        alt="African Sacred Science"
        width={328}
        height={99}
        priority
        className="h-auto w-[164px] min-[375px]:w-[180px] sm:w-[200px] min-[90rem]:w-[164px]"
      />
    </Link>
  );
}

function NavigationArrow({ active = false }: { active?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-4 w-4 shrink-0 ${active ? "-rotate-45" : ""}`}
    >
      <path d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  );
}

export function Header({ homePage = false }: { homePage?: boolean }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeItem = homePage ? "Home" : "The Doctrine";

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 90rem)");
    const closeOnDesktop = () => {
      if (desktop.matches) dialogRef.current?.close();
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [menuOpen]);

  function closeMenu() {
    dialogRef.current?.close();
  }

  return (
    <header className="absolute inset-x-0 top-0 z-20 pt-[15px] text-white">
      <Container>
        <div className="flex items-center justify-between gap-4 rounded-[18px] border border-white/5 bg-[#100e12] p-3 pl-4 sm:px-5 sm:py-4 min-[90rem]:min-h-[68px] min-[90rem]:gap-10 min-[90rem]:rounded-[20px] min-[90rem]:border-white/25 min-[90rem]:bg-[#d9d9d9]/20 min-[90rem]:py-2 min-[90rem]:pl-[19px] min-[90rem]:pr-[10px] min-[90rem]:backdrop-blur-sm">
          <Brand />

          <nav aria-label="Main navigation" className="hidden min-w-0 flex-1 min-[90rem]:block">
            <ul className="flex items-center justify-start gap-[25px] whitespace-nowrap text-sm leading-6">
              {navigationItems.map(({ label }) => (
                <li key={label}>
                  {label === "Home" ? (
                    <Link href="/" className="hover:text-gold focus-visible:outline-gold">
                      <Typography as="span" variant="sm">{label}</Typography>
                    </Link>
                  ) : (
                    <Typography as="span" variant="sm">{label}</Typography>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden shrink-0 min-[90rem]:block">
            <Button size="compact" className="h-[46px] w-[214px]" showArrow>
              Experience ORIINU
            </Button>
          </div>

          <button
            type="button"
            aria-label="Open navigation"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => {
              dialogRef.current?.showModal();
              setMenuOpen(true);
            }}
            className="flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-[#714069] text-white hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:size-12 min-[90rem]:hidden"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" className="size-6">
              <path d="M4 8h16M4 16h11" />
            </svg>
          </button>
        </div>
      </Container>

      <dialog
        ref={dialogRef}
        id="mobile-navigation"
        aria-label="Mobile navigation"
        onClose={() => setMenuOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeMenu();
        }}
        className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none flex-col items-center bg-transparent px-5 py-[15px] text-white outline-none backdrop:bg-black/80 open:flex sm:items-end sm:px-8 lg:px-[4.861111%]"
      >
        <div className="flex max-h-full w-full max-w-[420px] flex-col gap-5 overflow-y-auto overscroll-contain rounded-[20px] border border-[#56304d] bg-[#140e16] p-4 sm:gap-6 sm:p-5">
          <div className="flex shrink-0 items-center justify-between gap-3">
            <Brand onClick={closeMenu} />
            <button
              type="button"
              aria-label="Close navigation"
              onClick={closeMenu}
              className="flex h-10 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/20 text-white/75 hover:border-white/40 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="size-5">
                <path d="m6 6 12 12M18 6 6 18" />
              </svg>
            </button>
          </div>

          <nav aria-label="Mobile navigation links">
            <ul className="flex flex-col">
              {navigationItems.map(({ label, href }) => {
                const active = label === activeItem;
                const content = (
                  <>
                    <Typography as="span" variant="md" className={`leading-6 ${active ? "font-semibold" : "font-normal"}`}>
                      {label}
                    </Typography>
                    <NavigationArrow active={active} />
                  </>
                );
                const rowClassName = `flex min-h-14 items-center justify-between gap-3 rounded-lg px-3 py-3 outline-offset-2 focus-visible:outline-2 focus-visible:outline-gold ${active ? "bg-[#3b1d35] text-[#e3b94e]" : "text-[#e6e0e6] hover:bg-white/[0.035] [&>svg]:text-[#a79aa7]"}`;

                return (
                  <li key={label} className="border-b border-[#382a36] py-1 first:pt-0 last:border-0 last:pb-0">
                    {href ? (
                      <Link href={href} onClick={closeMenu} aria-current={active ? "page" : undefined} className={rowClassName}>
                        {content}
                      </Link>
                    ) : (
                      <div className={rowClassName}>{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex shrink-0 flex-col items-center gap-4">
            <Button
              width="full"
              showArrow
              onClick={() => window.open("https://oriinu.ai/", "_blank", "noopener,noreferrer")}
              className="min-h-14 bg-[#e0b64d] bg-none! text-[#211705] hover:bg-[#ebc35d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold [&>span]:text-md! [&>span]:font-semibold"
            >
              Experience ORIINU
            </Button>
            <Typography variant="sm" className="text-center leading-5 tracking-[0.01em] text-[#d2ac50]">
              Remember · Align · Flourish.
            </Typography>
          </div>
        </div>
      </dialog>
    </header>
  );
}
