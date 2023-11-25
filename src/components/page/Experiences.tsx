"use client"

import { User } from "lucide-react"
import Image from "next/image"
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
      {/* <Title label="Experiência" labelBackground="Experience" /> */}

      <VerticalTimeline lineColor="#0284c7">
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
              boxShadow: `0px 0px 0px 0px`,
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
            contentArrowStyle={{ borderRight: "7px solid #0284c7" }}
            date={experience.date}
            icon={
              <Image
                src={experience.image}
                width={70}
                height={70}
                alt="icon experience"
              />
            }
            iconStyle={{
              boxShadow: `0px 0px 0px 0px #0284c7`,
              background: "#0284c7",
            }}
            dateClassName="text-slate-300"
          >
            <h3 className="text-3.5xl leading-snug text-sky-600 font-bold">
              {experience.office}
            </h3>
            <h4 className="text-2xl text-violet-300 font-bold">
              {experience.company}
            </h4>

            <span className="w-full text-slate-300">
              {experience.description}
            </span>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  )
}
