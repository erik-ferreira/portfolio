import { ComponentProps } from "react"

import { Title } from "@/components/Title"
import { SkillIcon } from "@/components/SkillIcon"

import { twMerge } from "@/utils/twMerge"
import { mySkills } from "@/defaults/skills"

interface SkillsProps extends ComponentProps<"section"> {}

export function Skills({ className, ...rest }: SkillsProps) {
  return (
    <section
      className={twMerge(
        "flex flex-col items-center justify-center gap-4",
        className
      )}
      {...rest}
    >
      <Title label="Habilidades" labelBackground="Skills" />

      <div
        className={twMerge(
          "w-full flex overflow-hidden relative",

          // before styles
          "before:content-normal before:w-[100px] before:h-full before:absolute before:top-0 before:left-0 before:z-[2] ",

          "before:bg-gradient-to-r before:from-page before:from-0% before:to-transparent before:to-100%",

          // after styles
          "after:content-normal after:w-[100px] after:h-full after:absolute after:top-0 after:right-0 after:rotate-180 after:z-[2]",

          "after:bg-gradient-to-r after:from-page after:from-0% after:to-transparent after:to-100%"
        )}
      >
        <div className="flex gap-10 animate-slider py-12 overflow-visible">
          {mySkills.map((skill) => (
            <SkillIcon key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}
