"use client";
import { UserAuth } from "@/context/AuthContext";
import React from "react";

const page = () => {
  const { user } = UserAuth();
  return (
    <p className="mt-32">
      {user ? `Welcome, ${user.displayName}` : "You are not logged in"}
      <div>{user ? JSON.stringify(user, null, 2) : null}</div>
    </p>
  );
};

export default page;
