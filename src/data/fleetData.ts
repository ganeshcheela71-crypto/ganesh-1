export interface Vehicle {
  id: string;
  name: string;
  category: string;
  badge?: string;
  badgeType?: 'primary' | 'success' | 'warning' | 'purple';
  rating: number;
  reviewCount: number;
  image: string;
  rate12h: number;
  rate24h: number;
  seats: string;
  fuelNote: string;
  features: string[];
  specs: {
    seating: string;
    luggage: string;
    ac: string;
    transmission: string;
    fuelType: string;
    idealFor: string;
  };
}

export interface TravelPackage {
  id: string;
  title: string;
  duration: string;
  badgeColor: string;
  description: string;
  vehicle: string;
  includedDistance: string;
  perkTitle: string;
  perkValue: string;
  estimatedPrice: string;
  popularSpots: string[];
}

export const FLEET_VEHICLES: Vehicle[] = [
  {
    id: 'innova',
    name: 'Toyota Innova Crysta',
    category: '7/8 Seater SUV',
    rating: 4.98,
    reviewCount: 1420,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGiw6sJ4CD4tfUT0Ca1vTdz_MlkEwd0o6FxoMmtmtEwYqoIeMgvfb9NRAekBoEyMI68EWqTUEvFv2mGdQd6yx_iJHRTwLMawg0vR6B_OufRg7NT2CAh6ROKuGI9hyhRhM9142SkcMlvWOTKPc4FT8-e1XoDxcIJWCQRrEXAnG6xop-EsnRpGSPXmDfLcZ2C29HbWlBr_kOBgwvYYGBklhON9zWh7NVbkvo6IVR4TZ5iI3pvwNBeSwcMw',
    rate12h: 2200,
    rate24h: 4000,
    seats: '7/8 Seater',
    fuelNote: 'No Toll & No Fuel / Fuel & Toll Extra',
    features: [
      'Captain seats with rooftop carrier option',
      'Triple AC vents & superior highway comfort'
    ],
    specs: {
      seating: '7 or 8 Passengers',
      luggage: '4 Large Bags + Rooftop Carrier',
      ac: 'Triple-zone climate control',
      transmission: 'Manual / Automatic',
      fuelType: 'Diesel (High Mileage)',
      idealFor: 'Big family outstation tours, ghat roads, hill stations'
    }
  },
  {
    id: 'ertiga',
    name: 'Maruti Suzuki Ertiga',
    category: '7-Seater MPV',
    badge: 'Top Family Choice',
    badgeType: 'success',
    rating: 4.95,
    reviewCount: 1890,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCb2BJN_3Q-wuFnDeAldYU-6vsUcOnfnnLg_mq1EbSw506-9OQx2PWaqqMd67bLIB21iUzxk7R0TqLvuYcWsmZVWeMY7OnRbUr1t4OBTTxD7un3oFq73M5kgO7VFOzKhv474ugA0VQhVZQlBM3X5P7GU7T0g9NJDqumS609SukyoXYasTOXsQe95iWwzM2awICXYveRHpac7WYmiz88wU2qrznVnzUHM31AkrxYIUpUAh9eR3iqy8qnJQ',
    rate12h: 1800,
    rate24h: 3000,
    seats: '7 Seater',
    fuelNote: 'No Toll & No Fuel / Fuel & Toll Extra',
    features: [
      'Flexible 3 rows with roof blowers',
      'Easy boarding for seniors & children'
    ],
    specs: {
      seating: '6–7 Passengers',
      luggage: '3 Suitcases + Foldable 3rd Row',
      ac: 'Dual AC with 2nd row overhead blowers',
      transmission: 'Smart Hybrid Petrol/CNG',
      fuelType: 'Petrol / Hybrid',
      idealFor: 'Budget family vacations, temple visits, weekend retreats'
    }
  },
  {
    id: 'baleno',
    name: 'Maruti Suzuki Baleno',
    category: 'Premium Hatchback',
    rating: 4.90,
    reviewCount: 940,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiuR4Lk_T3oJj-8n5eBstW6h_HxgRVVR34dFkU-pgMM41HJ3tBgzupffPX5k202yPjSDgpZFEfVcA8AJIHGUI1UWu7Waq8z3pFaPgy52b6QBaHKFSQgCxbX9Kv9paNERaVrLvj0unif4nw_9UE3tWM8sVKXO_DtNuesdQlgfhRAbwiBBF6jfGimEDi8mbNIDzRzB3qHYkczOSbINdiZi118Gb2WOwRK-BR0oZY49s_GQR3sB4cu7GKE4LXvhBUTym1wUA',
    rate12h: 1400,
    rate24h: 2600,
    seats: '5 Seater',
    fuelNote: 'No Toll & No Fuel / Fuel & Toll Extra',
    features: [
      'Spacious rear bench & smooth auto climate',
      'Ideal for couples & nuclear families'
    ],
    specs: {
      seating: '4–5 Passengers',
      luggage: '318 Litres (2 Medium Bags + Duffles)',
      ac: 'Auto climate with rear AC vents',
      transmission: 'Smooth Petrol 1.2L',
      fuelType: 'Petrol (22+ km/l efficiency)',
      idealFor: 'Nuclear families, couple getaways, swift city + highway'
    }
  },
  {
    id: 'swift-dzire',
    name: 'Swift / Dzire',
    category: 'Best Economy',
    rating: 4.89,
    reviewCount: 2150,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-GPvE7awRuWgszsJLYTlnzocAzqRLFtTcFOTRLiC3-5_TFCHDAEpKPSxVk8VEWk2wooauH4y_UAjzwEt1jwKOGZNgU8MnmcMV-JONTGR1xQQfffK1h6blwrHzYY1cuhhetEVt9cDtkvez4a_8QKJc4ygdATU_RiAHvlrXVtCUJrOdqudwoFXLmgcklarciQa33eZOSFfVfqhmGPZaEzPYIdOt1fRiqFii0eu2VTY840LzBYFwpN3pcVIb6pQmbFlsdeQ',
    rate12h: 1300,
    rate24h: 2500,
    seats: '5 Seater',
    fuelNote: 'No Toll & No Fuel / Fuel & Toll Extra',
    features: [
      'Swift city maneuverability & smooth AC',
      'Economical per-day rates for all budgets'
    ],
    specs: {
      seating: '4–5 Passengers',
      luggage: '378 Litres dedicated boot',
      ac: 'Chilling air conditioning',
      transmission: 'Manual 5-Speed',
      fuelType: 'Petrol / CNG',
      idealFor: 'Daily city rentals, airport transfers, budget outstation'
    }
  },
  {
    id: 'thar',
    name: 'Mahindra Thar',
    category: '4x4 Adventure',
    rating: 4.99,
    reviewCount: 760,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnirvtzk1OsXs6n0Qz0YAbpcdAKJn1CSjjfqIG_sKG8JrOrcEborcGXoFsfxMhLOrzoAj7aUEeq2tUCCLDn7w2qvfKwu_3nG_NqxFpW-WwvBRMscs_j2lSpIWp7Ap8kkcYPgOX_7Wp5L3hAhgdhIWs7Mzx5fa9kxEudTBwU175iMPPCBO6cXnIWdqmJhDDuT31ccy6lf5ay9EeszbdqjN8W9PQGPfK59VBDmTQjfcdDp_IXXJtNORSuw',
    rate12h: 3000,
    rate24h: 5000,
    seats: '4 Seater',
    fuelNote: 'No Toll & No Fuel / Fuel & Toll Extra',
    features: [
      'High ground clearance for tough terrains',
      'Bold road presence & rugged styling'
    ],
    specs: {
      seating: '4 Passengers (Hardtop)',
      luggage: '2 Medium Bags (Adventure Pack)',
      ac: 'High capacity AC',
      transmission: '4x4 High/Low manual gears',
      fuelType: 'mStallion Petrol / mHawk Diesel',
      idealFor: 'Jungle safaris, coastal trails, hill adventures, roadtrips'
    }
  },
  {
    id: 'ford',
    name: 'Ford EcoSport / Endeavour',
    category: 'Tough SUV',
    rating: 4.91,
    reviewCount: 680,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNLRFNkRFBwHmZaIfDaKlnt0nqHxNRpau97xi7xMrL_zJwT4awxSNFoDM50v1CFthWVn6tJN2eHmj4qJKhzb4vpDx3K8ht6A5SI1D87ariHGCGozKquW9CyLcWbTmhFkCR6ZYtavIcrmta92QHz5e01wEkEcSLYIhf104u1dPDQFEDn5ZsKLkTVMewUggt-CZrMohLVPbh0_EqaoBeBw4Ni-0Ee7-w18lXaD_hbRNpL5dummDKF69cARAWkEsY9J0k-eo',
    rate12h: 1500,
    rate24h: 2500,
    seats: '5 Seater',
    fuelNote: 'No Toll & No Fuel / Fuel & Toll Extra',
    features: [
      'Solid chassis safety & heavy boot space',
      'Effortless highway driving & ride quality'
    ],
    specs: {
      seating: '5 Passengers',
      luggage: 'Heavy boot with 60:40 split',
      ac: 'Powerful automatic climate control',
      transmission: 'Diesel / Petrol Turbo',
      fuelType: 'High torque diesel',
      idealFor: 'Long distance highway touring, family safety priority'
    }
  },
  {
    id: 'bmw',
    name: 'BMW Luxury Sedan',
    category: 'VIP Luxury',
    badge: 'VIP Luxury',
    badgeType: 'purple',
    rating: 5.0,
    reviewCount: 410,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHF9br8rBUhCaaN1cuAi4CII-jZLKGMt-otdQVpxbaf-UqeefPmhS3F3xRcQm5wir_tLnMXVclZbH5qmgyx0TW5BeizjzIKGF9KcuWbJFYrYUFSP0ez9MZnWRLRYy9QDw7s4otejLgfDp_8Qz1Tb6FJ0q3WetzFyntFFwobJZBuBPDYpXWY3_IRx3Z1_S3kKoLXyEzrXj3KYvm3HHqL9RhqnlkAiM3qthXSN7LzbI7qsPAqXtxtxONeQ',
    rate12h: 3000,
    rate24h: 6000,
    seats: '5 Seater',
    fuelNote: 'No Toll & No Fuel / Fuel & Toll Extra',
    features: [
      'World-class luxury, leather seats & chauffeur',
      'Perfect for corporate executives & weddings'
    ],
    specs: {
      seating: '4–5 Passengers (Executive Leather)',
      luggage: '480 Litres executive trunk',
      ac: 'Multi-zone ambient automatic climate',
      transmission: 'Steptronic Automatic',
      fuelType: 'TwinPower Turbo',
      idealFor: 'Weddings, VIP dignitaries, corporate delegates, celebrations'
    }
  }
];

