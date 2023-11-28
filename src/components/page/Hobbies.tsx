import { ComponentProps } from "react"

import { Hobby } from "@/components/Hobby"
import { Title } from "@/components/Title"

import { twMerge } from "@/utils/twMerge"
import { hobbies } from "@/defaults/hobbies"

interface HobbiesProps extends ComponentProps<"div"> {}

export function Hobbies({ className, ...rest }: HobbiesProps) {
  return (
    <div
      className={twMerge(
        "max-w-content w-content mx-auto flex flex-col items-center gap-6 p-8",
        className
      )}
      {...rest}
    >
      <Title label="Hobbies" labelBackground="Hobbies" />

      <div className="grid place-items-center grid-cols-2 gap-x-7 gap-y-8">
        {hobbies.map((hobby) => (
          <Hobby key={hobby.id} hobby={hobby} />
        ))}
      </div>
    </div>
  )
}
