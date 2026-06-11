import { motion } from "motion/react";
import { Heart, Sparkles, ChevronDown } from "lucide-react";
import heroImage from "../assets/Foto_favorita_minha.jpeg";


interface HeroSectionProps {
  onStartClick: () => void;
  userNickname?: string;
  onLogout?: () => void;
}

export default function HeroSection({ onStartClick, userNickname, onLogout }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-between items-center px-4 py-8 md:py-12 bg-gradient-to-b from-brand-beige via-[#FFFDFB] to-brand-beige overflow-hidden select-none">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-brand-rose/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-brand-terracotta/5 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Sparkles & Hearts */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[10%] text-brand-rose/30 hidden md:block"
      >
        <Sparkles size={28} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 12, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 right-[12%] text-brand-rose/40 hidden md:block"
      >
        <Heart size={24} className="fill-current" />
      </motion.div>

      {/* Header Signature */}
      <div className="w-full max-w-5xl flex justify-between items-center z-10 border-b border-brand-sand/50 pb-4">
        <span className="font-serif text-xs tracking-[0.2em] text-brand-taupe uppercase font-semibold">
          UM POUCO DA NOSSA HISTÓRIA
        </span>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-brand-rose">
            <Heart size={14} className="fill-current animate-pulse" />
            <span className="font-serif italic text-xs tracking-wider">Eternamente</span>
          </div>
          {onLogout && (
            <button
              onClick={onLogout}
              className="text-[10px] font-mono uppercase tracking-[0.15em] text-brand-taupe hover:text-brand-rose transition-all duration-300 cursor-pointer border border-brand-sand hover:border-brand-rose rounded px-2.5 py-1"
            >
              Sair
            </button>
          )}
        </div>
      </div>

      {/* Main Content Card/Visual Frame */}
      <div className="w-full max-w-4xl flex flex-col lg:flex-row items-center gap-10 lg:gap-14 my-auto z-10">
        {/* Fine Framed Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-sm sm:max-w-md lg:max-w-none flex-1 aspect-[4/5] p-3 bg-white rounded-2xl shadow-xl shadow-stone-200/50 border border-stone-100"
        >
          <div className="absolute inset-0 border border-brand-rose/20 rounded-2xl m-5 pointer-events-none z-10" />
          <img
            src={heroImage}
            alt="Nosso Amor"
            className="w-full h-full object-cover rounded-xl grayscale-[15%] brightness-[97%] contrast-[102%]"
            referrerPolicy="no-referrer"
          />
          {/* Subtle label on the bottom corner of image */}
          <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-full shadow-md text-[10px] uppercase tracking-widest font-mono text-brand-taupe border border-stone-100 z-10">
            Nós dois • Juntinhos
          </div>
        </motion.div>

        {/* Narrative Greetings */}
        <div className="flex-1 text-center lg:text-left flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-brand-darkbeige text-brand-rose text-[10px] font-bold uppercase tracking-widest rounded-full w-fit mx-auto lg:mx-0 mb-6"
          >
            <Sparkles size={12} className="text-brand-rose" />
            Uma Declaração pro meu mozão
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-charcoal tracking-tight leading-[1.15] mb-5"
          >
            {userNickname ? (
              <>
                Para meu <span className="text-brand-rose italic">{userNickname}</span>, a pessoa que transformou <span className="text-brand-rose italic">dias comuns</span> em memórias inesquecíveis.
              </>
            ) : (
              <>
                Para a pessoa que transformou <span className="text-brand-rose italic">Dias paias</span> em momentos incríveis
              </>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-[#5E5852] text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0 mb-8 font-sans font-light"
          >
            Eu quis juntar minhas incriveis e <span className="text-brand-rose italic">(e humildes)</span> habilidades, pra trazer um pouco da nossa história. então pega o tiramitobas e simbora.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <button
              onClick={onStartClick}
              id="btn-start"
              className="group relative px-8 py-4 bg-brand-charcoal text-white rounded-full font-sans text-xs uppercase tracking-widest shadow-lg hover:shadow-xl hover:shadow-stone-200 transition-all duration-300 transform active:scale-98 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center gap-2">
                Começar a incrivel expriência
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </div>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.7, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 1.5 }}
        className="flex flex-col items-center gap-1.5 cursor-pointer z-10"
        onClick={onStartClick}
      >
        <span className="text-[10px] tracking-widest uppercase font-mono text-brand-taupe font-light">
          Rolar para respirar memórias
        </span>
        <ChevronDown size={14} className="text-brand-rose" />
      </motion.div>
    </section>
  );
}
