import { GalleryDTO } from "@/dtos/GalleryDTO"

const sourcesImages = {
  amigos: "/hobbies/amigos/",
  basquete: "/hobbies/basquete/",
  gameplay: "/hobbies/gameplay/",
  assistir: "/hobbies/assistir/",
}

interface FormatGalleryProps {
  length: number
  type: keyof typeof sourcesImages
  indexesVideos?: string[]
  indexesVerticals?: string[]
}

export function formatGalleryByHobby({
  length,
  type,
  indexesVideos = [],
  indexesVerticals = [],
}: FormatGalleryProps): GalleryDTO[] {
  const gallery: GalleryDTO[] = Array.from({ length }, (_, index) => {
    const imageIndex = String(index + 1).padStart(2, "0")
    const variant =
      !!indexesVideos && indexesVideos.includes(imageIndex) ? "video" : "image"
    const extension = variant === "image" ? "png" : "mp4"
    const filename = `${imageIndex}.${extension}`
    const src = `${sourcesImages[type]}${filename}`
    const direction =
      !!indexesVerticals && indexesVerticals.includes(imageIndex)
        ? "vertical"
        : "horizontal"

    return {
      id: index + 1,
      src,
      variant,
      direction,
      altSrc: `${
        variant === "image" ? "Imagem" : "Vídeo"
      } com alguns dos meus amigos.`,
    }
  })

  return gallery
}
