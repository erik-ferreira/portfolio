import { ComponentProps } from "react"

import { twMerge } from "@/utils/twMerge"

interface DescriptionProps extends ComponentProps<"p"> {
  label: string
}

export function Description({ label, className, ...rest }: DescriptionProps) {
  return (
    <p
      className={twMerge(
        "max-w-[550px] text-lg font-bold text-center mx-auto mt-2 mb-6",
        className
      )}
      {...rest}
    >
      {label}
    </p>
  )
}
