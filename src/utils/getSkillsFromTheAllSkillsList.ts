import { allSkills } from "@/defaults/skills"

type SkillName = (typeof allSkills)[number]["name"]

export function getSkillsFromTheAllSkillsList(skillsToFilter: SkillName[]) {
  const filteredSkills = allSkills.filter((skill) =>
    skillsToFilter.includes(skill.name)
  )

  return filteredSkills
}
