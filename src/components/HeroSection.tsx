/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ChevronDown, MessageSquare, MapPin } from "lucide-react";
import { IMAGES, RESTAURANT_INFO } from "../data";

interface HeroSectionProps {
  onActionClick: (sectionId: string) => void;
}

export default function HeroSection({ onActionClick }: HeroSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slideshow containing exactly the real restaurant photos as requested:
  // 1. Vista aérea do restaurante e rodovia (IMAGES.droneIa)
  // 2. Fachada principal do restaurante (IMAGES.facade)
  // 3. Área externa com mesas e guarda-sóis (IMAGES.ambiance)
  // 4. Vista aérea mostrando praia e localização (IMAGES.hero)
  // 5. Melhor foto institucional disponível (IMAGES.facade - showing the restaurant front and sign)
  const slides = [
    { url: IMAGES.droneIa, alt: "Vista aérea do restaurante Brisa do Mar e rodovia Interpraias" },
    { url: IMAGES.facade, alt: "Fachada principal e entrada do restaurante Brisa do Mar em Taquaras" },
    { url: IMAGES.ambiance, alt: "Área externa com mesas, guarda-sóis e decks do Brisa do Mar" },
    { url: IMAGES.hero, alt: "Vista aérea mostrando a praia de Taquaras e localização do restaurante" },
    { url: IMAGES.facade, alt: "Foto oficial institucional do Restaurante e Petiscaria Brisa do Mar" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Auto-rotation every 5 seconds as requested

    return () => clearInterval(timer);
  }, [slides.length]);

  const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.phoneRaw}?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva%20no%20Restaurante%20Brisa%20do%20Mar.`;

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-carvao"
    >
      {/* Background Fullscreen Slideshow Wrapper */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={index}
              className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
              style={{
                opacity: isActive ? 1 : 0,
                zIndex: isActive ? 1 : 0,
              }}
            >
              <img
                src={slide.url}
                alt={slide.alt}
                referrerPolicy="no-referrer"
                className={`w-full h-full object-cover object-center ${
                  isActive ? "transition-transform duration-[6000ms] ease-linear scale-108" : "scale-100"
                }`}
              />
            </div>
          );
        })}

        {/* Premium Dark Linear Gradient Overlay for perfect reading legibility */}
        {/* linear-gradient from rgba(0,0,0,0.45) down to rgba(0,0,0,0.60) as requested */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none" 
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.60) 100%)"
          }}
        />
      </div>

      {/* Main Content Pane */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center text-white flex flex-col items-center">
        {/* Eyebrow Badge */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-areia uppercase tracking-[0.45em] text-[10px] md:text-xs font-semibold mb-4 text-center block"
        >
          TRADIÇÃO E SABOR EM TAQUARAS
        </motion.span>

        {/* Display Title - Serif, grand, and iconic */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.4 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 uppercase text-center leading-[1.1]"
        >
          ONDE O MAR <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-areia via-white to-bronze font-serif italic text-stroke-bronze">
            ENCONTRA O FOGO
          </span>
        </motion.h1>

        {/* Subtitle / Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.6 }}
          className="font-sans text-sm sm:text-base md:text-xl text-marfim/90 tracking-wide font-light max-w-3xl mx-auto mb-10 text-center leading-relaxed"
        >
          Frutos do mar selecionados, fogo de chão e tradição familiar à beira da Praia de Taquaras.
        </motion.p>

        {/* CTA Buttons in Premium Aesthetic */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto items-center justify-center font-sans"
        >
          {/* Primary Call to Action */}
          <a
            id="hero-whatsapp-cta"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-bronze text-white text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-carvao transition-all duration-300 shadow-xl focus:outline-none flex items-center justify-center space-x-2"
          >
            <MessageSquare size={14} className="animate-pulse" />
            <span>RESERVAR PELO WHATSAPP</span>
          </a>

          {/* Secondary Call to Action */}
          <button
            id="hero-menu-cta"
            onClick={() => onActionClick("cardapio")}
            className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border border-white/60 text-xs font-bold tracking-widest uppercase hover:bg-white/10 hover:border-white transition-all duration-300 focus:outline-none"
          >
            VER CARDÁPIO
          </button>

          {/* Tertiary Call to Action - Google Maps Navigation */}
          <a
            id="hero-directions-cta"
            href={RESTAURANT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border border-white/60 text-xs font-bold tracking-widest uppercase hover:bg-white/10 hover:border-white transition-all duration-300 focus:outline-none flex items-center justify-center space-x-2"
          >
            <MapPin size={14} className="text-areia" />
            <span>COMO CHEGAR</span>
          </a>
        </motion.div>
      </div>

      {/* Discrete Scroll Down Prompt */}
      <motion.button
        id="hero-scroll-down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        onClick={() => onActionClick("experiencia")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-marfim/70 hover:text-bronze focus:outline-none transition-colors hidden sm:flex flex-col items-center cursor-pointer"
      >
        <span className="text-[9px] uppercase tracking-[0.4em] font-medium mb-2 opacity-80">
          Descubra Mais
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.0 }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
