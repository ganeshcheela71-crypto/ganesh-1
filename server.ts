import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProduction = process.env.NODE_ENV === 'production';
const PORT = Number(process.env.PORT) || 3000;

interface BookingRecord {
  id: string;
  createdAt: string;
  customerName?: string;
  customerPhone?: string;
  pickup: string;
  destination: string;
  carName: string;
  duration: string;
  passengers: string;
  luggage: string;
  estimatedTotal: number;
  status: 'Confirmed (Zero Advance)' | 'In Review' | 'Driver Dispatched';
  travelDate?: string;
  notes?: string;
}

interface CustomTourInquiry {
  id: string;
  createdAt: string;
  tourType: string;
  duration: string;
  pickupCity: string;
  customSpots: string;
  carChoice: string;
  elderlyAssistance: boolean;
  rooftopCarrier: boolean;
  status: 'Received';
}

// In-memory data storage
const bookingsStore: Map<string, BookingRecord> = new Map();
const customToursStore: Map<string, CustomTourInquiry> = new Map();

// Seed initial bookings for demonstration
bookingsStore.set('RT-84920', {
  id: 'RT-84920',
  createdAt: new Date().toISOString(),
  customerName: 'Suresh Verma',
  customerPhone: '+91-9820012345',
  pickup: 'Hyderabad',
  destination: 'Srisailam Mallikarjuna',
  carName: 'Toyota Innova Crysta',
  duration: '2 Days Vacation',
  passengers: '4 - 6 Passengers (Family)',
  luggage: 'Yes (Rooftop Carrier)',
  estimatedTotal: 8000,
  status: 'Confirmed (Zero Advance)',
  travelDate: 'Tomorrow Morning',
  notes: 'Senior citizen wheelchair accessible boot space requested'
});

async function startServer() {
  const app = express();
  app.use(express.json());

  // API Routes
  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({
      status: 'ok',
      service: 'Reeshika Travels API',
      timestamp: new Date().toISOString()
    });
  });

  // Calculate quote
  app.post('/api/quotes', (req: Request, res: Response) => {
    const { pickup, destination, carName, carRate12h, carRate24h, duration, luggage } = req.body;

    const isDays = duration ? duration.toLowerCase().includes('day') : false;
    let daysNum = 1;
    const match = duration ? duration.match(/\d+/) : null;
    if (match) {
      daysNum = parseInt(match[0], 10);
    }

    const rate24h = Number(carRate24h) || 3000;
    const rate12h = Number(carRate12h) || 1800;
    const baseFare = isDays ? rate24h * Math.max(daysNum, 1) : rate12h;
    const driverNightBhatta = isDays && daysNum > 1 ? (daysNum - 1) * 300 : 0;
    const rooftopCharge = luggage && luggage.includes('Rooftop') ? 0 : 0; // Free inclusion in Reeshika

    const totalEstimate = baseFare + driverNightBhatta + rooftopCharge;
    const quoteId = `RQ-${Math.floor(100000 + Math.random() * 900000)}`;

    res.json({
      success: true,
      quoteId,
      pickup: pickup || 'Pickup Location',
      destination: destination || 'Destination',
      carName: carName || 'Maruti Ertiga',
      duration: duration || '12h Plan',
      baseFare,
      driverNightBhatta,
      rooftopCharge,
      totalEstimate,
      fuelTollPolicy: 'Fuel & FASTag at actuals (zero advance, pay at trip end)',
      timestamp: new Date().toISOString()
    });
  });

  // Create booking
  app.post('/api/bookings', (req: Request, res: Response) => {
    const {
      customerName,
      customerPhone,
      pickup,
      destination,
      carName,
      carRate12h,
      carRate24h,
      duration,
      passengers,
      luggage,
      travelDate,
      notes
    } = req.body;

    if (!pickup || !destination || !carName) {
      return res.status(400).json({ error: 'Pickup, destination, and carName are required' });
    }

    const isDays = duration ? duration.toLowerCase().includes('day') : false;
    let daysNum = 1;
    const match = duration ? duration.match(/\d+/) : null;
    if (match) {
      daysNum = parseInt(match[0], 10);
    }

    const rate24h = Number(carRate24h) || 3000;
    const rate12h = Number(carRate12h) || 1800;
    const estimatedTotal = isDays ? rate24h * Math.max(daysNum, 1) : rate12h;

    const id = `RT-${Math.floor(10000 + Math.random() * 90000)}`;
    const newBooking: BookingRecord = {
      id,
      createdAt: new Date().toISOString(),
      customerName: customerName || 'Valued Guest',
      customerPhone: customerPhone || '+91-7815989020',
      pickup,
      destination,
      carName,
      duration: duration || '12 Hours Plan',
      passengers: passengers || '4 - 6 Passengers',
      luggage: luggage || 'Standard Boot Space',
      estimatedTotal,
      status: 'Confirmed (Zero Advance)',
      travelDate: travelDate || 'Flexible Schedule',
      notes: notes || ''
    };

    bookingsStore.set(id, newBooking);

    return res.status(201).json({
      success: true,
      booking: newBooking,
      message: 'Booking created successfully with Zero Advance policy. Pay after journey ends.'
    });
  });

  // Get booking by ID
  app.get('/api/bookings/:id', (req: Request, res: Response) => {
    const id = req.params.id.toUpperCase();
    const booking = bookingsStore.get(id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        error: `No booking found for ID "${id}". Please verify your reference number.`
      });
    }

    return res.json({
      success: true,
      booking
    });
  });

  // Custom tour itinerary inquiry
  app.post('/api/custom-tours', (req: Request, res: Response) => {
    const { tourType, duration, pickupCity, customSpots, carChoice, elderlyAssistance, rooftopCarrier } = req.body;

    const inquiryId = `TOUR-${Math.floor(1000 + Math.random() * 9000)}`;
    const inquiry: CustomTourInquiry = {
      id: inquiryId,
      createdAt: new Date().toISOString(),
      tourType: tourType || 'Hill Station Retreat',
      duration: duration || '3 Days',
      pickupCity: pickupCity || 'Hyderabad',
      customSpots: customSpots || 'General Circuit',
      carChoice: carChoice || 'Toyota Innova Crysta',
      elderlyAssistance: Boolean(elderlyAssistance),
      rooftopCarrier: Boolean(rooftopCarrier),
      status: 'Received'
    };

    customToursStore.set(inquiryId, inquiry);

    return res.status(201).json({
      success: true,
      inquiry,
      message: 'Custom tour inquiry received by Fleet Coordinator.'
    });
  });

  // Vite middleware in development vs Static files in production
  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Reeshika Travels server running on port ${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
