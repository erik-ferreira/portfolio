const projectsDefault = [
  {
    title: "Estagiário",
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    techs: [
      {
        id: 1,
        src: "/techs/javascript.svg",
      },
      {
        id: 2,
        src: "/techs/javascript.svg",
      },
      {
        id: 3,
        src: "/techs/javascript.svg",
      },
    ],
  },
]

export const projects = [
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
