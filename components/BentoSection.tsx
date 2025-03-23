"use client";

import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid";
import { ListTodo, Share2, CheckCircle, Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { FlipText } from "@/components/magicui/flip-text";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { AvatarCircles } from "@/components/magicui/avatar-circles";
import { Pointer } from "@/components/magicui/pointer";

export function BentoSection() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <section id="discover" className="relative py-32 px-4">
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
            <Pointer>
              <div className="h-8 w-8 rounded-full bg-primary/30 flex items-center justify-center">
                <ListTodo className="w-4 h-4" />
              </div>
            </Pointer>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20" />
            <div className="relative z-10 p-6 flex flex-col h-full">
              <div className="flex items-center gap-2 mb-2">
                <ListTodo className="w-4 h-4" />
                <FlipText duration={0.5} delayMultiple={0.05} className="text-sm font-medium">
                  Task Management
                </FlipText>
              </div>
              <div className="flex-grow flex items-center justify-center">
                <NumberTicker 
                  value={1000} 
                  className="text-6xl font-bold text-primary"
                  delay={0.5}
                />
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Create, organize, and track your tasks with our intuitive interface. Set priorities, deadlines, and categories to stay on top of your work.
              </p>
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
          <div className="md:col-span-2 relative overflow-hidden rounded-[--radius] border bg-card text-card-foreground shadow hover:shadow-xl transition-all duration-300 group/bento">
            <Pointer>
              <div className="h-8 w-8 rounded-full bg-primary/30 flex items-center justify-center">
                <Share2 className="w-4 h-4" />
              </div>
            </Pointer>
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
              <div className="flex-grow flex items-center justify-center mb-4">
                <AvatarCircles
                  avatarUrls={[
                    { imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix", profileUrl: "#" },
                    { imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka", profileUrl: "#" },
                    { imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bailey", profileUrl: "#" },
                    { imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Coco", profileUrl: "#" },
                  ]}
                  numPeople={8}
                  className="scale-[1.75] opacity-75 [&>a>img]:border-2 transition-all duration-300 hover:opacity-100 hover:scale-[1.85] [&>a>img:hover]:scale-110 [&>a>img]:transition-transform [&>a>img]:duration-200"
                />
              </div>
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
            <Pointer>
              <div className="h-8 w-8 rounded-full bg-primary/30 flex items-center justify-center">
                <CheckCircle className="w-4 h-4" />
              </div>
            </Pointer>
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
              <div className="flex-grow flex flex-col items-center justify-center gap-4 mb-4">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="60"
                      className="stroke-primary/10"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="60"
                      className="stroke-primary"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray="377"
                      strokeDashoffset="94.25"
                      style={{
                        transition: "stroke-dashoffset 1s ease-in-out",
                      }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-4xl font-bold text-primary">75%</span>
                    <span className="text-sm text-muted-foreground">Complete</span>
                  </div>
                </div>
                <div className="flex gap-8 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">28</div>
                    <div className="text-sm text-muted-foreground">Tasks Done</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">12</div>
                    <div className="text-sm text-muted-foreground">In Progress</div>
                  </div>
                </div>
              </div>
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
            <Pointer>
              <div className="h-8 w-8 rounded-full bg-primary/30 flex items-center justify-center">
                <CalendarIcon className="w-4 h-4" />
              </div>
            </Pointer>
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