import React, { useState } from 'react';
import { CONTACT_INFO, FLEET_VEHICLES } from '../data/fleetData';

export interface HeroQuoteData {
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

interface HeroProps {
  onQuoteRequested: (quoteData: HeroQuoteData) => void;
}

export const Hero: React.FC<HeroProps> = ({ onQuoteRequested }) => {
  const [pickup, setPickup] = useState('Mumbai');
  const [destination, setDestination] = useState('Mahabaleshwar');
  const [selectedCarId, setSelectedCarId] = useState('innova');
  const [duration, setDuration] = useState('3 Days Vacation');
  const [passengers, setPassengers] = useState('4 - 6 Passengers (Family)');
  const [luggage, setLuggage] = useState('Yes (Rooftop Carrier)');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedVehicle = FLEET_VEHICLES.find(v => v.id === selectedCarId) || FLEET_VEHICLES[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    let bookingId = `RT-${Math.floor(10000 + Math.random() * 90000)}`;

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pickup,
          destination,
          carName: selectedVehicle.name,
          carRate12h: selectedVehicle.rate12h,
          carRate24h: selectedVehicle.rate24h,
          duration,
          passengers,
          luggage
        })
      });
      const data = await res.json();
      if (data?.booking?.id) {
        bookingId = data.booking.id;
      }
    } catch (err) {
      console.log('Operating in local client fallback mode:', err);
    } finally {
      setIsSubmitting(false);
    }

    // Trigger quote details modal with official booking reference ID
    onQuoteRequested({
      bookingId,
      pickup,
      destination,
      carName: selectedVehicle.name,
      carRate12h: selectedVehicle.rate12h,
      carRate24h: selectedVehicle.rate24h,
      duration,
      passengers,
      luggage
    });

    // Also prepare WhatsApp url with reference ID
    const message = 
      `Hello Reeshika Travels!\n` +
      `Booking Reference: ${bookingId}\n` +
      `🚗 Car: ${selectedVehicle.name} (12h: ₹${selectedVehicle.rate12h.toLocaleString('en-IN')} / 24h: ₹${selectedVehicle.rate24h.toLocaleString('en-IN')})\n` +
      `📍 Pickup: ${pickup}\n` +
      `🏁 Destination: ${destination}\n` +
      `📅 Duration: ${duration}\n` +
      `👨‍👩‍👧 Passengers: ${passengers}\n` +
      `🧳 Luggage: ${luggage}\n\n` +
      `Please confirm the vehicle reservation and driver details.`;

    const encoded = encodeURIComponent(message);
    const targetUrl = `${CONTACT_INFO.whatsappUrl}?text=${encoded}`;
    
    // Open WhatsApp in a safe manner
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="family-trips" className="relative pt-10 sm:pt-12 pb-16 sm:pb-20 bg-gradient-to-b from-white via-slate-50 to-[#f8fafc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Dedicated Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-700 w-max shadow-xs">
              <span className="material-symbols-outlined text-[18px]">family_restroom</span>
              <span className="font-heading text-xs font-bold tracking-wide uppercase">
                Dedicated Family Highway Chauffeur Service
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-[46px] text-slate-900 tracking-tight leading-[1.15]">
              Comfortable Family Vacations &amp; Long Outstation Road Trips
            </h1>

            {/* Subtitle with bold names */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
              Rent verified vehicles with polite highway chauffeurs:{' '}
              <strong className="text-slate-900 font-semibold">Toyota Innova, Maruti Ertiga, Baleno, Swift/Dzire, Mahindra Thar, Ford,</strong> and{' '}
              <strong className="text-slate-900 font-semibold">BMW</strong>. Transparent 12-Hour &amp; 24-Hour plans (Fuel &amp; FASTag at actuals).
            </p>

            {/* 4 Core Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-xs hover:border-emerald-300 transition-colors flex flex-col gap-1">
                <span className="material-symbols-outlined text-emerald-600 text-[24px]">payments</span>
                <span className="font-heading font-bold text-base text-slate-900">Zero Advance</span>
                <span className="text-xs text-slate-500">Pay after journey ends</span>
              </div>
              <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-xs hover:border-emerald-300 transition-colors flex flex-col gap-1">
                <span className="material-symbols-outlined text-emerald-600 text-[24px]">verified_user</span>
                <span className="font-heading font-bold text-base text-slate-900">Vetted Drivers</span>
                <span className="text-xs text-slate-500">7+ yrs highway tenure</span>
              </div>
              <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-xs hover:border-emerald-300 transition-colors flex flex-col gap-1">
                <span className="material-symbols-outlined text-emerald-600 text-[24px]">luggage</span>
                <span className="font-heading font-bold text-base text-slate-900">Luggage Carrier</span>
                <span className="text-xs text-slate-500">Roof carrier on request</span>
              </div>
              <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-xs hover:border-emerald-300 transition-colors flex flex-col gap-1">
                <span className="material-symbols-outlined text-emerald-600 text-[24px]">share_location</span>
                <span className="font-heading font-bold text-base text-slate-900">Live Family GPS</span>
                <span className="text-xs text-slate-500">Shareable tracking link</span>
              </div>
            </div>

            {/* Social Proof & Rating */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex -space-x-2">
                <div className="w-9 h-9 rounded-full bg-slate-800 text-white font-bold text-xs flex items-center justify-center ring-2 ring-white">RK</div>
                <div className="w-9 h-9 rounded-full bg-sky-600 text-white font-bold text-xs flex items-center justify-center ring-2 ring-white">MS</div>
                <div className="w-9 h-9 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center ring-2 ring-white">AG</div>
                <div className="w-9 h-9 rounded-full bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center ring-2 ring-white">+4k</div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-amber-500 text-[18px] fill">star</span>
                  <span className="font-heading font-bold text-sm text-slate-900">4.9/5 Rating</span>
                  <span className="text-xs text-slate-500">(4,800+ Happy Families)</span>
                </div>
                <span className="text-xs font-semibold text-emerald-600">99.2% Punctual Doorstep Arrival</span>
              </div>
            </div>

          </div>

          {/* Right Column: Instant Trip Planner Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xl shadow-slate-200/60 flex flex-col gap-5">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h2 className="font-heading font-bold text-xl text-slate-900">Instant Trip Planner</h2>
                  <p className="text-xs text-slate-500">Direct booking via 24/7 WhatsApp concierge</p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100 flex items-center gap-1">
                  <span>⚡</span> 60s Quote
                </span>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                
                {/* Route Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="pickupInput" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Pickup Location
                    </label>
                    <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus-within:border-sky-500 focus-within:bg-white transition-all">
                      <span className="material-symbols-outlined text-slate-400 text-[20px]">trip_origin</span>
                      <input
                        id="pickupInput"
                        type="text"
                        required
                        placeholder="City or locality"
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                        className="w-full bg-transparent text-sm font-medium text-slate-800 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="destInput" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Destination
                    </label>
                    <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus-within:border-sky-500 focus-within:bg-white transition-all">
                      <span className="material-symbols-outlined text-emerald-600 text-[20px]">location_on</span>
                      <input
                        id="destInput"
                        type="text"
                        required
                        placeholder="Goa, Mahabaleshwar..."
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="w-full bg-transparent text-sm font-medium text-slate-800 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Vehicle & Travel Duration */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="carSelect" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Select Car
                    </label>
                    <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus-within:border-sky-500 focus-within:bg-white transition-all">
                      <span className="material-symbols-outlined text-slate-400 text-[20px]">directions_car</span>
                      <select
                        id="carSelect"
                        value={selectedCarId}
                        onChange={(e) => setSelectedCarId(e.target.value)}
                        className="w-full bg-transparent text-xs sm:text-sm font-medium text-slate-800 focus:outline-none cursor-pointer truncate"
                      >
                        {FLEET_VEHICLES.map((v) => (
                          <option key={v.id} value={v.id}>
                            {v.name} (12h: ₹{v.rate12h.toLocaleString('en-IN')} | 24h: ₹{v.rate24h.toLocaleString('en-IN')})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="dateInput" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Travel Duration
                    </label>
                    <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus-within:border-sky-500 focus-within:bg-white transition-all">
                      <span className="material-symbols-outlined text-slate-400 text-[20px]">calendar_month</span>
                      <input
                        id="dateInput"
                        type="text"
                        required
                        placeholder="e.g. 3 Days"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        className="w-full bg-transparent text-sm font-medium text-slate-800 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Passengers & Luggage */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="passengerSelect" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Passengers
                    </label>
                    <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="material-symbols-outlined text-slate-400 text-[20px]">group</span>
                      <select
                        id="passengerSelect"
                        value={passengers}
                        onChange={(e) => setPassengers(e.target.value)}
                        className="w-full bg-transparent text-xs sm:text-sm font-medium text-slate-800 focus:outline-none cursor-pointer"
                      >
                        <option>4 - 6 Passengers (Family)</option>
                        <option>2 - 3 Passengers (Couple)</option>
                        <option>7 - 8 Passengers (Group)</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="luggageSelect" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Luggage Carrier
                    </label>
                    <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="material-symbols-outlined text-slate-400 text-[20px]">luggage</span>
                      <select
                        id="luggageSelect"
                        value={luggage}
                        onChange={(e) => setLuggage(e.target.value)}
                        className="w-full bg-transparent text-xs sm:text-sm font-medium text-slate-800 focus:outline-none cursor-pointer"
                      >
                        <option>Yes (Rooftop Carrier)</option>
                        <option>Standard Boot Space</option>
                        <option>Extra Luggage Required</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Dynamic Rate Summary preview */}
                <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-slate-900 font-medium">
                    <span className="material-symbols-outlined text-emerald-600 text-[18px]">verified</span>
                    <span>Selected: <strong>{selectedVehicle.name}</strong></span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-500">Starting at </span>
                    <strong className="text-emerald-600 font-extrabold text-sm">₹{selectedVehicle.rate12h.toLocaleString('en-IN')}</strong>
                    <span className="text-slate-400 text-[10px]"> / 12h</span>
                  </div>
                </div>

                {/* WhatsApp CTA Button */}
                <button
                  type="submit"
                  className="btn-primary w-full py-3.5 text-base shadow-md shadow-emerald-600/20"
                >
                  <span className="material-symbols-outlined text-[22px]">chat</span>
                  <span>Get Instant WhatsApp Quote</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </form>

              {/* Card Footer notice */}
              <div className="pt-2 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100">
                <span className="flex items-center gap-1 font-semibold text-slate-800">
                  <span className="material-symbols-outlined text-emerald-600 text-[16px]">info</span>
                  Rates exclude Fuel &amp; Toll (Actuals)
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-emerald-600 text-[16px]">receipt_long</span>
                  12h &amp; 24h Fixed Plans
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