export const PACKAGES: TravelPackage[] = [
  {
    id: 'hill-station',
    title: 'Hill Station Family Retreat',
    duration: '3 Days / 2 Nights',
    badgeColor: 'bg-sky-100 text-sky-600',
    description: 'Mahabaleshwar, Ooty, or Shimla circuits with scenic viewpoint halts.',
    vehicle: 'Ertiga or Innova',
    includedDistance: '600 km Total',
    perkTitle: 'Driver Night Bhatta',
    perkValue: 'Included',
    estimatedPrice: '₹9,800*',
    popularSpots: ['Venna Lake', 'Elephant Head Point', 'Mapro Garden', 'Pratapgad Fort']
  },
  {
    id: 'temple-darshan',
    title: 'Temple & Darshan Tour',
    duration: '4 Days / 3 Nights',
    badgeColor: 'bg-amber-100 text-amber-600',
    description: 'Shirdi, Tirupati, or Jyotirlinga circuits. Gentle driving for elders with wheelchair boot space.',
    vehicle: 'Innova Crysta Captain',
    includedDistance: '900 km Total',
    perkTitle: 'Temple Halt Time',
    perkValue: 'Free Waiting',
    estimatedPrice: '₹15,400*',
    popularSpots: ['Main Temple Complex', 'Shani Shingnapur', 'Muktidham', 'Panchavati']
  },
  {
    id: 'coastal-escape',
    title: 'Weekend Coastal Escape',
    duration: '2 Days / 1 Night',
    badgeColor: 'bg-emerald-100 text-emerald-600',
    description: 'Alibaug, Gokarna, or Pondicherry beaches. Effortless beach gear and stroller loading.',
    vehicle: 'Ertiga or Baleno',
    includedDistance: '450 km Total',
    perkTitle: 'Overnight Charge',
    perkValue: 'Included',
    estimatedPrice: '₹5,900*',
    popularSpots: ['Varsoli Beach', 'Kolaba Fort', 'Water Sports Point', 'Sunset Pier']
  },
  {
    id: 'intercity-drop',
    title: 'Intercity Direct Drop',
    duration: 'Guaranteed One-Way',
    badgeColor: 'bg-purple-100 text-purple-700',
    description: 'Mumbai-Pune, Bangalore-Mysore, Delhi-Agra. Pay only for one way with zero return empty fee.',
    vehicle: 'Sedan / MPV / SUV',
    includedDistance: 'Door to Door',
    perkTitle: 'Return Fare',
    perkValue: '₹0 Extra',
    estimatedPrice: '₹2,499*',
    popularSpots: ['Expressway Corridor', 'Doorstep Pickup', 'No Toll Surcharge']
  }
];

