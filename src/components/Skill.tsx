import Image from "next/image"

interface SkillProps {}

export function Skill({ ...rest }: SkillProps) {
  return (
    <div className="w-fit flex flex-col items-center gap-4">
      <div className="w-[100px] h-[100px] rounded-full bg-[#007ACC]/10 border-[1.5px] border-[#007ACC] flex items-center justify-center hover:scale-95 transition-all duration-300">
        <Image
          src="/skills/typescript.svg"
          alt="Typescript"
          width={60}
          height={60}
          className="rounded-lg"
        />
      </div>

      <span className="text-2xl font-bold text-[#007ACC]">Typescript</span>
    </div>
  )
}
