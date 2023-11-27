import { Icon } from "@/components/Icon"

interface SocialIconsProps {}

export function SocialIcons({ ...rest }: SocialIconsProps) {
  return (
    <ul className="mx-auto flex items-center gap-6">
      <li>
        <Icon name="Github" />
      </li>

      <li>
        <Icon name="Instagram" />
      </li>
      <li>
        <Icon name="Linkedin" />
      </li>
      <li>
        <Icon nameExternal="WhatsApp" className="border" />
      </li>
    </ul>
  )
}
