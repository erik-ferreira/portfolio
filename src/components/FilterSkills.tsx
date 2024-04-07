"use client"

import ScrollContainer from "react-indiana-drag-scroll"
import * as ToggleGroup from "@radix-ui/react-toggle-group"

import { SkillName } from "@/components/SkillName"

import { skillsUsedInProjectsToFilter } from "@/defaults/skills"

import { twMerge } from "@/utils/twMerge"

interface FilterSkillsProps {
  skillSelected: string
  onValueChange?: (value: string) => void
}

export function FilterSkills({
  skillSelected,
  onValueChange,
}: FilterSkillsProps) {
  return (
    <ToggleGroup.Root
      type="single"
      onValueChange={onValueChange}
      className="border"
    >
      <ScrollContainer
        className={twMerge(
          "h-fit flex flex-wrap gap-2 mt-4 cursor-grab",
          "border border-red-500"
          // "sm:flex-nowrap"
          // sm:h-auto
        )}
      >
        {skillsUsedInProjectsToFilter.map((skill) => (
          <ToggleGroup.Item key={skill} value={skill} asChild>
            <SkillName
              name={skill}
              isButton
              variant={skillSelected === skill ? "selected" : "outline"}
            />
          </ToggleGroup.Item>
        ))}
      </ScrollContainer>
    </ToggleGroup.Root>
  )
}
