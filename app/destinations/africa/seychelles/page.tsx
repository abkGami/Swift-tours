"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Clock, Camera, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

// Seychelles cities/islands
const seychellesCities = [
  {
    name: "Mahé",
    description:
      "The largest island and cultural heart of Seychelles, home to the capital Victoria, beautiful beaches, and lush mountains.",
    image: "/seychelles/mahe.jpg",
    rating: 4.9,
    duration: "3-4 days",
    category: "Island Capital",
    highlights: [
      "beau vallon beach",
      "morne seychellois national park",
      "victoria market",
      "anse major trail",
    ],
  },
  {
    name: "Praslin",
    description:
      "A paradise island known for its stunning beaches and the UNESCO-listed Vallée de Mai, home to the rare coco de mer palm.",
    image: "/seychelles/praslin.jpg",
    rating: 4.8,
    duration: "2-3 days",
    category: "Nature & Relaxation",
    highlights: [
      "anse lazio",
      "vallée de mai",
      "anse georgette",
      "cote d'or beach",
    ],
  },
  {
    name: "La Digue",
    description:
      "A tranquil island famous for its granite boulders, cycling culture, and the world-renowned Anse Source d’Argent beach.",
    image: "/seychelles/ladigue.jpg",
    rating: 4.8,
    duration: "2-3 days",
    category: "Scenic Escape",
    highlights: [
      "anse source d'argent",
      "grand anse",
      "l'union estate",
      "veuve nature reserve",
    ],
  },
  {
    name: "Silhouette Island",
    description:
      "A pristine, mountainous island with untouched rainforests, rare wildlife, and secluded luxury resorts.",
    image: "/seychelles/silhouette.jpg",
    rating: 4.7,
    duration: "1-2 days",
    category: "Wild Nature",
    highlights: [
      "silhouette national park",
      "anse la passe",
      "giant tortoises",
      "mount daunier",
    ],
  },
  {
    name: "Fregate Island",
    description:
      "An exclusive private island sanctuary, renowned for its conservation efforts and ultra-luxury eco-resort.",
    image: "/seychelles/fregate.jpg",
    rating: 4.7,
    duration: "1-2 days",
    category: "Private Luxury",
    highlights: [
      "private beaches",
      "nature walks",
      "giant aldabra tortoises",
      "eco luxury villas",
    ],
  },
  {
    name: "Cousin Island",
    description:
      "A small granitic island and nature reserve, famous for birdwatching and conservation of rare species.",
    image: "/seychelles/cousin.jpg",
    rating: 4.6,
    duration: "Half-day",
    category: "Wildlife Reserve",
    highlights: [
      "bird sanctuary",
      "hawksbill turtles",
      "guided nature tours",
      "pristine beaches",
    ],
  },
];

const seychellesAttractions = [
  {
    name: "Anse Source d’Argent",
    description:
      "One of the world’s most photographed beaches, famous for its pink sand, turquoise water, and dramatic granite boulders.",
    image: "/seychelles/anse-source-dargent.jpg",
  },
  {
    name: "Vallée de Mai",
    description:
      "A UNESCO World Heritage Site on Praslin, home to the legendary coco de mer palm and rare black parrots.",
    image: "/seychelles/vallee-de-mai.jpg",
  },
  {
    name: "Aldabra Atoll",
    description:
      "The world’s largest raised coral atoll, a UNESCO site and sanctuary for giant tortoises and unique marine life.",
    image: "/seychelles/aldabra.jpg",
  },
  {
    name: "Beau Vallon Beach",
    description:
      "A lively and scenic beach on Mahé, perfect for swimming, water sports, and sunset views.",
    image: "/seychelles/beau-vallon.jpg",
  },
  {
    name: "Curieuse Island",
    description:
      "A protected island near Praslin, known for its red earth, giant tortoises, and mangrove forests.",
    image: "/seychelles/curieuse.jpg",
  },
  {
    name: "Victoria Market",
    description:
      "The bustling heart of Seychelles’ capital, offering local produce, spices, crafts, and a taste of Creole culture.",
    image: "/seychelles/victoria-market.jpg",
  },
];

export default function SeychellesPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Seychelles</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
              Discover Seychelles’ idyllic islands, crystal-clear waters, unique
              wildlife, and world-class beaches.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>4.9 Rating</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>Perfect for Honeymoon & Nature</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Best in April–May & October–November</span>
              </div>
            </div>

            <Button
              onClick={handleClick}
              variant="secondary"
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 mt-6"
            >
              Book Seychelles Tour
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Top Islands to Visit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seychellesCities.map((city, idx) => (
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
            {seychellesAttractions.map((attraction) => (
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
