export interface HobbyDTO {
  id: number
  title: string
  description: string
  src: string
  href: string
}

export type HobbyDefault = Omit<HobbyDTO, "id">
