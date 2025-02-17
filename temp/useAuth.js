"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { UserAuth } from "../context/AuthContext";

const useAuth = () => {
  const { user } = UserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  return user;
};

export default useAuth;
