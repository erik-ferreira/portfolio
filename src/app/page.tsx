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
        "max-w-content w-content mx-auto p-8 flex flex-col gap-16",
        "max-[1024px]:p-4",
        "max-[768px]:px-0 max-[768px]:py-2"
      )}
    >
      <Resume />

      <Skills />

      <Certifications />
      {/* 

      <Experiences />

      <Projects />

      <Hobbies />

      <LetsTalk />
       */}
    </main>
  )
}
