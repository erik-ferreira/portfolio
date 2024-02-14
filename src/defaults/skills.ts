import { SkillDTO, SkillDefault, SkillName } from "@/dtos/SkillDTO"

import { getSkillsFromTheAllSkillsList } from "@/utils/getSkillsFromTheAllSkillsList"

export const allSkills: SkillDefault[] = [
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
    name: "TailwindCSS",
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
  // here
  {
    name: "Stitches",
    src: "/skills/stitches.svg",
    color: "#ECEDEE",
  },
  {
    name: "Storybook",
    src: "/skills/storybook.svg",
    color: "#FF4785",
  },
  {
    name: "Stripe",
    src: "/skills/stripe.svg",
    color: "#635BFF",
  },
  {
    name: "React Hook Form",
    src: "/skills/hook-form.svg",
    color: "#EC5990",
  },
  {
    name: "Turbo Repo",
    src: "/skills/turbo.svg",
    color: "#0D8FF7",
  },
  {
    name: "Zod",
    src: "/skills/zod.svg",
    color: "#142641",
  },
  {
    name: "Immer js",
    src: "/skills/immer.svg",
    color: "#00E7C3",
  },
  {
    name: "Prisma",
    src: "/skills/prisma.svg",
    color: "#5A67D8",
  },
  {
    name: "React Query",
    src: "/skills/react-query.svg",
    color: "#FFD94C",
  },
  {
    name: "Google APIs",
    src: "/skills/google.svg",
    color: "#587dbd",
  },
  {
    name: "Mirage JS",
    src: "/skills/mirage.svg",
    color: "#05C77E",
  },
  {
    name: "Sass",
    src: "/skills/sass.svg",
    color: "#CB6699",
  },
  {
    name: "Fauna DB",
    src: "/skills/fauna.svg",
    color: "#3713B7",
  },
  {
    name: "Jest",
    src: "/skills/jest.svg",
    color: "#99425B",
  },
  {
    name: "Redux Toolkit",
    src: "/skills/redux.svg",
    color: "#764ABC",
  },
  {
    name: "Zustand",
    src: "/skills/zustand.svg",
    color: "#F46D2D",
  },
]

const skillsDefault = getSkillsFromTheAllSkillsList([
  "React",
  "Next",
  "Typescript",
  "Javascript",
  "HTML",
  "CSS",
  "Figma",
  "Git",
  "TailwindCSS",
  "Styled Components",
  "SQL",
  "Redux",
  "Radix",
  "API Rest",
  "React Hook Form",
  "Zod",
])

export const mySkills: SkillDTO[] = [...skillsDefault, ...skillsDefault]

export const skillsUsedInProjectsToFilter: SkillName[] = [
  "React",
  "React Native",
  "Next",
  "Typescript",
  "Javascript",
  "HTML",
  "CSS",
  "Figma",
  "TailwindCSS",
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
  "Prisma",
]
