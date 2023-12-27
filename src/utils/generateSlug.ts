export function generateSlug(text: string) {
  let slug = text.toLowerCase()

  slug = slug.replace(/[\s.]+/g, "_") // Substitui espaços em branco por underline

  slug = slug.replace(/[^\w-]+/g, "") // Remove caracteres especiais mantendo apenas letras, números, underline e hífen

  slug = slug.replaceAll("__", "_")

  return slug
}
