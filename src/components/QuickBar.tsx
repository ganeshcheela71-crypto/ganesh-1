import React from 'react';
import { CONTACT_INFO } from '../data/fleetData';

interface QuickBarProps {
  onSelectVehicle?: (carId: string) => void;
}

export const QuickBar: React.FC<QuickBarProps> = ({ onSelectVehicle }) => {
  return (
    <section className="bg-white border-b border-slate-200 py-4 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Label */}
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-emerald-600 text-[20px]">schedule</span>
          <span className="font-heading font-bold text-sm text-slate-900">Flexible Rental Slots:</span>
          <span className="text-xs text-slate-500 font-medium">(Fuel &amp; FASTag at actuals)</span>
        </div>

        {/* Quick Rate Pills */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 text-xs">
          <a
            href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent("Booking Swift Dzire 12 Hours Plan Rs 1300 / 24 Hours Rs 2500")}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onSelectVehicle && onSelectVehicle('swift-dzire')}
            className="btn-secondary py-1.5 px-3 text-xs tabular-nums"
          >
            Swift/Dzire • 12h: <strong className="text-emerald-600">₹1,300</strong> | 24h: <strong className="text-emerald-600">₹2,500</strong>
          </a>

          <a
            href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent("Booking Ertiga 12 Hours Plan Rs 1800 / 24 Hours Rs 3000")}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onSelectVehicle && onSelectVehicle('ertiga')}
            className="btn-secondary py-1.5 px-3 text-xs tabular-nums"
          >
            Ertiga • 12h: <strong className="text-emerald-600">₹1,800</strong> | 24h: <strong className="text-emerald-600">₹3,000</strong>
          </a>

          <a
            href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent("Booking Innova 12 Hours Plan Rs 2200 / 24 Hours Rs 4000")}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onSelectVehicle && onSelectVehicle('innova')}
            className="btn-secondary py-1.5 px-3 text-xs tabular-nums"
          >
            Innova • 12h: <strong className="text-emerald-600">₹2,200</strong> | 24h: <strong className="text-emerald-600">₹4,000</strong>
          </a>

          <a
            href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent("Booking Thar & BMW Luxury Rates from Rs 3000")}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onSelectVehicle && onSelectVehicle('bmw')}
            className="btn-secondary py-1.5 px-3 text-xs tabular-nums"
          >
            Thar &amp; BMW Luxury from <strong className="text-emerald-600">₹3,000</strong>
          </a>
        </div>

      </div>
    </section>
  );
};
