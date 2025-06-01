import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Swift Tours and Travels - Luxury Europe & Asia Tours",
  description:
    "Explore Europe and Asia with luxury tours, chartered boats, and premium transfers. Book your dream vacation today.",
  keywords: "luxury Europe tours, Asia travel packages, boat charters, travel agency",
    generator: 'abk'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
