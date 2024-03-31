import { Skill } from '../types/skills'

export const categorizeSkills = (skills: Skill[]) => {
  const categorizedSkills: { [key: string]: Skill[] } = {}

  skills.forEach((skill) => {
    if (!categorizedSkills[skill.skilltype]) {
      categorizedSkills[skill.skilltype] = []
    }
    categorizedSkills[skill.skilltype].push(skill)
  })

  return categorizedSkills
}
