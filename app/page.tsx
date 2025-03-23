import { FeaturesSection } from "@/components/FeaturesSection";
import { FlowchartSection } from "@/components/FlowchartSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/Hero";
import { BentoSection } from "@/components/BentoSection";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0A0A0A]">
      {/* Dark overlay with noise texture */}
      <div className="pointer-events-none absolute inset-0 bg-black/20" 
        style={{ 
          backgroundImage: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAElBMVEUAAAD8/vz08vT09PT8/Pz///8YZYKxAAAAA3RSTlMAQIDnqKOYAAAAP0lEQVQ4y2NgAAX8DxCCkYHhAQNhwP/////HQBjwP0AYMDAwEAb8BxKEAf+JBQwMDAQBA3FgNA6GfxwMDAwA13oNzW4Nrl4AAAAASUVORK5CYII=)',
          opacity: '0.3'
        }} 
      />

      {/* Background Glow Effects */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-background to-background" />
      <div className="pointer-events-none absolute left-0 top-0 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 bg-primary/20 opacity-20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] translate-x-1/2 -translate-y-1/2 bg-primary/30 opacity-20 blur-[120px]" />
      
      {/* Radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Animated Grid Pattern */}
      <AnimatedGridPattern
        width={30}
        height={30}
        className="fixed inset-0 h-full w-full fill-white/[0.05] stroke-white/[0.05]"
        strokeDasharray="3 3"
        numSquares={80}
        maxOpacity={0.25}
        duration={10}
        style={{ 
          maskImage: 'linear-gradient(to bottom, black, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)'
        }}
      />

      {/* Content */}
      <div className="relative">
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* Bento Grid Section */}
        <BentoSection />

        {/* Flowchart Section */}
        <FlowchartSection />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
