"use client";

import type React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ListTodo, Share2 } from "lucide-react";
import { FlipText } from "@/components/magicui/flip-text";
import { BorderBeam } from "@/components/magicui/border-beam";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  beamDelay?: number;
}

function FeatureCard({ icon, title, description, beamDelay = 0 }: FeatureCardProps) {
  return (
    <Card className="bg-card/30 backdrop-blur-sm border-primary/10 transform hover:scale-105 transition-transform duration-300 relative">
      <BorderBeam 
        duration={15} 
        delay={beamDelay} 
        size={100}
        colorFrom="hsl(var(--primary))" 
        colorTo="hsl(var(--primary))" 
        className="opacity-50"
      />
      <CardContent className="pt-8 p-8">
        <div className="text-primary mb-6">{icon}</div>
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-muted-foreground text-lg">{description}</p>
      </CardContent>
    </Card>
  );
}

export function FeaturesSection() {
  return (
    <section
      id="section2"
      className="relative py-40 px-4"
    >
      <div 
        className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/50 to-transparent pointer-events-none" 
        style={{ 
          maskImage: 'linear-gradient(to bottom, black 10%, transparent 90%)', 
          WebkitMaskImage: 'linear-gradient(to bottom, black 10%, transparent 90%)',
          background: 'linear-gradient(to bottom, var(--background) 0%, var(--background)/50 50%, transparent 100%)'
        }} 
      />
      <div className="container mx-auto max-w-6xl relative">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-20">
          <FlipText duration={0.5} delayMultiple={0.1} className="text-5xl md:text-6xl font-bold">
            Why Choose TaskMaster?
          </FlipText>
        </h2>
        <div className="grid md:grid-cols-3 gap-16">
          <FeatureCard
            icon={<ListTodo className="h-12 w-12" />}
            title="Simple Organization"
            description="Create, organize, and manage your tasks with an intuitive interface designed for efficiency."
            beamDelay={0}
          />
          <FeatureCard
            icon={<Share2 className="h-12 w-12" />}
            title="Collaboration"
            description="Share tasks and collaborate with team members seamlessly for better productivity."
            beamDelay={1}
          />
          <FeatureCard
            icon={<CheckCircle className="h-12 w-12" />}
            title="Progress Tracking"
            description="Monitor your progress and celebrate achievements with visual progress indicators."
            beamDelay={2}
          />
        </div>
      </div>
    </section>
  );
}
