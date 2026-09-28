"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

import { navigationItems } from "@/constants/navigation";
import { motionTiming } from "@/lib/motion";
import { useAnimationReady } from "@/lib/use-animation-ready";

function Brand({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      aria-label="African Sacred Science home"
      onClick={onClick}
      className="block shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
    >
      <Image
        src="/images/header-logo.webp"
        alt="African Sacred Science"
        width={328}
        height={99}
        loading="eager"
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

export function Header({ homePage = false, activeItem = homePage ? "Home" : "The Doctrine" }: { homePage?: boolean; activeItem?: string | null }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const animate = useAnimationReady() && !reduceMotion;

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
    if (reduceMotion) {
      dialogRef.current?.close();
    } else {
      setMenuOpen(false);
    }
  }

  return (
    <header className="absolute inset-x-0 top-0 z-20 pt-[15px] text-white">
      <Container>
        <motion.div
          data-motion-reveal
          key={animate ? "animated" : "static"}
          initial={animate ? { opacity: 0, y: -12 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: motionTiming.entrance, ease: motionTiming.ease }}
          className="flex items-center justify-between gap-4 rounded-[18px] border border-white/5 bg-[#100e12] p-3 pl-4 sm:px-5 sm:py-4 min-[90rem]:min-h-[68px] min-[90rem]:gap-10 min-[90rem]:rounded-[20px] min-[90rem]:border-white/25 min-[90rem]:bg-[#d9d9d9]/20 min-[90rem]:py-2 min-[90rem]:pl-[19px] min-[90rem]:pr-[10px] min-[90rem]:backdrop-blur-sm"
        >
          <Brand />

          <nav aria-label="Main navigation" className="hidden min-w-0 flex-1 min-[90rem]:block">
            <ul className="flex items-center justify-start gap-[25px] whitespace-nowrap text-sm leading-6">
              {navigationItems.map(({ label, href }) => (
                <li key={label}>
                  {href.includes("#") ? (
                    <a
                      href={homePage ? href.replace(/^\/#/, "#") : href}
                      className="hover:text-gold focus-visible:outline-2 focus-visible:outline-gold"
                    >
                      <Typography as="span" variant="sm">{label}</Typography>
                    </a>
                  ) : (
                    <Link href={href} className="hover:text-gold focus-visible:outline-2 focus-visible:outline-gold">
                      <Typography as="span" variant="sm">{label}</Typography>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden shrink-0 min-[90rem]:block">
            <ButtonLink
              href="https://oriinu.ai/"
              target="_blank"
              rel="noopener noreferrer"
              size="compact"
              className="h-[46px] w-[214px]"
              showArrow
            >
              Experience ORIINU
            </ButtonLink>
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
        </motion.div>
      </Container>

      <dialog
        ref={dialogRef}
        id="mobile-navigation"
        aria-label="Mobile navigation"
        onClose={() => setMenuOpen(false)}
        onCancel={(event) => {
          event.preventDefault();
          closeMenu();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeMenu();
        }}
        className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none flex-col items-center overflow-y-auto overscroll-contain bg-transparent px-5 py-[15px] text-white outline-none backdrop:bg-transparent open:flex sm:items-end sm:px-8 lg:px-[4.861111%]"
      >
        <motion.div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 bg-black/80"
          initial={false}
          animate={{ opacity: menuOpen ? 1 : 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.28 }}
        />
        <motion.div
          data-motion-reveal
          initial={false}
          animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : 14 }}
          transition={{ duration: reduceMotion ? 0 : 0.34, ease: motionTiming.ease }}
          onAnimationComplete={() => {
            if (!menuOpen && dialogRef.current?.open) dialogRef.current.close();
          }}
          className="relative flex w-full max-w-[420px] shrink-0 flex-col gap-5 rounded-[20px] border border-[#56304d] bg-[#140e16] p-4 sm:gap-6 sm:p-5"
        >
          <div className="flex shrink-0 items-center justify-between gap-3">
            <Brand onClick={closeMenu} />
            <button
              type="button"
              aria-label="Close navigation"
              onClick={closeMenu}
              className="flex h-10 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/20 text-white/75 hover:border-white/40 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="size-5">
                <motion.line
                  x1="4" x2="20"
                  initial={false}
                  animate={{ y1: menuOpen ? 5 : 8, y2: menuOpen ? 19 : 8 }}
                  transition={{ duration: reduceMotion ? 0 : 0.24, ease: motionTiming.ease }}
                />
                <motion.line
                  initial={false}
                  animate={{ x1: menuOpen ? 19 : 4, x2: menuOpen ? 5 : 15, y1: menuOpen ? 5 : 16, y2: menuOpen ? 19 : 16 }}
                  transition={{ duration: reduceMotion ? 0 : 0.24, ease: motionTiming.ease }}
                />
              </svg>
            </button>
          </div>

          <nav aria-label="Mobile navigation links">
            <ul className="flex flex-col">
              {navigationItems.map(({ label, href }, index) => {
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
                  <motion.li
                    key={label}
                    data-motion-reveal
                    initial={false}
                    animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : 8 }}
                    transition={{ duration: reduceMotion ? 0 : 0.26, delay: reduceMotion || !menuOpen ? 0 : 0.07 + index * 0.045, ease: motionTiming.ease }}
                    className="border-b border-[#382a36] py-1 first:pt-0 last:border-0 last:pb-0"
                  >
                    {href ? (
                      href.includes("#") ? (
                        <a
                          href={homePage ? href.replace(/^\/#/, "#") : href}
                          onClick={closeMenu}
                          aria-current={active ? "page" : undefined}
                          className={rowClassName}
                        >
                          {content}
                        </a>
                      ) : (
                        <Link href={href} onClick={closeMenu} aria-current={active ? "page" : undefined} className={rowClassName}>
                          {content}
                        </Link>
                      )
                    ) : (
                      <div className={rowClassName}>{content}</div>
                    )}
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          <div className="flex shrink-0 flex-col items-center gap-4">
            <ButtonLink
              href="https://oriinu.ai/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              width="full"
              showArrow
              className="min-h-14 bg-[#e0b64d] bg-none! text-[#211705] hover:bg-[#ebc35d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold [&>span]:text-md! [&>span]:font-semibold"
            >
              Experience ORIINU
            </ButtonLink>
            <Typography variant="sm" className="text-center leading-5 tracking-[0.01em] text-[#d2ac50]">
              Remember · Align · Flourish.
            </Typography>
          </div>
        </motion.div>
      </dialog>
    </header>
  );
}
