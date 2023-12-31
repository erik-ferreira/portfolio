import { CertificateDTO, CertificateDefault } from "@/dtos/CertificateDTO"

const certificatesDefault: CertificateDefault[] = [
  {
    name: "Figma for Devs",
    company: "Rocketseat",
    src: "/certificates/figma.png",
    href: "https://app.rocketseat.com.br/certificates/d88c5acf-9677-4481-8f88-7f714aadd471",
    description:
      "Aprendi as funcionalidades do Figma voltadas especificamente para desenvolvedores. Este curso foi além do básico, ensinando como utilizar o Figma de forma eficiente e estratégica no fluxo de trabalho de desenvolvimento de software. Aprendi a criar designs de interfaces, utilização de auto layout, padrão de cores, criação de componentes e etc.",
    date_of_issue: new Date("2023-07-28"),
    src_company: "/certificates/rocketseat.svg",
  },
  {
    name: "Acessibilidade com ReactJS",
    company: "Rocketseat",
    src: "/certificates/accessibility.png",
    href: "https://app.rocketseat.com.br/certificates/2dc41da8-5a50-44ad-b518-a98d82a00689",
    description:
      "Neste curso, mergulhei profundamente na construção de aplicações web com ReactJS. Aprendi a implementar práticas e técnicas cruciais para tornar minhas interfaces mais inclusivas e acessíveis a todos os usuários. Além disso, explorei a utilização de tags semânticas, estratégias de navegação e otimização de telas.",
    date_of_issue: new Date("2023-05-03"),
    src_company: "/certificates/rocketseat.svg",
  },
  {
    name: "Apps Desktop com ElectronJS",
    company: "Rocketseat",
    src: "/certificates/electron.png",
    href: "https://app.rocketseat.com.br/certificates/e566623f-b427-4e82-abe4-f4346386ebc2",
    description:
      "Este curso abrangeu desde os fundamentos até técnicas avançadas, possibilitando a construção de aplicativos nativos para Windows, macOS e Linux. O objetivo do projeto construído era criar arquivos para anotações que são salvos localmente na máquina. Através dele, aprendi a trabalhar com as camadas do Electron (Main, Preload e Renderer) e a utilizar algumas funcionalidades nativas, como o menu tray.",
    date_of_issue: new Date("2023-05-16"),
    src_company: "/certificates/rocketseat.svg",
  },
  {
    name: "Ignite ReactJS",
    company: "Rocketseat",
    src: "/certificates/ignite-react.png",
    href: "https://app.rocketseat.com.br/certificates/367015e9-a7b1-458c-bf23-ed4d00d8131c",
    description:
      "Aprofundei-me no ecossistema ReactJS com o programa Ignite. Este curso foi uma imersão completa em práticas avançadas de desenvolvimento web, abrangendo desde conceitos fundamentais até tópicos mais complexos. Desenvolvi aplicações web escaláveis, explorando temas como gerenciamento de estado avançado, otimização de performance e integração de bibliotecas populares para criar projetos robustos e modernos",
    date_of_issue: new Date("2023-07-26"),
    src_company: "/certificates/rocketseat.svg",
  },
  {
    name: "Java",
    company: "Rocketseat",
    src: "/certificates/java.png",
    href: "https://app.rocketseat.com.br/certificates/24256402-11a4-44be-933c-c6c8dcf62b8d",
    description:
      "Entrei no mundo da programação Java desenvolvendo um aplicativo de lista de tarefas (to do). Este curso ofereceu uma introdução sólida aos princípios essenciais da linguagem Java, abordando desde variáveis e estruturas de controle. Aprendi a construir uma aplicação funcional, aplicando conhecimentos práticos em um projeto real.",
    date_of_issue: new Date("2023-10-15"),
    src_company: "/certificates/rocketseat.svg",
  },
  {
    name: "Discover",
    company: "Rocketseat",
    src: "/certificates/discover.png",
    href: "https://app.rocketseat.com.br/certificates/495eb0cf-97af-47f7-865e-af427396c4cd",
    description:
      "Este curso é um introdução ao mundo da web, onde desenvolvi um projeto de centralizador de links. Nele foi possível aprender os fundamentos da programação web, como HTML, CSS e JavaScript. Além disso, aprendi a utilizar o Git e GitHub para versionamento de código e hospedagem de projetos no Github Pages.",
    date_of_issue: new Date("2024-01-04"),
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
