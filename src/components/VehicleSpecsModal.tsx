import React from 'react';
import { Vehicle, CONTACT_INFO } from '../data/fleetData';

interface VehicleSpecsModalProps {
  vehicle: Vehicle | null;
  onClose: () => void;
}

export const VehicleSpecsModal: React.FC<VehicleSpecsModalProps> = ({ vehicle, onClose }) => {
  if (!vehicle) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="vehicle-specs-title"
        className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-7 shadow-2xl border border-slate-100 flex flex-col gap-5 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="btn-icon absolute top-4 right-4"
          aria-label="Close"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          <div className="w-11 h-11 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[24px]">directions_car</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 id="vehicle-specs-title" className="font-heading font-extrabold text-xl text-slate-900">
                {vehicle.name}
              </h2>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-semibold">
                {vehicle.category}
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Verified highway commercial permit • Inspected pre-departure
            </p>
          </div>
        </div>

        {/* Car Photo */}
        <div className="rounded-xl overflow-hidden bg-slate-100 shadow-md">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            referrerPolicy="no-referrer"
            className="w-full h-56 object-cover"
          />
        </div>

        {/* Specs Table */}
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-slate-400 font-semibold uppercase tracking-wider block text-[10px]">
              Seating Arrangement
            </span>
            <span className="font-bold text-slate-800 text-sm mt-0.5 block">
              {vehicle.specs.seating}
            </span>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-slate-400 font-semibold uppercase tracking-wider block text-[10px]">
              Luggage Capacity
            </span>
            <span className="font-bold text-slate-800 text-sm mt-0.5 block">
              {vehicle.specs.luggage}
            </span>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-slate-400 font-semibold uppercase tracking-wider block text-[10px]">
              Air Conditioning
            </span>
            <span className="font-bold text-slate-800 text-sm mt-0.5 block">
              {vehicle.specs.ac}
            </span>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-slate-400 font-semibold uppercase tracking-wider block text-[10px]">
              Transmission &amp; Fuel
            </span>
            <span className="font-bold text-slate-800 text-sm mt-0.5 block">
              {vehicle.specs.fuelType}
            </span>
          </div>
        </div>

        {/* Ideal for statement */}
        <div className="p-3.5 bg-blue-50/70 border border-blue-200 rounded-xl text-xs text-blue-900 flex items-start gap-2">
          <span className="material-symbols-outlined text-[#0284c7] text-[18px] shrink-0 mt-0.5">
            recommend
          </span>
          <div>
            <strong className="font-bold">Recommended for: </strong>
            <span>{vehicle.specs.idealFor}</span>
          </div>
        </div>

        {/* Tariff box */}
        <div className="grid grid-cols-2 gap-3 p-3.5 bg-slate-900 text-white rounded-xl text-center">
          <div>
            <span className="text-[11px] text-slate-400 uppercase tracking-wider block">
              12 Hours Plan
            </span>
            <span className="font-heading font-extrabold text-xl text-white">
              ₹{vehicle.rate12h.toLocaleString('en-IN')}
            </span>
          </div>
          <div className="border-l border-slate-800">
            <span className="text-[11px] text-slate-400 uppercase tracking-wider block">
              24 Hours Plan
            </span>
            <span className="font-heading font-extrabold text-xl text-[#25d366]">
              ₹{vehicle.rate24h.toLocaleString('en-IN')}
            </span>
          </div>
        </div>

        {/* Modal CTA */}
        <a
          href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
            `Hello Reeshika Travels, I would like to reserve the ${vehicle.name} (${vehicle.category}). Please share availability and all-inclusive quote.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full py-3.5 text-base shadow-lg shadow-emerald-500/20"
        >
          <span className="material-symbols-outlined text-[20px]">chat</span>
          <span>Reserve {vehicle.name} on WhatsApp</span>
        </a>

      </div>
    </div>
  );
};
