import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Utility Toolkit - Free Online Utility Tools",
  description:
    "Free online utility tools including text converters, YouTube thumbnail downloader, and QR code generator",
  openGraph: {
    title: "Utility Toolkit - Free Online Utility Tools",
    description:
      "Free online utility tools including text converters, YouTube thumbnail downloader, and QR code generator",
    url: "https://utility-toolkit.vercel.app",
    siteName: "Utility Toolkit",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Utility Toolkit",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Utility Toolkit - Free Online Utility Tools",
    description:
      "Free online utility tools including text converters, YouTube thumbnail downloader, and QR code generator",
    images: ["/og-image.png"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
