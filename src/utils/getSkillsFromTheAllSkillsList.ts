import { SkillDTO, SkillDefault } from "@/dtos/SkillDTO"

import { SkillNameToFilter } from "@/defaults/skills"

import { convertColorHexToRgb } from "@/utils/convertColorHexToRgb"

export function getSkillsFromTheAllSkillsList(
  allSkills: SkillDefault[],
  skillsToFilter: SkillNameToFilter[]
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
