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

      <article>
        <div className="flex gap-8 mb-10">
          <SocialCard />
          <SocialCard variant="mail" />
        </div>

        <form className="space-y-5">
          <Input placeholder="Nome" />
          <Input placeholder="Email" nameIcon="Mail" error="Invalid email" />
          <Textarea placeholder="Mensagem" />
        </form>
      </article>
    </main>
  )
}
