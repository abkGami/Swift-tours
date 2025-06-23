"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Clock, Camera, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

const italyCities = [
  {
    name: "Rome",
    description:
      "A timeless city where ancient ruins blend with vibrant street life and art-filled piazzas.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    duration: "2-3 days",
    category: "Historical City",
    highlights: ["colosseum", "vatican city", "roman forum", "trevi fountain"],
  },
  {
    name: "florence",
    description:
      "The birthplace of the Renaissance, filled with world-class art, architecture, and Tuscan charm.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    duration: "1-2 days",
    category: "Cultural City",
    highlights: [
      "uffizi gallery",
      "duomo",
      "ponte vecchio",
      "accademia gallery",
    ],
  },
  {
    name: "venice",
    description:
      "A romantic maze of canals, bridges, and historic palaces floating on the Adriatic Sea.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    duration: "1-2 days",
    category: "Romantic City",
    highlights: [
      "st. mark’s basilica",
      "rialto bridge",
      "grand canal",
      "doge’s palace",
    ],
  },
  {
    name: "milan",
    description:
      "Italy’s fashion and financial capital, known for its style, design, and historical landmarks.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    duration: "1-2 days",
    category: "Modern City",
    highlights: [
      "duomo di milano",
      "galleria vittorio emanuele ii",
      "sforza castle",
      "last supper",
    ],
  },
  {
    name: "naples",
    description:
      "A bustling southern city offering rich history, chaotic charm, and the birthplace of pizza.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.5,
    duration: "1-2 days",
    category: "Historical City",
    highlights: [
      "pompeii",
      "mt. vesuvius",
      "spaccanapoli",
      "naples national archaeological museum",
    ],
  },
  {
    name: "verona",
    description:
      "A romantic city of literary fame, known for Juliet’s balcony and grand arenas.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    duration: "1 day",
    category: "Romantic City",
    highlights: [
      "verona arena",
      "juliet’s house",
      "piazza delle erbe",
      "castelvecchio",
    ],
  },
];

const romeAttractions = [
  {
    name: "Cinque Terre",
    description:
      "A UNESCO World Heritage site, featuring five colorful villages perched on cliffs",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Amalfi Coast",
    description:
      "A breathtaking coastal region with charming towns, scenic drives, and stunning views. ",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Lake Como",
    description:
      "A picturesque lake surrounded by mountains, villas, and charming towns, popular for its beauty and tranquility. ",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Lake Garda",
    description:
      "Another stunning lake region, offering various activities, from boat rides to mountain hikes. ",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "The Dolomites",
    description:
      "A mountain range with stunning peaks, hiking trails, and scenic viewpoints. ",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Sicily",
    description:
      "Italy's largest island, offering diverse landscapes, from volcanic slopes to beautiful beaches. ",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Tuscany",
    description:
      "A region known for its rolling hills, vineyards, and picturesque towns. ",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Puglia",
    description:
      "A region in southern Italy with a unique blend of history, culture, and natural beauty. ",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Sardinia",
    description:
      "An island with pristine beaches, crystal-clear waters, and stunning coastal scenery. ",
    image: "/placeholder.svg?height=300&width=400",
  },
  // {
  //   name: "Capri",
  //   description:
  //     "An island off the coast.",
  //   image: "/placeholder.svg?height=300&width=400",
  // },
];

export default function RomePage() {
  const router = useRouter();

  const handleCLick = () => {
    router.push("/contact");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-10 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/70 to-red-900/70" />
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Italy</h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
              From the peaks of the Dolomites to the ruins of Pompeii, Italy
              dares you to chase legends, lose yourself in winding alleys, and
              taste adventure in every region.{" "}
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>4.8 Rating</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>4-6 Days Recommended</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>Perfect for History Lovers</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Best: Spring & Fall</span>
              </div>
            </div>

            <Button
              onClick={handleCLick}
              variant="secondary"
              size="lg"
              className="mt-6 bg-white text-orange-600 hover:bg-gray-100"
            >
              Book Italy Tour
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
              Cities in Italy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the historic cities, and timeless beauty that make Italy
              a living museum of the ancient world.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {italyCities.map((city, index) => (
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
                    <Badge className="mb-2 bg-orange-600 text-white">
                      {city.category}
                    </Badge>
                    <div className="flex items-center space-x-2 mb-2">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm font-medium text-orange-900">
                        {city.rating}
                      </span>
                      <Clock className="h-4 w-4 ml-4 text-orange-600" />
                      <span className="text-sm text-orange-700">
                        {city.duration}
                      </span>
                    </div>
                    <CardHeader className="p-0 mb-2">
                      <CardTitle className="text-xl text-orange-900 first-letter:uppercase">
                        {city.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-orange-800 mb-4">{city.description}</p>
                      <div className="space-y-2 mb-2">
                        <h4 className="font-semibold text-orange-900 flex items-center">
                          <Camera className="h-4 w-4 mr-2 text-orange-600" />
                          Highlights
                        </h4>
                        <ul className="list-disc list-inside text-orange-700 text-sm">
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
            <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Explore Italy?
              </h3>
              <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
                Discover the eternal city with our expert guides and experience
                the magic of ancient Italy
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleCLick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100"
                >
                  Book Italy Tour
                </Button>
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
              Tourist Attractions in Italy
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {romeAttractions.map((attraction, index) => (
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
                    <CardTitle className="text-xl text-orange-900 first-letter:uppercase">
                      {attraction.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-orange-800 mb-2">
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
            <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Explore Italy?
              </h3>
              <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
                Discover the eternal city with our expert guides and experience
                the magic of ancient Italy
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleCLick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100"
                >
                  Book Italy Tour
                </Button>
                {/* <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-orange-600"
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
