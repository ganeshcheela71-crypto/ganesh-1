import React, { useState } from 'react';
import { FLEET_VEHICLES, Vehicle, CONTACT_INFO } from '../data/fleetData';

interface FleetSectionProps {
  onBookVehicle: (vehicle: Vehicle) => void;
  onViewSpecs: (vehicle: Vehicle) => void;
  highlightedCarId?: string;
}

export const FleetSection: React.FC<FleetSectionProps> = ({
  onBookVehicle,
  onViewSpecs,
  highlightedCarId
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Fleet (7 Cars)' },
    { id: 'suv-mpv', label: '7-8 Seater MPV & SUV' },
    { id: 'sedan-hatch', label: 'Hatchback & Sedan' },
    { id: 'adventure', label: '4x4 & Adventure' },
    { id: 'luxury', label: 'VIP Luxury' }
  ];

  const filteredVehicles = FLEET_VEHICLES.filter((car) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'suv-mpv') return car.id === 'innova' || car.id === 'ertiga' || car.id === 'ford';
    if (activeCategory === 'sedan-hatch') return car.id === 'baleno' || car.id === 'swift-dzire';
    if (activeCategory === 'adventure') return car.id === 'thar' || car.id === 'ford';
    if (activeCategory === 'luxury') return car.id === 'bmw';
    return true;
  });

  return (
    <section id="fleet" className="py-20 bg-[#f8fafc] scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col gap-3">
          
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-500/30 text-emerald-600 font-heading text-xs font-bold uppercase tracking-wider mx-auto mb-1">
            <span className="material-symbols-outlined text-[16px]">verified</span>
            <span>Transparent 12-Hour &amp; 24-Hour Rental Pricing</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight">
            Complete Fleet &amp; Rental Rates
          </h2>

          <p className="text-slate-600 text-base max-w-2xl mx-auto leading-relaxed">
            Choose between flexible 12-hour local city plans or 24-hour outstation rentals. All vehicles are sanitized, well-maintained, and ready for immediate deployment.
          </p>

          <div className="mt-2 p-3 bg-amber-50 border border-amber-500/30 rounded-xl text-amber-800 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 mx-auto max-w-2xl shadow-xs">
            <span className="material-symbols-outlined text-[18px] text-amber-600 shrink-0">local_gas_station</span>
            <span>Note: All rates exclude Toll &amp; Fuel (No Toll &amp; No Fuel included • Self-Pay Fuel &amp; FASTag at actuals)</span>
          </div>

          {/* Interactive Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={activeCategory === cat.id ? 'btn-dark' : 'btn-secondary'}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* 7 Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVehicles.map((car) => {
            const isHighlighted = highlightedCarId === car.id;
            const isTopChoice = car.badge === 'Top Family Choice';
            const isVip = car.badge === 'VIP Luxury';

            return (
              <div
                key={car.id}
                id={`car-${car.id}`}
                className={`bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col justify-between relative group ${
                  isTopChoice
                    ? 'border-2 border-emerald-500/40 ring-2 ring-emerald-500/10'
                    : isVip
                    ? 'border-2 border-sky-500/40 ring-2 ring-sky-500/10 md:col-span-2 lg:col-span-1'
                    : 'border border-slate-200'
                } ${isHighlighted ? 'ring-4 ring-emerald-500' : ''}`}
              >
                {/* Top Family Choice Ribbon */}
                {isTopChoice && (
                  <div className="absolute top-0 right-0 bg-emerald-600 text-white font-heading text-[10px] font-extrabold uppercase px-3 py-1 rounded-bl-lg shadow-xs z-10">
                    Top Family Choice
                  </div>
                )}

                <div className="p-6 flex flex-col gap-4">
                  {/* Category Pill */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full font-heading text-xs font-semibold bg-slate-100 text-slate-800">
                      {car.category}
                    </span>
                  </div>

                  {/* Vehicle Image */}
                  <div className="relative overflow-hidden rounded-xl bg-slate-100 h-48 mb-1">
                    <img
                      src={car.image}
                      alt={car.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-48 object-cover rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Accessible H3 Car Title */}
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading font-bold text-lg text-slate-900">
                      {car.name}
                    </h3>
                    <span className="text-xs text-slate-500 font-medium">{car.seats}</span>
                  </div>

                  {/* 12h vs 24h Pricing Box */}
                  <div className="grid grid-cols-2 gap-2 p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                    <div>
                      <span className="text-[11px] font-bold text-slate-500 uppercase block">12 Hours</span>
                      <span className="font-heading font-extrabold text-xl text-slate-900">
                        ₹{car.rate12h.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <div className="border-l border-slate-200">
                      <span className="text-[11px] font-bold text-slate-500 uppercase block">24 Hours</span>
                      <span className="font-heading font-extrabold text-xl text-emerald-600">
                        ₹{car.rate24h.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  {/* Fuel Note Banner */}
                  <div className="text-center">
                    <span className="inline-block px-2.5 py-1 rounded-lg bg-amber-50 text-amber-900 font-medium text-[11px] border border-amber-200">
                      {car.fuelNote}
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="flex flex-col gap-2 text-xs text-slate-600">
                    {car.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-emerald-600 text-[16px] shrink-0">
                          check_circle
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Quick specs trigger */}
                  <button
                    onClick={() => onViewSpecs(car)}
                    className="text-left text-xs font-semibold text-sky-600 hover:text-sky-700 flex items-center gap-1 cursor-pointer pt-1"
                  >
                    <span className="material-symbols-outlined text-[16px]">tune</span>
                    <span>View Seating &amp; AC Specifications</span>
                  </button>
                </div>

                {/* Card Action Footer */}
                <div className="p-5 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-600 font-medium">Instant Booking</span>
                    <span className="text-[10px] text-slate-400">Zero advance fee</span>
                  </div>

                  <a
                    href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                      `Hello Reeshika Travels, I want to book ${car.name} (12h: Rs ${car.rate12h} / 24h: Rs ${car.rate24h}). Fuel and Tolls at actuals.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                    <span>Book {car.id === 'swift-dzire' ? 'Swift/Dzire' : car.id === 'bmw' ? 'BMW' : car.name.split(' ')[0]}</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
