import { ComponentProps } from "react"

import { twMerge } from "@/utils/twMerge"
import { externalIcons } from "@/defaults/icons"

interface IconSvgExternalProps extends ComponentProps<"svg"> {
  type?: keyof typeof externalIcons
}

export function IconSvgExternal({
  type = "WhatsApp",
  className,
  ...rest
}: IconSvgExternalProps) {
  const Component = externalIcons[type]

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge("w-6 h-6 icon-svg-external", className)}
      {...rest}
    >
      {Component}
    </svg>
  )
}
