import Link from "next/link"
import { Metadata } from "next"

import { Icon } from "@/components/Icon"
import { Title } from "@/components/Title"
import { Button } from "@/components/Button"
import { Curriculum } from "@/components/Curriculum"
import { Description } from "@/components/Description"

import { twMerge } from "@/utils/twMerge"

export const metadata: Metadata = {
  title: "Resumo | Erik Ferreira",
}

export default function About() {
  return (
    <main
      className={twMerge(
        "max-w-content w-content mx-auto px-0 py-2",
        "md:p-4",
        "lg:p-8"
      )}
    >
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
