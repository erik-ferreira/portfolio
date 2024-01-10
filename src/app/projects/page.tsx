import Link from "next/link"

import { Icon } from "@/components/Icon"
import { Title } from "@/components/Title"
import { Button } from "@/components/Button"
import { Description } from "@/components/Description"
import { ProjectContent } from "@/components/ProjectContent"

export default function Projects() {
  return (
    <main className="max-w-content w-content mx-auto p-8">
      <Title label="Projetos" labelBackground="Projects" isTitlePage />
      <Description label="Uma breve descrição bem aqui Uma breve descrição bem aqui" />

      <ProjectContent />

      <Button variant="outline" className="mx-auto" asChild>
        <Link
          href="https://github.com/erik-ferreira?tab=repositories"
          target="_blank"
        >
          Visualizar todos os projetos no github
          <Icon size="large" />
        </Link>
      </Button>
    </main>
  )
}
