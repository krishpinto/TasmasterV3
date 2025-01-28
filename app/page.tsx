
import { FeaturesSection } from "@/components/FeaturesSection"
import { FlowchartSection } from "@/components/FlowchartSection"

import { Footer } from "@/components/Footer"
import { HeroSection } from "@/components/Hero"

export default function Home() {
  return (
    <main className="min-h-screen pt-16 bg-gradient-to-b from-background via-background/95 to-background">
      <HeroSection />
      <FeaturesSection />
      <FlowchartSection />
      <Footer />
    </main>
  )
}