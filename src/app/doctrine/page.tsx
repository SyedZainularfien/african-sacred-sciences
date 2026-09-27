import type { Metadata } from "next";
import { DoctrineHeroSection } from "@/components/doctrine/hero-section";
import { DoctrineIntroductionSection } from "@/components/doctrine/introduction-section";
import { DoctrineDimensionsSection } from "@/components/doctrine/dimensions-section";
import { DoctrineDimensionDetailsSection } from "@/components/doctrine/dimension-details-section";
import { DoctrineClosingSection } from "@/components/doctrine/closing-section";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { absoluteUrl } from "@/lib/site-url";

const title = "The Doctrine of Divine Alignment | African Sacred Science";
const description =
  "Explore the Doctrine of Divine Alignment and its five dimensions: inner, character, purpose, creative and relational alignment.";
const socialImage = {
  url: absoluteUrl("/images/seo/african-sacred-science-og.webp"),
  width: 1730,
  height: 909,
  alt: "African Sacred Science purple and gold emblem on a dark plum background",
};

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl("/doctrine") },
  openGraph: {
    type: "website",
    siteName: "African Sacred Science",
    title,
    description,
    url: absoluteUrl("/doctrine"),
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [{ url: socialImage.url, alt: socialImage.alt }],
  },
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
