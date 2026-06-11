import primeiravez from "../assets/primeiravez.jpeg";
import primeira_saida from "../assets/primeira_saida.jpeg";
import pedido_namoro from "../assets/pedido.jpeg";
import primeiro_dia12 from "../assets/primeiro_dia12.jpeg";
import aniversario_ana from "../assets/aniversaro_ana.jpeg";



export interface TimelineItem {
  id: string;
  date: string;
  title: string;
  image: string;
  description: string;
}

export const timelineData: TimelineItem[] = [
  {
    id: "1",
    date: "10 de outubro 2024",
    title: "O Começo de Tudo",
    image: primeiravez,
    description: "A primeira vez que eu te mandei mensagem, depois de 2 semanas ensaiando e muito nervoso, criei coragem pra falar: 'É seu aniversário fia?'"
  },
  {
    id: "2",
    date: "23 de Março de 2024",
    title: "Primeira saida",
    image: primeira_saida,
    description: "Depois de passar vergonha com minha familia inteira la, e vestir umas roupinhas na centauro, a gente tirou essa foto KKKKK. Foi nossa primeira saida de fato pra se conhecer melhor."
  },
  {
    id: "3",
    date: "08 de janeiro de 2025",
    title: "O Nosso Pedido de Namoro",
    image: pedido_namoro,
    description: "Depois de 3 meses, uma conversa engraçada com seu pai e muita oração e amor, nosso início de fato como casal. Eu posso dizer com toda certeza que a cena de voce dizendo sim para mim (e nosso primeio kiss) é top 2 melhores dias da minha vida!!!"
  },
  {
    id: "4",
    date: "11 de maio de 2025",
    title: "seu aneversáro",
    image: aniversario_ana,
    description: "Depois de comer pizza atéee, a gente tirou essa fotinha que na minha opinião ficou maaaaisss que linda!!!"
  },
  {
    id: "5",
    date: "12 de Junho de 2025",
    title: "Nosso Primeiro dia dos namoridos",
    image: primeiro_dia12,
    description: "Depois de uma vergonha na empresa e todo mundo do studio reis vendo um moço bonito na frente da empresa com um buque enorme, a gente teve nosso primeiro dia dos namoridos juntinhossssss, e caramba foi mucho legalll"
  }
];
