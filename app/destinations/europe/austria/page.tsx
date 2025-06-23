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
    name: "Vienna",
    description:
      "Austria's elegant capital, famed for its imperial palaces, classical music heritage, and vibrant coffeehouse culture.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    duration: "3-4 days",
    category: "Cultural Capital",
    highlights: [
      "schönbrunn palace",
      "st. stephen's cathedral",
      "belvedere museum",
      "vienna state opera",
    ],
  },
  {
    name: "Salzburg",
    description:
      "A baroque city nestled by the Alps, known as Mozart’s birthplace and the setting for The Sound of Music.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    duration: "2-3 days",
    category: "Musical Heritage",
    highlights: [
      "hohensalzburg fortress",
      "mirabell palace",
      "mozart's birthplace",
      "getreidegasse",
    ],
  },
  {
    name: "Innsbruck",
    description:
      "A picturesque alpine city popular for skiing, winter sports, and stunning mountain views.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    duration: "2-3 days",
    category: "Alpine Adventure",
    highlights: [
      "goldenes dachl (golden roof)",
      "nordkette cable car",
      "ambras castle",
      "olympic ski jump",
    ],
  },
  {
    name: "Graz",
    description:
      "Austria’s second-largest city, known for its blend of Renaissance architecture, modern design, and lively student scene.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.5,
    duration: "1-2 days",
    category: "Design & Innovation",
    highlights: [
      "schlossberg hill",
      "kunsthaus graz",
      "historic old town",
      "eggenberg palace",
    ],
  },
  {
    name: "Linz",
    description:
      "A city along the Danube with a vibrant arts and tech scene, combining industrial roots with modern creativity.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.4,
    duration: "1-2 days",
    category: "Creative Hub",
    highlights: [
      "ars electronica center",
      "linz castle museum",
      "hauptplatz",
      "pöstlingberg tram",
    ],
  },
  {
    name: "Hallstatt",
    description:
      "A postcard-perfect lakeside village known for its charming houses, salt mine, and breathtaking Alpine scenery.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    duration: "1 day",
    category: "Scenic Escape",
    highlights: [
      "hallstatt lake",
      "world heritage viewpoint",
      "salt mine",
      "bone house (beinhaus)",
    ],
  },
];

const parisAttractions = [
  {
    name: "Schönbrunn Palace",
    description:
      "A grand baroque palace in Vienna, once the summer residence of the Habsburg monarchs",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Hohensalzburg Fortress",
    description:
      "One of Europe’s largest medieval castles, offering panoramic views over Salzburg",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Hallstatt Village",
    description:
      "A picturesque lakeside village known for its historic charm and Alpine beauty",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Belvedere Palace",
    description:
      "An elegant baroque complex in Vienna housing a renowned art collection including works by Klimt",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Grossglockner High Alpine Road",
    description:
      "A scenic mountain road through the Austrian Alps offering stunning views of Grossglockner, Austria’s highest peak",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Melk Abbey",
    description:
      "A magnificent Benedictine abbey overlooking the Danube River, known for its baroque architecture",
    image: "/placeholder.svg?height=300&width=400",
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Austria</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Austria awaits with its breathtaking landmarks, world-class
              museums, and enchanting atmosphere.
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
              Book Austria Tour
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
              Cities in Austria
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the most iconic landmarks and hidden gems that make
              Austria a top destination for travelers worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {franceCities.map((city, index) => (
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

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Explore Austria?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Book your Austria adventure today and experience the magic of
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
                  Book Austria Tour
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
              Tourist Attractions in Austria
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
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Explore Austria?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Book your Austria adventure today and experience the magic of
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
                  Book Austria Tour
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
