import Link from "next/link"
import Image from "next/image"

import { Icon } from "@/components/Icon"
import { Title } from "@/components/Title"
import { Button } from "@/components/Button"
import { Divider } from "@/components/Divider"
import { SocialIcons } from "@/components/SocialIcons"
import { Description } from "@/components/Description"

import erikPNG from "@/assets/erik.png"

export default function About() {
  return (
    <main className="max-w-content w-content mx-auto p-8">
      <Title label="Sobre" labelBackground="About" isTitlePage />
      <Description label="Um pouco sobre mim" />

      <article className="max-w-[932px] mx-auto flex gap-8">
        <div className="max-w-[350px] w-full flex flex-col items-center gap-4">
          <Image
            src={erikPNG}
            width={350}
            height={350}
            alt="Imagem de perfil minha, Erik de Souza, na festa de formatura do ensino médio, sorrindo e com um blazer preto."
            className="rounded-lg"
          />

          <Divider />

          <SocialIcons variant="completed" />

          <Divider />

          <Button variant="outline-gradient" asChild>
            <Link href="/contact">
              Entre em contato
              <Icon size="small" />
            </Link>
          </Button>
        </div>

        <div className="space-y-5">
          <p className="flex-1">
            Meu nome é Erik de Souza, sou Desenvolvedor Frontend e moro no
            Brasil. Sou fascinado pela stack do Javascript e estou sempre
            buscando evoluir diariamente. Atualmente estou no 5º semestre de
            Sistemas da Informação e já trabalhei por quase dois anos no
            desenvolvimento web e mobile.
          </p>

          {/*  */}
          <p className="flex-1">
            Minha jornada no desenvolvimento começou enquanto cursava o técnico
            em Informática na EEEP Jaime Alencar de Oliveira, onde tive a
            oportunidade de estagiar na Softtek. Durante esse período, comecei
            aprimorando habilidades em HTML, CSS e JavaScript, além de trabalhar
            na geração de relatórios dos chamados atendidos pela equipe.
          </p>
          {/*  */}
          <p className="flex-1">
            Após o estagio, trabalhei como Desenvolvedor Frontend na Tecla T,
            onde pude participar de projetos como e-commerce, apps mobile e
            painéis administrativos, implementando soluções de integração com
            APIs, fluxos de carrinho de compra e layout fluido para oferecer uma
            boa experiência para os usuários.
          </p>
          {/*  */}
          <p className="flex-1">
            Participei do programa Ignite pela Rocketseat, onde pude concluir a
            trilha de ReactJS. Ao longo do curso, criei projetos desafiadores
            que me renderam muito aprendizado, alguns desses projetos foram o
            Book Wise, um sistema de avaliação de livros utilizando Next.js e
            MySQL, e o Ignite Call, um projeto para efetuar marcação de chamadas
            e reuniões, integrando o Next.js à API do Google Calendar. Com isso
            pude ir além da competência técnica, mostrando capacidade de
            enfrentar desafios complexos de forma criativa.
          </p>
          {/*  */}
          <p className="flex-1">
            Meus conhecimentos não se limitam apenas às tecnologias mais
            recentes, como React, Next.js, TailwindCSS e Stitches. Também sou
            adepto de metodologias ágeis, como Scrum, e tenho experiência no
            versionamento de código usando GitFlow, garantindo a qualidade e a
            colaboração eficiente em cada projeto.
          </p>
          {/*  */}
          <p className="flex-1">
            Estou constantemente em busca de novos desafios que me permitam
            continuar aprendendo e crescendo como desenvolvedor. Seja para criar
            interfaces intuitivas ou desenvolver soluções inovadoras, estou
            comprometido em impulsionar a excelência por meio do código.
          </p>
          {/*  */}
          <p className="flex-1">
            Se você está em busca de um desenvolvedor comprometido, apaixonado
            por solucionar problemas e apaixonado por tecnologia, estou pronto
            para colaborar e tornar seus projetos realidade!
          </p>
        </div>
      </article>
    </main>
  )
}
