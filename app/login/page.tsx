"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { UserAuth } from "../../context/AuthContext";
import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
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
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10 pt-8 pb-20">
      {/* Added 'min-h-screen' to ensure full height and 'pb-20' for extra bottom padding */}
      <div className="flex w-full max-w-sm flex-col gap-6">
        <div className="flex w-full max-w-sm flex-col gap-6">
          <div className="h-10" /> {/* Placeholder div to maintain spacing */}
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
