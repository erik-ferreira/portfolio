import Image from "next/image"
import { ComponentProps } from "react"

import { SkillDTO } from "@/dtos/SkillDTO"

import { twMerge } from "@/utils/twMerge"
import { variantsColorSkills } from "@/defaults/skills"

interface SkillIconComponentProps extends ComponentProps<"div"> {
  skill: SkillDTO
}

export function SkillIcon({
  skill,
  className,
  ...rest
}: SkillIconComponentProps) {
  const idsSkillsStyledComponents = [10, 24]

  return (
    <div
      className={twMerge("w-[100px] h-fit relative group", className)}
      {...rest}
    >
      <Image
        src={skill.src}
        alt={`Ícone da tecnologia ${skill.label}`}
        width={100}
        height={100}
        className="transition duration-300 grayscale group-hover:grayscale-0 group-hover:transform group-hover:-translate-y-4"
      />
      <p
        className={twMerge(
          "w-full text-center font-semibold opacity-0 transition duration-300 absolute -bottom-5 group-hover:opacity-100",
          {
            "-bottom-10": idsSkillsStyledComponents.includes(skill.id),
          },
          variantsColorSkills[skill.typed].text
        )}
      >
        {skill.label}
      </p>
    </div>
  )
}
