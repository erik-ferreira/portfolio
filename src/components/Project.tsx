import Image from "next/image"
import NextLink from "next/link"
import { ComponentProps } from "react"

import { Link } from "@/components/Link"
import { Icon } from "@/components/Icon"
import { SkillName } from "@/components/SkillName"

import { cutText } from "@/utils/cutText"
import { twMerge } from "@/utils/twMerge"
import { ProjectDTO } from "@/dtos/ProjectDTO"

interface ProjectProps extends ComponentProps<"div"> {
  project: ProjectDTO
}

export function Project({ project, className, ...rest }: ProjectProps) {
  const formatDescription = cutText(project.description, 50)

  return (
    <div
      className={twMerge(
        "flex flex-col gap-8 py-8",
        "lg:flex-row",
        "xl:gap-12",
        className
      )}
      {...rest}
    >
      <div
        className={twMerge(
          "w-full",
          "lg:my-auto lg:min-w-[350px]",
          "xl:min-w-max  xl:max-w-[500px]"
        )}
      >
        <Image
          src={project.src}
          alt={project.altSrc}
          width={1000}
          height={666}
          className="w-full h-full object-contain"
        />
      </div>

      <div
        className={twMerge("flex flex-col gap-4 justify-between", "lg:gap-0")}
      >
        <div className="flex items-center justify-between">
          <h3
            className={twMerge(
              "text-3xl font-bold",
              "md:text-4xl",
              "lg:text-4.75xl"
            )}
          >
            {project.title}
          </h3>

          <div className="flex items-center gap-2">
            <NextLink href={project.githubHref} target="_blank">
              <Icon name="Github" size="large" />
            </NextLink>

            {project.demoHref ? (
              <NextLink href={project.demoHref} target="_blank">
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
            <SkillName key={skill.id} name={skill.name} />
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
