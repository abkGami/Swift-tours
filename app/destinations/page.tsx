"use client";

import { motion } from "framer-motion";
import { MapPin, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Link from "next/link";

// Mock data for every country you have a file for, grouped by continent
const destinations = [
  {
    region: "Europe",
    description:
      "Discover the rich history, stunning architecture, and diverse cultures of Europe",
    image: "/placeholder.svg?height=400&width=600",
    color: "from-blue-500 to-purple-600",
    destinations: [
      {
        name: "Paris, France",
        description: "Iconic landmarks like the Eiffel Tower and Louvre Museum",
        rating: 4.9,
        highlights: ["Eiffel Tower", "Louvre Museum", "Seine River Cruise"],
        href: "/destinations/europe/paris",
      },
      {
        name: "Prague, Czech Republic",
        description: "Medieval charm and stunning architecture",
        rating: 4.8,
        highlights: ["Charles Bridge", "Prague Castle", "Old Town Square"],
        href: "/destinations/europe/prague",
      },
      {
        name: "Lisbon, Portugal",
        description: "Colorful streets and scenic river views",
        rating: 4.7,
        highlights: ["Belém Tower", "Alfama District", "Tram 28"],
        href: "/destinations/europe/lisbon",
      },
      {
        name: "Barcelona, Spain",
        description: "Vibrant city with unique architecture and beaches",
        rating: 4.8,
        highlights: ["Sagrada Familia", "Park Güell", "La Rambla"],
        href: "/destinations/europe/barcelona",
      },
      {
        name: "Rome, Italy",
        description: "Ancient ruins and world-class cuisine",
        rating: 4.9,
        highlights: ["Colosseum", "Vatican City", "Trevi Fountain"],
        href: "/destinations/europe/rome",
      },
      {
        name: "Berlin, Germany",
        description: "Rich history and modern culture",
        rating: 4.7,
        highlights: ["Brandenburg Gate", "Berlin Wall", "Museum Island"],
        href: "/destinations/europe/berlin",
      },
      {
        name: "Dubrovnik, Croatia",
        description: "Stunning coastal city with medieval walls",
        rating: 4.8,
        highlights: ["City Walls", "Old Town", "Lokrum Island"],
        href: "/destinations/europe/dubrovnik",
      },
      {
        name: "Budapest, Hungary",
        description: "Thermal baths and grand architecture",
        rating: 4.7,
        highlights: ["Buda Castle", "Chain Bridge", "Thermal Baths"],
        href: "/destinations/europe/budapest",
      },
      {
        name: "Vienna, Austria",
        description: "Imperial palaces and classical music",
        rating: 4.8,
        highlights: [
          "Schönbrunn Palace",
          "St. Stephen's Cathedral",
          "Opera House",
        ],
        href: "/destinations/europe/vienna",
      },
    ],
  },
  {
    region: "Asia",
    description:
      "Experience the exotic beauty, ancient traditions, and modern marvels of Asia",
    image: "/placeholder.svg?height=400&width=600",
    color: "from-orange-500 to-red-600",
    destinations: [
      {
        name: "Tokyo, Japan",
        description: "Blend of futuristic tech and traditional temples",
        rating: 4.8,
        highlights: ["Shibuya Crossing", "Senso-ji Temple", "Mount Fuji"],
        href: "/destinations/asia/tokyo",
      },
      {
        name: "Bali, Indonesia",
        description: "Beaches, yoga retreats, and cultural ceremonies",
        rating: 4.7,
        highlights: ["Ubud Rice Terraces", "Beach Resorts", "Cultural Tours"],
        href: "/destinations/asia/bali",
      },
      {
        name: "Maldives",
        description: "Overwater bungalows and coral reefs",
        rating: 4.9,
        highlights: ["Overwater Villas", "Coral Reefs", "Spa Treatments"],
        href: "/destinations/asia/maldives",
      },
      {
        name: "Bhutan",
        description: "Remote Himalayan treks and Tiger's Nest Monastery",
        rating: 4.8,
        highlights: ["Tiger's Nest", "Himalayan Treks", "Buddhist Culture"],
        href: "/destinations/asia/bhutan",
      },
      {
        name: "Bangkok, Thailand",
        description: "Bustling city with vibrant street life and temples",
        rating: 4.7,
        highlights: ["Grand Palace", "Floating Markets", "Wat Arun"],
        href: "/destinations/asia/bangkok",
      },
      {
        name: "Seoul, South Korea",
        description: "Modern city with rich history and culture",
        rating: 4.8,
        highlights: ["Gyeongbokgung Palace", "Myeongdong", "N Seoul Tower"],
        href: "/destinations/asia/seoul",
      },
      {
        name: "Singapore",
        description: "Futuristic cityscape and multicultural cuisine",
        rating: 4.8,
        highlights: [
          "Marina Bay Sands",
          "Gardens by the Bay",
          "Sentosa Island",
        ],
        href: "/destinations/asia/singapore",
      },
      {
        name: "Istanbul, Turkey",
        description: "Where East meets West, rich in history",
        rating: 4.9,
        highlights: ["Hagia Sophia", "Blue Mosque", "Grand Bazaar"],
        href: "/destinations/asia/istanbul",
      },
      {
        name: "Dubai, UAE",
        description:
          "Luxury shopping, ultramodern architecture, and lively nightlife",
        rating: 4.8,
        highlights: ["Burj Khalifa", "Desert Safari", "Palm Jumeirah"],
        href: "/destinations/asia/dubai",
      },
    ],
  },
  {
    region: "Africa",
    description:
      "Embark on a journey through Africa's diverse landscapes and vibrant cultures",
    image: "/placeholder.svg?height=400&width=600",
    color: "from-green-600 to-yellow-500",
    destinations: [
      {
        name: "Marrakech, Morocco",
        description: "Exotic souks and stunning palaces",
        rating: 4.7,
        highlights: ["Jemaa el-Fnaa", "Majorelle Garden", "Koutoubia Mosque"],
        href: "/destinations/africa/marrakech",
      },
      {
        name: "Cape Town, South Africa",
        description: "Dramatic scenery and rich history",
        rating: 4.8,
        highlights: ["Table Mountain", "Robben Island", "V&A Waterfront"],
        href: "/destinations/africa/capetown",
      },
      {
        name: "Cairo, Egypt",
        description: "Ancient wonders and bustling bazaars",
        rating: 4.8,
        highlights: ["Pyramids of Giza", "Egyptian Museum", "Khan el-Khalili"],
        href: "/destinations/africa/cairo",
      },
      {
        name: "Zanzibar, Tanzania",
        description: "Pristine beaches and spice markets",
        rating: 4.7,
        highlights: ["Stone Town", "Nungwi Beach", "Spice Tours"],
        href: "/destinations/africa/zanzibar",
      },
    ],
  },
  {
    region: "South America",
    description:
      "Vibrant cities, natural wonders, and ancient civilizations await in South America",
    image: "/placeholder.svg?height=400&width=600",
    color: "from-yellow-500 to-red-600",
    destinations: [
      {
        name: "Rio de Janeiro, Brazil",
        description: "Famous beaches and lively festivals",
        rating: 4.9,
        highlights: [
          "Christ the Redeemer",
          "Copacabana Beach",
          "Sugarloaf Mountain",
        ],
        href: "/destinations/south-america/rio",
      },
      {
        name: "Buenos Aires, Argentina",
        description: "Tango, steak, and European-style boulevards",
        rating: 4.8,
        highlights: ["La Boca", "Recoleta", "Teatro Colón"],
        href: "/destinations/south-america/buenosaires",
      },
      {
        name: "Cusco, Peru",
        description: "Gateway to Machu Picchu and Incan history",
        rating: 4.9,
        highlights: ["Machu Picchu", "Sacsayhuamán", "Sacred Valley"],
        href: "/destinations/south-america/cusco",
      },
      {
        name: "Cartagena, Colombia",
        description: "Colorful colonial city on the Caribbean coast",
        rating: 4.7,
        highlights: ["Old Town", "Castillo San Felipe", "Rosario Islands"],
        href: "/destinations/south-america/cartagena",
      },
    ],
  },
];

// --- RENDERING CODE ---

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Amazing Destinations
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Explore breathtaking destinations across the world with our
              curated travel experiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Destinations Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {destinations.map((region) => (
            <div key={region.region} className="mb-20">
              {/* Region Header */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <div className="flex items-center mb-6">
                  <MapPin className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-4xl font-bold text-gray-900">
                    {region.region}
                  </h2>
                </div>
                <p className="text-xl text-gray-600 mb-8">
                  {region.description}
                </p>
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <img
                    src={region.image || "/placeholder.svg"}
                    alt={region.region}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${region.color} opacity-60`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-3xl font-bold text-white">
                      Explore {region.region}
                    </h3>
                  </div>
                </div>
              </motion.div>

              {/* Destinations Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {region.destinations.map((destination, index) => (
                  <motion.div
                    key={destination.name}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                  >
                    <Link href={destination.href}>
                      <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg cursor-pointer">
                        <CardHeader>
                          <CardTitle className="text-lg">
                            {destination.name}
                          </CardTitle>
                          <div className="flex items-center text-sm text-gray-600">
                            <Star className="h-4 w-4 text-yellow-400 mr-1" />
                            {destination.rating}
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 mb-4">
                            {destination.description}
                          </p>
                          <div className="flex flex-wrap gap-1 mb-4">
                            {destination.highlights.map((highlight) => (
                              <Badge
                                key={highlight}
                                variant="secondary"
                                className="text-xs"
                              >
                                {highlight}
                              </Badge>
                            ))}
                          </div>
                          <Button className="w-full bg-blue-600 hover:bg-blue-700">
                            Explore Destination
                          </Button>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
