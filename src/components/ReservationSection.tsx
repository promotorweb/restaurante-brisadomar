/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { Phone, Calendar, Clock, Users, User, ArrowRight, MessageSquare, AlertCircle } from "lucide-react";
import { RESTAURANT_INFO } from "../data";

export default function ReservationSection() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    data: "",
    horario: "",
    pessoas: "2",
  });

  const [validationError, setValidationError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setValidationError(""); // Reset error on change
  };

  // Pre-generate preconfigured structured text for the user to review
  const getWhatsAppMessage = () => {
    const { nome, telefone, data, horario, pessoas } = formData;
    
    // Formatting date to Brazilian layout if present
    let formattedDate = data;
    if (data) {
      const parts = data.split("-");
      if (parts.length === 3) {
        formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
      }
    }

    return `Olá Brisa do Mar! Gostaria de solicitar uma reserva de mesa:
• Nome: ${nome || "[Preencha seu Nome]"}
• WhatsApp: ${telefone || "[Preencha seu WhatsApp]"}
• Data: ${formattedDate || "[Selecione a Data]"}
• Horário: ${horario || "[Selecione o Horário]"}
• Pessoas: ${pessoas} pessoas

Agradeço e aguardo a confirmação da mesa!`;
  };

  const getWhatsAppUrl = () => {
    const textEncoded = encodeURIComponent(getWhatsAppMessage());
    return `https://wa.me/${RESTAURANT_INFO.phoneRaw}?text=${textEncoded}`;
  };

  const handleFormCheck = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { nome, telefone, data, horario } = formData;
    if (!nome.trim() || !telefone.trim() || !data || !horario) {
      e.preventDefault();
      setValidationError("Por favor, preencha todos os campos obrigatórios para prosseguir.");
    }
  };

  return (
    <section
      id="reservas"
      className="py-24 md:py-32 bg-marfim text-carvao overflow-hidden border-t border-areia/40"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Information Column Side - taking 5 cols */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="text-bronze uppercase tracking-[0.4em] text-[11px] font-semibold mb-4 flex items-center">
              <MessageSquare size={12} className="mr-2" /> Sua Reserva Imediata
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-oceano mb-6 uppercase">
              Reserve Sua Mesa
            </h2>
            <div className="h-0.5 w-16 bg-bronze/60 mb-8" />
            
            <p className="font-serif text-lg text-carvao/80 font-light leading-relaxed mb-6">
              Garanta com antecedência seu refúgio no litoral. Nosso atendimento pelo WhatsApp é rápido, descomplicado e personalizado pela nossa equipe familiar.
            </p>

            <span className="text-xs uppercase tracking-widest text-bronze font-bold mb-8">
              Contatos Diretos
            </span>

            {/* List Contact Details cards */}
            <div className="space-y-4 w-full">
              <div className="p-4 bg-white border border-areia/30 flex items-center space-x-4">
                <div className="p-3 bg-bronze/10 text-bronze">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="font-serif text-xs font-semibold uppercase text-oceano">Atendimento WhatsApp</h4>
                  <p className="text-sm text-carvao/70 mt-0.5">Avise-nos sobre ocasiões especiais!</p>
                  <p className="text-xs text-bronze font-mono font-bold mt-1">{RESTAURANT_INFO.phone}</p>
                </div>
              </div>

              <div className="p-4 bg-white border border-areia/30 text-xs text-carvao/60 space-y-1">
                <p className="font-serif text-xs font-semibold uppercase text-oceano text-[11px] mb-1">Horário de Atendimento Especial</p>
                <p>• Segunda a Sexta: 11:30 às 17h</p>
                <p>• Sábados, Domingos e Feriados: 11h às 19h</p>
              </div>
            </div>
          </div>

          {/* Core Interactive Booking Form Panel - taking 7 cols */}
          <div className="lg:col-span-7 bg-white border border-areia/40 p-8 shadow-xl">
            <h3 className="font-serif text-xl font-bold uppercase tracking-wide text-oceano mb-6 border-b border-areia/20 pb-4 flex items-center justify-between">
              <span>Formulário de Solicitação</span>
              <span className="text-[10px] tracking-widest text-stone-400 font-sans font-medium uppercase">Preencha Abaixo</span>
            </h3>

            {/* Error alerts if present */}
            {validationError && (
              <div className="bg-red-50 border-l-4 border-red-500 text-red-800 p-4 mb-6 flex items-start text-xs leading-relaxed">
                <AlertCircle size={16} className="mr-2 text-red-600 shrink-0 mt-0.5" />
                <span>{validationError}</span>
              </div>
            )}

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Nome */}
                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#1D1D1D] mb-1 block">
                    Nome Completo <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User size={15} className="absolute left-3 top-3.5 text-stone-400" />
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      placeholder="Ex: João Silva"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-areia focus:outline-none focus:border-bronze text-sm bg-marfim/10 rounded-none h-11"
                    />
                  </div>
                </div>

                {/* Telefone */}
                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#1D1D1D] mb-1 block">
                    WhatsApp do Titular <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone size={15} className="absolute left-3 top-3.5 text-stone-400" />
                    <input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      placeholder="Ex: (47) 99688-5074"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-areia focus:outline-none focus:border-bronze text-sm bg-marfim/10 rounded-none h-11"
                    />
                  </div>
                </div>

                {/* Data */}
                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#1D1D1D] mb-1 block">
                    Data Desejada <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar size={15} className="absolute left-3 top-3.5 text-stone-400" />
                    <input
                      type="date"
                      name="data"
                      value={formData.data}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-areia focus:outline-none focus:border-bronze text-sm bg-marfim/10 rounded-none h-11"
                    />
                  </div>
                </div>

                {/* Horário */}
                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#1D1D1D] mb-1 block">
                    Horário da Chegada <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Clock size={15} className="absolute left-3 top-3.5 text-stone-400" />
                    <select
                      name="horario"
                      value={formData.horario}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-areia focus:outline-none focus:border-bronze text-sm bg-marfim/10 rounded-none appearance-none h-11"
                    >
                      <option value="">Selecione...</option>
                      <option value="11:30">11:30</option>
                      <option value="12:00">12:00</option>
                      <option value="12:30">12:30</option>
                      <option value="13:00">13:00</option>
                      <option value="13:30">13:30</option>
                      <option value="14:00">14:00</option>
                      <option value="14:30">14:30</option>
                      <option value="15:00">15:00</option>
                      <option value="15:30">15:30</option>
                      <option value="16:00">16:00</option>
                      <option value="16:30">16:30</option>
                      <option value="17:00">17:00</option>
                    </select>
                  </div>
                </div>

                {/* Quantidade de Pessoas */}
                <div className="space-y-1.5 text-left sm:col-span-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#1D1D1D] mb-1 block">
                    Quantidade de Pessoas <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Users size={15} className="absolute left-3 top-3.5 text-stone-400" />
                    <select
                      name="pessoas"
                      value={formData.pessoas}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-areia focus:outline-none focus:border-bronze text-sm bg-marfim/10 rounded-none appearance-none h-11"
                    >
                      <option value="1">1 Pessoa</option>
                      <option value="2">2 Pessoas</option>
                      <option value="3">3 Pessoas</option>
                      <option value="4">4 Pessoas</option>
                      <option value="5">5 Pessoas</option>
                      <option value="6">6 Pessoas</option>
                      <option value="7">7 Pessoas</option>
                      <option value="8">8 Pessoas (ou mais)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* IMMERSIVE MESSAGE BOX PREVIEW */}
              <div className="pt-6 border-t border-areia/30">
                <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 text-left mb-2">
                  Visualização da Mensagem Pré-formatada
                </p>
                <div className="p-4 bg-marfim/50 border border-areia/25 rounded-none text-left font-mono text-[11px] text-carvao/80 whitespace-pre-line leading-relaxed shadow-inner">
                  {getWhatsAppMessage()}
                </div>
              </div>

              {/* ACTION RESERVAR WHATSAPP BUTTON LINK (Safe for iframe blocks) */}
              <a
                id="booking-submit-btn"
                href={getWhatsAppUrl()}
                onClick={handleFormCheck}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-4 bg-bronze text-white text-xs font-semibold tracking-widest uppercase hover:bg-oceano transition-all duration-300 flex items-center justify-center space-x-2 shadow-sm rounded-none focus:outline-none mt-8"
              >
                <span>Reservar pelo WhatsApp</span>
                <ArrowRight size={14} />
              </a>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
