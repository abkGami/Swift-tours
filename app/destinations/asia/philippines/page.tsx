// PhilippinesPage.tsx

"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Clock, Camera, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

const philippinesCities = [
  {
    name: "Manila",
    description:
      "The capital city offering a mix of Spanish colonial architecture and modern skyscrapers.",
    image: "/images/manila.jpg",
    rating: 4.6,
    duration: "2-3 days",
    category: "Historical Capital",
    highlights: [
      "intramuros",
      "rizal park",
      "manila ocean park",
      "national museum",
    ],
  },
  {
    name: "Cebu",
    description:
      "A top destination for heritage landmarks, white sand beaches, and diving adventures.",
    image: "/images/cebu.jpg",
    rating: 4.7,
    duration: "3-4 days",
    category: "Heritage & Beach",
    highlights: [
      "magellan's cross",
      "kawasan falls",
      "oslob whale sharks",
      "fort san pedro",
    ],
  },
  {
    name: "Davao",
    description:
      "A laid-back city known for durian, Mount Apo, and cultural diversity.",
    image: "/images/davao.jpg",
    rating: 4.5,
    duration: "2-3 days",
    category: "Nature & Culture",
    highlights: [
      "philippine eagle center",
      "eden nature park",
      "crocodile park",
      "mount apo",
    ],
  },
  {
    name: "Boracay",
    description:
      "A tropical island paradise famous for its powdery white sand beaches and nightlife.",
    image: "/images/boracay.jpg",
    rating: 4.8,
    duration: "3-5 days",
    category: "Island Escape",
    highlights: [
      "white beach",
      "puka shell beach",
      "bulabog beach",
      "willy's rock",
    ],
  },
];

const philippinesAttractions = [
  {
    name: "Chocolate Hills",
    description: "A unique geological formation of over 1,000 hills in Bohol.",
    image: "/images/chocolatehills.jpg",
  },
  {
    name: "Taal Volcano",
    description: "An active volcano set in a picturesque lake in Batangas.",
    image: "/images/taal.jpg",
  },
  {
    name: "Puerto Princesa Underground River",
    description:
      "A UNESCO site with a navigable subterranean river in Palawan.",
    image: "/images/undergroundriver.jpg",
  },
  {
    name: "Mayon Volcano",
    description: "Renowned for its perfect cone shape and natural beauty.",
    image: "/images/mayon.jpg",
  },
  {
    name: "Banaue Rice Terraces",
    description: "2,000-year-old terraces carved into the mountains of Ifugao.",
    image: "/images/banaue.jpg",
  },
];

export default function PhilippinesPage() {
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
            src="/images/philippines.jpg"
            alt="Philippines"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/70 to-yellow-900/70" />
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Philippines</h1>
            <p className="text-xl text-yellow-100 max-w-3xl mx-auto mb-8">
              A tropical archipelago of over 7,000 islands, bursting with
              natural beauty and warm hospitality.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>4.8 Rating</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>Perfect for Beach & Culture</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Best: December to May</span>
              </div>
            </div>

            <Button
              onClick={handleClick}
              variant="secondary"
              size="lg"
              className="bg-white mt-6 text-orange-600 hover:bg-gray-100"
            >
              Book Philippines Tour
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
              Top Cities in the Philippines
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the best of Philippine urban culture and island life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {philippinesCities.map((attraction, index) => (
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <Badge className="absolute top-3 right-3 bg-orange-600 text-white">
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
                        <Camera className="h-4 w-4 mr-2 text-orange-600" />
                        Highlights
                      </h4>
                      <div className="grid grid-cols-1 gap-1">
                        {attraction.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="text-sm text-gray-600 flex items-center"
                          >
                            <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2" />
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
              Top Attractions in the Philippines
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {philippinesAttractions.map((attraction, index) => (
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

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-orange-600 to-yellow-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Explore the Philippines?
              </h3>
              <p className="text-yellow-100 mb-6 max-w-2xl mx-auto">
                Book your island-hopping adventure today and discover paradise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100"
                >
                  Book Philippines Tour
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
