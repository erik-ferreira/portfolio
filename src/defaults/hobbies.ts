import { HobbyDTO, HobbyDefault } from "@/dtos/HobbyDTO"

const hobbiesDefault: HobbyDefault[] = [
  {
    title: "Amigos 🫱🏻‍🫲🏾",
    src: "/hobbies/basquete.png",
    description:
      "Uma das coisas que mais amo fazer é sair com meus amigos. Sempre que possível, combinamos de assistir a algum filme no cinema, visitar uma hamburgueria nova para comparar quais são as melhores opções ou apenas nos reunir na casa de alguém para jogar videogame e bater papo. Muitos deles conheci durante o ensino fundamental e médio, e valorizo cada momento que compartilhamos. Apesar da rotina nos manter ocupados, cada encontro é especial e eu amei muito viver diariamente com cada um deles na escola. Outros amigos chegaram mais tarde em minha vida, mas são igualmente importantes. Cada um deles tem um lugar especial no meu coração e abaixo compartilho algumas fotos desses momentos memoráveis juntos.",
  },
  {
    title: "Basquete 🏀",
    src: "/hobbies/basquete.png",
    description:
      "Comecei a jogar basquete em 2018, durante o segundo ano do ensino médio. Inicialmente, era apenas um hobby, algo novo que eu estava aprendendo e gostando muito. Após o fim da pandemia, quando as restrições diminuíram, voltei a jogar de forma mais séria, comecei a treinar diariamente, sempre buscando aprender coisas novas. Comecei a frequentar a praça aqui perto de casa, e jogando com uma galera top pude aprender e passar algumas coisas que sabia para uma galera mais nova, e hoje em dia alguns deles são monstros demais jogando. Outra praça que eu comecei a frequentar com mais frequência foi a do Garden, e la eu pude aprender demais, demais mesmo com toda a galera, consegui desenvolver melhor meu arremesso, controle de bola e confiança. Aprendi muito escutando o que eles tinham a dizer e assistindo eles jogando mesmo. Hoje em dia o basquete é uma terapia para mim, eu literalmente esqueço qualquer problema quando estou em quadra, é algo que eu amo fazer e não consigo me ver sem isso.",
  },
  {
    title: "Gameplays 🎮",
    src: "/hobbies/basquete.png",
    description:
      "Jogo videogames há bastante tempo, desde os tempos do PlayStation 1. Meus pais compraram um PlayStation 2 para mim e depois passei a montar meu próprio PC para jogar, buscando uma maior variedade de jogos. Considero os videogames como uma forma de diversão, relaxamento, competição com amigos e, às vezes, acontece os estresses que quem joga sabe como é kkkk. Meu estilo de jogo preferido são os FPS e jogos com uma história/campanha a seguir. Durante a adolescência, passei muito tempo jogando Combat Arms, que por mais que não seja um jogo muito conhecido, eu me divertia muito jogando. Em relação aos jogos com história, tenho uma lista extensa de títulos que ainda pretendo jogar, como Dying Light, Mad Max, entre outros. Abaixo, compartilho algumas fotos de jogos que finalizei e momentos marcantes.",
  },
  {
    title: "Assistir 📺",
    src: "/hobbies/basquete.png",
    description:
      "Sempre tive o hábito de assistir filmes com meus pais em casa, principalmente durante as refeições. Quando criança, nós não tínhamos acesso as plataformas de filmes e series, então nossa opção eram os DVDs, mas com a modernização, nós nos desfizemos dos DVDs e começamos a assistir pelas plataformas e internet mesmo. Por esse costume, eu sou o tipo de pessoa que senta para almoçar e fica 30 minutos procurando algo para assistir, comendo apenas depois de achar kkkk. Gosto de vários gêneros de filmes, desde super-heróis e ação até comédia, mas também sou apaixonado por animes como One Piece, Dragon Ball, Naruto, Jujutsu Kaisen, Boku no Hero, entre outros. Abaixo, compartilho alguns dos filmes, séries e animes que já assisti.",
  },
]

export const hobbies: HobbyDTO[] = hobbiesDefault.map((hobby, index) => ({
  id: index + 1,
  href: `/hobbies/${index + 1}`,
  ...hobby,
}))
