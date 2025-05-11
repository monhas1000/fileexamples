import type React from "react"
import { Outfit } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import type { Metadata } from "next"
import { BackgroundNetwork } from "@/components/background-network"
import { StaticBackground } from "@/components/static-background"
import Script from "next/script"

const outfit = Outfit({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "File Examples - Sample Files Repository",
  description: "Download sample files for testing in various formats",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Basic favicon - will work in most browsers */}
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* SVG favicon for modern browsers */}
        <link rel="icon" href="/favicon.png" type="image/png" />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Web App Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Google Analytics Script */}
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-5Y3DP7FXVV" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5Y3DP7FXVV');
            `,
          }}
        />
      </head>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {/* Dynamic network background */}
          <BackgroundNetwork />

          {/* Static fallback background */}
          <StaticBackground />

          <div className="flex flex-col min-h-screen relative">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
