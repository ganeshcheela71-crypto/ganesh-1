import React from 'react';
import { CONTACT_INFO } from '../data/fleetData';

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-16 bg-[#0f172a] text-white relative overflow-hidden">
      {/* Subtle backdrop glow */}
      <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="flex flex-col gap-2 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
            Planning a Family Vacation or Outstation Roadtrip?
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
            Speak Directly with Our Fleet Coordinator
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Get customized itinerary planning, ghat route guidance, and instant car reservation via WhatsApp or direct phone call.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent("Hello Reeshika Travels, I would like to plan a family road trip.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-3.5 px-6 shadow-lg shadow-emerald-500/20"
          >
            <span className="material-symbols-outlined text-[22px]">chat</span>
            <span>WhatsApp Us (+91 7815989020)</span>
          </a>

          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="btn-dark py-3.5 px-6 bg-slate-800 hover:bg-slate-700 border border-slate-700"
          >
            <span className="material-symbols-outlined text-[20px]">call</span>
            <span>Call 24/7 Helpline</span>
          </a>
        </div>

      </div>
    </section>
  );
};
