import { GalleryDTO, GalleryDefault } from "@/dtos/GalleryDTO"

const galleryDefault: GalleryDefault[] = [
  {
    src: "/hobbies/basquete/01.png",
    variant: "image",
    altSrc: "",
  },
  {
    src: "/hobbies/basquete/02.png",
    variant: "image",
    altSrc: "",
  },
  {
    src: "/hobbies/basquete/03.png",
    variant: "video",
    altSrc: "",
  },
  {
    src: "/hobbies/basquete/04.png",
    variant: "image",
    altSrc: "",
  },
  {
    src: "/hobbies/basquete/05.png",
    variant: "image",
    altSrc: "",
  },
  {
    src: "/hobbies/basquete/06.png",
    variant: "video",
    altSrc: "",
  },
  {
    src: "/hobbies/basquete/07.png",
    variant: "image",
    altSrc: "",
  },
  {
    src: "/hobbies/basquete/08.png",
    variant: "video",
    altSrc: "",
  },
]

export const gallery: GalleryDTO[] = galleryDefault.map((item, index) => ({
  ...item,
  id: index + 1,
  direction: "horizontal",
}))
