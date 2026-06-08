import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Clock, Calendar, Heart, ShieldAlert } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function RelationshipCounter() {
  const [timePassed, setTimePassed] = useState({
    years: 1,
    months: 5,
    days: 10,
    totalDays: 520,
    seconds: 0,
  });

  // Default start date: 10 de Fevereiro de 2024
  const startRelationDate = "2025-01-08T00:00:00";

  useEffect(() => {
    const calculateTime = () => {
      const start = new Date(startRelationDate);
      const now = new Date();

      const diffMs = now.getTime() - start.getTime();
      const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

      let years = now.getFullYear() - start.getFullYear();
      let months = now.getMonth() - start.getMonth();
      let days = now.getDate() - start.getDate();

      // Adjust negative days
      if (days < 0) {
        months--;
        const lastDayOfPrevMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        days += lastDayOfPrevMonth;
      }

      // Adjust negative months
      if (months < 0) {
        years--;
        months += 12;
      }

      const totalSeconds = Math.floor(diffMs / 1000);

      setTimePassed({
        years,
        months,
        days,
        totalDays,
        seconds: totalSeconds % 60,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="counter" className="py-24 px-4 bg-brand-beige select-none relative overflow-hidden border-t border-brand-sand/35">
      {/* Absolute decorative floating background shapes */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-rose/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">

        {/* Header decoration */}
        <AnimatedSection direction="down" className="inline-flex items-center gap-1.5 text-brand-rose mb-4">
          <Heart size={14} className="fill-current text-brand-rose animate-pulse" />
          <span className="font-serif italic text-sm">Contador Eterno</span>
        </AnimatedSection>

        {/* Text statement */}
        <AnimatedSection direction="up" delay={0.2}>
          <p className="font-serif text-lg sm:text-2xl text-brand-taupe font-light mb-4">
            Estamos escrevendo esta linda história há
          </p>
        </AnimatedSection>

        {/* Oversized counters grid */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mx-auto my-12">
          {/* Years */}
          <AnimatedSection
            direction="up"
            delay={0.3}
            className="bg-white p-5 sm:p-8 rounded-2xl border border-brand-sand/40 shadow-xs text-center flex flex-col justify-center items-center"
          >
            <span className="text-4xl sm:text-6xl font-serif text-brand-rose leading-none mb-2">
              {timePassed.years}
            </span>
            <span className="text-[10px] sm:text-xs uppercase font-mono tracking-widest text-[#B76E79] font-semibold">
              {timePassed.years === 1 ? "Ano" : "Anos"}
            </span>
          </AnimatedSection>

          {/* Months */}
          <AnimatedSection
            direction="up"
            delay={0.4}
            className="bg-white p-5 sm:p-8 rounded-2xl border border-brand-sand/40 shadow-xs text-center flex flex-col justify-center items-center"
          >
            <span className="text-4xl sm:text-6xl font-serif text-brand-rose leading-none mb-2">
              {timePassed.months}
            </span>
            <span className="text-[10px] sm:text-xs uppercase font-mono tracking-widest text-[#B76E79] font-semibold">
              {timePassed.months === 1 ? "Mês" : "Meses"}
            </span>
          </AnimatedSection>

          {/* Days */}
          <AnimatedSection
            direction="up"
            delay={0.5}
            className="bg-white p-5 sm:p-8 rounded-2xl border border-brand-sand/40 shadow-xs text-center flex flex-col justify-center items-center"
          >
            <span className="text-4xl sm:text-6xl font-serif text-brand-rose leading-none mb-2">
              {timePassed.days}
            </span>
            <span className="text-[10px] sm:text-xs uppercase font-mono tracking-widest text-[#B76E79] font-semibold">
              {timePassed.days === 1 ? "Dia" : "Dias"}
            </span>
          </AnimatedSection>
        </div>

        {/* Total days tally ribbon */}
        <AnimatedSection
          direction="up"
          delay={0.6}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-darkbeige border border-brand-sand/30 rounded-full shadow-xs mb-8"
        >
          <Clock size={13} className="text-brand-rose" />
          <span className="font-mono text-xs text-brand-charcoal font-semibold">
            Ou exatamente <span className="font-serif text-sm font-bold text-brand-rose mx-1">{timePassed.totalDays}</span> dias de cumplicidade amorosa.
          </span>
        </AnimatedSection>

        {/* Emotion End Quote */}
        <AnimatedSection direction="up" delay={0.7} className="mt-4">
          <p className="font-serif text-lg sm:text-2xl text-brand-charcoal italic max-w-xl mx-auto leading-relaxed">
            "E ainda tem muito tempo ao seu lado, até nois ficar veio e falando 'suqui'"
          </p>
          <div className="w-8 h-[1px] bg-brand-rose/40 mx-auto mt-6" />
        </AnimatedSection>

      </div>
    </section>
  );
}
