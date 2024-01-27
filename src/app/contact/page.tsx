import { Title } from "@/components/Title"
import { Description } from "@/components/Description"
import { ContactForm } from "@/components/ContactForm"

export default function Contact() {
  // async function handleFetch() {
  //   await fetch("/api/send", {
  //     method: "POST",
  //   })
  //   console.log("complete")
  // }

  return (
    <main className="max-w-content w-content mx-auto p-8">
      <Title label="Contato" labelBackground="Contact" isTitlePage />
      <Description
        label="Estou sempre pronto para novas oportunidades e colaborações. Se você deseja discutir projetos inovadores, soluções criativas ou simplesmente trocar ideias sobre desenvolvimento web e mobile, fique à vontade para entrar em contato. Estou aberto a novas conexões e ansioso para fazer parte de projetos desafiadores e inspiradores."
        className="mt-6"
      />

      <article className="flex flex-col items-center">
        <ContactForm />
      </article>
    </main>
  )
}
