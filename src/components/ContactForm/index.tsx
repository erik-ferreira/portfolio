"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as ToastPrimitive from "@radix-ui/react-toast"

import { api } from "@/services/api"

import { Icon } from "@/components/Icon"
import { Input } from "@/components/Input"
import { Button } from "@/components/Button"
import { Toast, TypeToastProps } from "./Toast"
import { Textarea } from "@/components/Textarea"
import { SocialCard } from "@/components/SocialCard"

import { contactFormSchema, ContactFormData } from "@/schemas/contactSchema"
import { twMerge } from "@/utils/twMerge"

export function ContactForm() {
  const [loadingContact, setLoadingContact] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [typeToast, setTypeToast] = useState<TypeToastProps>("success")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  async function handleContact(data: ContactFormData) {
    setLoadingContact(true)

    const response = await api("/send", {
      method: "POST",
      body: JSON.stringify(data),
    })

    setTypeToast(response?.status === 200 ? "success" : "error")

    setShowToast(true)
    setLoadingContact(false)
  }

  return (
    <ToastPrimitive.Provider swipeDirection="right">
      <form
        // className="w-[45rem] grid grid-cols-2 gap-8"
        className={twMerge("w-full grid grid-cols-1 gap-4", "md:grid-cols-2")}
        onSubmit={handleSubmit(handleContact)}
      >
        {/* <SocialCard className="ml-auto" />
        <SocialCard variant="mail" /> */}

        <Input
          placeholder="Nome"
          classNameContainer="max-md:max-w-full md:col-span-1"
          // classNameContainer="col-span-1"
          {...register("name")}
          error={errors?.name?.message}
        />
        <Input
          placeholder="Email"
          nameIcon="Mail"
          classNameContainer="max-md:max-w-full md:col-span-1"
          // classNameContainer="col-span-1"
          {...register("email")}
          error={errors?.email?.message}
        />

        <Textarea
          placeholder="Mensagem"
          classNameContainer="max-w-full md:col-span-2"
          // classNameContainer="col-span-2"
          {...register("message")}
          error={errors?.message?.message}
        />

        {/* <Button
          type="submit"
          variant="outline"
          className="col-span-2 mx-auto"
          disabled={loadingContact}
          loading={loadingContact}
        >
          Enviar
          <Icon name="Send" />
        </Button> */}
      </form>

      <Toast
        open={showToast}
        onOpenChange={setShowToast}
        typeToast={typeToast}
      />
    </ToastPrimitive.Provider>
  )
}
