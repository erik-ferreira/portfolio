import { CSSProperties } from "react"

interface StylesProps {
  container: CSSProperties
  title: CSSProperties
  labelBackground: CSSProperties
  label: CSSProperties
}

export const styles = {
  container: {
    backgroundColor: "#090b0e", // bg-page
  },
  title: {
    position: "relative",
  },
  labelBackground: {
    display: "block",
    fontSize: "5rem",
    fontFamily: "Orbitron",
    fontWeight: "semibold",
    textTransform: "uppercase",
    textAlign: "center",
    filter: "blur(2px)",
  },
  label: {
    fontFamily: "Permanent Marker",
    fontSize: "3.5rem",
    color: "transparent",
    backgroundColor: "linear-gradient(to bottom, #3b82f6, #7c3aed)",
    backgroundClip: "text",

    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
} as StylesProps

interface EmailTemplateProps {
  firstName: string
}

export function EmailTemplate({ firstName }: EmailTemplateProps) {
  return (
    <div style={styles.container}>
      <div style={styles.title}>
        <span style={styles.labelBackground}>Portfolio</span>
        <h1 style={styles.label}>Portfólio</h1>
      </div>

      <h2>Olá Erik, me chamo Rafael!</h2>

      <p>
        Uma breve descrição bem aqui Uma breve descrição bem aqui a breve
        descrição bem aqui Uma breve descrição bem aqui Uma ve descrição bem
        aqui Uma breve descrição bem aqui Uma dale a a bem aqui
      </p>
    </div>
  )
}
