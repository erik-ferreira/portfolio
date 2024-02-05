import { GalleryDTO } from "@/dtos/GalleryDTO"

import { altsByProjects } from "@/defaults/altsByProjects"

type PathProp = keyof typeof altsByProjects

export function formatScreenshotsByProject(
  length: number,
  path: PathProp
): GalleryDTO[] {
  const screenshots: GalleryDTO[] = Array.from({ length }, (_, index) => {
    const imageIndex = String(index + 1).padStart(2, "0")

    return {
      id: index + 1,
      src: `/projects/${path}/${imageIndex}.png`,
      variant: "image",
      direction: "horizontal",
      altSrc: altsByProjects[path][index],
    }
  })

  return screenshots
}
