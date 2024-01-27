import { CSSProperties } from "react"

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
    color: "#1e293b",

    fontSize: "6rem",
    fontWeight: 600,
    textTransform: "uppercase",

    textAlign: "center",
    filter: "blur(2px)",
    margin: 0,
  },
  subtitle: {
    color: "#843CE5", // bg-violet-400
    fontSize: "2rem",
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

interface EmailTemplateProps {
  contactName: string
  message: string
}

export function EmailTemplate({ contactName, message }: EmailTemplateProps) {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Portfólio</h1>

      <h2 style={styles.subtitle}>Olá Erik, me chamo {contactName}!</h2>

      <p style={styles.description}>{message}</p>
    </div>
  )
}
