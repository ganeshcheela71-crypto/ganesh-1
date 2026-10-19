import React, { useState } from 'react';
import { CONTACT_INFO, FLEET_VEHICLES } from '../data/fleetData';

interface CustomTourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomTourModal: React.FC<CustomTourModalProps> = ({ isOpen, onClose }) => {
  const [tourType, setTourType] = useState('Hill Station Retreat (Ghats)');
  const [duration, setDuration] = useState('3 Days / 2 Nights');
  const [pickupCity, setPickupCity] = useState('Mumbai / Pune / Hyderabad');
  const [customSpots, setCustomSpots] = useState('Mahabaleshwar, Panchgani, Tapola');
  const [carChoice, setCarChoice] = useState('Toyota Innova Crysta');
  const [elderlyAssistance, setElderlyAssistance] = useState(true);
  const [rooftopCarrier, setRooftopCarrier] = useState(true);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let tourId = `TOUR-${Math.floor(1000 + Math.random() * 9000)}`;

    try {
      const res = await fetch('/api/custom-tours', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tourType,
          duration,
          pickupCity,
          customSpots,
          carChoice,
          elderlyAssistance,
          rooftopCarrier
        })
      });
      const data = await res.json();
      if (data?.inquiry?.id) {
        tourId = data.inquiry.id;
      }
    } catch {
      // offline fallback
    }

    const message = 
      `Hello Reeshika Travels!\n` +
      `Tour Inquiry ID: #${tourId}\n` +
      `🗺️ Tour Circuit: ${tourType}\n` +
      `⏳ Duration: ${duration}\n` +
      `📍 Starting From: ${pickupCity}\n` +
      `📍 Preferred Stops: ${customSpots}\n` +
      `🚗 Preferred Car: ${carChoice}\n` +
      `👵 Elderly / Child Care Friendly: ${elderlyAssistance ? 'Yes' : 'No'}\n` +
      `🧳 Rooftop Luggage Carrier: ${rooftopCarrier ? 'Yes' : 'No'}\n\n` +
      `Please provide a customized itinerary breakdown with driver night allowance details.`;

    const encoded = encodeURIComponent(message);
    window.open(`${CONTACT_INFO.whatsappUrl}?text=${encoded}`, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="custom-tour-title"
        className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-100 flex flex-col gap-5 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="btn-icon absolute top-4 right-4"
          aria-label="Close"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[24px]">tune</span>
          </div>
          <div>
            <h2 id="custom-tour-title" className="font-heading font-extrabold text-xl text-slate-900">
              Request Custom Tour Itinerary
            </h2>
            <p className="text-xs text-slate-500">
              Personalized multi-day family vacations &amp; pilgrimage routes
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-xs sm:text-sm">
          
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Select Vacation Type
            </label>
            <select
              value={tourType}
              onChange={(e) => setTourType(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-800 focus:outline-none focus:border-[#0284c7]"
            >
              <option>Hill Station Retreat (Ghats &amp; Viewpoints)</option>
              <option>Temple &amp; Darshan Pilgrimage (Shirdi, Tirupati, Srisailam)</option>
              <option>Weekend Coastal Beach Vacation (Alibaug, Goa, Gokarna)</option>
              <option>Intercity One-Way Highway Express</option>
              <option>Family Wedding &amp; Event Fleet</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Duration
              </label>
              <input
                type="text"
                required
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="e.g. 3 Days / 2 Nights"
                className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-800 focus:outline-none focus:border-[#0284c7]"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Pickup City
              </label>
              <input
                type="text"
                required
                value={pickupCity}
                onChange={(e) => setPickupCity(e.target.value)}
                placeholder="e.g. Mumbai, Pune, Hyderabad"
                className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-800 focus:outline-none focus:border-[#0284c7]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Places / Sightseeing Wishlist
            </label>
            <input
              type="text"
              required
              value={customSpots}
              onChange={(e) => setCustomSpots(e.target.value)}
              placeholder="e.g. Mahabaleshwar, Panchgani, Tapola boating"
              className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-800 focus:outline-none focus:border-[#0284c7]"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Vehicle Preference
            </label>
            <select
              value={carChoice}
              onChange={(e) => setCarChoice(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-800 focus:outline-none focus:border-[#0284c7]"
            >
              {FLEET_VEHICLES.map((v) => (
                <option key={v.id} value={v.name}>
                  {v.name} ({v.category})
                </option>
              ))}
            </select>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs">
            <label className="flex items-center gap-2 cursor-pointer font-medium text-slate-700">
              <input
                type="checkbox"
                checked={elderlyAssistance}
                onChange={(e) => setElderlyAssistance(e.target.checked)}
                className="w-4 h-4 text-[#16a34a] rounded focus:ring-0"
              />
              <span>Senior citizen / infant comfortable (gentle driving &amp; frequent halts)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer font-medium text-slate-700">
              <input
                type="checkbox"
                checked={rooftopCarrier}
                onChange={(e) => setRooftopCarrier(e.target.checked)}
                className="w-4 h-4 text-[#16a34a] rounded focus:ring-0"
              />
              <span>Rooftop luggage carrier with waterproof tarpaulin cover</span>
            </label>
          </div>

          <button
            type="submit"
            className="btn-primary w-full py-3.5 text-base shadow-lg shadow-emerald-500/20 mt-1"
          >
            <span className="material-symbols-outlined text-[20px]">send</span>
            <span>Send Custom Request to Fleet Desk</span>
          </button>
        </form>

      </div>
    </div>
  );
};
