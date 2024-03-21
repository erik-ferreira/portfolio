import { Resume } from "@/components/home/Resume"
import { Skills } from "@/components/home/Skills"
import { Hobbies } from "@/components/home/Hobbies"
import { Projects } from "@/components/home/Projects"
import { LetsTalk } from "@/components/home/LetsTalk"
import { Experiences } from "@/components/home/Experiences"
import { Certifications } from "@/components/home/Certifications"

import { twMerge } from "@/utils/twMerge"

export default function Home() {
  return (
    <main
      className={twMerge(
        "max-w-content w-content mx-auto p-8 flex flex-col gap-16 border border-white",
        "max-lg:px-0"
      )}
    >
      <Resume />

      {/*
      <Skills />

      <Certifications />

      <Experiences />

      <Projects />

      <Hobbies />

      <LetsTalk />
       */}
    </main>
  )
}
