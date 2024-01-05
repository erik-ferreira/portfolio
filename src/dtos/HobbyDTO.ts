export interface HobbyDTO {
  id: number
  title: string
  description: string
  src: string
  href: string
  slug: string
}

export type HobbyDefault = Omit<HobbyDTO, "id" | "href" | "slug">
