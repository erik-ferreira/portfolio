import { ExperienceDTO } from "@/dtos/ExperienceDTO"

export const experiences: ExperienceDTO[] = [
  {
    id: 1,
    office: "Desenvolvedor Frontend",
    company: "Tecla T",
    description:
      "Na TeclaT, atuei no desenvolvimento vários projetos, desde de e-commerce, aplicações web e aplicativos mobile, utilizando Next.js, React e React Native respectivamente. Também trabalhei na manutenção de aplicações existentes, adotando versionamento de código com git-flow no Github e GitLab. Utilizei metodologias ágeis como Scrum através de ferramentas eficientes como Monday e Trello.",
    start_date: new Date("2023-01-02"),
    end_date: new Date("2021-03-01"),
    image: "/experiences/tecla-t.png",
  },
  {
    id: 2,
    office: "Estagiário",
    company: "Softtek - Soluções em Sistemas LTDA",
    description:
      "Na Softtek, utilizando Excel fiquei responsável pela criação de relatórios diários sobre os status dos chamados da minha equipe. Além disso, pude aprimorar meus conhecimentos em HTML, CSS e Javascript, pois tive a oportunidade de trabalhar com uma equipe muita boa e empenhada em ensinar.",
    start_date: new Date("2019-08-01"),
    end_date: new Date("2019-12-31"),
    image: "/experiences/softtek.png",
  },
]
