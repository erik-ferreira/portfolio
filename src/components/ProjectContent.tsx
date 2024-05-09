"use client"

import { useState, useEffect } from "react"

import { Input } from "@/components/Input"
import { Project } from "@/components/Project"
import { FilterSkills } from "@/components/FilterSkills"
import { LoadingSpinner } from "@/components/LoadingSpinner"

import { projects } from "@/defaults/projects"
import { ProjectDTO } from "@/dtos/ProjectDTO"

export function ProjectContent() {
  const [skillName, setSkillName] = useState("")
  const [skillSelected, setSkillSelected] = useState("")

  const [filterProjects, setFilterProjects] = useState([...projects])
  const [loadingFilterProjects, setLoadingFilterProjects] = useState(false)

  const isToFilter = !!skillSelected || !!skillName

  function onSetDefaultFilterProjects() {
    if (!isToFilter && projects.length !== filterProjects.length) {
      setLoadingFilterProjects(true)

      setTimeout(() => {
        setFilterProjects([...projects])

        setLoadingFilterProjects(false)
      }, 700)
    }
  }

  useEffect(() => {
    let delayDebounceFn: NodeJS.Timeout

    if (isToFilter) {
      setLoadingFilterProjects(true)

      delayDebounceFn = setTimeout(() => {
        let filter: ProjectDTO[] = []

        if (!!skillSelected) {
          filter = filterProjects.filter((project) =>
            project.skillsNames.includes(skillSelected.toLowerCase())
          )
        }

        if (!!skillName) {
          filter = filterProjects.filter((project) =>
            project.title.toLowerCase().includes(skillName.toLowerCase())
          )
        }

        setFilterProjects(filter)

        setLoadingFilterProjects(false)
      }, 700)
    } else {
      onSetDefaultFilterProjects()
    }

    return () => clearTimeout(delayDebounceFn)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skillName, skillSelected])

  return (
    <>
      <Input
        variant="search"
        nameIcon="Search"
        placeholder="Pesquisar..."
        classNameContainer="mx-auto"
        value={skillName}
        onChange={(event) => setSkillName(event.target.value)}
      />

      <FilterSkills
        skillSelected={skillSelected}
        onValueChange={setSkillSelected}
      />

      {loadingFilterProjects ? (
        <div className="w-full flex justify-center py-8">
          <LoadingSpinner size="extra-large" />
        </div>
      ) : (
        <article className="flex flex-col mt-8 divide-y-2 divide-sky-600 border-t border-sky-600">
          {filterProjects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </article>
      )}
    </>
  )
}
