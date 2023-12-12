import Link from "next/link"

import { Icon } from "@/components/Icon"
import { Title } from "@/components/Title"
import { Skill } from "@/components/Skill"
import { Button } from "@/components/Button"
import { Description } from "@/components/Description"
import { Gallery } from "@/components/Gallery"

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

        <div className="w-fit mx-auto grid grid-cols-5 gap-8">
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
        </div>

        <Title
          label="Capturas de tela"
          labelBackground="Screenshot"
          variant="subtitle"
        />

        <div className="w-fit mx-auto grid grid-cols-4 gap-8">
          <Gallery src="/projects/1.png" variant="image" isScreenshot />
          <Gallery src="/projects/1.png" variant="image" isScreenshot />
          <Gallery src="/projects/1.png" variant="image" isScreenshot />
          <Gallery src="/projects/1.png" variant="image" isScreenshot />
          <Gallery src="/projects/1.png" variant="image" isScreenshot />
          <Gallery src="/projects/1.png" variant="image" isScreenshot />
        </div>

        <Title label="Video" labelBackground="Video" variant="subtitle" />
      </section>
    </main>
  )
}
