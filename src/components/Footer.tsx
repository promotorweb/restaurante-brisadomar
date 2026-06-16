/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram, Phone, MapPin, Compass, Sparkles, Navigation } from "lucide-react";
import { RESTAURANT_INFO } from "../data";

interface FooterProps {
  onNavClick: (id: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer-block" className="bg-carvao text-white pt-20 pb-10 border-t border-white/5 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          
          {/* Brand Presentation - 4 cols on lg */}
          <div className="lg:col-span-4 flex flex-col items-start text-left space-y-6">
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-widest uppercase text-white">
                Brisa do Mar
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-bronze font-semibold">
                Restaurante & Petiscaria
              </span>
            </div>
            <p className="text-xs text-marfim/60 leading-relaxed max-w-sm">
              Um santuário gastronômico refinado e familiar na paradisíaca Praia de Taquaras. Aliando peixes fresquíssimos da baía com a ancestralidade do assado fogo de chão na Roda Gigante Deretti.
            </p>
            <div className="flex items-center space-x-4">
              <a
                id="footer-insta-link"
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-marfim/80 hover:bg-bronze hover:text-white transition-all duration-300 border border-white/5"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick links - 2 cols on lg */}
          <div className="lg:col-span-2 flex flex-col items-start text-left space-y-4">
            <h4 className="font-serif text-xs font-semibold uppercase tracking-widest text-[#E5D8C3] pb-2 border-b border-white/5 w-full">
              Index
            </h4>
            <div className="flex flex-col space-y-2.5 text-xs text-marfim/60">
              <button onClick={() => onNavClick("hero")} className="hover:text-bronze text-left cursor-pointer transition-colors focus:outline-none">Início</button>
              <button onClick={() => onNavClick("experiencia")} className="hover:text-bronze text-left cursor-pointer transition-colors focus:outline-none">Expêriencia</button>
              <button onClick={() => onNavClick("fogo")} className="hover:text-bronze text-left cursor-pointer transition-colors focus:outline-none">O Fogo</button>
              <button onClick={() => onNavClick("cardapio")} className="hover:text-bronze text-left cursor-pointer transition-colors focus:outline-none">Cardápio</button>
              <button onClick={() => onNavClick("taquaras")} className="hover:text-bronze text-left cursor-pointer transition-colors focus:outline-none">Taquaras</button>
              <button onClick={() => onNavClick("galeria")} className="hover:text-bronze text-left cursor-pointer transition-colors focus:outline-none">Galeria</button>
            </div>
          </div>

          {/* Contact Details - 3 cols on lg */}
          <div className="lg:col-span-3 flex flex-col items-start text-left space-y-4">
            <h4 className="font-serif text-xs font-semibold uppercase tracking-widest text-[#E5D8C3] pb-2 border-b border-white/5 w-full">
              Atendimento e Contatos
            </h4>
            <div className="flex flex-col space-y-4 text-xs text-marfim/60">
              <a href={`tel:${RESTAURANT_INFO.phoneRaw}`} className="flex items-center hover:text-bronze transition-colors">
                <Phone size={14} className="mr-3 text-bronze shrink-0" />
                <span>{RESTAURANT_INFO.phone}</span>
              </a>
              <div className="flex items-start">
                <MapPin size={14} className="mr-3 text-bronze shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Av. Rodesindo Pavan, 700 <br />
                  Taquaras, Balneário Camboriú - SC
                </span>
              </div>
              <div className="flex items-center text-[11px] text-bronze bg-white/5 px-2.5 py-1 w-fit rounded-none font-medium">
                <Sparkles size={11} className="mr-1.5" />
                <span>Mesa reservada via WhatsApp</span>
              </div>
            </div>
          </div>

          {/* SEO helper box - 3 cols on lg */}
          <div className="lg:col-span-3 flex flex-col items-start text-left space-y-4">
            <h4 className="font-serif text-xs font-semibold uppercase tracking-widest text-[#E5D8C3] pb-2 border-b border-white/5 w-full">
              Explorar SC
            </h4>
            <p className="text-[11px] text-marfim/40 leading-relaxed mb-1">
              Orgulhosamente listado nos principais guias turísticos gastronômicos do Litoral Catarinense (Rota Interpraias de BC).
            </p>
            {/* SEO targets badges optimized */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {RESTAURANT_INFO.seoTargets.map((seoTag, sIdx) => (
                <span
                  key={sIdx}
                  className="text-[9px] uppercase tracking-wider bg-white/[0.03] border border-white/5 px-2 py-1 text-marfim/50 hover:text-bronze transition-colors duration-300"
                >
                  #{seoTag.replace(/\s+/g, "-")}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-10 flex flex-col sm:flex-row justify-between items-center text-[10px] text-marfim/40 tracking-wider">
          <p>© {currentYear} Brisa do Mar — Restaurante e Petiscaria. Todos os direitos reservados.</p>
          <p className="mt-2 sm:mt-0 flex items-center">
            <span>Desenvolvido com sofisticação de hospitalidade premium</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
