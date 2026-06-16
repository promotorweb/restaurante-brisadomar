/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Compass, Navigation, ClipboardCheck } from "lucide-react";
import { useState } from "react";
import { RESTAURANT_INFO } from "../data";

export default function MapSection() {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(RESTAURANT_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14217.473539828416!2d-48.58661858593457!3d-27.012586790933742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8cbda1f07f59d%3A0xe54e60bf764fdecd!2sAv.%20Rodesindo%20Pavan%2C%20700%20-%20Taquaras%2C%20Balne%C3%A1rio%20Cambori%C3%BA%20-%20SC%2C%2088334-350!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr";
  // Factual directions query link
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Av.+Rodesindo+Pavan,+700+-+Taquaras,+Balne%C3%A1rio+Cambori%C3%BA+-+SC";

  return (
    <section
      id="localizacao"
      className="py-24 md:py-32 bg-stone-900 border-t border-white/5 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left instructions list - taking 5 cols */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="text-bronze uppercase tracking-[0.4em] text-[11px] font-semibold mb-4 flex items-center">
              <Compass size={12} className="mr-2" /> Trânsito Panorâmico
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight mb-8 uppercase">
              Como Chegar
            </h2>
            <div className="h-0.5 w-16 bg-bronze/60 mb-8" />
            
            <p className="font-serif text-lg text-marfim/90 font-light leading-relaxed mb-6">
              Nosso santuário situa-se logo às margens da Rodovia Interpraias, famosa por seus mirantes de tirar o fôlego e união exuberante da serra com o mar.
            </p>

            <div className="space-y-6 w-full mb-10">
              <div className="flex items-start space-x-4">
                <MapPin className="text-bronze shrink-0 mt-1" size={18} />
                <div>
                  <h4 className="font-serif text-xs font-semibold uppercase text-areia">Endereço Oficial</h4>
                  <p className="text-sm text-marfim/70 mt-1 leading-relaxed">
                    Av. Rodesindo Pavan, 700 - Taquaras <br />
                    Balneário Camboriú — SC, 88334-350
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Navigation className="text-bronze shrink-0 mt-1" size={18} />
                <div>
                  <h4 className="font-serif text-xs font-semibold uppercase text-areia">Acesso Facilitado</h4>
                  <p className="text-sm text-marfim/70 mt-1 leading-relaxed text-xs">
                    Fácil estacionamento privativo e acesso para cadeirantes em frente à charmosa orla. Apenas 12 minutos do centro de Balneário Camboriú.
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons row */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
              {/* Copy address trigger */}
              <button
                id="copy-address-btn"
                onClick={copyAddress}
                className="px-6 py-3.5 bg-stone-800 text-white border border-white/10 text-xs font-semibold tracking-widest uppercase cursor-pointer hover:bg-stone-700 transition-all flex items-center justify-center space-x-2 focus:outline-none"
              >
                <ClipboardCheck size={14} className={copied ? "text-green-400 animate-bounce" : "text-white"} />
                <span>{copied ? "Endereço Copiado!" : "Copiar Endereço"}</span>
              </button>

              {/* Direct Como Chegar link trigger */}
              <a
                id="directions-map-link"
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-bronze text-white text-xs font-semibold tracking-widest uppercase cursor-pointer hover:bg-oceano transition-all flex items-center justify-center space-x-2 focus:outline-none shadow-md"
              >
                <Navigation size={14} className="text-white" />
                <span>Rotas / Como Chegar</span>
              </a>
            </div>
          </div>

          {/* Right iFrame Map display - taking 7 cols */}
          <div className="lg:col-span-7 w-full h-[350px] md:h-[450px] shadow-2xl relative border border-bronze/20 bg-stone-900 group p-1.5">
            <iframe
              id="google-maps-iframe-widget"
              src={mapEmbedUrl}
              title="Brisa do Mar no Google Maps"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[20%] contrast-[110%] w-full h-full"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
