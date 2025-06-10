"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Clock, Camera, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

const franceCities = [
  {
    name: "Athens",
    description: "The historic capital of Greece, renowned for the Acropolis, ancient ruins, and vibrant city life.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    duration: "3-4 days",
    category: "Historical Capital",
    highlights: [
      "acropolis",
      "parthenon",
      "plaka district",
      "national archaeological museum"
    ]
  },
  {
    name: "Thessaloniki",
    description: "A lively port city famous for its Byzantine walls, vibrant nightlife, and rich culinary traditions.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    duration: "2-3 days",
    category: "Cultural City",
    highlights: [
      "white tower",
      "aristotelous square",
      "rotunda",
      "byzantine walls"
    ]
  },
  {
    name: "Santorini",
    description: "A stunning island known for its whitewashed houses, blue-domed churches, and breathtaking sunsets.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    duration: "2-4 days",
    category: "Island Paradise",
    highlights: [
      "oia village",
      "fira town",
      "red beach",
      "caldera views"
    ]
  },
  {
    name: "Rhodes",
    description: "An island with medieval charm, famous for its Old Town, beaches, and ancient ruins.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    duration: "3-5 days",
    category: "Medieval Island",
    highlights: [
      "rhodes old town",
      "palace of the grand master",
      "lindos acropolis",
      "elli beach"
    ]
  },
  {
    name: "Meteora",
    description: "A UNESCO World Heritage site known for its dramatic rock formations and cliff-top monasteries.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    duration: "1-2 days",
    category: "Natural Wonder",
    highlights: [
      "meteora monasteries",
      "kalambaka town",
      "rock climbing",
      "panoramic viewpoints"
    ]
  },
  {
    name: "Mykonos",
    description: "A cosmopolitan island celebrated for its beaches, nightlife, and iconic windmills.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    duration: "2-3 days",
    category: "Party Island",
    highlights: [
      "little venice",
      "paradise beach",
      "mykonos windmills",
      "delos island"
    ]
  },
  {
    name: "Olympia",
    description: "The birthplace of the Olympic Games, featuring ancient ruins and a rich archaeological museum.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    duration: "1-2 days",
    category: "Ancient Site",
    highlights: [
      "archaeological site of olympia",
      "temple of zeus",
      "archaeological museum",
      "stadium"
    ]
  },
  {
    name: "Milos",
    description: "A volcanic island known for its unique beaches, colorful villages, and crystal-clear waters.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    duration: "2-3 days",
    category: "Island Gem",
    highlights: [
      "sarakiniko beach",
      "klima village",
      "kleftiko caves",
      "plaka"
    ]
  },
  {
    name: "Peloponnese",
    description: "A diverse region offering ancient sites, beautiful coastlines, and traditional villages.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    duration: "4-6 days",
    category: "Historic Region",
    highlights: [
      "ancient corinth",
      "nafplio",
      "mycenae",
      "epidaurus"
    ]
  }
];

const parisAttractions = [
  {
    name: "Acropolis of Athens",
    description: "Ancient citadel on a rocky hilltop featuring the Parthenon and other classical ruins",
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    name: "Santorini",
    description: "Scenic island known for whitewashed buildings, blue-domed churches, and sunset views",
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    name: "Delphi",
    description: "Historic sanctuary once home to the oracle of Apollo in ancient Greece",
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    name: "Meteora Monasteries",
    description: "Impressive rock formations with centuries-old monasteries perched on top",
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    name: "Mykonos",
    description: "Popular island with sandy beaches, vibrant nightlife, and iconic windmills",
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    name: "Palace of Knossos",
    description: "Minoan archaeological site on Crete, believed to be Europe's oldest city",
    image: "/placeholder.svg?height=300&width=400"
  }
  
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Greece</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Greece awaits with its ancient wonders, sun-soaked islands, and captivating history.
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
              Book Greece Tour
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
              Cities in Greece
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the most iconic landmarks and hidden gems that make Greece
              a top destination for travelers worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {franceCities.map((attraction, index) => (
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
                Ready to Explore Greece?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Book your Greece adventure today and experience the magic of this timeless land with ancient landmarks and sun-drenched beauty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  Book Greece Tour
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
              Tourist Attractions in Greece
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
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

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Explore Greece?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Book your Greece adventure today and experience the magic of this timeless land with ancient landmarks and sun-drenched beauty.

              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  Book Greece Tour
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
