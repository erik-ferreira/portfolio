import { ExperienceDTO } from "@/dtos/ExperienceDTO"

export const experiences: ExperienceDTO[] = [
  {
    id: 1,
    office: "Estagiário",
    company: "Rocketseat",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    start_date: new Date("2019-08-01"),
    end_date: new Date("2019-12-31"),
    image: "/experiences/softtek.png",
  },
  {
    id: 2,
    office: "Desenvolvedor Frontend",
    company: "Tecla T",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500.",
    start_date: new Date("2019-08-01"),
    end_date: new Date("2019-12-31"),
    image: "/experiences/softtek.png",
  },
]
