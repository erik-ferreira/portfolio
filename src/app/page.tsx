import { Resume } from "@/components/page/Resume"
import { Skills } from "@/components/page/Skills"
import { Hobbies } from "@/components/page/Hobbies"
import { Projects } from "@/components/page/Projects"
import { LetsTalk } from "@/components/page/LetsTalk"
import { Experiences } from "@/components/page/Experiences"
import { Certifications } from "@/components/page/Certifications"

export default function Home() {
  return (
    <main className="relative max-w-content w-content mx-auto p-8 flex flex-col gap-16">
      <Resume />

      <Skills />

      <Certifications />

      <Experiences />

      <Projects />

      <Hobbies />

      <LetsTalk />
    </main>
  )
}
