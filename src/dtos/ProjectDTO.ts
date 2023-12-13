import { SkillDTO } from "@/dtos/SkillDTO"

export interface ProjectDTO {
  id: number
  title: string
  description: string
  src: string
  href: string
  skills: Array<SkillDTO>
  github_href: string
  demo_href: string
}
