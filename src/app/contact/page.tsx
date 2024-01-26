"use client"

import { Icon } from "@/components/Icon"
import { Input } from "@/components/Input"
import { Title } from "@/components/Title"
import { Button } from "@/components/Button"
import { Textarea } from "@/components/Textarea"
import { SocialCard } from "@/components/SocialCard"
import { Description } from "@/components/Description"

import { EmailTemplate } from "@/components/EmailTemplate"

export default function Contact() {
  async function handleFetch() {
    await fetch("/api/send", {
      method: "POST",
    })
    console.log("complete")
  }

  return (
    <main className="max-w-content w-content mx-auto p-8">
      <Title label="Contato" labelBackground="Contact" isTitlePage />
      <Description
        label="Estou sempre pronto para novas oportunidades e colaborações. Se você deseja discutir projetos inovadores, soluções criativas ou simplesmente trocar ideias sobre desenvolvimento web e mobile, fique à vontade para entrar em contato. Estou aberto a novas conexões e ansioso para fazer parte de projetos desafiadores e inspiradores."
        className="mt-6"
      />

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

          <Button
            variant="outline"
            className="col-span-2 mx-auto"
            onClick={(event) => {
              event.preventDefault()
              handleFetch()
            }}
          >
            Enviar
            <Icon name="Send" />
          </Button>
        </form>
      </article>
      <EmailTemplate firstName="Rafael" />
    </main>
  )
}
