import { z } from "zod"

export const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Nome obrigatório"),
  email: z.string().trim().min(1, "Email obrigatório").email("Email inválido"),
  message: z.string().trim().min(1, "Mensagem obrigatória"),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
