import { SkillDTO } from "@/dtos/SkillDTO"
import { GalleryDTO } from "@/dtos/GalleryDTO"

export interface ProjectDTO {
  id: number
  title: string
  description: string
  src: string
  href: string
  skills: Array<SkillDTO>
  skills_names: Array<string>
  github_href: string
  demo_href: string | null
  slug: string
  screenshots: Array<GalleryDTO>
  srcBackground: string
  srcVideo: string
}

export type ProjectsDefault = Omit<
  ProjectDTO,
  "id" | "href" | "slug" | "skills_names"
>
