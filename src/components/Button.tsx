import { Send } from "lucide-react"
import { ComponentProps, Fragment } from "react"
import { tv, VariantProps } from "tailwind-variants"

const button = tv({
  slots: {
    gradient:
      "p-0.5 rounded bg-gradient-to-r from-blue-500 to-violet-600 to-80%",
    base: "flex items-center justify-center gap-2 px-4 py-3 rounded transition-colors duration-400  font-bold disabled:opacity-60",
    icon: "w-5 h-5",
  },

  variants: {
    variant: {
      default: {
        base: "bg-blue-600 enabled:hover:bg-blue-700",
      },
      outline: {
        base: "bg-transparent border-2 border-blue-500 text-blue-500 shadow-button hover:bg-blue-500 hover:text-page",
      },
      "outline-gradient": {
        base: "bg-page hover:bg-transparent",
      },
    },

    size: {
      default: {
        base: "text-lg",
      },
      large: {
        base: "text-3.5xl gap-4 py-2",
        icon: "w-8 h-8",
      },
    },
  },

  defaultVariants: {
    base: "default",
    size: "default",
  },
})

type ButtonProps = VariantProps<typeof button> & ComponentProps<"button"> & {}

export function Button({
  variant = "default",
  size,
  className,
  ...rest
}: ButtonProps) {
  const { base, icon, gradient } = button({ variant, size, className })
  const Gradient = variant === "outline-gradient" ? "div" : Fragment

  return (
    <Gradient className={gradient()}>
      <button className={base()} {...rest}>
        Enviar <Send className={icon()} />
      </button>
    </Gradient>
  )
}
