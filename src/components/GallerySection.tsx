import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, MapPin, Calendar, Heart, ZoomIn, ArrowLeft, ArrowRight } from "lucide-react";
import { galleryData, GalleryItem } from "../data/gallery";
import AnimatedSection from "./AnimatedSection";

export default function GallerySection() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedItem]);

  // Handle keyboard navigation for premium slideshow feel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedItem) return;
      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowRight") {
        navigateNext();
      } else if (e.key === "ArrowLeft") {
        navigatePrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItem, selectedIndex]);

  const openItem = (item: GalleryItem, index: number) => {
    setSelectedItem(item);
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setSelectedIndex(-1);
  };

  const navigateNext = () => {
    if (selectedIndex === -1) return;
    const nextIdx = (selectedIndex + 1) % galleryData.length;
    setSelectedIndex(nextIdx);
    setSelectedItem(galleryData[nextIdx]);
  };

  const navigatePrev = () => {
    if (selectedIndex === -1) return;
    const prevIdx = (selectedIndex - 1 + galleryData.length) % galleryData.length;
    setSelectedIndex(prevIdx);
    setSelectedItem(galleryData[prevIdx]);
  };

  return (
    <section id="gallery" className="py-24 px-4 bg-brand-beige select-none border-t border-brand-sand/35">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <AnimatedSection direction="down" className="inline-flex items-center gap-1 text-brand-rose mb-3">
            <Heart size={14} className="fill-current animate-pulse" />
            <span className="font-serif italic text-sm">Álbum de Instantâneos</span>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <h2 className="font-serif text-3xl md:text-5xl text-brand-charcoal tracking-tight">
              Nossa Galeria de Memórias
            </h2>
            <div className="w-12 h-[2px] bg-brand-rose mx-auto mt-5" />
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.3} className="mt-4">
            <p className="text-brand-taupe font-light text-xs md:text-sm max-w-md mx-auto">
              Retratos analógicos de instantes aparentemente bobos, mas que guardam a grandiosidade eterna de estarmos juntos.
            </p>
          </AnimatedSection>
        </div>

        {/* Elegant Bento/Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryData.map((item, index) => (
            <AnimatedSection
              key={item.id}
              direction="up"
              delay={index * 0.15}
              className="group break-inside-avoid"
            >
              <div
                onClick={() => openItem(item, index)}
                id={`gallery-item-${item.id}`}
                className="relative bg-white p-3 rounded-2xl border border-brand-sand/40 shadow-xs hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden transform hover:-translate-y-1"
              >
                {/* Photo container */}
                <div className={`relative overflow-hidden rounded-xl ${item.aspectRatio} bg-brand-darkbeige`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  {/* Elegant Gradient hover vignette & Zoom Icon */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D2926]/60 via-[#2D2926]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="p-3 bg-white/90 rounded-full text-brand-charcoal shadow-md transform translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                    >
                      <ZoomIn size={18} className="text-brand-rose" />
                    </motion.div>
                  </div>
                </div>

                {/* Card Info Details */}
                <div className="pt-3.5 px-1 pb-1 flex justify-between items-start gap-4">
                  <div>
                    <h4 className="font-serif text-sm md:text-base text-brand-charcoal group-hover:text-brand-rose transition-colors line-clamp-1">
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-1 text-[11px] text-brand-taupe mt-1 font-sans">
                      <MapPin size={10} className="text-brand-rose" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                  <div className="font-mono text-[10px] bg-brand-darkbeige text-brand-rose px-2.5 py-1 rounded-full whitespace-nowrap self-center font-semibold">
                    {item.date}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* FULLSCREEN CINEMATIC LIGHTBOX */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#1A1816]/95 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-10 overflow-hidden"
          >
            {/* Close touch area / click on background */}
            <div className="absolute inset-0" onClick={closeModal} />

            {/* Close Button */}
            <button
              onClick={closeModal}
              id="close-lightbox"
              className="absolute top-4 right-4 md:top-8 md:right-8 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-50 cursor-pointer"
            >
              <X size={20} />
            </button>

            {/* Navigators Left & Right */}
            <button
              onClick={navigatePrev}
              className="absolute left-2 md:left-6 p-3 bg-white/5 hover:bg-white/15 text-white rounded-full transition-colors z-50 hidden sm:block cursor-pointer"
            >
              <ArrowLeft size={20} />
            </button>

            <button
              onClick={navigateNext}
              className="absolute right-2 md:right-6 p-3 bg-white/5 hover:bg-white/15 text-white rounded-full transition-colors z-50 hidden sm:block cursor-pointer"
            >
              <ArrowRight size={20} />
            </button>

            {/* Modal Inner Card Container */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="relative bg-white/95 backdrop-blur-xs max-w-4xl w-full rounded-2xl md:rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row z-40 max-h-[90vh] md:max-h-[80vh] border border-white/20"
            >
              {/* Fullscreen style Left Image */}
              <div className="relative flex-1 bg-brand-charcoal overflow-hidden min-h-[40vh] md:min-h-0">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                {/* Mobile indicators */}
                <div className="absolute bottom-3 left-3 bg-brand-rose text-white text-[10px] uppercase font-mono px-2.5 py-1 rounded-full md:hidden">
                  {selectedItem.date}
                </div>
              </div>

              {/* Story Content Context Side */}
              <div className="w-full md:w-[380px] p-6 md:p-8 flex flex-col justify-between bg-white max-h-[50vh] md:max-h-none overflow-y-auto">
                <div className="space-y-4 md:space-y-6">
                  {/* Top Badge Meta */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="flex items-center gap-1.5 text-xs text-brand-rose font-serif italic">
                      <Calendar size={13} />
                      {selectedItem.date}
                    </span>
                    <span className="text-stone-300">•</span>
                    <span className="flex items-center gap-1 text-xs text-brand-taupe font-sans">
                      <MapPin size={12} className="text-brand-rose" />
                      {selectedItem.location}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl md:text-2xl text-brand-charcoal font-normal leading-tight">
                    {selectedItem.title}
                  </h3>

                  <div className="w-8 h-[1px] bg-brand-rose/60" />

                  <p className="text-brand-taupe font-light text-[#5E5852] text-xs md:text-sm leading-relaxed whitespace-pre-line">
                    {selectedItem.description}
                  </p>
                </div>

                {/* Elegant ending signoff */}
                <div className="pt-6 mt-6 border-t border-brand-sand/40 flex items-center gap-2 text-brand-rose">
                  <Heart size={14} className="fill-current animate-pulse" />
                  <span className="font-serif italic text-xs">Uma página eterna do nosso álbum</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
