"use client"

import { useState } from "react"
import ScrollContainer from "react-indiana-drag-scroll"
import * as ToggleGroup from "@radix-ui/react-toggle-group"

import { SkillName } from "@/components/SkillName"

interface FilterProps {}

export function Filter({ ...rest }: FilterProps) {
  const [skillSelected, setSkillSelected] = useState("1")

  return (
    <ToggleGroup.Root type="single" onValueChange={setSkillSelected}>
      <ScrollContainer className="flex gap-2 mt-4 cursor-grab">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((skill) => (
          <ToggleGroup.Item key={skill} value={skill.toString()} asChild>
            <SkillName
              name="React Native"
              isButton
              variant={Number(skillSelected) === skill ? "selected" : "outline"}
            />
          </ToggleGroup.Item>
        ))}
      </ScrollContainer>
    </ToggleGroup.Root>
  )
}
