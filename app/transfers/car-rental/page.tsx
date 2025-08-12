"use client";

import { motion } from "framer-motion";
import { Car, Users, Star, Calendar, MapPin, Clock, Fuel, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import emailjs from "emailjs-com";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import Script from "next/script";

type CarRental = {
  id: number;
  name: string;
  brand: string;
  type: string;
  seats: number;
  transmission: string;
  price: string;
  image: string;
  features: string[];
  rating: number;
  fuelType: string;
  year: number;
  description: string;
};



export default function CarRentalPage() {
  const router = useRouter();
  const resultsRef = useRef<HTMLDivElement>(null);
  
  // Search form state
  const [pickupLocation, setPickupLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [returnTime, setReturnTime] = useState("");
  
  // Search results state
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [filteredCars, setFilteredCars] = useState<CarRental[]>([]);
  const [regionalPreference, setRegionalPreference] = useState<string>("");
  
  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState<CarRental | null>(null);
  const [message, setMessage] = useState("");
  
  // Contact form state
  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: ""
  });

  const carRentals: CarRental[] = [
    {
      id: 1,
      name: "BMW 3 Series",
      brand: "BMW",
      type: "Luxury Sedan",
      seats: 5,
      transmission: "Automatic",
      price: "$89/day",
      image: "/cars/bmw-3-series.jpg",
      features: ["Leather Seats", "Navigation", "Bluetooth", "Climate Control", "Premium Sound"],
      rating: 4.8,
      fuelType: "Gasoline",
      year: 2023,
      description: "Premium luxury sedan with exceptional comfort and performance"
    },
    {
      id: 2,
      name: "Mercedes C-Class",
      brand: "Mercedes-Benz",
      type: "Luxury Sedan",
      seats: 5,
      transmission: "Automatic",
      price: "$95/day",
      image: "/cars/mercedes-c-class.jpg",
      features: ["Leather Seats", "Sunroof", "Advanced Safety", "Premium Audio", "Heated Seats"],
      rating: 4.9,
      fuelType: "Gasoline",
      year: 2023,
      description: "Elegant luxury sedan with cutting-edge technology"
    },
    {
      id: 3,
      name: "Audi A4",
      brand: "Audi",
      type: "Luxury Sedan",
      seats: 5,
      transmission: "Automatic",
      price: "$85/day",
      image: "/cars/audi-a4.jpg",
      features: ["Quattro AWD", "Virtual Cockpit", "Bang & Olufsen Audio", "LED Headlights"],
      rating: 4.7,
      fuelType: "Gasoline",
      year: 2023,
      description: "Sophisticated sedan with all-wheel drive capability"
    },
    {
      id: 4,
      name: "Range Rover Evoque",
      brand: "Land Rover",
      type: "Luxury SUV",
      seats: 5,
      transmission: "Automatic",
      price: "$120/day",
      image: "/cars/range-rover-evoque.jpg",
      features: ["4WD", "Terrain Response", "Premium Interior", "Panoramic Roof", "Meridian Audio"],
      rating: 4.6,
      fuelType: "Gasoline",
      year: 2023,
      description: "Compact luxury SUV with exceptional off-road capabilities"
    },
    {
      id: 5,
      name: "Jeep Wrangler",
      brand: "Jeep",
      type: "Heavy Off-Road SUV",
      seats: 4,
      transmission: "Manual",
      price: "$75/day",
      image: "/cars/jeep-wrangler.jpg",
      features: ["4x4 Capability", "Removable Doors", "Rock-Trac 4WD", "Skid Plates", "Tow Hooks"],
      rating: 4.5,
      fuelType: "Gasoline",
      year: 2023,
      description: "Ultimate off-road vehicle for adventure enthusiasts"
    },
    {
      id: 6,
      name: "Tesla Model 3",
      brand: "Tesla",
      type: "Electric Sedan",
      seats: 5,
      transmission: "Automatic",
      price: "$95/day",
      image: "/cars/tesla-model-3.jpg",
      features: ["Autopilot", "Supercharging", "Glass Roof", "Premium Connectivity", "Over-the-Air Updates"],
      rating: 4.8,
      fuelType: "Electric",
      year: 2023,
      description: "Revolutionary electric sedan with cutting-edge technology"
    },
    {
      id: 7,
      name: "Toyota Prius",
      brand: "Toyota",
      type: "Hybrid Sedan",
      seats: 5,
      transmission: "CVT",
      price: "$55/day",
      image: "/cars/toyota-prius.jpg",
      features: ["Hybrid Engine", "Fuel Efficient", "Toyota Safety Sense", "Wireless Charging"],
      rating: 4.4,
      fuelType: "Hybrid",
      year: 2023,
      description: "Eco-friendly hybrid with outstanding fuel economy"
    },
    {
      id: 8,
      name: "Tesla Model Y",
      brand: "Tesla",
      type: "Electric SUV",
      seats: 7,
      transmission: "Automatic",
      price: "$110/day",
      image: "/cars/tesla-model-y.jpg",
      features: ["Dual Motor AWD", "Autopilot", "Third Row Seating", "Glass Roof", "Supercharging"],
      rating: 4.7,
      fuelType: "Electric",
      year: 2023,
      description: "Spacious electric SUV with advanced autonomous features"
    },
    {
      id: 9,
      name: "Nissan Leaf",
      brand: "Nissan",
      type: "Electric Compact",
      seats: 5,
      transmission: "Automatic",
      price: "$65/day",
      image: "/cars/nissan-leaf.jpg",
      features: ["Zero Emissions", "e-Pedal", "ProPILOT Assist", "Quick Charging"],
      rating: 4.3,
      fuelType: "Electric",
      year: 2023,
      description: "Affordable electric vehicle perfect for city driving"
    },
    {
      id: 10,
      name: "Chevrolet Bolt EV",
      brand: "Chevrolet",
      type: "Electric Compact",
      seats: 5,
      transmission: "Automatic",
      price: "$60/day",
      image: "/cars/chevrolet-bolt.jpg",
      features: ["Long Range Battery", "Fast Charging", "Teen Driver", "4G LTE Wi-Fi"],
      rating: 4.2,
      fuelType: "Electric",
      year: 2023,
      description: "Practical electric car with impressive range"
    },
    {
      id: 11,
      name: "Honda Fit",
      brand: "Honda",
      type: "Compact Hatchback",
      seats: 5,
      transmission: "CVT",
      price: "$45/day",
      image: "/cars/honda-fit.jpg",
      features: ["Magic Seats", "Fuel Efficient", "Honda Sensing", "Cargo Space"],
      rating: 4.1,
      fuelType: "Gasoline",
      year: 2023,
      description: "Versatile compact car perfect for urban environments"
    },
    {
      id: 12,
      name: "Toyota Yaris",
      brand: "Toyota",
      type: "Compact Sedan",
      seats: 5,
      transmission: "Manual",
      price: "$40/day",
      image: "/cars/toyota-yaris.jpg",
      features: ["Fuel Efficient", "Toyota Safety Sense", "Compact Design", "Easy Parking"],
      rating: 4.0,
      fuelType: "Gasoline",
      year: 2023,
      description: "Economical compact sedan ideal for city navigation"
    },
    {
      id: 13,
      name: "Suzuki Swift",
      brand: "Suzuki",
      type: "Compact Hatchback",
      seats: 5,
      transmission: "Manual",
      price: "$38/day",
      image: "/cars/suzuki-swift.jpg",
      features: ["Lightweight", "Agile Handling", "Fuel Efficient", "Compact Size"],
      rating: 3.9,
      fuelType: "Gasoline",
      year: 2023,
      description: "Nimble and efficient hatchback for tight city streets"
    },
    {
      id: 14,
      name: "Ford F-150 Raptor",
      brand: "Ford",
      type: "Heavy Off-Road Truck",
      seats: 5,
      transmission: "Automatic",
      price: "$150/day",
      image: "/cars/ford-f150-raptor.jpg",
      features: ["Twin-Turbo V6", "Fox Racing Shocks", "Terrain Management", "Skid Plates", "Towing Capacity"],
      rating: 4.8,
      fuelType: "Gasoline",
      year: 2023,
      description: "High-performance off-road truck built for extreme terrain"
    },
    {
      id: 15,
      name: "Chevrolet Tahoe",
      brand: "Chevrolet",
      type: "Heavy SUV",
      seats: 8,
      transmission: "Automatic",
      price: "$130/day",
      image: "/cars/chevrolet-tahoe.jpg",
      features: ["4WD", "Towing Package", "Third Row Seating", "Cargo Space", "Advanced Safety"],
      rating: 4.5,
      fuelType: "Gasoline",
      year: 2023,
      description: "Full-size SUV with maximum passenger and cargo capacity"
    },
    {
      id: 16,
      name: "Toyota Land Cruiser",
      brand: "Toyota",
      type: "Heavy Off-Road SUV",
      seats: 8,
      transmission: "Automatic",
      price: "$140/day",
      image: "/cars/toyota-land-cruiser.jpg",
      features: ["Multi-Terrain Select", "Crawl Control", "Safari Ready", "Rock Protection", "Water Crossing"],
      rating: 4.7,
      fuelType: "Gasoline",
      year: 2023,
      description: "Legendary off-road SUV perfect for safari adventures"
    },
    {
      id: 17,
      name: "Nissan Patrol",
      brand: "Nissan",
      type: "Heavy Off-Road SUV",
      seats: 7,
      transmission: "Automatic",
      price: "$125/day",
      image: "/cars/nissan-patrol.jpg",
      features: ["Intelligent 4WD", "Hill Start Assist", "Desert Capable", "Robust Build", "High Ground Clearance"],
      rating: 4.4,
      fuelType: "Gasoline",
      year: 2023,
      description: "Rugged SUV designed for challenging terrains and long expeditions"
    },
    {
      id: 18,
      name: "BMW i3",
      brand: "BMW",
      type: "Electric Compact",
      seats: 4,
      transmission: "Automatic",
      price: "$70/day",
      image: "/cars/bmw-i3.jpg",
      features: ["Carbon Fiber Body", "Sustainable Materials", "Urban Mobility", "Quick Charging"],
      rating: 4.2,
      fuelType: "Electric",
      year: 2023,
      description: "Innovative electric city car with sustainable design"
    },
    {
      id: 19,
      name: "Volkswagen Golf",
      brand: "Volkswagen",
      type: "Compact Hatchback",
      seats: 5,
      transmission: "Manual",
      price: "$50/day",
      image: "/cars/volkswagen-golf.jpg",
      features: ["German Engineering", "Efficient Engine", "Advanced Safety", "Quality Interior"],
      rating: 4.3,
      fuelType: "Gasoline",
      year: 2023,
      description: "Classic compact hatchback with refined European engineering"
    },
    {
      id: 20,
      name: "Hyundai Kona Electric",
      brand: "Hyundai",
      type: "Electric SUV",
      seats: 5,
      transmission: "Automatic",
      price: "$75/day",
      image: "/cars/hyundai-kona-electric.jpg",
      features: ["Long Range", "Fast Charging", "SmartSense Safety", "Wireless Phone Charging"],
      rating: 4.4,
      fuelType: "Electric",
      year: 2023,
      description: "Versatile electric SUV with impressive range and features"
    }
  ];

  // Regional vehicle preference logic
const getRegionalVehiclePreference = (location: string): string => {
  const locationLower = location.toLowerCase();
  
  // EV-heavy regions (Europe + strong EV adoption countries)
  if (
    locationLower.includes('norway') || locationLower.includes('oslo') || locationLower.includes('bergen') ||
    locationLower.includes('iceland') || locationLower.includes('reykjavik') ||
    locationLower.includes('sweden') || locationLower.includes('stockholm') || locationLower.includes('gothenburg') ||
    locationLower.includes('netherlands') || locationLower.includes('amsterdam') || locationLower.includes('rotterdam') ||
    locationLower.includes('denmark') || locationLower.includes('copenhagen') ||
    locationLower.includes('finland') || locationLower.includes('helsinki') ||
    locationLower.includes('switzerland') || locationLower.includes('zurich') || locationLower.includes('geneva') ||
    locationLower.includes('germany') || locationLower.includes('berlin') || locationLower.includes('munich') ||
    locationLower.includes('canada') || locationLower.includes('vancouver') || locationLower.includes('toronto')
  ) {
    return 'electric';
  }
  
  // Small car regions (Asia + small urban nations)
  if (
    locationLower.includes('japan') || locationLower.includes('tokyo') || locationLower.includes('osaka') ||
    locationLower.includes('singapore') || locationLower.includes('hong kong') ||
    locationLower.includes('south korea') || locationLower.includes('seoul') ||
    locationLower.includes('taiwan') || locationLower.includes('taipei') ||
    locationLower.includes('monaco') || locationLower.includes('malta') ||
    locationLower.includes('thailand') || locationLower.includes('bangkok') ||
    locationLower.includes('philippines') || locationLower.includes('manila') ||
    locationLower.includes('vietnam') || locationLower.includes('hanoi') || locationLower.includes('ho chi minh')
  ) {
    return 'compact';
  }
  
  // Heavy vehicle regions (Off-road, mountainous, safari, rural terrains)
  if (
    locationLower.includes('kenya') || locationLower.includes('nairobi') || locationLower.includes('mombasa') ||
    locationLower.includes('tanzania') || locationLower.includes('arusha') || locationLower.includes('dar es salaam') ||
    locationLower.includes('botswana') || locationLower.includes('namibia') || locationLower.includes('south africa') ||
    locationLower.includes('zimbabwe') || locationLower.includes('zambia') ||
    locationLower.includes('nepal') || locationLower.includes('bhutan') ||
    locationLower.includes('mongolia') || locationLower.includes('patagonia') ||
    locationLower.includes('alaska') || locationLower.includes('yukon') ||
    locationLower.includes('outback') || locationLower.includes('safari') ||
    locationLower.includes('serengeti') || locationLower.includes('masai mara') ||
    locationLower.includes('andes') || locationLower.includes('rockies') || locationLower.includes('himalaya')
  ) {
    return 'heavy';
  }
  
  // Default to mixed/standard selection
  return 'standard';
};


  // Filter cars based on regional preferences
  const filterCarsByRegion = (cars: CarRental[], preference: string): CarRental[] => {
    if (preference === 'standard') return cars;
    
    // Separate cars by type
    const electricCars = cars.filter(car => car.fuelType === 'Electric');
    const compactCars = cars.filter(car => 
      car.type.includes('Compact') || 
      car.type === 'Hatchback' || 
      (car.name === 'Volkswagen Golf' || car.name === 'Honda Fit' || car.name === 'Toyota Yaris' || car.name === 'Suzuki Swift')
    );
    const heavyCars = cars.filter(car => 
      car.type.includes('Heavy') || 
      car.features.some(feature => feature.includes('4x4') || feature.includes('Safari') || feature.includes('Off-road'))
    );
    const otherCars = cars.filter(car => 
      !electricCars.includes(car) && 
      !compactCars.includes(car) && 
      !heavyCars.includes(car)
    );

    // Priority filtering based on regional preference
    switch (preference) {
      case 'electric':
        return [...electricCars, ...otherCars];
      case 'compact':
        return [...compactCars, ...otherCars];
      case 'heavy':
        return [...heavyCars, ...otherCars];
      default:
        return cars;
    }
  };

  // Get regional information for display
  const getRegionInfo = (preference: string) => {
    switch (preference) {
      case 'electric':
        return { icon: '⚡', text: 'EV-friendly region - Electric vehicles prioritized', color: 'text-green-600' };
      case 'compact':
        return { icon: '🚗', text: 'Dense urban area - Compact cars recommended', color: 'text-blue-600' };
      case 'heavy':
        return { icon: '🚙', text: 'Adventure destination - Off-road vehicles featured', color: 'text-orange-600' };
      default:
        return { icon: '🌍', text: 'Standard selection - All vehicle types available', color: 'text-gray-600' };
    }
  };

 const handleSearch = () => {
    if (!pickupLocation || !pickupDate || !pickupTime || !returnDate || !returnTime) {
      alert("Please fill all fields correctly.");
      return;
    }
    
    setLoading(true);
    setHasSearched(false);

    // Simulate search delay
    setTimeout(() => {
      const preference = getRegionalVehiclePreference(pickupLocation);
      setRegionalPreference(preference);
      
      // Use the actual car rentals data instead of empty array
      const filtered = filterCarsByRegion(carRentals, preference);
      
      setLoading(false);
      setHasSearched(true);
      setFilteredCars(filtered);
      if (resultsRef.current) {
        resultsRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 2000);

    // Scroll to loading animation immediately
    setTimeout(() => {
      if (resultsRef.current) {
        resultsRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleBookCar = (car: CarRental) => {
    setSelectedCar(car);
    setModalOpen(true);
  };

  const formatDateTime = (date: string, time: string) => {
    if (!date || !time) return "";
    const dateObj = new Date(`${date}T${time}`);
    return dateObj.toLocaleString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-50">
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
        strategy="beforeInteractive"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-blue-900/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="flex items-center justify-center mb-4">
              <Car className="h-12 w-12 mr-3" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Car Rentals
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Discover freedom on the road with our premium car rental service. 
              Choose from luxury sedans, SUVs, sports cars, and eco-friendly options.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Car className="h-5 w-5 mr-2" />
                <span>20+ Premium Vehicles</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>4-8 Passengers</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Flexible Rental Periods</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Regional Recommendations</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search Card */}
      <section className="pt-8 pb-8 flex justify-center">
        <Card className="w-full max-w-6xl mx-auto shadow-2xl border-0 p-8">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900 mb-4">
              Find Your Perfect Car Rental
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {/* Pickup Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pickup Location
                </label>
                <GooglePlacesAutocomplete
                  selectProps={{
                    placeholder: "Search pickup location",
                    value: pickupLocation
                      ? { label: pickupLocation, value: pickupLocation }
                      : null,
                    onChange: (option) => {
                      setPickupLocation(option?.label || "");
                    },
                    styles: {
                      control: (provided) => ({
                        ...provided,
                        width: '100%',
                        padding: '2px',
                        border: '1px solid #d1d5db',
                        borderRadius: '6px',
                        minHeight: '42px'
                      })
                    }
                  }}
                  apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
                />
                {/* Regional Preference Indicator */}
                {pickupLocation && (
                  <div className="mt-2 text-sm flex items-center">
                    <span className="mr-1">{getRegionInfo(getRegionalVehiclePreference(pickupLocation)).icon}</span>
                    <span className={getRegionInfo(getRegionalVehiclePreference(pickupLocation)).color}>
                      {getRegionInfo(getRegionalVehiclePreference(pickupLocation)).text}
                    </span>
                  </div>
                )}
              </div>

              {/* Pickup Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pickup Date
                </label>
                <input
                  type="date"
                  value={pickupDate}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* Pickup Time */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pickup Time
                </label>
                <input
                  type="time"
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* Return Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Return Date
                </label>
                <input
                  type="date"
                  value={returnDate}
                  min={pickupDate || new Date().toISOString().split("T")[0]}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* Return Time */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Return Time
                </label>
                <input
                  type="time"
                  value={returnTime}
                  onChange={(e) => setReturnTime(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="mt-6 text-center">
              <Button
                onClick={handleSearch}
                className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg"
                disabled={loading}
              >
                {loading ? "Searching..." : "Search Cars"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Loading Animation */}
      <div ref={resultsRef}>
        {loading && (
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full mb-4"
                />
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  Searching for available cars...
                </h3>
                <p className="text-gray-600">
                  Finding the best rental options for your trip
                </p>
              </motion.div>
            </div>
          </section>
        )}
      </div>

      {/* Search Results */}
      {hasSearched && !loading && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Available Cars
              </h2>
              <p className="text-xl text-gray-600">
                {filteredCars.length} cars found for your search
              </p>
              
              {/* Regional Information Card */}
              {regionalPreference && regionalPreference !== 'standard' && (
                <div className="mt-6 max-w-2xl mx-auto">
                  <Card className="border-l-4 border-blue-500 bg-blue-50">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-center">
                        <span className="text-2xl mr-3">{getRegionInfo(regionalPreference).icon}</span>
                        <div>
                          <h3 className="font-semibold text-gray-900">Regional Vehicle Selection</h3>
                          <p className={`text-sm ${getRegionInfo(regionalPreference).color}`}>
                            Based on your location "{pickupLocation}", we've prioritized {
                              regionalPreference === 'electric' ? 'electric vehicles' :
                              regionalPreference === 'compact' ? 'compact cars' :
                              'heavy-duty vehicles'
                            } that are popular in this region.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCars.map((car, index) => (
                <motion.div
                  key={car.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg h-full">
                    <div className="relative">
                      <Image
                        src={car.image}
                        alt={car.name}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-3 right-3 bg-white text-gray-900">
                        {car.price}
                      </Badge>
                      <div className="absolute top-3 left-3 flex items-center bg-white rounded-full px-2 py-1">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-sm font-medium">{car.rating}</span>
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-xl text-gray-900">
                        {car.name}
                      </CardTitle>
                      <p className="text-gray-600">{car.description}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {car.seats} seats
                        </div>
                        <div className="flex items-center">
                          <Settings className="h-4 w-4 mr-1" />
                          {car.transmission}
                        </div>
                        <div className="flex items-center">
                          <Fuel className="h-4 w-4 mr-1" />
                          {car.fuelType}
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="flex-1">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            Features
                          </h4>
                          <div className="space-y-1">
                            {car.features.map((feature) => (
                              <div
                                key={feature}
                                className="text-sm text-gray-600 flex items-center"
                              >
                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-sm text-gray-500">Type:</span>
                            <Badge variant="secondary" className="ml-2">
                              {car.type}
                            </Badge>
                          </div>
                          {/* <div>
                            <span className="text-sm text-gray-500">Year:</span>
                            <span className="ml-2 font-medium">{car.year}</span>
                          </div> */}
                        </div>
                      </div>

                      <div className="mt-6">
                        <Button
                          onClick={() => handleBookCar(car)}
                          className="w-full bg-blue-600 hover:bg-blue-700"
                        >
                          Book Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Booking Modal */}
      <Dialog
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        className="fixed z-50 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="fixed inset-0 bg-black bg-opacity-40" />
          <div className="relative bg-white rounded-lg shadow-xl max-w-lg w-full mx-auto p-8 z-50">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
              onClick={() => setModalOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <Dialog.Title className="text-2xl font-bold mb-4 text-gray-900">
              Booking Summary
            </Dialog.Title>
            
            {selectedCar && (
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="text-lg font-semibold">{selectedCar.name}</h3>
                  <p className="text-gray-600">{selectedCar.type} • {selectedCar.seats} seats • {selectedCar.transmission}</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pickup:</span>
                    <span className="font-medium">{pickupLocation}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pickup Date & Time:</span>
                    <span className="font-medium">{formatDateTime(pickupDate, pickupTime)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Return Date & Time:</span>
                    <span className="font-medium">{formatDateTime(returnDate, returnTime)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-semibold border-t pt-2">
                    <span>Total Price:</span>
                    <span className="text-blue-600">{selectedCar.price}</span>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">
                    Ready to book this car? We'll need your contact details to proceed.
                  </p>
                </div>
                
                <Button
                  onClick={() => {
                    setModalOpen(false);
                    setContactModalOpen(true);
                    setMessage(
                      `Hello, I would like to book the ${selectedCar.name} for pickup at ${pickupLocation} from ${formatDateTime(pickupDate, pickupTime)} to ${formatDateTime(returnDate, returnTime)}. Please confirm availability and provide booking details. Thank you.`
                    );
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Proceed to Contact Details
                </Button>
              </div>
            )}
          </div>
        </div>
      </Dialog>

      {/* Contact Info Modal */}
      <Dialog
        open={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        className="fixed z-50 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="fixed inset-0 bg-black bg-opacity-40" />
          <div className="relative bg-white rounded-lg shadow-xl max-w-lg w-full mx-auto p-8 z-50">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
              onClick={() => setContactModalOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <Dialog.Title className="text-2xl font-bold mb-4 text-gray-900">
              Enter Your Contact Details
            </Dialog.Title>
            
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();

                const templateParams = {
                  first_name: contactForm.firstName,
                  last_name: contactForm.lastName,
                  title: "Swift Travels Car Rental Booking",
                  message: `${message} My name is ${contactForm.firstName} ${contactForm.lastName}, my phone number is ${contactForm.phone}, and my email is ${contactForm.email}`
                };

                emailjs.send('service_nk0x5wv', 'template_ihrbiim', templateParams, 'cSCC009c3HP3O5rHb')
                  .then((response) => {
                    console.log('Email sent successfully!', response.status, response.text);
                    setContactModalOpen(false);
                    alert("Thank you! Your car rental request has been submitted.");
                  })
                  .catch((error) => {
                    console.error('Failed to send email:', error);
                    alert('There was an error sending your request. Please try again.');
                  });
              }}
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  value={contactForm.firstName}
                  onChange={(e) =>
                    setContactForm({
                      ...contactForm,
                      firstName: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  value={contactForm.lastName}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, lastName: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  value={contactForm.phone}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, phone: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  value={contactForm.email}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, email: e.target.value })
                  }
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 mt-2"
              >
                Submit Booking Request
              </Button>
            </form>
          </div>
        </div>
      </Dialog>

      <Footer />
    </div>
  );
}