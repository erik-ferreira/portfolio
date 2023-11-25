import Image from "next/image"

import { twMerge } from "@/utils/twMerge"

interface ProjectProps {
  project: {
    id: number
    title: string
    description: string
    techs: Array<{
      id: number
      src: string
    }>
  }
}

export function Project({ project, ...rest }: ProjectProps) {
  return (
    <div className="border-2 border-transparent rounded-lg overflow-auto relative transition-colors duration-300 hover:border-sky-600 hover:cursor-pointer group">
      {/* Presentation */}
      <div
        className={twMerge(
          "w-full h-full p-6 flex flex-col justify-center absolute opacity-0 hover:opacity-100",
          "bg-gradient-to-b from-transparent from-[-60%] to-page",
          "transition-all duration-500 ease-in-out"
        )}
      >
        <h3 className="text-3.5xl leading-none font-bold text-sky-600">
          Estagiário
        </h3>

        <p className="text-sm font-semibold mt-0.5 mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <div className="flex items-center gap-4 flex-wrap">
          {project.techs.map((item) => (
            <Image
              key={item.id}
              src={item.src}
              width={36}
              height={36}
              alt="Tech"
            />
          ))}
        </div>
      </div>

      <Image
        src="/projects/spider.png"
        width={400}
        height={270}
        alt="Projeto"
      />
    </div>
  )
}
