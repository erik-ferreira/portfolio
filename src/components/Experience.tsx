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
      className={twMerge(
        "grid grid-cols-1 gap-4 relative group pl-12",
        "lg:grid-cols-2 lg:gap-42 lg:pl-0",
        className
      )}
      {...rest}
    >
      <div
        className={twMerge(
          "absolute left-1 top-0 -translate-x-1/2 w-16 h-16",
          "lg:left-1/2 lg:w-[4.375rem] lg:h-[4.375rem]"
        )}
      >
        <Image
          src={experience.src}
          width={70}
          height={70}
          alt={experience.altSrc}
          className={twMerge(
            "w-full h-full object-contain",
            "border-2 border-sky-600 rounded-full",
            "lg:border-4"
          )}
        />
      </div>

      <div
        className={twMerge(
          "flex flex-col gap-1 p-6 bg-section rounded border border-sky-600",
          "order-2"
          // "lg:order-0",
          // "lg:group-even:order-1"
        )}
      >
        <h3
          className={twMerge(
            "text-2xl leading-snug text-sky-600 font-bold",
            "lg:text-3.5xl"
          )}
        >
          {experience.office}
        </h3>
        <h4
          className={twMerge(
            "text-xl text-violet-300 font-bold",
            "lg:text-2xl"
          )}
        >
          {experience.company}
        </h4>

        <span className="w-full text-slate-300">{experience.description}</span>
      </div>

      <time
        className={twMerge(
          "h-fit text-slate-300 text-left",
          "order-1"
          // "lg:order-0",
          // "lg:group-even:order-2 lg:group-even:text-right"
        )}
      >
        {dateExperience}
      </time>
    </div>
  )
}
