"use client"

import { useState } from "react"

import { Input } from "@/components/Input"
import { Project } from "@/components/Project"
import { FilterSkills } from "@/components/FilterSkills"

import { projects } from "@/defaults/projects"

export function ProjectContent() {
  const [skillName, setSkillName] = useState("")
  const [skillSelected, setSkillSelected] = useState("")

  let filterProjects = [...projects]

  if (!!skillSelected) {
    filterProjects = projects.filter((project) =>
      project.skillsNames.includes(skillSelected.toLowerCase())
    )
  }

  if (!!skillName) {
    filterProjects = filterProjects.filter((project) =>
      project.title.toLowerCase().includes(skillName.toLowerCase())
    )
  }

  return (
    <>
      <Input
        variant="search"
        placeholder="Pesquisar..."
        classNameContainer="mx-auto"
        value={skillName}
        onChange={(event) => setSkillName(event.target.value)}
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
