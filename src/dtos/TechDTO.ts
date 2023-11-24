import { labelColorVariants } from "@/defaults/label"

export interface TechDTO {
  id: number
  label: string
  src: string
  typed: keyof typeof labelColorVariants
}
