"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Clock, Camera, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

const ecuadorCities = [
  {
    name: "Quito",
    description:
      "Ecuador's capital, nestled high in the Andes, known for its well-preserved colonial center and dramatic mountain backdrop.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    duration: "2-3 days",
    category: "Historic Capital",
    highlights: [
      "Old Town (Centro Histórico)",
      "La Compañía Church",
      "El Panecillo",
      "Mitad del Mundo",
    ],
  },
  {
    name: "Guayaquil",
    description:
      "A bustling port city on the Pacific, famous for its lively riverfront, modern parks, and vibrant nightlife.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    duration: "1-2 days",
    category: "Coastal City",
    highlights: [
      "Malecón 2000",
      "Las Peñas",
      "Parque Seminario (Iguana Park)",
      "Santa Ana Hill",
    ],
  },
  {
    name: "Cuenca",
    description:
      "A charming Andean city with cobblestone streets, colonial architecture, and a rich cultural scene.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    duration: "2-3 days",
    category: "Colonial Gem",
    highlights: [
      "Cathedral of the Immaculate Conception",
      "Tomebamba River",
      "Pumapungo Ruins",
      "Flower Market",
    ],
  },
  {
    name: "Baños",
    description:
      "Adventure capital of Ecuador, known for its waterfalls, hot springs, and outdoor activities.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    duration: "1-2 days",
    category: "Adventure Town",
    highlights: [
      "Pailón del Diablo Waterfall",
      "Swing at the End of the World",
      "Thermal Baths",
      "Ruta de las Cascadas",
    ],
  },
  {
    name: "Otavalo",
    description:
      "Famous for its indigenous market, Andean scenery, and vibrant local culture.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.5,
    duration: "1 day",
    category: "Market Town",
    highlights: [
      "Otavalo Market",
      "Peguche Waterfall",
      "Cuicocha Lake",
      "Plaza de los Ponchos",
    ],
  },
  {
    name: "Puerto Ayora (Galápagos)",
    description:
      "Gateway to the Galápagos Islands, offering unique wildlife, pristine beaches, and marine adventures.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    duration: "3-4 days",
    category: "Island Paradise",
    highlights: [
      "Charles Darwin Research Station",
      "Tortuga Bay",
      "Las Grietas",
      "Wildlife Watching",
    ],
  },
];

const ecuadorAttractions = [
  {
    name: "Galápagos Islands",
    description:
      "A UNESCO World Heritage site, renowned for its unique wildlife, volcanic landscapes, and crystal-clear waters.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Mitad del Mundo",
    description:
      "Stand on the equator at this famous monument just outside Quito.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Cotopaxi National Park",
    description:
      "Home to one of the world's highest active volcanoes and stunning Andean scenery.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Quilotoa Lagoon",
    description:
      "A breathtaking turquoise crater lake surrounded by dramatic mountains.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Cajas National Park",
    description:
      "A high-altitude park near Cuenca, known for its lakes, hiking trails, and unique flora.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Devil's Nose Train",
    description:
      "A thrilling train ride through the Andes, famous for its switchbacks and mountain views.",
    image: "/placeholder.svg?height=300&width=400",
  },
];

export default function EcuadorPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Ecuador</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Discover the wonders of Ecuador, from the Andes to the Amazon and
              the Galápagos Islands.
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
                <span>Best: June–September & December–February</span>
              </div>
            </div>

            <Button
              onClick={handleClick}
              variant="secondary"
              size="lg"
              className="bg-white mt-6 text-green-700 hover:bg-gray-100"
            >
              Book Ecuador Tour
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
              Top Cities in Ecuador
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore Ecuador's diverse cities, from Andean capitals to island
              paradises.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecuadorCities.map((city, index) => (
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
                Ready to Explore Ecuador?
              </h3>
              <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                Discover the best of Ecuador with our expert guides and custom
                itineraries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-green-700 hover:bg-gray-100"
                >
                  Book Ecuador Tour
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
              Top Attractions in Ecuador
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {ecuadorAttractions.map((attraction, index) => (
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
                Ready to Explore Ecuador?
              </h3>
              <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                Experience the wonders of Ecuador with our expert guides and
                custom itineraries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-green-700 hover:bg-gray-100"
                >
                  Book Ecuador Tour
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
