import { ProjectDTO } from "@/dtos/ProjectDTO"

type ProjectsDefault = Omit<ProjectDTO, "id">

const projectsDefault: ProjectsDefault[] = [
  {
    title: "Estagiário",
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    src: "/projects/spider.png",
    href: "/",
    skills: [
      {
        id: 1,
        src: "/skills/javascript.svg",
      },
      {
        id: 2,
        src: "/skills/javascript.svg",
      },
      {
        id: 3,
        src: "/skills/javascript.svg",
      },
    ],
  },
]

export const projects: ProjectDTO[] = [
  ...projectsDefault,
  ...projectsDefault,
  ...projectsDefault,
  ...projectsDefault,
  ...projectsDefault,
  ...projectsDefault,
].map((project, index) => ({
  id: index + 1,
  ...project,
}))

export const listAllProjects = [
  {
    id: 1,
    src: "/projects/1.png",
    title: "Github Blog",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...",
    techs: [
      "React Native",
      "Typescript",
      "Javascript",
      "React",
      "Styled-Components",
      "Next",
      "Tailwind",
    ],
  },
  {
    id: 2,
    src: "/projects/2.png",
    title: "Github Blog",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...",
    techs: [
      "React Native",
      "Typescript",
      "Javascript",
      "React",
      "Styled-Components",
      "Next",
      "Tailwind",
      "Apolo",
      "SQL",
    ],
  },
  {
    id: 3,
    src: "/projects/3.png",
    title: "Github Blog",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...",
    techs: [
      "React Native",
      "Typescript",
      "Javascript",
      "React",
      "Styled-Components",
      "Next",
      "Tailwind",
    ],
  },
]
