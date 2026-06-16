/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Utensils, BookOpen, Clock, Heart } from "lucide-react";
import { MENU_CATEGORIES, RESTAURANT_INFO } from "../data";

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState(MENU_CATEGORIES[0].id);

  const activeCategory = MENU_CATEGORIES.find((cat) => cat.id === activeTab) || MENU_CATEGORIES[0];

  return (
    <section
      id="cardapio"
      className="py-24 md:py-32 bg-marfim text-carvao overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-bronze uppercase tracking-[0.4em] text-[11px] font-semibold mb-4 flex items-center justify-center">
            <Utensils size={12} className="mr-2" /> Sabores de Taquaras
          </span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-oceano mb-4 uppercase">
            Nossa Gastronomia
          </h2>
          <div className="h-0.5 w-16 bg-bronze/60 mx-auto mb-6" />
          <p className="font-sans text-sm md:text-base text-carvao/60 leading-relaxed">
            Ingredientes colhidos frescos da orla catarinense combinados ao sabor inesquecível da lenha queimada. Uma curadoria artesanal para momentos inesquecíveis.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex justify-center border-b border-areia/40 mb-12 overflow-x-auto scrollbar-none pb-px">
          <div className="flex space-x-2 md:space-x-8 px-4">
            {MENU_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`py-4 px-4 text-xs md:text-sm tracking-widest uppercase font-semibold border-b-2 transition-all duration-300 whitespace-nowrap cursor-pointer focus:outline-none ${
                  activeTab === category.id
                    ? "border-bronze text-bronze"
                    : "border-transparent text-carvao/40 hover:text-carvao"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Category Context Title */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="font-serif italic text-base md:text-lg text-stone-500 max-w-xl mx-auto">
            "{activeCategory.description}"
          </p>
        </div>

        {/* Menu Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {activeCategory.items.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-white border border-areia/20 overflow-hidden shadow-sm flex flex-col justify-between group h-full"
              >
                {/* Image panel */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Floating tag if highlight */}
                  {item.highlight && (
                    <div className="absolute top-4 left-4 bg-bronze text-white text-[9px] uppercase tracking-[0.2em] font-bold px-3 py-1.5 shadow-md">
                      {item.tag || "Especial"}
                    </div>
                  )}
                  {/* Visual gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-carvao/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content Details */}
                <div className="p-6 md:p-8 flex-grow flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="font-serif text-lg md:text-xl font-bold tracking-wide uppercase text-oceano group-hover:text-bronze transition-colors mb-2">
                      {item.name}
                    </h3>
                    <p className="text-xs md:text-sm text-carvao/60 font-light leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-areia/30 pt-4 mt-auto">
                    <span className="text-[10px] tracking-widest uppercase text-bronze font-semibold flex items-center">
                      <Clock size={12} className="mr-1.5" /> Sob Consulta / Fresco
                    </span>
                    <span className="font-serif text-base md:text-lg font-bold text-oceano">
                      {item.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                      })}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Cardápio PDF Disclaimer / Footer note */}
        <div className="mt-16 text-center border-t border-areia/40 pt-10">
          <p className="font-serif italic text-sm text-stone-500 mb-4">
            * Trabalhamos com ingredientes frescos do dia; consulte nossos garçons para opções vegetarianas ou restrições alimentares.
          </p>
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-bronze font-bold">
            <BookOpen size={14} />
            <span>Cardápio Dinâmico atualizado sazonalmente</span>
          </div>
        </div>

      </div>
    </section>
  );
}
