export function cutText(text: string, length: number) {
  const newText = text.split(" ").splice(0, length).join(" ").concat("...")

  return newText
}
