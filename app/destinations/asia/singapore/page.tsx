// SingaporePage.tsx

"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Clock, Camera, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

const singaporeCities = [
  {
    name: "Singapore",
    description:
      "A futuristic city-state offering world-class attractions, cuisine, and efficiency.",
    image: "/images/singapore.jpg",
    rating: 4.9,
    duration: "3-4 days",
    category: "Smart City",
    highlights: [
      "marina bay sands",
      "gardens by the bay",
      "sentosa island",
      "orchard road",
    ],
  },
];

const singaporeAttractions = [
  {
    name: "Gardens by the Bay",
    description:
      "A futuristic park with towering Supertrees and climate-controlled domes.",
    image: "/images/gardens.jpg",
  },
  {
    name: "Marina Bay Sands",
    description:
      "Iconic hotel and casino with an infinity pool overlooking the skyline.",
    image: "/images/marina.jpg",
  },
  {
    name: "Sentosa Island",
    description:
      "Resort island with beaches, theme parks, and luxury experiences.",
    image: "/images/sentosa.jpg",
  },
  {
    name: "Singapore Zoo",
    description:
      "Award-winning zoo with naturalistic enclosures and night safari.",
    image: "/images/zoo.jpg",
  },
  {
    name: "Chinatown",
    description:
      "Bustling neighborhood with markets, temples, and heritage architecture.",
    image: "/images/chinatown.jpg",
  },
];

export default function SingaporePage() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/contact");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-teal-50">
      <Navigation />

      <section className="pt-24 pb-10 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/singapore.jpg"
            alt="Singapore"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-emerald-900/70" />
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Singapore</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              A city of innovation, harmony, and unforgettable experiences.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>4.9 Rating</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>Perfect for Innovation & Family</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Best: All Year</span>
              </div>
            </div>

            <Button
              onClick={handleClick}
              variant="secondary"
              size="lg"
              className="bg-white mt-6 text-emerald-600 hover:bg-gray-100"
            >
              Book Singapore Tour
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
              Top City in Singapore
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the best of the Lion City — a unique blend of culture,
              nature, and technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {singaporeCities.map((attraction, index) => (
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
                    <Badge className="absolute top-3 right-3 bg-emerald-600 text-white">
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
                        <Camera className="h-4 w-4 mr-2 text-emerald-600" />
                        Highlights
                      </h4>
                      <div className="grid grid-cols-1 gap-1">
                        {attraction.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="text-sm text-gray-600 flex items-center"
                          >
                            <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-2" />
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
              Top Attractions in Singapore
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {singaporeAttractions.map((attraction, index) => (
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
            <div className="bg-gradient-to-r from-emerald-600 to-green-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Explore Singapore?
              </h3>
              <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                Book your adventure to the Lion City — where nature, tech, and
                culture unite.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-emerald-600 hover:bg-gray-100"
                >
                  Book Singapore Tour
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
