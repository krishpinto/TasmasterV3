import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "TaskMaster Dashboard",
  description: "Manage your tasks and boost your productivity with TaskMaster Dashboard.",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Dashboard-specific layout content can go here */}
      <main>{children}</main>
    </>
  )
}

