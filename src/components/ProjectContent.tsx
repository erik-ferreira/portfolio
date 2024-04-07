"use client"

import { useState } from "react"

import { Icon } from "@/components/Icon"
import { Input } from "@/components/Input"
import { Project } from "@/components/Project"
import { FilterSkills } from "@/components/FilterSkills"

import { projects } from "@/defaults/projects"

export function ProjectContent() {
  const [skillName, setSkillName] = useState("")
  const [skillSelected, setSkillSelected] = useState("")

  const [showFilterSkills, setShowFilterSkills] = useState(false)

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

  function handleToggleFilterSkills() {
    setShowFilterSkills((prevState) => !prevState)
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

      {/* <div className="border border-red-500 flex gap-2 h-fit"> */}
      <div className="flex gap-2">
        <Input
          variant="search"
          placeholder="Pesquisar..."
          classNameContainer="mx-auto flex-1"
          value={skillName}
          onChange={(event) => setSkillName(event.target.value)}
        />

        <button
          type="button"
          className="p-3 bg-section text-slate-500 transition-opacity hover:opacity-90 rounded"
          onClick={handleToggleFilterSkills}
        >
          <Icon name="Filter" className="w-6 h-6" />
        </button>
      </div>

      {showFilterSkills && (
        <FilterSkills
          skillSelected={skillSelected}
          onValueChange={setSkillSelected}
        />
      )}

      {/* <article className="flex flex-col mt-8 divide-y-2 divide-sky-600 border-t border-sky-600">
        {filterProjects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </article> */}
    </>
  )
}
