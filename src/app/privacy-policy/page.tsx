import type { Metadata } from "next";
import { LegalContent } from "@/components/legal/legal-content";
import { Footer } from "@/components/layout/footer";
import { privacySections } from "@/constants/legal";

export const metadata: Metadata = { title: "Privacy Policy | African Sacred Science" };

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black">
      <LegalContent title="Privacy Policy" sections={privacySections} />
      <Footer homePage={false} />
    </div>
  );
}
