import { FeaturesSection } from "@/components/FeaturesSection";
import { FlowchartSection } from "@/components/FlowchartSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-background via-background/95 to-background">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Flowchart Section */}
      <FlowchartSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
