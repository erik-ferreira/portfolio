import type { Metadata } from "next"
import { Nunito_Sans, Orbitron, Permanent_Marker } from "next/font/google"

import { Header } from "@/components/page/Header"
import { Footer } from "@/components/page/Footer"
import { SocialIcons } from "@/components/SocialIcons"
import { ButtonGoToTop } from "@/components/ButtonGoToTop"

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
  title: "Create Next App",
  description: "Generated by create next app",
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
      <body className="bg-page text-slate-200 relative">
        <SocialIcons variant="fixed" />

        <ButtonGoToTop />

        <Header />

        {children}

        <Footer />
      </body>
    </html>
  )
}
