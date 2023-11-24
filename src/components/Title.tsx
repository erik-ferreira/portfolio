import { ComponentProps } from "react"

interface TitleProps extends ComponentProps<"div"> {
  label?: string
  labelBackground?: string
}

export function Title({
  label = "Habilidades",
  labelBackground = "Skills",
  ...rest
}: TitleProps) {
  return (
    <div className="relative" {...rest}>
      <h2 className="font-orbi text-8xl font-semibold text-slate-800 uppercase blur-[2px]">
        {labelBackground}
      </h2>
      <span className="font-marker text-5.5xl text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-violet-600 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
        {label}
      </span>
    </div>
  )
}
