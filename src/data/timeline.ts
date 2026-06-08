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
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop",
    description: "A primeira vez que eu te mandei mensagem, depois de 2 semanas ensaiando e muito nervoso, criei coragem pra falar: 'É seu aniversário fia?'"
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
    date: "08 de janeiro de 2025",
    title: "O Nosso Pedido de Namoro",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=800&auto=format&fit=crop",
    description: "Depois de 3 meses, uma conversa engraçada com seu pai e muita oração e amor, nosso início de fato como casal. Eu posso dizer com toda certeza que a cena de voce dizendo sim para mim (e nosso primeio kiss) é top 2 melhores dias da minha vida!!!"
  },
  {
    id: "4",
    date: "12 de Junho de 2025",
    title: "Nosso Primeiro dia dos namoridos",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop",
    description: "Depois de uma vergonha na empresa e todo mundo do studio reis vendo um moço bonito na frente da empresa com um buque enorme, a gente teve nosso primeiro dia dos namoridos juntinhossssss, e caramba foi mucho legalll"
  },
  {
    id: "5",
    date: "25 de Dezembro de 2024",
    title: "Nosso Primeiro Natal Integrados",
    image: "https://images.unsplash.com/photo-1517263904008-797480d25147?q=80&w=800&auto=format&fit=crop",
    description: "Reunidos sob luzes pisca-pisca quentes, compartilhando sonhos e rituais familiares novos que criamos só para nós dois. O melhor presente que a vida poderia me dar já estava ali, segurando minha mão."
  }
];
