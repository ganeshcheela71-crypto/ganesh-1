import React from 'react';
import { TRUST_POINTS } from '../data/fleetData';

export const WhyUsSection: React.FC = () => {
  return (
    <section id="why-us" className="py-20 bg-[#f8fafc] scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
            The Reeshika Standard
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
            Why Families Prefer Us Over Standard Cabs
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Long highway trips with family require patience, hygiene, and dependable vehicles. We don't assign random app cabs; our fleet is pre-sanitized and driven by vetted chauffeurs.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRUST_POINTS.map((pt, idx) => {
            const iconBg = 
              pt.color === 'emerald' ? 'bg-emerald-50 text-emerald-600' :
              pt.color === 'blue' ? 'bg-sky-50 text-sky-600' :
              pt.color === 'amber' ? 'bg-amber-50 text-amber-700' :
              'bg-purple-50 text-purple-700';

            return (
              <div
                key={idx}
                className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col gap-4"
              >
                <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center shrink-0`}>
                  <span className="material-symbols-outlined text-[28px]">{pt.icon}</span>
                </div>

                <h3 className="font-heading font-bold text-lg text-slate-900">
                  {pt.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {pt.description}
                </p>

                <span className="text-xs font-bold text-emerald-600 mt-auto flex items-center gap-1 pt-2">
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  <span>{pt.perk}</span>
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
