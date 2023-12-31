import { ProjectDTO, ProjectsDefault } from "@/dtos/ProjectDTO"

import { generateSlug } from "@/utils/generateSlug"
import { formatSkillsProject } from "@/utils/formatSkillsProject"

const projectsDefault: ProjectsDefault[] = [
  {
    title: "Design System",
    description:
      "Este projeto foi concluído durante minha jornada na Rocketseat. Durante o Projeto 05 do Ignite, aprendi muita coisa com o Diego Fernandes e desenvolvi um design system abrangente, repleto de diversos componentes e estados distintos. Utilizei o poderoso React para a construção dos componentes, combinando-o com ferramentas como Storybook para a documentação, e me aprofundei em tecnologias como Stitches, Radix, TurboRepo e Tsup para aprimorar ainda mais o projeto. A documentação completa está disponível no Github Pages, onde você pode conferir o resultado final e explorar a variedade de componentes criados. Além disso, fiz a publicação dos pacotes no npm para facilitar o uso desses componentes em outros projetos.",
    src: {
      short: "/projects/short/design-system.png",
      normal: "/projects/normal/design-system.png",
    },
    skills: formatSkillsProject([
      {
        label: "React",
        src: "/skills/react.svg",
        color: "#61DAFB",
      },
      {
        label: "Typescript",
        src: "/skills/typescript.svg",
        color: "#007ACC",
      },
      {
        label: "Stitches",
        src: "/skills/stitches.svg",
        color: "#ECEDEE",
      },
      {
        label: "Storybook",
        src: "/skills/storybook.svg",
        color: "#FF4785",
      },
      {
        label: "Radix",
        src: "/skills/radix.svg",
        color: "#E2E8F0",
      },
      {
        label: "Turbo",
        src: "/skills/turbo.svg",
        color: "#0D8FF7",
      },
    ]),
    github_href: "https://github.com/erik-ferreira/05-design-system",
    demo_href:
      "https://erik-ferreira.github.io/05-design-system/?path=/story/home--page",
  },
  {
    title: "Ignite Shop",
    description:
      "Um projeto que surgiu durante o Módulo 04 do Ignite da Rocketseat e inicialmente, concentrei-me na criação de uma conexão com o Stripe para buscar e gerenciar produtos, especificamente camisetas, enquanto explorava os fundamentos do desenvolvimento. Utilizei Next.js como base para o projeto, aproveitando o poder do StitchesJS para toda a estilização, garantindo uma interface atraente e responsiva. A implementação do checkout de pagamento foi realizada de maneira eficiente utilizando a API do Stripe. Após concluir as aulas do módulo, abracei desafios adicionais para aprimorar o projeto, incluindo: - Aperfeiçoamentos no layout para proporcionar uma experiência ainda mais cativante; - Implementação do fluxo completo de um carrinho de compras, possibilitando uma experiência de compra fluida; - Desenvolvimento de uma funcionalidade que permite o checkout de pagamento com múltiplos produtos, integrando-os perfeitamente à API do Stripe.",
    src: {
      short: "/projects/short/ignite-shop.png",
      normal: "/projects/normal/ignite-shop.png",
    },
    skills: formatSkillsProject([
      {
        label: "React",
        src: "/skills/react.svg",
        color: "#61DAFB",
      },
      {
        label: "Typescript",
        src: "/skills/typescript.svg",
        color: "#007ACC",
      },
      {
        label: "Stitches",
        src: "/skills/stitches.svg",
        color: "#ECEDEE",
      },
      {
        label: "Stripe",
        src: "/skills/stripe.svg",
        color: "#635BFF",
      },
    ]),
    github_href: "https://github.com/erik-ferreira/04-ignite-shop",
    demo_href: null,
  },
  {
    title: "Coffee Delivery",
    description:
      "Um projeto desenvolvido como um desafio do módulo de React no Ignite da Rocketseat. Este projeto visa gerenciar o carrinho de compras de uma cafeteria fictícia, oferecendo uma gama de funcionalidades para uma experiência de compra aprimorada. Ao longo do desenvolvimento, concentrei-me em diversos aspectos-chave: Listagem detalhada de produtos (especificamente cafés) disponíveis para compra, oferecendo aos usuários uma variedade de opções; Capacidade de adicionar uma quantidade específica de itens ao carrinho, permitindo uma experiência de compra personalizada; Flexibilidade para aumentar ou remover a quantidade de itens no carrinho, adaptando-se às necessidades dos usuários; Implementação de um formulário intuitivo para coleta de informações de endereço dos usuários, aprimorando a usabilidade do serviço; Exibição dinâmica do total de itens no carrinho no Header, proporcionando uma visão clara do que está sendo adquirido; Cálculo automático do valor total dos itens no carrinho, multiplicando a quantidade pelo valor unitário dos produtos selecionados; Emprego extensivo do Tailwind CSS para estilização e responsividade em todo o projeto, garantindo uma interface atraente e adaptável; Utilização do React Hook Form para facilitar a manipulação de formulários, e a biblioteca Zod para validação de dados, garantindo a integridade das informações.",
    src: {
      short: "/projects/short/coffee-delivery.png",
      normal: "/projects/normal/coffee-delivery.png",
    },
    skills: formatSkillsProject([
      {
        label: "React",
        src: "/skills/react.svg",
        color: "#61DAFB",
      },
      {
        label: "Typescript",
        src: "/skills/typescript.svg",
        color: "#007ACC",
      },
      {
        label: "TaiwindCSS",
        src: "/skills/tailwindcss.svg",
        color: "#38B2AC",
      },
      {
        label: "React Hook Form",
        src: "/skills/hook-form.svg",
        color: "#EC5990",
      },
      {
        label: "Zod",
        src: "/skills/zod.svg",
        color: "#142641",
      },
      {
        label: "Immer js",
        src: "/skills/immer.svg",
        color: "#00E7C3",
      },
    ]),
    github_href:
      "https://github.com/erik-ferreira/challenge-02-coffee-delivery",
    demo_href: null,
  },
  {
    title: "Ig.news",
    description:
      "Este é um projeto desenvolvido durante o Chapter III da trilha de React JS no Ignite e é uma plataforma de posts que oferece aos usuários acesso a conteúdos diários sobre React, disponíveis por meio de uma assinatura mensal. Ao longo do desenvolvimento, utilizei uma gama de tecnologias para garantir uma experiência sólida e envolvente: Next.JS: A escolha ideal para este tipo de aplicação, permitindo a geração estática dos posts para uma performance otimizada. Next Auth: Utilizado para autenticação com o GitHub e oferecendo suporte a diversos outros provedores de autenticação, como Facebook, Instagram, entre outros. Sass: Utilizado para a estilização do projeto, garantindo uma apresentação visual atraente e consistente. Stripe: Integrado para a funcionalidade de pagamento, proporcionando aos usuários uma maneira conveniente de assinar o serviço. Fauna: Utilizado como banco de dados para armazenamento e gerenciamento de dados. Prismic: Implementado como um CMS (Content Management System) para fornecer os dados dos posts de maneira eficiente.",
    src: {
      short: "/projects/short/ignews.png",
      normal: "/projects/normal/ignews.png",
    },
    skills: formatSkillsProject([
      {
        label: "React",
        src: "/skills/react.svg",
        color: "#61DAFB",
      },
      {
        label: "Typescript",
        src: "/skills/typescript.svg",
        color: "#007ACC",
      },
      {
        label: "Next",
        src: "/skills/next.svg",
        color: "#F5F5F5",
      },
      {
        label: "Sass",
        src: "/skills/sass.svg",
        color: "#CB6699",
      },
      {
        label: "Stripe",
        src: "/skills/stripe.svg",
        color: "#635BFF",
      },
      {
        label: "Fauna DB",
        src: "/skills/fauna.svg",
        color: "#3713B7",
      },
    ]),
    github_href: "https://github.com/erik-ferreira/ignews",
    demo_href: null,
  },
  {
    title: "Book Wise",
    description:
      "Este projeto foi construído com Next.js e faz o gerenciamento de leituras, contando com avaliações dos livros. A construção do frontend foi feita toda em cima do Next 13, e além disso pude desenvolver o backend com prisma, banco de dados mysql com docker. Toda a estilização foi feita com tailwind e além das telas para web, adicionei responsividade em toda a aplicação, para que seja possível acessar do mobile sem problema algum.",
    src: {
      short: "/projects/short/book-wise.png",
      normal: "/projects/normal/book-wise.png",
    },
    skills: formatSkillsProject([
      {
        label: "React",
        src: "/skills/react.svg",
        color: "#61DAFB",
      },
      {
        label: "Typescript",
        src: "/skills/typescript.svg",
        color: "#007ACC",
      },
      {
        label: "Next",
        src: "/skills/next.svg",
        color: "#F5F5F5",
      },
      {
        label: "Radix",
        src: "/skills/radix.svg",
        color: "#E2E8F0",
      },
      {
        label: "Prisma",
        src: "/skills/prisma.svg",
        color: "#5A67D8",
      },
      {
        label: "Zod",
        src: "/skills/zod.svg",
        color: "#142641",
      },
      {
        label: "React Hook Form",
        src: "/skills/hook-form.svg",
        color: "#EC5990",
      },
      {
        label: "React Query",
        src: "/skills/react-query.svg",
        color: "#FFD94C",
      },
      {
        label: "Google APIs",
        src: "/skills/google.svg",
        color: "#587dbd",
      },
    ]),
    github_href: "https://github.com/erik-ferreira/book-wise",
    demo_href: null,
  },
  {
    title: "Dt Money",
    description:
      "O dt money foi minha primeira aplicação web desenvolvida com ReactJS durante o Ignite da Rocketseat. Essa jornada foi incrível, pois pude mergulhar no controle de finanças pessoais, aprendendo valiosas lições ao longo do desenvolvimento. Inicialmente foi construído para gerenciar entradas e saídas financeiras, fornecendo uma base sólida para aprimorar meus conhecimentos prévios. Uma das descobertas mais interessantes foi o MirageJS, uma biblioteca que permitiu continuar o desenvolvimento do frontend sem depender diretamente do backend. Aprender o básico dessa ferramenta foi fascinante e utilizei ela em outras aplicações. Em uma atualização subsequente, decidi aprofundar meus conhecimentos, buscando melhorar a performance do projeto. Nesse sentido, removi o MirageJS e optei por adicionar os dados com json-server. Além disso, incluí recursos de responsividade para oferecer uma experiência mais fluida aos usuários, e introduzi um modo escuro para garantir maior conforto visual.",
    src: {
      short: "/projects/short/dtmoney.png",
      normal: "/projects/normal/dtmoney.png",
    },
    skills: formatSkillsProject([
      {
        label: "React",
        src: "/skills/react.svg",
        color: "#61DAFB",
      },
      {
        label: "Typescript",
        src: "/skills/typescript.svg",
        color: "#007ACC",
      },
      {
        label: "Styled Components",
        src: "/skills/styled-components.svg",
        color: "#9F70B8",
      },
      {
        label: "Mirage JS",
        src: "/skills/mirage.svg",
        color: "#05C77E",
      },
    ]),
    github_href: "https://github.com/erik-ferreira/dtmoney",
    demo_href: null,
  },
  {
    title: "Rocket Shoes",
    description:
      "Este projeto foi fornecido através de um template pela Rocketseat. Toda a estilização já estava feita mas o desafio era fazer a integração com o carrinho de compras. Foi um projeto muito interessante, pois pude fixar melhor o uso da Context API. Além disso, apliquei toda a responsividade.",
    src: {
      short: "/projects/short/rocketshoes.png",
      normal: "/projects/normal/rocketshoes.png",
    },
    skills: formatSkillsProject([
      {
        label: "React",
        src: "/skills/react.svg",
        color: "#61DAFB",
      },
      {
        label: "Typescript",
        src: "/skills/typescript.svg",
        color: "#007ACC",
      },
      {
        label: "Styled Components",
        src: "/skills/styled-components.svg",
        color: "#9F70B8",
      },
      {
        label: "Jest",
        src: "/skills/jest.svg",
        color: "#99425B",
      },
    ]),
    github_href:
      "https://github.com/erik-ferreira/ignite-reactjs-criando-um-hook-de-carrinho-de-compras",
    demo_href: null,
  },
  {
    title: "Ignite Timer",
    description:
      "Este é um projeto para se aplicar a técnica de Pomodoro, que consiste em deixar o dia da pessoa mais produtivo em qualquer coisa que precise se concentrar. Basicamente consiste em trabalhar em algo por determinado tempo e dando pausas, mas nesse tempo em que estiver trabalhando, tem de se manter 100% focado, e o tempo de pausa deve ser usado para descanso. Uma novidade nesse projeto foi o Immer JS, feito para trabalhar com dados imutáveis de uma forma mais simples com javascript e o useReducer que acaba se tornando uma forma mais simples de se trabalhar com informações que são mais complexas e quando as alterações de um estado são mais custosas.",
    src: {
      short: "/projects/short/ignite-timer.png",
      normal: "/projects/normal/ignite-timer.png",
    },
    skills: formatSkillsProject([
      {
        label: "React",
        src: "/skills/react.svg",
        color: "#61DAFB",
      },
      {
        label: "Typescript",
        src: "/skills/typescript.svg",
        color: "#007ACC",
      },
      {
        label: "Styled Components",
        src: "/skills/styled-components.svg",
        color: "#9F70B8",
      },
      {
        label: "Zod",
        src: "/skills/zod.svg",
        color: "#142641",
      },
      {
        label: "React Hook Form",
        src: "/skills/hook-form.svg",
        color: "#EC5990",
      },
      {
        label: "Immer js",
        src: "/skills/immer.svg",
        color: "#00E7C3",
      },
    ]),
    github_href: "https://github.com/erik-ferreira/02-ignite-timer",
    demo_href: null,
  },
  {
    title: "Redux + Zustand",
    description:
      "Este projeto foi construído com o objetivo de entender como trabalhar com Redux e Zustand para controle de estado. A aplicação é um video player com módulos de aulas, onde é possível selecionar a aula e o módulo que deseja assistir. Também foi aplicado testes unitários com o vitest.",
    src: {
      short: "/projects/short/react-zustand.png",
      normal: "/projects/normal/react-zustand.png",
    },
    skills: formatSkillsProject([
      {
        label: "React",
        src: "/skills/react.svg",
        color: "#61DAFB",
      },
      {
        label: "Typescript",
        src: "/skills/typescript.svg",
        color: "#007ACC",
      },
      {
        label: "TaiwindCSS",
        src: "/skills/tailwindcss.svg",
        color: "#38B2AC",
      },
      {
        label: "Radix",
        src: "/skills/radix.svg",
        color: "#E2E8F0",
      },
      {
        label: "Redux Toolkit",
        src: "/skills/redux.svg",
        color: "#764ABC",
      },
      {
        label: "Zustand",
        src: "/skills/zustand.svg",
        color: "#F46D2D",
      },
    ]),
    github_href: "https://github.com/erik-ferreira/07-redux-zustand",
    demo_href: null,
  },
  {
    title: "Github Blog",
    description:
      "Neste projeto as issues de um repositório do github são apresentadas como posts. Também é possível visualizar o post completo e realizar uma busca por um post específico. O projeto foi desenvolvido com React e Typescript, e para estilização foi utilizado o Styled Components. Um dos meus repositórios esta definido como padrão, mas você pode informar a url de um repositório de sua preferência para visualizar as issues dele.",
    src: {
      short: "/projects/short/github-blog.png",
      normal: "/projects/normal/github-blog.png",
    },
    skills: formatSkillsProject([
      {
        label: "React",
        src: "/skills/react.svg",
        color: "#61DAFB",
      },
      {
        label: "Typescript",
        src: "/skills/typescript.svg",
        color: "#007ACC",
      },
      {
        label: "Styled Components",
        src: "/skills/styled-components.svg",
        color: "#9F70B8",
      },
      {
        label: "React Hook Form",
        src: "/skills/hook-form.svg",
        color: "#EC5990",
      },
      {
        label: "Zod",
        src: "/skills/zod.svg",
        color: "#142641",
      },
    ]),
    github_href: "https://github.com/erik-ferreira/challenge-03-github-blog",
    demo_href: null,
  },
  {
    title: "Mastering Tailwind",
    description:
      "Este projeto tem como objetivo construir uma aplicação completa e responsiva com Tailwindcss. A aplicação não tem um objetivo comercial em si, mas possui vários componentes que são usados no dia a dia de várias aplicações e é incrível poder construir todos eles com muita facilidade e rapidez, já que o Tailwind consegue proporcionar isso. Alguns dos componentes da aplicação são: - Preview de foto de perfil; - Navbar; - Select; - Input",
    src: {
      short: "/projects/short/mastering-tailwind.png",
      normal: "/projects/normal/mastering-tailwind.png",
    },
    skills: formatSkillsProject([
      {
        label: "React",
        src: "/skills/react.svg",
        color: "#61DAFB",
      },
      {
        label: "Typescript",
        src: "/skills/typescript.svg",
        color: "#007ACC",
      },
      {
        label: "TaiwindCSS",
        src: "/skills/tailwindcss.svg",
        color: "#38B2AC",
      },
    ]),
    github_href: "https://github.com/erik-ferreira/mastering-tailwind",
    demo_href: null,
  },
]

export const projects: ProjectDTO[] = projectsDefault
  .slice(0, 6)
  .map((project, index) => ({
    id: index + 1,
    slug: generateSlug(project.title),
    href: `/projects/${generateSlug(project.title)}`,
    ...project,
  }))

export const allProjects: ProjectDTO[] = projectsDefault.map(
  (project, index) => ({
    id: index + 1,
    slug: generateSlug(project.title),
    href: `/projects/${generateSlug(project.title)}`,
    ...project,
  })
)
