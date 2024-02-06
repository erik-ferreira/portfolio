import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

export function formatDateExperience(startDate: Date, endDate?: Date) {
  let formatStartDate = format(startDate, "MMMM yyyy", { locale: ptBR })
  formatStartDate =
    formatStartDate.charAt(0).toUpperCase() + formatStartDate.substring(1)

  let formatEndDate = "Atualmente"

  if (endDate) {
    formatEndDate = format(startDate, "MMMM yyyy", { locale: ptBR })
    formatEndDate =
      formatEndDate.charAt(0).toUpperCase() + formatEndDate.substring(1)
  }

  return `${formatStartDate} - ${formatEndDate}`
}
