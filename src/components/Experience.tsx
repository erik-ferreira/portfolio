import Image from "next/image"
import { ComponentProps } from "react"

import { twMerge } from "@/utils/twMerge"

interface ExperienceProps extends ComponentProps<"div"> {}

export function Experience({ className, ...rest }: ExperienceProps) {
  return (
    <div
      className={twMerge("grid grid-cols-2 gap-42 relative group", className)}
      {...rest}
    >
      <Image
        src="/experiences/softtek.png"
        width={70}
        height={70}
        alt="icon experience"
        className="absolute left-1/2 top-0 -translate-x-1/2"
      />

      <div
        className={twMerge(
          "flex flex-col gap-1 p-6 bg-section rounded border border-sky-600",
          "group-even:order-2"
        )}
      >
        <h3 className="text-3.5xl leading-snug text-sky-600 font-bold">
          Estagiário
        </h3>
        <h4 className="text-2xl text-violet-300 font-bold">Softtek</h4>

        <span className="w-full text-slate-300">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </span>
      </div>

      <time
        className={twMerge(
          "h-fit text-slate-300",
          "group-even:order-1 group-even:text-right"
        )}
      >
        Agosto 2019 - Dezembro 2019
      </time>
    </div>
  )
}
