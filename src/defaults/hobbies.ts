import { HobbyDTO } from "@/dtos/HobbyDTO"

type HobbyDefault = Omit<HobbyDTO, "id">

const hobbiesDefault: HobbyDefault[] = [
  {
    image: "/hobbies/basquete.png",
    title: "Basquete",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s...",
    link: "/",
  },
]

export const hobbies: HobbyDTO[] = [
  ...hobbiesDefault,
  ...hobbiesDefault,
  ...hobbiesDefault,
  ...hobbiesDefault,
].map((hobby, index) => ({
  id: index + 1,
  ...hobby,
}))
