"use client";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import styles from "./ecosystem-section.module.css";

import { ecosystem } from "@/constants/home";

export function EcosystemSection() {
  return (
    <section
      id="ecosystem"
      aria-labelledby="ecosystem-title"
      className={`${styles.section} bg-[#0d0319] py-16 text-white sm:py-20`}
    >
      <Container className={`${styles.content} flex flex-col gap-10 sm:gap-12`}>
        <ScrollReveal
          as="header"
          className={`${styles.heading} flex flex-col items-center gap-5 text-center`}
        >
          <Typography
            as="p"
            variant="xs"
            className="font-semibold uppercase leading-[17px] tracking-[2.42px] text-gold"
          >
            The Ecosystem
          </Typography>
          <Typography
            as="h2"
            variant="mdMedium"
            id="ecosystem-title"
            className="flex flex-col gap-5 max-lg:[font-size:clamp(2rem,3.4vw,3rem)]! leading-[52px] lg:[text-box-trim:trim-both] lg:[text-box-edge:cap_alphabetic]"
          >
            <span>One Body of Knowledge.</span>
            <span>
              Multiple Ways to{" "}
              <span className="bg-plum-gradient bg-clip-text font-serif [font-size:1.208333em]! font-medium italic leading-[0.9] text-transparent">
                Encounter It.
              </span>
            </span>
          </Typography>
        </ScrollReveal>

        <ul className={`${styles.cards} flex flex-wrap gap-5`}>
          {ecosystem.map((item, index) => (
            <ScrollReveal
              as="li"
              key={item.title}
              id={"id" in item ? item.id : undefined}
              delay={(index % 2) * 0.1}
              distance={14}
              scale={0.98}
              className={`${styles.card} flex w-full items-center justify-between gap-4 rounded-[20px] border border-plum bg-black px-5 py-8 sm:px-8 lg:w-[calc((100%_-_20px)/2)] lg:gap-10`}
            >
              <div
                className={`${styles.cardContent} flex min-w-0 flex-1 flex-col gap-6`}
              >
                <div className="flex flex-col gap-3">
                  <Typography
                    as="p"
                    variant="xs"
                    className="font-semibold! uppercase leading-[17px] tracking-[2.42px] text-gold"
                  >
                    {item.category}
                  </Typography>
                  <Typography
                    as="h3"
                    variant="xl"
                    className="font-semibold leading-[1.3] sm:[font-size:1.5rem]"
                  >
                    {item.title}
                    {item.trademark ? (
                      <sup className="[font-size:0.5em]!">™</sup>
                    ) : null}
                  </Typography>
                  <Typography
                    as="p"
                    variant="sm"
                    className="text-sm leading-[25.8px] text-white/70 sm:text-md"
                  >
                    {item.description}
                  </Typography>
                </div>

                <Link
                  href={item.href}
                  target={item.title === "ORIINU" ? "_blank" : undefined}
                  rel={item.title === "ORIINU" ? "noopener noreferrer" : undefined}
                  className="flex w-fit items-center gap-2 rounded-sm text-left text-sm font-semibold tracking-[1.04px] text-[#e5be68] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                >
                  {item.action}
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[1em] w-[1em] shrink-0">
                    <path d="M4 12h16m-7-7 7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div
                className={`${styles.logo} flex w-16 shrink-0 items-center justify-center sm:w-28 lg:w-[129px]`}
              >
                <Image
                  src={`/images/the-ecosystem/${item.image}`}
                  alt=""
                  width={item.width}
                  height={item.height}
                  sizes="(min-width: 1024px) 9vw, (min-width: 640px) 112px, 64px"
                  className={`h-auto object-contain ${item.imageClassName}`}
                />
              </div>
            </ScrollReveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
