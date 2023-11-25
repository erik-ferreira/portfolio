import { ComponentProps } from "react"

import { Title } from "@/components/Title"
import { Project } from "@/components/Project"

import { twMerge } from "@/utils/twMerge"
import { projects } from "@/defaults/projects"

const list = [1, 2, 3]

interface ProjectsProps extends ComponentProps<"div"> {}

export function Projects({ className, ...rest }: ProjectsProps) {
  return (
    <div
      className={twMerge(
        "max-w-content w-content mx-auto flex flex-col items-center gap-6 p-8",
        className
      )}
      {...rest}
    >
      <Title label="Projetos" labelBackground="Projects" />

      <div className="grid grid-cols-3 gap-8">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
