import Image from "next/image"
import Link, { LinkProps } from "next/link"

import { cutText } from "@/utils/cutText"
import { twMerge } from "@/utils/twMerge"
import { ProjectDTO } from "@/dtos/ProjectDTO"

interface ProjectShortProps extends LinkProps {
  project: ProjectDTO
}

export function ProjectShort({ project, ...rest }: ProjectShortProps) {
  const formatDescription = cutText(project.description, 20)

  return (
    <Link
      className={twMerge(
        "w-full h-56 border-2 border-transparent rounded-lg overflow-auto relative group",
        "transition-colors duration-300 hover:border-sky-600 hover:cursor-pointer",
        "xs:h-64",
        "sm:h-67.5"
      )}
      {...rest}
    >
      <div
        className={twMerge(
          "w-full h-full p-3 flex flex-col justify-center absolute opacity-0 hover:opacity-100",
          "bg-gradient-to-b from-transparent from-[-60%] to-page",
          "transition-all duration-500 ease-in-out",
          "lg:p-6"
        )}
      >
        <h3
          className={twMerge(
            "text-3xl leading-none font-bold text-sky-600",
            "md:text-3.5xl"
          )}
        >
          {project.title}
        </h3>

        <p
          className={twMerge(
            "text-base font-semibold mt-0.5 mb-4",
            "md:text-sm"
          )}
        >
          {formatDescription}
        </p>

        <div
          className={twMerge("flex items-center gap-2 flex-wrap", "sm:gap-4")}
        >
          {project.skills.map((skill) => (
            <div key={skill.id} className="w-7 h-7 sm:w-9 sm:h-9">
              <Image
                src={skill.src}
                width={36}
                height={36}
                alt="Skill"
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <Image
        src={project.src}
        width={400}
        height={270}
        alt="Projeto"
        className="w-full h-full object-cover"
      />
    </Link>
  )
}
