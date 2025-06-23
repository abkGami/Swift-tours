"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Clock, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

const moroccoCities = [
  {
    name: "Marrakech",
    description:
      "A vibrant city known for its souks, palaces, and gardens, blending ancient traditions with modern flair.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    duration: "2-3 days",
    category: "Cultural Hub",
    highlights: [
      "jemaa el-fnaa",
      "majorelle garden",
      "bahia palace",
      "saadian tombs",
    ],
  },
  {
    name: "Fes",
    description:
      "The spiritual and cultural heart of Morocco, home to one of the world’s oldest universities and a bustling medina.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    duration: "2-3 days",
    category: "Historic Medina",
    highlights: [
      "fes el bali",
      "al quaraouiyine",
      "tanneries",
      "medersa bou inania",
    ],
  },
  {
    name: "Chefchaouen",
    description:
      "A picturesque blue-painted town nestled in the Rif Mountains, perfect for tranquil exploration.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    duration: "1-2 days",
    category: "Mountain Escape",
    highlights: ["blue streets", "kasbah museum", "ras el ma", "local crafts"],
  },
  {
    name: "Casablanca",
    description:
      "Morocco’s largest city, known for modern business, historic art deco architecture, and oceanfront charm.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.5,
    duration: "1-2 days",
    category: "Urban Port",
    highlights: ["hassan ii mosque", "corniche", "old medina", "rick's cafe"],
  },
  {
    name: "Essaouira",
    description:
      "A coastal town with bohemian vibes, fortified walls, surfing, and fresh seafood.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    duration: "1-2 days",
    category: "Seaside Haven",
    highlights: ["medina walls", "essaouira beach", "port", "art galleries"],
  },
  {
    name: "Merzouga",
    description:
      "Gateway to the Sahara Desert, famous for camel treks, sand dunes, and starlit camps.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    duration: "2 days",
    category: "Desert Adventure",
    highlights: [
      "erg chebbi dunes",
      "camel ride",
      "berber camps",
      "sunrise safari",
    ],
  },
];

const moroccoAttractions = [
  {
    name: "Jemaa el-Fnaa",
    description:
      "The bustling main square of Marrakech, alive with food stalls, performers, and local culture.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Hassan II Mosque",
    description:
      "An architectural marvel in Casablanca, one of the largest mosques in the world.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Majorelle Garden",
    description:
      "A lush botanical garden in Marrakech designed by Jacques Majorelle and owned by Yves Saint Laurent.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Erg Chebbi Dunes",
    description:
      "Towering dunes in the Sahara Desert, offering camel treks and magical sunsets.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Fes El Bali",
    description:
      "The ancient walled medina of Fes, a maze of souks, artisan workshops, and historic schools.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Aït Benhaddou",
    description:
      "A UNESCO-listed kasbah village featured in many films, nestled on the caravan route to the Sahara.",
    image: "/placeholder.svg?height=300&width=400",
  },
];

export default function MoroccoPage() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/contact");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/70 to-orange-700/70" />
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Morocco</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
              A colorful mosaic of culture, deserts, mountains, and oceanfronts.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>4.9 Rating</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>Perfect for Culture & Adventure</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Best in Spring & Fall</span>
              </div>
            </div>

            <Button
              onClick={handleClick}
              variant="secondary"
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 mt-6"
            >
              Book Morocco Tour
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Top Cities to Visit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {moroccoCities.map((city, idx) => (
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
                          className="bg-orange-100 text-orange-900"
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
      <section className="py-16 bg-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Top Attractions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {moroccoAttractions.map((attraction) => (
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
