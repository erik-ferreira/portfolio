import Image from "next/image"
import { ComponentProps } from "react"

import { useLanguage } from "@/providers/LanguageProvider"

import { twMerge } from "@/utils/twMerge"

interface ToggleLanguageProps extends ComponentProps<"button"> {}

export function ToggleLanguage({ className, ...rest }: ToggleLanguageProps) {
  const { language, handleToggleLanguage } = useLanguage()

  const src = language === "BR" ? "/countries/brasil.svg" : "/countries/usa.svg"

  return (
    <button
      className={twMerge(
        "bg-section w-8 h-8 rounded-full",
        "transition duration-500",
        "hover:scale-110 hover:cursor-pointer"
      )}
      onClick={handleToggleLanguage}
      {...rest}
    >
      <Image
        src={src}
        alt="Brazil"
        width={50}
        height={35}
        className="w-full h-full object-contain rounded-full transition-all"
      />
    </button>
  )
}
