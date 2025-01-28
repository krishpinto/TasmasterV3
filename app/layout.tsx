import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { NavbarWrapper } from "@/components/NavbarWrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TaskMaster - Organize Your Life",
  description: "A powerful, intuitive todo list application that helps you stay organized and boost your productivity.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarWrapper />
        {children}
      </body>
    </html>
  )
}

