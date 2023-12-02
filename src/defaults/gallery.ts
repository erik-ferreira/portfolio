import { GalleryDTO } from "@/dtos/GalleryDTO"

type GalleryDefault = Omit<GalleryDTO, "id">

const galleryDefault: GalleryDefault[] = [
  {
    src: "/basquete/1.png",
    variant: "image",
  },
  {
    src: "/basquete/2.png",
    variant: "image",
  },
  {
    src: "/basquete/3.png",
    variant: "video",
  },
  {
    src: "/basquete/4.png",
    variant: "image",
  },
  {
    src: "/basquete/5.png",
    variant: "image",
  },
  {
    src: "/basquete/6.png",
    variant: "video",
  },
  {
    src: "/basquete/7.png",
    variant: "image",
  },
  {
    src: "/basquete/8.png",
    variant: "video",
  },
]

export const gallery: GalleryDTO[] = galleryDefault.map((item, index) => ({
  ...item,
  id: index + 1,
}))
