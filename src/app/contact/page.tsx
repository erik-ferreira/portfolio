import { Title } from "@/components/Title"
import { Description } from "@/components/Description"
import { ContactForm } from "@/components/ContactForm"

import { twMerge } from "@/utils/twMerge"

export default function Contact() {
  return (
    <main
      className={twMerge(
        "max-w-content w-content mx-auto px-0 py-2",
        "border border-blue-500",
        "md:p-4",
        "lg:p-8"
      )}
    >
      <Title label="Contato" labelBackground="Contact" isTitlePage />
      <Description
        label="Estou sempre pronto para novas oportunidades e colaborações. Se você deseja discutir projetos inovadores, soluções criativas ou simplesmente trocar ideias sobre desenvolvimento web e mobile, fique à vontade para entrar em contato. Estou aberto a novas conexões e ansioso para fazer parte de projetos desafiadores e inspiradores."
        className="mt-6"
      />

      {/* <article className="flex flex-col items-center"> */}
      <article className="flex flex-col items-center border border-blue-500">
        <ContactForm />
      </article>
    </main>
  )
}
