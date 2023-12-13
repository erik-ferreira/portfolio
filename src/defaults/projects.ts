import { ProjectDTO } from "@/dtos/ProjectDTO"
import { skills } from "@/defaults/skills"

type ProjectsDefault = Omit<ProjectDTO, "id">

const description =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book..."
const projectsDefault: ProjectsDefault[] = [
  {
    title: "Github blog",
    description,
    src: "/projects/spider.png",
    href: "/",
    skills: Array.from({ length: 3 }).map(() => skills[0]),
    github_href: "https://github.com/erik-ferreira",
    demo_href: "https://github.com/erik-ferreira",
  },
]

export const projects: ProjectDTO[] = Array.from({ length: 6 }).map(
  (_, index) => ({
    id: index + 1,
    ...projectsDefault[0],
    href: `/projects/${index + 1}`,
  })
)

export const allProjects: ProjectDTO[] = Array.from({ length: 10 }).map(
  (_, index) => ({
    id: index + 1,
    ...projectsDefault[0],
    href: `/projects/${index + 1}`,
  })
)
