"use client"

import { Rocket } from "lucide-react"
import { ComponentProps } from "react"

import { twMerge } from "@/utils/twMerge"

interface ButtonGoToTopProps extends ComponentProps<"button"> {}

export function ButtonGoToTop({ className, ...rest }: ButtonGoToTopProps) {
  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      className={twMerge(
        "w-20 h-20 flex items-center justify-center rounded-full",
        "border border-blue-600 text-blue-600",
        "transition-opacity opacity-60 hover:opacity-100",
        "fixed bottom-12 right-14 z-10",
        "max-xs:bottom-8 max-xs:right-8 max-xs:w-16 max-xs:h-16",
        className
      )}
      onClick={handleScrollToTop}
      {...rest}
    >
      <Rocket
        className={twMerge(
          "w-14 h-14 transform -rotate-45",
          "max-xs:w-10 max-xs:h-10"
        )}
        strokeWidth={1}
      />
    </button>
  )
}
