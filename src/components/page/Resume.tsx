import Image from "next/image"

import { Link } from "@/components/Link"

import websiteSVG from "@/assets/website.svg"

interface ResumeProps {}

export function Resume({ ...rest }: ResumeProps) {
  return (
    <div className="max-w-content w-content mx-auto flex items-center justify-evenly p-8">
      <Image
        src={websiteSVG}
        alt="Ícone de um homem escrevendo códigos no computador"
        width={370}
        height={290}
      />

      <div className="flex flex-col gap-1">
        <p className="text-2xl leading-base font-semibold text-slate-500">
          Olá 👋🏾, meu nome é
        </p>

        <h1 className="w-fit text-transparent bg-clip-text text-6.5xl leading-none font-bold bg-gradient-to-r from-blue-500 to-violet-600 to-80%">
          Erik Ferreira
        </h1>

        <h2 className="text-4.5xl leading-none font-bold">
          Sou <span className="text-blue-500">Frontend Developer</span>
        </h2>

        <p className="text-lg leading-none font-semibold">
          Se você me ver em uma luta com um urso, reze pelo urso
        </p>

        <span className="text-lg font-bold text-slate-600 flex gap-1">
          O código deste site está disponível em
          <Link
            href="https://github.com/erik-ferreira"
            label="Github"
            className="text-slate-400"
          />
        </span>
      </div>
    </div>
  )
}