export const TRUST_POINTS = [
  {
    icon: 'elderly',
    title: 'Child & Senior Friendly',
    description: 'Smooth highway acceleration, gentle braking, sanitized AC interiors, and accommodating pauses for baby feeding or restroom stops.',
    perk: 'Patient Hill-Trained Drivers',
    color: 'emerald'
  },
  {
    icon: 'rv_hookup',
    title: 'Rooftop Luggage Carriers',
    description: 'Never travel cramped with heavy bags on your laps. Weatherproof rooftop carriers can be fitted on Ertiga and Innova upon request.',
    perk: 'Tarpaulin Weather Covered',
    color: 'blue'
  },
  {
    icon: 'receipt_long',
    title: '100% Transparent Invoicing',
    description: 'Clear odometer start/end photos, exact electronic FASTag slips, and no surprise driver tipping demanded. Official GST invoices provided.',
    perk: 'Zero Hidden Surges',
    color: 'amber'
  },
  {
    icon: 'share_location',
    title: 'Live Family GPS Tracking',
    description: 'Share a real-time vehicle location link with loved ones at home. Centralized control room monitors weather and expressway traffic alerts.',
    perk: '24/7 Helpline Support',
    color: 'purple'
  }
];

export const POPULAR_ROUTES = [
  'Hyderabad ⇄ Srisailam ⇄ Nagarjuna Sagar',
  'Hyderabad ⇄ Vijayawada ⇄ Guntur',
  'Hyderabad ⇄ Tirupati & Temple Circuits',
  'Hyderabad ⇄ Warangal ⇄ Ramappa'
];

export const CONTACT_INFO = {
  phone: '+91-7815989020',
  phoneRaw: '917815989020',
  whatsappUrl: 'https://wa.me/917815989020',
  email: 'cheelaganesh48@gmail.com',
  address: 'Hyderabad, Telangana'
};
