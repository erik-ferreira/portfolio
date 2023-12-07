import { ComponentProps } from "react"

import { Icon } from "@/components/Icon"

interface PaginationProps extends ComponentProps<"div"> {}

export function Pagination({ className, ...rest }: PaginationProps) {
  const options = [1, 2, 3, 4, 5]

  const optionCss =
    "w-16 h-16 flex items-center justify-center hover:bg-white/10 transition-colors duration-200"

  return (
    <div
      className="w-fit mx-auto bg-white/5 border border-white/10 flex"
      {...rest}
    >
      <button className={optionCss}>
        <Icon name="ChevronLeft" />
      </button>

      {options.map((option) => (
        <button key={option} className={optionCss}>
          {option}
        </button>
      ))}

      <button className={optionCss}>
        <Icon name="ChevronRight" />
      </button>
    </div>
  )
}
