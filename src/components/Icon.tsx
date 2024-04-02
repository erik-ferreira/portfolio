import { icons, LucideProps } from "lucide-react"
import { tv, VariantProps } from "tailwind-variants"

const icon = tv({
  base: "",

  variants: {
    size: {
      small: "w-5 h-5",
      default: "w-6 h-6",
      large: ["w-6 h-6", "xs:w-7 xs:h-7", "sm:w-8 sm:h-8"],
    },

    isSelected: {
      true: "text-blue-600",
    },

    enabledHover: {
      true: "transition-colors hover:text-blue-600",
    },
  },

  defaultVariants: {
    size: "default",
    isSelected: false,
    enabledHover: false,
  },
})

export type IconProps = LucideProps &
  VariantProps<typeof icon> & {
    name?: keyof typeof icons
    enabledHover?: boolean
  }

export function Icon({
  name = "Send",
  size,
  isSelected,
  enabledHover,
  className,
  ...rest
}: IconProps) {
  const LucideIcon = icons[name]

  return (
    <LucideIcon
      className={icon({ size, isSelected, enabledHover, className })}
      {...rest}
    />
  )
}
