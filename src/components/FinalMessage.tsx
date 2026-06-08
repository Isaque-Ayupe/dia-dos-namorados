import { motion } from "motion/react";
import { Heart } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function FinalMessage() {
  const currentDateFormatted = "8 de Junho de 2026";

  return (
    <section id="final-message" className="min-h-[80vh] flex flex-col justify-center items-center px-4 bg-gradient-to-b from-brand-beige to-[#FFFDFB] select-none text-center relative overflow-hidden border-t border-brand-sand/35">
      
      {/* Centered Minimal Container */}
      <div className="max-w-xl mx-auto space-y-10 z-10 py-16">
        
        {/* Delicate pulsing heart decoration */}
        <AnimatedSection direction="down" duration={1.5} className="flex justify-center">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-12 h-12 rounded-full bg-brand-rose/5 text-brand-rose flex items-center justify-center border border-brand-rose/15 shadow-xs"
          >
            <Heart size={18} className="fill-current text-brand-rose" />
          </motion.div>
        </AnimatedSection>

        {/* Emotion Core statement */}
        <AnimatedSection direction="up" delay={0.4} duration={1.2}>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-charcoal leading-normal tracking-tight font-light">
            "Obrigado por fazer parte da <span className="text-brand-rose italic">melhor história</span> da minha vida."
          </h2>
        </AnimatedSection>

        <div className="w-12 h-[1px] bg-brand-sand/40 mx-auto" />

        {/* Signature & Dating lines */}
        <div className="space-y-2">
          <AnimatedSection direction="up" delay={0.8} duration={1} className="font-serif italic text-base sm:text-lg text-[#B76E79] font-semibold">
            Com amor, infinitamente de mim para você.
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={1} duration={1} className="font-mono text-[10px] tracking-widest text-[#8C7A6B] uppercase font-bold">
            {currentDateFormatted} • Dia dos Namorados
          </AnimatedSection>
        </div>

      </div>

      {/* Decorative details */}
      <div className="absolute bottom-6 font-mono text-[9px] text-[#8C7A6B]/50 tracking-widest uppercase">
        Amor eterno • Handcrafted with love
      </div>
    </section>
  );
}
