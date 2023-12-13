import { ComponentProps } from "react"
import { tv, VariantProps } from "tailwind-variants"

const title = tv({
  slots: {
    base: "relative",
    background:
      "font-orbi font-semibold text-slate-800 uppercase blur-[2px] text-center",
    text: "font-marker text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-violet-600 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4",
  },

  variants: {
    variant: {
      default: {
        background: "text-8xl",
        text: "text-5.5xl",
      },
      subtitle: {
        background: "text-6.5xl",
        text: "text-4xl",
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
  }

export function Title({
  label = "Habilidades",
  labelBackground = "Skills",
  variant = "default",
  className,
  ...rest
}: TitleProps) {
  const { base, background, text } = title({ variant, className })

  return (
    <div className={base({ className })} {...rest}>
      <h2 className={background()}>{labelBackground}</h2>

      <span className={text()}>{label}</span>
    </div>
  )
}
