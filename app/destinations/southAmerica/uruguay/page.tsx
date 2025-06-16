"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Clock, Camera, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

const uruguayCities = [
  {
    name: "Montevideo",
    description:
      "Uruguay's laid-back capital, known for its riverside rambla, historic Ciudad Vieja, and vibrant cultural scene.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    duration: "2-3 days",
    category: "Capital City",
    highlights: [
      "Ciudad Vieja",
      "Rambla of Montevideo",
      "Mercado del Puerto",
      "Plaza Independencia",
    ],
  },
  {
    name: "Punta del Este",
    description:
      "A glamorous beach resort city famous for its golden sands, nightlife, and iconic La Mano sculpture.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    duration: "2-3 days",
    category: "Beach Resort",
    highlights: [
      "Playa Brava",
      "La Mano",
      "Casapueblo",
      "Puerto de Punta del Este",
    ],
  },
  {
    name: "Colonia del Sacramento",
    description:
      "A charming UNESCO-listed town with cobblestone streets, colonial architecture, and riverside sunsets.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    duration: "1-2 days",
    category: "Historic Town",
    highlights: [
      "Barrio Histórico",
      "Lighthouse & Plaza Mayor",
      "Basilica del Santísimo Sacramento",
      "Portón de Campo",
    ],
  },
  {
    name: "Carmelo",
    description:
      "A tranquil riverside town known for its wineries, beaches, and relaxed pace.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.5,
    duration: "1-2 days",
    category: "Wine Country",
    highlights: [
      "Carmelo Bridge",
      "Bodega Cordano",
      "Playa Seré",
      "Puerto de Yates",
    ],
  },
  {
    name: "Piriápolis",
    description:
      "A classic seaside town with beautiful beaches, hills, and art nouveau architecture.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.4,
    duration: "1-2 days",
    category: "Seaside Town",
    highlights: [
      "Cerro San Antonio",
      "Rambla de los Argentinos",
      "Castillo de Piria",
      "Playa Piriápolis",
    ],
  },
  {
    name: "La Paloma",
    description:
      "A relaxed Atlantic coastal town, popular for surfing, nature, and stunning sunsets.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    duration: "1-2 days",
    category: "Surf & Nature",
    highlights: [
      "Playa La Balconada",
      "Faro de La Paloma",
      "Laguna de Rocha",
      "Surfing Beaches",
    ],
  },
];

const uruguayAttractions = [
  {
    name: "Barrio Histórico (Colonia)",
    description:
      "A UNESCO World Heritage site with cobbled streets, colonial buildings, and riverside views.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "La Mano de Punta del Este",
    description:
      "The iconic hand sculpture emerging from the sand, a symbol of Uruguay's beach culture.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Mercado del Puerto",
    description:
      "Montevideo's famous port market, perfect for sampling Uruguayan barbecue and local flavors.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Casapueblo",
    description:
      "A unique cliffside building and art gallery created by artist Carlos Páez Vilaró, offering stunning sunsets.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Cabo Polonio",
    description:
      "A remote coastal village in a national park, known for its dunes, sea lions, and starry skies.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Rambla of Montevideo",
    description:
      "A scenic waterfront promenade stretching for miles along the Río de la Plata.",
    image: "/placeholder.svg?height=300&width=400",
  },
];

export default function UruguayPage() {
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
          <img
            src="/placeholder.svg?height=600&width=1200"
            alt="Uruguay"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-green-900/70" />
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Uruguay</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Discover Uruguay's charming towns, golden beaches, and relaxed lifestyle along the Atlantic coast.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>4.7 Rating</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>Perfect for Relaxation & Culture</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Best: December–March</span>
              </div>
            </div>

            <Button
              onClick={handleClick}
              variant="secondary"
              size="lg"
              className="bg-white mt-6 text-blue-700 hover:bg-gray-100"
            >
              Book Uruguay Tour
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
              Top Cities in Uruguay
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore Uruguay's coastal gems, historic towns, and vibrant beach resorts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uruguayCities.map((city, index) => (
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
                    <img
                      src={city.image || "/placeholder.svg"}
                      alt={city.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
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
                    <p className="text-gray-600 mb-4">
                      {city.description}
                    </p>

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
            <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Explore Uruguay?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Discover the best of Uruguay with our expert guides and custom itineraries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-gray-100"
                >
                  Book Uruguay Tour
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
              Top Attractions in Uruguay
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {uruguayAttractions.map((attraction, index) => (
              <motion.div
                key={attraction.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg">
                  <div className="relative overflow-hidden">
                    <img
                      src={attraction.image || "/placeholder.svg"}
                      alt={attraction.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">
                      {attraction.name}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-600 mb-4">
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
            <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Explore Uruguay?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Experience the best of Uruguay with our expert guides and custom itineraries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-gray-100"
                >
                  Book Uruguay Tour
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