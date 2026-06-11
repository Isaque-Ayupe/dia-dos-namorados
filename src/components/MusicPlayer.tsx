import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Music, Minus, X } from "lucide-react";
import { musicConfig } from "../config/music";

type PlayerState = "closed" | "expanded" | "minimized";

interface MusicPlayerProps {
  isActive: boolean;
  isModalOpen: boolean;
}

export default function MusicPlayer({ isActive, isModalOpen }: MusicPlayerProps) {
  const [playerState, setPlayerState] = useState<PlayerState>("closed");
  const [previousState, setPreviousState] = useState<PlayerState>("closed");

  // Show the player in "closed" state once activated
  useEffect(() => {
    if (isActive && playerState === "closed") {
      setPlayerState("expanded");
    }
  }, [isActive]);

  // Auto-minimize when a photo modal opens, restore when it closes
  useEffect(() => {
    if (!isActive) return;

    if (isModalOpen && playerState === "expanded") {
      setPreviousState("expanded");
      setPlayerState("minimized");
    } else if (!isModalOpen && previousState === "expanded") {
      setPlayerState("expanded");
      setPreviousState("closed");
    }
  }, [isModalOpen]);

  if (!isActive) return null;

  const handleToggle = () => {
    if (playerState === "closed" || playerState === "minimized") {
      setPlayerState("expanded");
    }
  };

  const handleMinimize = () => {
    setPlayerState("minimized");
  };

  const handleClose = () => {
    setPlayerState("closed");
  };

  return (
    <div
      className="fixed z-[45] bottom-6 right-24 max-[768px]:right-auto max-[768px]:left-1/2 max-[768px]:-translate-x-1/2"
      id="music-player"
    >
      <AnimatePresence mode="wait">
        {/* ── CLOSED STATE ── */}
        {playerState === "closed" && (
          <motion.button
            key="closed"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            onClick={handleToggle}
            className="group flex items-center gap-2.5 px-5 py-3 bg-white/70 backdrop-blur-xl border border-white/40 rounded-full shadow-xl shadow-brand-charcoal/5 cursor-pointer hover:bg-white/85 hover:shadow-2xl transition-all duration-300"
          >
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="text-brand-rose"
            >
              <Music size={16} />
            </motion.span>
            <span className="font-serif text-xs text-brand-charcoal group-hover:text-brand-rose transition-colors italic tracking-wide">
              Nossa Música
            </span>
          </motion.button>
        )}

        {/* ── MINIMIZED STATE ── */}
        {playerState === "minimized" && (
          <motion.button
            key="minimized"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", damping: 22, stiffness: 200 }}
            onClick={handleToggle}
            className="group flex items-center gap-2 px-4 py-2.5 bg-white/70 backdrop-blur-xl border border-white/40 rounded-full shadow-xl shadow-brand-charcoal/5 cursor-pointer hover:bg-white/85 hover:shadow-2xl transition-all duration-300"
          >
            <motion.span
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-brand-rose"
            >
              <Music size={14} />
            </motion.span>
            <span className="font-serif text-[11px] text-brand-charcoal italic tracking-wide hidden sm:inline">
              Nossa Música
            </span>
          </motion.button>
        )}

        {/* ── EXPANDED STATE ── */}
        {playerState === "expanded" && (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="w-[340px] max-[768px]:w-[310px] bg-white/75 backdrop-blur-2xl border border-white/40 rounded-2xl shadow-2xl shadow-brand-charcoal/8 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 pt-4 pb-2">
              <div className="flex items-center gap-2.5 min-w-0 flex-1">
                <div className="w-8 h-8 bg-gradient-to-br from-brand-rose/20 to-brand-terracotta/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-brand-rose/15">
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Music size={14} className="text-brand-rose" />
                  </motion.span>
                </div>
                <div className="min-w-0">
                  <p className="font-serif text-sm text-brand-charcoal leading-tight truncate">
                    {musicConfig.trackName}
                  </p>
                  <p className="text-[10px] text-brand-taupe font-sans uppercase tracking-wider truncate">
                    {musicConfig.artistName}
                  </p>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-1 flex-shrink-0 ml-2">
                <button
                  onClick={handleMinimize}
                  className="p-1.5 text-brand-taupe/60 hover:text-brand-charcoal hover:bg-brand-darkbeige rounded-lg transition-all duration-200 cursor-pointer"
                  title="Minimizar"
                >
                  <Minus size={14} />
                </button>
                <button
                  onClick={handleClose}
                  className="p-1.5 text-brand-taupe/60 hover:text-brand-rose hover:bg-brand-rose/10 rounded-lg transition-all duration-200 cursor-pointer"
                  title="Fechar"
                >
                  <X size={14} />
                </button>
              </div>
            </div>

            {/* Subtle divider */}
            <div className="mx-4 h-[1px] bg-brand-sand/30" />

            {/* Spotify Embed */}
            <div className="p-3">
              <iframe
                src={musicConfig.spotifyEmbedUrl}
                width="100%"
                height="352"
                frameBorder={0}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title={`${musicConfig.trackName} — ${musicConfig.artistName}`}
                className="rounded-xl"
                style={{ borderRadius: "12px" }}
              />
            </div>

            {/* Bottom label */}
            <div className="px-4 pb-3 flex items-center justify-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-brand-rose/60 rounded-full animate-pulse" />
              <span className="font-mono text-[9px] text-brand-taupe/70 uppercase tracking-widest">
                Trilha sonora da nossa história
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
