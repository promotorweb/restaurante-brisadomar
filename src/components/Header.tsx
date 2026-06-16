/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Instagram, Phone, MapPin } from "lucide-react";
import { RESTAURANT_INFO } from "../data";

interface HeaderProps {
  onNavClick: (sectionId: string) => void;
}

export default function Header({ onNavClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "A Experiência", id: "experiencia" },
    { name: "Especialidades", id: "fogo" },
    { name: "Cardápio", id: "cardapio" },
    { name: "Galeria", id: "galeria" },
    { name: "Avaliações", id: "avaliacoes" },
  ];

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavClick(id);
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 font-sans ${
          isScrolled
            ? "bg-carvao/80 backdrop-blur-md shadow-xl py-3 border-b border-white/10"
            : "bg-transparent py-5 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo Brand Custom */}
          <button
            id="brand-logo"
            onClick={() => handleLinkClick("hero")}
            className="flex flex-col items-start text-left group focus:outline-none"
          >
            <span
              className="font-serif text-xl md:text-2xl font-bold tracking-widest uppercase transition-colors duration-300 text-white"
            >
              Brisa do Mar
            </span>
            <span
              className="text-[9px] uppercase tracking-[0.3em] font-medium transition-colors duration-300 text-areia"
            >
              Restaurante & Petiscaria
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <button
                id={`nav-link-${link.id}`}
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="text-sm tracking-widest uppercase font-medium relative py-1 transition-colors duration-300 cursor-pointer focus:outline-none hover:text-bronze text-marfim"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-bronze transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Action Buttons Right */}
          <div id="header-actions" className="hidden lg:flex items-center space-x-6">
            <a
              id="instagram-nav-icon"
              href={RESTAURANT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-bronze text-marfim"
            >
              <Instagram size={18} />
            </a>
            <button
              id="header-booking-button"
              onClick={() => handleLinkClick("reservas")}
              className={`text-xs tracking-widest uppercase py-2.5 px-6 font-medium border transition-all duration-300 ${
                isScrolled
                  ? "border-bronze bg-bronze text-white hover:bg-white hover:text-carvao"
                  : "border-areia bg-transparent text-white hover:bg-white hover:text-carvao"
              }`}
            >
              Reservar Mesa
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center space-x-4">
            <a
              id="instagram-mobile-icon"
              href={RESTAURANT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <Instagram size={20} />
            </a>
            <button
              id="mobile-nav-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 focus:outline-none transition-colors duration-300 text-white"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-marfim pt-28 px-8 flex flex-col justify-between pb-10 shadow-lg lg:hidden"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link, idx) => (
                <motion.button
                  id={`mobile-nav-link-${link.id}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className="text-left text-2xl font-serif text-oceano tracking-wide focus:outline-none"
                >
                  {link.name}
                </motion.button>
              ))}

              <motion.button
                id="mobile-nav-booking-btn"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 }}
                onClick={() => handleLinkClick("reservas")}
                className="w-full text-center mt-4 text-xs font-medium tracking-widest uppercase py-4 border border-bronze bg-bronze text-white rounded-none hover:bg-transparent hover:text-bronze transition-all"
              >
                Reservar pelo WhatsApp
              </motion.button>
            </div>

            {/* Mobile Menu Footer Info */}
            <div id="mobile-nav-footer" className="flex flex-col space-y-4 pt-6 border-t border-areia/40">
              <a
                id="mobile-contact-dial"
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="flex items-center text-sm text-carvao/80"
              >
                <Phone size={15} className="mr-3 text-bronze" />
                {RESTAURANT_INFO.phone}
              </a>
              <div className="flex items-start text-sm text-carvao/80">
                <MapPin size={15} className="mr-3 text-bronze mt-0.5 shrink-0" />
                <span className="text-xs leading-relaxed">{RESTAURANT_INFO.address}</span>
              </div>
              <div className="text-[10px] text-carvao/40 tracking-wider">
                © {new Date().getFullYear()} Brisa do Mar Taquaras. Todos os direitos reservados.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
