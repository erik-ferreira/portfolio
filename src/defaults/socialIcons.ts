import { SocialIconDTO } from "@/dtos/SocialIconDTO"

type SocialIconsDefault = Omit<SocialIconDTO, "id">

const socialIconsDefault: SocialIconsDefault[] = [
  {
    name: "Github",
    type: "default",
    label: "erik-ferreira",
    href: "/",
  },
  {
    name: "Linkedin",
    type: "default",
    label: "@erik-ferreira",
    href: "/",
  },
  {
    externalIcon: "WhatsApp",
    type: "external",
    label: "+55 (85) 98636-3644",
    href: "/",
  },
  {
    name: "Instagram",
    type: "default",
    label: "erik_souzagf",
    href: "/",
  },
  {
    name: "Mail",
    type: "default",
    label: "erikdesouzagf@gmail.com",
    href: "/",
  },
]

export const socialIconsList: SocialIconDTO[] = socialIconsDefault.map(
  (project, index) => ({
    id: index + 1,
    ...project,
  })
)
