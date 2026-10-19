import React, { useState } from 'react';
import { CONTACT_INFO } from '../data/fleetData';

interface BookingStatusModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface BookingDetails {
  id: string;
  createdAt: string;
  customerName: string;
  customerPhone: string;
  pickup: string;
  destination: string;
  carName: string;
  duration: string;
  passengers: string;
  luggage: string;
  estimatedTotal: number;
  status: string;
  notes?: string;
}

export const BookingStatusModal: React.FC<BookingStatusModalProps> = ({ isOpen, onClose }) => {
  const [bookingIdInput, setBookingIdInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [booking, setBooking] = useState<BookingDetails | null>(null);

  if (!isOpen) return null;

  const handleLookup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingIdInput.trim()) return;

    setLoading(true);
    setError(null);
    setBooking(null);

    try {
      const res = await fetch(`/api/bookings/${encodeURIComponent(bookingIdInput.trim())}`);
      const data = await res.json();

      if (!res.ok || !data.success) {
        setError(data.error || 'Booking not found. Please verify your reference number.');
      } else {
        setBooking(data.booking);
      }
    } catch (err) {
      setError('Network error while looking up booking. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="track-booking-title"
        className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-100 flex flex-col gap-5 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="btn-icon absolute top-4 right-4"
          aria-label="Close"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
          <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[22px]">manage_search</span>
          </div>
          <div>
            <h2 id="track-booking-title" className="font-heading font-extrabold text-xl text-slate-900">
              Track Booking Status
            </h2>
            <p className="text-xs text-slate-500">
              Check trip status &amp; chauffeur assignment
            </p>
          </div>
        </div>

        <form onSubmit={handleLookup} className="flex flex-col gap-2.5">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Enter Booking Reference ID
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              required
              placeholder="e.g. RT-84920"
              value={bookingIdInput}
              onChange={(e) => setBookingIdInput(e.target.value.toUpperCase())}
              className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold uppercase tracking-wider text-slate-800 focus:outline-none focus:border-sky-500"
            />
            <button
              type="submit"
              disabled={loading}
              className="btn-primary px-5 py-2.5"
            >
              {loading ? (
                <span className="animate-spin text-sm">⟳</span>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[18px]">search</span>
                  <span>Check</span>
                </>
              )}
            </button>
          </div>
          <span className="text-[11px] text-slate-400">
            Sample test ID: <button type="button" onClick={() => setBookingIdInput('RT-84920')} className="text-sky-600 underline font-medium cursor-pointer">RT-84920</button>
          </span>
        </form>

        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-red-500">error</span>
            <span>{error}</span>
          </div>
        )}

        {booking && (
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-xs sm:text-sm space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-semibold">Booking ID</span>
                <span className="font-heading font-extrabold text-base text-slate-900">{booking.id}</span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                {booking.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-semibold">Vehicle</span>
                <span className="font-bold text-slate-800">{booking.carName}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-semibold">Tariff</span>
                <span className="font-extrabold text-emerald-600">₹{booking.estimatedTotal.toLocaleString('en-IN')}*</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-semibold">Pickup</span>
                <span className="font-medium text-slate-700 truncate block">{booking.pickup}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-semibold">Destination</span>
                <span className="font-medium text-slate-700 truncate block">{booking.destination}</span>
              </div>
            </div>

            <div className="p-2.5 bg-white rounded-lg border border-slate-200 text-xs text-slate-600 flex items-center gap-2">
              <span className="material-symbols-outlined text-emerald-600 text-[18px]">verified</span>
              <span>Driver photo &amp; car details are shared via WhatsApp 2 hours prior to departure.</span>
            </div>

            <a
              href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(`Hello Reeshika Travels, checking on Booking ID: ${booking.id} for ${booking.carName}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full py-2.5 text-xs text-center"
            >
              <span className="material-symbols-outlined text-[16px]">chat</span>
              <span>Message Fleet Desk About {booking.id}</span>
            </a>
          </div>
        )}

      </div>
    </div>
  );
};
