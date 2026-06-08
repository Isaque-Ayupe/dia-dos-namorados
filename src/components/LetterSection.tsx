import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, MailOpen, Heart, Sparkles, RefreshCw, Eye } from "lucide-react";
import { letterData } from "../data/letter";
import AnimatedSection from "./AnimatedSection";

export default function LetterSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentParagraphIdx, setCurrentParagraphIdx] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Combine letters to write them down
  const fullText = letterData.paragraphs.join("\n\n");

  useEffect(() => {
    if (!isOpen) {
      setTypedText("");
      setCurrentParagraphIdx(0);
      setIsTypingComplete(false);
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    let charIndex = 0;
    const speed = 35; // speed of typing in ms
    
    // Smooth character by character writer
    timerRef.current = setInterval(() => {
      if (charIndex < fullText.length) {
        setTypedText(fullText.slice(0, charIndex + 1));
        charIndex++;
      } else {
        setIsTypingComplete(true);
        if (timerRef.current) clearInterval(timerRef.current);
      }
    }, speed);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isOpen, fullText]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const skipTyping = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setTypedText(fullText);
    setIsTypingComplete(true);
  };

  return (
    <section id="digital-letter" className="py-28 px-4 bg-brand-beige overflow-hidden select-none relative border-t border-brand-sand/35">
      {/* Decorative floral or sparkling lights backgrounds */}
      <div className="absolute top-20 right-[-10%] w-[400px] h-[400px] bg-brand-rose/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-[-10%] w-[400px] h-[400px] bg-brand-taupe/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <AnimatedSection direction="down" className="inline-flex items-center gap-1.5 text-brand-rose mb-3">
            <Heart size={14} className="fill-current animate-pulse" />
            <span className="font-serif italic text-sm">Correspondência Secreta</span>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <h2 className="font-serif text-3xl md:text-5xl text-brand-charcoal tracking-tight">
              Uma Carta para Você
            </h2>
            <div className="w-12 h-[2px] bg-brand-rose mx-auto mt-5" />
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.3} className="mt-4">
            <p className="text-brand-taupe font-light text-xs md:text-sm max-w-sm mx-auto">
              Clique no envelope lacrado para romper o selo e revelar sentimentos puros escritos à mão.
            </p>
          </AnimatedSection>
        </div>

        {/* INTERACTIVE ENVELOPE CONTAINER */}
        <div className="min-h-[580px] flex items-center justify-center relative">
          <AnimatePresence mode="wait">
            {!isOpen ? (
              /* CLOSED ENVELOPE */
              <motion.div
                key="closed-envelope"
                initial={{ opacity: 0, scale: 0.92, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ type: "spring", damping: 25, stiffness: 140 }}
                onClick={handleOpen}
                className="w-full max-w-[480px] aspect-[1.5/1] bg-gradient-to-br from-brand-taupe via-brand-rose to-brand-charcoal rounded-2xl shadow-2xl p-6 flex flex-col justify-between items-center cursor-pointer hover:shadow-rose-950/5 hover:shadow-3xl border border-brand-taupe/30 relative overflow-hidden group"
              >
                {/* Visual flap fold line */}
                <div className="absolute top-0 inset-x-0 h-1/2 bg-white/[0.03] rounded-b-[100px] pointer-events-none border-b border-white/[0.04] z-10" />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/[0.02] rounded-full blur-xl pointer-events-none" />

                {/* Sender badge top left */}
                <div className="self-start text-[10px] tracking-widest font-mono text-white/70 uppercase">
                  Para: O amor da minha vida • Privado
                </div>

                {/* Centered Wax seal Stamp button */}
                <div className="flex flex-col items-center gap-3.5 my-auto z-20">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 rounded-full bg-brand-beige border-4 border-brand-sand shadow-xl text-brand-charcoal flex items-center justify-center group-hover:bg-white transition-all duration-300 relative"
                  >
                    <Heart size={18} className="fill-current text-brand-rose" />
                    <div className="absolute inset-0 rounded-full border border-dashed border-brand-rose/30 m-1" />
                  </motion.div>
                  
                  <span className="font-serif italic text-xs text-brand-beige group-hover:text-white transition-colors">
                    Clique para romper o lacre
                  </span>
                </div>

                {/* Wax texture details on lower rim */}
                <div className="w-full flex justify-between items-center text-[9px] font-mono tracking-widest text-[#FAF8F5]/55">
                  <span>CONFIDENCIAL ESPADILHA</span>
                  <span>JUNHO DE 2026</span>
                </div>
              </motion.div>
            ) : (
              /* OPENED LETTER FRAME */
              <motion.div
                key="opened-letter"
                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 30 }}
                transition={{ type: "spring", damping: 28, stiffness: 140 }}
                className="w-full max-w-2xl bg-[#FCFAF6] border border-brand-sand/50 rounded-3xl shadow-xl p-6 sm:p-12 text-left relative overflow-hidden"
              >
                {/* Premium letter texture effect */}
                <div className="absolute inset-0 bg-[radial-gradient(#e1dcd5_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
                <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-brand-beige via-brand-rose/50 to-brand-beige" />

                {/* Letter Header */}
                <div className="flex justify-between items-start mb-8 border-b border-brand-sand/30 pb-5">
                  <div>
                    <h3 className="font-serif text-2xl text-brand-charcoal tracking-tight font-normal">
                      {letterData.title}
                    </h3>
                    <p className="text-[10px] uppercase font-mono tracking-wider text-brand-taupe mt-2 font-semibold">
                      {letterData.date}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {!isTypingComplete && (
                      <button
                        onClick={skipTyping}
                        className="p-2 bg-brand-darkbeige hover:bg-brand-sand/50 text-brand-charcoal rounded-lg text-xs font-mono transition-colors flex items-center gap-1.5 cursor-pointer font-semibold"
                        title="Ver texto inteiro"
                      >
                        <Eye size={12} />
                        Skip
                      </button>
                    )}
                    <button
                      onClick={handleClose}
                      className="p-2 bg-brand-darkbeige hover:bg-brand-sand/50 text-brand-rose rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer font-semibold"
                    >
                      <RefreshCw size={12} />
                      Fechar
                    </button>
                  </div>
                </div>

                {/* Typed main content */}
                <div className="min-h-[220px] max-h-[360px] overflow-y-auto pr-2">
                  <p className="font-serif text-[#3E3832] text-sm md:text-base leading-relaxed whitespace-pre-line font-light">
                    {typedText}
                    {!isTypingComplete && (
                      <span className="inline-block w-2 h-4 bg-brand-rose ml-1 animate-pulse" />
                    )}
                  </p>
                </div>

                {/* Letter Signature */}
                {isTypingComplete && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mt-8 pt-6 border-t border-brand-sand/30 space-y-4"
                  >
                    <div>
                      <p className="font-serif italic text-brand-rose text-sm sm:text-base leading-relaxed">
                        {letterData.signature}
                      </p>
                    </div>

                    {letterData.pS && (
                      <div className="bg-brand-darkbeige p-3 rounded-xl border border-brand-sand/20">
                        <p className="font-mono text-[11px] text-[#8C7A6B] leading-normal italic font-semibold">
                          {letterData.pS}
                        </p>
                      </div>
                    )}
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
