import { ComponentProps } from "react"

import { Hobby } from "@/components/Hobby"
import { Title } from "@/components/Title"

import { twMerge } from "@/utils/twMerge"
import { hobbies } from "@/defaults/hobbies"

interface HobbiesProps extends ComponentProps<"section"> {}

export function Hobbies({ className, ...rest }: HobbiesProps) {
  return (
    <section
      className={twMerge(
        "flex flex-col items-center gap-6",
        "sm:pb-[140px]",
        className
      )}
      {...rest}
    >
      <Title label="Hobbies" labelBackground="Hobbies" />

      <div
        className={twMerge(
          "grid place-items-center grid-cols-1 gap-x-7 gap-y-8",
          "sm:grid-cols-2"
        )}
      >
        {hobbies.map((hobby) => (
          <Hobby key={hobby.id} hobby={hobby} />
        ))}
      </div>
    </section>
  )
}
