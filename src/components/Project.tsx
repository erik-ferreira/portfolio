import Image from "next/image"
import NextLink from "next/link"
import { ComponentProps } from "react"

import { Link } from "@/components/Link"
import { Icon } from "@/components/Icon"
import { SkillName } from "@/components/SkillName"

import { twMerge } from "@/utils/twMerge"

interface ProjectDTO {
  id: number
  src: string
  title: string
  description: string
  techs: Array<string>
}

interface ProjectProps extends ComponentProps<"div"> {
  project: ProjectDTO
}

export function Project({ project, className, ...rest }: ProjectProps) {
  return (
    <div className={twMerge("flex gap-12 py-8", className)} {...rest}>
      <Image src={project.src} alt="Project" width={500} height={333} />

      <div className="flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <h3 className="text-4.75xl font-bold">{project.title}</h3>

          <div className="flex items-center gap-2">
            <NextLink href="/">
              <Icon name="Github" size="large" />
            </NextLink>
            <NextLink href="/">
              <Icon name="Link" size="large" />
            </NextLink>
          </div>
        </div>

        <p className="text-lg font-semibold text-slate-500">
          {project.description}
        </p>

        <ul className="flex items-center gap-2 flex-wrap">
          {project.techs.map((tech) => (
            <SkillName key={tech} name={tech} />
          ))}
        </ul>

        <Link
          href="/"
          label="Ler mais"
          className="text-slate-500"
          size="large"
        />
      </div>
    </div>
  )
}
