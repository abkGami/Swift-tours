"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Clock, Camera, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";


const tunisiaCities = [
  {
    name: "Tunis",
    description:
      "Tunisia’s capital, a lively city blending ancient medina, French colonial architecture, and vibrant markets.",
    image: "/tunisia/tunis.jpg",
    rating: 4.7,
    duration: "2-3 days",
    category: "Historic Capital",
    highlights: [
      "medina of tunis",
      "bardo museum",
      "avenue habib bourguiba",
      "zitouna mosque",
    ],
  },
  {
    name: "Sousse",
    description:
      "A coastal city known for its sandy beaches, UNESCO-listed medina, and lively nightlife.",
    image: "/tunisia/sousse.jpg",
    rating: 4.6,
    duration: "2-3 days",
    category: "Beach & Heritage",
    highlights: [
      "sousse medina",
      "ribat of sousse",
      "boujaffar beach",
      "kasbah museum",
    ],
  },
  {
    name: "Djerba",
    description:
      "A picturesque island with whitewashed villages, palm-fringed beaches, and a unique blend of cultures.",
    image: "/tunisia/djerba.jpg",
    rating: 4.8,
    duration: "2-4 days",
    category: "Island Escape",
    highlights: [
      "houmt souk",
      "el ghriba synagogue",
      "guellala museum",
      "djerba explore park",
    ],
  },
  {
    name: "Hammamet",
    description:
      "A popular resort town with golden beaches, a charming medina, and a relaxed Mediterranean vibe.",
    image: "/tunisia/hammamet.jpg",
    rating: 4.5,
    duration: "2-3 days",
    category: "Resort Town",
    highlights: [
      "hammamet beach",
      "kasbah of hammamet",
      "medina",
      "pupput archaeological site",
    ],
  },
  {
    name: "Kairouan",
    description:
      "A UNESCO World Heritage city, considered the fourth holiest city in Islam, famous for its Great Mosque.",
    image: "/tunisia/kairouan.jpg",
    rating: 4.6,
    duration: "1-2 days",
    category: "Spiritual Heritage",
    highlights: [
      "great mosque of kairouan",
      "medina",
      "aghlabid basins",
      "bir barrouta",
    ],
  },
  {
    name: "Tozeur",
    description:
      "An oasis town on the edge of the Sahara, known for its palm groves, desert architecture, and Star Wars film locations.",
    image: "/tunisia/tozeur.jpg",
    rating: 4.5,
    duration: "1-2 days",
    category: "Desert Oasis",
    highlights: [
      "chott el jerid",
      "old town",
      "ong jemel",
      "dar cherait museum",
    ],
  },
];

const tunisiaAttractions = [
  {
    name: "Amphitheatre of El Jem",
    description:
      "A remarkably preserved Roman amphitheatre, one of the largest in the world and a UNESCO World Heritage Site.",
    image: "/tunisia/el-jem.jpg",
  },
  {
    name: "Medina of Tunis",
    description:
      "A labyrinth of narrow streets, bustling souks, and historic mosques, recognized as a UNESCO World Heritage Site.",
    image: "/tunisia/medina-tunis.jpg",
  },
  {
    name: "Carthage",
    description:
      "Ancient ruins overlooking the Mediterranean, once the center of the Carthaginian Empire.",
    image: "/tunisia/carthage.jpg",
  },
  {
    name: "Sidi Bou Said",
    description:
      "A picturesque clifftop village famous for its blue-and-white houses and stunning sea views.",
    image: "/tunisia/sidi-bou-said.jpg",
  },
  {
    name: "Sahara Desert",
    description:
      "Vast sand dunes, camel treks, and unforgettable sunsets in the world’s largest desert.",
    image: "/tunisia/sahara.jpg",
  },
  {
    name: "Kairouan Great Mosque",
    description:
      "One of the most important Islamic sites in North Africa, renowned for its architecture and history.",
    image: "/tunisia/kairouan-mosque.jpg",
  },
];

export default function EgyptPage() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/contact");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-yellow-100">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/70 to-yellow-700/70" />
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
              <span className="text-xl">Africa</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Egypt</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
              Discover Egypt's ancient treasures, timeless deserts, and vibrant
              Nile culture.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>4.9 Rating</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>Perfect for History & Adventure</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Best in Winter & Spring</span>
              </div>
            </div>

            <Button
              onClick={handleClick}
              variant="secondary"
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 mt-6"
            >
              Book Egypt Tour
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Top Cities to Visit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tunisiaCities.map((city, idx) => (
              <motion.div
                key={city.name}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  {/* <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-48 object-cover"
                  /> */}
                  <CardHeader>
                    <CardTitle className="text-xl">{city.name}</CardTitle>
                    <p className="text-sm text-gray-500">{city.category}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2 text-gray-600">{city.description}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      {city.rating} • <Clock className="h-4 w-4 ml-2 mr-1" />
                      {city.duration}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {city.highlights.map((highlight, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-yellow-100 text-yellow-900"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Attractions Section */}
      <section className="py-16 bg-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Top Attractions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tunisiaAttractions.map((attraction) => (
              <motion.div
                key={attraction.name}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  {/* <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-48 object-cover"
                  /> */}
                  <CardHeader>
                    <CardTitle className="text-xl">{attraction.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{attraction.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export function TunisiaPage() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/contact");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/70 to-orange-700/70" />
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
              <span className="text-xl">Africa</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Tunisia</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
              Discover Tunisia’s Mediterranean beaches, ancient ruins, desert oases,
              and vibrant culture.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-orange-400 mr-2" />
                <span>4.8 Rating</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>Perfect for History & Relaxation</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Best in Spring & Autumn</span>
              </div>
            </div>

            <Button
              onClick={handleClick}
              variant="secondary"
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 mt-6"
            >
              Book Tunisia Tour
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Top Cities & Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tunisiaCities.map((city, idx) => (
              <motion.div
                key={city.name}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="text-xl">{city.name}</CardTitle>
                    <p className="text-sm text-gray-500">{city.category}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2 text-gray-600">{city.description}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Star className="h-4 w-4 text-orange-400 mr-1" />
                      {city.rating} • <Clock className="h-4 w-4 ml-2 mr-1" />
                      {city.duration}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {city.highlights.map((highlight, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-orange-100 text-orange-900"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Attractions Section */}
      <section className="py-16 bg-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Top Attractions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tunisiaAttractions.map((attraction) => (
              <motion.div
                key={attraction.name}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="text-xl">{attraction.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{attraction.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
