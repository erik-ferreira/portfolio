import { ComponentProps } from "react"
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

type SkillNameProps = ComponentProps<"li"> &
  VariantProps<typeof skillName> & {
    name: string
  }

export function SkillName({
  name,
  className,
  variant,
  ...rest
}: SkillNameProps) {
  return (
    <li className={skillName({ className, variant })} {...rest}>
      {name}
    </li>
  )
}
