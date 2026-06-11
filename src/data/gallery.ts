import fofo_fofa from "../assets/fofo_fofa.jpeg"
import dia_do_shopping from "../assets/dia_do_shopping.jpeg"
import foto_espelho from "../assets/foto_espelho.jpeg"
import foto_favorita from "../assets/Foto_favorita.jpeg"
import foto_incrivel from "../assets/foto_incrivel.jpeg"
import treinos from "../assets/treinos.jpeg"

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  location: string;
  date: string;
  description: string;
  aspectRatio: string; // for elegant visual rhythm in the grid (e.g. 'aspect-[3/4]', 'aspect-square', 'aspect-[4/3]')
}

export const galleryData: GalleryItem[] = [
  {
    id: "g1",
    image: fofo_fofa,
    title: "Fazendo mascara juntos",
    location: "Sua House",
    date: "Julho de 2025",
    description: "Juntos, fazendo mascara e tirando foto fazendo gracinha, cuidando da pele kkkkk. Não sei por que esse dia pra mim foi MUITO LEGAL.",
    aspectRatio: "aspect-[3/4]"
  },
  {
    id: "g2",
    image: dia_do_shopping,
    title: "Noite de Risadas e Pizza",
    location: "Dia do shopping",
    date: "Agosto de 2025",
    description: "Em um domingo qualquer a gente decidiu ir no shopping, e foi EXCELENTE. A gente comeu mania de churrasco e descobriu aquele milkshake de pistache incrivel! Aquele dia foi ótimo!",
    aspectRatio: "aspect-square"
  },
  {
    id: "g3",
    image: foto_espelho,
    title: "Essa foto",
    location: "sua House",
    date: "Dezembro de 2025",
    description: "Não lembro muito bem desse dia, mas lembro dessa foto, e por algum motivo, eu amo ela. Sinto q de alguma forma ela representa nosso relacionamento sabe?",
    aspectRatio: "aspect-[4/3]"
  },
  {
    id: "g4",
    image: foto_favorita,
    title: "Nosso 1 ano",
    location: "Casa São Paulo",
    date: "Janeiro de 2026",
    description: "Apesar dos pesares, olha essa foto tipo QUE LINDA AMOOO. Eu gosto demais dela KKKKK. Eu tenho lembranças mt boas desse dia, e do que nosso relacionamento significa pra eu. Já disse que te amo hoje? Por que eu te amo muito viuu.",
    aspectRatio: "aspect-[3/4]"
  },
  {
    id: "g5",
    image: foto_incrivel,
    title: "Candle Light",
    location: "Candle Light",
    date: "Agosto de 2025",
    description: "Showzinho simplesmente épico, comigo cantando junto com os violino KKKKKK. Esse dia foi simplesmente perfeito. A gente tava super chique ouvindo um quarteto de cordas meoorrr. Sensacional!",
    aspectRatio: "aspect-square"
  },
  {
    id: "g6",
    image: treinos,
    title: "Nossos treinos",
    location: "Academias",
    date: "Desde a primeira vez",
    description: "Eu usei essa foto pra falar dos nosso treinos no geral. Essa é minha foto favorita de nós na academia. E não da pra negar que academia faz parte da nossa história, até por que a gnt começou a se conhecer em uma academia né KKKKK.",
    aspectRatio: "aspect-[4/3]"
  }
];
