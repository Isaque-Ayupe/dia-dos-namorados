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
    image: "https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?q=80&w=800&auto=format&fit=crop",
    title: "Olhando o Infinito Conectados",
    location: "Mirante da Montanha",
    date: "Julho de 2024",
    description: "Sentados no capô do carro, as luzes da cidade cintilando ao fundo como estrelas caídas. O vento estava gelado, mas o calor do seu abraço aquecia minha alma por inteiro.",
    aspectRatio: "aspect-[3/4]"
  },
  {
    id: "g2",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop",
    title: "Noite de Risadas e Pizza",
    location: "Nossa Cozinha",
    date: "Agosto de 2024",
    description: "Farinha por todo lado, uma receita que falhou de forma hilária e nós rindo tanto que a barriga doía. É no caos do comum que descobrimos a perfeição da nossa parceria.",
    aspectRatio: "aspect-square"
  },
  {
    id: "g3",
    image: "https://images.unsplash.com/photo-1537655780520-1e392edd816a?q=80&w=800&auto=format&fit=crop",
    title: "Chuva Inesperada",
    location: "Parque da Cidade",
    date: "Outubro de 2024",
    description: "O piquenique foi interrompido por um temporal repentino. Corremos de mãos dadas, ensopados e gargalhando, nos abrigando embaixo de uma árvore antiga. Momentos imperfeitos criam as melhores memórias.",
    aspectRatio: "aspect-[4/3]"
  },
  {
    id: "g4",
    image: "https://images.unsplash.com/photo-1544982503-9f984c14501a?q=80&w=800&auto=format&fit=crop",
    title: "Pôr do Sol Dourado",
    location: "À Beira-Mar",
    date: "Janeiro de 2025",
    description: "O céu tingido de tons terracota, rosa e violeta. Você estava sorrindo distraído(a), e eu bati essa foto pensando no quanto sou afortunado(a) por viver a vida na mesma sintonia que você.",
    aspectRatio: "aspect-[3/4]"
  },
  {
    id: "g5",
    image: "https://images.unsplash.com/photo-1475483768296-6163e08872a1?q=80&w=800&auto=format&fit=crop",
    title: "Café de Domingo Confortável",
    location: "Nossa Sala",
    date: "Março de 2025",
    description: "A preguiça doce de um domingo chuvoso, pés entrelaçados sob a coberta macia e o barulho de gotas na janela. Se o aconchego tivesse uma imagem oficial, seria exatamente este instante.",
    aspectRatio: "aspect-square"
  },
  {
    id: "g6",
    image: "https://images.unsplash.com/photo-1507504038482-762100626643?q=80&w=800&auto=format&fit=crop",
    title: "Caminhada Iluminada",
    location: "Centro Histórico",
    date: "Maio de 2025",
    description: "A beleza crua do entardecer refletindo nas ruas de paralelepípedo. Caminhar ao seu lado é ver encanto nas menores frestas e nas esquinas mais discretas da cidade.",
    aspectRatio: "aspect-[4/3]"
  }
];
