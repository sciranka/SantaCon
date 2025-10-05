import { Snow } from "@components/Snow"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "SantaCon | Bratislava",
  description:
    "SantaCon Bratislava, the unforgettable holiday celebration. Get ready for the ultimate fun in the capital of Slovakia.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "SantaCon Bratislava",
  },
  formatDetection: {
    telephone: false,
  },
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative min-h-screen">
          <Snow />
          {children}
        </div>
      </body>
    </html>
  )
}
