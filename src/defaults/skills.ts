import { SkillDTO } from "@/dtos/SkillDTO"
import { convertColorHexToRgb } from "@/utils/convertColorHexToRgb"

type SkillDefault = Omit<SkillDTO, "id" | "rgb">

const skillsDefault: SkillDefault[] = [
  {
    label: "React",
    src: "/skills/react.svg",
    color: "#61DAFB",
  },
  {
    label: "Next",
    src: "/skills/next.svg",
    color: "#F5F5F5",
  },
  {
    label: "Typescript",
    src: "/skills/typescript.svg",
    color: "#007ACC",
  },
  {
    label: "Javascript",
    src: "/skills/javascript.svg",
    color: "#F0DB4F",
  },
  {
    label: "HTML",
    src: "/skills/html.svg",
    color: "#E44D26",
  },
  {
    label: "CSS",
    src: "/skills/css.svg",
    color: "#1572B6",
  },
  {
    label: "Figma",
    src: "/skills/figma.svg",
    color: "#0ACF83",
  },
  {
    label: "Git",
    src: "/skills/git.svg",
    color: "#F34F29",
  },
  {
    label: "TaiwindCSS",
    src: "/skills/tailwindcss.svg",
    color: "#38B2AC",
  },
  {
    label: "Styled Components",
    src: "/skills/styled-components.svg",
    color: "#9F70B8",
  },
  {
    label: "SQL",
    src: "/skills/sql.svg",
    color: "#00618A",
  },
  {
    label: "Redux",
    src: "/skills/redux.svg",
    color: "#764ABC",
  },
  {
    label: "Radix",
    src: "/skills/radix.svg",
    color: "#E2E8F0",
  },
  {
    label: "API Rest",
    src: "/skills/api.svg",
    color: "#72B8CE",
  },
]

export const skills: SkillDTO[] = [...skillsDefault, ...skillsDefault].map(
  (skill, index) => ({
    id: index + 1,
    rgb: convertColorHexToRgb(skill.color, 0.1),
    ...skill,
  })
)
