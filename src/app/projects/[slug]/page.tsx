"use client"

import Link from "next/link"
import { useParams } from "next/navigation"

import { Icon } from "@/components/Icon"
import { Title } from "@/components/Title"
import { Skill } from "@/components/Skill"
import { Video } from "@/components/Video"
import { Button } from "@/components/Button"
import { Gallery } from "@/components/Gallery"
import { Description } from "@/components/Description"

import { hobbies } from "@/defaults/hobbies"
import { projects } from "@/defaults/projects"

type ParamsProps = {
  slug: string
}

export default function Project() {
  const { slug } = useParams<ParamsProps>()
  const project = projects.filter((item) => item.slug === slug)[0]
  const projectHasDemo = !!project.demo_href

  return (
    <main className="max-w-content w-content mx-auto">
      <section className="p-8 pb-0 mb-8">
        <Title
          label={project.title}
          labelBackground={project.title}
          isTitlePage
        />

        <div className="w-fit mx-auto flex gap-6 my-4">
          {projectHasDemo ? (
            <Button variant="outline" asChild>
              <Link href={project.demo_href || ""}>
                Online
                <Icon name="Link" size="small" />
              </Link>
            </Button>
          ) : (
            <Button variant="outline" disabled>
              Online
              <Icon name="Link" size="small" />
            </Button>
          )}

          <Button variant="outline" asChild>
            <Link href={project.github_href}>
              Repositório
              <Icon name="Github" size="small" />
            </Link>
          </Button>
        </div>

        <Description label={project.description} />

        <Title
          label="Tecnologias"
          labelBackground="Technologies"
          variant="subtitle"
          className="mt-8"
        />

        <div className="max-w-[704px] w-full mx-auto flex flex-wrap items-center justify-center gap-6 py-4">
          {project.skills.map((skill) => (
            <Skill key={skill.id} skill={skill} />
          ))}
        </div>

        <Title
          label="Capturas de tela"
          labelBackground="Screenshot"
          variant="subtitle"
          className="mt-8"
        />
        <div className="w-fit mx-auto grid grid-cols-4 gap-8">
          <Gallery gallery={hobbies[0].gallery[0]} isScreenshot />
          <Gallery gallery={hobbies[0].gallery[0]} isScreenshot />
          <Gallery gallery={hobbies[0].gallery[0]} isScreenshot />
          <Gallery gallery={hobbies[0].gallery[0]} isScreenshot />
          <Gallery gallery={hobbies[0].gallery[0]} isScreenshot />
          <Gallery gallery={hobbies[0].gallery[0]} isScreenshot />
        </div>
      </section>

      <Title
        label="Video"
        labelBackground="Video"
        variant="subtitle"
        className="px-8"
      />
      <Video />
    </main>
  )
}
