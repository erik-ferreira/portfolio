import { EmailTemplate } from "@/components/EmailTemplate"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["erikdesouzagf@gmail.com"],
      subject: "Hello world", // Nova mensagem de contato do portfólio
      react: EmailTemplate({ firstName: "John Erik" }),
    })

    console.log("DATA", data)

    return Response.json(data)
  } catch (error) {
    return Response.json({ error })
  }
}
