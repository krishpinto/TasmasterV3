import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function HeroSection() {
  return (
    <section id = 'section1' className="relative py-32 px-4 bg-gradient-to-b from-primary/20 via-background to-background/80">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
            Organize Your Life with
            <span className="text-primary block mt-2">TaskMaster</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            A powerful, intuitive todo list application that helps you stay
            organized and boost your productivity with seamless task management.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-6"
            >
              Get Started
              <Plus className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/20 hover:bg-primary/10 text-lg px-8 py-6"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
