import { ComponentProps } from "react"
import { tv, VariantProps } from "tailwind-variants"

const title = tv({
  slots: {
    base: "relative",
    background: [
      "block font-orbi font-semibold uppercase blur-[1.5px] text-center mb-6",
      "md:blur-[2px] md:mb-0",
      "text-slate-300 dark:text-slate-800",
    ],
    text: "font-marker w-max text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-violet-600 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4",
  },

  variants: {
    variant: {
      default: {
        background: [
          "text-4.5xl leading-none",
          "min-[490px]:text-6xl",
          "md:text-8xl md:leading-snug",
        ],
        text: "text-4.5xl md:text-5.5xl",
      },
      subtitle: {
        background: ["text-4.5xl", "md:text-6.5xl"],
        text: ["text-3xl", "md:text-4xl"],
      },
    },
  },

  defaultVariants: {
    variant: "default",
  },
})

type TitleProps = ComponentProps<"div"> &
  VariantProps<typeof title> & {
    label?: string
    labelBackground?: string
    isTitlePage?: boolean
  }

export function Title({
  label = "Habilidades",
  labelBackground = "Skills",
  variant = "default",
  isTitlePage = false,
  className,
  ...rest
}: TitleProps) {
  const Component = isTitlePage ? "h1" : "h2"
  const { base, background, text } = title({ variant, className })

  return (
    <div className={base({ className })} {...rest}>
      <span className={background()}>{labelBackground}</span>

      <Component className={text()}>{label}</Component>
    </div>
  )
}
