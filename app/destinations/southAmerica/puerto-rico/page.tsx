"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Clock, Camera, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

const puertoRicoCities = [
  {
    name: "San Juan",
    description:
      "The vibrant capital with colorful colonial architecture, historic forts, and lively nightlife in Old San Juan.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    duration: "3-4 days",
    category: "Historic Capital",
    highlights: [
      "El Morro Fortress",
      "Old San Juan",
      "Condado Beach",
      "Casa Blanca",
    ],
  },
  {
    name: "Ponce",
    description:
      "The 'Pearl of the South' known for its neoclassical architecture, museums, and cultural heritage.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    duration: "2-3 days",
    category: "Cultural Hub",
    highlights: [
      "Ponce Museum of Art",
      "Parque de Bombas",
      "Serrallés Castle",
      "La Guancha Boardwalk",
    ],
  },
  {
    name: "Culebra",
    description:
      "A pristine island paradise with some of the world's most beautiful beaches and crystal-clear waters.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    duration: "2-3 days",
    category: "Island Paradise",
    highlights: [
      "Flamenco Beach",
      "Tamarindo Beach",
      "Snorkeling",
      "Culebrita Island",
    ],
  },
  {
    name: "Vieques",
    description:
      "Famous for its bioluminescent bay, wild horses, and secluded beaches perfect for relaxation.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    duration: "2-3 days",
    category: "Natural Wonder",
    highlights: [
      "Mosquito Bay",
      "Sun Bay Beach",
      "Wild Horses",
      "Esperanza Village",
    ],
  },
  {
    name: "Rincón",
    description:
      "A surfer's paradise on the west coast, known for world-class waves and stunning sunsets.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    duration: "2-3 days",
    category: "Surf & Beach",
    highlights: [
      "Domes Beach",
      "Lighthouse Park",
      "Whale Watching",
      "Sandy Beach",
    ],
  },
  {
    name: "El Yunque",
    description:
      "The only tropical rainforest in the US National Forest System, with waterfalls and hiking trails.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    duration: "1-2 days",
    category: "Rainforest",
    highlights: [
      "La Mina Falls",
      "El Yunque Peak",
      "Yokahú Tower",
      "Baño Grande",
    ],
  },
];

const puertoRicoAttractions = [
  {
    name: "El Morro Fortress",
    description:
      "A 16th-century Spanish fortress overlooking San Juan Bay, offering stunning views and rich history.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Mosquito Bay",
    description:
      "The brightest bioluminescent bay in the world, where microscopic organisms create magical blue light.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Flamenco Beach",
    description:
      "Consistently ranked among the world's best beaches, with pristine white sand and turquoise waters.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Camuy Caves",
    description:
      "One of the world's largest cave systems, featuring underground rivers and impressive limestone formations.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Old San Juan",
    description:
      "A UNESCO World Heritage site with colorful colonial buildings, cobblestone streets, and historic charm.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Arecibo Observatory",
    description:
      "Former world's largest radio telescope, featured in movies and crucial for astronomical research.",
    image: "/placeholder.svg?height=300&width=400",
  },
];

export default function PuertoRicoPage() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/contact");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-10 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/placeholder.svg?height=300&width=400"
            alt="Puerto Rico"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/70 to-blue-900/70" />
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Puerto Rico</h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto mb-8">
              Discover the enchanting island of Puerto Rico, where tropical paradise meets rich culture and history.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>4.9 Rating</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>Perfect for Beach & Culture</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Best: Year-Round</span>
              </div>
            </div>

            <Button
              onClick={handleClick}
              variant="secondary"
              size="lg"
              className="bg-white mt-6 text-emerald-700 hover:bg-gray-100"
            >
              Book Puerto Rico Tour
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
              Top Destinations in Puerto Rico
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the diverse beauty of Puerto Rico, from historic cities to pristine beaches and lush rainforests.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {puertoRicoCities.map((city, index) => (
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
                    <Badge className="absolute top-3 right-3 bg-emerald-600 text-white">
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
                        <Camera className="h-4 w-4 mr-2 text-emerald-600" />
                        Highlights
                      </h4>
                      <div className="grid grid-cols-1 gap-1">
                        {city.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="text-sm text-gray-600 flex items-center"
                          >
                            <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-2" />
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
            <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Explore Puerto Rico?
              </h3>
              <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                Experience the magic of the Caribbean with our expertly crafted Puerto Rico adventures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-emerald-700 hover:bg-gray-100"
                >
                  Book Puerto Rico Tour
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
              Top Attractions in Puerto Rico
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {puertoRicoAttractions.map((attraction, index) => (
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
                    <CardTitle className="text-xl text-emerald-900 first-letter:uppercase">
                      {attraction.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-emerald-800 mb-2">
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
            <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Explore Puerto Rico?
              </h3>
              <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                Discover the best of Puerto Rico with our expert guides and custom Caribbean itineraries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-emerald-700 hover:bg-gray-100"
                >
                  Book Puerto Rico Tour
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
