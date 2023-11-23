const techsDefault = [
  {
    label: "React",
    src: "/techs/react.svg",
  },
  {
    label: "Next",
    src: "/techs/next.svg",
  },
  {
    label: "Typescript",
    src: "/techs/typescript.svg",
  },
  {
    label: "Javascript",
    src: "/techs/javascript.svg",
  },
  {
    label: "HTML",
    src: "/techs/html.svg",
  },
  {
    label: "CSS",
    src: "/techs/css.svg",
  },
  {
    label: "Figma",
    src: "/techs/figma.svg",
  },
  {
    label: "Git",
    src: "/techs/git.svg",
  },
  {
    label: "TaiwindCSS",
    src: "/techs/tailwindcss.svg",
  },
  {
    label: "Styled Components",
    src: "/techs/styled-components.svg",
  },
  {
    label: "SQL",
    src: "/techs/sql.svg",
  },
  {
    label: "Redux",
    src: "/techs/redux.svg",
  },
  {
    label: "Radix",
    src: "/techs/radix.svg",
  },
  {
    label: "API Rest",
    src: "/techs/api.svg",
  },
]

export const techs = [...techsDefault, ...techsDefault].map((tech, index) => ({
  id: index + 1,
  ...tech,
}))
