import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Arda Luxury Timber Design — Ahşabın Sanata Dönüştüğü Yer",
  description:
    "Arda Luxury Timber Design, doğanın zarafetini modern yaşam alanlarına taşıyan, el işçiliğine ve sürdürülebilirliğe adanmış lüks ahşap tasarım stüdyosudur.",
  generator: "v0.app",
}

export const viewport = {
  themeColor: "#f3ece0",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
