import Image from "next/image"
import { ComponentProps } from "react"

import { twMerge } from "@/utils/twMerge"

import iconSVG from "@/../public/techs/react.svg"

interface TechProps {
  id: number
  label: string
  src: string
}

interface TechIconComponentProps extends ComponentProps<"div"> {
  tech: TechProps
}

export function TechIcon({ tech, className, ...rest }: TechIconComponentProps) {
  return (
    <div
      className={twMerge("w-[100px] h-fit relative group", className)}
      {...rest}
    >
      <Image
        src={tech.src}
        alt="Ícone da tecnologia React"
        width={100}
        height={100}
        className="transition duration-300 grayscale hover:grayscale-0 group-hover:transform group-hover:-translate-y-4 z-10"
      />
      <p className="w-full text-center opacity-0 transition duration-300 absolute -bottom-4 group-hover:opacity-100 z-10">
        {tech.label}
      </p>
    </div>
  )
}
