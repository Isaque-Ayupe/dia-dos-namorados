import { Compass, Sparkles, Heart, Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function ThingsAboutYou() {
  const admireList = [
    "Sua capacidade incrível de iluminar qualquer sala apenas com o som da sua risada.",
    "A força serena com que você lida com os desafios, sempre mantendo a integridade.",
    "O brilho entusiasmado que surge nos seus olhos quando você fala de algo que ama de verdade.",
    "Sua empatia genuína e a maneira linda como acolhe as fraquezas humanas ao seu redor.",
    "A delicadeza mágica do seu toque, que tem o superpoder de desarmar qualquer cansaço meu."
  ];

  const thanksList = [
    "Existir nesta mesma época e aceitar dividir o seu milagre da vida comigo.",
    "Cada café preparado com carinho nas manhãs em que a preguiça me dominava.",
    "Os silêncios doces e confortáveis onde palavras não eram de forma alguma necessárias.",
    "Sempre me segurar com firmeza quando o mundo lá fora parecia confuso demais.",
    "Me escolher voluntariamente, com ternura e generosidade, todos os dias."
  ];

  const lessonsList = [
    "Que o verdadeiro amor não aperta nem sufoca; ele liberta, acolhe e expande os nossos limites.",
    "A ver beleza nos imprevistos e encontrar paciência no meio do caos cotidiano.",
    "A valorizar o eterno 'hoje' em vez de passar semanas ansioso por um futuro abstrato.",
    "Dizer 'desculpe' com honestidade e abraçar as imperfeições que nos tornam humanos.",
    "Que dois corações batendo no mesmo compasso conseguem enfrentar qualquer tempestade na vida."
  ];

  return (
    <section id="things-about-you" className="py-24 px-4 bg-brand-beige select-none border-t border-brand-sand/35">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <AnimatedSection direction="down" className="inline-flex items-center gap-1.5 text-brand-rose mb-3">
            <Heart size={14} className="fill-current animate-pulse" />
            <span className="font-serif italic text-sm">Segredos Compartilhados</span>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <h2 className="font-serif text-3xl md:text-5xl text-brand-charcoal tracking-tight leading-tight">
              Coisas que Você Talvez Não Saiba
            </h2>
            <div className="w-12 h-[2px] bg-brand-rose mx-auto mt-6" />
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.3} className="mt-4">
            <p className="text-brand-taupe font-light text-xs md:text-sm max-w-md mx-auto">
              Selecionei pequenos sentimentos silenciosos que guardo no peito com profunda reverência.
            </p>
          </AnimatedSection>
        </div>

        {/* Triple Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 items-start">
          {/* Column 1: Eu Admiro */}
          <AnimatedSection
            direction="up"
            delay={0.1}
            className="bg-white p-7 md:p-8 rounded-2xl border border-brand-sand/40 shadow-xs hover:shadow-md transition-shadow flex-1"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-brand-sand/20">
              <div className="w-10 h-10 rounded-full bg-brand-rose/20 text-brand-rose flex items-center justify-center">
                <Heart size={18} className="fill-current" />
              </div>
              <h3 className="font-serif text-xl text-brand-charcoal">Eu admiro em você</h3>
            </div>

            <ul className="space-y-5">
              {admireList.map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start group">
                  <div className="w-4 h-4 rounded-full bg-brand-beige border border-brand-rose group-hover:bg-brand-rose flex items-center justify-center mt-1 flex-shrink-0 transition-all duration-300">
                    <Check size={9} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-brand-taupe font-light text-xs md:text-sm leading-relaxed">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Column 2: Eu Agradeço por */}
          <AnimatedSection
            direction="up"
            delay={0.2}
            className="bg-white p-7 md:p-8 rounded-2xl border border-brand-sand/40 shadow-xs hover:shadow-md transition-shadow flex-1"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-brand-sand/20">
              <div className="w-10 h-10 rounded-full bg-brand-darkbeige text-brand-taupe flex items-center justify-center">
                <Sparkles size={18} />
              </div>
              <h3 className="font-serif text-xl text-brand-charcoal">Eu agradeço por</h3>
            </div>

            <ul className="space-y-4">
              {thanksList.map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start group">
                  <div className="w-4 h-4 rounded-full bg-brand-beige border border-brand-taupe group-hover:bg-brand-rose flex items-center justify-center mt-1 flex-shrink-0 transition-all duration-300">
                    <Check size={9} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-brand-taupe font-light text-xs md:text-sm leading-relaxed">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Column 3: Você Me Ensinou */}
          <AnimatedSection
            direction="up"
            delay={0.3}
            className="bg-white p-7 md:p-8 rounded-2xl border border-brand-sand/40 shadow-xs hover:shadow-md transition-shadow flex-1"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-brand-sand/20">
              <div className="w-10 h-10 rounded-full bg-brand-sand text-brand-charcoal flex items-center justify-center">
                <Compass size={18} />
              </div>
              <h3 className="font-serif text-xl text-brand-charcoal">Você me ensinou</h3>
            </div>

            <ul className="space-y-4">
              {lessonsList.map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start group">
                  <div className="w-4 h-4 rounded-full bg-brand-beige border border-brand-sand group-hover:bg-brand-rose flex items-center justify-center mt-1 flex-shrink-0 transition-all duration-300">
                    <Check size={9} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-brand-taupe font-light text-xs md:text-sm leading-relaxed">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
