/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickBar } from './components/QuickBar';
import { FleetSection } from './components/FleetSection';
import { PackagesSection } from './components/PackagesSection';
import { WhyUsSection } from './components/WhyUsSection';
import { HowItWorks } from './components/HowItWorks';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { BookingSummaryModal, BookingSummaryData } from './components/BookingSummaryModal';
import { CustomTourModal } from './components/CustomTourModal';
import { VehicleSpecsModal } from './components/VehicleSpecsModal';
import { BookingStatusModal } from './components/BookingStatusModal';
import { Vehicle, TravelPackage } from './data/fleetData';

export default function App() {
  const [bookingSummary, setBookingSummary] = useState<BookingSummaryData | null>(null);
  const [isCustomTourOpen, setIsCustomTourOpen] = useState(false);
  const [isTrackModalOpen, setIsTrackModalOpen] = useState(false);
  const [selectedVehicleForSpecs, setSelectedVehicleForSpecs] = useState<Vehicle | null>(null);
  const [highlightedCarId, setHighlightedCarId] = useState<string | undefined>(undefined);

  const handleQuoteRequested = (data: BookingSummaryData) => {
    setBookingSummary(data);
  };

  const handleBookVehicle = (vehicle: Vehicle) => {
    setBookingSummary({
      pickup: 'Pickup Location (City)',
      destination: 'Outstation Destination',
      carName: vehicle.name,
      carRate12h: vehicle.rate12h,
      carRate24h: vehicle.rate24h,
      duration: '24 Hours Plan',
      passengers: vehicle.seats,
      luggage: 'Standard Luggage Capacity'
    });
  };

  const handleSelectPackage = (pkg: TravelPackage) => {
    setBookingSummary({
      pickup: 'Doorstep Pickup',
      destination: pkg.title,
      carName: pkg.vehicle,
      carRate12h: 2200,
      carRate24h: 4000,
      duration: pkg.duration,
      passengers: '4 - 6 Passengers',
      luggage: 'Included Package Luggage'
    });
  };

  const handleSelectQuickVehicle = (carId: string) => {
    setHighlightedCarId(carId);
    const element = document.getElementById(`car-${carId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-900 selection:bg-emerald-500 selection:text-white">
      {/* Top Header */}
      <Header 
        onOpenBooking={() => setIsCustomTourOpen(true)}
        onTrackBooking={() => setIsTrackModalOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section with Instant Trip Planner */}
        <Hero onQuoteRequested={handleQuoteRequested} />

        {/* Quick Rental Slots Bar */}
        <QuickBar onSelectVehicle={handleSelectQuickVehicle} />

        {/* Complete Fleet & Rental Rates */}
        <FleetSection
          onBookVehicle={handleBookVehicle}
          onViewSpecs={(v) => setSelectedVehicleForSpecs(v)}
          highlightedCarId={highlightedCarId}
        />

        {/* Popular Multi-Day Family Packages */}
        <PackagesSection
          onRequestCustomItinerary={() => setIsCustomTourOpen(true)}
          onSelectPackage={handleSelectPackage}
        />

        {/* Why Families Prefer Us */}
        <WhyUsSection />

        {/* 3 Step Booking Process */}
        <HowItWorks />

        {/* CTA Banner */}
        <CtaBanner />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <BookingSummaryModal
        data={bookingSummary}
        onClose={() => setBookingSummary(null)}
      />

      <CustomTourModal
        isOpen={isCustomTourOpen}
        onClose={() => setIsCustomTourOpen(false)}
      />

      <BookingStatusModal
        isOpen={isTrackModalOpen}
        onClose={() => setIsTrackModalOpen(false)}
      />

      <VehicleSpecsModal
        vehicle={selectedVehicleForSpecs}
        onClose={() => setSelectedVehicleForSpecs(null)}
      />
    </div>
  );
}
