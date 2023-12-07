import Link from "next/link"

import { Icon } from "@/components/Icon"
import { Title } from "@/components/Title"
import { Button } from "@/components/Button"
import { Description } from "@/components/Description"

export default function Project() {
  return (
    <main className="max-w-content w-content mx-auto p-8 flex flex-col gap-16">
      <section>
        <Title label="Github Blog" labelBackground="Github Blog" />

        <div className="w-fit mx-auto flex gap-6">
          <Button variant="outline" asChild>
            <Link href="/">
              Online
              <Icon name="Link" size="small" />
            </Link>
          </Button>

          <Button variant="outline" asChild>
            <Link href="/">
              Repositório
              <Icon name="Github" size="small" />
            </Link>
          </Button>
        </div>

        <Description label="Uma breve descrição bem aqui Uma breve descrição bem aqui" />

        <Title
          label="Tecnologias"
          labelBackground="Technologies"
          variant="subtitle"
        />
      </section>
    </main>
  )
}
