import { SkillDTO, SkillDefault } from "@/dtos/SkillDTO"

import { convertColorHexToRgb } from "@/utils/convertColorHexToRgb"

export function formatSkillsProject(skillsDefault: SkillDefault[]): SkillDTO[] {
  const skills = skillsDefault.map((skill, index) => ({
    id: index + 1,
    rgb: convertColorHexToRgb(skill.color, 0.1),
    ...skill,
  }))

  return skills
}
