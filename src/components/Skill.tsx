import Image from "next/image"

import { twMerge } from "@/utils/twMerge"
import { SkillDTO } from "@/dtos/SkillDTO"

interface SkillProps {
  skill: SkillDTO
}

export function Skill({ skill, ...rest }: SkillProps) {
  return (
    <div className="max-w-[144px] w-full flex flex-col items-center gap-4">
      <div
        style={{
          backgroundColor: skill.rgb,
          borderColor: skill.color,
        }}
        className={twMerge(
          "w-[100px] h-[100px] rounded-full flex items-center justify-center hover:scale-95 transition-all duration-300 border-[1.5px]"
        )}
      >
        <Image
          src={skill.src}
          alt={skill.name}
          width={60}
          height={60}
          className={
            skill.src === "/skills/styled-components.svg"
              ? "rounded-none"
              : "rounded-lg"
          }
        />
      </div>

      <span
        style={{ color: skill.color }}
        className="text-2xl font-bold text-center"
      >
        {skill.name}
      </span>
    </div>
  )
}
