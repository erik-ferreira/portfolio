import { icons, LucideProps } from "lucide-react"

import { twMerge } from "@/utils/twMerge"

export interface IconProps extends LucideProps {
  name?: keyof typeof icons
  isSelected?: boolean
}

export function Icon({
  name = "Send",
  isSelected = false,
  className,
  ...rest
}: IconProps) {
  const LucideIcon = icons[name]

  return (
    <LucideIcon
      className={twMerge("w-6 h-6 transition-colors duration-200", className, {
        "text-blue-600": isSelected,
      })}
      {...rest}
    />
  )
}
