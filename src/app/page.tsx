import { CommunitySection } from "@/components/home/community-section";
import { ContentSection } from "@/components/home/content-section";
import { FeatureSection } from "@/components/home/feature-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { HeroSection } from "@/components/home/hero-section";
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
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
