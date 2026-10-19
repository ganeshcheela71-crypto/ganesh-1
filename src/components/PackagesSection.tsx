import React from 'react';
import { PACKAGES, TravelPackage, CONTACT_INFO } from '../data/fleetData';

interface PackagesSectionProps {
  onRequestCustomItinerary: () => void;
  onSelectPackage: (pkg: TravelPackage) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({
  onRequestCustomItinerary,
  onSelectPackage
}) => {
  return (
    <section id="packages" className="py-20 bg-white border-y border-slate-200 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600">
              Transparent All-Inclusive Itineraries
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight mt-1">
              Popular Multi-Day Family Packages
            </h2>
            <p className="text-slate-600 text-sm mt-2 max-w-xl leading-relaxed">
              Fixed tariffs that include vehicle rent, professional driver night allowances, and clean AC comfort. No hidden surprises at trip end.
            </p>
          </div>

          <button
            onClick={onRequestCustomItinerary}
            className="btn-secondary"
          >
            <span className="material-symbols-outlined text-emerald-600 text-[18px]">tune</span>
            <span>Request Custom Tour Itinerary</span>
          </button>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-[#f8fafc] rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-sky-500 hover:shadow-lg transition-all group"
            >
              <div className="flex flex-col gap-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold w-max ${pkg.badgeColor}`}>
                  {pkg.duration}
                </span>

                <div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-sky-600 transition-colors">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                {/* Inclusion Box */}
                <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs flex flex-col gap-1.5 shadow-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Vehicle:</span>
                    <strong className="text-slate-900 font-semibold">{pkg.vehicle}</strong>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Included Distance:</span>
                    <strong className="text-slate-900 font-semibold">{pkg.includedDistance}</strong>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">{pkg.perkTitle}:</span>
                    <strong className="text-emerald-600 font-bold">{pkg.perkValue}</strong>
                  </div>
                </div>

                {/* Popular Stops preview */}
                <div className="text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-700">Highlights: </span>
                  {pkg.popularSpots.slice(0, 3).join(', ')}
                </div>
              </div>

              {/* Bottom Price and WhatsApp Booking */}
              <div className="pt-5 mt-5 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-500">
                    {pkg.id === 'intercity-drop' ? 'Starting from' : 'Estimated Total'}
                  </span>
                  <span className="block font-heading font-extrabold text-xl text-slate-900">
                    {pkg.estimatedPrice}
                  </span>
                </div>

                <a
                  href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(`Quote for ${pkg.title} (${pkg.duration}). Vehicle: ${pkg.vehicle}. Inclusions: ${pkg.includedDistance}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-10 h-10 p-0 rounded-xl"
                  aria-label={`Book ${pkg.title} on WhatsApp`}
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
