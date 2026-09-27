import type { Metadata } from "next";
import { LegalContent } from "@/components/legal/legal-content";
import { Footer } from "@/components/layout/footer";
import { termsSections } from "@/constants/legal";

export const metadata: Metadata = { title: "Terms & Conditions | African Sacred Science" };

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-black">
      <LegalContent title="Terms & Conditions" sections={termsSections} />
      <Footer homePage={false} />
    </div>
  );
}
