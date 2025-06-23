"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Clock, Camera, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

const venezuelaCities = [
  {
    name: "Caracas",
    description:
      "Venezuela's bustling capital, set in a valley beneath Avila Mountain, known for its culture, cuisine, and city parks.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    duration: "2-3 days",
    category: "Capital City",
    highlights: [
      "Avila National Park",
      "Plaza Bolívar",
      "Museo de Arte Contemporáneo",
      "El Hatillo",
    ],
  },
  {
    name: "Mérida",
    description:
      "A charming Andean city famous for its cable car, cool climate, and adventure sports.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    duration: "2-3 days",
    category: "Andean City",
    highlights: [
      "Mukumbarí Cable Car",
      "Sierra Nevada National Park",
      "Plaza Las Heroinas",
      "Ice Cream Museum",
    ],
  },
  {
    name: "Coro",
    description:
      "A UNESCO-listed colonial city with colorful adobe houses and nearby sand dunes.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    duration: "1-2 days",
    category: "Colonial Gem",
    highlights: [
      "Historic Center",
      "Medanos de Coro",
      "Cathedral of Coro",
      "Casa de las Ventanas de Hierro",
    ],
  },
  {
    name: "Ciudad Bolívar",
    description:
      "A historic city on the Orinoco River, gateway to Canaima National Park and Angel Falls.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.5,
    duration: "1-2 days",
    category: "Gateway to Angel Falls",
    highlights: [
      "Orinoco River Promenade",
      "Angostura Bridge",
      "Jesús Soto Museum",
      "Plaza Bolívar",
    ],
  },
  {
    name: "Maracaibo",
    description:
      "A lively city on Lake Maracaibo, known for its oil history, bridges, and vibrant culture.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.4,
    duration: "1-2 days",
    category: "Lake City",
    highlights: [
      "Basilica de la Chinita",
      "General Rafael Urdaneta Bridge",
      "Vereda del Lago",
      "Plaza Baralt",
    ],
  },
  {
    name: "Porlamar (Margarita Island)",
    description:
      "The main city on Margarita Island, famous for its beaches, shopping, and lively atmosphere.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.5,
    duration: "2-3 days",
    category: "Island City",
    highlights: [
      "Playa El Agua",
      "Castillo San Carlos de Borromeo",
      "La Restinga Lagoon",
      "Pampatar",
    ],
  },
];

const venezuelaAttractions = [
  {
    name: "Angel Falls",
    description:
      "The world's highest uninterrupted waterfall, located in Canaima National Park.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Los Roques Archipelago",
    description:
      "A Caribbean paradise of turquoise waters, coral reefs, and white-sand beaches.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Morrocoy National Park",
    description:
      "A coastal park with cays, coral reefs, and mangroves, perfect for snorkeling and birdwatching.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Roraima Tepui",
    description:
      "An epic table-top mountain on the border with Brazil and Guyana, ideal for trekking and adventure.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Médanos de Coro",
    description:
      "Vast sand dunes near Coro, offering a unique desert landscape in Venezuela.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Margarita Island",
    description:
      "A popular Caribbean island getaway with lively beaches, resorts, and water sports.",
    image: "/placeholder.svg?height=300&width=400",
  },
];

export default function VenezuelaPage() {
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
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/70 to-blue-900/70" />
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Venezuela</h1>
            <p className="text-xl text-yellow-100 max-w-3xl mx-auto mb-8">
              Discover Venezuela's breathtaking natural wonders, vibrant cities,
              and Caribbean coastline—from Angel Falls to Los Roques.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>4.7 Rating</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>Perfect for Nature & Adventure</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Best: December–April</span>
              </div>
            </div>

            <Button
              onClick={handleClick}
              variant="secondary"
              size="lg"
              className="bg-white mt-6 text-yellow-700 hover:bg-gray-100"
            >
              Book Venezuela Tour
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
              Top Cities in Venezuela
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore Venezuela's vibrant cities, colonial gems, and island
              escapes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {venezuelaCities.map((city, index) => (
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
                    <Badge className="absolute top-3 right-3 bg-yellow-700 text-white">
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
                        <Camera className="h-4 w-4 mr-2 text-yellow-700" />
                        Highlights
                      </h4>
                      <div className="grid grid-cols-1 gap-1">
                        {city.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="text-sm text-gray-600 flex items-center"
                          >
                            <div className="w-1.5 h-1.5 bg-yellow-700 rounded-full mr-2" />
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
            <div className="bg-gradient-to-r from-yellow-700 to-blue-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Explore Venezuela?
              </h3>
              <p className="text-yellow-100 mb-6 max-w-2xl mx-auto">
                Discover the best of Venezuela with our expert guides and custom
                itineraries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-yellow-700 hover:bg-gray-100"
                >
                  Book Venezuela Tour
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
              Top Attractions in Venezuela
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {venezuelaAttractions.map((attraction, index) => (
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
            <div className="bg-gradient-to-r from-yellow-700 to-blue-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Explore Venezuela?
              </h3>
              <p className="text-yellow-100 mb-6 max-w-2xl mx-auto">
                Experience the wonders of Venezuela with our expert guides and
                custom itineraries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-yellow-700 hover:bg-gray-100"
                >
                  Book Venezuela Tour
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
