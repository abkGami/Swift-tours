"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Clock, Camera, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

const englandCities = [
  {
    name: "London",
    description:
      "England's capital, a global hub for finance, culture, and history, home to iconic landmarks and world-class museums.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    duration: "4-5 days",
    category: "Global Capital",
    highlights: [
      "big ben",
      "tower of london",
      "british museum",
      "buckingham palace",
    ],
  },
  {
    name: "Manchester",
    description:
      "A dynamic northern city known for its musical heritage, football legacy, and modern urban culture.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    duration: "2-3 days",
    category: "Music & Sports City",
    highlights: [
      "manchester united stadium",
      "northern quarter",
      "manchester art gallery",
      "science and industry museum",
    ],
  },
  {
    name: "Bath",
    description:
      "A historic city famed for its Roman baths, Georgian architecture, and literary connections to Jane Austen.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    duration: "1-2 days",
    category: "Historic Escape",
    highlights: [
      "roman baths",
      "bath abbey",
      "pulteney bridge",
      "royal crescent",
    ],
  },
  {
    name: "Oxford",
    description:
      "Home to the prestigious University of Oxford, this city is filled with historic colleges, libraries, and gardens.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    duration: "1-2 days",
    category: "Academic City",
    highlights: [
      "university of oxford",
      "bodleian library",
      "radcliffe camera",
      "christ church college",
    ],
  },
  {
    name: "Cambridge",
    description:
      "A charming university city with picturesque architecture, punting on the River Cam, and a rich academic atmosphere.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    duration: "1-2 days",
    category: "Scholarly Retreat",
    highlights: [
      "king's college chapel",
      "the backs",
      "fitzwilliam museum",
      "punting on river cam",
    ],
  },
  {
    name: "Liverpool",
    description:
      "Birthplace of The Beatles and home to a rich maritime history, vibrant arts, and cultural landmarks.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    duration: "2-3 days",
    category: "Cultural Hub",
    highlights: [
      "the beatles story",
      "liverpool waterfront",
      "tate liverpool",
      "liverpool cathedral",
    ],
  },
];

const englandAttractions = [
  {
    name: "Big Ben",
    description:
      "The iconic clock tower at the north end of the Palace of Westminster, symbolizing London worldwide.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Stonehenge",
    description:
      "A prehistoric monument of massive standing stones, shrouded in mystery and dating back thousands of years.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Tower of London",
    description:
      "A historic castle on the River Thames, known for its dark past, royal history, and the Crown Jewels.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Lake District",
    description:
      "A UNESCO World Heritage site offering breathtaking landscapes, scenic hikes, and literary heritage.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "British Museum",
    description:
      "One of the world’s greatest museums, showcasing global artifacts including the Rosetta Stone and Elgin Marbles.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Hadrian's Wall",
    description:
      "A Roman defensive fortification stretching across Northern England, rich with history and scenic walking paths.",
    image: "/placeholder.svg?height=300&width=400",
  },
];

export default function EnglandPage() {
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
          <img
            src="/placeholder.svg?height=600&width=1200"
            alt="England"
            className="w-full h-full object-cover"
          />
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">England</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
              England awaits with its historic landmarks, verdant countrysides,
              and vibrant cultural tapestry.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>4.8 Rating</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>Perfect for Culture & Nature Lovers</span>
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
              className="bg-white text-gray-900 hover:bg-gray-100 mt-6"
            >
              Book England Tour
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* City Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Cities in England
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore iconic cities that blend centuries of heritage with modern
              charm.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {englandCities.map((city, index) => (
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
                      src={city.image}
                      alt={city.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <Badge className="absolute top-3 right-3 bg-gray-800 text-white">
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
                        <Camera className="h-4 w-4 mr-2 text-gray-800" />
                        Highlights
                      </h4>
                      <div className="grid grid-cols-1 gap-1">
                        {city.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="text-sm text-gray-600 flex items-center"
                          >
                            <div className="w-1.5 h-1.5 bg-gray-800 rounded-full mr-2" />
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

          {/* Attractions Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-20 mb-9"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tourist Attractions in England
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {englandAttractions.map((attraction, index) => (
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
                      src={attraction.image}
                      alt={attraction.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900 first-letter:uppercase">
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

          {/* Final Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-gray-800 to-gray-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Explore England?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Book your England adventure today and experience the magic of
                historic landmarks, charming countryside, and vibrant city life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100"
                >
                  Book England Tour
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
