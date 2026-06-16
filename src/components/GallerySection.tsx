/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Maximize2, X, ChevronLeft, ChevronRight, Compass, Sparkles } from "lucide-react";
import { GALLERY_ITEMS, GalleryItem } from "../data";

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<string>("todos");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterOptions = [
    { name: "Todos", value: "todos" },
    { name: "Roda Gigante", value: "roda-gigante" },
    { name: "Peixes", value: "peixes" },
    { name: "Pratos", value: "pratos" },
    { name: "Petiscos", value: "petiscos" },
    { name: "Drinks", value: "drinks" },
    { name: "Ambiente", value: "ambiente" },
  ];

  const filteredItems = activeFilter === "todos"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const openLightbox = (item: GalleryItem) => {
    const idx = GALLERY_ITEMS.findIndex((x) => x.id === item.id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const navigateLightbox = (dir: "prev" | "next") => {
    if (lightboxIndex === null) return;
    let nextIndex = dir === "prev" ? lightboxIndex - 1 : lightboxIndex + 1;
    
    if (nextIndex < 0) {
      nextIndex = GALLERY_ITEMS.length - 1;
    } else if (nextIndex >= GALLERY_ITEMS.length) {
      nextIndex = 0;
    }
    setLightboxIndex(nextIndex);
  };

  return (
    <section
      id="galeria"
      className="py-24 md:py-32 bg-marfim text-carvao overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-bronze uppercase tracking-[0.4em] text-[11px] font-semibold mb-4 flex items-center justify-center">
            <Sparkles size={11} className="mr-2" /> Visuais Cinematográficos
          </span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-oceano mb-4 uppercase">
            Galeria Imersiva
          </h2>
          <div className="h-0.5 w-16 bg-bronze/60 mx-auto mb-6" />
          <p className="font-sans text-sm md:text-base text-carvao/60 leading-relaxed">
            Navegue pelos detalhes minuciosos que fazem do Brisa do Mar um santuário gastronômico único. Praia preservada, cozimento lento na brasa e aconchego.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12 border-b border-areia/40 pb-6 max-w-xl mx-auto">
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setActiveFilter(opt.value)}
              className={`text-[10px] md:text-xs font-semibold tracking-widest uppercase py-2.5 px-5 transition-all duration-300 border focus:outline-none cursor-pointer ${
                activeFilter === opt.value
                  ? "border-bronze bg-bronze text-white shadow-sm"
                  : "border-areia bg-transparent text-carvao/60 hover:text-carvao hover:border-carvao"
              }`}
            >
              {opt.name}
            </button>
          ))}
        </div>

        {/* Masonry-Style Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => openLightbox(item)}
                className="relative overflow-hidden group cursor-pointer border border-areia/10 break-inside-avoid-column shadow-sm mb-6 inline-block w-full bg-stone-100"
              >
                {/* Image */}
                <img
                  src={item.url}
                  alt={item.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Ambient Soft Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-carvao/80 via-carvao/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6" />

                {/* Info block revealed on hover */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                  <div className="flex justify-end">
                    <div className="bg-marfim/20 backdrop-blur-md p-2.5 text-white.">
                      <Maximize2 size={14} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.3em] text-areia font-bold">
                      {item.category === "praia" ? "Taquaras Beach" : item.category === "fogo" ? "Fogo de Chão" : item.category === "gastronomia" ? "Gastronomia" : "Ambiente Deck"}
                    </span>
                    <h4 className="font-serif text-base font-medium text-white tracking-wide uppercase mt-1">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Fully Immersive Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-carvao/98 backdrop-blur-md flex flex-col justify-between p-6 md:p-12 text-white"
          >
            {/* Top Toolbar */}
            <div className="flex justify-between items-center z-10">
              <span className="font-serif text-sm tracking-widest text-areia uppercase">
                {lightboxIndex + 1} / {GALLERY_ITEMS.length} • Brisa do Mar
              </span>
              <button
                onClick={closeLightbox}
                className="p-2 hover:text-bronze focus:outline-none cursor-pointer transition-colors"
                id="lightbox-close"
              >
                <X size={30} />
              </button>
            </div>

            {/* Central Media Holder */}
            <div className="relative flex-grow flex items-center justify-center max-w-5xl mx-auto w-full my-6 select-none">
              
              {/* Back Button */}
              <button
                id="lightbox-prev"
                onClick={() => navigateLightbox("prev")}
                className="absolute left-0 md:-left-16 p-3 hover:text-bronze focus:outline-none transition-colors z-20 cursor-pointer"
              >
                <ChevronLeft size={36} />
              </button>

              <AnimatePresence mode="wait">
                <motion.div
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className="max-h-[70vh] flex flex-col justify-center items-center relative"
                >
                  <img
                    src={GALLERY_ITEMS[lightboxIndex].url}
                    alt={GALLERY_ITEMS[lightboxIndex].title}
                    referrerPolicy="no-referrer"
                    className="max-h-[60vh] max-w-full object-contain shadow-2xl border border-white/5"
                  />
                  <div className="text-center mt-6">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-bronze font-bold">
                      {GALLERY_ITEMS[lightboxIndex].category}
                    </span>
                    <h3 className="font-serif text-xl font-bold uppercase tracking-wide mt-1 text-areia">
                      {GALLERY_ITEMS[lightboxIndex].title}
                    </h3>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Next Button */}
              <button
                id="lightbox-next"
                onClick={() => navigateLightbox("next")}
                className="absolute right-0 md:-right-16 p-3 hover:text-bronze focus:outline-none transition-colors z-20 cursor-pointer"
              >
                <ChevronRight size={36} />
              </button>
            </div>

            {/* Bottom Footer Notes inside modal */}
            <div className="text-center text-xs text-white/40 tracking-wider z-10">
              Pressione as setas laterais para navegar. Desfrute da nossa tradição.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
