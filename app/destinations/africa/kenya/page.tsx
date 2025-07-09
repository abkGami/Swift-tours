"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Clock, Camera, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

// Kenya cities and destinations
const kenyaCities = [
  {
    name: "Nairobi",
    description:
      "Kenya's vibrant capital city, a dynamic hub blending modern culture with wildlife experiences like Nairobi National Park.",
    image: "/kenya/nairobi.jpg",
    rating: 4.8,
    duration: "2-3 days",
    category: "Urban & Wildlife Gateway",
    highlights: [
      "nairobi national park",
      "giraffe centre",
      "david sheldrick wildlife trust",
      "karen blixen museum",
    ],
  },
  {
    name: "Mombasa",
    description:
      "A historic port city on the Indian Ocean, famous for its white-sand beaches, Swahili culture, and ancient forts.",
    image: "/kenya/mombasa.jpg",
    rating: 4.7,
    duration: "3-4 days",
    category: "Coastal Heritage",
    highlights: [
      "fort jesus",
      "diani beach",
      "old town",
      "haller park",
    ],
  },
  {
    name: "Maasai Mara",
    description:
      "World-renowned wildlife reserve, home to the Great Migration and the Big Five, offering unforgettable safari experiences.",
    image: "/kenya/maasai-mara.jpg",
    rating: 4.9,
    duration: "2-4 days",
    category: "Safari Destination",
    highlights: [
      "great migration",
      "game drives",
      "hot air balloon safari",
      "maasai village visit",
    ],
  },
  {
    name: "Diani Beach",
    description:
      "A tropical paradise with powdery white sand, turquoise waters, and a laid-back atmosphere perfect for relaxation and water sports.",
    image: "/kenya/diani.jpg",
    rating: 4.8,
    duration: "2-4 days",
    category: "Beach Paradise",
    highlights: [
      "snorkeling",
      "colobus conservation",
      "kitesurfing",
      "shimba hills national reserve",
    ],
  },
  {
    name: "Lake Nakuru",
    description:
      "A scenic lake in the Rift Valley, famous for its flamingos, rhinos, and diverse birdlife within Lake Nakuru National Park.",
    image: "/kenya/lake-nakuru.jpg",
    rating: 4.6,
    duration: "1-2 days",
    category: "Wildlife & Birdwatching",
    highlights: [
      "flamingo watching",
      "rhino sanctuary",
      "baboon cliff",
      "makalia falls",
    ],
  },
  {
    name: "Lamu",
    description:
      "A UNESCO World Heritage town on the northern coast, known for its preserved Swahili architecture and tranquil island life.",
    image: "/kenya/lamu.jpg",
    rating: 4.7,
    duration: "2-3 days",
    category: "Cultural Island",
    highlights: [
      "lamu old town",
      "donkey sanctuary",
      "lamu museum",
      "manda island",
    ],
  },
];

const kenyaAttractions = [
  {
    name: "Maasai Mara National Reserve",
    description:
      "Kenya's premier safari destination, famous for the Great Migration, abundant wildlife, and stunning savannah landscapes.",
    image: "/kenya/maasai-mara-attraction.jpg",
  },
  {
    name: "Amboseli National Park",
    description:
      "Renowned for its large elephant herds and breathtaking views of Mount Kilimanjaro, Africa's highest peak.",
    image: "/kenya/amboseli.jpg",
  },
  {
    name: "Diani Beach",
    description:
      "Award-winning beach on the Indian Ocean, ideal for swimming, snorkeling, and relaxing under palm trees.",
    image: "/kenya/diani-attraction.jpg",
  },
  {
    name: "Lake Nakuru National Park",
    description:
      "A haven for birdwatchers and wildlife lovers, famous for its flamingos, rhinos, and scenic viewpoints.",
    image: "/kenya/lake-nakuru-attraction.jpg",
  },
  {
    name: "Mount Kenya",
    description:
      "Africa's second-highest mountain, offering trekking, climbing, and breathtaking alpine scenery.",
    image: "/kenya/mount-kenya.jpg",
  },
  {
    name: "Lamu Old Town",
    description:
      "A UNESCO World Heritage Site, this ancient Swahili town is rich in culture, history, and unique architecture.",
    image: "/kenya/lamu-attraction.jpg",
  },
];

export default function KenyaPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Kenya</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
              Experience Kenya's breathtaking safaris, vibrant cities, pristine
              beaches, and rich cultural heritage.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>4.9 Rating</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>Perfect for Safaris & Adventure</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Best in July–October & January–March</span>
              </div>
            </div>

            <Button
              onClick={handleClick}
              variant="secondary"
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 mt-6"
            >
              Book Kenya Tour
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
            {kenyaCities.map((city, idx) => (
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
            {kenyaAttractions.map((attraction) => (
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
