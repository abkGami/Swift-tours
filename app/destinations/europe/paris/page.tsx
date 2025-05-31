"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Clock, Camera, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

const parisAttractions = [
  {
    name: "Eiffel Tower",
    description: "Iconic iron lattice tower and symbol of Paris",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    duration: "2-3 hours",
    category: "Landmark",
    highlights: ["Observation Decks", "Night Illumination", "Restaurant"],
  },
  {
    name: "Louvre Museum",
    description: "World's largest art museum and historic monument",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    duration: "4-6 hours",
    category: "Museum",
    highlights: ["Mona Lisa", "Venus de Milo", "Egyptian Antiquities"],
  },
  {
    name: "Notre-Dame Cathedral",
    description: "Medieval Catholic cathedral with Gothic architecture",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    duration: "1-2 hours",
    category: "Religious Site",
    highlights: ["Gothic Architecture", "Rose Windows", "Bell Towers"],
  },
  {
    name: "Champs-Élysées",
    description: "Famous avenue known for shopping and cafes",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    duration: "2-4 hours",
    category: "Shopping",
    highlights: ["Luxury Shopping", "Arc de Triomphe", "Cafes"],
  },
  {
    name: "Montmartre",
    description: "Historic hilltop district with artistic heritage",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    duration: "3-5 hours",
    category: "District",
    highlights: ["Sacré-Cœur", "Artist Studios", "Moulin Rouge"],
  },
  {
    name: "Seine River Cruise",
    description: "Scenic boat tour along the Seine River",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    duration: "1-2 hours",
    category: "Activity",
    highlights: ["City Views", "Dinner Cruises", "Audio Guide"],
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
          <img
            src="/placeholder.svg?height=600&width=1200"
            alt="Paris"
            className="w-full h-full object-cover"
          />
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Paris, France
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              The City of Light awaits with its iconic landmarks, world-class
              museums, and romantic atmosphere
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>4.9 Rating</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>5-7 Days Recommended</span>
              </div>
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
                  Book Paris Tour
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
              Top Attractions in Paris
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the most iconic landmarks and hidden gems that make Paris
              the world's most visited city
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {parisAttractions.map((attraction, index) => (
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <Badge className="absolute top-3 right-3 bg-blue-600 text-white">
                      {attraction.category}
                    </Badge>
                    <div className="absolute bottom-3 left-3 text-white">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400" />
                        <span className="text-sm font-medium">
                          {attraction.rating}
                        </span>
                      </div>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">
                      {attraction.name}
                    </CardTitle>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">{attraction.duration}</span>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      {attraction.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      <h4 className="font-semibold text-gray-900 flex items-center">
                        <Camera className="h-4 w-4 mr-2 text-blue-600" />
                        Highlights
                      </h4>
                      <div className="grid grid-cols-1 gap-1">
                        {attraction.highlights.map((highlight) => (
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

                    {/* <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Add to Itinerary
                    </Button> */}
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
                Ready to Explore Paris?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Book your Paris adventure today and experience the magic of the
                City of Light with our expert guides
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  Book Paris Tour
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
