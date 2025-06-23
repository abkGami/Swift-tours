"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Clock, Camera, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

const egyptCities = [
  {
    name: "Cairo",
    description:
      "Egypt's bustling capital, home to ancient wonders like the Pyramids of Giza and a vibrant modern culture.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    duration: "3-4 days",
    category: "Historical Metropolis",
    highlights: [
      "pyramids of giza",
      "egyptian museum",
      "khan el-khalili bazaar",
      "cairo tower",
    ],
  },
  {
    name: "Luxor",
    description:
      "Often referred to as the world's greatest open-air museum, Luxor is filled with ancient temples and royal tombs.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    duration: "2-3 days",
    category: "Ancient City",
    highlights: [
      "karnak temple",
      "valley of the kings",
      "luxor temple",
      "hatshepsut temple",
    ],
  },
  {
    name: "Aswan",
    description:
      "A serene city on the Nile known for its beautiful islands, Nubian culture, and the majestic Philae Temple.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    duration: "1-2 days",
    category: "Nile Getaway",
    highlights: [
      "philae temple",
      "nubian village",
      "aswan high dam",
      "elephantine island",
    ],
  },
  {
    name: "Alexandria",
    description:
      "A Mediterranean city rich in Greco-Roman history, beautiful coastline, and cosmopolitan atmosphere.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    duration: "2-3 days",
    category: "Coastal Heritage",
    highlights: [
      "citadel of qaitbay",
      "alexandria library",
      "roman amphitheater",
      "montaza palace",
    ],
  },
  {
    name: "Sharm El Sheikh",
    description:
      "A resort town on the Red Sea famed for its diving spots, coral reefs, and luxurious beaches.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.5,
    duration: "3-4 days",
    category: "Beach Paradise",
    highlights: [
      "ras mohamed park",
      "naama bay",
      "soho square",
      "diving in red sea",
    ],
  },
  {
    name: "Siwa Oasis",
    description:
      "A remote and mystical desert oasis with Berber culture, salt lakes, and ancient ruins.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    duration: "2 days",
    category: "Desert Retreat",
    highlights: [
      "temple of the oracle",
      "cleopatra spring",
      "salt lakes",
      "shali fortress",
    ],
  },
];

const egyptAttractions = [
  {
    name: "Pyramids of Giza",
    description:
      "The last surviving wonder of the ancient world, a majestic and awe-inspiring testament to Egypt's ancient civilization.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Valley of the Kings",
    description:
      "A burial ground for pharaohs, filled with richly decorated tombs including that of Tutankhamun.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Abu Simbel Temples",
    description:
      "Massive rock temples built by Ramses II, relocated to save them from the rising waters of Lake Nasser.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Nile River Cruise",
    description:
      "A scenic and relaxing way to experience ancient Egypt, sailing between Luxor and Aswan.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "White Desert",
    description:
      "A surreal landscape of chalk rock formations shaped by wind and sand, perfect for adventure and stargazing.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Cairo Citadel",
    description:
      "A historic fortress offering panoramic views of Cairo, home to mosques, museums, and rich Islamic architecture.",
    image: "/placeholder.svg?height=300&width=400",
  },
];

export default function EgyptPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Egypt</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
              Discover Egypt's ancient treasures, timeless deserts, and vibrant
              Nile culture.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>4.9 Rating</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>Perfect for History & Adventure</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Best in Winter & Spring</span>
              </div>
            </div>

            <Button
              onClick={handleClick}
              variant="secondary"
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 mt-6"
            >
              Book Egypt Tour
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Top Cities to Visit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {egyptCities.map((city, idx) => (
              <motion.div
                key={city.name}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-48 object-cover"
                  />
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
            {egyptAttractions.map((attraction) => (
              <motion.div
                key={attraction.name}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-48 object-cover"
                  />
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
