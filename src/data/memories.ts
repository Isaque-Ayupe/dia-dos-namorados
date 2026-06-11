import oscar from "../assets/oscar.jpeg"
import parque from "../assets/pedido_pai.jpeg"
import suaFamilia from "../assets/Sua_familia.jpeg"
import treinos from "../assets/treinosdnv.jpeg"

export interface MemoryCard {
  id: string;
  category: string;
  title: string;
  shortDescription: string;
  fullStory: string;
  image: string;
  icon: string; // lucide icon name
  date: string;
}

export const memoriesData: MemoryCard[] = [
  {
    id: "m1",
    category: "Natal",
    title: "Época de Natal",
    shortDescription: "Como você magicamente me fez ligar MUITO pra essa data.",
    fullStory: "Nessa época a gente não era namorido ainda, mas eu lembro que você se mostrou MUITO apaixonada pelo natal, e sendo bem sincero eu tinha perdido qualquer magia por esta data.\n\n Mas depois que a gente foi no Oscar Nymeyer, Amor, Eu me apaixonei por essa época. Toda a ideia de troca presentes e estar com a família, me encantou. E eu trago esses momentos de Natal, no geral, com muito carinho mesmo, por hoje eu possio dizer que é minha época preferida do ano!!",
    image: oscar,
    icon: "Compass",
    date: "Dezembro"
  },
  {
    id: "m2",
    category: "Parque",
    title: "Nossas idas ao Parque",
    shortDescription: "O quanto nossas idas a natureza são importantes",
    fullStory: "Como foto eu coloquei o dia que eu pedi em você em namoro pro seu pai kkkkkk. Esse dia foi muito engraçado por que apesar de eu estar me preparando a muito tempo para este dia, voce me pegou desprevenido KKKKK. Mas eu queria falar, no geral, o quanto esse parque é importante para nós kkkkkk. \n\n A gente Já passou por tanta coisa lá, discussoes, choros confusos KKKKK, musicas e conversas, corridas e tudo mais. Nao da pra pensar na gente e nao lembrar desse parque. \n\n E eu amo isso demais. Amo cada tarde que passamos ali e vou guardar sempre pq isso é extremamente importante para eu.",
    image: parque,
    icon: "HeartHandshake",
    date: "Sempre"
  },
  {
    id: "m3",
    category: "Família",
    title: "Momentos em famiília",
    shortDescription: "O quanto os momentos em família são importantes para mim",
    fullStory: "Separei esse aqui para lembrar o quanto os momentos com sua familia se tornaram especiais. No momento que minha familia estava se despedaçando, eu me senti muito, MUITO MESMO acolhido por sua familia e isso foi extremamente importante para mim meu amo. \n\n Esse dia ai, é uma prova que quando a gente junta, sai umas risada mt boa e eu amo isso kkkkkkkk. Obrigado por me tratar como parte da sua família meu amor.",
    image: suaFamilia,
    icon: "HeartHandshake",
    date: "Sempre"
  },
  {
    id: "m4",
    category: "Academia",
    title: "Academia é nossa historia",
    shortDescription: "O quanto a academia está envolvida em quem a gente é e como viramos quem somos.",
    fullStory: "Nossa primeira vez se vendo nao podia ser em outro lugar né KKKKK. Treinando e brigando KKKKKKK. Mas nao da pra negar que a academia é simplesmente parte de nós e do nosso relacionamento. \n\n E eu levo isso com muito carinho comigo, e acho que os momentos que temos juntos treinando são simplesmente um dos melhores. É algo que eu quero compartilhar com voce todos os dias quando a gente casar ta?",
    image: treinos,
    icon: "Mic",
    date: "Outubro de 2025"
  }
];
