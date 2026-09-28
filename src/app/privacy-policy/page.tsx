import type { Metadata } from "next";
import { LegalContent } from "@/components/legal/legal-content";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { privacyIntroduction, privacySections } from "@/constants/legal";
import { absoluteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Privacy Policy | African Sacred Science",
  description: "African Sacred Science™ respects your privacy and is committed to handling personal information responsibly and transparently.",
  alternates: { canonical: absoluteUrl("/privacy-policy") },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header activeItem={null} />
      <LegalContent
        title="Privacy"
        accent="Policy"
        description="African Sacred Science™ respects your privacy and is committed to handling personal information responsibly and transparently."
        heroImage="/images/legal/privacy-policy-hero.png"
        effectiveDate="October 2026"
        lastUpdated="October 2026"
        introduction={privacyIntroduction}
        companion={{ href: "/terms-and-conditions", label: "Terms & Conditions" }}
        sections={privacySections}
      />
      <Footer homePage={false} creamCorners />
    </div>
  );
}
