/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Star, ShieldCheck, Quote, Compass } from "lucide-react";
import { REVIEWS } from "../data";

export default function ReviewsSection() {
  return (
    <section
      id="avaliacoes"
      className="py-24 md:py-32 bg-stone-900 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Average metrics panel - 4 cols on lg */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <span className="text-bronze uppercase tracking-[0.4em] text-[11px] font-semibold mb-4 flex items-center">
              <ShieldCheck size={12} className="mr-2" /> Avaliações Verificadas
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight mb-6 uppercase">
              O Que Dizem <br />
              Nossos Clientes
            </h2>
            <div className="h-0.5 w-16 bg-bronze/60 mb-8" />
            
            {/* Massive overall score */}
            <div className="bg-stone-800/40 border border-white/5 p-8 w-full backdrop-blur-sm text-center lg:text-left flex flex-col items-center lg:items-start space-y-4">
              <div className="flex items-baseline space-x-1">
                <span className="text-5xl sm:text-6xl font-serif font-black text-bronze">4.8</span>
                <span className="text-xl text-marfim/40">/ 5.0</span>
              </div>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={20} className="fill-bronze text-bronze" />
                ))}
              </div>
              <p className="text-xs text-marfim/60 font-sans tracking-wide">
                Média calculada com base em mais de <strong className="text-areia font-semibold">600 avaliações</strong> reais consolidadas no Google e TripAdvisor, celebrando a excelência gastronômica.
              </p>
            </div>
          </div>

          {/* Testimonials feeds - 8 cols on lg */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {REVIEWS.map((rev) => (
                <div
                  key={rev.id}
                  className="bg-stone-950/40 border border-white/5 p-8 flex flex-col justify-between items-start backdrop-blur-sm shadow-xl relative group hover:border-bronze/40 transition-colors duration-400 min-h-[285px]"
                >
                  {/* Decorative quote icon */}
                  <div className="absolute top-4 right-6 text-bronze/10 group-hover:text-bronze/20 transition-colors duration-400">
                    <Quote size={56} className="rotate-180" />
                  </div>

                  <div>
                    {/* Stars bar */}
                    <div className="flex space-x-1 mb-5">
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <Star key={i} size={14} className="fill-bronze text-bronze" />
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="text-xs md:text-sm text-marfim/80 leading-relaxed font-sans font-light mb-6">
                      "{rev.text}"
                    </p>
                  </div>

                  {/* Review signature */}
                  <div className="flex items-center space-x-3 mt-auto pt-4 border-t border-white/5 w-full">
                    {/* Avatar sphere */}
                    <div className="w-9 h-9 rounded-full bg-bronze/20 border border-bronze/40 flex items-center justify-center font-serif text-sm font-bold text-areia">
                      {rev.avatarLetter}
                    </div>
                    <div>
                      <h4 className="font-serif text-xs font-semibold uppercase tracking-wide text-areia">
                        {rev.author}
                      </h4>
                      <div className="flex items-center space-x-1.5 text-[10px] text-marfim/40 uppercase tracking-widest font-mono">
                        <span>{rev.date}</span>
                        <span>•</span>
                        <span className="text-bronze/80 font-medium">{rev.source}</span>
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
