import { ProjectDTO, ProjectsDefault } from "@/dtos/ProjectDTO"

import { generateSlug } from "@/utils/generateSlug"
import { formatSkillsProject } from "@/utils/formatSkillsProject"
import { getSkillsFromTheAllSkillsList } from "@/utils/getSkillsFromTheAllSkillsList"

const altsByProjects = {
  "design-system": [
    "Lista dos tokens de cores do projeto",
    "Lista dos tokens de tamanho de fonte com o nome da fonte, o tamanho em pixels e o tamanho em rem",
    "Tela do componente de botão com as variações de tamanho, estilo e status de desabilitado",
    "Tela do componente de input com a possibilidade de editar o placeholder",
    "Tela do componente de toast com a possibilidade de alterar o título e a descrição do toast",
    "Tela do componente de checkbox com a possibilidade de alterar entre selecionado ou não",
    "Tela do componente de multstep com a possibilidade de mudar a quantidade de passos e o passo atual",
    "Tokens das famílias de fontes, contendo a default como Roboto, e a secundária sendo mono espaçada",
  ],
  "ignite-shop": [
    "Tela home com a lista de camisetas disponíveis para compra",
    "Tela home com a lista de camisetas disponíveis e o efeito de hover no componente",
    "Tela de detalhes da camiseta, com o título, descrição, preço e um botão para adicionar a camiseta na sacola",
    "Tela com o modal do carrinho aberto, contendo a lista de produtos, o valor total e um botão para finalizar a compra",
    "Tela de integração com o Stripe, contendo o formulário de pagamento e um botão para pagar",
    "Tela de compra efetuada com sucesso, contendo a quantidade de produtos feitos no pedido e um botão para voltar a home",
  ],
  "coffee-delivery": [
    "Tela home do Coffee Delivery com alguns de seus produtos, um título contendo 'Encontre o café perfeito para qualquer hora do dia', com uma imagem do copo com alguns grãos de café.",
    "Tela de completar o pedido, contendo um formulário para preencher os dados de endereço, tipo de pagamento, lista dos produtos e um botão para confirmar o pedido.",
  ],
  "reminder-calendar": [
    "Tela de inicio do projeto, mostrando o mês atual com o dia atual selecionado",
    "Tela mostrando o input para adicionar uma nota no dia selecionado, contendo botão de salvar e botão de cancelar",
    "Tela mostrando uma nota ja adicionada em um dia, o dia em específico com uma cor diferente para dar destaque, e o texto da nota em si abaixo do calendário.",
  ],
  "book-wise": [
    "Tela home contendo a logo do projeto escrito BookWise, um título de Boas vindas e as opções para realizar o login, sendo elas com Google, Github e entrar como Visitante",
    "Tela de inicio do projeto com a lista de avaliações mais recentes, livros populares e menu na lateral esquerda para navegação entre as páginas",
    "Página de explorar livros, contendo um campo de pesquisa, uma lista de livros e um filtro por gênero do livro",
    "Página de explorar com o filtro de gênero aplicado, mostrando apenas os livros do gênero selecionado",
    "Página de perfil do usuário com uma foto, nome e uma descrição de desde que ano é membro. A página também contém uma lista de informações como páginas lidas, livros avaliados, autores lidos e categoria mais lida",
    "Página com o modal de avaliação de um livro aberto, podendo deixar uma descrição e avaliar em até 5 estrelas o livro",
  ],
  "dt-money": [
    "Página em tema dark com os valores das transações de entradas, saídas e o total. Com um campo de pesquisa para filtrar as transações e um botão para cadastra uma transação",
    "Página em tema light com os valores das transações de entradas, saídas e o total. Com um campo de pesquisa para filtrar as transações e um botão para cadastra uma transação",
    "Página com o modal de nova transação aberto, com os campos de descrição, preço, categoria e o tipo da transação.",
    "Página inicial com o campo de pesquisa preenchido, mostrando apenas as transações de filtradas",
  ],
  "ig-news": [
    "Página inicial com um título e um botão de inscrever-se na lateral esquerda. No lado direito tem uma mulher tomando café em quanto ler alguns posts e no topo tem um menu de navegação e um botão para login.",
    "Página de posts, contendo uma lista de posts com título, uma breve descrição e a data de publicação",
    "Página de detalhes de um post contendo toda a descrição do post, título e data da publicação",
  ],
  "rocket-shoes": [
    "Página inicial uma lista dos tênis. Acima da lista tem a logo do projeto e um botão para navegar para o carrinho. Em cada card tem uma foto do tênis, o título, o preço e o botão para adicionar ao carrinho",
    "Página de carrinho com a lista dos tênis adicionados, uma opção para mudar a quantidade de cada tênis, um botão para remover o tênis da lista, o valor total e um botão para finalizar a compra",
  ],
  "ignite-timer": [
    "Página com dois campos, um para título da task em desenvolvimento e outro de quanto tempo irá levar. Tem também um contador e um botão para começar a contagem",
    "Página com o contador em andamento, mostrando o tempo restante e um botão para interromper a contagem",
    "Página com o histórico de tarefas feitas, contendo a duração, data de início e o status",
  ],
  "redux-zustand": [
    "Página com uma lista de vídeos separados por categoria e um player para assistir o vídeo. A categoria selecionada é a de ReactJS",
    "Página com uma lista de vídeos separados por categoria e um player para assistir o vídeo. A categoria selecionada é a de React Native",
    "Página com o vídeo em andamento, mostrando o tempo restante e as opções de colocar em tela cheia, aumentar a velocidade e etc",
  ],
  "github-blog": [
    "Página com a logo do projeto em azul, com o título Github Blog, uma sessão de perfil, contendo imagem, nome do usuário, descrição, link para o github e quantidade de seguidores. Também possuí um campo de pesquisa para filtrar as publicações",
    "Página com o filtro de posts sendo aplicado para pesquisar as publicações",
    "Página de detalhe de uma publicação, contendo título, data da publicação, quantidade de comentários e toda a descrição.",
  ],
  "mastering-tailwind": [
    "Página em tema light com várias informações e componentes diferentes, como navegação lateral, campos de texto, área para mudar a imagem de perfil, campo para adicionar arquivos e fazer upload e etc.",
    "Página em tema dark com várias informações e componentes diferentes, como navegação lateral, campos de texto, área para mudar a imagem de perfil, campo para adicionar arquivos e fazer upload e etc.",
  ],
}

