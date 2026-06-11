import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, Sparkles, Check, Square, CheckSquare } from "lucide-react";
import { dreamsData, Dream } from "../data/dreams";
import AnimatedSection from "./AnimatedSection";

export default function DreamsSection() {
  const [dreams, setDreams] = useState<Dream[]>(dreamsData);
  const [filter, setFilter] = useState<string>("all");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const toggleDream = (id: string, currentlyChecked: boolean) => {
    setDreams((prev) =>
      prev.map((d) => (d.id === id ? { ...d, defaultChecked: !d.defaultChecked } : d))
    );

    // If check occurs, display sweet romantic toast message
    if (!currentlyChecked) {
      const sweetMessages = [
        "Mal posso esperar para realizar esse sonho maravilhoso ao seu lado! ✨",
        "Cada pequena meta com você já tem gosto de vitória eterna! ❤️",
        "Nosso futuro juntos é um porto seguro incrível de se planejar. 🥰",
        "Assinado, carimbado e guardado no peito: vamos viver isso juntos! 🌟",
        "Eu acredito tanto na gente, esse sonho vai se realizar logo! 🙌"
      ];
      const randomMsg = sweetMessages[Math.floor(Math.random() * sweetMessages.length)];
      setToastMessage(randomMsg);

      // Dismiss after 4s
      setTimeout(() => {
        setToastMessage((cur) => (cur === randomMsg ? null : cur));
      }, 4000);
    }
  };

  const categories = ["all", "Viagem", "Cotidiano", "Futuro", "Divertido"];

  const filteredDreams = filter === "all"
    ? dreams
    : dreams.filter((d) => d.category === filter);

  const completedCount = dreams.filter((d) => d.defaultChecked).length;
  const progressPercent = Math.round((completedCount / dreams.length) * 100);

  return (
    <section id="dreams" className="py-24 px-4 bg-brand-beige select-none relative border-t border-brand-sand/35">
      <div className="max-w-4xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <AnimatedSection direction="down" className="inline-flex items-center gap-1.5 text-brand-rose mb-3">
            <Heart size={14} className="fill-current animate-pulse" />
            <span className="font-serif italic text-sm">Construindo Juntos</span>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <h2 className="font-serif text-3xl md:text-5xl text-brand-charcoal tracking-tight leading-tight">
              Os Nossos Sonhos
            </h2>
            <div className="w-12 h-[2px] bg-brand-rose mx-auto mt-6" />
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.3} className="mt-4">
            <p className="text-brand-taupe font-light text-xs md:text-sm max-w-sm mx-auto">
              Nossa lista de metas, sonhos e planos que ja conquistamos ou queremos conquistar
            </p>
          </AnimatedSection>
        </div>

        {/* Progress Tracker Card */}
        <AnimatedSection direction="up" delay={0.4} className="bg-white p-6 sm:p-8 rounded-2xl border border-brand-sand/40 shadow-xs mb-10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-brand-darkbeige text-brand-rose rounded-lg">
                <Sparkles size={16} />
              </div>
              <div>
                <h4 className="font-serif text-sm md:text-base text-brand-charcoal">Caminho Conquistado</h4>
                <p className="text-[11px] text-brand-taupe font-sans font-semibold">
                  Realizamos {completedCount} de {dreams.length} sonhos compartilhados!
                </p>
              </div>
            </div>
            <span className="font-serif italic text-2xl text-brand-rose">{progressPercent}%</span>
          </div>

          {/* Progress bar */}
          <div className="w-full h-[6px] bg-brand-beige rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${progressPercent}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-brand-taupe to-brand-rose"
            />
          </div>
        </AnimatedSection>

        {/* Category Filters */}
        <AnimatedSection direction="up" className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-serif transition-all cursor-pointer font-semibold ${filter === cat
                  ? "bg-brand-rose text-white shadow-md shadow-brand-rose/10"
                  : "bg-white text-brand-[#5E5852] border border-brand-sand/40 hover:bg-neutral-50/50"
                }`}
            >
              {cat === "all" ? "Ver todos" : cat}
            </button>
          ))}
        </AnimatedSection>

        {/* Dreams List Checklist */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredDreams.map((dream, index) => (
              <motion.div
                key={dream.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => toggleDream(dream.id, dream.defaultChecked)}
                className={`group flex items-start gap-4 p-5 rounded-2xl border text-left cursor-pointer transition-all ${dream.defaultChecked
                    ? "bg-white/[0.60] border-brand-sand/20 text-stone-400"
                    : "bg-white border-brand-sand/40 hover:border-brand-rose/30 hover:shadow-xs text-brand-charcoal"
                  }`}
              >
                {/* Checkbox item */}
                <div className="mt-0.5 flex-shrink-0">
                  {dream.defaultChecked ? (
                    <motion.div
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      className="w-5 h-5 rounded-md bg-brand-rose text-white flex items-center justify-center shadow-xs"
                    >
                      <Check size={12} strokeWidth={3} />
                    </motion.div>
                  ) : (
                    <div className="w-5 h-5 rounded-md border-2 border-brand-sand group-hover:border-brand-rose transition-colors" />
                  )}
                </div>

                {/* Texts */}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4
                      className={`font-serif text-sm sm:text-base leading-snug transition-all ${dream.defaultChecked ? "line-through text-stone-400/80 font-light" : "text-brand-charcoal"
                        }`}
                    >
                      {dream.title}
                    </h4>
                    <span
                      className={`text-[9px] uppercase font-mono px-2 py-0.5 rounded-md font-semibold ${dream.defaultChecked
                          ? "bg-stone-100 text-stone-400"
                          : "bg-brand-darkbeige text-[#B76E79]"
                        }`}
                    >
                      {dream.category}
                    </span>
                  </div>
                  <p
                    className={`text-xs ml-0 mt-1 sm:mt-1.5 leading-relaxed font-light ${dream.defaultChecked ? "text-stone-400/60" : "text-brand-taupe"
                      }`}
                  >
                    {dream.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dynamic Toast Alerts */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-brand-charcoal text-[#FCFAF6] px-6 py-3 rounded-full text-xs sm:text-sm font-serif shadow-xl flex items-center gap-2 border border-white/10"
            >
              <Heart size={14} className="fill-current text-brand-rose shrink-0" />
              <span>{toastMessage}</span>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
