export interface GalleryDTO {
  id: number
  src: string
  variant: "image" | "video"
}

export type GalleryDefault = Omit<GalleryDTO, "id">
