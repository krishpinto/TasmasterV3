"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type React from "react"; // Import React
import { UserAuth } from "@/context/AuthContext";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const { googleSignIn } = UserAuth();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Create an account</CardTitle>
          <CardDescription>
            Sign in with your GitHub account or email
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-6">
              <div className="flex flex-col gap-4">
              <Button
                  variant="outline"
                  className="w-full"
                  onClick={handleGoogleSignIn}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    className="h-4 w-4 mr-2"
                  >
                    <path
                      fill="#EA4335"
                      d="M24 9.5c3.14 0 5.97 1.2 8.2 3.14l6.1-6.1C34.2 3.14 29.4 1 24 1 14.6 1 6.8 6.8 3.4 15.1l7.5 5.8C12.6 13.2 17.8 9.5 24 9.5z"
                    />
                    <path
                      fill="#34A853"
                      d="M46.5 24c0-1.7-.2-3.4-.5-5H24v9.5h12.7c-.5 2.7-2 5-4.2 6.6l6.5 5.1c3.8-3.5 6-8.6 6-14.2z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M10.9 28.9c-.5-1.5-.8-3.1-.8-4.9s.3-3.4.8-4.9l-7.5-5.8C1.2 17.2 0 20.5 0 24s1.2 6.8 3.4 9.8l7.5-5.9z"
                    />
                    <path
                      fill="#4285F4"
                      d="M24 48c6.5 0 12-2.1 16.1-5.7l-6.5-5.1c-2.2 1.5-5 2.4-8 2.4-6.2 0-11.4-4.2-13.3-9.8l-7.5 5.8C6.8 41.2 14.6 48 24 48z"
                    />
                    <path fill="none" d="M0 0h48v48H0z" />
                  </svg>
                  Sign up with Google
                </Button>
              </div>
              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span className="relative z-10 bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" />
                </div>
                <Button type="submit" className="w-full">
                  Sign Up
                </Button>
              </div>
              <div className="text-center text-sm">
                Don't have an account?{" "}
                <a href="/login" className="underline underline-offset-4">
                  Sign Up
                </a>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
