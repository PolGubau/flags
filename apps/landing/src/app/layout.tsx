import type { Metadata } from "next"
import localFont from "next/font/local"

import "./globals.css"
import Background from "@/components/Background"
import Providers from "@/components/providers"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "500",
})

export const metadata: Metadata = {
  title: "React Beauty Flags",
  description: "Fancy flags from around the world",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden min-h-dvh w-dvw `}
      >
        <Providers>
          <Background />
          {children}
        </Providers>
      </body>
    </html>
  )
}
