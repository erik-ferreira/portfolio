import Link from "next/link"
import { ComponentProps } from "react"
import { tv, VariantProps } from "tailwind-variants"

import { Icon } from "@/components/Icon"
import { IconSvgExternal } from "@/components/IconSvgExternal"

import { twMerge } from "@/utils/twMerge"

export const socialCardsDefaults = {
  whatsapp: {
    Icon: (
      <IconSvgExternal
        type="WhatsApp"
        className="w-7 h-7 fill-green-whatsapp dark:fill-green-whatsapp"
        enabledHover={false}
      />
    ),
    label: "Whatsapp",
    href: "https://wa.me/5585986363644",
    value: "+55 11 986363644",
  },
  mail: {
    Icon: <Icon name="Mail" className="w-7 h-7 text-red-mail" />,
    label: "Email",
    href: "mailto:erikdesouzagf@gmail.com",
    value: "erikdesouzagf@gmail.com",
  },
} as const

const socialCard = tv({
  slots: {
    base: twMerge(
      "w-full bg-slate-200 text-slate-700 px-6 py-3 rounded-lg",
      "dark:bg-section dark:text-slate-200",
      "flex flex-col gap-2",
      "sm:w-72"
    ),
    link: "text-slate-500 text-xl transition-colors",
  },

  variants: {
    variant: {
      whatsapp: {
        link: "hover:text-green-whatsapp",
      },
      mail: {
        link: "hover:text-red-mail",
      },
    },
  },

  defaultVariants: {
    variant: "whatsapp",
  },
})

type SocialCardProps = VariantProps<typeof socialCard> &
  ComponentProps<"div"> & {}

export function SocialCard({
  className,
  variant = "whatsapp",
  ...rest
}: SocialCardProps) {
  const card = socialCardsDefaults[variant]
  const { base, link } = socialCard({ className, variant })

  return (
    <div className={base({ className })} {...rest}>
      <div className="flex items-center gap-2 text-2xl font-bold md:text-3xl">
        {card.Icon}
        {card.label}
      </div>

      <Link href={card.href} className={link()} target="_blank">
        {card.value}
      </Link>
    </div>
  )
}
