import type { Metadata } from "next";
import { DoctrineHeroSection } from "@/components/doctrine/hero-section";
import { DoctrineIntroductionSection } from "@/components/doctrine/introduction-section";
import { DoctrineDimensionsSection } from "@/components/doctrine/dimensions-section";
import { DoctrineDimensionDetailsSection } from "@/components/doctrine/dimension-details-section";
import { DoctrineClosingSection } from "@/components/doctrine/closing-section";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export const metadata: Metadata = {
  title: "The Doctrine of Divine Alignment | African Sacred Science",
  description: "Explore the foundational philosophy of Divine Alignment.",
};

export default function DoctrinePage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <DoctrineHeroSection />
        <DoctrineIntroductionSection />
        <DoctrineDimensionsSection />
        <DoctrineDimensionDetailsSection />
        <DoctrineClosingSection />
      </main>
      <Footer homePage={false} />
    </div>
  );
}
