import { Icon } from "@/components/Icon"
import { SocialIcons } from "../SocialIcons"

interface FooterProps {}

export function Footer({ ...rest }: FooterProps) {
  return (
    <footer className="border-t border-slate-500 grid grid-cols-3 items-center justify-center px-8 py-4">
      <span className="mx-auto text-lg font-semibold">
        Projeto e Desenvolvido
        <br /> por Erik Ferreira
      </span>

      <span className="mx-auto flex gap-2">
        Copyright <Icon name="Copyright" disabledHover /> 2023
      </span>

      <SocialIcons />
    </footer>
  )
}
