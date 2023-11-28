export interface ProjectDTO {
  id: number
  title: string
  description: string
  src: string
  href: string
  skills: Array<{
    id: number
    src: string
  }>
}
