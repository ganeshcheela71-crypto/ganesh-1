import React from 'react';
import { CONTACT_INFO, FLEET_VEHICLES, POPULAR_ROUTES } from '../data/fleetData';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Column 1: Brand Info */}
        <div className="flex flex-col gap-3">
          <Logo darkMode size="md" />
          <p className="leading-relaxed text-slate-400">
            Specializing in dedicated family car rentals, long outstation roadtrips, temple pilgrimages, and airport transfers with vetted Toyota Innova Crysta, Maruti Ertiga, and Maruti Baleno fleets.
          </p>
          <span className="text-emerald-400 font-semibold flex items-center gap-1.5 pt-1">
            <span className="material-symbols-outlined text-[16px]">verified</span>
            <span>Commercially Licensed Fleet</span>
          </span>
        </div>

        {/* Column 2: Fleet & Rates */}
        <div className="flex flex-col gap-2">
          <span className="font-heading font-bold text-white uppercase text-xs tracking-wider">
            Our Fleet &amp; Rates (12h / 24h)
          </span>
          {FLEET_VEHICLES.map((v) => (
            <a
              key={v.id}
              href="#fleet"
              className="hover:text-white transition-colors flex justify-between items-center pr-4"
            >
              <span>{v.name}</span>
              <span className="text-slate-400 tabular-nums text-[11px]">₹{v.rate12h} / ₹{v.rate24h}</span>
            </a>
          ))}
          <span className="text-[11px] text-emerald-400 font-medium mt-1">
            *No Toll &amp; No Fuel / Fuel &amp; Toll Extra
          </span>
        </div>

        {/* Column 3: Popular Routes */}
        <div className="flex flex-col gap-2">
          <span className="font-heading font-bold text-white uppercase text-xs tracking-wider">
            Popular Routes
          </span>
          {POPULAR_ROUTES.map((route, i) => (
            <span key={i} className="text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px] text-sky-400">route</span>
              <span>{route}</span>
            </span>
          ))}
        </div>

        {/* Column 4: Direct Contact */}
        <div className="flex flex-col gap-2.5">
          <span className="font-heading font-bold text-white uppercase text-xs tracking-wider">
            Direct Contact
          </span>
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="text-white font-semibold flex items-center gap-2 hover:text-emerald-400 transition-colors"
          >
            <span className="material-symbols-outlined text-[16px] text-sky-400">call</span>
            <span>{CONTACT_INFO.phone}</span>
          </a>
          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-semibold flex items-center gap-2 hover:text-emerald-400 transition-colors"
          >
            <span className="material-symbols-outlined text-[16px] text-emerald-400">chat</span>
            <span>WhatsApp 24/7 Desk</span>
          </a>
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="hover:text-white transition-colors flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[16px] text-slate-400">mail</span>
            <span>{CONTACT_INFO.email}</span>
          </a>
          <span className="flex items-center gap-2 text-slate-400">
            <span className="material-symbols-outlined text-[16px] text-slate-400">location_on</span>
            <span>{CONTACT_INFO.address}</span>
          </span>
          <span className="text-slate-500 text-[11px] pt-1">
            All-inclusive transparent billing guarantee
          </span>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 mt-8 border-t border-slate-800 text-center text-slate-500">
        © 2025 Reeshika Travels Car Rentals Pvt Ltd. All rights reserved. GST compliant outstation mobility services.
      </div>
    </footer>
  );
};
