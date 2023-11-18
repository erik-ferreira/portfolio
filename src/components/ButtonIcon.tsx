import { icons } from "lucide-react"
import { ComponentProps } from "react"
import { tv, VariantProps } from "tailwind-variants"

const buttonIcon = tv({
  base: [
    "transition-colors duration-200 hover:text-blue-600 disabled:opacity-60",
  ],

  variants: {
    variant: {
      default: "text-slate-200",
      selected: "text-blue-600",
    },
  },

  defaultVariants: {
    variant: "default",
  },
})

interface ButtonIconProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonIcon> {
  icon?: keyof typeof icons
}

export function ButtonIcon({
  icon = "MoonStar",
  variant,
  className,
  ...rest
}: ButtonIconProps) {
  const Icon = icons[icon]

  return (
    <button className={buttonIcon({ variant, className })} {...rest}>
      <Icon className="w-6 h-6" />
    </button>
  )
}
