"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Clock, Camera, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

const icelandCities = [
  {
    name: "Reykjavik",
    description:
      "Iceland’s vibrant capital, known for its colorful houses, lively arts scene, and geothermal pools.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    duration: "2-3 days",
    category: "Capital City",
    highlights: [
      "Hallgrímskirkja Church",
      "Harpa Concert Hall",
      "Sun Voyager",
      "Laugavegur Street",
    ],
  },
  {
    name: "Akureyri",
    description:
      "The ‘Capital of the North’, offering charming streets, botanical gardens, and whale watching.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    duration: "1-2 days",
    category: "Northern Gem",
    highlights: [
      "Akureyri Church",
      "Botanical Gardens",
      "Whale Watching",
      "Godafoss Waterfall",
    ],
  },
  {
    name: "Vik",
    description:
      "A small village famous for its black sand beaches, dramatic cliffs, and sea stacks.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    duration: "1 day",
    category: "Coastal Beauty",
    highlights: [
      "Reynisfjara Beach",
      "Dyrhólaey Arch",
      "Reynisdrangar Sea Stacks",
      "Vik Church",
    ],
  },
  {
    name: "Húsavík",
    description:
      "Known as the whale watching capital of Iceland, with charming harbors and geothermal baths.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    duration: "1 day",
    category: "Whale Watching",
    highlights: [
      "Whale Watching Tours",
      "Húsavík Church",
      "Geosea Baths",
      "Húsavík Whale Museum",
    ],
  },
  {
    name: "Egilsstaðir",
    description:
      "Gateway to East Iceland, surrounded by forests, lakes, and hiking trails.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.5,
    duration: "1 day",
    category: "Eastern Hub",
    highlights: [
      "Hallormsstaðaskógur Forest",
      "Lagarfljót Lake",
      "Hengifoss Waterfall",
      "East Iceland Heritage Museum",
    ],
  },
  {
    name: "Ísafjörður",
    description:
      "A picturesque town in the Westfjords, known for dramatic fjords and outdoor adventures.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.5,
    duration: "1-2 days",
    category: "Westfjords Escape",
    highlights: [
      "Dynjandi Waterfall",
      "Westfjords Heritage Museum",
      "Hornstrandir Nature Reserve",
      "Old Town Ísafjörður",
    ],
  },
];

const icelandAttractions = [
  {
    name: "Blue Lagoon",
    description:
      "A world-famous geothermal spa with milky blue waters surrounded by lava fields.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Golden Circle",
    description:
      "A popular route featuring Þingvellir National Park, Geysir geothermal area, and Gullfoss waterfall.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Jökulsárlón Glacier Lagoon",
    description:
      "A stunning glacial lake filled with floating icebergs and nearby Diamond Beach.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Seljalandsfoss",
    description:
      "A picturesque waterfall you can walk behind, located along Iceland’s south coast.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Vatnajökull National Park",
    description:
      "Europe’s largest national park, home to glaciers, volcanoes, and breathtaking landscapes.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Northern Lights",
    description:
      "Witness the magical aurora borealis dancing across Iceland’s night sky.",
    image: "/placeholder.svg?height=300&width=400",
  },
];

export default function IcelandPage() {
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
            src="/placeholder.svg?height=600&width=1200"
            alt="Iceland"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-cyan-900/70" />
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Iceland</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Discover Iceland: a land of glaciers, volcanoes, waterfalls, and the magical northern lights.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>4.8 Rating</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>Perfect for Nature & Adventure</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Best: June – September & February – March</span>
              </div>
            </div>

            <Button
              onClick={handleClick}
              variant="secondary"
              size="lg"
              className="bg-white mt-6 text-blue-700 hover:bg-gray-100"
            >
              Book Iceland Tour
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
              Top Cities in Iceland
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore Iceland’s unique towns and villages, each offering its own natural wonders and cultural charm.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {icelandCities.map((city, index) => (
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
                    <Badge className="absolute top-3 right-3 bg-blue-700 text-white">
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
                    <p className="text-gray-600 mb-4">
                      {city.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      <h4 className="font-semibold text-gray-900 flex items-center">
                        <Camera className="h-4 w-4 mr-2 text-blue-700" />
                        Highlights
                      </h4>
                      <div className="grid grid-cols-1 gap-1">
                        {city.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="text-sm text-gray-600 flex items-center"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-2" />
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
            <div className="bg-gradient-to-r from-blue-700 to-cyan-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Explore Iceland?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Experience the wild beauty, adventure, and serenity of Iceland with a custom tour.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-gray-100"
                >
                  Book Iceland Tour
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
              Top Attractions in Iceland
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {icelandAttractions.map((attraction, index) => (
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
                    <CardTitle className="text-xl text-gray-900">
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
            <div className="bg-gradient-to-r from-blue-700 to-cyan-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Explore Iceland?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
             Experience the wild beauty, adventure, and serenity of Iceland with a custom tour.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-gray-100"
                >
                  Book Iceland Tour
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