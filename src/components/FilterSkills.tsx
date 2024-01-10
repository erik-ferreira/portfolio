"use client"

import { useState } from "react"
import ScrollContainer from "react-indiana-drag-scroll"
import * as ToggleGroup from "@radix-ui/react-toggle-group"

import { SkillName } from "@/components/SkillName"

import { filterSkills } from "@/defaults/skills"

interface FilterSkillsProps {
  skillSelected: string
  onValueChange?: (value: string) => void
}

export function FilterSkills({
  skillSelected,
  onValueChange,
  ...rest
}: FilterSkillsProps) {
  return (
    <ToggleGroup.Root type="single" onValueChange={onValueChange}>
      <ScrollContainer className="flex gap-2 mt-4 cursor-grab">
        {filterSkills.map((skill) => (
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
