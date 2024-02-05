import Link from "next/link"
import { ComponentProps } from "react"
import { tv, VariantProps } from "tailwind-variants"

import { Icon } from "@/components/Icon"
import { IconSvgExternal } from "@/components/IconSvgExternal"

import { socialIconsList } from "@/defaults/icons"

const socialIcons = tv({
  slots: {
    base: "flex items-center gap-6",
    link: "",
    icon: "",
    iconExternal: "",
  },

  variants: {
    variant: {
      default: {
        base: "",
      },
      fixed: {
        base: "flex-col fixed bottom-0 left-14 z-10 after:content-normal after:w-1 after:h-[150px] after:bg-blue-600 after:rounded-lg",
      },
      completed: {
        base: "flex-col items-start gap-2",
        link: "flex gap-1 items-center text-lg font-semibold hover:text-sky-600 group",
        icon: "group-hover:text-sky-600",
        iconExternal: "group-hover:fill-sky-600",
      },
    },
  },

  defaultVariants: {
    variant: "default",
  },
})

type SocialIconsProps = VariantProps<typeof socialIcons> &
  ComponentProps<"div"> & {}

export function SocialIcons({ variant, className, ...rest }: SocialIconsProps) {
  const { base, link, icon, iconExternal } = socialIcons({ variant, className })

  return (
    <div className={base()} {...rest}>
      {socialIconsList.map((socialIcon) => {
        return (
          <Link
            key={socialIcon.id}
            href={socialIcon.href}
            prefetch={false}
            className={link()}
            target="_blank"
          >
            {socialIcon.type === "default" ? (
              <Icon name={socialIcon.name} className={icon()} enabledHover />
            ) : (
              <IconSvgExternal
                type={socialIcon.externalIcon}
                className={iconExternal()}
              />
            )}

            {variant === "completed" && socialIcon.label}
          </Link>
        )
      })}
    </div>
  )
}
