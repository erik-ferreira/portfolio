import Image from "next/image"
import { ComponentProps } from "react"

import { Link } from "@/components/Link"
import { TypingEffect } from "@/components/TypingEffect"

import { twMerge } from "@/utils/twMerge"

import preview from "@/assets/preview.png"
import websiteSVG from "@/assets/website.svg"

interface ResumeProps extends ComponentProps<"section"> {}

export function Resume({ className, ...rest }: ResumeProps) {
  return (
    <section
      className={twMerge("flex flex-col items-center gap-16", className)}
      {...rest}
    >
      <div className="w-full flex items-center justify-evenly">
        <div
          className={twMerge(
            "hidden",
            "md:block md:w-56 md:h-fit",
            "lg:w-64 lg:h-64",
            "min-[1180px]:w-[23.125rem] min-[1180px]:h-[18.125rem]"
          )}
        >
          <Image
            src={websiteSVG}
            alt="Ícone de um homem escrevendo códigos no computador"
            width={370}
            height={290}
            className="w-full h-full object-contain"
          />
        </div>

        <div
          className={twMerge(
            "w-fit flex flex-col gap-0.5",
            "sm:gap-1",
            "md:min-w-[450px]",
            "lg:min-w-[490px]",
            "min-[1180px]:min-w-[550px]"
            // "xs:bg-red-500", // mínimo
            // "md:max-xl:bg-blue-500" // intervalo
          )}
        >
          <p
            className={twMerge(
              "text-lg leading-base font-semibold text-slate-500",
              "lg:text-xl",
              "min-[1180px]:text-2xl"
            )}
          >
            Olá 👋🏾, meu nome é
          </p>

          <h1
            className={twMerge(
              "w-fit text-transparent bg-clip-text",
              "text-4xl leading-none font-bold",
              "bg-gradient-to-r from-blue-500 to-violet-600 to-80%",
              "sm:text-5xl",
              "lg:text-6xl",
              "min-[1180px]:text-6.5xl"
            )}
          >
            Erik Ferreira
          </h1>

          <h2
            className={twMerge(
              "text-xl leading-none font-bold flex gap-2",
              "min-[330px]:text-2xl",
              "sm:text-3xl",
              "lg:text-4xl",
              "min-[1180px]:text-4.5xl"
            )}
          >
            Sou{" "}
            <span className="text-blue-500">
              <TypingEffect />
            </span>
          </h2>

          <p
            className={twMerge(
              "text-lg leading-5 font-semibold",
              "md:leading-tight"
            )}
          >
            Se você me ver em uma luta com um urso, reze pelo urso
          </p>

          <span
            className={twMerge(
              "text-lg font-bold text-slate-600 flex gap-0 flex-col",
              "min-[390px]:flex-row min-[390px]:gap-1"
            )}
          >
            O código deste site está disponível no
            <Link
              href="https://github.com/erik-ferreira/portfolio"
              target="_blank"
              label="Github"
              className={twMerge("text-slate-400 text-base")}
            />
          </span>
        </div>
      </div>

      {/* <div className="w-fit bg-section flex gap-4 items-center justify-center p-8 rounded-xl border border-red-500">
        <div className="w-[500px] flex flex-col gap-2 items-start">
          <h2 className="text-3.5xl font-bold text-blue-500">
            Um pouco sobre mim
          </h2>
          <p className="text-base">
            Olá, sou um desenvolvedor front-end com 2 anos de experiência e moro
            no Ceará, Brasil. Sou apaixonado pela stack do Javascript e estou me
            especializando em React e React Native para criação de interfaces
            totalmente responsivas com a melhor experiência possível para o
            usuário. Sou dedicado e organizado, também ja trabalhei com outras
            tecnologias como Next, Typescript, Tailwindcss, Socket.io, Zod e
            etc. Navegue pelo site para conhecer um pouco mais sobre mim.
          </p>
          <Link href="/about" label="Ler mais" className="text-slate-500" />
        </div>

        <Image
          src={preview}
          alt="Uma imagem minha trabalhando em alguns projetos em casa"
          width={350}
          height={233}
          className="rounded-lg"
        />
      </div> */}
    </section>
  )
}
