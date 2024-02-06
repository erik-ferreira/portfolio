import Image from "next/image"
import { ComponentProps } from "react"

import { twMerge } from "@/utils/twMerge"
import { formatDateExperience } from "@/utils/formatDateExperience"

import { ExperienceDTO } from "@/dtos/ExperienceDTO"

interface ExperienceProps extends ComponentProps<"div"> {
  experience: ExperienceDTO
}

export function Experience({
  experience,
  className,
  ...rest
}: ExperienceProps) {
  const dateExperience = formatDateExperience(
    experience.startDate,
    experience.endDate
  )

  return (
    <div
      className={twMerge("grid grid-cols-2 gap-42 relative group", className)}
      {...rest}
    >
      <Image
        src={experience.src}
        width={70}
        height={70}
        alt={experience.altSrc}
        className="absolute left-1/2 top-0 -translate-x-1/2 border-4 border-sky-600 rounded-full"
      />

      <div
        className={twMerge(
          "flex flex-col gap-1 p-6 bg-section rounded border border-sky-600",
          "group-even:order-2"
        )}
      >
        <h3 className="text-3.5xl leading-snug text-sky-600 font-bold">
          {experience.office}
        </h3>
        <h4 className="text-2xl text-violet-300 font-bold">
          {experience.company}
        </h4>

        <span className="w-full text-slate-300">{experience.description}</span>
      </div>

      <time
        className={twMerge(
          "h-fit text-slate-300",
          "group-even:order-1 group-even:text-right"
        )}
      >
        {dateExperience}
      </time>
    </div>
  )
}
