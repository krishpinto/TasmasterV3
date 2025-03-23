import type React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ListTodo, Share2 } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="bg-card/30 backdrop-blur-sm border-primary/10 transform hover:scale-105 transition-transform duration-300">
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
      className="py-40 px-4 bg-gradient-to-b from-background/80 via-background/90 to-background/95"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-20">
          Why Choose TaskMaster?
        </h2>
        <div className="grid md:grid-cols-3 gap-16">
          <FeatureCard
            icon={<ListTodo className="h-12 w-12" />}
            title="Simple Organization"
            description="Create, organize, and manage your tasks with an intuitive interface designed for efficiency."
          />
          <FeatureCard
            icon={<Share2 className="h-12 w-12" />}
            title="Collaboration"
            description="Share tasks and collaborate with team members seamlessly for better productivity."
          />
          <FeatureCard
            icon={<CheckCircle className="h-12 w-12" />}
            title="Progress Tracking"
            description="Monitor your progress and celebrate achievements with visual progress indicators."
          />
        </div>
      </div>
    </section>
  );
}
