export interface SkillDTO {
  id: number
  name: string
  src: string
  color: string
  rgb: string
}

export type SkillDefault = Omit<SkillDTO, "id" | "rgb">
