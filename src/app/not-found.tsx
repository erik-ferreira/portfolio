import Link from "next/link"
import Image from "next/image"

import { Title } from "@/components/Title"
import { Description } from "@/components/Description"
import { Button } from "@/components/Button"
import { Icon } from "@/components/Icon"

import Icon404Svg from "@/assets/404.svg"
import zoroPng from "@/assets/zoro.png"

export default function NotFound() {
  return (
    <main className="max-w-content w-content mx-auto p-8 h-full flex flex-col gap-8">
      <Title label="Página não encontrada" labelBackground="Page not found" />

      <div>
        <Description
          label="Vishhh! Assim como o Zoro, parece que você se perdeu..."
          className="mb-0 mt-0"
        />
        <Description
          label="Mas fica tranquilo, essa não é a Grand Line, é apenas a página 404!"
          className="mb-0 mt-0"
        />
      </div>
      <div className="flex items-center justify-center gap-8 p-8">
        <Image src={zoroPng} width={200} height={330} alt="zoro de one piece" />
        <Image src={Icon404Svg} width={468} height={232} alt="404" />
      </div>

      <Button variant="outline" className="mx-auto" asChild>
        <Link href="/">
          <Icon name="MoveLeft" size="small" />
          Voltar
        </Link>
      </Button>
    </main>
  )
}
