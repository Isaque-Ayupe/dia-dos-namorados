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
    category: "Viagem Insólita",
    title: "A Nossa Primeira Grande Viagem Juntos",
    shortDescription: "Com direito a malas trocadas, passagens quase perdidas e o pôr do sol mais inacreditável que já vimos.",
    fullStory: "Parecia que tudo daria errado naquele dia: nosso voo atrasou duas horas, o pneu do carro alugado deu problema logo na saída e as nossas malas foram parar na esteira oposta. No entanto, quando finalmente chegamos ao chalé no topo da colina, cansados e famintos, fomos recebidos por uma lareira crepitante e um céu tão estrelado que parecia pintura.\n\nSentamos no chão, abrimos um vinho simples e dividimos um pacote de salgadinhos rindo de toda a saga. Ali soube que, não importa o destino ou os imprevistos da jornada, ao seu lado qualquer desvio vira uma grande aventura inesquecível.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop",
    icon: "Compass",
    date: "Julho de 2024"
  },
  {
    id: "m2",
    category: "Superação",
    title: "O Dia em que Seguramos Firme a Mão um do Outro",
    shortDescription: "Quando os dias difíceis bateram na nossa porta e percebemos que éramos mais do que apenas namorados: éramos um abrigo seguro.",
    fullStory: "A vida não é feita só de jantares românticos e dias ensolarados. Quando aquele desafio profissional gigante e a saúde delicada de um de nós se misturaram, o medo tentou se instalar. Mas em momento nenhum nos soltamos.\n\nLembro-me perfeitamente de você preparando aquele chá quente tarde da noite, sussurrando que tudo ficaria bem, e do abraço apertado de silêncios compartilhados. Nós não apenas superamos aquela tempestade, mas saímos dela estruturados sob alicerces inabaláveis. Aprendi que amar é ser calmaria em meio ao caos.",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=800&auto=format&fit=crop",
    icon: "HeartHandshake",
    date: "Novembro de 2024"
  },
  {
    id: "m3",
    category: "Cumplicidade Romântica",
    title: "O Primeiro Aniversário Juntos",
    shortDescription: "Uma comemoração que fugiu dos clichês comerciais para focar no que realmente importa: nós dois.",
    fullStory: "Em vez de reservas em restaurantes caros e barulhentos, escolhemos transformar nossa sala em um refúgio exclusivo: espalhamos almofadas pelo carpete, estendemos luzes natalinas e criamos um menu todo nosso, com base em massas e sobremesas deliciosas feitas a quatro mãos.\n\nTrocamos cartas escritas à mão que guardavam as palavras mais sinceras que já ouvimos um do outro. Vimos o tempo passar sem pressa, sem distrações. Foi o aniversário mais simples e, sem dúvidas, o mais inesquecível de todos.",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=800&auto=format&fit=crop",
    icon: "Sparkles",
    date: "Outubro de 2024"
  },
  {
    id: "m4",
    category: "Diversão e Sintonia",
    title: "A Tarde do Karaokê Improvisado",
    shortDescription: "Descobrindo que nossa sintonia fina funciona até quando desafinamos lindamente cantando clássicos.",
    fullStory: "Uma tarde chuvosa sem nada planejado na agenda. De repente, uma escova de cabelo virou microfone e a TV da sala virou o palco central do maior show de rock brega já visto. Cantamos de Sandy & Junior a clássicos italianos dramáticos, fazendo coreografias espalhafatosas no sofá.\n\nVer você se entregar ao ridículo com tanta leveza e rir até chorar comigo me lembrou do porquê eu te amo tanto: a nossa maturidade é linda, mas a nossa habilidade de sermos crianças juntos é sagrada.",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd6a?q=80&w=800&auto=format&fit=crop",
    icon: "Mic",
    date: "Janeiro de 2025"
  }
];
