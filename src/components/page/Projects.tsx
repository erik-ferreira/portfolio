import Link from "next/link"
import { ComponentProps } from "react"

import { Icon } from "@/components/Icon"
import { Title } from "@/components/Title"
import { Button } from "@/components/Button"
import { ProjectShort } from "@/components/ProjectShort"

import { twMerge } from "@/utils/twMerge"
import { projects } from "@/defaults/projects"

interface ProjectsProps extends ComponentProps<"section"> {}

export function Projects({ className, ...rest }: ProjectsProps) {
  return (
    <section
      className={twMerge("flex flex-col items-center gap-6", className)}
      {...rest}
    >
      <Title label="Projetos" labelBackground="Projects" />

      <div className="grid grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectShort
            key={project.id}
            href={project.href}
            project={project}
          />
        ))}
      </div>

      <Button variant="outline-gradient" size="large" asChild>
        <Link href="/projects">
          Todos os Projetos
          <Icon size="large" />
        </Link>
      </Button>
    </section>
  )
}
