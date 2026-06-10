import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import * as LucideIcons from "lucide-react";
import { memoriesData, MemoryCard } from "../data/memories";
import AnimatedSection from "./AnimatedSection";

// Helper to look up Lucide Icon dynamically
function LazyIcon({ name, className, size = 20 }: { name: string; className?: string; size?: number }) {
  const IconComponent = (LucideIcons as any)[name];
  if (!IconComponent) return <LucideIcons.Heart className={className} size={size} />;
  return <IconComponent className={className} size={size} />;
}

export default function MemoryCards() {
  const [activeCard, setActiveCard] = useState<MemoryCard | null>(null);

  // Lock body scroll when memory details are open
  useEffect(() => {
    if (activeCard) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeCard]);

  return (
    <section id="memories" className="py-24 px-4 bg-brand-beige select-none border-t border-brand-sand/35">
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <AnimatedSection direction="down" className="inline-flex items-center gap-1.5 text-brand-rose mb-3">
            <LucideIcons.Sparkles size={14} />
            <span className="font-serif italic text-sm">Instantes Emblemáticos</span>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <h2 className="font-serif text-3xl md:text-5xl text-brand-charcoal tracking-tight">
              Momentos que Nos Marcaram
            </h2>
            <div className="w-12 h-[2px] bg-brand-rose mx-auto mt-5" />
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.3} className="mt-4">
            <p className="text-brand-taupe font-light text-xs md:text-sm max-w-sm mx-auto">
              Aqui eu trouxe momentos que eu lembro q foram incriveis e ficaram marcados para nós.
            </p>
          </AnimatedSection>
        </div>

        {/* Memories Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {memoriesData.map((card, index) => (
            <AnimatedSection
              key={card.id}
              direction="up"
              delay={index * 0.15}
              className="h-full"
            >
              <div
                onClick={() => setActiveCard(card)}
                id={`memory-card-${card.id}`}
                className="group relative h-full flex flex-col justify-between bg-white hover:bg-neutral-50/50 p-6 md:p-8 rounded-2xl border border-brand-sand/45 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer text-left transform hover:-translate-y-1"
              >
                <div>
                  {/* Category and Icon */}
                  <div className="flex justify-between items-center mb-5">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#B76E79] bg-[#EAE3D5] px-2.5 py-1 rounded-full font-semibold">
                      {card.category}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-brand-rose/10 group-hover:bg-brand-rose text-brand-rose group-hover:text-white flex items-center justify-center transition-all duration-300">
                      <LazyIcon name={card.icon} size={16} />
                    </div>
                  </div>

                  {/* Title and Short Explanation */}
                  <h3 className="font-serif text-lg md:text-xl text-brand-charcoal mb-3 group-hover:text-brand-rose transition-colors leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-brand-taupe font-light text-xs md:text-sm leading-relaxed mb-6">
                    {card.shortDescription}
                  </p>
                </div>

                {/* Date and Interact Indicator */}
                <div className="flex justify-between items-center pt-4 border-t border-brand-sand/20 text-[11px] text-brand-rose font-mono mt-auto font-semibold">
                  <span>{card.date}</span>
                  <span className="font-serif italic text-xs tracking-wider group-hover:translate-x-1.5 transition-transform duration-300 flex items-center gap-1">
                    Ler Relato Completo →
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* FULL DETAILED STORY SHEET OVERLAY */}
      <AnimatePresence>
        {activeCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#1A1816]/90 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-6"
          >
            {/* Click outside to close */}
            <div className="absolute inset-0" onClick={() => setActiveCard(null)} />

            {/* Expansive modal viewport */}
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="relative w-full max-w-2xl bg-[#FFFDFB] rounded-2xl md:rounded-3xl shadow-xl border border-white/15 overflow-hidden z-40 max-h-[90vh] flex flex-col"
            >
              {/* Header Image banner */}
              <div className="relative h-44 sm:h-56 bg-brand-charcoal">
                <img
                  src={activeCard.image}
                  alt={activeCard.title}
                  className="w-full h-full object-cover opacity-93 brightness-[90%]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <button
                  onClick={() => setActiveCard(null)}
                  id="close-memory-modal"
                  className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 text-white rounded-full transition-colors cursor-pointer z-50 shadow-md backdrop-blur-xs"
                >
                  <LucideIcons.X size={18} />
                </button>
                <div className="absolute bottom-4 left-6 sm:left-8 z-10">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#FAF8F5] bg-brand-rose px-2.5 py-1 rounded-full shadow-sm font-semibold">
                    {activeCard.category}
                  </span>
                </div>
              </div>

              {/* Scrolled explanation container */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="font-serif text-xl sm:text-2xl text-brand-charcoal leading-tight">
                    {activeCard.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-brand-taupe mt-1 whitespace-nowrap bg-brand-darkbeige px-2.5 py-1 rounded-full font-mono font-semibold">
                    <LucideIcons.Calendar size={11} className="text-brand-rose" />
                    <span>{activeCard.date}</span>
                  </div>
                </div>

                <div className="w-12 h-[1.5px] bg-brand-rose/70 my-3" />

                {/* Complete beautiful paragraphs */}
                <p className="text-brand-charcoal text-xs sm:text-sm leading-relaxed font-light whitespace-pre-line">
                  {activeCard.fullStory}
                </p>

                {/* Bottom design elements */}
                <div className="pt-6 border-t border-brand-sand/30 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-brand-rose">
                    <LazyIcon name={activeCard.icon} size={14} />
                    <span className="font-serif italic text-xs">Momentos que guardamos no peito</span>
                  </div>
                  <button
                    onClick={() => setActiveCard(null)}
                    className="text-brand-taupe hover:text-brand-rose text-xs font-serif italic tracking-wide cursor-pointer py-1 px-3 hover:bg-brand-darkbeige rounded-full transition-colors"
                  >
                    Fechar Relato
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
