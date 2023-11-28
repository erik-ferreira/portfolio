export interface ProjectDTO {
  id: number
  title: string
  description: string
  image: string
  skills: Array<{
    id: number
    src: string
  }>
}
