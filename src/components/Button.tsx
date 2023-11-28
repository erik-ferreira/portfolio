import { Slot } from "@radix-ui/react-slot"
import { HtmlHTMLAttributes, Fragment } from "react"
import { tv, VariantProps } from "tailwind-variants"

const button = tv({
  base: "flex items-center justify-center gap-2 px-4 py-3 rounded transition-colors duration-400  font-bold disabled:opacity-60",

  variants: {
    variant: {
      default: "bg-blue-600 enabled:hover:bg-blue-700",
      outline:
        "bg-transparent border-2 border-blue-500 text-blue-500 shadow-button hover:bg-blue-500 hover:text-page",
      "outline-gradient": "bg-page hover:bg-transparent",
    },

    size: {
      default: "text-lg",
      large: "text-3.5xl gap-4 py-2",
    },
  },

  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

type ButtonProps = VariantProps<typeof button> &
  HtmlHTMLAttributes<HTMLElement> & {
    asChild?: boolean
  }

export function Button({
  variant = "default",
  size,
  className,
  asChild = false,
  ...rest
}: ButtonProps) {
  const Gradient = variant === "outline-gradient" ? "div" : Fragment
  const Component = asChild ? Slot : "button"

  return (
    <Gradient className="p-0.5 rounded bg-gradient-to-r from-blue-500 to-violet-600 to-80%">
      <Component className={button({ variant, size, className })} {...rest} />
    </Gradient>
  )
}
