import { icons, LucideProps } from "lucide-react"
import { tv, VariantProps } from "tailwind-variants"

const icon = tv({
  base: "transition-colors hover:text-blue-600",

  variants: {
    size: {
      small: "w-5 h-5",
      default: "w-6 h-6",
      large: "w-8 h-8",
    },

    isSelected: {
      true: "text-blue-600",
    },

    disabledHover: {
      true: "hover:text-slate-200",
    },
  },

  defaultVariants: {
    size: "default",
    isSelected: false,
    disabledHover: false,
  },
})

export type IconProps = LucideProps &
  VariantProps<typeof icon> & {
    name?: keyof typeof icons
    disabledHover?: boolean
  }

export function Icon({
  name = "Send",
  size,
  isSelected,
  disabledHover,
  className,
  ...rest
}: IconProps) {
  const LucideIcon = icons[name]

  return (
    <LucideIcon
      className={icon({ size, isSelected, disabledHover, className })}
      {...rest}
    />
  )
}
