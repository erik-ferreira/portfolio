import Image from "next/image"

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
      <div className="absolute opacity-0 flex flex-col justify-center gap-4 p-6 h-full transition-all ease-in-out duration-300 group-hover:opacity-100 bg-gradient-to-b from-transparent from-[-60%] to-page">
        <h3 className="text-3.5xl font-bold text-sky-600">Estagiário</h3>

        <p className="text-sm font-semibold">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <div className="flex items-center gap-4">
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
