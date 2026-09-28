import type { Metadata } from "next";
import { LegalContent } from "@/components/legal/legal-content";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { termsIntroduction, termsSections } from "@/constants/legal";
import { absoluteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Terms & Conditions | African Sacred Science",
  description: "These Terms & Conditions govern your access to and use of this website. By accessing or using the website, you agree to these Terms.",
  alternates: { canonical: absoluteUrl("/terms-and-conditions") },
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header activeItem={null} />
      <LegalContent
        title="Terms &"
        accent="Conditions"
        description="These Terms & Conditions govern your access to and use of this website."
        heroImage="/images/legal/terms-hero.webp"
        effectiveDate="October 2026"
        lastUpdated="October 2026"
        introduction={termsIntroduction}
        companion={{ href: "/privacy-policy", label: "Privacy Policy" }}
        sections={termsSections}
      />
      <Footer homePage={false} creamCorners />
    </div>
  );
}
