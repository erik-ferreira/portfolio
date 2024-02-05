import Image from "next/image"
import { ComponentProps } from "react"

import { SkillDTO } from "@/dtos/SkillDTO"

import { twMerge } from "@/utils/twMerge"

interface SkillIconComponentProps extends ComponentProps<"div"> {
  skill: SkillDTO
}

export function SkillIcon({
  skill,
  className,
  ...rest
}: SkillIconComponentProps) {
  const idsSkillsToAddMoreNegativeBottom = [10, 15, 24, 30]

  return (
    <div
      className={twMerge("w-[100px] h-fit relative group", className)}
      {...rest}
    >
      <Image
        src={skill.src}
        alt={`Ícone da tecnologia ${skill.name}`}
        width={100}
        height={100}
        className="transition duration-300 grayscale group-hover:grayscale-0 group-hover:transform group-hover:-translate-y-4"
      />
      <p
        style={{ color: skill.color }}
        className={twMerge(
          "w-full text-center font-semibold opacity-0 transition duration-300 absolute -bottom-5 group-hover:opacity-100",
          {
            "-bottom-10": idsSkillsToAddMoreNegativeBottom.includes(skill.id),
          }
        )}
      >
        {skill.name}
      </p>
    </div>
  )
}
