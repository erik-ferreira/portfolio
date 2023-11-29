import Link from "next/link"
import Image from "next/image"

import { Icon } from "@/components/Icon"
import { Title } from "@/components/Title"
import { Button } from "@/components/Button"

import erikPNG from "@/assets/erik.png"
import { SocialIcons } from "@/components/SocialIcons"

export default function About() {
  return (
    <main className="relative max-w-content w-content mx-auto p-8 flex flex-col gap-16 border">
      <section>
        <Title label="Sobre" labelBackground="About" />
        <p>Uma breve descrição aqui</p>

        <article className="max-w-[932px] mx-auto border flex gap-8">
          <div className="border max-w-[350px] w-full flex flex-col items-center gap-4">
            <Image
              src={erikPNG}
              width={350}
              height={350}
              alt="Erik Ferreira"
              className="rounded-lg"
            />

            <div className="w-full h-0.5 bg-sky-600" />

            <SocialIcons variant="completed" />

            <div className="w-full h-0.5 bg-sky-600" />

            <Button variant="outline-gradient" asChild>
              <Link href="/">
                Entre em contato
                <Icon size="small" disabledHover />
              </Link>
            </Button>
          </div>

          <span className="flex-1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry standard dummy text ever since the 1500.
          </span>
        </article>
      </section>
    </main>
  )
}
