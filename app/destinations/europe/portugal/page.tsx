"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Clock, Camera, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

const portugalCities = [
  {
    name: "Lisbon",
    description:
      "Portugal's vibrant capital, known for its historic neighborhoods, tram rides, and stunning river views.",
    rating: 4.8,
    duration: "3-4 days",
    category: "Capital City",
    highlights: [
      "Belém Tower",
      "Alfama District",
      "Jerónimos Monastery",
      "Tram 28",
    ],
  },
  {
    name: "Porto",
    description:
      "Famous for its port wine, colorful riverside, and charming old town.",
    rating: 4.7,
    duration: "2-3 days",
    category: "Wine City",
    highlights: [
      "Dom Luís I Bridge",
      "Ribeira District",
      "Livraria Lello",
      "Port Wine Cellars",
    ],
  },
  {
    name: "Sintra",
    description:
      "A fairy-tale town with palaces, castles, and lush gardens nestled in the hills.",
    rating: 4.6,
    duration: "1-2 days",
    category: "Historic Town",
    highlights: [
      "Pena Palace",
      "Quinta da Regaleira",
      "Moorish Castle",
      "Sintra National Palace",
    ],
  },
  {
    name: "Faro",
    description:
      "Gateway to the Algarve, known for its old town, beaches, and natural parks.",
    rating: 4.5,
    duration: "2-3 days",
    category: "Coastal City",
    highlights: ["Old Town", "Ria Formosa", "Faro Cathedral", "Praia de Faro"],
  },
  {
    name: "Coimbra",
    description:
      "A historic city famous for its ancient university and lively student atmosphere.",
    rating: 4.4,
    duration: "1-2 days",
    category: "University City",
    highlights: [
      "University of Coimbra",
      "Joanina Library",
      "Mondego River",
      "Old Cathedral",
    ],
  },
  {
    name: "Évora",
    description:
      "A UNESCO World Heritage city with Roman ruins, medieval streets, and whitewashed houses.",
    rating: 4.5,
    duration: "1-2 days",
    category: "Historic City",
    highlights: [
      "Roman Temple",
      "Chapel of Bones",
      "Évora Cathedral",
      "Praça do Giraldo",
    ],
  },
  {
    name: "Braga",
    description:
      "Known as the 'Portuguese Rome' for its abundance of churches and religious festivals.",
    rating: 4.4,
    duration: "1-2 days",
    category: "Religious City",
    highlights: [
      "Bom Jesus do Monte",
      "Braga Cathedral",
      "Sanctuary of Sameiro",
      "Historic Center",
    ],
  },
  {
    name: "Aveiro",
    description:
      "The 'Venice of Portugal', famous for its canals, colorful boats, and Art Nouveau buildings.",
    rating: 4.3,
    duration: "1 day",
    category: "Canal City",
    highlights: [
      "Moliceiro Boats",
      "Aveiro Canals",
      "Costa Nova",
      "Aveiro Museum",
    ],
  },
  {
    name: "Madeira",
    description:
      "A lush island paradise with dramatic cliffs, hiking trails, and botanical gardens.",
    rating: 4.9,
    duration: "3-5 days",
    category: "Island",
    highlights: ["Cabo Girão", "Laurisilva Forest", "Funchal", "Levada Walks"],
  },
  {
    name: "Lagos",
    description:
      "A lively Algarve town known for its stunning beaches, sea caves, and vibrant nightlife.",
    rating: 4.7,
    duration: "2-3 days",
    category: "Beach Town",
    highlights: [
      "Ponta da Piedade",
      "Praia Dona Ana",
      "Old Town",
      "Forte da Ponta da Bandeira",
    ],
  },
  {
    name: "Guimarães",
    description:
      "The birthplace of Portugal, with a well-preserved medieval center and historic castle.",
    rating: 4.5,
    duration: "1-2 days",
    category: "Medieval City",
    highlights: [
      "Guimarães Castle",
      "Palace of the Dukes",
      "Largo da Oliveira",
      "Historic Center",
    ],
  },
  {
    name: "Óbidos",
    description:
      "A charming walled town with cobbled streets, whitewashed houses, and a medieval castle.",
    rating: 4.6,
    duration: "1 day",
    category: "Walled Town",
    highlights: [
      "Óbidos Castle",
      "Town Walls",
      "Ginja Liqueur",
      "Medieval Market",
    ],
  },
];

const potrugalAttractions = [
  {
    name: "Belém Tower",
    description:
      "Iconic riverside fortress and UNESCO World Heritage Site in Lisbon.",
  },
  {
    name: "Pena Palace",
    description: "Colorful Romanticist palace perched on a hilltop in Sintra.",
  },
  {
    name: "Dom Luís I Bridge",
    description: "Double-deck iron bridge spanning the Douro River in Porto.",
  },
  {
    name: "Benagil Cave",
    description:
      "Spectacular sea cave with a natural skylight on the Algarve coast.",
  },
  {
    name: "University of Coimbra",
    description:
      "One of the oldest universities in Europe, known for its historic campus.",
  },
  {
    name: "Cabo Girão",
    description:
      "One of the highest sea cliffs in Europe, offering breathtaking views on Madeira.",
  },
];

export default function ParisPage() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/contact");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/70" />
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
              <span className="text-xl">Europe</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Portugal</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Portugal awaits with its breathtaking coastlines, historic cities,
              and vibrant culture.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>4.9 Rating</span>
              </div>
              {/* <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>5-7 Days Recommended</span>
              </div> */}
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>Perfect for Couples & Families</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Year-round Destination</span>
              </div>
            </div>

            <Button
              onClick={handleClick}
              variant="secondary"
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 mt-6"
            >
              Book Portugal Tour
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Attractions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Cities in Portugal
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the most iconic landmarks and hidden gems that make
              Portugal a top destination for travelers worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portugalCities.map((city, index) => (
              <motion.div
                key={city.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/90">
                  <div className="p-6">
                    <Badge className="mb-2 bg-blue-600 text-white">
                      {city.category}
                    </Badge>
                    <div className="flex items-center space-x-2 mb-2">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm font-medium text-blue-900">
                        {city.rating}
                      </span>
                      <Clock className="h-4 w-4 ml-4 text-blue-600" />
                      <span className="text-sm text-blue-700">
                        {city.duration}
                      </span>
                    </div>
                    <CardHeader className="p-0 mb-2">
                      <CardTitle className="text-xl text-blue-900">
                        {city.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-blue-800 mb-4">{city.description}</p>
                      <div className="space-y-2 mb-2">
                        <h4 className="font-semibold text-blue-900 flex items-center">
                          <Camera className="h-4 w-4 mr-2 text-blue-600" />
                          Highlights
                        </h4>
                        <ul className="list-disc list-inside text-blue-700 text-sm">
                          {city.highlights.map((highlight) => (
                            <li key={highlight}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </div>
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
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Explore Portugal?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Book your Portugal adventure today and experience the magic of
                the destination with breathtaking landmarks and world-class
                museum
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  Book Portugal Tour
                </Button>
                {/* <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  Customize Itinerary
                </Button> */}
              </div>
            </div>
          </motion.div>

          {/* tourist attractions  */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-9 mt-14"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tourist Attractions in Portugal
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {potrugalAttractions.map((attraction, index) => (
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
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Explore Portugal?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Book your Portugal adventure today and experience the magic of
                the destination with breathtaking landmarks and world-class
                museum
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  Book Portugal Tour
                </Button>
                {/* <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  Customize Itinerary
                </Button> */}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
