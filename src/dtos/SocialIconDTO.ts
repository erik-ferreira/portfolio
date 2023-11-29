import { icons } from "lucide-react"

import { externalIcons } from "@/defaults/icons"

export interface SocialIconDTO {
  id: number
  name?: keyof typeof icons
  externalIcon?: keyof typeof externalIcons
  type: "default" | "external"
  label: string
  href: string
}
