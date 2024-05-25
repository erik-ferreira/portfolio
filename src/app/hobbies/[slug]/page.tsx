import type { Metadata } from "next"

import { Title } from "@/components/Title"
import { HobbyContent } from "@/components/HobbyContent"

import { twMerge } from "@/utils/twMerge"

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const formatSlug = slug.charAt(0).toUpperCase() + slug.slice(1)

  return {
    title: `${formatSlug} | Erik Ferreira`,
  }
}

export default function Hobby() {
  return (
    <main
      className={twMerge(
        "max-w-content w-content mx-auto px-0 py-2",
        "md:p-4",
        "lg:p-8"
      )}
    >
      <Title label="Hobby" labelBackground="Hobby" isTitlePage />

      <HobbyContent />
    </main>
  )
}
