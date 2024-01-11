import Link from "next/link"

import { Icon } from "@/components/Icon"
import { Title } from "@/components/Title"
import { Button } from "@/components/Button"
import { Description } from "@/components/Description"
import { Curriculum } from "@/components/Curriculum"

export default function About() {
  return (
    <main className="max-w-content w-content mx-auto p-8">
      <Title label="Resumo" labelBackground="Summary" isTitlePage />
      <Description label="Abaixo você poderá ver o meu currículo e baixar o arquivo" />

      <Curriculum />

      <Button variant="outline" className="mx-auto mt-6 duration-300" asChild>
        <Link href="/erik.pdf" target="_blank" download="erik">
          Baixar CV
          <Icon />
        </Link>
      </Button>
    </main>
  )
}
