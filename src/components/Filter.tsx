"use client"

import ScrollContainer from "react-indiana-drag-scroll"

import { SkillName } from "@/components/SkillName"

interface FilterProps {}

export function Filter({ ...rest }: FilterProps) {
  return (
    <ScrollContainer className="flex gap-2 mt-4">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((skill) => (
        <SkillName
          key={skill}
          name="React Native"
          variant={skill === 4 ? "selected" : "outline"}
        />
      ))}
    </ScrollContainer>
  )
}
