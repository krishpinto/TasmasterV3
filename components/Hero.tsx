import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { TextAnimate } from "@/components/magicui/text-animate";
import { ShinyButton } from "@/components/magicui/shiny-button";

export function HeroSection() {
  return (
    <section
      id="section1"
      className="relative py-40 px-4"
    >
      {/* Red accent dot */}
      <div className="absolute top-8 right-8 flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
        <span className="text-primary text-sm font-medium">Task Management</span>
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
            Master Your Tasks
            <span className="block mt-2 bg-gradient-to-b from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
              Boost Productivity
            </span>
          </h1>
          <TextAnimate
            className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto font-light"
            animation="fadeIn"
            duration={0.5}
            delay={0.2}
            by="word"
          >
            A powerful, intuitive todo list application that helps you stay organized
            and boost your productivity with seamless task management. Take control
            of your daily tasks and achieve more.
          </TextAnimate>
          <div className="flex justify-center pt-8">
            <ShinyButton className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold">
              GET STARTED
              <Plus className="ml-2 h-5 w-5 inline-block" />
            </ShinyButton>
          </div>
        </div>
      </div>
    </section>
  );
}
