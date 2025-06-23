"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Clock, Camera, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

const chileCities = [
  {
    name: "Santiago",
    description:
      "Chile's dynamic capital, nestled between the Andes and the coast, known for its vibrant culture and modern skyline.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    duration: "3-4 days",
    category: "Capital City",
    highlights: [
      "Plaza de Armas",
      "Cerro San Cristóbal",
      "Bellavista District",
      "La Moneda Palace",
    ],
  },
  {
    name: "Valparaíso",
    description:
      "A colorful port city famous for its steep funiculars, street art, and bohemian spirit.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    duration: "2-3 days",
    category: "Coastal City",
    highlights: [
      "Cerro Alegre",
      "Ascensores",
      "Museo a Cielo Abierto",
      "Pablo Neruda's House",
    ],
  },
  {
    name: "San Pedro de Atacama",
    description:
      "Gateway to the Atacama Desert, offering surreal landscapes, salt flats, geysers, and starry skies.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    duration: "3-4 days",
    category: "Desert Adventure",
    highlights: [
      "Valle de la Luna",
      "El Tatio Geysers",
      "Laguna Cejar",
      "Stargazing Tours",
    ],
  },
  {
    name: "Puerto Varas",
    description:
      "A charming lakeside town with German heritage, stunning volcano views, and outdoor activities.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    duration: "2-3 days",
    category: "Lakes & Volcanoes",
    highlights: [
      "Lake Llanquihue",
      "Osorno Volcano",
      "Petrohué Falls",
      "German Architecture",
    ],
  },
  {
    name: "Punta Arenas",
    description:
      "The southern gateway to Patagonia, known for its history, penguins, and access to wild landscapes.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.5,
    duration: "2-3 days",
    category: "Patagonia",
    highlights: [
      "Magdalena Island Penguins",
      "Plaza Muñoz Gamero",
      "Nao Victoria Museum",
      "Strait of Magellan",
    ],
  },
  {
    name: "Easter Island (Rapa Nui)",
    description:
      "A remote island famous for its mysterious moai statues, Polynesian culture, and volcanic scenery.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    duration: "3-4 days",
    category: "World Wonder",
    highlights: [
      "Moai Statues",
      "Rano Raraku Quarry",
      "Anakena Beach",
      "Orongo Ceremonial Village",
    ],
  },
];

const chileAttractions = [
  {
    name: "Torres del Paine National Park",
    description:
      "A breathtaking Patagonian park with granite towers, turquoise lakes, glaciers, and world-class trekking.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Valle de la Luna",
    description:
      "A surreal, moon-like landscape in the Atacama Desert, perfect for sunset tours and photography.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Lauca National Park",
    description:
      "A high-altitude park in northern Chile, home to volcanoes, lagoons, and diverse wildlife.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Chiloé Island",
    description:
      "Known for its wooden churches, stilt houses, and unique mythology, Chiloé offers a magical experience.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Magdalena Island",
    description:
      "A sanctuary for thousands of Magellanic penguins, accessible by boat from Punta Arenas.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Rapa Nui National Park",
    description:
      "A UNESCO World Heritage Site on Easter Island, home to the iconic moai statues.",
    image: "/placeholder.svg?height=300&width=400",
  },
];

export default function ChilePage() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/contact");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-10 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-sky-900/70" />
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
              <span className="text-xl">South America</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Chile</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              From the driest desert to Patagonian glaciers, Chile is a land of
              extremes and adventure.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>4.8 Rating</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>Perfect for Adventure & Nature</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Best: Spring & Summer</span>
              </div>
            </div>

            <Button
              onClick={handleClick}
              variant="secondary"
              size="lg"
              className="bg-white mt-6 text-blue-700 hover:bg-gray-100"
            >
              Book Chile Tour
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Top Cities in Chile
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover Chile's vibrant cities, breathtaking landscapes, and
              unique culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chileCities.map((city, index) => (
              <motion.div
                key={city.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg">
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <Badge className="absolute top-3 right-3 bg-blue-600 text-white">
                      {city.category}
                    </Badge>
                    <div className="absolute bottom-3 left-3 text-white">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400" />
                        <span className="text-sm font-medium">
                          {city.rating}
                        </span>
                      </div>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">
                      {city.name}
                    </CardTitle>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">{city.duration}</span>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-600 mb-4">{city.description}</p>

                    <div className="space-y-2 mb-6">
                      <h4 className="font-semibold text-gray-900 flex items-center">
                        <Camera className="h-4 w-4 mr-2 text-blue-600" />
                        Highlights
                      </h4>
                      <div className="grid grid-cols-1 gap-1">
                        {city.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="text-sm text-gray-600 flex items-center"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-blue-600 to-sky-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Explore Chile?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Embark on an unforgettable journey through Chile's diverse
                wonders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-gray-100"
                >
                  Book Chile Tour
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Attractions Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-9 mt-14"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Top Attractions in Chile
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {chileAttractions.map((attraction, index) => (
              <motion.div
                key={attraction.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/90">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-900 first-letter:uppercase">
                      {attraction.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-800 mb-2">
                      {attraction.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-blue-600 to-sky-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Explore Chile?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Discover the best of Chile with our expert guides and custom
                itineraries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-gray-100"
                >
                  Book Chile Tour
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
