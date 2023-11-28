import { SkillDTO } from "@/dtos/SkillDTO"

type SkillDefault = Omit<SkillDTO, "id">

const skillsDefault = [
  {
    label: "React",
    src: "/skills/react.svg",
    typed: "react",
  },
  {
    label: "Next",
    src: "/skills/next.svg",
    typed: "next",
  },
  {
    label: "Typescript",
    src: "/skills/typescript.svg",
    typed: "typescript",
  },
  {
    label: "Javascript",
    src: "/skills/javascript.svg",
    typed: "javascript",
  },
  {
    label: "HTML",
    src: "/skills/html.svg",
    typed: "html",
  },
  {
    label: "CSS",
    src: "/skills/css.svg",
    typed: "css",
  },
  {
    label: "Figma",
    src: "/skills/figma.svg",
    typed: "figma",
  },
  {
    label: "Git",
    src: "/skills/git.svg",
    typed: "git",
  },
  {
    label: "TaiwindCSS",
    src: "/skills/tailwindcss.svg",
    typed: "tailwind",
  },
  {
    label: "Styled Components",
    src: "/skills/styled-components.svg",
    typed: "styled-components",
  },
  {
    label: "SQL",
    src: "/skills/sql.svg",
    typed: "sql",
  },
  {
    label: "Redux",
    src: "/skills/redux.svg",
    typed: "redux",
  },
  {
    label: "Radix",
    src: "/skills/radix.svg",
    typed: "radix",
  },
  {
    label: "API Rest",
    src: "/skills/api.svg",
    typed: "api",
  },
] as SkillDefault[]

export const skills: SkillDTO[] = [...skillsDefault, ...skillsDefault].map(
  (skill, index) => ({
    id: index + 1,
    ...skill,
  })
)
