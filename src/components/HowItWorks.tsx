import React from 'react';

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
            Book Your Outstation Cab in 3 Simple Steps
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            No complicated app downloads or advance card payments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative">
          
          {/* Step 1 */}
          <div className="flex flex-col items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-slate-900 text-white font-heading font-bold text-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
              1
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900">
              Send Dates on WhatsApp
            </h3>
            <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
              Tell us your destination, dates, and vehicle preference (Innova, Ertiga, or Baleno).
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-slate-900 text-white font-heading font-bold text-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
              2
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900">
              Get Fixed All-Inclusive Quote
            </h3>
            <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
              Receive full transparent tariff breakdown with toll and driver allowance in 2 minutes.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-emerald-600 text-white font-heading font-bold text-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
              3
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900">
              Driver Arrives on Schedule
            </h3>
            <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
              Receive driver contact and car photos before departure. Pay only when the journey completes.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
