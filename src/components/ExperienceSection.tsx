/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Waves, Heart, Compass } from "lucide-react";
import { IMAGES } from "../data";

export default function ExperienceSection() {
  return (
    <section
      id="experiencia"
      className="relative py-24 md:py-32 bg-marfim border-y border-areia/40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Layout Column Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text content - taking 7 cols on lg */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-bronze uppercase tracking-[0.3em] text-[11px] font-semibold mb-3 flex items-center">
              <Compass size={12} className="mr-2" /> O Destino Singular
            </span>

            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-oceano font-bold tracking-tight mb-8 leading-[1.1] uppercase">
              Mais do que um restaurante. <br />
              <span className="italic font-serif font-light text-carvao text-2xl md:text-4xl tracking-wide capitalize block mt-2 text-stone-500">
                Uma vivência sensorial completa.
              </span>
            </h2>

            <div className="h-0.5 w-16 bg-bronze/60 mb-8" />

            <p className="font-serif text-xl md:text-2xl text-carvao/80 font-light leading-relaxed mb-6">
              Uma experiência construída com os pés na areia, ao som suave do mar
              e os aromas autênticos da gastronomia de tradição de Taquaras.
            </p>

            <p className="font-sans text-sm md:text-base text-carvao/60 leading-relaxed mb-10 max-w-xl">
              Há anos, o Brisa do Mar abre suas portas para receber de braços abertos
              moradores, turistas e famílias de todo o mundo. Aqui, cada detalhe é
              curado para conectar você à simplicidade exuberante do litoral catarinense.
            </p>

            {/* Features Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full pt-4 border-t border-areia/40">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2 text-bronze">
                  <Waves size={18} />
                  <span className="font-serif text-base font-semibold text-oceano">Praia & Alma</span>
                </div>
                <p className="text-xs text-carvao/60 leading-relaxed">
                  Pé na areia fina e águas limpas da Praia de Taquaras.
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2 text-bronze">
                  <span className="font-serif text-base font-semibold text-oceano">Fogo de Chão</span>
                </div>
                <p className="text-xs text-carvao/60 leading-relaxed">
                  O incomparável tempero das chamas vivas na roda de assado.
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2 text-bronze">
                  <Heart size={18} />
                  <span className="font-serif text-base font-semibold text-oceano">Família</span>
                </div>
                <p className="text-xs text-carvao/60 leading-relaxed">
                  Atendimento caloroso focado no carinho familiar.
                </p>
              </div>
            </div>
          </div>

          {/* Media layout - taking 5 cols on lg */}
          <div className="lg:col-span-5 relative w-full h-[400px] md:h-[550px] shadow-2xl overflow-hidden group">
            {/* Elegant outer frame style */}
            <div className="absolute inset-4 border border-marfim/30 z-20 pointer-events-none" />
            <img
              src={IMAGES.ambiance}
              alt="Ambiente rústico e sofisticado do Brisa do Mar"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-carvao/50 via-transparent to-transparent z-10" />
            <div className="absolute bottom-6 left-6 z-20 text-white">
              <p className="text-[10px] uppercase tracking-[0.3em] text-areia mb-1">Nosso Deck Principal</p>
              <h3 className="font-serif text-lg tracking-wide uppercase">Sofisticação Orgânica</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
