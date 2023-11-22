import { ComponentProps } from "react"

import { Title } from "@/components/Title"
import { TechIcon } from "@/components/TechIcon"

import { twMerge } from "@/utils/twMerge"

const list = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28,
]

interface SkillsProps extends ComponentProps<"div"> {}

export function Skills({ className, ...rest }: SkillsProps) {
  return (
    <div
      className={twMerge(
        "border max-w-content w-content mx-auto flex flex-col items-center justify-center gap-6 p-8 overflow-hidden relative",
        // before styles
        "before:content-normal before:w-[100px] before:h-full before:absolute before:top-0 before:left-0 before:z-[2] ",

        "before:bg-gradient-to-r before:from-start-gradient before:from-0% before:to-end-gradient before:to-100%",
        // after styles
        "after:content-normal after:w-[100px] after:h-full after:absolute after:top-0 after:right-0 after:rotate-180 after:z-[2]",

        "after:bg-gradient-to-r after:from-start-gradient after:from-0% after:to-end-gradient after:to-100%",
        className
      )}
      {...rest}
    >
      <Title label="Habilidades" labelBackground="Skills" />

      {/* Tech stack slider */}
      <div className="flex gap-10 animate-slider">
        {list.map((item) => (
          <div key={item} className="border w-[100px] h-[100px]">
            <TechIcon />
          </div>
        ))}
      </div>
    </div>
  )
}
