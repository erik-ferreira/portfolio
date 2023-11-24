import { labelColorVariants } from "@/components/TechIcon"

export interface TechDTO {
  id: number
  label: string
  src: string
  typed: keyof typeof labelColorVariants
}
