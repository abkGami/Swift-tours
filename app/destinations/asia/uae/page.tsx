"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Clock, Camera, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

const uaeCities = [
  {
    name: "Dubai",
    description:
      "A global city famous for its futuristic skyline, luxury shopping, and vibrant nightlife.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    duration: "3-5 days",
    category: "Modern Marvel",
    highlights: [
      "Burj Khalifa",
      "Palm Jumeirah",
      "Dubai Mall",
      "Desert Safari",
    ],
  },
  {
    name: "Abu Dhabi",
    description:
      "The capital of the UAE, known for its grand mosques, cultural landmarks, and beautiful waterfront.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    duration: "2-3 days",
    category: "Cultural Capital",
    highlights: [
      "Sheikh Zayed Grand Mosque",
      "Louvre Abu Dhabi",
      "Corniche",
      "Emirates Palace",
    ],
  },
  {
    name: "Sharjah",
    description:
      "A center of art and heritage, offering museums, souks, and a rich cultural experience.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    duration: "1-2 days",
    category: "Heritage Hub",
    highlights: [
      "Sharjah Museum of Islamic Civilization",
      "Al Noor Mosque",
      "Blue Souk",
      "Al Majaz Waterfront",
    ],
  },
  {
    name: "Ras Al Khaimah",
    description:
      "Known for its stunning mountains, adventure sports, and relaxing beaches.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.5,
    duration: "1-2 days",
    category: "Adventure & Nature",
    highlights: [
      "Jebel Jais",
      "Dhayah Fort",
      "Al Hamra Beach",
      "National Museum",
    ],
  },
  {
    name: "Fujairah",
    description:
      "A coastal emirate with beautiful beaches, historic forts, and scenic mountains.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.4,
    duration: "1-2 days",
    category: "Coastal Escape",
    highlights: [
      "Al Bidyah Mosque",
      "Fujairah Fort",
      "Snoopy Island",
      "Ain Al Madhab Gardens",
    ],
  },
  {
    name: "Al Ain",
    description:
      "A lush oasis city with ancient sites, gardens, and a UNESCO World Heritage status.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.5,
    duration: "1-2 days",
    category: "Oasis City",
    highlights: [
      "Al Ain Oasis",
      "Jebel Hafeet",
      "Al Ain Zoo",
      "Al Jahili Fort",
    ],
  },
];

const uaeAttractions = [
  {
    name: "Burj Khalifa",
    description:
      "The tallest building in the world, offering breathtaking views of Dubai from its observation decks.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Sheikh Zayed Grand Mosque",
    description:
      "A stunning architectural masterpiece and one of the largest mosques in the world, located in Abu Dhabi.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Palm Jumeirah",
    description:
      "An iconic man-made island in the shape of a palm tree, home to luxury resorts and attractions.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Louvre Abu Dhabi",
    description:
      "A world-class art and civilization museum with a striking modern design.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Dubai Mall",
    description:
      "One of the world's largest shopping malls, featuring an aquarium, ice rink, and endless entertainment.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Desert Safari",
    description:
      "An unforgettable adventure across the golden dunes, with camel rides, sandboarding, and cultural shows.",
    image: "/placeholder.svg?height=300&width=400",
  },
];

export default function UaePage() {
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
              United Arab Emirates
            </h1>
            <p className="text-xl text-yellow-100 max-w-3xl mx-auto mb-8">
              Discover the UAE: a land of futuristic skylines, luxury, and
              adventure in the heart of the Middle East.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>4.8 Rating</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>Perfect for Luxury & Adventure</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Best: November – March</span>
              </div>
            </div>

            <Button
              onClick={handleClick}
              variant="secondary"
              size="lg"
              className="bg-white mt-6 text-yellow-700 hover:bg-gray-100"
            >
              Book UAE Tour
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
              Top Cities in the UAE
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the dazzling cities of the UAE, from the iconic
              skyscrapers of Dubai to the cultural treasures of Abu Dhabi.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uaeCities.map((city, index) => (
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <Badge className="absolute top-3 right-3 bg-yellow-600 text-white">
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
                        <Camera className="h-4 w-4 mr-2 text-yellow-600" />
                        Highlights
                      </h4>
                      <div className="grid grid-cols-1 gap-1">
                        {city.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="text-sm text-gray-600 flex items-center"
                          >
                            <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mr-2" />
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
            <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Explore the UAE?
              </h3>
              <p className="text-yellow-100 mb-6 max-w-2xl mx-auto">
                Experience the luxury, adventure, and culture of the United Arab
                Emirates with a custom tour.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-yellow-700 hover:bg-gray-100"
                >
                  Book UAE Tour
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
              Top Attractions in the UAE
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {uaeAttractions.map((attraction, index) => (
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
            <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Explore the UAE?
              </h3>
              <p className="text-yellow-100 mb-6 max-w-2xl mx-auto">
                Experience the luxury, adventure, and culture of the United Arab
                Emirates with a custom tour.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-yellow-700 hover:bg-gray-100"
                >
                  Book UAE Tour
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
