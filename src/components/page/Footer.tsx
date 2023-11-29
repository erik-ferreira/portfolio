import { ComponentProps } from "react"

import { Icon } from "@/components/Icon"
import { SocialIcons } from "@/components/SocialIcons"

import { twMerge } from "@/utils/twMerge"

interface FooterProps extends ComponentProps<"footer"> {}

export function Footer({ className, ...rest }: FooterProps) {
  return (
    <footer
      className={twMerge(" border-t border-slate-500", className)}
      {...rest}
    >
      <div className="max-w-content w-content mx-auto flex items-center justify-between py-4 px-8">
        <span className="text-lg font-semibold">
          Projeto e Desenvolvido
          <br /> por Erik Ferreira
        </span>

        <span className="flex gap-2">
          Copyright <Icon name="Copyright" disabledHover /> 2023
        </span>

        <SocialIcons />
      </div>
    </footer>
  )
}
