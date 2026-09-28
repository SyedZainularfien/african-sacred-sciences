import type { Metadata } from "next";
import { LegalContent } from "@/components/legal/legal-content";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { termsSections } from "@/constants/legal";
import { absoluteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Terms & Conditions | African Sacred Science",
  description: "Read the terms for using the African Sacred Science website, including its educational content, acceptable use, and external links.",
  alternates: { canonical: absoluteUrl("/terms-and-conditions") },
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header activeItem={null} />
      <LegalContent
        title="Terms &"
        accent="Conditions"
        description="A clear guide to using this website and engaging with the ideas and information shared here."
        heroImage="/images/legal/terms-hero.webp"
        companion={{ href: "/privacy-policy", label: "Privacy Policy" }}
        sections={termsSections}
      />
      <Footer homePage={false} creamCorners />
    </div>
  );
}
