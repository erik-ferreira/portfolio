import Link from "next/link"
import { ComponentProps } from "react"
import { tv, VariantProps } from "tailwind-variants"

import { socialCardsDefaults } from "@/defaults/socialCards"

const socialCard = tv({
  slots: {
    base: "bg-section px-6 py-3 flex flex-col gap-2 w-fit rounded-lg",
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
    <div className={base()} {...rest}>
      <div className="flex items-center gap-2 text-3xl font-bold">
        {card.Icon}
        {card.label}
      </div>

      <Link href={card.href} className={link()}>
        {card.value}
      </Link>
    </div>
  )
}
