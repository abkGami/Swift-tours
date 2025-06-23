"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Clock, Camera, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

const uzbekistanCities = [
  {
    name: "Samarkand",
    description:
      "Ancient Silk Road city with stunning Islamic architecture and historical significance.",
    image: "/images/samarkand.jpg",
    rating: 4.8,
    duration: "2-3 days",
    category: "Historic Hub",
    highlights: [
      "registan square",
      "gur-e-amir mausoleum",
      "bibi-khanym mosque",
      "shah-i-zinda complex",
    ],
  },
  {
    name: "Bukhara",
    description:
      "A city-museum full of madrasahs, minarets, and centuries-old buildings.",
    image: "/images/bukhara.jpg",
    rating: 4.7,
    duration: "2-3 days",
    category: "Cultural Gem",
    highlights: [
      "ark fortress",
      "kalyan minaret",
      "lyabi-hauz plaza",
      "chor minor",
    ],
  },
  {
    name: "Khiva",
    description:
      "A living open-air museum with well-preserved city walls and old town charm.",
    image: "/images/khiva.jpg",
    rating: 4.6,
    duration: "1-2 days",
    category: "UNESCO Site",
    highlights: [
      "itchan kala",
      "kukhna ark",
      "islam khoja minaret",
      "tosh hovli palace",
    ],
  },
];

const uzbekistanAttractions = [
  {
    name: "Registan Square",
    description:
      "A majestic public square flanked by three grand madrasahs in Samarkand.",
    image: "/images/registan.jpg",
  },
  {
    name: "Shah-i-Zinda",
    description: "A necropolis featuring a stunning avenue of mausoleums.",
    image: "/images/shahizinda.jpg",
  },
  {
    name: "Ark Fortress",
    description:
      "Ancient fortress and royal residence in Bukhara with sweeping views.",
    image: "/images/ark.jpg",
  },
  {
    name: "Itchan Kala",
    description:
      "The walled inner town of Khiva, packed with historical architecture.",
    image: "/images/itchankala.jpg",
  },
  {
    name: "Bibi-Khanym Mosque",
    description:
      "Once one of the largest mosques in the Islamic world, now a captivating ruin.",
    image: "/images/bibikhanym.jpg",
  },
];

export default function UzbekistanPage() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/contact");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50">
      <Navigation />

      <section className="pt-24 pb-10 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/samarkand.jpg"
            alt="Uzbekistan"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-800/70 to-orange-900/70" />
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
              <span className="text-xl">Central Asia</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Uzbekistan</h1>
            <p className="text-xl text-yellow-100 max-w-3xl mx-auto mb-8">
              Journey into the heart of the Silk Road where ancient cities and
              cultural riches await.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>4.7 Rating</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>Perfect for History & Exploration</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Best: Spring & Autumn</span>
              </div>
            </div>

            <Button
              onClick={handleClick}
              variant="secondary"
              size="lg"
              className="bg-white mt-6 text-yellow-700 hover:bg-gray-100"
            >
              Book Uzbekistan Tour
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Top Cities in Uzbekistan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From legendary trading centers to architectural marvels, uncover
              the magic of Uzbekistan.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uzbekistanCities.map((city, index) => (
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
                    <Badge className="absolute top-3 right-3 bg-yellow-700 text-white">
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
                        <Camera className="h-4 w-4 mr-2 text-yellow-700" />
                        Highlights
                      </h4>
                      <div className="grid grid-cols-1 gap-1">
                        {city.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="text-sm text-gray-600 flex items-center"
                          >
                            <div className="w-1.5 h-1.5 bg-yellow-700 rounded-full mr-2" />
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

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-9 mt-14"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Top Attractions in Uzbekistan
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {uzbekistanAttractions.map((attraction, index) => (
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

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-yellow-700 to-orange-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Explore Uzbekistan?
              </h3>
              <p className="text-yellow-100 mb-6 max-w-2xl mx-auto">
                Step into history and marvel at the wonders of the Silk Road
                cities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-yellow-700 hover:bg-gray-100"
                >
                  Book Uzbekistan Tour
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
