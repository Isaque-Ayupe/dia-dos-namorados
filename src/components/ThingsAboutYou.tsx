import { Compass, Sparkles, Heart, Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function ThingsAboutYou() {
  const admireList = [
    "Sua força de vontade sem igual.",
    "Sua beleza descomunal que me fazem me apaixonar cada dia mais por você.",
    "suas piadinhas incriveis que me fazem morrer de rir.",
    "Sua capacidade de encarar a vida como ela é, e buscar sempre ser melhor.",
    "Sua capacidade absurda de me acalmar com um simples toque ou palavra."
  ];

  const thanksList = [
    "Por ter ficado comigo quando pensei que o mundo ia desabar.",
    "Cada cartinha e desenhos absurdos que você faz para mim.",
    "Pelas noites de filmes que eu chorei muito."
  ];

  const lessonsList = [
    "Que um amor não é pesado nem dificil, mas leve e incrivel",
    "A ver a importancia que nossa aparencia pode ter.",
    "A me esforçar mais para termor um futuro brilhante!",
    "Que palavras ditas so por dizer, não valem quanto uma ação de verdade.",
    "Que juntos somos mais fortes!"
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
