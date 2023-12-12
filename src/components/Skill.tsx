import Image from "next/image"

import { twMerge } from "@/utils/twMerge"
import { SkillDTO } from "@/dtos/SkillDTO"
import { variantsColorSkills } from "@/defaults/skills"

interface SkillProps {
  skill: SkillDTO
}

export function Skill({ skill, ...rest }: SkillProps) {
  return (
    <div className="w-fit flex flex-col items-center gap-4">
      <div
        className={twMerge(
          "w-[100px] h-[100px] rounded-full flex items-center justify-center hover:scale-95 transition-all duration-300",
          variantsColorSkills[skill.typed].bg,
          `border-[1.5px] ${variantsColorSkills[skill.typed].border}`
        )}
      >
        <Image
          src={skill.src}
          alt="Typescript"
          width={60}
          height={60}
          className="rounded-lg"
        />
      </div>

      <span
        className={twMerge(
          "text-2xl font-bold",
          variantsColorSkills[skill.typed].text
        )}
      >
        {skill.label}
      </span>
    </div>
  )
}
