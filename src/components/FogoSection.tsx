/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Flame, Clock, RotateCw, ShieldCheck, Sparkles } from "lucide-react";
import { IMAGES } from "../data";

export default function FogoSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      url: IMAGES.rodaGiganteCarne,
      title: "COSTELAS PREMIUM",
      desc: "Grandes cortes assados lentamente na tradicional Roda Gigante Deretti.",
      eyebrow: "Sabor Absoluto"
    },
    {
      url: IMAGES.rodaGigantePeixe,
      title: "PEIXES INTEIROS",
      desc: "Peixes selecionados preparados lentamente sobre brasas nobres.",
      eyebrow: "Pesca do Dia"
    },
    {
      url: IMAGES.rodaGigante2,
      title: "RODA GIGANTE",
      desc: "O espetáculo do autêntico assado sulista realizado diariamente ao vivo.",
      eyebrow: "Tradição Viva"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // 4 seconds interval as requested
    return () => clearInterval(timer);
  }, [slides.length]);

  const highlights = [
    {
      title: "Costelas Premium",
      time: "6 a 8 Horas",
      desc: "Nossas costelas bovinas selecionadas passam por um cozimento ultra lento na Roda Gigante Deretti, que gira continuamente, garantindo que a gordura derreta e hidrate a carne de forma homogênea.",
      icon: <Flame size={20} className="text-bronze" />,
      tag: "O Prato de Assinatura"
    },
    {
      title: "Peixes na Grelha",
      time: "2 a 3 Horas",
      desc: "Anchovas e outros peixes inteiros da Praia de Taquaras são abertos e defumados lentamente na Roda Deretti, selando a umidade natural da carne com o sabor exclusivo da lenha nobre.",
      icon: <Sparkles size={20} className="text-bronze" />,
      tag: "Pesca Tradicional"
    },
    {
      title: "Cortes Selecionados",
      time: "Preparo Técnico",
      desc: "Prime Rib, Short Rib e mignons assados com precisão. A combinação perfeita de calor indireto, controle de fluxo de fumaça e selagem em brasa viva para criar a crosta perfeita.",
      icon: <ShieldCheck size={20} className="text-bronze" />,
      tag: "Gourmet Angus"
    }
  ];

  return (
    <section
      id="fogo"
      className="relative bg-carvao text-white py-24 md:py-32 overflow-hidden"
    >
      {/* Background image elements with beautiful amber charcoal masks */}
      <div className="absolute inset-0 select-none pointer-events-none opacity-40 z-0">
        <img
          src={IMAGES.fogoDeChao}
          alt="Braseiro e costela fogo de chão"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 filter blur-[2px]"
        />
        <div className="absolute inset-0 embers-gradient-overlay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Media Layout side - taking 5 columns on lg */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative overflow-hidden border border-bronze/40 p-2 bg-stone-900/40 backdrop-blur-sm">
              <div className="aspect-[4/5] relative overflow-hidden">
                {/* Dynamic Image Slideshow */}
                <div className="absolute inset-0 z-0">
                  {slides.map((slide, idx) => {
                    const isActive = idx === currentSlide;
                    return (
                      <div
                        key={idx}
                        className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                        style={{
                          opacity: isActive ? 1 : 0,
                          zIndex: isActive ? 1 : 0,
                        }}
                      >
                        <img
                          src={slide.url}
                          alt={slide.title}
                          referrerPolicy="no-referrer"
                          className={`w-full h-full object-cover ${
                            isActive
                              ? "transition-transform duration-[4000ms] ease-linear scale-108"
                              : "scale-100"
                          }`}
                        />
                      </div>
                    );
                  })}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-carvao via-transparent to-transparent opacity-85 z-10 pointer-events-none" />
                
                {/* Float sticker for Roda Deretti */}
                <div className="absolute top-4 left-4 bg-bronze/90 backdrop-blur-sm text-white px-4 py-2 text-[10px] uppercase tracking-[0.2em] font-semibold flex items-center space-x-2 z-20 pointer-events-none">
                  <RotateCw size={12} className="animate-spin text-white" style={{ animationDuration: "12s" }} />
                  <span>Roda Gigante Deretti</span>
                </div>

                {/* Animated dynamic text panel */}
                <div className="absolute bottom-6 left-6 right-6 z-25 min-h-[72px] flex flex-col justify-end pointer-events-none">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <p className="text-[10px] uppercase tracking-[0.3em] text-areia mb-1 font-semibold">
                      {slides[currentSlide].eyebrow}
                    </p>
                    <h4 className="font-serif text-lg tracking-wide uppercase text-white font-medium">
                      {slides[currentSlide].title}
                    </h4>
                    <p className="text-xs text-marfim/70 mt-1 leading-relaxed">
                      {slides[currentSlide].desc}
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Text panel - taking 7 columns on lg */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start text-left">
            <span className="text-bronze uppercase tracking-[0.4em] text-[11px] font-semibold mb-4 flex items-center">
              <Flame size={12} className="mr-2 animate-pulse text-red-500" /> O Ritual do Fogo de Chão
            </span>

            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 uppercase">
              O Espetáculo Acontece <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-areia to-bronze font-serif italic text-stroke-bronze">
                Todos os Dias
              </span>
            </h2>

            <p className="font-sans text-sm md:text-base text-marfim/80 mb-10 max-w-xl leading-relaxed">
              O Brisa do Mar utiliza de forma pioneira a lendária <strong className="text-areia font-medium">Roda Gigante Deretti</strong> para assar grandes cortes, costelas bovinas e peixes inteiros. Girando lentamente sobre lenhas nobres, as proteínas recebem calor uniforme e defumação ideal, criando um sabor suculento incomparável.
            </p>

            {/* Interactive Tabs Layout */}
            <div className="w-full space-y-4">
              <div className="flex border-b border-white/10 scrollbar-none overflow-x-auto pb-px">
                {highlights.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`py-3 px-4 font-serif text-sm md:text-base tracking-wide uppercase transition-all duration-300 border-b-2 mr-4 whitespace-nowrap focus:outline-none cursor-pointer ${
                      activeTab === idx
                        ? "border-bronze text-areia font-semibold"
                        : "border-transparent text-marfim/40 hover:text-marfim"
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </div>

              {/* Tab Display Pane */}
              <div className="bg-stone-900/40 border border-white/5 p-6 backdrop-blur-sm min-h-[180px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-bronze font-semibold">
                      {highlights[activeTab].tag}
                    </span>
                    <span className="flex items-center text-xs text-areia/80 bg-white/5 px-2.5 py-1">
                      <Clock size={12} className="mr-1.5" />
                      {highlights[activeTab].time}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg md:text-xl font-bold tracking-wide uppercase mb-2">
                    {highlights[activeTab].title}
                  </h3>
                  <p className="text-xs md:text-sm text-marfim/70 leading-relaxed">
                    {highlights[activeTab].desc}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
