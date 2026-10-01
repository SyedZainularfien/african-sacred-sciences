"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function FinalCtaSection() {
  const [showSignupNotice, setShowSignupNotice] = useState(false);

  return (
    <section
      aria-labelledby="community-signup-title"
      className="flex min-h-[700px] items-center bg-background-yellow py-20 text-[#0b0018] sm:py-24"
    >
      <Container className="flex flex-col items-center gap-10 text-center sm:gap-12">
        <div className="flex w-full flex-col items-center gap-10 sm:gap-12">
          <div className="flex flex-col items-center gap-8 sm:gap-8">
            <ScrollReveal>
              <Typography variant="xs" className="font-semibold uppercase leading-[17px] tracking-[2.42px] text-gold">
                Community
              </Typography>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <Typography
                as="h2"
                id="community-signup-title"
                variant="mdMedium"
                className="text-[clamp(2.25rem,4vw,3rem)]! font-medium! leading-[1.3]"
              >
                Join the African Sacred<br className="hidden sm:block" /> Science{" "}
                <span className="bg-plum-gradient bg-clip-text font-serif text-[1.12em]! italic leading-none text-transparent">
                  Community
                </span>
              </Typography>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.25} className="w-full max-w-[690px]">
            <Typography variant="lg" className="max-w-[690px] leading-8 text-[#493c48]">
              Receive new teachings, research developments, publications, conversations and invitations from across the African Sacred Science ecosystem.
            </Typography>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.36} className="w-full max-w-[640px]">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setShowSignupNotice(true);
            }}
            className="flex w-full max-w-[640px] flex-col gap-3 text-left"
          >
            <label htmlFor="community-name" className="sr-only">Your Name</label>
            <input
              id="community-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Your Name"
              className="h-14 w-full rounded-full border border-plum/20 bg-white px-6 font-sans text-base text-[#0b0018] outline-none placeholder:text-[#8f8995] focus-visible:border-plum focus-visible:ring-2 focus-visible:ring-plum/20"
            />
            <label htmlFor="community-email" className="sr-only">Email</label>
            <input
              id="community-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="Email"
              className="h-14 w-full rounded-full border border-plum/20 bg-white px-6 font-sans text-base text-[#0b0018] outline-none placeholder:text-[#8f8995] focus-visible:border-plum focus-visible:ring-2 focus-visible:ring-plum/20"
            />
            <Button type="submit" size="compact" width="full" className="h-[54px] uppercase tracking-[0.12em]">
              Join the Community
            </Button>
            {showSignupNotice && (
              <Typography role="status" variant="sm" className="text-center leading-relaxed text-[#493c48]">
                Online community signups are coming soon. Your details have not been submitted. For now,{' '}
                <Link href="/contact-us" className="rounded-sm font-semibold text-plum underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plum">
                  contact us
                </Link>{' '}
                to express your interest.
              </Typography>
            )}
          </form>
        </ScrollReveal>
      </Container>
    </section>
  );
}
