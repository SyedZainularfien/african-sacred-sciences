import type { Metadata } from "next";
import { CommunitySection } from "@/components/home/community-section";
import { ContentSection } from "@/components/home/content-section";
import { EcosystemSection } from "@/components/home/ecosystem-section";
import { ExperienceSection } from "@/components/home/experience-section";
import { FeatureSection } from "@/components/home/feature-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { FoundersSection } from "@/components/home/founders-section";
import { FoundersJourneySection } from "@/components/home/founders-journey-section";
import { HeroSection } from "@/components/home/hero-section";
import { LivedExperienceSection } from "@/components/home/lived-experience-section";
import { LargerVisionSection } from "@/components/home/larger-vision-section";
import { OriinuSection } from "@/components/home/oriinu-section";
import { ResearchSection } from "@/components/home/research-section";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { absoluteUrl } from "@/lib/site-url";

const title = "African Sacred Science | Ancient Wisdom, Living Intelligence";
const description =
  "Explore African Sacred Science, a contemporary body of knowledge drawing on Africa's diverse philosophical, spiritual, ethical and indigenous intellectual traditions.";
const socialImage = {
  url: absoluteUrl("/images/seo/african-sacred-science-og.webp"),
  width: 1730,
  height: 909,
  alt: "African Sacred Science purple and gold emblem on a dark plum background",
};

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    type: "website",
    siteName: "African Sacred Science",
    title,
    description,
    url: absoluteUrl("/"),
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [{ url: socialImage.url, alt: socialImage.alt }],
  },
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header homePage />
      <main className="flex-1">
        <HeroSection />
        <ContentSection />
        <FeatureSection />
        <CommunitySection />
        <LivedExperienceSection />
        <OriinuSection />
        <ResearchSection />
        <EcosystemSection />
        <FoundersSection />
        <FoundersJourneySection />
        <LargerVisionSection />
        <FinalCtaSection />
        <ExperienceSection />
      </main>
      <Footer />
    </div>
  );
}
