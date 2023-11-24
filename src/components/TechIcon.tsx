import Image from "next/image"
import { ComponentProps } from "react"

import { TechDTO } from "@/dtos/TechDTO"

import { twMerge } from "@/utils/twMerge"
import { labelColorVariants } from "@/defaults/label"

interface TechIconComponentProps extends ComponentProps<"div"> {
  tech: TechDTO
}

export function TechIcon({ tech, className, ...rest }: TechIconComponentProps) {
  const idsTechStyledComponents = [10, 24]

  return (
    <div
      className={twMerge("w-[100px] h-fit relative group", className)}
      {...rest}
    >
      <Image
        src={tech.src}
        alt={`Ícone da tecnologia ${tech.label}`}
        width={100}
        height={100}
        className="transition duration-300 grayscale group-hover:grayscale-0 group-hover:transform group-hover:-translate-y-4"
      />
      <p
        className={twMerge(
          "w-full text-center font-semibold opacity-0 transition duration-300 absolute -bottom-5 group-hover:opacity-100",
          {
            "-bottom-10": idsTechStyledComponents.includes(tech.id),
          },
          labelColorVariants[tech.typed]
        )}
      >
        {tech.label}
      </p>
    </div>
  )
}
