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
    try {
      setLoadingContact(true)

      const response = await api("/send", {
        method: "POST",
        body: JSON.stringify(data),
      })

      if (response?.status === 200) {
        setTypeToast("success")
      }
    } catch (err) {
      setTypeToast("error")
    } finally {
      setShowToast(true)
      setLoadingContact(false)
    }
  }

  return (
    <ToastPrimitive.Provider swipeDirection="right">
      <form
        className={twMerge(
          "w-full grid grid-cols-1 gap-4",
          "md:w-[45rem] md:grid-cols-2 md:gap-6"
        )}
        onSubmit={handleSubmit(handleContact)}
      >
        <div
          className={twMerge(
            "flex flex-col gap-4",
            "sm:flex-row sm:justify-center",
            "md:col-span-2 md:gap-6"
          )}
        >
          <SocialCard className="" />
          <SocialCard variant="mail" />
        </div>

        <Input
          placeholder="Nome"
          classNameContainer="max-md:max-w-full md:col-span-1"
          {...register("name")}
          error={errors?.name?.message}
        />
        <Input
          type="email"
          placeholder="Email"
          nameIcon="Mail"
          classNameContainer="max-md:max-w-full md:col-span-1"
          {...register("email")}
          error={errors?.email?.message}
        />

        <Textarea
          placeholder="Mensagem"
          classNameContainer="max-w-full md:col-span-2"
          {...register("message")}
          error={errors?.message?.message}
        />

        <Button
          type="submit"
          variant="outline"
          className="mx-auto md:col-span-2"
          disabled={loadingContact}
          loading={loadingContact}
        >
          Enviar
          <Icon name="Send" />
        </Button>
      </form>

      <Toast
        open={showToast}
        onOpenChange={setShowToast}
        typeToast={typeToast}
      />
    </ToastPrimitive.Provider>
  )
}
