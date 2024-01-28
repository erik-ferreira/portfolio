import { Resend } from "resend"
import type { NextRequest } from "next/server"

import { EmailTemplate } from "@/components/EmailTemplate"

import { ContactFormData } from "@/schemas/contactSchema"
import { validateEmailByRegex } from "@/utils/validateEmailByRegex"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const body: ContactFormData = await req.json()

  if (!body?.name) {
    return Response.json({ message: "O nome é obrigatório" }, { status: 400 })
  }

  if (!body?.email) {
    return Response.json({ message: "O email é obrigatório" }, { status: 400 })
  }

  if (!validateEmailByRegex(body?.email)) {
    return Response.json({ message: "O email é inválido" }, { status: 400 })
  }

  if (!body?.message) {
    return Response.json(
      { message: "A mensagem é obrigatória" },
      { status: 400 }
    )
  }

  const { error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: ["erikdesouzagf@gmail.com"],
    subject: `Nova mensagem de ${body?.name} do portfólio`,
    react: EmailTemplate(body),
  })

  if (error) {
    return Response.json({ message: "Não foi possível enviar o email" })
  }

  return Response.json({ message: "Email enviado com sucesso" })
}
