import type { Metadata } from "next"
import NextTopLoader from "nextjs-toploader"
import { Nunito_Sans, Orbitron, Permanent_Marker } from "next/font/google"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { SocialIcons } from "@/components/SocialIcons"
import { ButtonGoToTop } from "@/components/ButtonGoToTop"

import { ThemeProvider } from "@/providers/ThemeProvider"

import { twMerge } from "@/utils/twMerge"

import "./globals.css"

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito",
})
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-orbitron",
})
const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marker",
})

export const metadata: Metadata = {
  title: "Home | Erik Ferreira",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${nunitoSans.variable} ${orbitron.variable} ${permanentMarker.variable}`}
    >
      <body
        className={twMerge(
          "bg-slate-100 text-slate-900 relative",
          "dark:bg-page dark:text-slate-200"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextTopLoader
            color="#3b82f6"
            showSpinner={false}
            height={3}
            initialPosition={0.3}
            speed={300}
          />

          <Header />

          {children}

          <Footer />

          <SocialIcons variant="fixed" className="hidden md:flex" />

          <ButtonGoToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
