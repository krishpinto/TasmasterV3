"use client";

import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid";
import { ListTodo, Share2, CheckCircle, Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { FlipText } from "@/components/magicui/flip-text";

export function BentoSection() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <section className="relative py-32 px-4">
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
          <FlipText duration={0.7} delayMultiple={0.1} className="text-5xl md:text-6xl font-bold">
            Discover TaskMaster
          </FlipText>
        </h2>
        <BentoGrid className="mx-auto">
          <div className="md:col-span-1 relative overflow-hidden rounded-[--radius] border bg-card text-card-foreground shadow hover:shadow-xl transition-all duration-300 group/bento">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20" />
            <div className="relative z-10 p-6 flex flex-col h-full">
              <div className="flex items-center gap-2 mb-2">
                <ListTodo className="w-4 h-4" />
                <FlipText duration={0.5} delayMultiple={0.05} className="text-sm font-medium">
                  Task Management
                </FlipText>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Create, organize, and track your tasks with our intuitive interface. Set priorities, deadlines, and categories to stay on top of your work.
              </p>
              <div className="mt-auto">
                <a href="/dashboard" className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-white/10 hover:bg-white/20 transition-colors">
                  Try Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 relative overflow-hidden rounded-[--radius] border bg-card text-card-foreground shadow hover:shadow-xl transition-all duration-300 group/bento">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/20 dark:from-primary/20 dark:to-primary/30" />
            <div className="relative z-10 p-6 flex flex-col h-full">
              <div className="flex items-center gap-2 mb-2">
                <Share2 className="w-4 h-4" />
                <FlipText duration={0.5} delayMultiple={0.05} className="text-sm font-medium">
                  Team Collaboration
                </FlipText>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Share tasks and projects with your team. Assign responsibilities, track progress, and communicate effectively in one place.
              </p>
              <div className="mt-auto">
                <a href="/dashboard" className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-white/10 hover:bg-white/20 transition-colors">
                  Collaborate
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 relative overflow-hidden rounded-[--radius] border bg-card text-card-foreground shadow hover:shadow-xl transition-all duration-300 group/bento">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-primary/25 dark:from-primary/25 dark:to-primary/35" />
            <div className="relative z-10 p-6 flex flex-col h-full">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4" />
                <FlipText duration={0.5} delayMultiple={0.05} className="text-sm font-medium">
                  Progress Tracking
                </FlipText>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Monitor your achievements and track completion rates. Visualize your productivity with beautiful charts and statistics.
              </p>
              <div className="mt-auto">
                <a href="/dashboard" className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-white/10 hover:bg-white/20 transition-colors">
                  View Stats
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="md:col-span-1 relative overflow-hidden rounded-[--radius] border bg-card text-card-foreground shadow hover:shadow-xl transition-all duration-300 group/bento">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/15 dark:from-primary/15 dark:to-primary/25" />
            <div className="relative z-10 p-6 flex flex-col h-full">
              <div className="flex items-center gap-2 mb-2">
                <CalendarIcon className="w-4 h-4" />
                <FlipText duration={0.5} delayMultiple={0.05} className="text-sm font-medium">
                  Calendar View
                </FlipText>
              </div>
              <div className="flex-grow flex items-center justify-center -mt-2">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border-0 
                    [&_.day-today]:bg-primary/20 [&_.day-today]:text-primary [&_.day-today]:font-bold [&_.day-today]:rounded-full [&_.day-today]:ring-2 [&_.day-today]:ring-primary/50 [&_.day-today]:ring-offset-2 [&_.day-today]:ring-offset-background
                    [&_.day-selected]:bg-primary [&_.day-selected]:text-primary-foreground [&_.day-selected]:rounded-full [&_.day-selected]:font-bold [&_.day-selected]:shadow-lg
                    [&_.day-selected:hover]:bg-primary [&_.day-selected:hover]:text-primary-foreground
                    [&_.day-range-end]:rounded-full [&_.day-range-start]:rounded-full"
                />
              </div>
              <a href="/dashboard" className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-white/10 hover:bg-white/20 transition-colors mt-2">
                Schedule
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </BentoGrid>
      </div>
    </section>
  );
} 