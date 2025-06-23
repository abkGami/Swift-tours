"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Clock, Camera, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

const colombiaCities = [
  {
    name: "Bogotá",
    description:
      "Colombia's vibrant capital, set high in the Andes, known for its historic La Candelaria district and lively culture.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    duration: "3-4 days",
    category: "Capital City",
    highlights: ["La Candelaria", "Gold Museum", "Monserrate", "Botero Museum"],
  },
  {
    name: "Cartagena",
    description:
      "A stunning Caribbean port city with colorful colonial architecture, cobbled streets, and beautiful beaches.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    duration: "3-4 days",
    category: "Caribbean Gem",
    highlights: [
      "Walled City",
      "Castillo San Felipe",
      "Rosario Islands",
      "Getsemaní",
    ],
  },
  {
    name: "Medellín",
    description:
      "Once infamous, now a model of innovation, Medellín is known for its eternal spring, cable cars, and vibrant art scene.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    duration: "2-3 days",
    category: "City of Eternal Spring",
    highlights: ["Comuna 13", "Plaza Botero", "Metrocable", "Parque Arví"],
  },
  {
    name: "Santa Marta",
    description:
      "A laid-back coastal city, gateway to Tayrona National Park and the Sierra Nevada mountains.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    duration: "2-3 days",
    category: "Beach & Nature",
    highlights: [
      "Tayrona National Park",
      "Taganga",
      "Quinta de San Pedro Alejandrino",
      "Lost City Trek",
    ],
  },
  {
    name: "Cali",
    description:
      "The salsa capital of Colombia, famous for its energetic nightlife, festivals, and warm climate.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.5,
    duration: "1-2 days",
    category: "Salsa City",
    highlights: ["San Antonio", "Cali Zoo", "Cristo Rey", "Salsa Clubs"],
  },
  {
    name: "San Andrés",
    description:
      "A tropical island paradise in the Caribbean, known for its white-sand beaches and crystal-clear waters.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    duration: "2-3 days",
    category: "Island Escape",
    highlights: [
      "Johnny Cay",
      "Spratt Bight Beach",
      "Hoyo Soplador",
      "Morgan's Cave",
    ],
  },
];

const colombiaAttractions = [
  {
    name: "Tayrona National Park",
    description:
      "A spectacular coastal park with lush jungle, pristine beaches, and hiking trails.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Salt Cathedral of Zipaquirá",
    description:
      "An underground Roman Catholic church built within the tunnels of a salt mine.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Walled City of Cartagena",
    description:
      "A UNESCO World Heritage site with colorful colonial buildings and lively plazas.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Caño Cristales",
    description:
      "Known as the 'River of Five Colors', this natural wonder is a must-see for nature lovers.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Coffee Cultural Landscape",
    description:
      "Rolling hills of coffee plantations, charming towns, and scenic vistas in Colombia's coffee region.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "San Agustín Archaeological Park",
    description:
      "A fascinating archaeological site with mysterious stone statues and tombs.",
    image: "/placeholder.svg?height=300&width=400",
  },
];

export default function ColombiaPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Colombia</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Discover Colombia's rich culture, breathtaking landscapes, and
              vibrant cities from the Andes to the Caribbean.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>4.8 Rating</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>Perfect for Culture & Nature</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Best: December–March & July–August</span>
              </div>
            </div>

            <Button
              onClick={handleClick}
              variant="secondary"
              size="lg"
              className="bg-white mt-6 text-green-700 hover:bg-gray-100"
            >
              Book Colombia Tour
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
              Top Cities in Colombia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore Colombia's diverse cities, from colonial gems to Caribbean
              escapes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {colombiaCities.map((city, index) => (
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
                Ready to Explore Colombia?
              </h3>
              <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                Experience the magic of Colombia with our expert guides and
                custom itineraries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-green-700 hover:bg-gray-100"
                >
                  Book Colombia Tour
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
              Top Attractions in Colombia
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {colombiaAttractions.map((attraction, index) => (
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
                Ready to Explore Colombia?
              </h3>
              <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                Discover the best of Colombia with our expert guides and custom
                itineraries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-green-700 hover:bg-gray-100"
                >
                  Book Colombia Tour
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
