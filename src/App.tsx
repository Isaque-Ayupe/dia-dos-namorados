import { useState, useEffect, useCallback } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Heart, ChevronUp, Sparkles, BookOpen } from "lucide-react";

import HeroSection from "./components/HeroSection";
import TimelineSection from "./components/TimelineSection";
import GallerySection from "./components/GallerySection";
import MemoryCards from "./components/MemoryCards";
import ThingsAboutYou from "./components/ThingsAboutYou";
import LetterSection from "./components/LetterSection";
import DreamsSection from "./components/DreamsSection";
import RelationshipCounter from "./components/RelationshipCounter";
import FinalMessage from "./components/FinalMessage";
import SecretMessages from "./components/SecretMessages";
import LoginScreen from "./components/LoginScreen";
import MusicPlayer from "./components/MusicPlayer";
import MusicPrompt from "./components/MusicPrompt";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("couple_story_authenticated") === "true";
  });
  const [userNickname, setUserNickname] = useState(() => {
    return localStorage.getItem("couple_story_nickname") || "";
  });

  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Music player state
  const [musicActive, setMusicActive] = useState(false);
  const [showMusicPrompt, setShowMusicPrompt] = useState(false);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

  const handleMusicAccept = useCallback(() => {
    setMusicActive(true);
    setShowMusicPrompt(false);
  }, []);

  const handleMusicDismiss = useCallback(() => {
    setShowMusicPrompt(false);
  }, []);

  const handlePhotoModalChange = useCallback((isOpen: boolean) => {
    setIsPhotoModalOpen(isOpen);
  }, []);

  const handleLoginSuccess = (nickname: string) => {
    localStorage.setItem("couple_story_authenticated", "true");
    localStorage.setItem("couple_story_nickname", nickname);
    setIsLoggedIn(true);
    setUserNickname(nickname);
  };

  const handleLogout = () => {
    localStorage.removeItem("couple_story_authenticated");
    localStorage.removeItem("couple_story_nickname");
    setIsLoggedIn(false);
    setUserNickname("");
  };

  // Track scroll progress for a gorgeous thin indicator at the top
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      // Show/hide floating back to top button
      if (window.scrollY > window.innerHeight) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Track which section is in view
      const sections = [
        "hero",
        "timeline",
        "gallery",
        "memories",
        "things-about-you",
        "digital-letter",
        "dreams",
        "counter",
        "final-message"
      ];

      let current = "hero";
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            current = sectionId;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const menuItems = [
    { id: "hero", label: "Início" },
    { id: "timeline", label: "Linha do Tempo" },
    { id: "gallery", label: "Galeria" },
    { id: "memories", label: "Momento Especial" },
    { id: "things-about-you", label: "Sobre Você" },
    { id: "digital-letter", label: "Carta Secreta" },
    { id: "dreams", label: "Nossos Sonhos" },
    { id: "counter", label: "Nosso Tempo" }
  ];

  if (!isLoggedIn) {
    return <LoginScreen onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="relative min-h-screen text-brand-charcoal bg-brand-beige antialiased font-sans">
      
      {/* Top Premium Thin Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-sand via-brand-rose to-brand-charcoal z-50 transform origin-left"
        style={{ scaleX }}
      />

      {/* Floating Section Navigator on the side (hidden on small screens for visual serenity) */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden xl:flex flex-col gap-4 bg-white/70 backdrop-blur-md px-3.5 py-6 rounded-full border border-brand-sand/30 shadow-xl shadow-brand-taupe/5">
        <div className="flex flex-col items-center gap-1 mb-2">
          <BookOpen size={14} className="text-brand-rose" />
          <div className="w-4 h-[1px] bg-brand-sand/40" />
        </div>
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="group relative flex items-center justify-center w-3.5 h-3.5 cursor-pointer"
            title={item.label}
          >
            {/* Dot tracker indicator */}
            <div
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeSection === item.id
                  ? "bg-brand-rose scale-125 shadow-xs"
                  : "bg-brand-sand group-hover:bg-brand-rose/60"
              }`}
            />
            {/* Pop label on hover */}
            <span className="absolute right-6 scale-0 group-hover:scale-100 transition-all duration-200 bg-brand-charcoal text-white text-[10px] uppercase font-mono tracking-wider py-1 px-2.5 rounded-lg whitespace-nowrap shadow-md pointer-events-none origin-right font-semibold">
              {item.label}
            </span>
          </button>
        ))}
      </div>

      {/* Music Prompt Modal */}
      <MusicPrompt
        isOpen={showMusicPrompt}
        onAccept={handleMusicAccept}
        onDismiss={handleMusicDismiss}
      />

      {/* Floating Music Player */}
      <MusicPlayer isActive={musicActive} isModalOpen={isPhotoModalOpen} />

      {/* 1. HERO SECTION */}
      <div id="hero">
        <HeroSection
          onStartClick={() => {
            scrollToSection("timeline");
            // Show music suggestion after a brief delay if not already active
            if (!musicActive) {
              setTimeout(() => setShowMusicPrompt(true), 800);
            }
          }}
          userNickname={userNickname}
          onLogout={handleLogout}
        />
      </div>

      {/* 2. NOSSA LINHA DO TEMPO */}
      <TimelineSection />

      {/* 3. GALERIA DE MEMÓRIAS */}
      <GallerySection onModalChange={handlePhotoModalChange} />

      {/* 4. MOMENTOS QUE MARCARAM */}
      <MemoryCards />

      {/* 5. COISAS QUE VOCÊ TALVEZ NÃO SAIBA */}
      <ThingsAboutYou />

      {/* 6. CARTA DIGITAL */}
      <LetterSection />

      {/* 7. NOSSOS SONHOS */}
      <DreamsSection />

      {/* 8. CONTADOR DE HISTÓRIA */}
      <RelationshipCounter />

      {/* 9. MENSAGEM FINAL */}
      <FinalMessage />

      {/* EASTER EGGS SECTION (Quiet Lock at bottom) */}
      <SecretMessages />

      {/* FLOATING SCROLL TO TOP FAB */}
      <div className="fixed bottom-6 right-6 z-40">
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            onClick={scrollToTop}
            id="btn-scroll-top"
            className="p-3 bg-brand-darkbeige hover:bg-brand-sand text-brand-charcoal hover:text-brand-rose rounded-full border border-brand-sand/30 shadow-xl cursor-pointer transition-all duration-300 transform active:scale-95 group font-bold"
            title="Voltar ao início"
          >
            <ChevronUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        )}
      </div>

    </div>
  );
}
