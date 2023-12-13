export function convertColorHexToRgb(hex: string, alpha?: number) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  const rgb = `${r}, ${g}, ${b}`

  return alpha ? `rgba(${rgb}, ${alpha})` : `rgb(${rgb})`
}
