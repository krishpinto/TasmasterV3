"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavbarWrapper } from "@/components/NavbarWrapper";
import { AuthContextProvider } from "@/context/AuthContext";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "TaskMaster - Organize Your Life",
  description:
    "A powerful, intuitive todo list application that helps you stay organized and boost your productivity.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <NavbarWrapper />
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
