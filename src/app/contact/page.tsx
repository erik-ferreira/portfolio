import { Input } from "@/components/Input"
import { Title } from "@/components/Title"
import { SocialCard } from "@/components/SocialCard"
import { Description } from "@/components/Description"
import { Textarea } from "@/components/Textarea"

export default function Contact() {
  return (
    <main className="max-w-content w-content mx-auto p-8 flex flex-col gap-16">
      <section>
        <Title label="Contato" labelBackground="Contact" />
        <Description label="Uma breve descrição bem aqui Uma breve descrição bem aqui a breve descrição bem aqui Uma breve descrição bem aqui Uma ve descrição bem aqui Uma breve descrição bem aqui Uma dale a a bem aqui" />
      </section>

      <article className="border flex flex-col items-center">
        <form className="w-[45rem] grid grid-cols-2 gap-8 border">
          <SocialCard className="ml-auto" />
          <SocialCard variant="mail" />

          <Input placeholder="Nome" classNameContainer="col-span-1" />
          <Input
            placeholder="Email"
            nameIcon="Mail"
            classNameContainer="col-span-1"
          />

          <Textarea placeholder="Mensagem" classNameContainer="col-span-2" />
        </form>
      </article>
    </main>
  )
}
