import { Icon } from "@/components/Icon"
import { Input } from "@/components/Input"
import { Title } from "@/components/Title"
import { Button } from "@/components/Button"
import { Textarea } from "@/components/Textarea"
import { SocialCard } from "@/components/SocialCard"
import { Description } from "@/components/Description"

export default function Contact() {
  return (
    <main className="max-w-content w-content mx-auto p-8">
      <Title label="Contato" labelBackground="Contact" isTitlePage />
      <Description label="Uma breve descrição bem aqui Uma breve descrição bem aqui a breve descrição bem aqui Uma breve descrição bem aqui Uma ve descrição bem aqui Uma breve descrição bem aqui Uma dale a a bem aqui Uma breve descrição bem aqui Uma breve descrição bem aqui Uma breve descrição bem aqui Uma breve descrição bem aqui Uma breve descrição bem aqui" />

      <article className="flex flex-col items-center">
        <form className="w-[45rem] grid grid-cols-2 gap-8">
          <SocialCard className="ml-auto" />
          <SocialCard variant="mail" />

          <Input placeholder="Nome" classNameContainer="col-span-1" />
          <Input
            placeholder="Email"
            nameIcon="Mail"
            classNameContainer="col-span-1"
          />

          <Textarea placeholder="Mensagem" classNameContainer="col-span-2" />

          <Button variant="outline" className="col-span-2 mx-auto">
            Enviar
            <Icon name="Send" />
          </Button>
        </form>
      </article>
    </main>
  )
}
