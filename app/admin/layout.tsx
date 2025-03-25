import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin Panel - ConsignPro",
  description: "Admin panel for managing tracking codes and consignment orders",
}

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="min-h-screen bg-background">{children}</div>
}

