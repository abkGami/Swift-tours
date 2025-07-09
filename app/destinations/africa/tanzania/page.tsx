"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Clock, Camera, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

const tanzaniaCities = [
  {
    name: "Arusha",
    description:
      "Gateway to Tanzania’s northern safari circuit, Arusha is a lively city surrounded by coffee plantations and close to Mount Meru.",
    image: "/tanzania/arusha.jpg",
    rating: 4.7,
    duration: "1-2 days",
    category: "Safari Hub",
    highlights: [
      "arusha national park",
      "cultural heritage centre",
      "maasai market",
      "mount meru",
    ],
  },
  {
    name: "Zanzibar",
    description:
      "A tropical paradise island with white-sand beaches, turquoise waters, and the historic Stone Town.",
    image: "/tanzania/zanzibar.jpg",
    rating: 4.9,
    duration: "3-5 days",
    category: "Beach & Culture",
    highlights: [
      "stone town",
      "nungwi beach",
      "prison island",
      "spice tours",
    ],
  },
  {
    name: "Dar es Salaam",
    description:
      "Tanzania’s largest city and economic center, known for its bustling markets, beaches, and vibrant nightlife.",
    image: "/tanzania/dar-es-salaam.jpg",
    rating: 4.5,
    duration: "2-3 days",
    category: "Urban & Coast",
    highlights: [
      "kariakoo market",
      "coco beach",
      "national museum",
      "bongoyo island",
    ],
  },
  {
    name: "Serengeti National Park",
    description:
      "World-famous for the Great Migration and abundant wildlife, the Serengeti offers unforgettable safari experiences.",
    image: "/tanzania/serengeti.jpg",
    rating: 5.0,
    duration: "2-4 days",
    category: "Safari Destination",
    highlights: [
      "great migration",
      "game drives",
      "hot air balloon safari",
      "ngorongoro crater nearby",
    ],
  },
  {
    name: "Ngorongoro Conservation Area",
    description:
      "A UNESCO World Heritage Site, home to the spectacular Ngorongoro Crater and diverse wildlife.",
    image: "/tanzania/ngorongoro.jpg",
    rating: 4.9,
    duration: "1-2 days",
    category: "Natural Wonder",
    highlights: [
      "ngorongoro crater",
      "wildlife viewing",
      "maasai villages",
      "crater rim hikes",
    ],
  },
  {
    name: "Moshi",
    description:
      "A charming town at the foot of Mount Kilimanjaro, popular with trekkers and coffee lovers.",
    image: "/tanzania/moshi.jpg",
    rating: 4.6,
    duration: "1-2 days",
    category: "Mountain Base",
    highlights: [
      "mount kilimanjaro treks",
      "materuni waterfalls",
      "coffee tours",
      "local markets",
    ],
  },
];

const tanzaniaAttractions = [
  {
    name: "Serengeti National Park",
    description:
      "One of Africa’s most celebrated wildlife reserves, famous for the Great Migration and Big Five safaris.",
    image: "/tanzania/serengeti-attraction.jpg",
  },
  {
    name: "Ngorongoro Crater",
    description:
      "A breathtaking volcanic caldera teeming with wildlife, offering some of the best game viewing in Africa.",
    image: "/tanzania/ngorongoro-attraction.jpg",
  },
  {
    name: "Mount Kilimanjaro",
    description:
      "Africa’s highest peak and a bucket-list trekking destination, with routes for all experience levels.",
    image: "/tanzania/kilimanjaro.jpg",
  },
  {
    name: "Zanzibar Beaches",
    description:
      "World-renowned for their powdery white sand, crystal-clear waters, and vibrant coral reefs.",
    image: "/tanzania/zanzibar-beach.jpg",
  },
  {
    name: "Stone Town",
    description:
      "A UNESCO World Heritage Site, Stone Town is a maze of narrow streets, historic buildings, and lively markets.",
    image: "/tanzania/stone-town.jpg",
  },
  {
    name: "Tarangire National Park",
    description:
      "Known for its large elephant herds, baobab trees, and classic African landscapes.",
    image: "/tanzania/tarangire.jpg",
  },
];

export default function TanzaniaPage() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/contact");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-yellow-100">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/70 to-yellow-700/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="flex items-center justify-center mb-4">
              <MapPin className="h-8 w-8 mr-3" />
              <span className="text-xl">Africa</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Tanzania</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
              Discover Tanzania’s legendary safaris, tropical islands, and the
              majestic Mount Kilimanjaro.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>4.9 Rating</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>Perfect for Safaris & Adventure</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Best in June–October & January–February</span>
              </div>
            </div>

            <Button
              onClick={handleClick}
              variant="secondary"
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 mt-6"
            >
              Book Tanzania Tour
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Top Cities & Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tanzaniaCities.map((city, idx) => (
              <motion.div
                key={city.name}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  {/* <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-48 object-cover"
                  /> */}
                  <CardHeader>
                    <CardTitle className="text-xl">{city.name}</CardTitle>
                    <p className="text-sm text-gray-500">{city.category}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2 text-gray-600">{city.description}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      {city.rating} • <Clock className="h-4 w-4 ml-2 mr-1" />
                      {city.duration}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {city.highlights.map((highlight, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-yellow-100 text-yellow-900"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Attractions Section */}
      <section className="py-16 bg-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Top Attractions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tanzaniaAttractions.map((attraction) => (
              <motion.div
                key={attraction.name}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  {/* <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-48 object-cover"
                  /> */}
                  <CardHeader>
                    <CardTitle className="text-xl">{attraction.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{attraction.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
