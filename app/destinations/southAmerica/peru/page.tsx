"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Clock, Camera, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

const peruCities = [
  {
    name: "Lima",
    description:
      "Peru's vibrant capital, known for its colonial architecture, world-class cuisine, and Pacific coastline.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    duration: "2-3 days",
    category: "Capital City",
    highlights: [
      "Plaza Mayor",
      "Larco Museum",
      "Miraflores Boardwalk",
      "Barranco District",
    ],
  },
  {
    name: "Cusco",
    description:
      "The historic capital of the Inca Empire, gateway to Machu Picchu and the Sacred Valley.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    duration: "3-4 days",
    category: "Inca Heritage",
    highlights: [
      "Sacsayhuamán",
      "Plaza de Armas",
      "Qorikancha",
      "San Pedro Market",
    ],
  },
  {
    name: "Arequipa",
    description:
      "Known as the 'White City', Arequipa boasts stunning volcanic scenery and colonial-era buildings.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    duration: "2-3 days",
    category: "Colonial Charm",
    highlights: [
      "Santa Catalina Monastery",
      "Plaza de Armas",
      "Misti Volcano",
      "Yanahuara District",
    ],
  },
  {
    name: "Puno",
    description:
      "A lakeside city on the shores of Lake Titicaca, famous for its floating Uros Islands.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.5,
    duration: "1-2 days",
    category: "Lake Titicaca",
    highlights: [
      "Uros Floating Islands",
      "Taquile Island",
      "Puno Cathedral",
      "Sillustani Tombs",
    ],
  },
  {
    name: "Iquitos",
    description:
      "The gateway to the northern Amazon, accessible only by boat or plane, offering unique jungle adventures.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    duration: "2-3 days",
    category: "Amazon Adventure",
    highlights: [
      "Amazon River Tours",
      "Belén Market",
      "Pacaya Samiria Reserve",
      "Manatee Rescue Center",
    ],
  },
  {
    name: "Trujillo",
    description:
      "A northern coastal city rich in pre-Columbian history and colonial architecture.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.5,
    duration: "1-2 days",
    category: "Historic City",
    highlights: [
      "Chan Chan Ruins",
      "Huaca de la Luna",
      "Plaza de Armas",
      "Huanchaco Beach",
    ],
  },
];

const peruAttractions = [
  {
    name: "Machu Picchu",
    description:
      "The legendary Inca citadel set high in the Andes, one of the New Seven Wonders of the World.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Sacred Valley",
    description:
      "A breathtaking valley filled with Inca ruins, traditional villages, and stunning landscapes.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Lake Titicaca",
    description:
      "The world's highest navigable lake, home to unique floating islands and vibrant Andean culture.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Colca Canyon",
    description:
      "One of the world's deepest canyons, famous for its dramatic scenery and soaring condors.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Nazca Lines",
    description:
      "Mysterious ancient geoglyphs etched into the desert, best seen from the air.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Amazon Rainforest",
    description:
      "Explore the Peruvian Amazon for incredible biodiversity, river cruises, and jungle lodges.",
    image: "/placeholder.svg?height=300&width=400",
  },
];

export default function PeruPage() {
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
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/70 to-green-900/70" />
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Peru</h1>
            <p className="text-xl text-yellow-100 max-w-3xl mx-auto mb-8">
              Journey through ancient Inca wonders, vibrant cities, and
              breathtaking landscapes in Peru.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>4.8 Rating</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>Perfect for History & Adventure</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Best: May–September</span>
              </div>
            </div>

            <Button
              onClick={handleClick}
              variant="secondary"
              size="lg"
              className="bg-white mt-6 text-yellow-700 hover:bg-gray-100"
            >
              Book Peru Tour
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
              Top Cities in Peru
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore Peru's rich history, diverse landscapes, and vibrant
              culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {peruCities.map((city, index) => (
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
            <div className="bg-gradient-to-r from-yellow-700 to-green-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Explore Peru?
              </h3>
              <p className="text-yellow-100 mb-6 max-w-2xl mx-auto">
                Discover the wonders of Peru with our expert guides and custom
                itineraries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-yellow-700 hover:bg-gray-100"
                >
                  Book Peru Tour
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
              Top Attractions in Peru
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {peruAttractions.map((attraction, index) => (
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
            <div className="bg-gradient-to-r from-yellow-700 to-green-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Explore Peru?
              </h3>
              <p className="text-yellow-100 mb-6 max-w-2xl mx-auto">
                Experience the best of Peru with our expert guides and custom
                itineraries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-yellow-700 hover:bg-gray-100"
                >
                  Book Peru Tour
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
