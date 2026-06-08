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
    date: "10 de Fevereiro de 2024",
    title: "O Começo de Tudo",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop",
    description: "Aquele primeiro café juntos, onde as horas pareceram minutos. Entre olhares tímidos e sorrisos bobos, percebemos que não seria apenas mais um encontro, mas o primeiro capítulo de algo extraordinário."
  },
  {
    id: "2",
    date: "23 de Março de 2024",
    title: "O Primeiro Beijo e a Certeza",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop",
    description: "Sob um céu azul com nuvens suaves de fim de tarde. O som da nossa risada silenciou e, naquele segundo, o mundo pareceu parar para que o nosso amor pudesse começar de verdade."
  },
  {
    id: "3",
    date: "12 de Junho de 2024",
    title: "O Nosso Pedido de Namoro",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=800&auto=format&fit=crop",
    description: "Uma noite fria e aconchegante, à luz de velas e música suave ao fundo. Fazer aquele pedido foi a decisão mais fácil e inspiradora da minha vida. Responder 'sim' uniu de vez as nossas trajetórias."
  },
  {
    id: "4",
    date: "07 de Setembro de 2024",
    title: "Nossa Primeira Viagem Juntos",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop",
    description: "A estrada aberta, o vento no rosto e as nossas músicas favoritas cantadas em uníssono. Ver o nascer do sol ao seu lado em outro lugar me fez entender que meu destino favorito é sempre você."
  },
  {
    id: "5",
    date: "25 de Dezembro de 2024",
    title: "Nosso Primeiro Natal Integrados",
    image: "https://images.unsplash.com/photo-1517263904008-797480d25147?q=80&w=800&auto=format&fit=crop",
    description: "Reunidos sob luzes pisca-pisca quentes, compartilhando sonhos e rituais familiares novos que criamos só para nós dois. O melhor presente que a vida poderia me dar já estava ali, segurando minha mão."
  }
];
