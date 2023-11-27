import Image from "next/image"
import { icons, LucideProps } from "lucide-react"

import WhatsAppSVG from "@/assets/icons/whatsapp.svg"
import CaretLeftSVG from "@/assets/icons/caret-left.svg"
import CaretRightSVG from "@/assets/icons/caret-right.svg"

import { twMerge } from "@/utils/twMerge"

export const externalIcons = {
  WhatsApp: {
    icon: WhatsAppSVG,
    alt: "ícone do WhatsApp",
  } as const,
  CaretLeft: {
    icon: CaretLeftSVG,
    alt: "Ícone de seta para a esquerda",
  } as const,
  CaretRight: {
    icon: CaretRightSVG,
    alt: "Ícone de seta para a direita",
  } as const,
} as const

export interface IconProps extends LucideProps {
  name?: keyof typeof icons
  nameExternal?: keyof typeof externalIcons
  isSelected?: boolean
}

export function Icon({
  name = "Send",
  nameExternal,
  isSelected = false,
  className,
  ...rest
}: IconProps) {
  const isExternalIcon = !!nameExternal
  const LucideIcon = icons[name]

  return isExternalIcon ? (
    <Image
      src={externalIcons[nameExternal].icon}
      width={24}
      height={24}
      alt="aaaa"
    />
  ) : (
    <LucideIcon
      className={twMerge("w-6 h-6 transition-colors duration-200", className, {
        "text-blue-600": isSelected,
      })}
      {...rest}
    />
  )
}
