import { Title } from "@/components/Title"
import { Input } from "@/components/Input"
import { Project } from "@/components/Project"
import { Pagination } from "@/components/Pagination"
import { Description } from "@/components/Description"

import { listAllProjects } from "@/defaults/projects"

export default function Projects() {
  return (
    <main className="max-w-content w-content mx-auto p-8 flex flex-col gap-16">
      <section>
        <Title label="Projetos" labelBackground="Projects" />
        <Description label="Uma breve descrição bem aqui Uma breve descrição bem aqui" />

        <Input
          variant="search"
          placeholder="Pesquisar..."
          classNameContainer="mx-auto"
        />

        <article className="flex flex-col mt-8 divide-y-2 divide-sky-600 border-t border-sky-600">
          {listAllProjects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </article>

        <Pagination />
      </section>
    </main>
  )
}
