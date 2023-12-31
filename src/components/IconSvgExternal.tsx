import { ComponentProps } from "react"

import { twMerge } from "@/utils/twMerge"
import { externalIcons } from "@/defaults/icons"

interface IconSvgExternalProps extends ComponentProps<"svg"> {
  type?: keyof typeof externalIcons
  enabledHover?: boolean
}

export function IconSvgExternal({
  type = "WhatsApp",
  className,
  enabledHover = true,
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
      className={twMerge(
        "w-6 h-6 fill-slate-200",
        {
          "hover:fill-blue-600 transition-colors": enabledHover,
        },
        className
      )}
      {...rest}
    >
      {Component}
    </svg>
  )
}
