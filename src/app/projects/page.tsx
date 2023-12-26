import Link from "next/link"

import { Icon } from "@/components/Icon"
import { Title } from "@/components/Title"
import { Input } from "@/components/Input"
import { Button } from "@/components/Button"
import { Project } from "@/components/Project"
import { Description } from "@/components/Description"

import { allProjects } from "@/defaults/projects"

export default function Projects() {
  return (
    <main className="max-w-content w-content mx-auto p-8">
      <Title label="Projetos" labelBackground="Projects" isTitlePage />
      <Description label="Uma breve descrição bem aqui Uma breve descrição bem aqui" />

      <Input
        variant="search"
        placeholder="Pesquisar..."
        classNameContainer="mx-auto"
      />

      <article className="flex flex-col mt-8 divide-y-2 divide-sky-600 border-t border-sky-600">
        {allProjects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </article>

      <Button variant="outline" className="mx-auto" asChild>
        <Link
          href="https://github.com/erik-ferreira?tab=repositories"
          target="_blank"
        >
          Visualizar todos os projetos no github
          <Icon size="large" />
        </Link>
      </Button>
    </main>
  )
}
