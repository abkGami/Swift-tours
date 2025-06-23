"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Clock, Camera, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

const brazilCities = [
  {
    name: "Rio de Janeiro",
    description:
      "Brazil's most iconic city, famous for its breathtaking beaches, Christ the Redeemer statue, and vibrant Carnival.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    duration: "4-5 days",
    category: "Marvelous City",
    highlights: [
      "Copacabana Beach",
      "Sugarloaf Mountain",
      "Christ the Redeemer",
      "Lapa Arches",
    ],
  },
  {
    name: "São Paulo",
    description:
      "Brazil's bustling financial center, known for its diverse culture, world-class dining, and dynamic nightlife.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    duration: "3-4 days",
    category: "Cultural Hub",
    highlights: [
      "Avenida Paulista",
      "Ibirapuera Park",
      "Municipal Market",
      "Pinacoteca Museum",
    ],
  },
  {
    name: "Salvador",
    description:
      "A historic coastal city with Afro-Brazilian culture, colonial architecture, and lively festivals.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    duration: "2-3 days",
    category: "Cultural Capital",
    highlights: [
      "Pelourinho",
      "Elevador Lacerda",
      "São Francisco Church",
      "Porto da Barra Beach",
    ],
  },
  {
    name: "Manaus",
    description:
      "Gateway to the Amazon rainforest, known for its opera house and river adventures.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    duration: "2-3 days",
    category: "Amazon Gateway",
    highlights: [
      "Amazon Theatre",
      "Meeting of the Waters",
      "Adolpho Lisboa Market",
      "River Cruises",
    ],
  },
  {
    name: "Brasília",
    description:
      "Brazil's modernist capital, renowned for its unique architecture and city planning.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.5,
    duration: "1-2 days",
    category: "Modernist City",
    highlights: [
      "Cathedral of Brasília",
      "National Congress",
      "JK Memorial",
      "Parque da Cidade",
    ],
  },
  {
    name: "Florianópolis",
    description:
      "A beautiful island city with stunning beaches, surfing, and a laid-back vibe.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    duration: "2-3 days",
    category: "Island Paradise",
    highlights: [
      "Joaquina Beach",
      "Lagoa da Conceição",
      "Campeche Island",
      "Hercílio Luz Bridge",
    ],
  },
];

const brazilAttractions = [
  {
    name: "Iguazu Falls",
    description:
      "One of the world's largest and most spectacular waterfall systems, straddling the border with Argentina.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Amazon Rainforest",
    description:
      "The world's largest tropical rainforest, teeming with wildlife and adventure opportunities.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Christ the Redeemer",
    description:
      "The iconic statue overlooking Rio de Janeiro, one of the New Seven Wonders of the World.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Pantanal",
    description:
      "The world's largest tropical wetland, famous for its biodiversity and wildlife safaris.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Lençóis Maranhenses",
    description:
      "A surreal landscape of white sand dunes and turquoise lagoons in northern Brazil.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Fernando de Noronha",
    description:
      "A pristine archipelago with crystal-clear waters, perfect for diving and eco-tourism.",
    image: "/placeholder.svg?height=300&width=400",
  },
];

export default function BrazilPage() {
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
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-yellow-900/70" />
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Brazil</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Experience the rhythm of samba, the beauty of beaches, and the
              wonders of the Amazon in Brazil.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>4.8 Rating</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>Perfect for Nature & Culture</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Best: December–March & June–August</span>
              </div>
            </div>

            <Button
              onClick={handleClick}
              variant="secondary"
              size="lg"
              className="bg-white mt-6 text-green-700 hover:bg-gray-100"
            >
              Book Brazil Tour
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
              Top Cities in Brazil
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore Brazil's vibrant cities, stunning beaches, and natural
              wonders.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brazilCities.map((city, index) => (
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
                    <Badge className="absolute top-3 right-3 bg-green-600 text-white">
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
                        <Camera className="h-4 w-4 mr-2 text-green-600" />
                        Highlights
                      </h4>
                      <div className="grid grid-cols-1 gap-1">
                        {city.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="text-sm text-gray-600 flex items-center"
                          >
                            <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2" />
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
            <div className="bg-gradient-to-r from-green-600 to-yellow-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Explore Brazil?
              </h3>
              <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                Discover the best of Brazil with our expert guides and custom
                itineraries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-green-700 hover:bg-gray-100"
                >
                  Book Brazil Tour
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
              Top Attractions in Brazil
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {brazilAttractions.map((attraction, index) => (
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
            <div className="bg-gradient-to-r from-green-600 to-yellow-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Explore Brazil?
              </h3>
              <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                Experience the wonders of Brazil with our expert guides and
                custom itineraries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-green-700 hover:bg-gray-100"
                >
                  Book Brazil Tour
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
