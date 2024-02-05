export const allSkillNames = [
  "React",
  "React Native",
  "Next",
  "Typescript",
  "Javascript",
  "HTML",
  "CSS",
  "Figma",
  "TaiwindCSS",
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
  "Git",
  "Prisma",
] as const

export type SkillName = (typeof allSkillNames)[number]

export interface SkillDTO {
  id: number
  name: SkillName
  src: string
  color: string
  rgb: string
}

export type SkillDefault = Omit<SkillDTO, "id" | "rgb">
