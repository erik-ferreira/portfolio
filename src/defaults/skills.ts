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

export const skillProject: SkillDTO[] = skillsDefault
  .slice(0, 5)
  .map((skill, index) => ({
    id: index + 1,
    ...skill,
  }))

export const variantsColorSkills = {
  react: {
    text: "text-[#61DAFB]",
    bg: "bg-[#61DAFB]/10",
    border: "border-[#61DAFB]",
  },
  next: {
    text: "text-[#F5F5F5]",
    bg: "bg-[#F5F5F5]/10",
    border: "border-[#F5F5F5]",
  },
  typescript: {
    text: "text-[#007ACC]",
    bg: "bg-[#007ACC]/10",
    border: "border-[#007ACC]",
  },
  javascript: {
    text: "text-[#F0DB4F]",
    bg: "bg-[#F0DB4F]/10",
    border: "border-[#F0DB4F]",
  },
  html: {
    text: "text-[#E44D26]",
    bg: "bg-[#E44D26]/10",
    border: "border-[#E44D26]",
  },
  css: {
    text: "text-[#1572B6]",
    bg: "bg-[#1572B6]/10",
    border: "border-[#1572B6]",
  },
  figma: {
    text: "text-[#0ACF83]",
    bg: "bg-[#0ACF83]/10",
    border: "border-[#0ACF83]",
  },
  git: {
    text: "text-[#F34F29]",
    bg: "bg-[#F34F29]/10",
    border: "border-[#F34F29]",
  },
  tailwind: {
    text: "text-[#38B2AC]",
    bg: "bg-[#38B2AC]/10",
    border: "border-[#38B2AC]",
  },
  "styled-components": {
    text: "text-[#9F70B8]",
    bg: "bg-[#9F70B8]/10",
    border: "border-[#9F70B8]",
  },
  sql: {
    text: "text-[#00618A]",
    bg: "bg-[#00618A]/10",
    border: "border-[#00618A]",
  },
  redux: {
    text: "text-[#764ABC]",
    bg: "bg-[#764ABC]/10",
    border: "border-[#764ABC]",
  },
  radix: {
    text: "text-[#E2E8F0]",
    bg: "bg-[#E2E8F0]/10",
    border: "border-[#E2E8F0]",
  },
  api: {
    text: "text-[#72B8CE]",
    bg: "bg-[#72B8CE]/10",
    border: "border-[#72B8CE]",
  },
} as const
