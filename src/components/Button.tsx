import { Slot } from "@radix-ui/react-slot"
import { ButtonHTMLAttributes } from "react"
import { ClassNameValue } from "tailwind-merge"
import { tv, VariantProps } from "tailwind-variants"

import { LoadingSpinner } from "@/components/LoadingSpinner"
import { twMerge } from "@/utils/twMerge"

const button = tv({
  base: "w-fit flex items-center justify-center gap-2 px-4 py-3 rounded transition-colors duration-400 font-bold disabled:opacity-60 disabled:pointer-events-none",

  variants: {
    variant: {
      default: "bg-blue-600 enabled:hover:bg-blue-700",
      outline: [
        "bg-transparent text-blue-500 shadow-blue",
        "border-2 border-blue-500",
        "hover:bg-blue-500 hover:text-page",
        "data-[loading=true]:w-32",
      ],
      "outline-gradient": [
        "bg-slate-100",
        "hover:text-slate-200 hover:bg-transparent",
        "dark:bg-page dark:hover:bg-transparent",
      ],
    },

    size: {
      default: "text-lg",

      large: [
        "text-2xl gap-2 py-2",
        "xs:text-3xl xs:gap-3",
        "sm:text-3.5xl xs:leading-normal sm:gap-4",
      ],
    },
  },

  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

type ButtonProps = VariantProps<typeof button> &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean
    loading?: boolean
    classNameContainer?: ClassNameValue
  }

export function Button({
  variant = "default",
  size,
  className,
  asChild = false,
  loading = false,
  classNameContainer,
  ...rest
}: ButtonProps) {
  const Component = asChild ? Slot : "button"
  const classNameComponent = button({ variant, size, className })

  const componentButton = (
    <Component data-loading={loading} className={classNameComponent} {...rest}>
      {loading ? <LoadingSpinner /> : rest.children}
    </Component>
  )

  return variant === "outline-gradient" ? (
    <div
      className={twMerge(
        "w-fit p-0.5 rounded",
        "bg-gradient-to-r from-blue-500 to-violet-600 to-80%",
        classNameContainer
      )}
    >
      {componentButton}
    </div>
  ) : (
    <>{componentButton}</>
  )
}
