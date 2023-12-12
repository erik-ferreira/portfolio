import { variantsColorSkills } from "@/defaults/skills"

export interface SkillDTO {
  id: number
  label: string
  src: string
  typed: keyof typeof variantsColorSkills
}
