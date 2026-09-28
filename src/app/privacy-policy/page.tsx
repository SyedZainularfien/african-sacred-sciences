import type { Metadata } from "next";
import { LegalContent } from "@/components/legal/legal-content";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { privacySections } from "@/constants/legal";
import { absoluteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Privacy Policy | African Sacred Science",
  description: "Read how the African Sacred Science website handles visitor information, hosting data, external links, and privacy choices.",
  alternates: { canonical: absoluteUrl("/privacy-policy") },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header activeItem={null} />
      <LegalContent
        title="Privacy"
        accent="Policy"
        description="How information is handled when you visit African Sacred Science, and the choices available to you."
        companion={{ href: "/terms-and-conditions", label: "Terms & Conditions" }}
        sections={privacySections}
      />
      <Footer homePage={false} />
    </div>
  );
}
