import Image from "next/image"
import NextLink from "next/link"

import { Link } from "@/components/Link"
import { Icon } from "@/components/Icon"
import { Title } from "@/components/Title"
import { Input } from "@/components/Input"
import { Divider } from "@/components/Divider"
import { TechName } from "@/components/TechName"
import { Description } from "@/components/Description"

import { listAllProjects } from "@/defaults/projects"

export default function Projects() {
  return (
    <main className="max-w-content w-content mx-auto p-8 flex flex-col gap-16">
      <section>
        <Title label="Projetos" labelBackground="Projects" />
        <Description label="Uma breve descrição bem aqui Uma breve descrição bem aqui" />

        <Input
          variant="search"
          placeholder="Pesquisar..."
          classNameContainer="mx-auto"
        />

        <article className="flex flex-col gap-8 mt-8">
          {listAllProjects.map((project) => (
            <>
              <Divider />

              <div key={project.id} className="flex gap-12">
                <Image
                  src={project.src}
                  alt="Project"
                  width={500}
                  height={333}
                />

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
                      <TechName key={tech} name={tech} />
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
            </>
          ))}
        </article>
      </section>
    </main>
  )
}
