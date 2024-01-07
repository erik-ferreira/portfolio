"use client"

import { useParams } from "next/navigation"

import { Title } from "@/components/Title"
import { Gallery } from "@/components/Gallery"
import { Description } from "@/components/Description"

import { hobbies } from "@/defaults/hobbies"

type ParamsHobbyProps = {
  slug: string
}

export default function Hobby() {
  const { slug } = useParams<ParamsHobbyProps>()
  const hobby = hobbies.filter((item) => item.slug === slug)[0]

  return (
    <main className="max-w-content w-content mx-auto p-8">
      <Title label="Contato" labelBackground="Contact" isTitlePage />

      <h2 className="text-4xl font-bold text-blue-500 text-center mt-6">
        {hobby.title}
      </h2>

      <Description label={hobby.description} />

      <article className="grid grid-cols-4 gap-8">
        {hobby.gallery.map((gallery) => (
          <Gallery key={gallery.id} gallery={gallery} />
        ))}
      </article>
    </main>
  )
}
