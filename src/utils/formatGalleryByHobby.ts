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

    const typeLabel = variant === "image" ? "Imagem" : "Vídeo"

    const altsSources = {
      amigos: `${typeLabel} com alguns dos meus amigos.`,
      basquete: `${typeLabel} com alguns amigos jogando basquete.`,
      gameplay: `${typeLabel} de alguns jogos que eu gosto muito, nem todos eu tiver a oportunidade de jogar, mas são jogos que eu gostaria .`,
      assistir: `Imagens de alguns animes, filmes e series que ja assisti e gostei muito.`,
    }

    return {
      id: index + 1,
      src,
      variant,
      direction,
      altSrc: altsSources[type],
    }
  })

  return gallery
}
