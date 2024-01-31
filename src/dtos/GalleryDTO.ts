export interface GalleryDTO {
  id: number
  src: string
  altSrc: string
  variant: "image" | "video"
  direction: "horizontal" | "vertical"
}

export type GalleryDefault = Omit<GalleryDTO, "id" | "direction">
