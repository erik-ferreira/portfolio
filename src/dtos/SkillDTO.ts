export interface SkillDTO {
  id: number
  label: string
  src: string
  color: string
  rgb: string
}

export type SkillDefault = Omit<SkillDTO, "id" | "rgb">
