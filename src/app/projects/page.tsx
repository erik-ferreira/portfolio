import Link from "next/link"

import { Icon } from "@/components/Icon"
import { Title } from "@/components/Title"
import { Button } from "@/components/Button"
import { Description } from "@/components/Description"
import { ProjectContent } from "@/components/ProjectContent"
import { twMerge } from "@/utils/twMerge"

export default function Projects() {
  return (
    <main
      className={twMerge(
        "max-w-content w-content mx-auto px-0 py-2",
        "md:p-4",
        "lg:p-8"
      )}
    >
      <Title label="Projetos" labelBackground="Projects" isTitlePage />
      <Description label="Estes são alguns dos projetos que ja construí" />

      <ProjectContent />

      <Button variant="outline" className="mx-auto" asChild>
        <Link
          href="https://github.com/erik-ferreira?tab=repositories"
          target="_blank"
        >
          Visualizar todos os projetos
          <Icon size="large" />
        </Link>
      </Button>
    </main>
  )
}
