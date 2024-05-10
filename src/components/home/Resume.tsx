"use client"

import Image from "next/image"
import { ComponentProps } from "react"

import { Link } from "@/components/Link"
import { TypingEffect } from "@/components/TypingEffect"

import { illustrations } from "@/defaults/illustrations"

import { twMerge } from "@/utils/twMerge"

import preview from "@/assets/preview.png"
import { useLanguage } from "@/providers/LanguageProvider"

interface ResumeProps extends ComponentProps<"section"> {}

export function Resume({ className, ...rest }: ResumeProps) {
  const { language } = useLanguage()

  return (
    <section
      className={twMerge(
        "flex flex-col items-center gap-6",
        "lg:gap-12",
        "xl:gap-16",
        className
      )}
      {...rest}
    >
      <div className="w-full flex items-center justify-evenly ">
        {/* When theme is light */}
        <svg
          width="370"
          height="290"
          viewBox="0 0 370 290"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={twMerge(
            "hidden dark:hidden",
            "min-[820px]:block md:w-56 md:h-fit",
            "lg:w-64 lg:h-64",
            "min-[1180px]:w-[23.125rem] min-[1180px]:h-[18.125rem]"
          )}
        >
          {illustrations.WebsiteLight}
        </svg>

        {/* When theme is dark */}
        <svg
          width="370"
          height="290"
          viewBox="0 0 370 290"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={twMerge(
            "hidden",
            "dark:min-[820px]:block dark:md:w-56 dark:md:h-fit",
            "dark:lg:w-64 dark:lg:h-64",
            "dark:min-[1180px]:w-[23.125rem] dark:min-[1180px]:h-[18.125rem]"
          )}
        >
          {illustrations.WebsiteDark}
        </svg>

        <div
          className={twMerge(
            "w-fit flex flex-col gap-0.5",
            "sm:gap-1",
            "md:min-w-[450px]",
            "lg:min-w-[490px]",
            "min-[1180px]:min-w-[550px]"
          )}
        >
          <p
            className={twMerge(
              "text-lg leading-base font-semibold ",
              "lg:text-xl",
              "min-[1180px]:text-2xl",
              "text-slate-900 dark:text-slate-500"
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
            <span className="text-blue-600 dark:text-blue-500">
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
              "text-lg font-bold flex gap-0 flex-col",
              "min-[390px]:flex-row min-[390px]:gap-1",
              "text-slate-400 dark:text-slate-600"
            )}
          >
            O código deste site está disponível no
            <Link
              href="https://github.com/erik-ferreira/portfolio"
              target="_blank"
              label="Github"
              className={twMerge(
                "font-bold text-base leading-tight",
                "text-slate-900 dark:text-slate-400"
              )}
            />
          </span>
        </div>
      </div>

      <div
        className={twMerge(
          "w-full py-4 px-8 rounded-xl ",
          "flex flex-col-reverse gap-1 items-center justify-center",
          "min-[520px]:w-fit",
          "min-[820px]:flex-row min-[820px]:w-full min-[820px]:gap-4",
          "min-[1150px]:w-fit",
          "bg-slate-200 dark:bg-section"
        )}
      >
        <div
          className={twMerge(
            "flex flex-col gap-2 items-start",
            "min-[520px]:w-[400px] min-[820px]:w-[500px]"
          )}
        >
          <h2
            className={twMerge(
              "text-3xl leading-tight font-bold xs:text-3.5xl",
              "text-blue-600 dark:text-blue-500"
            )}
          >
            {language === "BR" ? "Um pouco sobre mim" : "Little about me"}
          </h2>
          <p className="text-base font-semibold">
            Olá, sou um desenvolvedor front-end com 2 anos de experiência e moro
            no Ceará, Brasil. Sou apaixonado pela stack do Javascript e estou me
            especializando em React e React Native para criação de interfaces
            totalmente responsivas com a melhor experiência possível para o
            usuário. Sou dedicado e organizado, também ja trabalhei com outras
            tecnologias como Next, Typescript, Tailwindcss, Socket.io, Zod e
            etc. Navegue pelo site para conhecer um pouco mais sobre mim.
          </p>
          <Link
            href="/about"
            label="Ler mais"
            className="text-slate-900 dark:text-slate-500"
          />
        </div>

        <div className="w-[18.75rem] min-[820px]:w-[21.875rem]">
          <Image
            src={preview}
            alt="Uma imagem minha trabalhando em alguns projetos em casa"
            width={350}
            height={233}
            className="rounded-lg w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  )
}
