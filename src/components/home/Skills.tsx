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
        "flex flex-col items-center justify-center gap-2",
        "md:gap-4",
        className
      )}
      {...rest}
    >
      <Title label="Habilidades" labelBackground="Skills" />

      <div
        className={twMerge(
          "w-full flex overflow-hidden relative",

          // before styles
          "before:content-normal before:w-[100px] before:h-full before:absolute before:top-0 before:left-0 before:z-[2]",

          "before:from-slate-100 dark:before:from-page",

          "before:bg-gradient-to-r before:from-0% before:to-transparent before:to-100%",

          // after styles
          "after:content-normal after:w-[100px] after:h-full after:absolute after:top-0 after:right-0 after:rotate-180 after:z-[2]",

          "after:from-slate-100 dark:after:from-page",

          "after:bg-gradient-to-r after:from-0% after:to-transparent after:to-100%"
        )}
      >
        <div
          className={twMerge(
            "flex gap-5 animate-slider py-6 overflow-visible",
            "md:animate-slider-md md:gap-10 md:py-12"
          )}
        >
          {mySkills.map((skill) => (
            <SkillIcon key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}
