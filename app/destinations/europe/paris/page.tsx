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
    name: "Paris",
    description:
      "The city of lights, known for its iconic Eiffel Tower, art museums, and romantic ambiance.",
    rating: 4.8,
    duration: "3-4 days",
    category: "Cultural Capital",
    highlights: [
      "eiffel tower",
      "louvre museum",
      "notre-dame cathedral",
      "montmartre",
    ],
  },
  {
    name: "Bordeaux",
    description:
      "Famous for its wine, Bordeaux offers stunning architecture and a vibrant cultural scene.",
    rating: 4.7,
    duration: "2-3 days",
    category: "Wine Region",
    highlights: [
      "place de la bourse",
      "cité du vin",
      "bordeaux cathedral",
      "pont de pierre",
    ],
  },
  {
    name: "Lyon",
    description:
      "Known for its historical and architectural landmarks, Lyon is a UNESCO World Heritage Site.",
    rating: 4.6,
    duration: "2-3 days",
    category: "Historical City",
    highlights: [
      "basilica of notre-dame de fourvière",
      "old lyon",
      "traboules",
      "lyon cathedral",
    ],
  },
  {
    name: "Nice",
    description:
      "A beautiful coastal city on the French Riviera, known for its beaches and vibrant nightlife.",
    rating: 4.5,
    duration: "2-3 days",
    category: "Coastal City",
    highlights: [
      "promenade des anglais",
      "castle hill",
      "matisse museum",
      "old town",
    ],
  },
  {
    name: "Marseille",
    description:
      "A port city in southern France, known for its maritime heritage and multicultural atmosphere.",
    rating: 4.4,
    duration: "2-3 days",
    category: "Port City",
    highlights: [
      "old port",
      "notre-dame de la garde",
      "calanques national park",
      "mucem",
    ],
  },
  {
    name: "Strasbourg",
    description:
      "A city with a unique blend of French and German cultures, known for its medieval architecture.",
    rating: 4.6,
    duration: "2-3 days",
    category: "Cultural City",
    highlights: [
      "strasbourg cathedral",
      "petite france",
      "european parliament",
      "palais rohan",
    ],
  },
  {
    name: "Toulouse",
    description:
      "Known as the 'Pink City' due to its terracotta buildings, Toulouse is a hub for aerospace industry.",
    rating: 4.5,
    duration: "2-3 days",
    category: "Industrial City",
    highlights: [
      "capitole de toulouse",
      "basilica of saint-sernin",
      "cité de l'espace",
      "pont neuf",
    ],
  },
  {
    name: "Lille",
    description:
      "A vibrant city with a rich history, known for its beautiful architecture and lively cultural scene.",
    rating: 4.4,
    duration: "2-3 days",
    category: "Cultural City",
    highlights: [
      "grand place",
      "palais des beaux-arts",
      "old stock exchange",
      "lille citadel",
    ],
  },
  {
    name: "Nantes",
    description:
      "A city with a rich maritime history, known for its innovative art installations and green spaces.",
    rating: 4.5,
    duration: "2-3 days",
    category: "Artistic City",
    highlights: [
      "machines of the isle of nantes",
      "château des ducs de bretagne",
      "jardin des plantes",
      "passage pommeraye",
    ],
  },
  {
    name: "Montpellier",
    description:
      "A vibrant city with a mix of medieval and modern architecture, known for its lively student population.",
    rating: 4.5,
    duration: "2-3 days",
    category: "University City",
    highlights: [
      "place de la comédie",
      "fabre museum",
      "saint-pierre cathedral",
      "montpellier zoo",
    ],
  },
  {
    name: "Dijon",
    description:
      "Famous for its mustard, Dijon is a city with a rich history and beautiful medieval architecture.",
    rating: 4.4,
    duration: "2-3 days",
    category: "Gastronomic City",
    highlights: [
      "palace of the dukes",
      "dijon cathedral",
      "musée des beaux-arts",
      "rue des forges",
    ],
  },
  {
    name: "French Alps",
    description:
      "A stunning mountain range offering breathtaking views and a variety of outdoor activities.",
    rating: 4.9,
    duration: "3-5 days",
    category: "Mountain Region",
    highlights: ["mont blanc", "chamonix", "annecy", "megeve"],
  },
];

const parisAttractions = [
  {
    name: "Eiffel Tower",
    description: "Iconic iron lattice tower and symbol of Paris",
  },
  {
    name: "Louvre Museum",
    description: "World's largest art museum and home to the Mona Lisa",
  },
  {
    name: "Mont Saint-Michel",
    description:
      "Stunning island commune with a medieval abbey off the Normandy coast",
  },
  {
    name: "Palace of Versailles",
    description:
      "Lavish royal palace known for its gardens and Hall of Mirrors",
  },
  {
    name: "Château de Chambord",
    description:
      "Renaissance castle in the Loire Valley, famous for its distinctive French architecture",
  },
  {
    name: "French Riviera (Côte d'Azur)",
    description:
      "Glamorous Mediterranean coastline known for beaches, resorts, and festivals",
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">France</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              France awaits with its breathtaking landmarks, world-class
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
              Book France Tour
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
              Cities in France
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the most iconic landmarks and hidden gems that make France
              a top destination for travelers worldwide.
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
                    <Badge className="mb-2 bg-blue-600 text-white">
                      {city.category}
                    </Badge>
                    <div className="flex items-center space-x-2 mb-2">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm font-medium text-blue-900">
                        {city.rating}
                      </span>
                      <Clock className="h-4 w-4 ml-4 text-blue-600" />
                      <span className="text-sm text-blue-700">
                        {city.duration}
                      </span>
                    </div>
                    <CardHeader className="p-0 mb-2">
                      <CardTitle className="text-xl text-blue-900">
                        {city.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-blue-800 mb-4">{city.description}</p>
                      <div className="space-y-2 mb-2">
                        <h4 className="font-semibold text-blue-900 flex items-center">
                          <Camera className="h-4 w-4 mr-2 text-blue-600" />
                          Highlights
                        </h4>
                        <ul className="list-disc list-inside text-blue-700 text-sm">
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
                Ready to Explore France?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Book your France adventure today and experience the magic of the
                destination with breathtaking landmarks and world-class museum
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  Book France Tour
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
              Tourist Attractions in France
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
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Explore France?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Book your France adventure today and experience the magic of the
                destination with breathtaking landmarks and world-class museum
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  Book France Tour
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
