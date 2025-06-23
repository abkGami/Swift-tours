"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Clock, Camera, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

const boliviaCities = [
  {
    name: "La Paz",
    description:
      "The world's highest administrative capital, set in a dramatic canyon and known for its vibrant markets and cable cars.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    duration: "3-4 days",
    category: "High-Altitude Capital",
    highlights: [
      "Witches' Market",
      "Valle de la Luna",
      "Mi Teleférico",
      "Plaza Murillo",
    ],
  },
  {
    name: "Sucre",
    description:
      "Bolivia's constitutional capital, a UNESCO-listed city with whitewashed colonial buildings and rich history.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    duration: "2-3 days",
    category: "Colonial Gem",
    highlights: [
      "Plaza 25 de Mayo",
      "La Recoleta",
      "Casa de la Libertad",
      "Tarabuco Market",
    ],
  },
  {
    name: "Uyuni",
    description:
      "Gateway to the surreal Salar de Uyuni salt flats, with unique landscapes and adventure tours.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    duration: "2-3 days",
    category: "Salt Flats",
    highlights: [
      "Salar de Uyuni",
      "Train Cemetery",
      "Incahuasi Island",
      "Salt Hotels",
    ],
  },
  {
    name: "Potosí",
    description:
      "A historic mining city at the foot of Cerro Rico, once one of the richest cities in the world.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    duration: "1-2 days",
    category: "Historic Mining City",
    highlights: [
      "Cerro Rico Mines",
      "Casa Nacional de la Moneda",
      "San Francisco Church",
      "Colonial Streets",
    ],
  },
  {
    name: "Cochabamba",
    description:
      "Known as the 'City of Eternal Spring', Cochabamba offers pleasant weather, lively plazas, and a culinary scene.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.5,
    duration: "1-2 days",
    category: "Spring City",
    highlights: [
      "Cristo de la Concordia",
      "La Cancha Market",
      "Palacio Portales",
      "Tunari National Park",
    ],
  },
  {
    name: "Santa Cruz de la Sierra",
    description:
      "Bolivia's largest city, a tropical metropolis with modern amenities and access to Amazonian adventures.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    duration: "2-3 days",
    category: "Tropical City",
    highlights: [
      "Plaza 24 de Septiembre",
      "Biocentro Güembé",
      "Lomas de Arena",
      "Jesuit Missions",
    ],
  },
];

const boliviaAttractions = [
  {
    name: "Salar de Uyuni",
    description:
      "The world's largest salt flat, a surreal landscape of endless white and mirror-like reflections during the rainy season.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Lake Titicaca",
    description:
      "The highest navigable lake in the world, shared with Peru, home to Isla del Sol and traditional communities.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Eduardo Avaroa National Park",
    description:
      "A stunning reserve with colorful lagoons, geysers, hot springs, and flamingos in southwest Bolivia.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Tiwanaku",
    description:
      "An ancient archaeological site and UNESCO World Heritage, showcasing the ruins of a pre-Inca civilization.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Madidi National Park",
    description:
      "One of the most biodiverse places on Earth, offering Amazon rainforest adventures and wildlife watching.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Jesuit Missions of Chiquitos",
    description:
      "Beautifully preserved mission towns with unique baroque architecture and vibrant cultural festivals.",
    image: "/placeholder.svg?height=300&width=400",
  },
];

export default function BoliviaPage() {
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
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-yellow-900/70" />
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Bolivia</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Discover Bolivia's breathtaking landscapes, vibrant cultures, and
              high-altitude wonders.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>4.8 Rating</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>Perfect for Adventure & Culture</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Best: May–October</span>
              </div>
            </div>

            <Button
              onClick={handleClick}
              variant="secondary"
              size="lg"
              className="bg-white mt-6 text-blue-700 hover:bg-gray-100"
            >
              Book Bolivia Tour
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
              Top Cities in Bolivia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore Bolivia's unique cities, from high-altitude capitals to
              colonial gems and salt flat gateways.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boliviaCities.map((city, index) => (
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
            <div className="bg-gradient-to-r from-blue-600 to-yellow-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Explore Bolivia?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Discover the best of Bolivia with our expert guides and custom
                itineraries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-gray-100"
                >
                  Book Bolivia Tour
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
              Top Attractions in Bolivia
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {boliviaAttractions.map((attraction, index) => (
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
            <div className="bg-gradient-to-r from-blue-600 to-yellow-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Explore Bolivia?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Experience the wonders of Bolivia with our expert guides and
                custom itineraries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-gray-100"
                >
                  Book Bolivia Tour
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
