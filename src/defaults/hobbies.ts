import { HobbyDTO, HobbyDefault } from "@/dtos/HobbyDTO"

const hobbiesDefault: HobbyDefault[] = [
  {
    src: "/hobbies/basquete.png",
    title: "Basquete",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s...",
    href: "/",
  },
]

export const hobbies: HobbyDTO[] = Array.from({ length: 4 }).map(
  (_, index) => ({
    id: index + 1,
    ...hobbiesDefault[0],
    href: `/hobbies/${index + 1}`,
  })
)
