import { CertificateDTO } from "@/dtos/CertificateDTO"

type CertificateDefault = Omit<CertificateDTO, "id">

const certificatesDefault: CertificateDefault[] = [
  {
    name: "Figma for Devs",
    company: "Rocketseat",
    src: "/certificates/figma.png",
  },
  {
    name: "Acessibilidade com ReactJS",
    company: "Rocketseat",
    src: "/certificates/figma.png",
  },
  {
    name: "Apps Desktop com ElectronJS",
    company: "Rocketseat",
    src: "/certificates/figma.png",
  },
  {
    name: "Ignite ReactJS",
    company: "Rocketseat",
    src: "/certificates/figma.png",
  },
]

export const certificates: CertificateDTO[] = certificatesDefault.map(
  (certificate, index) => ({
    id: index + 1,
    ...certificate,
  })
)
