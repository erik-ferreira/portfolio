import Image from "next/image"
import Link, { LinkProps } from "next/link"

import { twMerge } from "@/utils/twMerge"
import { ProjectDTO } from "@/dtos/ProjectDTO"

interface ProjectShortProps extends LinkProps {
  project: ProjectDTO
}

export function ProjectShort({ project, ...rest }: ProjectShortProps) {
  const formatDescription = project.description
    .split(" ")
    .splice(0, 20)
    .join(" ")
    .concat("...")

  return (
    <Link
      className="w-100 h-67.5 border-2 border-transparent rounded-lg overflow-auto relative transition-colors duration-300 hover:border-sky-600 hover:cursor-pointer group"
      prefetch={false}
      {...rest}
    >
      <div
        className={twMerge(
          "w-full h-full p-6 flex flex-col justify-center absolute opacity-0 hover:opacity-100",
          "bg-gradient-to-b from-transparent from-[-60%] to-page",
          "transition-all duration-500 ease-in-out"
        )}
      >
        <h3 className="text-3.5xl leading-none font-bold text-sky-600">
          {project.title}
        </h3>

        <p className="text-sm font-semibold mt-0.5 mb-4">{formatDescription}</p>

        <div className="flex items-center gap-4 flex-wrap">
          {project.skills.map((skill) => (
            <Image
              key={skill.id}
              src={skill.src}
              width={36}
              height={36}
              alt="Skill"
            />
          ))}
        </div>
      </div>

      <Image
        src={project.src}
        // src=""
        width={400}
        height={270}
        alt="Projeto"
        className="w-full h-full object-cover"
      />
    </Link>
  )
}
