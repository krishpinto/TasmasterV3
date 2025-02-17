"use client";

import { UserAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function MiniLayout({ children }: { children: React.ReactNode }) {
  const user = UserAuth();
  const router = useRouter();
  useEffect(() => {
    console.log(user);
    if (!user) {
      router.push("/");
    }
  }, [user, router]);

  if (!user) {
    router.push("/");
  }

  return (
    <>
      <main>{children}</main>
    </>
  );
}
