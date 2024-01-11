import { Resume } from "@/components/home/Resume"
import { Skills } from "@/components/home/Skills"
import { Hobbies } from "@/components/home/Hobbies"
import { Projects } from "@/components/home/Projects"
import { LetsTalk } from "@/components/home/LetsTalk"
import { Experiences } from "@/components/home/Experiences"
import { Certifications } from "@/components/home/Certifications"

export default function Home() {
  return (
    <main className="max-w-content w-content mx-auto p-8 flex flex-col gap-16">
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
