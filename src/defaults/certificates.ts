import { CertificateDTO, CertificateDefault } from "@/dtos/CertificateDTO"

const altSrcCompany =
  "Logo da Rocketseat,  na imagem o nome Rocketseat esta em branco, com um ícone de foguete ao lado e um fundo azul escuro."

const certificatesDefault: CertificateDefault[] = [
  {
    name: "Figma for Devs",
    company: "Rocketseat",
    src: "/certificates/figma-controller.png",
    href: "https://app.rocketseat.com.br/certificates/d88c5acf-9677-4481-8f88-7f714aadd471",
    description:
      "Aprendi as funcionalidades do Figma voltadas especificamente para desenvolvedores. Este curso foi além do básico, ensinando como utilizar o Figma de forma eficiente no fluxo de construção de um software. Aprendi a criar designs de interfaces, utilização de auto layout, padrão de cores, criação de componentes e etc. Hoje sempre que vou trabalhar com algum protótipo, utilizo de algum conhecimento adquirido no curso.",
    dateOfIssue: new Date("2023-07-28"),
    srcCompany: "/certificates/rocketseat.svg",
    altSrcCompany,
  },
  {
    name: "Acessibilidade com ReactJS",
    company: "Rocketseat",
    src: "/certificates/accessibility-controller.png",
    href: "https://app.rocketseat.com.br/certificates/2dc41da8-5a50-44ad-b518-a98d82a00689",
    description:
      "Neste curso, mergulhei profundamente na construção de uma aplicação web com ReactJS lidando com as melhores práticas de acessibilidade. Aprendi a implementar práticas e técnicas cruciais para tornar minhas interfaces mais inclusivas e acessíveis a todos os usuários. Além disso, explorei a utilização do WCAG, tags semânticas, estratégias de navegação e otimização de telas.",
    dateOfIssue: new Date("2023-05-03"),
    srcCompany: "/certificates/rocketseat.svg",
    altSrcCompany,
  },
  {
    name: "Apps Desktop com ElectronJS",
    company: "Rocketseat",
    src: "/certificates/electron-controller.png",
    href: "https://app.rocketseat.com.br/certificates/e566623f-b427-4e82-abe4-f4346386ebc2",
    description:
      "Este curso abrangeu desde os fundamentos até técnicas avançadas, possibilitando a construção de aplicativos nativos para Windows, macOS e Linux. O objetivo do projeto construído era criar arquivos para anotações que são salvos localmente na máquina. Através dele, aprendi a trabalhar com as camadas do Electron (Main, Preload e Renderer) e a utilizar algumas funcionalidades nativas, como o menu tray.",
    dateOfIssue: new Date("2023-05-16"),
    srcCompany: "/certificates/rocketseat.svg",
    altSrcCompany,
  },
  {
    name: "Ignite ReactJS",
    company: "Rocketseat",
    src: "/certificates/ignite-react-controller.png",
    href: "https://app.rocketseat.com.br/certificates/367015e9-a7b1-458c-bf23-ed4d00d8131c",
    description:
      "Aprofundei-me no ecossistema ReactJS com o programa Ignite. Este curso foi uma imersão completa em práticas avançadas de desenvolvimento web, abrangendo desde os fundamentos até tópicos mais complexos. Desenvolvi projetos web escaláveis, explorando temas como gerenciamento de estado avançado, otimização de performance e integração de bibliotecas populares para criar projetos robustos e modernos.",
    dateOfIssue: new Date("2023-07-26"),
    srcCompany: "/certificates/rocketseat.svg",
    altSrcCompany,
  },
  {
    name: "Java",
    company: "Rocketseat",
    src: "/certificates/java-controller.png",
    href: "https://app.rocketseat.com.br/certificates/24256402-11a4-44be-933c-c6c8dcf62b8d",
    description:
      "Entrei no mundo da programação Java desenvolvendo um aplicativo de lista de tarefas (to do). Este curso ofereceu uma introdução sólida aos princípios essenciais da linguagem Java, abordando desde variáveis, estruturas de controle, utilização do Lombok e propriedades privadas e públicas. Aprendi a construir uma aplicação funcional, aplicando conhecimentos práticos em um projeto real.",
    dateOfIssue: new Date("2023-10-15"),
    srcCompany: "/certificates/rocketseat.svg",
    altSrcCompany: "",
  },
  {
    name: "Discover",
    company: "Rocketseat",
    src: "/certificates/discover-controller.png",
    href: "https://app.rocketseat.com.br/certificates/495eb0cf-97af-47f7-865e-af427396c4cd",
    description:
      "Este curso é um introdução ao mundo da web, onde desenvolvi um projeto de centralizador de links. Nele foi possível aprender os fundamentos da programação web, como HTML, CSS e JavaScript. Várias dicas foram apresentadas sobre as propriedades das tags HTML. Além disso, aprendi a utilizar o Git e GitHub para versionamento de código e hospedagem de projetos no Github Pages.",
    dateOfIssue: new Date("2024-01-04"),
    srcCompany: "/certificates/rocketseat.svg",
    altSrcCompany: "",
  },
]

export const certificates: CertificateDTO[] = certificatesDefault.map(
  (certificate, index) => ({
    id: index + 1,
    ...certificate,
  })
)

export const someCertificates: CertificateDTO[] = certificates.slice(0, 4)
