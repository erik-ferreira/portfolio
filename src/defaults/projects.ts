import { ProjectDTO } from "@/dtos/ProjectDTO"

type ProjectDefault = Omit<ProjectDTO, "id">

const projectsDefault: ProjectDefault[] = [
  {
    title: "Estagiário",
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/projects/spider.png",
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
