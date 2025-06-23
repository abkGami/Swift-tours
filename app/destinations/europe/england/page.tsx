"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Clock, Camera, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

const ukCities = [
  {
    name: "London",
    description:
      "The UK's capital, a global hub for finance, culture, and history, home to iconic landmarks and world-class museums.",
    rating: 4.9,
    duration: "4-5 days",
    category: "Global Capital",
    highlights: ["big ben", "tower of london", "british museum", "hyde park"],
  },
  {
    name: "Edinburgh",
    description:
      "Scotland's hilly capital, known for its medieval Old Town, elegant Georgian New Town, and Edinburgh Castle.",
    rating: 4.8,
    duration: "2-3 days",
    category: "Historic Capital",
    highlights: [
      "edinburgh castle",
      "royal mile",
      "arthur's seat",
      "holyrood palace",
    ],
  },
  {
    name: "Cardiff",
    description:
      "Wales’ capital city, offering a mix of ancient castles, a vibrant waterfront, and rich cultural experiences.",
    rating: 4.6,
    duration: "1-2 days",
    category: "Welsh Gateway",
    highlights: [
      "cardiff castle",
      "millennium stadium",
      "national museum",
      "cardiff bay",
    ],
  },
  {
    name: "Belfast",
    description:
      "Northern Ireland’s capital, known for its Titanic history, thriving arts scene, and Victorian architecture.",
    rating: 4.5,
    duration: "2 days",
    category: "Titanic City",
    highlights: [
      "titanic belfast",
      "giant's causeway (nearby)",
      "city hall",
      "botanic gardens",
    ],
  },
  {
    name: "Manchester",
    description:
      "A dynamic northern English city known for music, football, and vibrant city culture.",
    rating: 4.7,
    duration: "2-3 days",
    category: "Music & Sports City",
    highlights: [
      "manchester united stadium",
      "northern quarter",
      "science museum",
    ],
  },
  {
    name: "Glasgow",
    description:
      "Scotland’s largest city, celebrated for its Victorian architecture, rich art scene, and vibrant nightlife.",
    rating: 4.6,
    duration: "2-3 days",
    category: "Cultural Hub",
    highlights: [
      "kelvingrove museum",
      "glasgow cathedral",
      "george square",
      "riverside museum",
    ],
  },
];

const ukAttractions = [
  {
    name: "Big Ben",
    description: "The iconic London clock tower, symbolizing the UK worldwide.",
  },
  {
    name: "Stonehenge",
    description:
      "A prehistoric stone circle in southern England with mysterious origins.",
  },
  {
    name: "Giant's Causeway",
    description:
      "Northern Ireland's natural wonder, a UNESCO site formed by volcanic activity.",
  },
  {
    name: "Edinburgh Castle",
    description:
      "A historic fortress dominating Edinburgh’s skyline, rich with Scottish history.",
  },
  {
    name: "Snowdonia National Park",
    description:
      "Wales’ premier hiking and adventure destination with stunning mountains and lakes.",
  },
  {
    name: "British Museum",
    description:
      "One of the world’s greatest museums, showcasing global artifacts including the Rosetta Stone.",
  },
];

export default function UnitedKingdomPage() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/contact");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-700/70" />
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              United Kingdom
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
              Discover the rich tapestry of the UK — from England’s cities to
              Scotland’s castles, Wales’ mountains, and Northern Ireland’s
              natural wonders.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>4.8 Rating</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>Culture, History & Adventure</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Best in Spring & Summer</span>
              </div>
            </div>

            <Button
              onClick={handleClick}
              variant="secondary"
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 mt-6"
            >
              Book UK Tour
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
              Cities in the United Kingdom
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore diverse cities across the UK — each with its own story and
              culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ukCities.map((city, index) => (
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
                    <Badge className="mb-2 bg-gray-800 text-white">
                      {city.category}
                    </Badge>
                    <div className="flex items-center space-x-2 mb-2">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm font-medium text-gray-900">
                        {city.rating}
                      </span>
                      <Clock className="h-4 w-4 ml-4 text-gray-800" />
                      <span className="text-sm text-gray-700">
                        {city.duration}
                      </span>
                    </div>
                    <CardHeader className="p-0 mb-2">
                      <CardTitle className="text-xl text-gray-900">
                        {city.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-gray-800 mb-4">{city.description}</p>
                      <div className="space-y-2 mb-2">
                        <h4 className="font-semibold text-gray-900 flex items-center">
                          <Camera className="h-4 w-4 mr-2 text-gray-800" />
                          Highlights
                        </h4>
                        <ul className="list-disc list-inside text-gray-700 text-sm">
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

          {/* Attractions */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-20 mb-9"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Must-See Attractions Across the UK
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ukAttractions.map((attraction, index) => (
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
                    <CardTitle className="text-xl text-gray-900 first-letter:uppercase">
                      {attraction.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-800 mb-2">
                      {attraction.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-gray-800 to-gray-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Explore the UK?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                From castles and coastlines to cities and countryside —
                experience it all in the United Kingdom.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100"
                >
                  Book UK Tour
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
