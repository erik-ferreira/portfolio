import Link from "next/link"
import { ComponentProps } from "react"
import { tv, VariantProps } from "tailwind-variants"

import { Icon } from "@/components/Icon"
import { IconSvgExternal } from "@/components/IconSvgExternal"

const socialIcons = tv({
  base: "mx-auto flex items-center gap-6",

  variants: {
    variant: {
      default: "",
      fixed:
        "flex-col fixed bottom-0 left-14 z-10 after:content-normal after:w-1 after:h-[150px] after:bg-blue-600 after:rounded-lg",
    },
  },

  defaultVariants: {
    variant: "default",
  },
})

type SocialIconsProps = VariantProps<typeof socialIcons> &
  ComponentProps<"div"> & {}

export function SocialIcons({ variant, className, ...rest }: SocialIconsProps) {
  return (
    <div className={socialIcons({ variant, className })} {...rest}>
      <Link href="/" prefetch={false}>
        <Icon name="Github" />
      </Link>
      <Link href="/" prefetch={false}>
        <Icon name="Instagram" />
      </Link>
      <Link href="/" prefetch={false}>
        <Icon name="Linkedin" />
      </Link>
      <Link href="/" prefetch={false}>
        <IconSvgExternal type="WhatsApp" />
      </Link>
    </div>
  )
}
