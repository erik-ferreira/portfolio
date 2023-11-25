"use client"

import { User } from "lucide-react"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"

import { Title } from "@/components/Title"

import { experiences } from "@/defaults/experiences"

import "react-vertical-timeline-component/style.min.css"

interface ExperiencesProps {}

export function Experiences({ ...rest }: ExperiencesProps) {
  return (
    <div className="max-w-content w-content mx-auto flex flex-col items-center gap-6 p-8">
      <Title label="Experiência" labelBackground="Experience" />
      ok here
      <VerticalTimeline className="border">
        {experiences.map((experience) => (
          <VerticalTimelineElement
            key={experience.id}
            visible
            contentStyle={{
              backgroundColor: "#0F172A",
              padding: 24,
              borderRadius: 4,
              borderWidth: 1,
              borderColor: "#0284c7",
            }}
            contentArrowStyle={{ borderRight: "7px solid #0284c7" }}
            date={experience.date}
          >
            <h3>{experience.office}</h3>
            <p>{experience.company}</p>

            <span>{experience.description}</span>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  )
}
