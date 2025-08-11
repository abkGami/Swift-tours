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

const carRentals: CarRental[] = [
  {
    id: 1,
    name: "BMW 3 Series",
    brand: "BMW",
    type: "Sedan",
    seats: 5,
    transmission: "Automatic",
    price: "From $89/day",
    image: "/placeholder.svg?height=200&width=300",
    features: ["GPS Navigation", "Bluetooth", "Air Conditioning", "Leather Seats"],
    rating: 4.8,
    fuelType: "Petrol",
    year: 2023,
    description: "Luxury sedan perfect for business trips and comfortable city driving."
  },
  {
    id: 2,
    name: "Mercedes-Benz C-Class",
    brand: "Mercedes-Benz",
    type: "Sedan",
    seats: 5,
    transmission: "Automatic",
    price: "From $95/day",
    image: "/placeholder.svg?height=200&width=300",
    features: ["Premium Sound", "Sunroof", "Heated Seats", "Cruise Control"],
    rating: 4.9,
    fuelType: "Petrol",
    year: 2023,
    description: "Premium luxury sedan with exceptional comfort and performance."
  },
  {
    id: 3,
    name: "Audi A4",
    brand: "Audi",
    type: "Sedan",
    seats: 5,
    transmission: "Automatic",
    price: "From $85/day",
    image: "/placeholder.svg?height=200&width=300",
    features: ["Quattro AWD", "Virtual Cockpit", "LED Headlights", "Parking Sensors"],
    rating: 4.7,
    fuelType: "Petrol",
    year: 2023,
    description: "Sporty sedan with advanced technology and all-wheel drive."
  },
  {
    id: 4,
    name: "Range Rover Evoque",
    brand: "Land Rover",
    type: "SUV",
    seats: 5,
    transmission: "Automatic",
    price: "From $120/day",
    image: "/placeholder.svg?height=200&width=300",
    features: ["4WD", "Terrain Response", "Panoramic Roof", "Premium Audio"],
    rating: 4.6,
    fuelType: "Petrol",
    year: 2023,
    description: "Compact luxury SUV perfect for both city and off-road adventures."
  },
  {
    id: 5,
    name: "Porsche Macan",
    brand: "Porsche",
    type: "SUV",
    seats: 5,
    transmission: "Automatic",
    price: "From $150/day",
    image: "/placeholder.svg?height=200&width=300",
    features: ["Sport Suspension", "Bose Audio", "Sport Seats", "Launch Control"],
    rating: 4.9,
    fuelType: "Petrol",
    year: 2023,
    description: "High-performance luxury SUV with sports car DNA."
  },
  {
    id: 6,
    name: "Tesla Model 3",
    brand: "Tesla",
    type: "Electric Sedan",
    seats: 5,
    transmission: "Automatic",
    price: "From $110/day",
    image: "/placeholder.svg?height=200&width=300",
    features: ["Autopilot", "Supercharging", "Premium Interior", "Over-the-air Updates"],
    rating: 4.8,
    fuelType: "Electric",
    year: 2023,
    description: "Revolutionary electric sedan with cutting-edge technology."
  },
  {
    id: 7,
    name: "Volkswagen Golf",
    brand: "Volkswagen",
    type: "Hatchback",
    seats: 5,
    transmission: "Manual",
    price: "From $45/day",
    image: "/placeholder.svg?height=200&width=300",
    features: ["Fuel Efficient", "Digital Cockpit", "Apple CarPlay", "Safety Assist"],
    rating: 4.5,
    fuelType: "Petrol",
    year: 2023,
    description: "Reliable and economical hatchback perfect for city driving."
  },
  {
    id: 8,
    name: "Ford Mustang",
    brand: "Ford",
    type: "Sports Car",
    seats: 4,
    transmission: "Manual",
    price: "From $130/day",
    image: "/placeholder.svg?height=200&width=300",
    features: ["V8 Engine", "Sport Mode", "Premium Audio", "Performance Tires"],
    rating: 4.7,
    fuelType: "Petrol",
    year: 2023,
    description: "Iconic American muscle car with thrilling performance."
  },
  {
    id: 9,
    name: "Toyota Prius",
    brand: "Toyota",
    type: "Hybrid",
    seats: 5,
    transmission: "Automatic",
    price: "From $55/day",
    image: "/placeholder.svg?height=200&width=300",
    features: ["Hybrid Engine", "Eco Mode", "Spacious Interior", "Advanced Safety"],
    rating: 4.4,
    fuelType: "Hybrid",
    year: 2023,
    description: "Eco-friendly hybrid with exceptional fuel economy."
  },
  {
    id: 10,
    name: "Jeep Wrangler",
    brand: "Jeep",
    type: "SUV",
    seats: 5,
    transmission: "Automatic",
    price: "From $95/day",
    image: "/placeholder.svg?height=200&width=300",
    features: ["4x4 Capability", "Removable Doors", "Off-road Tires", "Rock Rails"],
    rating: 4.6,
    fuelType: "Petrol",
    year: 2023,
    description: "Ultimate off-road vehicle for adventure seekers."
  }
];

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

  const handleSearch = () => {
    if (!pickupLocation || !pickupDate || !pickupTime || !returnDate || !returnTime) {
      alert("Please fill all fields correctly.");
      return;
    }
    
    setLoading(true);
    setHasSearched(false);

    // Simulate search delay
    setTimeout(() => {
      setLoading(false);
      setHasSearched(true);
      setFilteredCars(carRentals);
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
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}libraries=places`}
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
                <span>10+ Premium Vehicles</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>4-5 Passengers</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Flexible Rental Periods</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Multiple Pickup Locations</span>
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
                          <div>
                            <span className="text-sm text-gray-500">Year:</span>
                            <span className="ml-2 font-medium">{car.year}</span>
                          </div>
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