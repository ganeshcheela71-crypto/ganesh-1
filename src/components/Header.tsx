import React, { useState } from 'react';
import { CONTACT_INFO } from '../data/fleetData';

import { Logo } from './Logo';

interface HeaderProps {
  onOpenBooking: () => void;
  onTrackBooking?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, onTrackBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="group flex items-center hover:opacity-95 transition-opacity">
          <Logo size="md" />
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 font-heading text-sm font-semibold text-slate-600">
          <a href="#family-trips" className="text-sky-600 font-bold hover:text-sky-700 transition-colors">
            Family &amp; Long Trips
          </a>
          <a href="#fleet" className="hover:text-slate-900 transition-colors">
            Our Fleet
          </a>
          <a href="#packages" className="hover:text-slate-900 transition-colors">
            Holiday Packages
          </a>
          <a href="#fleet" className="hover:text-slate-900 transition-colors">
            Tariff &amp; Rates
          </a>
          <a href="#why-us" className="hover:text-slate-900 transition-colors">
            Why Reeshika
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {onTrackBooking && (
            <button
              onClick={onTrackBooking}
              className="hidden sm:inline-flex btn-secondary text-xs py-2 px-3"
            >
              <span className="material-symbols-outlined text-[18px] text-sky-600">travel_explore</span>
              <span>Track Trip</span>
            </button>
          )}

          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="hidden lg:inline-flex btn-secondary"
          >
            <span className="material-symbols-outlined text-[18px] text-sky-600">call</span>
            <span>{CONTACT_INFO.phone}</span>
          </a>

          <a
            href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent("Hello Reeshika Travels, I would like to inquire about a family outstation trip.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <span className="material-symbols-outlined text-[20px]">chat</span>
            <span>Book on WhatsApp</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden btn-icon"
            aria-label="Toggle Navigation"
            aria-expanded={mobileMenuOpen}
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2.5 font-heading text-sm font-medium text-slate-700">
            <a
              href="#family-trips"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg bg-blue-50 text-[#0284c7] font-bold"
            >
              Family &amp; Long Trips
            </a>
            <a
              href="#fleet"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Our Fleet &amp; Rental Rates
            </a>
            <a
              href="#packages"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Holiday &amp; Temple Packages
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Why Reeshika Standard
            </a>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 text-slate-800 font-semibold text-sm"
            >
              <span className="material-symbols-outlined text-[18px] text-[#0284c7]">call</span>
              <span>Call Helpline ({CONTACT_INFO.phone})</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#25d366] text-white font-heading font-bold text-sm"
            >
              <span className="material-symbols-outlined text-[18px]">electric_bolt</span>
              <span>Instant Trip Quote</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
