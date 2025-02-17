"use client";

import { Button } from "@/components/ui/button";
import { UserAuth } from "@/context/AuthContext";
import { ListTodo } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  const { user, googleSignIn, logOut } = UserAuth();

  const handleSignIn = () => {
    try {
      googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogOut = () => {
    try {
      logOut();
    } catch (error) {
      console.log(error);
    }
  };

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
              href="/#section1"
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
              href="/#section2"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/#section3"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              How it works
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            {user ? (
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-primary/10"
                onClick={handleLogOut}
              >
                Log out
              </Button>
            ) : (
              <>
                <Link href="/login">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:bg-primary/10"
                    // onClick={handleSignIn}
                  >
                    Log in
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:bg-primary/10"
                  >
                    Sign up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
