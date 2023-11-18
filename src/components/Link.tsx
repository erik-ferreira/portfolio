import { HTMLAttributes } from "react"
import { ArrowRight } from "lucide-react"
import { tv, VariantProps } from "tailwind-variants"
import LinkPrimitive, { LinkProps as LinkPrimitiveProps } from "next/link"

const link = tv({
  base: [
    "text-lg leading-base font-semibold flex items-center w-fit gap-1 relative transition-colors",
    "hover:text-blue-500",
    "before:w-0 before:h-[3px] rounded-sm before:bg-blue-500 before:absolute before:-bottom-0.5 before:left-0 before:duration-[250ms]",
    "hover:before:w-full",
  ],

  variants: {
    variant: {
      default: "text-slate-200",
      selected: "text-blue-500",
    },
  },

  defaultVariants: {
    variant: "default",
  },
})

type LinkProps = LinkPrimitiveProps &
  HTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof link> & {
    label: string
    hideIcon?: boolean
  }

export function Link({
  label,
  className,
  variant,
  hideIcon = false,
  ...rest
}: LinkProps) {
  return (
    <LinkPrimitive
      prefetch={false}
      className={link({ variant, className })}
      {...rest}
    >
      {label}
      {!hideIcon && <ArrowRight className="w-4.5 h-4.5" />}
    </LinkPrimitive>
  )
}
