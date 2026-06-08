import { motion } from "motion/react";
import { Calendar, Heart } from "lucide-react";
import { timelineData } from "../data/timeline";
import AnimatedSection from "./AnimatedSection";

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-24 px-4 bg-brand-beige overflow-hidden select-none border-t border-brand-sand/35">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <AnimatedSection direction="down" className="inline-flex items-center gap-1.5 text-brand-rose mb-3">
            <Heart size={14} className="fill-current animate-pulse" />
            <span className="font-serif italic text-sm tracking-wider">A Nossa Jornada</span>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={0.2}>
            <h2 className="font-serif text-3xl md:text-5xl text-brand-charcoal tracking-tight leading-tight">
              A Linha do Nosso Tempo
            </h2>
            <div className="w-12 h-[2px] bg-brand-rose mx-auto mt-6" />
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={0.3} className="mt-4">
            <p className="text-brand-taupe font-light text-sm md:text-base max-w-md mx-auto">
              Cada curva da estrada, cada risada mútua e cada obstáculo ultrapassado nos trouxeram até este dia maravilhoso.
            </p>
          </AnimatedSection>
        </div>

        {/* Timeline body */}
        <div className="relative mt-12">
          {/* Centered line */}
          <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-brand-sand via-brand-rose/40 to-transparent pointer-events-none" />

          {/* Timeline Nodes */}
          <div className="space-y-16 md:space-y-24">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Spine Icon badge */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-5 h-5 bg-brand-rose text-white rounded-full border-4 border-brand-beige shadow-md z-10">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping absolute" />
                  </div>

                  {/* Left / Right Card placeholder */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                    <AnimatedSection
                      direction={isEven ? "left" : "right"}
                      className="group bg-white p-5 md:p-6 rounded-2xl border border-brand-sand/40 shadow-xs hover:shadow-xl hover:shadow-brand-sand/30 transition-all duration-300"
                    >
                      {/* Date Badge */}
                      <div className="flex items-center gap-1.5 text-brand-rose font-serif italic text-xs mb-3">
                        <Calendar size={12} />
                        <span>{item.date}</span>
                      </div>

                      {/* Image container with elegant zooming */}
                      <div className="relative overflow-hidden rounded-xl aspect-[16/10] mb-4 bg-brand-darkbeige shadow-sm border border-brand-sand/20">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-stone-900/5 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
                      </div>

                      {/* Info text */}
                      <h3 className="font-serif text-lg md:text-xl text-brand-charcoal mb-2 group-hover:text-brand-rose transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-brand-taupe font-light text-xs md:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </AnimatedSection>
                  </div>

                  {/* Empty spacer for grid alignments on desktop */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Ending Quote Indicator */}
        <AnimatedSection direction="up" className="text-center mt-20">
          <p className="font-serif italic text-brand-rose text-sm md:text-base">
            "Nossa história tem sido o labirinto mais bonito do meu viver..."
          </p>
        </AnimatedSection>
        
      </div>
    </section>
  );
}
