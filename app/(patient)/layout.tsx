import type React from "react"

export default function PatientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // In a real app, you would check authentication and authorization here
  // For now, we'll just render the children
  return <>{children}</>
}

