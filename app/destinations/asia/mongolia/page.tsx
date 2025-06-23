"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Clock, Users, Calendar, Mountain } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

const mongoliaCities = [
  {
    name: "Ulaanbaatar",
    description:
      "Mongolia's capital and largest city, blending traditional nomadic culture with Soviet-era architecture and modern growth.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.5,
    duration: "3-4 days",
    category: "Cultural Capital",
    highlights: [
      "genghis khan square",
      "gandantegchinlen monastery",
      "national museum of mongolia",
      "zaisan memorial",
    ],
  },
  {
    name: "Erdenet",
    description:
      "A major industrial city in northern Mongolia, known for one of the largest copper mines in the world.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.0,
    duration: "1-2 days",
    category: "Industrial Hub",
    highlights: [
      "erdenet mining museum",
      "local handicraft markets",
      "bulgan province countryside",
      "cultural center",
    ],
  },
  {
    name: "Darkhan",
    description:
      "A planned city built in the 1960s, Darkhan is Mongolia's second-largest industrial center with green surroundings.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.1,
    duration: "1-2 days",
    category: "Urban Green",
    highlights: [
      "darkhan buddhist center",
      "selenge river views",
      "folk museum",
      "riverside parks",
    ],
  },
  {
    name: "Kharkhorin",
    description:
      "Once the ancient capital of the Mongol Empire, now a quiet town near the famed Erdene Zuu Monastery.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    duration: "1-2 days",
    category: "Historic Capital",
    highlights: [
      "erdene zuu monastery",
      "kharkhorin museum",
      "orkhon valley",
      "stone turtles",
    ],
  },
  {
    name: "Ölgii",
    description:
      "Located in western Mongolia, Ölgii is known for its Kazakh culture, eagle hunting festivals, and rugged mountains.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.4,
    duration: "2-3 days",
    category: "Ethnic Heritage",
    highlights: [
      "golden eagle festival",
      "altai tavan bogd national park",
      "kazakh embroidery markets",
      "nomadic ger camps",
    ],
  },
  {
    name: "Choibalsan",
    description:
      "A remote city in eastern Mongolia with a mix of Soviet-era charm and access to beautiful steppe landscapes.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 3.9,
    duration: "1-2 days",
    category: "Steppe Gateway",
    highlights: [
      "kherlen river walks",
      "local history museum",
      "russian architecture",
      "dornod steppe reserve",
    ],
  },
];

const mongoliaAttractions = [
  {
    name: "Gorkhi-Terelj National Park",
    description:
      "A stunning natural reserve near Ulaanbaatar known for its rock formations, hiking trails, and nomadic camps",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Genghis Khan Equestrian Statue",
    description:
      "A towering 40-meter statue of Genghis Khan on horseback, symbolizing Mongolia's imperial heritage",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Erdene Zuu Monastery",
    description:
      "Mongolia’s oldest Buddhist monastery, built on the ruins of the ancient capital Kharkhorin",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Flaming Cliffs (Bayanzag)",
    description:
      "A famous paleontological site in the Gobi Desert where dinosaur fossils were first discovered in the 1920s",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Altai Tavan Bogd National Park",
    description:
      "A remote park in western Mongolia known for snow-capped peaks, glaciers, and the Kazakh eagle hunters",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Amarbayasgalant Monastery",
    description:
      "A beautifully preserved Buddhist monastery in northern Mongolia, known for its classic architecture and serene setting",
    image: "/placeholder.svg?height=300&width=400",
  },
];

export default function MongoliaPage() {
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
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-blue-900/70" />
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
              <span className="text-xl">Asia</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Mongolia</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Explore the vast landscapes of Mongolia, from the Gobi Desert to
              the lush mountains and vibrant culture
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>4.8 Rating</span>
              </div>
              {/* <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>8-10 Days Recommended</span>
              </div> */}
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>Perfect for Adventure & Culture</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Best: June-August</span>
              </div>
            </div>

            <Button
              onClick={handleClick}
              variant="secondary"
              size="lg"
              className="mt-6 bg-white text-green-600 hover:bg-gray-100"
            >
              Book Mongolia Tour
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
              Cities in Mongolia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the rich culture and stunning landscapes of Mongolia,
              where tradition meets adventure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mongoliaCities.map((city, index) => (
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
                    <Badge className="mb-2 bg-green-700 text-white">
                      {city.category}
                    </Badge>
                    <div className="flex items-center space-x-2 mb-2">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm font-medium text-green-900">
                        {city.rating}
                      </span>
                      <Clock className="h-4 w-4 ml-4 text-green-700" />
                      <span className="text-sm text-green-700">
                        {city.duration}
                      </span>
                    </div>
                    <CardHeader className="p-0 mb-2">
                      <CardTitle className="text-xl text-green-900">
                        {city.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-green-800 mb-4">{city.description}</p>
                      <div className="space-y-2 mb-2">
                        <h4 className="font-semibold text-green-900 flex items-center">
                          <Mountain className="h-4 w-4 mr-2 text-green-700" />
                          Highlights
                        </h4>
                        <ul className="list-disc list-inside text-green-700 text-sm">
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
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Explore Mongolia?
              </h3>
              <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                Book your Mongolian adventure today and experience the magic of
                the vast landscapes and rich culture
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-green-600 hover:bg-gray-100"
                >
                  Book Mongolia Tour
                </Button>
                {/* <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-green-600"
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
              Top Attractions in Mongolia
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {mongoliaAttractions.map((attraction, index) => (
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

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Explore Mongolia?
              </h3>
              <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                Book your Mongolian adventure today and experience the magic of
                the vast landscapes and rich culture
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-green-600 hover:bg-gray-100"
                >
                  Book Mongolia Tour
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
