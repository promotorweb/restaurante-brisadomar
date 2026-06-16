/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ExperienceSection from "./components/ExperienceSection";
import FogoSection from "./components/FogoSection";
import MenuSection from "./components/MenuSection";
import TaquarasSection from "./components/TaquarasSection";
import GallerySection from "./components/GallerySection";
import ReviewsSection from "./components/ReviewsSection";
import ReservationSection from "./components/ReservationSection";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";

export default function App() {
  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    
    // Calculate header height offset for perfect visual landing
    const header = document.getElementById("main-header");
    const headerHeight = header ? header.offsetHeight : 80;
    
    const elementPosition = target.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  };

  return (
    <div id="brisa-do-mar-app" className="min-h-screen bg-marfim font-sans antialiased text-carvao selection:bg-bronze selection:text-white">
      {/* Premium Header/Navigation Menu */}
      <Header onNavClick={scrollToSection} />

      <main id="main-content-flow">
        {/* SECTION 1 - HERO */}
        <HeroSection onActionClick={scrollToSection} />

        {/* SECTION 2 - EXPERIENCE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0 }}
        >
          <ExperienceSection />
        </motion.div>

        {/* SECTION 3 - THE SPECTACLE OF FIRE (FOGO DE CHÃO) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0 }}
        >
          <FogoSection />
        </motion.div>

        {/* SECTION 4 - TROPICAL CUISINE & SEAFOOD MENU */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0 }}
        >
          <MenuSection />
        </motion.div>

        {/* SECTION 5 - ESCENARIO PRAIA DE TAQUARAS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0 }}
        >
          <TaquarasSection />
        </motion.div>

        {/* SECTION 6 - MASONRY IMAGES GALLERY & LIGHTBOX */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0 }}
        >
          <GallerySection />
        </motion.div>

        {/* SECTION 7 - VERIFIED TESTIMONIALS & STATS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0 }}
        >
          <ReviewsSection />
        </motion.div>

        {/* SECTION 8 - INTERACTIVE RESERVATIONS ENGINE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0 }}
        >
          <ReservationSection />
        </motion.div>

        {/* SECTION 9 - MAPS ROUTING DIRECTION PANELS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0 }}
        >
          <MapSection />
        </motion.div>
      </main>

      {/* FOOTER & SEO TAGS ROW */}
      <Footer onNavClick={scrollToSection} />
    </div>
  );
}
