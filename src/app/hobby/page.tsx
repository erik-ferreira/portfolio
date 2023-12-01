import { Title } from "@/components/Title"
import { Gallery } from "@/components/Gallery"
import { Description } from "@/components/Description"

export default function Contact() {
  return (
    <main className="max-w-content w-content mx-auto p-8 flex flex-col gap-16">
      <section>
        <Title label="Contato" labelBackground="Contact" />

        <h3 className="text-4xl font-bold text-blue-500 text-center mt-6">
          Basquete 🏀
        </h3>

        <Description label="Uma breve descrição bem aqui Uma breve descrição bem aqui a breve descrição bem aqui Uma breve descrição bem aqui Uma ve descrição bem aqui Uma breve descrição bem aqui Uma dale a a bem aqui Uma breve descrição bem aqui Uma breve descrição bem aqui Uma breve descrição bem aqui Uma breve descrição bem aqui Uma breve descrição bem aqui" />

        <article className="grid grid-cols-4 gap-8">
          <Gallery src="/basquete/1.png" />
          <Gallery src="/basquete/2.png" />
          <Gallery src="/basquete/3.png" variant="image" />
          <Gallery src="/basquete/4.png" />
          <Gallery src="/basquete/5.png" />
          <Gallery src="/basquete/6.png" variant="image" />
          <Gallery src="/basquete/7.png" />
          <Gallery src="/basquete/8.png" variant="image" />
        </article>
      </section>
    </main>
  )
}
