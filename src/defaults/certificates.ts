import { CertificateDTO } from "@/dtos/CertificateDTO"

type CertificateDefault = Omit<CertificateDTO, "id">

const description =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
const certificatesDefault: CertificateDefault[] = [
  {
    name: "Figma for Devs",
    company: "Rocketseat",
    src: "/certificates/figma.png",
    href: "https://www.rocketseat.com.br",
    description,
    date_of_issue: new Date(),
    src_company: "/certificates/rocketseat.svg",
  },
  {
    name: "Acessibilidade com ReactJS",
    company: "Rocketseat",
    src: "/certificates/figma.png",
    href: "https://www.rocketseat.com.br",
    description,
    date_of_issue: new Date(),
    src_company: "/certificates/rocketseat.svg",
  },
  {
    name: "Apps Desktop com ElectronJS",
    company: "Rocketseat",
    src: "/certificates/figma.png",
    href: "https://www.rocketseat.com.br",
    description,
    date_of_issue: new Date(),
    src_company: "/certificates/rocketseat.svg",
  },
  {
    name: "Ignite ReactJS",
    company: "Rocketseat",
    src: "/certificates/figma.png",
    href: "https://www.rocketseat.com.br",
    description,
    date_of_issue: new Date(),
    src_company: "/certificates/rocketseat.svg",
  },
  {
    name: "Testes",
    company: "Rocketseat",
    src: "/certificates/figma.png",
    href: "https://www.rocketseat.com.br",
    description,
    date_of_issue: new Date(),
    src_company: "/certificates/rocketseat.svg",
  },
  {
    name: "Nodejs",
    company: "Rocketseat",
    src: "/certificates/figma.png",
    href: "https://www.rocketseat.com.br",
    description,
    date_of_issue: new Date(),
    src_company: "/certificates/rocketseat.svg",
  },
]

export const someCertificates: CertificateDTO[] = certificatesDefault
  .slice(0, 4)
  .map((certificate, index) => ({
    id: index + 1,
    ...certificate,
  }))

export const certificates: CertificateDTO[] = certificatesDefault.map(
  (certificate, index) => ({
    id: index + 1,
    ...certificate,
    src: "/certificates/figma-controller.png",
  })
)
