import { ComponentProps } from "react"

import { twMerge } from "@/utils/twMerge"

interface DividerProps extends ComponentProps<"div"> {}

export function Divider({ className, ...rest }: DividerProps) {
  return (
    <div className={twMerge("w-full h-0.5 bg-sky-600", className)} {...rest} />
  )
}
