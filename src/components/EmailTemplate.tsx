import { CSSProperties } from "react"

import { ContactFormData } from "@/schemas/contactSchema"

interface StylesProps {
  container: CSSProperties
  title: CSSProperties
  label: CSSProperties
  subtitle: CSSProperties
  description: CSSProperties
}

export const styles = {
  container: {
    backgroundColor: "#090b0e", // bg-page
    paddingBottom: 32,
  },
  title: {
    color: "#2563eb",

    fontSize: "4rem",
    fontWeight: 600,
    textTransform: "uppercase",

    textAlign: "center",
    filter: "blur(2px)",
    margin: 0,
  },
  subtitle: {
    color: "#E2E8F0", // bg-slate-200
    fontSize: "1.5rem",
    fontWeight: 700,

    textAlign: "center",
    margin: 0,
  },
  description: {
    width: 632,
    margin: "0 auto",

    color: "#E2E8F0", // bg-slate-200

    fontSize: "1.125rem",
    fontWeight: 700,

    textAlign: "center",
  },
} as StylesProps

interface EmailTemplateProps extends ContactFormData {}

export function EmailTemplate({ name, email, message }: EmailTemplateProps) {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Portfólio</h1>

      <h2 style={styles.subtitle}>
        Olá Erik, me chamo {name} e este é meu email: {email}!
      </h2>

      <p style={styles.description}>{message}</p>
    </div>
  )
}
