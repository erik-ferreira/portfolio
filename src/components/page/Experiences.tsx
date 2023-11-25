import { Title } from "@/components/Title"
import { Experience } from "@/components/Experience"

import { twMerge } from "@/utils/twMerge"
import { experiences } from "@/defaults/experiences"

interface ExperiencesProps {}

export function Experiences({ ...rest }: ExperiencesProps) {
  return (
    <div className="max-w-content w-content mx-auto flex flex-col items-center gap-6 p-8">
      <Title label="Experiência" labelBackground="Experience" />

      <div
        className={twMerge(
          "w-[90%] py-10 space-y-6 relative",
          "before:w-1 before:h-full before:content-normal before:bg-sky-600",
          "before:absolute before:left-1/2 before:top-0 before:-translate-x-1/2"
        )}
      >
        {experiences.map((experience) => (
          <Experience key={experience.id} />
        ))}
      </div>
    </div>
  )
}
