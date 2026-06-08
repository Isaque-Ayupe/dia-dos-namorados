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
    title: "Conhecer a Itália de trem",
    description: "Caminhar pelas ruelas históricas, comer massas maravilhosas e tomar sorvete em Florença de mãos dadas.",
    defaultChecked: false,
    category: "Viagem"
  },
  {
    id: "d2",
    title: "Montar a nossa parede de fotos física",
    description: "Imprimir as fotos polaroides mais bonitas e espalhá-las pela casa inteira junto com ingressos de shows e bilhetinhos.",
    defaultChecked: true,
    category: "Cotidiano"
  },
  {
    id: "d3",
    title: "Adotar um bichinho de estimação juntos",
    description: "Dar um lar para um cachorro ou gatinho abandonado e passar horas escolhendo um nome absurdamente fofo ou engraçado.",
    defaultChecked: false,
    category: "Futuro"
  },
  {
    id: "d4",
    title: "Maratona completa de filmes em um dia de chuva",
    description: "Preparar baldes gigantescos de pipoca, vestir os pijamas mais confortáveis e não colocar o pé para fora de casa por 24 horas inteiras.",
    defaultChecked: true,
    category: "Divertido"
  },
  {
    id: "d5",
    title: "Morar num cantinho com jardim ou varanda ensolarada",
    description: "Para tomarmos o café da manhã de domingo juntos, rodeados de plantinhas cuidadas por nós dois enquanto o sol mansa entra pelas janelas.",
    defaultChecked: false,
    category: "Futuro"
  },
  {
    id: "d6",
    title: "Ver o nascer do sol no topo de uma montanha",
    description: "Acampar sobre as nuvens, preparar o café numa caneca de alumínio e ver as luzes douradas pintando um novo dia juntos.",
    defaultChecked: false,
    category: "Aventura"
  },
  {
    id: "d7",
    title: "Continuar mandando memes imbecis e rindo até nascer rugas",
    description: "Mesmo velhinhos, trocando piadas internas no sofá e cuidando um do outro com a mesma leveza de quem acabou de se apaixonar.",
    defaultChecked: true,
    category: "Divertido"
  }
];
