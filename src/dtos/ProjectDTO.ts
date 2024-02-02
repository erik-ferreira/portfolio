import { SkillDTO } from "@/dtos/SkillDTO"
import { GalleryDTO } from "@/dtos/GalleryDTO"

export interface ProjectDTO {
  id: number
  title: string
  description: string
  src: string
  altSrc: string
  href: string
  skills: Array<SkillDTO>
  skillsNames: Array<string>
  githubHref: string
  demoHref: string | null
  slug: string
  screenshots: Array<GalleryDTO>
  srcBackground: string
  srcVideo: string
}

export type ProjectsDefault = Omit<
  ProjectDTO,
  "id" | "href" | "slug" | "skillsNames"
>
