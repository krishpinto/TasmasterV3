"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { GalleryVerticalEnd } from "lucide-react";
import { SignupForm } from "../../components/signup-form";
import { UserAuth } from "../../context/AuthContext";

export default function SignUpPage() {
  const { user } = UserAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);

  if (user) {
    return null; // or a loading spinner
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10 pt-8">
          <div className="flex w-full max-w-sm flex-col gap-6">
            <div className="flex w-full max-w-sm flex-col gap-6">
              <div className="h-10" /> {/* Placeholder div to maintain spacing */}
              <SignupForm />
            </div>
          </div>
        </div>
  );
}
