"use client";

import { Button } from "@/components/ui/button";
import { ListTodo } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-primary/10 bg-background/30 backdrop-blur-md supports-[backdrop-filter]:bg-background/20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <ListTodo className="h-6 w-6 text-primary" />
            <Link href="/" className="text-xl font-bold">
              TaskMaster
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#section1"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>

            <Link
              href="/dashboard"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Dashboard
            </Link>

            <Link
              href="#section2"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="#section3"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              How it works
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hover:bg-primary/10">
              Log in
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}