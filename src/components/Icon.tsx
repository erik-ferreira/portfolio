import { icons } from "lucide-react"

import { twMerge } from "@/utils/twMerge"

interface IconProps {
  name: keyof typeof icons
  isSelected?: boolean
}

export function Icon({ name, isSelected = false, ...rest }: IconProps) {
  const Component = icons[name]

  return (
    <Component
      className={twMerge("w-6 h-6 transition-colors duration-200", {
        "text-blue-600": isSelected,
      })}
      {...rest}
    />
  )
}
