"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Clock, Camera, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

const saudiCities = [
  {
    name: "Riyadh",
    description:
      "The vibrant capital, blending modern skyscrapers with rich history and culture.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    duration: "3-4 days",
    category: "Modern Capital",
    highlights: [
      "Kingdom Centre Tower",
      "National Museum",
      "Al Masmak Fortress",
      "Al Murabba Palace",
    ],
  },
  {
    name: "Jeddah",
    description:
      "A cosmopolitan port city on the Red Sea, famous for its waterfront and historic old town.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    duration: "2-3 days",
    category: "Coastal City",
    highlights: [
      "Jeddah Corniche",
      "Al-Balad Historic District",
      "King Fahd Fountain",
      "Floating Mosque",
    ],
  },
  {
    name: "Mecca",
    description:
      "The holiest city in Islam, home to the Grand Mosque and the Kaaba.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    duration: "2-3 days",
    category: "Spiritual Center",
    highlights: ["Masjid al-Haram", "Kaaba", "Abraj Al Bait", "Jabal al-Nour"],
  },
  {
    name: "Medina",
    description:
      "A sacred city with the Prophet's Mosque and tranquil spiritual sites.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    duration: "2-3 days",
    category: "Holy City",
    highlights: [
      "Al-Masjid an-Nabawi",
      "Quba Mosque",
      "Mount Uhud",
      "Qiblatain Mosque",
    ],
  },
  {
    name: "Al-Ula",
    description:
      "A breathtaking desert region with ancient tombs and dramatic rock formations.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    duration: "1-2 days",
    category: "Ancient Wonders",
    highlights: [
      "Hegra (Madain Salih)",
      "Elephant Rock",
      "Al-Ula Old Town",
      "Jabal Ikmah",
    ],
  },
  {
    name: "Abha",
    description:
      "A cool mountain city known for its green landscapes and traditional villages.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    duration: "1-2 days",
    category: "Mountain Retreat",
    highlights: [
      "Asir National Park",
      "Al-Soudah Park",
      "Habala Village",
      "Shada Palace",
    ],
  },
];

const saudiAttractions = [
  {
    name: "Masjid al-Haram",
    description:
      "The largest mosque in the world, surrounding Islam’s holiest site, the Kaaba, in Mecca.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Al-Masjid an-Nabawi",
    description:
      "The Prophet's Mosque in Medina, a major Islamic pilgrimage site.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Hegra (Madain Salih)",
    description:
      "A UNESCO World Heritage Site with ancient Nabatean tombs carved into sandstone outcrops.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Kingdom Centre Tower",
    description:
      "An iconic skyscraper in Riyadh with a sky bridge offering panoramic city views.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Al-Balad Historic District",
    description:
      "Jeddah’s UNESCO-listed old town, known for its coral houses and vibrant souks.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Edge of the World",
    description:
      "A dramatic geological wonder with sweeping desert views near Riyadh.",
    image: "/placeholder.svg?height=300&width=400",
  },
];

export default function SaudiArabiaPage() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/contact");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-10 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/placeholder.svg?height=600&width=1200"
            alt="Saudi Arabia"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/70 to-orange-900/70" />
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Saudi Arabia
            </h1>
            <p className="text-xl text-yellow-100 max-w-3xl mx-auto mb-8">
              Discover Saudi Arabia: a land of ancient wonders, spiritual
              journeys, and modern marvels in the heart of the Arabian
              Peninsula.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>4.8 Rating</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>Perfect for Heritage & Adventure</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Best: October – April</span>
              </div>
            </div>

            <Button
              onClick={handleClick}
              variant="secondary"
              size="lg"
              className="bg-white mt-6 text-yellow-700 hover:bg-gray-100"
            >
              Book Saudi Arabia Tour
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
              Top Cities in Saudi Arabia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the spiritual, historic, and modern cities of Saudi
              Arabia, from Riyadh’s towers to the ancient tombs of Al-Ula.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {saudiCities.map((city, index) => (
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

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-yellow-700 to-orange-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Explore Saudi Arabia?
              </h3>
              <p className="text-yellow-100 mb-6 max-w-2xl mx-auto">
                Experience the heritage, adventure, and spirituality of Saudi
                Arabia with a custom tour.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-yellow-700 hover:bg-gray-100"
                >
                  Book Saudi Arabia Tour
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
              Top Attractions in Saudi Arabia
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {saudiAttractions.map((attraction, index) => (
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
            <div className="bg-gradient-to-r from-yellow-700 to-orange-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Explore Saudi Arabia?
              </h3>
              <p className="text-yellow-100 mb-6 max-w-2xl mx-auto">
                Experience the heritage, adventure, and spirituality of Saudi
                Arabia with a custom tour.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-yellow-700 hover:bg-gray-100"
                >
                  Book Saudi Arabia Tour
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
