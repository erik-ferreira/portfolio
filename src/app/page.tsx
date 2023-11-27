import { Header } from "@/components/page/Header"
import { Resume } from "@/components/page/Resume"
import { Skills } from "@/components/page/Skills"
import { Footer } from "@/components/page/Footer"
import { Hobbies } from "@/components/page/Hobbies"
import { Projects } from "@/components/page/Projects"
import { LetsTalk } from "@/components/page/LetsTalk"
import { Experiences } from "@/components/page/Experiences"
import { Certifications } from "@/components/page/Certifications"

import { SocialIcons } from "@/components/SocialIcons"

export default function Home() {
  return (
    <main className="relative">
      <SocialIcons variant="fixed" />

      <Header />

      <Resume />

      <Skills />

      <Certifications />

      <Experiences />

      <Projects />

      <Hobbies />

      <LetsTalk />

      <Footer />
    </main>
  )
}
