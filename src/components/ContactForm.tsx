"use client"

import { z } from "zod"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Icon } from "@/components/Icon"
import { Input } from "@/components/Input"
import { Button } from "@/components/Button"
import { Textarea } from "@/components/Textarea"
import { SocialCard } from "@/components/SocialCard"

const contactFormSchema = z.object({
  name: z.string().min(1, "Nome obrigatório"),
  email: z.string().min(1, "Email obrigatório").email("Email inválido"),
  message: z.string().min(1, "Mensagem obrigatória"),
})

type ContactFormSchema = z.infer<typeof contactFormSchema>

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  })

  function handleContact(data: ContactFormSchema) {
    console.log("data", data)
  }

  useEffect(() => {
    console.log("errors", errors)
  }, [errors])

  return (
    <form
      className="w-[45rem] grid grid-cols-2 gap-8"
      onSubmit={handleSubmit(handleContact)}
    >
      <SocialCard className="ml-auto" />
      <SocialCard variant="mail" />

      <Input
        placeholder="Nome"
        classNameContainer="col-span-1"
        {...register("name")}
        error={errors?.name?.message}
      />
      <Input
        placeholder="Email"
        nameIcon="Mail"
        classNameContainer="col-span-1"
        {...register("email")}
        error={errors?.email?.message}
      />

      <Textarea
        placeholder="Mensagem"
        classNameContainer="col-span-2"
        {...register("message")}
        error={errors?.message?.message}
      />

      <Button type="submit" variant="outline" className="col-span-2 mx-auto">
        Enviar
        <Icon name="Send" />
      </Button>
    </form>
  )
}
