"use client"

import { useState } from "react"

import { Input } from "@/components/Input"
import { Project } from "@/components/Project"
import { FilterSkills } from "@/components/FilterSkills"

import { projects } from "@/defaults/projects"

interface ProjectContentProps {}

export function ProjectContent({ ...rest }: ProjectContentProps) {
  const [skillSelected, setSkillSelected] = useState("")
  const filterProjects = !!skillSelected
    ? projects.filter((project) =>
        project.skills_names.includes(skillSelected.toLowerCase())
      )
    : [...projects]

  return (
    <>
      <Input
        variant="search"
        placeholder="Pesquisar..."
        classNameContainer="mx-auto"
      />

      <FilterSkills
        skillSelected={skillSelected}
        onValueChange={setSkillSelected}
      />

      <article className="flex flex-col mt-8 divide-y-2 divide-sky-600 border-t border-sky-600">
        {filterProjects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </article>
    </>
  )
}
