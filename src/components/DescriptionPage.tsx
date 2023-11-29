import { ComponentProps } from "react"

import { twMerge } from "@/utils/twMerge"

interface DescriptionPageProps extends ComponentProps<"p"> {
  description: string
}

export function DescriptionPage({
  description,
  className,
  ...rest
}: DescriptionPageProps) {
  return (
    <p
      className={twMerge("text-lg font-bold text-center mt-2 mb-6", className)}
    >
      {description}
    </p>
  )
}
