import React, { useState } from 'react';
import { CONTACT_INFO } from '../data/fleetData';
import { LogoEmblem } from './Logo';

export interface BookingSummaryData {
  bookingId?: string;
  pickup: string;
  destination: string;
  carName: string;
  carRate12h: number;
  carRate24h: number;
  duration: string;
  passengers: string;
  luggage: string;
}

interface BookingSummaryModalProps {
  data: BookingSummaryData | null;
  onClose: () => void;
}

export const BookingSummaryModal: React.FC<BookingSummaryModalProps> = ({ data, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!data) return null;

  const isDays = data.duration.toLowerCase().includes('day');
  let daysNum = 1;
  const match = data.duration.match(/\d+/);
  if (match) {
    daysNum = parseInt(match[0], 10);
  }
  const estimatedBase = isDays ? data.carRate24h * Math.max(daysNum, 1) : data.carRate12h;

  const refId = data.bookingId || `RT-${Math.floor(10000 + Math.random() * 90000)}`;

  const whatsappMessage = 
    `Hello Reeshika Travels!\n` +
    `Booking Reference: ${refId}\n` +
    `🚗 Car: ${data.carName} (12h: ₹${data.carRate12h.toLocaleString('en-IN')} / 24h: ₹${data.carRate24h.toLocaleString('en-IN')})\n` +
    `📍 Pickup: ${data.pickup}\n` +
    `🏁 Destination: ${data.destination}\n` +
    `📅 Duration: ${data.duration}\n` +
    `👨‍👩‍👧 Passengers: ${data.passengers}\n` +
    `🧳 Luggage: ${data.luggage}\n\n` +
    `Please confirm the vehicle reservation and driver assignment.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(whatsappMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenWhatsApp = () => {
    const encoded = encodeURIComponent(whatsappMessage);
    window.open(`${CONTACT_INFO.whatsappUrl}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-summary-title"
        className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-100 flex flex-col gap-5 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="btn-icon absolute top-4 right-4"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          <div className="p-2 rounded-xl bg-amber-50/80 border border-amber-100 flex items-center justify-center shrink-0">
            <LogoEmblem className="w-10 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 id="booking-summary-title" className="font-heading font-extrabold text-xl text-slate-900">
                Booking Tariff Summary
              </h2>
              <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[11px] font-bold tabular-nums">
                #{refId}
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Zero advance payment • Pay after journey completion
            </p>
          </div>
        </div>

        {/* Route Details Box */}
        <div className="bg-[#f8fafc] rounded-xl p-4 border border-slate-200 text-xs sm:text-sm space-y-2.5">
          <div className="flex justify-between items-center pb-2 border-b border-slate-200/60">
            <span className="text-slate-500 font-medium">Route:</span>
            <span className="font-bold text-slate-900 text-right">
              {data.pickup} <span className="text-sky-600">➔</span> {data.destination}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-slate-500">Selected Car:</span>
            <span className="font-semibold text-slate-900">{data.carName}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-slate-500">Duration:</span>
            <span className="font-semibold text-slate-900">{data.duration}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-slate-500">Passengers:</span>
            <span className="font-semibold text-slate-900">{data.passengers}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-slate-500">Luggage Carrier:</span>
            <span className="font-semibold text-slate-900">{data.luggage}</span>
          </div>
        </div>

        {/* Transparent Fare Breakdown */}
        <div className="bg-amber-50/60 rounded-xl p-4 border border-amber-200 text-xs space-y-2 text-slate-700">
          <div className="flex justify-between items-center font-bold text-amber-900 pb-1 border-b border-amber-200">
            <span>Estimated Vehicle Tariff</span>
            <span className="font-extrabold text-base text-emerald-600">
              ₹{estimatedBase.toLocaleString('en-IN')}*
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-600">
            <span className="material-symbols-outlined text-emerald-600 text-[16px]">check</span>
            <span>Includes: Sanitized car, vetted highway chauffeur &amp; night allowances.</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-600">
            <span className="material-symbols-outlined text-amber-600 text-[16px]">info</span>
            <span>Fuel &amp; FASTag at actuals (Self-pay based on odometer &amp; toll slips).</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-600">
            <span className="material-symbols-outlined text-emerald-600 text-[16px]">check</span>
            <span>Zero advance required. Pay upon doorstep completion.</span>
          </div>
        </div>

        {/* Modal CTAs */}
        <div className="flex flex-col gap-2.5 pt-2">
          <button
            onClick={handleOpenWhatsApp}
            className="btn-primary w-full py-3.5 text-base shadow-lg shadow-emerald-500/20"
          >
            <span className="material-symbols-outlined text-[20px]">chat</span>
            <span>Confirm &amp; Send on WhatsApp</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleCopy}
              className="btn-secondary text-xs py-2.5"
            >
              <span className="material-symbols-outlined text-[16px]">
                {copied ? 'check' : 'content_copy'}
              </span>
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Itinerary'}</span>
            </button>

            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="btn-secondary text-xs py-2.5 text-center"
            >
              <span className="material-symbols-outlined text-[16px] text-sky-600">call</span>
              <span>Call ({CONTACT_INFO.phone})</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
