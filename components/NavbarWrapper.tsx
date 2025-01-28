"use client"

import { usePathname } from "next/navigation"
import { Navbar } from "@/components/navbar"

export function NavbarWrapper() {
  const pathname = usePathname()
  const isDashboard = pathname?.startsWith("/dashboard")

  if (isDashboard) {
    return null
  }

  return <Navbar />
}

