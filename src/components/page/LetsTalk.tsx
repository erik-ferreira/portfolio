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
      <div className="flex items-center justify-center gap-16">
        <article className="max-w-lg space-y-4">
          <h2 className="text-4.5xl font-bold text-blue-500">
            Vamos bater um papo!
          </h2>
          <p className="text-lg font-semibold">
            Se precisar de esclarecimentos ou quiser simplesmente dar um alô,
            estou disposto a entrar em contato.
          </p>
        </article>

        <Image src={talkingSVG} width={380} height={340} alt="Talking" />
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
