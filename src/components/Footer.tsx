import { ComponentProps } from "react"

import { Icon } from "@/components/Icon"
import { SocialIcons } from "@/components/SocialIcons"

import { twMerge } from "@/utils/twMerge"

interface FooterProps extends ComponentProps<"footer"> {}

export function Footer({ className, ...rest }: FooterProps) {
  return (
    <footer
      className={twMerge("border-t border-slate-500", className)}
      {...rest}
    >
      <div
        className={twMerge(
          "max-w-content w-content mx-auto flex items-center justify-between gap-6 py-4 px-8",
          "max-[650px]:flex-col max-[650px]:text-center"
        )}
      >
        <span className="text-lg font-semibold">
          Projetado e Desenvolvido
          <br /> por Erik Ferreira
        </span>

        <span className="flex gap-2">
          Copyright <Icon name="Copyright" /> 2023
        </span>

        <SocialIcons />
      </div>
    </footer>
  )
}
