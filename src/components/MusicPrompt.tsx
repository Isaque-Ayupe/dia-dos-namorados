import { motion, AnimatePresence } from "motion/react";
import { Music, X } from "lucide-react";

interface MusicPromptProps {
  isOpen: boolean;
  onAccept: () => void;
  onDismiss: () => void;
}

export default function MusicPrompt({ isOpen, onAccept, onDismiss }: MusicPromptProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[55] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-brand-charcoal/40 backdrop-blur-sm"
            onClick={onDismiss}
          />

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 28, stiffness: 220, delay: 0.1 }}
            className="relative w-full max-w-sm bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl shadow-brand-charcoal/10 p-8 text-center z-10"
          >
            {/* Close Button */}
            <button
              onClick={onDismiss}
              className="absolute top-4 right-4 p-1.5 text-brand-taupe/60 hover:text-brand-rose transition-colors cursor-pointer rounded-full hover:bg-brand-darkbeige"
            >
              <X size={16} />
            </button>

            {/* Music Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 15, stiffness: 200, delay: 0.25 }}
              className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-brand-rose/20 to-brand-terracotta/10 rounded-2xl flex items-center justify-center border border-brand-rose/20"
            >
              <Music size={28} className="text-brand-rose" />
            </motion.div>

            {/* Text */}
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="font-serif text-xl text-brand-charcoal mb-2 leading-tight"
            >
              Uma música para acompanhar{" "}
              <span className="text-brand-rose italic">nossa história</span>?
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-brand-taupe text-xs font-light mb-8 max-w-[260px] mx-auto leading-relaxed"
            >
              Nossa musga amoo
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex items-center gap-3 justify-center"
            >
              <button
                onClick={onAccept}
                id="btn-music-accept"
                className="group relative px-7 py-3 bg-brand-charcoal text-white rounded-full font-sans text-xs uppercase tracking-widest shadow-lg hover:shadow-xl transition-all duration-300 transform active:scale-95 overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center gap-2">
                  <Music size={14} />
                  Ouvir
                </div>
              </button>

              <button
                onClick={onDismiss}
                id="btn-music-dismiss"
                className="px-6 py-3 text-brand-taupe hover:text-brand-charcoal text-xs uppercase tracking-widest font-sans transition-colors duration-300 cursor-pointer rounded-full hover:bg-brand-darkbeige border border-transparent hover:border-brand-sand/50"
              >
                Agora não
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
