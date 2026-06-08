export interface DigitalLetter {
  title: string;
  paragraphs: string[];
  signature: string;
  date: string;
  pS?: string;
}

export const letterData: DigitalLetter = {
  title: "Meu Amor,",
  paragraphs: [
    "Dizem que amar é encontrar o próprio lar no coração de outra pessoa. Se isso for verdade, então posso dizer com toda a certeza do mundo que finalmente encontrei o meu lugar de paz.",
    "Olhar para o que construímos até aqui enche meus olhos de água e meu peito de orgulho. Passamos por momentos simples, dividimos segredos gigantescos, rimos de bobagens e nos apoiamos firmemente quando o vento soprou mais forte em nossas vidas.",
    "A cada dia que passa, eu me apaixono por novos detalhes seus: o som da sua risada quando você está realmente feliz, o seu jeito concentrado ao ler ou ouvir uma música, a calma restauradora que você transmite apenas por estar no mesmo ambiente que eu.",
    "Você transformou os meus dias comuns em uma poesia real e bonita. Obrigado(a) por ser meu cais seguro, meu porto e minha dupla favorita de todas as horas.",
    "Que possamos continuar escrevendo este livro juntos, página por página, com a certeza de que o melhor capítulo sempre será o próximo."
  ],
  signature: "Com todo o carinho e o amor do mundo, para sempre seu baby",
  date: "Dia dos Namoridos",
  pS: "P.S.: Prepare-se, porque os nossos sonhos estão esperando para serem vividos!"
};
