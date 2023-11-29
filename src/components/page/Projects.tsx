import Link from "next/link"
import { ComponentProps } from "react"

import { Icon } from "@/components/Icon"
import { Title } from "@/components/Title"
import { Button } from "@/components/Button"
import { Project } from "@/components/Project"

import { twMerge } from "@/utils/twMerge"
import { projects } from "@/defaults/projects"

interface ProjectsProps extends ComponentProps<"div"> {}

export function Projects({ className, ...rest }: ProjectsProps) {
  return (
    <div
      className={twMerge("flex flex-col items-center gap-6", className)}
      {...rest}
    >
      <Title label="Projetos" labelBackground="Projects" />

      <div className="grid grid-cols-3 gap-8">
        {projects.map((project) => (
          <Project key={project.id} href={project.href} project={project} />
        ))}
      </div>

      <Button variant="outline-gradient" size="large" asChild>
        <Link href="/">
          Todos os Projetos
          <Icon size="large" disabledHover />
        </Link>
      </Button>
    </div>
  )
}
