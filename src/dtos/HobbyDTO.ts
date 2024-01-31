import { GalleryDTO } from "@/dtos/GalleryDTO"

export interface HobbyDTO {
  id: number
  title: string
  description: string
  src: string
  altSrc: string
  href: string
  slug: string
  gallery: GalleryDTO[]
}

export type HobbyDefault = Omit<HobbyDTO, "id" | "href" | "slug">
