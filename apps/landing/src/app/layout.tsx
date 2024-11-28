import type { Metadata } from "next"
import localFont from "next/font/local"

import "./globals.css"
import Background from "@/components/Background"
import Footer from "@/components/footer"
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden min-h-dvh w-dvw`}
      >
        <Providers>
          <Background />
          {children}
          <div className="w-full sticky bottom-0 p-3 bg-secondary-50/40 dark:bg-secondary-900/40 backdrop-blur-md ">
            <p className="text-center text-sm">
              Made with ❤️ by{" "}
              <a
                href="https://polgubau.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pol Gubau Amores
              </a>
            </p>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
