export interface CertificateDTO {
  id: number
  name: string
  company: string
  src: string
  href: string

  description: string
  dateOfIssue: Date
  srcCompany: string
  altSrcCompany: string
}

export type CertificateDefault = Omit<CertificateDTO, "id">
