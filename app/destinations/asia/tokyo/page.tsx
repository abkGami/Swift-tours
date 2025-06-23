"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Clock, Camera, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

const tokyoCities = [
  {
    name: "Tokyo",
    description:
      "Japan's bustling capital, blending ultra-modern skyscrapers with historic temples and vibrant pop culture.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    duration: "4-5 days",
    category: "Mega City",
    highlights: [
      "shibuya crossing",
      "senso-ji temple",
      "tokyo tower",
      "akihabara",
    ],
  },
  {
    name: "Kyoto",
    description:
      "The heart of traditional Japan, known for its ancient temples, tea houses, and geisha culture.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    duration: "3-4 days",
    category: "Cultural Capital",
    highlights: [
      "fushimi inari shrine",
      "kinkaku-ji (golden pavilion)",
      "gion district",
      "arashiyama bamboo grove",
    ],
  },
  {
    name: "Osaka",
    description:
      "A vibrant port city known for its street food, neon-lit nightlife, and historic landmarks.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    duration: "2-3 days",
    category: "Food & Fun",
    highlights: [
      "dotonbori",
      "osaka castle",
      "universal studios japan",
      "kuromon market",
    ],
  },
  {
    name: "Hiroshima",
    description:
      "A resilient city with moving historical sites and peaceful parks dedicated to remembrance and hope.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    duration: "1-2 days",
    category: "Historic Significance",
    highlights: [
      "peace memorial park",
      "atomic bomb dome",
      "miyajima island",
      "hiroshima castle",
    ],
  },
  {
    name: "Nara",
    description:
      "Famed for its friendly deer and ancient temples, Nara offers a peaceful, historical experience.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.5,
    duration: "1 day",
    category: "Spiritual City",
    highlights: [
      "todaiji temple",
      "nara park",
      "kasuga taisha shrine",
      "naramachi old town",
    ],
  },
  {
    name: "Sapporo",
    description:
      "Capital of Hokkaido, known for winter sports, beer, and the annual snow festival.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    duration: "2-3 days",
    category: "Winter Destination",
    highlights: [
      "sapporo snow festival",
      "odori park",
      "sapporo beer museum",
      "mount moiwa ropeway",
    ],
  },
];

const tokyoAttractions = [
  {
    name: "Fushimi Inari Shrine",
    description:
      "Famous for its thousands of red torii gates that wind through the forested hills of Kyoto",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Mount Fuji",
    description:
      "Japan's iconic snow-capped peak and a popular destination for hikers, photographers, and spiritual seekers",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Arashiyama Bamboo Grove",
    description:
      "A serene and otherworldly bamboo forest in Kyoto, perfect for a peaceful stroll and photos",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Tokyo Skytree",
    description:
      "A towering observation and broadcasting tower in Tokyo offering panoramic city views",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Itsukushima Shrine",
    description:
      "A UNESCO World Heritage Site on Miyajima Island, known for its floating torii gate",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Himeji Castle",
    description:
      "A perfectly preserved feudal-era castle and Japan's finest example of traditional castle architecture",
    image: "/placeholder.svg?height=300&width=400",
  },
];

export default function TokyoPage() {
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
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/70 to-pink-900/70" />
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Japan</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
              Experience the perfect blend of ancient traditions and
              cutting-edge technology in Japan's vibrant capital
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>4.8 Rating</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>Perfect for Culture & Tech</span>
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
              className="bg-white mt-6 text-red-600 hover:bg-gray-100"
            >
              Book Japan Tour
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
              Top Cities in Japan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the fascinating contrasts of Japan, from ancient temples
              to futuristic skyscrapers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tokyoCities.map((city, index) => (
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
                    <Badge className="mb-2 bg-red-600 text-white">
                      {city.category}
                    </Badge>
                    <div className="flex items-center space-x-2 mb-2">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm font-medium text-red-900">
                        {city.rating}
                      </span>
                      <Clock className="h-4 w-4 ml-4 text-red-600" />
                      <span className="text-sm text-red-700">
                        {city.duration}
                      </span>
                    </div>
                    <CardHeader className="p-0 mb-2">
                      <CardTitle className="text-xl text-red-900">
                        {city.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-red-800 mb-4">{city.description}</p>
                      <div className="space-y-2 mb-2">
                        <h4 className="font-semibold text-red-900 flex items-center">
                          <Camera className="h-4 w-4 mr-2 text-red-600" />
                          Highlights
                        </h4>
                        <ul className="list-disc list-inside text-red-700 text-sm">
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
            <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Explore Japan?
              </h3>
              <p className="text-red-100 mb-6 max-w-2xl mx-auto">
                Immerse yourself in Japanese culture and experience the energy
                of one of the world's greatest cities
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-red-600 hover:bg-gray-100"
                >
                  Book Japan Tour
                </Button>
                {/* <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-red-600"
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
              Top Attractions in Japan
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {tokyoAttractions.map((attraction, index) => (
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
            <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Explore Japan?
              </h3>
              <p className="text-red-100 mb-6 max-w-2xl mx-auto">
                Immerse yourself in Japanese culture and experience the energy
                of one of the world's greatest cities
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-red-600 hover:bg-gray-100"
                >
                  Book Japan Tour
                </Button>
                {/* <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-red-600"
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
