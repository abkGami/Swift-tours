// VietnamPage.tsx

"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Clock, Camera, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

const vietnamCities = [
  {
    name: "Hanoi",
    description:
      "Vietnam's capital known for its centuries-old architecture and rich Southeast Asian, Chinese and French influences.",
    image: "/images/hanoi.jpg",
    rating: 4.8,
    duration: "3-4 days",
    category: "Cultural Hub",
    highlights: [
      "old quarter",
      "hoan kiem lake",
      "temple of literature",
      "street food tour",
    ],
  },
  {
    name: "Ho Chi Minh City",
    description:
      "Vibrant southern city famous for its history, bustling markets, and modern skyscrapers.",
    image: "/images/hcmc.jpg",
    rating: 4.7,
    duration: "2-3 days",
    category: "Urban Energy",
    highlights: [
      "cu chi tunnels",
      "ben thanh market",
      "war remnants museum",
      "notre-dame cathedral basilica",
    ],
  },
  {
    name: "Da Nang",
    description:
      "A coastal city known for sandy beaches, history, and the Marble Mountains.",
    image: "/images/danang.jpg",
    rating: 4.6,
    duration: "2-3 days",
    category: "Beach Escape",
    highlights: [
      "golden bridge",
      "my khe beach",
      "marble mountains",
      "dragon bridge",
    ],
  },
];

const vietnamAttractions = [
  {
    name: "Ha Long Bay",
    description:
      "A UNESCO World Heritage site known for emerald waters and thousands of towering limestone islands.",
    image: "/images/halong.jpg",
  },
  {
    name: "Phong Nha Caves",
    description:
      "Stunning caves located in Phong Nha-Ke Bang National Park, one of the world's largest cave systems.",
    image: "/images/phongnha.jpg",
  },
  {
    name: "Hoi An",
    description:
      "Charming ancient town with preserved architecture, lantern-lit streets, and tailor shops.",
    image: "/images/hoian.jpg",
  },
  {
    name: "Sapa",
    description:
      "Mountain town known for trekking, terraced rice fields, and ethnic minority culture.",
    image: "/images/sapa.jpg",
  },
];

export default function VietnamPage() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/contact");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-lime-50">
      <Navigation />

      <section className="pt-24 pb-10 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/halong.jpg"
            alt="Vietnam"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-yellow-800/70" />
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Vietnam</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Discover breathtaking nature, vibrant cities, and timeless
              traditions across Vietnam.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>4.8 Rating</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>Perfect for Nature & Culture</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Best: March - May & September - November</span>
              </div>
            </div>

            <Button
              onClick={handleClick}
              variant="secondary"
              size="lg"
              className="bg-white mt-6 text-green-700 hover:bg-gray-100"
            >
              Book Vietnam Tour
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
              Top Cities in Vietnam
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore Vietnam's diverse landscapes and cultures through its most
              iconic cities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vietnamCities.map((attraction, index) => (
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <Badge className="absolute top-3 right-3 bg-green-700 text-white">
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
                        <Camera className="h-4 w-4 mr-2 text-green-700" />
                        Highlights
                      </h4>
                      <div className="grid grid-cols-1 gap-1">
                        {attraction.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="text-sm text-gray-600 flex items-center"
                          >
                            <div className="w-1.5 h-1.5 bg-green-700 rounded-full mr-2" />
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
              Top Attractions in Vietnam
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {vietnamAttractions.map((attraction, index) => (
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
            <div className="bg-gradient-to-r from-green-700 to-lime-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Explore Vietnam?
              </h3>
              <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                Dive into Vietnam's wonders — from limestone bays to lantern-lit
                towns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-green-700 hover:bg-gray-100"
                >
                  Book Vietnam Tour
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
