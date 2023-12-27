import { HTMLAttributes } from "react"
import { tv, VariantProps } from "tailwind-variants"

const skillName = tv({
  base: "w-fit h-fit rounded-lg list-none no-underline whitespace-nowrap px-3 py-1 text-lg font-semibold bg-sky-950 transition-colors duration-300",

  variants: {
    variant: {
      default: "",
      outline:
        "bg-transparent text-sky-900 border-[1.5px] border-sky-900 hover:bg-sky-950 hover:text-slate-200",
      selected: "border-2 border-transparent hover:border-sky-900",
    },
  },

  defaultVariants: {
    variant: "default",
  },
})

type SkillNameProps = HTMLAttributes<HTMLElement> &
  VariantProps<typeof skillName> & {
    name: string
    isButton?: boolean
  }

export function SkillName({
  name,
  className,
  variant,
  isButton = false,
  ...rest
}: SkillNameProps) {
  const Component = isButton ? "button" : "li"

  return (
    <Component className={skillName({ className, variant })} {...rest}>
      {name}
    </Component>
  )
}
