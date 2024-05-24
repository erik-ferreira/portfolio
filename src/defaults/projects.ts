import { ProjectDTO, ProjectsDefault } from "@/dtos/ProjectDTO"

import { allSkills } from "@/defaults/skills"

import { generateSlug } from "@/utils/generateSlug"
import { formatScreenshotsByProject } from "@/utils/formatScreenshotsByProject"
import { getSkillsFromTheAllSkillsList } from "@/utils/getSkillsFromTheAllSkillsList"

const projectsDefault: ProjectsDefault[] = [
  {
    title: "Design System",
    description:
      "Este projeto foi concluído durante minha jornada na Rocketseat. Durante o Projeto 05 do Ignite, aprendi muita coisa com o Diego Fernandes e desenvolvi um design system abrangente, repleto de diversos componentes e estados distintos. Utilizei o poderoso React para a construção dos componentes, combinando-o com ferramentas como Storybook para a documentação, e me aprofundei em tecnologias como Stitches, Radix, TurboRepo e Tsup para aprimorar ainda mais o projeto. A documentação completa está disponível no Github Pages, onde você pode conferir o resultado final e explorar a variedade de componentes criados. Além disso, fiz a publicação dos pacotes no npm para facilitar o uso desses componentes em outros projetos.",
    src: "/projects/design-system/default.png",
    altSrc:
      "Imagem de uma das telas do projeto Design System. Na imagem consta a lista dos tokens de cores do projeto",
    skills: getSkillsFromTheAllSkillsList(allSkills, [
      "React",
      "Typescript",
      "Stitches",
      "Storybook",
      "Radix",
      "Turbo Repo",
    ]),
    githubHref: "https://github.com/erik-ferreira/05-design-system",
    demoHref:
      "https://erik-ferreira.github.io/05-design-system/?path=/story/home--page",
    screenshots: formatScreenshotsByProject(8, "design-system"),
    srcBackground: "/projects/design-system/background.png",
    srcVideo: "/projects/design-system/video.mp4",
  },
  {
    title: "Ignite Shop",
    description:
      "Um projeto que surgiu durante o Módulo 04 do Ignite da Rocketseat e inicialmente, concentrei-me na criação de uma conexão com o Stripe para buscar e gerenciar produtos, especificamente camisetas, enquanto explorava os fundamentos do desenvolvimento. Utilizei Next.js como base para o projeto, aproveitando o poder do StitchesJS para toda a estilização, garantindo uma interface atraente e responsiva. A implementação do checkout de pagamento foi realizada de maneira eficiente utilizando a API do Stripe. Após concluir as aulas do módulo, abracei desafios adicionais para aprimorar o projeto, incluindo: aperfeiçoamentos no layout para proporcionar uma experiência ainda mais cativante, implementação do fluxo completo de um carrinho de compras, possibilitando uma experiência de compra fluida e o desenvolvimento de uma funcionalidade que permite o checkout de pagamento com múltiplos produtos, integrando-os perfeitamente à API do Stripe.",
    src: "/projects/ignite-shop/default.png",
    altSrc:
      "Tela principal do projeto Ignite Shop com um carousel de imagens das camisetas que estão sendo vendidas; O modal do carrinho para finalizar a compra esta aberto.",
    skills: getSkillsFromTheAllSkillsList(allSkills, [
      "React",
      "Typescript",
      "Stitches",
      "Stripe",
    ]),
    githubHref: "https://github.com/erik-ferreira/04-ignite-shop",
    demoHref: null,
    screenshots: formatScreenshotsByProject(6, "ignite-shop"),
    srcBackground: "/projects/ignite-shop/background.png",
    srcVideo: "/projects/ignite-shop/video.mp4",
  },
  {
    title: "Coffee Delivery",
    description:
      "Um projeto desenvolvido como um desafio do módulo de React no Ignite da Rocketseat. Este projeto visa gerenciar o carrinho de compras de uma cafeteria fictícia, oferecendo uma gama de funcionalidades para uma experiência de compra aprimorada. Ao longo do desenvolvimento, concentrei-me em diversos aspectos-chave como listagem detalhada de produtos (especificamente cafés) disponíveis para compra, oferecendo aos usuários uma variedade de opções; Capacidade de adicionar uma quantidade específica de itens ao carrinho, permitindo uma experiência de compra personalizada; Flexibilidade para aumentar ou remover a quantidade de itens no carrinho, adaptando-se às necessidades dos usuários; Implementação de um formulário intuitivo para coleta de informações de endereço dos usuários, aprimorando a usabilidade do serviço; Exibição dinâmica do total de itens no carrinho no Header, proporcionando uma visão clara do que está sendo adquirido; Cálculo automático do valor total dos itens no carrinho, multiplicando a quantidade pelo valor unitário dos produtos selecionados; Emprego extensivo do Tailwind CSS para estilização e responsividade em todo o projeto, garantindo uma interface atraente e adaptável; Utilização do React Hook Form para facilitar a manipulação de formulários, e a biblioteca Zod para validação de dados, garantindo a integridade das informações.",
    src: "/projects/coffee-delivery/default.png",
    altSrc:
      "Tela de home do Coffee Delivery com alguns de seus produtos, um título contendo 'Encontre o café perfeito para qualquer hora do dia', com uma imagem do copo com alguns grãos de café.",
    skills: getSkillsFromTheAllSkillsList(allSkills, [
      "React",
      "Typescript",
      "TailwindCSS",
      "React Hook Form",
      "Zod",
      "Immer js",
    ]),
    githubHref: "https://github.com/erik-ferreira/challenge-02-coffee-delivery",
    demoHref: null,
    screenshots: formatScreenshotsByProject(2, "coffee-delivery"),
    srcBackground: "/projects/coffee-delivery/background.png",
    srcVideo: "/projects/coffee-delivery/video.mp4",
  },
  {
    title: "Reminder Calendar",
    description:
      "O reminder calendar foi um dos meus primeiros projetos no mundo da programação e basicamente a minha ideia era fazer um calendário que fosse capaz de fazer anotações em cada dia. Esse projeto é um dos que mais tenho orgulho porque eu construí todo do zero, sem me basear em nenhum tutorial. Ele calcula os dias do mês perfeitamente, é possível criar uma nota no dia desejado e os dados são salvos no local storage do navegador. O projeto foi feito todo com html, css e javascript puro, manipulando a DOM. Eu poderia melhorar muito ele hoje, mas resolvi deixar da forma que estava pelo fato de ser um dos meus primeiros projetos.",
    src: "/projects/reminder-calendar/default.png",
    altSrc:
      "Tela principal do Reminder Calendar, contendo um título escrito 'Janeiro de 2024' e um calendário com os dias do mês.",
    skills: getSkillsFromTheAllSkillsList(allSkills, [
      "HTML",
      "CSS",
      "Javascript",
    ]),
    githubHref: "https://github.com/erik-ferreira/reminder-calendar",
    demoHref: "https://reminder-calendar-virid.vercel.app",
    screenshots: formatScreenshotsByProject(3, "reminder-calendar"),
    srcBackground: "/projects/reminder-calendar/background.png",
    srcVideo: "/projects/reminder-calendar/video.mp4",
  },
  {
    title: "Book Wise",
    description:
      "Este projeto foi construído com Next.js e faz o gerenciamento de leituras, contando com avaliações dos livros. A construção do frontend foi feita toda em cima do Next 13, e além disso pude desenvolver o backend com prisma e banco de dados mysql rodando no container do docker. Toda a estilização foi feita com tailwind e além das telas para web, adicionei responsividade em toda a aplicação, para que seja possível acessar do mobile sem problema algum.",
    src: "/projects/book-wise/default.png",
    altSrc:
      "Tela de início do projeto Book Wise, contendo um menu lateral na esquerda para navegação entre as páginas, uma lista de avaliações mais recentes no meio da tela e uma lista de livros populares na direita.",
    skills: getSkillsFromTheAllSkillsList(allSkills, [
      "React",
      "Typescript",
      "Next",
      "Radix",
      "Prisma",
      "Zod",
      "React Hook Form",
      "React Query",
      "Google APIs",
    ]),
    githubHref: "https://github.com/erik-ferreira/book-wise",
    demoHref: null,
    screenshots: formatScreenshotsByProject(6, "book-wise"),
    srcBackground: "/projects/book-wise/background.png",
    srcVideo: "/projects/book-wise/video.mp4",
  },
  {
    title: "Dt Money",
    description:
      "O dt money foi minha primeira aplicação web desenvolvida com ReactJS durante o Ignite da Rocketseat. Essa jornada foi incrível, pois pude mergulhar no controle de finanças pessoais, aprendendo valiosas lições ao longo do desenvolvimento. Inicialmente foi construído para gerenciar entradas e saídas financeiras, fornecendo uma base sólida para aprimorar meus conhecimentos prévios. Uma das descobertas mais interessantes foi o MirageJS, uma biblioteca que permitiu continuar o desenvolvimento do frontend sem depender diretamente do backend. Aprender o básico dessa ferramenta foi fascinante e utilizei ela em outras aplicações. Em uma atualização subsequente, decidi aprofundar meus conhecimentos, buscando melhorar a performance do projeto. Nesse sentido, removi o MirageJS e optei por adicionar os dados com json-server. Além disso, incluí recursos de responsividade para oferecer uma experiência mais fluida aos usuários, e introduzi um modo escuro para garantir maior conforto visual.",
    src: "/projects/dt-money/default.png",
    altSrc:
      "Imagem de início do DT Money, contendo 2 botões, um para cadastrar uma nova transação e outro de configurações; Mais abaixo 3 cards com os valores de entradas, saídas e total respectivamente.",
    skills: getSkillsFromTheAllSkillsList(allSkills, [
      "React",
      "Typescript",
      "Styled Components",
      "Mirage JS",
    ]),
    githubHref: "https://github.com/erik-ferreira/dtmoney",
    demoHref: null,
    screenshots: formatScreenshotsByProject(4, "dt-money"),
    srcBackground: "/projects/dt-money/background.png",
    srcVideo: "/projects/dt-money/video.mp4",
  },
  {
    title: "Ig.news",
    description:
      "Este é um projeto desenvolvido durante o Chapter III da trilha de React JS no Ignite e é uma plataforma de posts que oferece aos usuários acesso a conteúdos diários sobre React, disponíveis por meio de uma assinatura mensal. Ao longo do desenvolvimento, utilizei uma gama de tecnologias para garantir uma experiência sólida e envolvente: Next.JS: A escolha ideal para este tipo de aplicação, permitindo a geração estática dos posts para uma performance otimizada. Next Auth: Utilizado para autenticação com o GitHub e oferecendo suporte a diversos outros provedores de autenticação, como Facebook, Instagram, entre outros. Sass: Utilizado para a estilização do projeto, garantindo uma apresentação visual atraente e consistente. Stripe: Integrado para a funcionalidade de pagamento, proporcionando aos usuários uma maneira conveniente de assinar o serviço. Fauna: Utilizado como banco de dados para armazenamento e gerenciamento de dados. Prismic: Implementado como um CMS (Content Management System) para fornecer os dados dos posts de maneira eficiente.",
    src: "/projects/ignews/default.png",
    altSrc:
      "Tela de início do Ig.news, na esquerda tem um título, subtítulo, descrição e botão para assinar o serviço; Na direita uma imagem de uma mulher de camisa amarela, óculos e cabelo liso preto amarrado, com um café do lado da mesa, lendo alguns posts na plataforma.",
    skills: getSkillsFromTheAllSkillsList(allSkills, [
      "React",
      "Typescript",
      "Next",
      "Sass",
      "Stripe",
      "Fauna DB",
    ]),
    githubHref: "https://github.com/erik-ferreira/ignews",
    demoHref: null,
    screenshots: formatScreenshotsByProject(3, "ignews"),
    srcBackground: "/projects/ignews/background.png",
    srcVideo: "/projects/ignews/video.mp4",
  },
  {
    title: "Rocket Shoes",
    description:
      "Este projeto foi fornecido através de um template pela Rocketseat. Toda a estilização já estava feita mas o desafio era fazer a integração com o carrinho de compras. Foi um projeto muito interessante, pois pude fixar melhor o uso da Context API. Além disso, apliquei toda a responsividade.",
    src: "/projects/rocketshoes/default.png",
    altSrc:
      "Rocket Shoes, um site incrível para comprar seus tênis. Na imagem tem alguns cards de cada tênis, de cores branco e preto, com o botão para adicionar o produto ao carrinho.",
    skills: getSkillsFromTheAllSkillsList(allSkills, [
      "React",
      "Typescript",
      "Styled Components",
      "Jest",
    ]),
    githubHref:
      "https://github.com/erik-ferreira/ignite-reactjs-criando-um-hook-de-carrinho-de-compras",
    demoHref: null,
    screenshots: formatScreenshotsByProject(2, "rocketshoes"),
    srcBackground: "/projects/rocketshoes/background.png",
    srcVideo: "/projects/rocketshoes/video.mp4",
  },
  {
    title: "Ignite Timer",
    description:
      "Este é um projeto para se aplicar a técnica de Pomodoro, que consiste em deixar o dia da pessoa mais produtivo em qualquer coisa que precise se concentrar. Basicamente consiste em trabalhar em algo por determinado tempo e dando pausas, mas nesse tempo em que estiver trabalhando, tem de se manter 100% focado, e o tempo de pausa deve ser usado para descanso. Uma novidade nesse projeto foi o Immer JS, feito para trabalhar com dados imutáveis de uma forma mais simples com javascript e o useReducer que acaba se tornando uma forma mais simples de se trabalhar com informações que são mais complexas e quando as alterações de um estado são mais custosas.",
    src: "/projects/ignite-timer/default.png",
    altSrc:
      "Tela com um contador de tempo para executar uma atividade. Uma navegação o canto superior direito para listar as atividades já executadas.",
    skills: getSkillsFromTheAllSkillsList(allSkills, [
      "React",
      "Typescript",
      "Styled Components",
      "Zod",
      "React Hook Form",
      "Immer js",
    ]),
    githubHref: "https://github.com/erik-ferreira/02-ignite-timer",
    demoHref: null,
    screenshots: formatScreenshotsByProject(3, "ignite-timer"),
    srcBackground: "/projects/ignite-timer/background.png",
    srcVideo: "/projects/ignite-timer/video.mp4",
  },
  {
    title: "Redux + Zustand",
    description:
      "Este projeto foi construído com o objetivo de entender como trabalhar com Redux e Zustand para controle de estado. A aplicação é um video player com módulos de aulas, onde é possível selecionar a aula e o módulo que deseja assistir. Também foi aplicado testes unitários com o vitest.",
    src: "/projects/redux-zustand/default.png",
    altSrc:
      "Tela com um player de video e uma lista de módulos e aulas. Botão superior para alterar entre autoplay e um botão para enviar o feedback.",
    skills: getSkillsFromTheAllSkillsList(allSkills, [
      "React",
      "Typescript",
      "TailwindCSS",
      "Radix",
      "Redux Toolkit",
      "Zustand",
    ]),
    githubHref: "https://github.com/erik-ferreira/07-redux-zustand",
    demoHref: null,
    screenshots: formatScreenshotsByProject(3, "redux-zustand"),
    srcBackground: "/projects/redux-zustand/background.png",
    srcVideo: "/projects/redux-zustand/video.mp4",
  },
  {
    title: "Github Blog",
    description:
      "Neste projeto as issues de um repositório do github são apresentadas como posts. Também é possível visualizar o post completo e realizar uma busca por um post específico. O projeto foi desenvolvido com React e Typescript, e para estilização foi utilizado o Styled Components. Um dos meus repositórios esta definido como padrão, mas você pode informar a url de um repositório de sua preferência para visualizar as issues dele.",
    src: "/projects/github-blog/default.png",
    altSrc:
      "Tela principal do Github Blog, contando com a logo, um sessão de perfil com a foto, nome e bio. Mais abaixo um campo de pesquisa para filtrar a lista de issues de um repositório.",
    skills: getSkillsFromTheAllSkillsList(allSkills, [
      "React",
      "Typescript",
      "Styled Components",
      "React Hook Form",
      "Zod",
    ]),
    githubHref: "https://github.com/erik-ferreira/challenge-03-github-blog",
    demoHref: "https://challenge-03-github-blog.vercel.app",
    screenshots: formatScreenshotsByProject(3, "github-blog"),
    srcBackground: "/projects/github-blog/background.png",
    srcVideo: "/projects/github-blog/video.mp4",
  },
  {
    title: "Mastering Tailwind",
    description:
      "Este projeto tem como objetivo construir uma aplicação completa e responsiva com Tailwindcss. A aplicação não tem um objetivo comercial em si, mas possui vários componentes que são usados no dia a dia de várias aplicações e é incrível poder construir todos eles com muita facilidade e rapidez, já que o Tailwind consegue proporcionar isso. Alguns dos componentes da aplicação são: Preview de foto de perfil, navbar, select, input e etc",
    src: "/projects/mastering-tailwind/default.png",
    altSrc:
      "Única tela do projeto Mastering Tailwind, contendo um várias informações, como inputs, drawer menu, navegação em tab e etc.",
    skills: getSkillsFromTheAllSkillsList(allSkills, [
      "React",
      "Typescript",
      "TailwindCSS",
    ]),
    githubHref: "https://github.com/erik-ferreira/mastering-tailwind",
    demoHref: null,

    screenshots: formatScreenshotsByProject(2, "mastering-tailwind"),
    srcBackground: "/projects/mastering-tailwind/background.png",
    srcVideo: "/projects/mastering-tailwind/video.mp4",
  },
]

export const projects: ProjectDTO[] = projectsDefault.map((project, index) => ({
  id: index + 1,
  slug: generateSlug(project.title),
  href: `/projects/${generateSlug(project.title)}`,
  skillsNames: project.skills.map((skill) => skill.name.toLowerCase()),
  ...project,
}))

export const someProjects: ProjectDTO[] = projects.slice(0, 6)
