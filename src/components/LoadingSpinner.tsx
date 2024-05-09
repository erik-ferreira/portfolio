import { ComponentProps } from "react"
import { tv, VariantProps } from "tailwind-variants"

const loadingSpinner = tv({
  base: "animate-spin rounded-full border-2 border-blue-500 border-b-transparent",

  variants: {
    size: {
      default: "w-6 h-6",
      large: "w-10 h-10",
      "extra-large": "w-20 h-20 border-4",
    },
  },

  defaultVariants: {
    size: "default",
  },
})

type LoadingSpinnerProps = VariantProps<typeof loadingSpinner> &
  ComponentProps<"span"> & {}

export function LoadingSpinner({
  className,
  size,
  ...rest
}: LoadingSpinnerProps) {
  return <span className={loadingSpinner({ className, size })} {...rest} />
}
