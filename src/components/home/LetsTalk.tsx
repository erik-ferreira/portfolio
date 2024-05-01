import Link from "next/link"
import Image from "next/image"
import { ComponentProps } from "react"

import { Icon } from "@/components/Icon"
import { Button } from "@/components/Button"

import { twMerge } from "@/utils/twMerge"

import talkingSVG from "@/assets/talking.svg"

interface LetsTalkProps extends ComponentProps<"section"> {}

export function LetsTalk({ className, ...rest }: LetsTalkProps) {
  return (
    <section
      className={twMerge("flex flex-col items-center gap-6", className)}
      {...rest}
    >
      <div
        className={twMerge(
          "flex items-center justify-center flex-col gap-6",
          "md:flex-row",
          "lg:gap-16"
        )}
      >
        <article className={twMerge("max-w-lg space-y-3", "md:space-y-4")}>
          <h2
            className={twMerge(
              "text-3xl font-bold",
              "text-blue-600 dark:text-blue-500",
              "md:text-4.5xl"
            )}
          >
            Vamos bater um papo!
          </h2>

          <p className="text-lg leading-tight font-semibold md:leading-normal">
            Se precisar de esclarecimentos ou quiser simplesmente dar um alô,
            estou disposto a entrar em contato.
          </p>
        </article>

        <div className={twMerge("w-80", "md:w-[23.75rem]")}>
          <Image
            src={talkingSVG}
            width={380}
            height={340}
            alt="Ilustração de pessoas conversando em quanto tomam um café."
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <Button variant="outline-gradient" size="large" asChild>
        <Link href="/contact">
          Entre em contato
          <Icon size="large" />
        </Link>
      </Button>
    </section>
  )
}
