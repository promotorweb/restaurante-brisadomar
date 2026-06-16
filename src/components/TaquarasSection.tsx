/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Compass, Waves, Map, Flame } from "lucide-react";
import { IMAGES, RESTAURANT_INFO } from "../data";

export default function TaquarasSection() {
  const highlights = [
    {
      icon: <Waves size={20} className="text-bronze" />,
      title: "Mar Sutil e Cristalino",
      desc: "Taquaras possui águas mansas de cor esmeralda, perfeita para relaxamento e mergulho seguro em família."
    },
    {
      icon: <Compass size={20} className="text-bronze" />,
      title: "Rota Interpraias Rústica",
      desc: "Localizada ao longo de uma das estradas panorâmicas mais fascinantes do Sul do Brasil, longe das selvas de concreto."
    },
    {
      icon: <Map size={20} className="text-bronze" />,
      title: "Cultura Marítima Ativa",
      desc: "Taquaras abriga colônias de pescadores tradicionais, mantendo viva a cultura artesanal catarinense de pesca do cerco."
    }
  ];

  return (
    <section
      id="taquaras"
      className="py-24 md:py-32 bg-stone-900 text-white overflow-hidden relative"
    >
      {/* Visual Ambient Parallax background of Taquaras Beach drone style */}
      <div className="absolute inset-0 select-none pointer-events-none opacity-30 z-0">
        <img
          src={IMAGES.beachDrone}
          alt="Taquaras Drone vista costeira"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text content details */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-1">
            <span className="text-bronze uppercase tracking-[0.4em] text-[11px] font-semibold mb-4 flex items-center">
              <Compass size={12} className="mr-2" /> Localização Exclusiva
            </span>

            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-[1.1] uppercase">
              Um dos cenários <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-areia to-bronze font-serif italic text-stroke-bronze">
                Mais Preservados
              </span>{" "}
              de Balneário Camboriú
            </h2>

            <div className="h-0.5 w-16 bg-bronze/60 mb-8" />

            <p className="font-serif text-xl md:text-2xl text-marfim/90 font-light leading-relaxed mb-6">
              Localizado na icônica Praia de Taquaras, o Brisa do Mar oferece uma combinação singular entre natureza intocada, alta gastronomia e paz absoluta.
            </p>

            <p className="font-sans text-sm md:text-base text-marfim/60 leading-relaxed mb-10 max-w-xl">
              Famosa por seu visual intocado, morros cobertos de mata nativa e tranquilidade fascinante, a Praia de Taquaras é o refúgio perfeito contra as tensões cotidianas. Aqui, você saboreia o melhor do mar longe do barulho urbano, no verdadeiro paraíso litorâneo catarinense.
            </p>

            {/* List coordinates highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full pt-8 border-t border-white/10">
              {highlights.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center space-x-2 text-bronze">
                    {item.icon}
                  </div>
                  <h4 className="font-serif text-sm font-semibold uppercase text-areia">{item.title}</h4>
                  <p className="text-xs text-marfim/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Layout */}
          <div className="lg:col-span-5 order-2">
            <div className="relative group overflow-hidden border border-bronze/30 p-2.5 bg-stone-900/60 backdrop-blur-sm shadow-2xl">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={IMAGES.hero}
                  alt="Aerial Drone de Taquaras e o Brisa do Mar"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-stone-950/20" />
              </div>
              <div className="p-4 bg-stone-900 border-t border-white/10 flex justify-between items-center text-xs text-marfim/70">
                <span className="font-mono text-[10px] tracking-widest uppercase">COORD: 27° 00' 51" S | 48° 34' 40" W</span>
                <span className="text-bronze font-semibold">Balneário Camboriú, SC</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
