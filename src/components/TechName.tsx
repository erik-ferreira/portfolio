import { ComponentProps } from "react"

interface TechNameProps extends ComponentProps<"li"> {
  name: string
}

export function TechName({ name, ...rest }: TechNameProps) {
  return (
    <li
      className="w-fit h-fit rounded-lg list-none no-underline whitespace-nowrap px-3 py-1 text-lg font-semibold bg-sky-950"
      {...rest}
    >
      {name}
    </li>
  )
}
