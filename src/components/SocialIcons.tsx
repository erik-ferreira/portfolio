import Link from "next/link"

import { Icon } from "@/components/Icon"
import { IconSvgExternal } from "@/components/IconSvgExternal"

interface SocialIconsProps {}

export function SocialIcons({ ...rest }: SocialIconsProps) {
  return (
    <div className="mx-auto flex items-center gap-6">
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
