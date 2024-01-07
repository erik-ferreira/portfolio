export interface GalleryDTO {
  id: number
  src: string
  variant: "image" | "video"
  direction: "horizontal" | "vertical"
  videoPreview: null | string
}

export type GalleryDefault = Omit<
  GalleryDTO,
  "id" | "direction" | "videoPreview"
>
