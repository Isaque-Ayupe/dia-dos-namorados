export interface Dream {
  id: string;
  title: string;
  description: string;
  defaultChecked: boolean;
  category: "Viagem" | "Cotidiano" | "Aventura" | "Futuro" | "Divertido";
}

export const dreamsData: Dream[] = [
  {
    id: "d1",
    title: "Ir para Europa",
    description: "Conhecer a torre eifel, o coliseu, e a grécia de mãos dadas, tirando muitas fotos e saindo bem romanticus. kkkk",
    defaultChecked: false,
    category: "Viagem"
  },
  {
    id: "d2",
    title: "Comprar nossa casa",
    description: "Ter o lugar pra chamar de nosso, com a nossa cara",
    defaultChecked: false,
    category: "Futuro"
  },
  {
    id: "d3",
    title: "Frolis",
    description: "Ganhar frolis...",
    defaultChecked: true,
    category: "Cotidiano"
  },
  {
    id: "d4",
    title: "Cantar juntos",
    description: "Sim, isso era um sonho meu, e a gente realizou e de verdade, amo cantar com você",
    defaultChecked: true,
    category: "Cotidiano"
  },
  {
    id: "d5",
    title: "Casar",
    description: "Nao tem como ne, nosso maior sonho é Casarrrrrrr.",
    defaultChecked: false,
    category: "Futuro"
  },
  {
    id: "d6",
    title: "Ir em um parque de pula pula e num karaoke",
    description: "Vai por mim, eu sonho com isso por que acho que a gente vai se divertir demais kkkkkkkkk",
    defaultChecked: false,
    category: "Divertido"
  }
];
