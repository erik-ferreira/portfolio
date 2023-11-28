import { labelColorVariants } from "@/components/SkillIcon"

export interface SkillDTO {
  id: number
  label: string
  src: string
  typed: keyof typeof labelColorVariants
}
