"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Clock, Camera, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

const argentinaCities = [
  {
    name: "Buenos Aires",
    description:
      "Argentina's vibrant capital, famous for tango, European-style architecture, and lively nightlife.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    duration: "4-5 days",
    category: "Capital City",
    highlights: [
      "La Boca",
      "Recoleta Cemetery",
      "Teatro Colón",
      "San Telmo Market",
    ],
  },
  {
    name: "Mendoza",
    description:
      "The heart of Argentina's wine country, nestled at the foot of the Andes and known for Malbec.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    duration: "3-4 days",
    category: "Wine Region",
    highlights: [
      "Wine Tours",
      "Aconcagua Mountain",
      "Parque General San Martín",
      "Olive Oil Tastings",
    ],
  },
  {
    name: "Bariloche",
    description:
      "A picturesque town surrounded by lakes and mountains, famous for chocolate and outdoor adventures.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    duration: "2-3 days",
    category: "Nature & Adventure",
    highlights: [
      "Nahuel Huapi Lake",
      "Cerro Catedral",
      "Circuito Chico",
      "Swiss Colony",
    ],
  },
  {
    name: "Ushuaia",
    description:
      "The southernmost city in the world, gateway to Antarctica and Tierra del Fuego National Park.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    duration: "2-3 days",
    category: "End of the World",
    highlights: [
      "Tierra del Fuego National Park",
      "Beagle Channel",
      "Train to the End of the World",
      "Martial Glacier",
    ],
  },
  {
    name: "El Calafate",
    description:
      "Base for exploring the stunning Perito Moreno Glacier and the wild beauty of Patagonia.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    duration: "2-3 days",
    category: "Patagonia",
    highlights: [
      "Perito Moreno Glacier",
      "Lago Argentino",
      "Glaciarium Museum",
      "Estancias Patagónicas",
    ],
  },
  {
    name: "Salta",
    description:
      "A colonial gem in the northwest, known for its Andean culture, colorful landscapes, and folk music.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.5,
    duration: "2-3 days",
    category: "Culture & History",
    highlights: [
      "Train to the Clouds",
      "Salinas Grandes",
      "Cafayate Vineyards",
      "Colonial Architecture",
    ],
  },
];

const argentinaAttractions = [
  {
    name: "Perito Moreno Glacier",
    description:
      "One of the world's most impressive glaciers, famous for its dramatic ice ruptures and accessible walkways.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Iguazu Falls",
    description:
      "A breathtaking series of waterfalls on the border with Brazil, surrounded by lush rainforest.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "La Boca",
    description:
      "A colorful Buenos Aires neighborhood known for its street art, tango dancers, and Caminito street.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Aconcagua",
    description:
      "The highest peak in South America, a magnet for climbers and trekkers in the Andes.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Tierra del Fuego National Park",
    description:
      "A wild and remote park at the southern tip of Argentina, with forests, lakes, and hiking trails.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Recoleta Cemetery",
    description:
      "A stunning cemetery in Buenos Aires, home to elaborate mausoleums and the grave of Eva Perón.",
    image: "/placeholder.svg?height=300&width=400",
  },
];

export default function ArgentinaPage() {
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
            src="/placeholder.svg?height=300&width=400"
            alt="Argentina"
            className="w-full h-full object-cover"
          />
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Argentina</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Discover the passion of tango, the wilds of Patagonia, and the
              vibrant culture of Argentina.
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
                <span>Best: Spring & Fall</span>
              </div>
            </div>

            <Button
              onClick={handleClick}
              variant="secondary"
              size="lg"
              className="bg-white mt-6 text-blue-700 hover:bg-gray-100"
            >
              Book Argentina Tour
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
              Top Cities in Argentina
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the diverse landscapes and cultures of Argentina, from the
              Andes to the Atlantic.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {argentinaCities.map((city, index) => (
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
                Ready to Explore Argentina?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Immerse yourself in Argentinian culture and experience the
                wonders of South America.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-gray-100"
                >
                  Book Argentina Tour
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
              Top Attractions in Argentina
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {argentinaAttractions.map((attraction, index) => (
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
                Ready to Explore Argentina?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Discover the best of Argentina with our expert guides and custom
                itineraries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-gray-100"
                >
                  Book Argentina Tour
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
