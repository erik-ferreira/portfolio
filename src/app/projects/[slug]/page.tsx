import { Metadata } from "next"

import { OneProjectContent } from "@/components/OneProjectContent"

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const slugCropped = slug
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  const formatSlug = slugCropped.join(" ")

  return {
    title: `${formatSlug} | Erik Ferreira`,
  }
}

export default function Project() {
  return (
    <main>
      <OneProjectContent />
    </main>
  )
}
