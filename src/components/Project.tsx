import Image from "next/image"
import NextLink from "next/link"
import { ComponentProps } from "react"

import { Link } from "@/components/Link"
import { Icon } from "@/components/Icon"
import { SkillName } from "@/components/SkillName"

import { twMerge } from "@/utils/twMerge"
import { ProjectDTO } from "@/dtos/ProjectDTO"

interface ProjectProps extends ComponentProps<"div"> {
  project: ProjectDTO
}

export function Project({ project, className, ...rest }: ProjectProps) {
  const formatDescription = project.description
    .split(" ")
    .splice(0, 50)
    .join(" ")
    .concat("...")

  return (
    <div className={twMerge("flex gap-12 py-8", className)} {...rest}>
      <Image
        src={project.src.normal}
        alt="Project"
        width={500}
        height={333}
        className="w-[500px] h-[333px] my-auto object-contain"
      />

      <div className="flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <h3 className="text-4.75xl font-bold">{project.title}</h3>

          <div className="flex items-center gap-2">
            <NextLink href={project.github_href} target="_blank">
              <Icon name="Github" size="large" />
            </NextLink>

            {project.demo_href ? (
              <NextLink href={project.demo_href} target="_blank">
                <Icon name="Link" size="large" />
              </NextLink>
            ) : (
              <Icon
                name="Link"
                size="large"
                className="opacity-50 cursor-not-allowed"
              />
            )}
          </div>
        </div>

        <p className="text-lg font-semibold text-slate-500">
          {formatDescription}
        </p>

        <ul className="flex items-center gap-2 flex-wrap">
          {project.skills.map((skill) => (
            <SkillName key={skill.id} name={skill.label} />
          ))}
        </ul>

        <Link
          href={project.href}
          label="Ler mais"
          className="text-slate-500"
          size="large"
        />
      </div>
    </div>
  )
}
