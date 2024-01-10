import { SkillDTO, SkillDefault } from "@/dtos/SkillDTO"
import { convertColorHexToRgb } from "@/utils/convertColorHexToRgb"

const skillsDefault: SkillDefault[] = [
  {
    name: "React",
    src: "/skills/react.svg",
    color: "#61DAFB",
  },
  {
    name: "Next",
    src: "/skills/next.svg",
    color: "#F5F5F5",
  },
  {
    name: "Typescript",
    src: "/skills/typescript.svg",
    color: "#007ACC",
  },
  {
    name: "Javascript",
    src: "/skills/javascript.svg",
    color: "#F0DB4F",
  },
  {
    name: "HTML",
    src: "/skills/html.svg",
    color: "#E44D26",
  },
  {
    name: "CSS",
    src: "/skills/css.svg",
    color: "#1572B6",
  },
  {
    name: "Figma",
    src: "/skills/figma.svg",
    color: "#0ACF83",
  },
  {
    name: "Git",
    src: "/skills/git.svg",
    color: "#F34F29",
  },
  {
    name: "TaiwindCSS",
    src: "/skills/tailwindcss.svg",
    color: "#38B2AC",
  },
  {
    name: "Styled Components",
    src: "/skills/styled-components.svg",
    color: "#9F70B8",
  },
  {
    name: "SQL",
    src: "/skills/sql.svg",
    color: "#00618A",
  },
  {
    name: "Redux",
    src: "/skills/redux.svg",
    color: "#764ABC",
  },
  {
    name: "Radix",
    src: "/skills/radix.svg",
    color: "#E2E8F0",
  },
  {
    name: "API Rest",
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

export const filterSkills = [
  "React",
  "React Native",
  "Next",
  "Typescript",
  "Javascript",
  "HTML",
  "CSS",
  "Figma",
  "Tailwindcss",
  "Styled Components",
  "SQL",
  "Redux",
  "Radix",
  "API Rest",
  "Stitches",
  "Storybook",
  "Turbo Repo",
  "Stripe",
  "React Hook Form",
  "Zod",
  "Immer js",
  "Sass",
  "Fauna DB",
  "React Query",
  "Google APIs",
  "Mirage JS",
  "Jest",
  "Redux Toolkit",
  "Zustand",
]
