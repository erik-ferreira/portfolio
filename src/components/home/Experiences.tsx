import { ComponentProps } from "react"

import { Title } from "@/components/Title"
import { Experience } from "@/components/Experience"

import { twMerge } from "@/utils/twMerge"
import { experiences } from "@/defaults/experiences"

interface ExperiencesProps extends ComponentProps<"section"> {}

export function Experiences({ className, ...rest }: ExperiencesProps) {
  return (
    <section
      className={twMerge("flex flex-col items-center gap-6", className)}
      {...rest}
    >
      <Title label="Experiência" labelBackground="Experience" />

      <div
        className={twMerge(
          "w-[90%] py-10 space-y-6 relative",
          "before:w-1 before:h-full before:content-normal before:bg-sky-600",
          "before:absolute before:left-1/2 before:top-0 before:-translate-x-1/2"
        )}
      >
        {experiences.map((experience) => (
          <Experience key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  )
}
