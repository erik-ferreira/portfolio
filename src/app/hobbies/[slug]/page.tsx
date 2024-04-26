"use client"

import { useParams, redirect } from "next/navigation"

import { Title } from "@/components/Title"
import { Gallery } from "@/components/Gallery"
import { Description } from "@/components/Description"

import { hobbies } from "@/defaults/hobbies"

import { twMerge } from "@/utils/twMerge"

type ParamsHobbyProps = {
  slug: string
}

export default function Hobby() {
  const { slug } = useParams<ParamsHobbyProps>()
  const hobby = hobbies.filter((item) => item.slug === slug)[0]

  if (!hobby) {
    redirect("/404")
  }

  return (
    <main
      className={twMerge(
        "max-w-content w-content mx-auto px-0 py-2",
        "md:p-4",
        "lg:p-8"
      )}
    >
      <Title label="Hobby" labelBackground="Hobby" isTitlePage />

      <h2 className="text-4xl font-bold text-blue-500 text-center mt-6">
        {hobby.title}
      </h2>

      <Description label={hobby.description} />

      <article
        className={twMerge(
          "grid grid-cols-1 gap-4",
          "sm:grid-cols-2",
          "lg:grid-cols-3",
          "xl:grid-cols-4 xl:gap-8",
          "border border-red-500"
        )}
      >
        {hobby.gallery.map((gallery) => (
          <Gallery key={gallery.id} gallery={gallery} />
        ))}
      </article>
    </main>
  )
}
