import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Music, Minus, X, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { musicConfig } from "../config/music";

type PlayerState = "closed" | "expanded" | "minimized";

interface MusicPlayerProps {
  isActive: boolean;
  isModalOpen: boolean;
}

export default function MusicPlayer({ isActive, isModalOpen }: MusicPlayerProps) {
  const [playerState, setPlayerState] = useState<PlayerState>("closed");
  const [previousState, setPreviousState] = useState<PlayerState>("closed");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Create and configure audio element once
  useEffect(() => {
    const audio = new Audio(musicConfig.audioSrc);
    audio.loop = true;
    audio.volume = 0.4;
    audio.preload = "auto";
    audioRef.current = audio;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.pause();
      audio.src = "";
    };
  }, []);

  // Auto-play when isActive becomes true
  useEffect(() => {
    if (isActive && playerState === "closed") {
      setPlayerState("expanded");
      audioRef.current?.play().catch(() => {
        // Browser blocked autoplay; user will need to click play
      });
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

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, []);

  const toggleMute = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    setIsMuted(audio.muted);
  }, []);

  const handleSeek = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audio.currentTime = ratio * duration;
  }, [duration]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

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
    // Pause audio when closing the player UI (music continues in background? No, pause it.)
    audioRef.current?.pause();
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

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
            onClick={() => {
              handleToggle();
              audioRef.current?.play().catch(() => {});
            }}
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
              {isPlaying ? "Tocando..." : "Nossa Música"}
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

            {/* Audio Player Controls */}
            <div className="p-4 flex flex-col gap-3">
              {/* Play/Pause + Mute Row */}
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="w-10 h-10 flex items-center justify-center bg-brand-charcoal hover:bg-brand-charcoal/85 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer active:scale-95"
                  title={isPlaying ? "Pausar" : "Tocar"}
                >
                  {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
                </button>

                {/* Progress bar */}
                <div className="flex-1 flex flex-col gap-1">
                  <div
                    className="relative w-full h-1.5 bg-brand-sand/40 rounded-full cursor-pointer group"
                    onClick={handleSeek}
                  >
                    <div
                      className="absolute left-0 top-0 h-full bg-gradient-to-r from-brand-rose to-brand-terracotta rounded-full transition-all duration-150"
                      style={{ width: `${progress}%` }}
                    />
                    {/* Hover knob */}
                    <div
                      className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-brand-rose rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ left: `calc(${progress}% - 6px)` }}
                    />
                  </div>
                  <div className="flex justify-between">
                    <span className="font-mono text-[9px] text-brand-taupe/60">
                      {formatTime(currentTime)}
                    </span>
                    <span className="font-mono text-[9px] text-brand-taupe/60">
                      {formatTime(duration)}
                    </span>
                  </div>
                </div>

                {/* Mute button */}
                <button
                  onClick={toggleMute}
                  className="p-1.5 text-brand-taupe/60 hover:text-brand-charcoal hover:bg-brand-darkbeige rounded-lg transition-all duration-200 cursor-pointer"
                  title={isMuted ? "Ativar som" : "Silenciar"}
                >
                  {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>
              </div>
            </div>

            {/* Bottom label */}
            <div className="px-4 pb-3 flex items-center justify-center gap-1.5">
              <div className={`w-1.5 h-1.5 rounded-full ${isPlaying ? "bg-brand-rose/60 animate-pulse" : "bg-brand-taupe/30"}`} />
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
