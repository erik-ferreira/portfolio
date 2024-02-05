import { SkillDTO } from "@/dtos/SkillDTO"

import { allSkills } from "@/defaults/skills"

import { convertColorHexToRgb } from "@/utils/convertColorHexToRgb"

type SkillName = (typeof allSkills)[number]["name"]

export function getSkillsFromTheAllSkillsList(
  skillsToFilter: SkillName[]
): SkillDTO[] {
  const filteredSkills = allSkills.filter((skill) =>
    skillsToFilter.includes(skill.name)
  )

  const formattedSkills = filteredSkills.map((skill, index) => ({
    id: index + 1,
    rgb: convertColorHexToRgb(skill.color, 0.1),
    ...skill,
  }))

  return formattedSkills
}
