import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Key, X, Sparkles, Heart, ChevronLeft, ChevronRight, Lock } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

interface SecretMessage {
  id: number;
  trigger: string;
  revealedText: string;
  hint: string;
}

export default function SecretMessages() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeMessageIdx, setActiveMessageIdx] = useState(0);

  const secrets: SecretMessage[] = [
    {
      id: 1,
      trigger: "Sobre aquele casaco cinza...",
      revealedText: "Sabe aquele casaco de tricô cinza que você achou que tinha esquecido em algum restaurante? Devo confessar que ele está guardado no meu armário há meses. Eu uso ele de vez em quando só para me sentir pertinho do seu cheiro quando a saudade aperta demais.",
      hint: "Um segredo de guarda-roupa"
    },
    {
      id: 2,
      trigger: "O ensaio do terceiro encontro",
      revealedText: "Antes de te buscar para o nosso terceiro encontro, eu fiquei exatamente 45 minutos ensaiando na frente do espelho o que falar para não parecer gago ou nervoso. No fim das contas eu travei de qualquer jeito, mas ver você sorrir me desarmou por completo.",
      hint: "Minha timidez fofa"
    },
    {
      id: 3,
      trigger: "A pasta oculta no celular",
      revealedText: "Eu tenho uma pasta secreta e protegida por senha no meu celular contendo mais de cem fotos suas dormindo no carro, comendo desajeitadamente ou fazendo caretas distraídas. Você fica absurdamente adorável sendo você mesmo e eu protejo essa coleção como ouro.",
      hint: "Preciosidades secretas"
    },
    {
      id: 4,
      trigger: "O momento exato em que soube",
      revealedText: "Foi no início de Junho passado, quando você estava cantando uma música completamente errada na cozinha e dançando segurando uma colher de silicone. Olhei para aquela cena boba e pensei: 'Pronto, é com esse ser humano fascinante que eu quero passar o resto da minha vida'.",
      hint: "A revelação silenciosa"
    }
  ];

  // Lock body scroll on overlay active
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modalOpen]);

  const handleNext = () => {
    setActiveMessageIdx((prev) => (prev + 1) % secrets.length);
  };

  const handlePrev = () => {
    setActiveMessageIdx((prev) => (prev - 1 + secrets.length) % secrets.length);
  };

  return (
    <div className="w-full flex justify-center py-6 bg-brand-beige pb-20 select-none border-b border-brand-sand/35">
      {/* EXTREMELY DISCRETE EASTER EGG FLUSH TRIGGER BUTTON */}
      <AnimatedSection direction="up" delay={0.2} className="text-center">
        <button
          onClick={() => setModalOpen(true)}
          id="btn-secret-area"
          className="group flex items-center gap-2.5 px-5 py-2.5 bg-brand-darkbeige hover:bg-brand-sand border border-brand-sand/40 text-brand-rose hover:text-brand-charcoal rounded-full text-[10px] font-mono tracking-widest uppercase transition-all duration-300 transform active:scale-97 cursor-pointer font-bold"
        >
          <Lock size={11} className="transition-transform group-hover:scale-110" />
          <span>Abrir Chaveiro de Confissões</span>
        </button>
      </AnimatedSection>

      {/* EASTER EGG MODAL SHELF */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-charcoal/90 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-6"
          >
            {/* Overlay background close */}
            <div className="absolute inset-0" onClick={() => setModalOpen(false)} />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              transition={{ type: "spring", damping: 26, stiffness: 150 }}
              className="relative w-full max-w-lg bg-gradient-to-b from-[#FFFDFB] to-brand-beige rounded-3xl p-6 sm:p-10 shadow-2xl border border-brand-sand/35 overflow-hidden z-40"
            >
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-brand-rose/40 to-transparent" />

              {/* Close Button */}
              <button
                onClick={() => setModalOpen(false)}
                id="close-secrets"
                className="absolute top-4 right-4 p-2 text-brand-taupe hover:text-brand-charcoal bg-brand-darkbeige rounded-full transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>

              {/* Header */}
              <div className="text-center space-y-2 mb-8">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-rose/10 text-brand-rose mx-auto">
                  <Key size={14} className="animate-spin-slow" />
                </div>
                <h3 className="font-serif text-lg md:text-xl text-brand-charcoal tracking-tight font-normal">
                  Notas de Amor Confidenciais
                </h3>
                <p className="text-[10px] uppercase font-mono tracking-widest text-brand-taupe font-bold">
                  Mensagem {activeMessageIdx + 1} de {secrets.length}
                </p>
              </div>

              {/* Secret Note display inside a sweet polaroid memo */}
              <div className="min-h-[190px] bg-white border border-brand-sand/35 p-5 sm:p-6.5 rounded-2xl shadow-inner relative flex flex-col justify-between">
                <div className="absolute top-2.5 right-3.5 text-brand-rose/20 pointer-events-none">
                  <Sparkles size={16} />
                </div>

                <div className="space-y-3 flex-1 flex flex-col justify-center">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#B76E79] font-bold">
                    #{secrets[activeMessageIdx].hint}
                  </span>
                  <h4 className="font-serif italic text-brand-charcoal text-base leading-snug">
                    "{secrets[activeMessageIdx].trigger}"
                  </h4>
                  <p className="text-[#3E3832] font-light text-xs sm:text-sm leading-relaxed whitespace-pre-line pt-2">
                    {secrets[activeMessageIdx].revealedText}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-brand-sand/15 flex items-center gap-1 text-[10px] text-brand-taupe font-mono font-semibold">
                  <Heart size={10} className="fill-current text-brand-rose shrink-0 animate-pulse" />
                  <span>Cadeado desbloqueado com sucesso</span>
                </div>
              </div>

              {/* Slider Navigations and action footer */}
              <div className="flex justify-between items-center mt-8 pt-4 border-t border-brand-sand/20">
                <button
                  onClick={handlePrev}
                  className="p-2 bg-brand-darkbeige hover:bg-brand-sand text-brand-charcoal hover:text-brand-rose rounded-xl transition-all cursor-pointer flex items-center"
                >
                  <ChevronLeft size={16} />
                </button>

                <button
                  onClick={() => setModalOpen(false)}
                  className="font-serif italic text-xs text-brand-taupe hover:text-brand-rose py-1.5 px-3 hover:bg-white rounded-full transition-colors cursor-pointer font-semibold"
                >
                  Guardar Novamente
                </button>

                <button
                  onClick={handleNext}
                  className="p-2 bg-brand-darkbeige hover:bg-brand-sand text-brand-charcoal hover:text-brand-rose rounded-xl transition-all cursor-pointer flex items-center"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
