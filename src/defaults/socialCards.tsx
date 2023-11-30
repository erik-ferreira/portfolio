import { Icon } from "@/components/Icon"
import { IconSvgExternal } from "@/components/IconSvgExternal"

export const socialCardsDefaults = {
  whatsapp: {
    Icon: (
      <IconSvgExternal
        type="WhatsApp"
        className="w-7 h-7 fill-green-whatsapp"
        enabledHover={false}
      />
    ),
    label: "Whatsapp",
    href: "/",
    value: "+55 11 986363644",
  },
  mail: {
    Icon: <Icon name="Mail" className="w-7 h-7 text-red-mail" />,
    label: "Email",
    href: "/",
    value: "erikdesouzagf@gmail.com",
  },
} as const
