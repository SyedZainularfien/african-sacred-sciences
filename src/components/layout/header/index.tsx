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

const HEADER_SCROLL_THRESHOLD = 8;
const HEADER_TOP_ZONE = 24;
const HEADER_HIDE_AFTER = 120;

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
  const [headerHidden, setHeaderHidden] = useState(false);
  const reduceMotion = useReducedMotion();
  const animate = useAnimationReady() && !reduceMotion;

  useEffect(() => {
    if (menuOpen) return;

    let previousScrollY = Math.max(0, window.scrollY);

    const updateVisibility = () => {
      const currentScrollY = window.scrollY;
      const maxScrollY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      // Ignore mobile rubber-band movement outside the document.
      if (currentScrollY < 0 || currentScrollY > maxScrollY) return;

      if (currentScrollY <= HEADER_TOP_ZONE) {
        setHeaderHidden(false);
        previousScrollY = currentScrollY;
        return;
      }

      // Accumulate small movements instead of reversing on every scroll event.
      const scrollDelta = currentScrollY - previousScrollY;
      if (Math.abs(scrollDelta) < HEADER_SCROLL_THRESHOLD) return;

      if (scrollDelta < 0) {
        setHeaderHidden(false);
      } else if (currentScrollY > HEADER_HIDE_AFTER) {
        setHeaderHidden(true);
      }
      previousScrollY = currentScrollY;
    };

    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, [menuOpen]);

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
    <header
      inert={headerHidden && !menuOpen}
      className={`fixed inset-x-0 top-0 z-50 pt-[15px] text-white transition-transform duration-200 ease-out motion-reduce:transition-none ${headerHidden && !menuOpen ? "-translate-y-full" : "translate-y-0"}`}
    >
      <Container>
        <motion.div
          data-motion-reveal
          key={animate ? "animated" : "static"}
          initial={animate ? { opacity: 0, y: -12 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: motionTiming.entrance, ease: motionTiming.ease }}
          className="flex items-center justify-between gap-4 rounded-[18px] border border-white/5 bg-[#100e12]/90 p-3 pl-4 backdrop-blur-md sm:px-5 sm:py-4 min-[90rem]:min-h-[68px] min-[90rem]:gap-10 min-[90rem]:rounded-[20px] min-[90rem]:border-white/25 min-[90rem]:bg-[#d9d9d9]/20 min-[90rem]:py-2 min-[90rem]:pl-[19px] min-[90rem]:pr-[10px]"
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
        className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto overscroll-contain bg-[#09050b] text-white outline-none backdrop:bg-[#09050b] open:block min-[90rem]:hidden"
      >
        <motion.div
          data-motion-reveal
          initial={false}
          animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : 12 }}
          transition={{ duration: reduceMotion ? 0 : 0.32, ease: motionTiming.ease }}
          onAnimationComplete={() => {
            if (!menuOpen && dialogRef.current?.open) dialogRef.current.close();
          }}
          className="relative isolate mx-auto flex min-h-dvh w-full max-w-[1120px] flex-col overflow-hidden px-5 pb-8 pt-5 sm:px-8 sm:pb-12 sm:pt-8 lg:px-12"
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_75%_55%_at_85%_55%,rgba(107,27,92,0.38),transparent_78%),radial-gradient(ellipse_55%_50%_at_0%_0%,rgba(89,31,81,0.24),transparent_85%)]" />
          <svg aria-hidden="true" className="pointer-events-none absolute -right-56 top-28 -z-10 h-[600px] w-[600px] opacity-40 sm:-right-28 sm:h-[800px] sm:w-[800px]" viewBox="0 0 800 800" fill="none">
            <g stroke="#C69B34" strokeOpacity="0.2" strokeWidth="0.7">
              <circle cx="400" cy="400" r="120" /><circle cx="400" cy="400" r="205" />
              <circle cx="400" cy="400" r="290" /><circle cx="400" cy="400" r="375" />
            </g>
          </svg>

          <div className="flex shrink-0 items-center justify-between gap-4 border-b border-gold/20 pb-6 sm:pb-8">
            <Brand onClick={closeMenu} />
            <button
              type="button"
              aria-label="Close navigation"
              onClick={closeMenu}
              className="flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-gold/35 bg-white/[0.03] text-gold transition-colors hover:border-gold hover:bg-gold/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:size-12"
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

          <div className="flex w-full max-w-[850px] flex-1 flex-col gap-7 py-9 sm:gap-10 sm:py-12">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-7 bg-gold" />
                <Typography as="span" variant="xs" className="font-semibold uppercase tracking-[0.22em] text-gold">Explore the world of</Typography>
              </div>
              <Typography as="h2" variant="h2" className="font-normal! leading-none text-[clamp(2.75rem,6vw,4rem)]!">African <span className="bg-plum-gradient bg-clip-text italic text-transparent">Sacred Science.</span></Typography>
            </div>

            <nav aria-label="Mobile navigation links">
              <ul className="flex flex-col">
                {navigationItems.map(({ label, href }, index) => {
                  const active = label === activeItem;
                  const content = (
                    <>
                      <Typography as="span" variant="xs" className="w-8 shrink-0 font-medium tabular-nums tracking-[0.1em] text-gold/75">{String(index + 1).padStart(2, "0")}</Typography>
                      <Typography as="span" variant="h5" className={`min-w-0 flex-1 font-normal! leading-[1.15] max-sm:text-[1.4rem]! ${active ? "text-gold" : "text-white/85"}`}>
                        {label}
                      </Typography>
                      <span aria-hidden="true" className={`flex size-8 shrink-0 items-center justify-center rounded-full border transition-colors ${active ? "border-gold/55 text-gold" : "border-white/15 text-white/50 group-hover:border-gold/50 group-hover:text-gold"}`}>
                        <NavigationArrow active={active} />
                      </span>
                    </>
                  );
                  const rowClassName = "group flex min-h-[62px] items-center gap-3 py-3 outline-offset-2 transition-colors hover:[&>span:nth-child(2)]:text-gold focus-visible:outline-2 focus-visible:outline-gold sm:min-h-[70px] sm:gap-5";

                  return (
                    <motion.li
                      key={label}
                      data-motion-reveal
                      initial={false}
                      animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : 8 }}
                      transition={{ duration: reduceMotion ? 0 : 0.26, delay: reduceMotion || !menuOpen ? 0 : 0.07 + index * 0.045, ease: motionTiming.ease }}
                      className="border-b border-gold/15 first:border-t"
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
          </div>

          <div className="flex shrink-0 flex-col gap-5 border-t border-gold/20 pt-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:pt-8">
            <div className="flex flex-col gap-2">
              <Typography as="span" variant="xs" className="font-semibold uppercase tracking-[0.2em] text-gold">Go deeper</Typography>
              <Typography variant="sm" className="leading-5 text-white/55">Remember · Align · Flourish.</Typography>
            </div>
            <ButtonLink
              href="https://oriinu.ai/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              showArrow
              className="min-h-13 w-full border-0 bg-gold-gradient px-6 text-[#211705] transition-[filter] hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:w-auto [&>span]:text-sm! [&>span]:font-semibold"
            >
              Experience ORIINU
            </ButtonLink>
          </div>
        </motion.div>
      </dialog>
    </header>
  );
}
