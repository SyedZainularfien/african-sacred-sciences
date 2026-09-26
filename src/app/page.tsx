import { CommunitySection } from "@/components/home/community-section";
import { ContentSection } from "@/components/home/content-section";
import { EcosystemSection } from "@/components/home/ecosystem-section";
import { FeatureSection } from "@/components/home/feature-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { FoundersSection } from "@/components/home/founders-section";
import { HeroSection } from "@/components/home/hero-section";
import { LivedExperienceSection } from "@/components/home/lived-experience-section";
import { OriinuSection } from "@/components/home/oriinu-section";
import { ResearchSection } from "@/components/home/research-section";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
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
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
