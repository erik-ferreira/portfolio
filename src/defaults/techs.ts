import { TechDTO } from "@/dtos/TechDTO"

type TechDefault = Omit<TechDTO, "id">

const techsDefault = [
  {
    label: "React",
    src: "/techs/react.svg",
    typed: "react",
  },
  {
    label: "Next",
    src: "/techs/next.svg",
    typed: "next",
  },
  {
    label: "Typescript",
    src: "/techs/typescript.svg",
    typed: "typescript",
  },
  {
    label: "Javascript",
    src: "/techs/javascript.svg",
    typed: "javascript",
  },
  {
    label: "HTML",
    src: "/techs/html.svg",
    typed: "html",
  },
  {
    label: "CSS",
    src: "/techs/css.svg",
    typed: "css",
  },
  {
    label: "Figma",
    src: "/techs/figma.svg",
    typed: "figma",
  },
  {
    label: "Git",
    src: "/techs/git.svg",
    typed: "git",
  },
  {
    label: "TaiwindCSS",
    src: "/techs/tailwindcss.svg",
    typed: "tailwind",
  },
  {
    label: "Styled Components",
    src: "/techs/styled-components.svg",
    typed: "styled-components",
  },
  {
    label: "SQL",
    src: "/techs/sql.svg",
    typed: "sql",
  },
  {
    label: "Redux",
    src: "/techs/redux.svg",
    typed: "redux",
  },
  {
    label: "Radix",
    src: "/techs/radix.svg",
    typed: "radix",
  },
  {
    label: "API Rest",
    src: "/techs/api.svg",
    typed: "api",
  },
] as TechDefault[]

export const techs: TechDTO[] = [...techsDefault, ...techsDefault].map(
  (tech, index) => ({
    id: index + 1,
    ...tech,
  })
)
