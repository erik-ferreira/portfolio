import Image from "next/image"
import { ComponentProps } from "react"

import { TechDTO } from "@/dtos/TechDTO"

import { twMerge } from "@/utils/twMerge"

export const labelColorVariants = {
  react: "text-[#61DAFB]",
  next: "text-[#F5F5F5]",
  typescript: "text-[#007ACC]",
  javascript: "text-[#F0DB4F]",
  html: "text-[#E44D26]",
  css: "text-[#1572B6]",
  figma: "text-[#0ACF83]",
  git: "text-[#F34F29]",
  tailwind: "text-[#38B2AC]",
  "styled-components": "text-[#9F70B8]",
  sql: "text-[#00618A]",
  redux: "text-[#764ABC]",
  radix: "text-[#E2E8F0]",
  api: "text-[#72B8CE]",
} as const

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