const projectsDefault: ProjectsDefault[] = [
  {
    title: "Design System",
    description:
      "Este projeto foi concluído durante minha jornada na Rocketseat. Durante o Projeto 05 do Ignite, aprendi muita coisa com o Diego Fernandes e desenvolvi um design system abrangente, repleto de diversos componentes e estados distintos. Utilizei o poderoso React para a construção dos componentes, combinando-o com ferramentas como Storybook para a documentação, e me aprofundei em tecnologias como Stitches, Radix, TurboRepo e Tsup para aprimorar ainda mais o projeto. A documentação completa está disponível no Github Pages, onde você pode conferir o resultado final e explorar a variedade de componentes criados. Além disso, fiz a publicação dos pacotes no npm para facilitar o uso desses componentes em outros projetos.",
    src: "/projects/design-system/default.png",
    altSrc:
      "Imagem de uma das telas do projeto Design System. Na imagem consta a lista dos tokens de cores do projeto",
    skills: getSkillsFromTheAllSkillsList([
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
    screenshots: Array.from({ length: 8 }, (_, index) => {
      const imageIndex = String(index + 1).padStart(2, "0")

      return {
        id: index + 1,
        src: `/projects/design-system/${imageIndex}.png`,
        variant: "image",
        direction: "horizontal",
        altSrc: altsByProjects["design-system"][index],
      }
    }),
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
    skills: getSkillsFromTheAllSkillsList([
      "React",
      "Typescript",
      "Stitches",
      "Stripe",
    ]),
    githubHref: "https://github.com/erik-ferreira/04-ignite-shop",
    demoHref: null,
    screenshots: Array.from({ length: 6 }, (_, index) => {
      const imageIndex = String(index + 1).padStart(2, "0")

      return {
        id: index + 1,
        src: `/projects/ignite-shop/${imageIndex}.png`,
        variant: "image",
        direction: "horizontal",
        altSrc: altsByProjects["ignite-shop"][index],
      }
    }),
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
    skills: getSkillsFromTheAllSkillsList([
      "React",
      "Typescript",
      "TailwindCSS",
      "React Hook Form",
      "Zod",
      "Immer js",
    ]),
    githubHref: "https://github.com/erik-ferreira/challenge-02-coffee-delivery",
    demoHref: null,
    screenshots: Array.from({ length: 2 }, (_, index) => {
      const imageIndex = String(index + 1).padStart(2, "0")

      return {
        id: index + 1,
        src: `/projects/coffee-delivery/${imageIndex}.png`,
        variant: "image",
        direction: "horizontal",
        altSrc: altsByProjects["coffee-delivery"][index],
      }
    }),
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
    skills: getSkillsFromTheAllSkillsList(["HTML", "CSS", "Javascript"]),
    githubHref: "https://github.com/erik-ferreira/reminder-calendar",
    demoHref: "https://reminder-calendar-virid.vercel.app",
    screenshots: Array.from({ length: 3 }, (_, index) => {
      const imageIndex = String(index + 1).padStart(2, "0")

      return {
        id: index + 1,
        src: `/projects/reminder-calendar/${imageIndex}.png`,
        variant: "image",
        direction: "horizontal",
        altSrc: altsByProjects["reminder-calendar"][index],
      }
    }),
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
    skills: getSkillsFromTheAllSkillsList([
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
    screenshots: Array.from({ length: 6 }, (_, index) => {
      const imageIndex = String(index + 1).padStart(2, "0")

      return {
        id: index + 1,
        src: `/projects/book-wise/${imageIndex}.png`,
        variant: "image",
        direction: "horizontal",
        altSrc: altsByProjects["book-wise"][index],
      }
    }),
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
    skills: getSkillsFromTheAllSkillsList([
      "React",
      "Typescript",
      "Styled Components",
      "Mirage JS",
    ]),
    githubHref: "https://github.com/erik-ferreira/dtmoney",
    demoHref: null,
    screenshots: Array.from({ length: 4 }, (_, index) => {
      const imageIndex = String(index + 1).padStart(2, "0")

      return {
        id: index + 1,
        src: `/projects/dt-money/${imageIndex}.png`,
        variant: "image",
        direction: "horizontal",
        altSrc: altsByProjects["dt-money"][index],
      }
    }),
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
    skills: getSkillsFromTheAllSkillsList([
      "React",
      "Typescript",
      "Next",
      "Sass",
      "Stripe",
      "Fauna DB",
    ]),
    githubHref: "https://github.com/erik-ferreira/ignews",
    demoHref: null,
    screenshots: Array.from({ length: 3 }, (_, index) => {
      const imageIndex = String(index + 1).padStart(2, "0")

      return {
        id: index + 1,
        src: `/projects/ignews/${imageIndex}.png`,
        variant: "image",
        direction: "horizontal",
        altSrc: altsByProjects["ig-news"][index],
      }
    }),
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
    skills: getSkillsFromTheAllSkillsList([
      "React",
      "Typescript",
      "Styled Components",
      "Jest",
    ]),
    githubHref:
      "https://github.com/erik-ferreira/ignite-reactjs-criando-um-hook-de-carrinho-de-compras",
    demoHref: null,
    screenshots: Array.from({ length: 2 }, (_, index) => {
      const imageIndex = String(index + 1).padStart(2, "0")

      return {
        id: index + 1,
        src: `/projects/rocketshoes/${imageIndex}.png`,
        variant: "image",
        direction: "horizontal",
        altSrc: altsByProjects["rocket-shoes"][index],
      }
    }),
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
    skills: getSkillsFromTheAllSkillsList([
      "React",
      "Typescript",
      "Styled Components",
      "Zod",
      "React Hook Form",
      "Immer js",
    ]),
    githubHref: "https://github.com/erik-ferreira/02-ignite-timer",
    demoHref: null,
    screenshots: Array.from({ length: 3 }, (_, index) => {
      const imageIndex = String(index + 1).padStart(2, "0")

      return {
        id: index + 1,
        src: `/projects/ignite-timer/${imageIndex}.png`,
        variant: "image",
        direction: "horizontal",
        altSrc: altsByProjects["ignite-timer"][index],
      }
    }),
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
    skills: getSkillsFromTheAllSkillsList([
      "React",
      "Typescript",
      "TailwindCSS",
      "Radix",
      "Redux Toolkit",
      "Zustand",
    ]),
    githubHref: "https://github.com/erik-ferreira/07-redux-zustand",
    demoHref: null,
    screenshots: Array.from({ length: 3 }, (_, index) => {
      const imageIndex = String(index + 1).padStart(2, "0")

      return {
        id: index + 1,
        src: `/projects/redux-zustand/${imageIndex}.png`,
        variant: "image",
        direction: "horizontal",
        altSrc: altsByProjects["redux-zustand"][index],
      }
    }),
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
    skills: getSkillsFromTheAllSkillsList([
      "React",
      "Typescript",
      "Styled Components",
      "React Hook Form",
      "Zod",
    ]),
    githubHref: "https://github.com/erik-ferreira/challenge-03-github-blog",
    demoHref: "https://challenge-03-github-blog.vercel.app",
    screenshots: Array.from({ length: 3 }, (_, index) => {
      const imageIndex = String(index + 1).padStart(2, "0")

      return {
        id: index + 1,
        src: `/projects/github-blog/${imageIndex}.png`,
        variant: "image",
        direction: "horizontal",
        altSrc: altsByProjects["github-blog"][index],
      }
    }),
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
    skills: getSkillsFromTheAllSkillsList([
      "React",
      "Typescript",
      "TailwindCSS",
    ]),
    githubHref: "https://github.com/erik-ferreira/mastering-tailwind",
    demoHref: null,
    screenshots: Array.from({ length: 2 }, (_, index) => {
      const imageIndex = String(index + 1).padStart(2, "0")

      return {
        id: index + 1,
        src: `/projects/mastering-tailwind/${imageIndex}.png`,
        variant: "image",
        direction: "horizontal",
        altSrc: altsByProjects["mastering-tailwind"][index],
      }
    }),
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
