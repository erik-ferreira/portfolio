import { HTMLAttributes, HTMLAttributeAnchorTarget } from "react"
import { ArrowRight } from "lucide-react"
import { tv, VariantProps } from "tailwind-variants"
import LinkPrimitive, { LinkProps as LinkPrimitiveProps } from "next/link"

const link = tv({
  slots: {
    base: [
      "leading-base font-semibold flex items-center w-fit gap-1 relative transition-colors",
      "hover:text-blue-500",
      "before:w-0 before:h-[3px] rounded-sm before:bg-blue-500 before:absolute before:-bottom-0.5 before:left-0 before:duration-[250ms]",
      "hover:before:w-full",
    ],
    icon: "",
  },

  variants: {
    variant: {
      default: {
        base: "text-slate-200",
      },
      selected: {
        base: "text-blue-500",
      },
      secondary: {
        base: "text-violet-500 hover:text-violet-400 before:bg-violet-500",
      },
    },

    size: {
      default: {
        base: "text-lg",
        icon: "w-4.5 h-4.5",
      },
      large: {
        base: "text-2xl",
        icon: "w-6 h-6",
      },
    },
  },

  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

type LinkProps = LinkPrimitiveProps &
  HTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof link> & {
    label: string
    hideIcon?: boolean
    target?: HTMLAttributeAnchorTarget
  }

export function Link({
  label,
  className,
  variant,
  size,
  hideIcon = false,
  target,
  ...rest
}: LinkProps) {
  const { base, icon } = link({ variant, size })

  return (
    <LinkPrimitive className={base({ className })} target={target} {...rest}>
      {label}
      {!hideIcon && <ArrowRight className={icon()} />}
    </LinkPrimitive>
  )
}
