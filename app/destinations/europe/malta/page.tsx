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
    name: "Valletta",
    description:
      "The capital of Malta, a UNESCO World Heritage Site filled with Baroque architecture, historic forts, and grand cathedrals.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    duration: "2-3 days",
    category: "Historic Capital",
    highlights: [
      "st. john's co-cathedral",
      "upper barrakka gardens",
      "grand harbour",
      "national war museum",
    ],
  },
  {
    name: "Mdina",
    description:
      "A fortified medieval city known as the 'Silent City', offering narrow alleys, stunning views, and timeless charm.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    duration: "1-2 days",
    category: "Medieval Town",
    highlights: [
      "mdina gate",
      "st. paul’s cathedral",
      "palazzo falson",
      "city walls",
    ],
  },
  {
    name: "Sliema",
    description:
      "A bustling seaside town known for shopping, dining, and a lively promenade with views of Valletta.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.5,
    duration: "1-2 days",
    category: "Modern Coastal City",
    highlights: [
      "the strand promenade",
      "tigné point",
      "sliema ferries",
      "coastal walks",
    ],
  },
  {
    name: "St. Julian's",
    description:
      "A vibrant coastal town famous for nightlife, luxury hotels, and picturesque bays.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    duration: "1-2 days",
    category: "Entertainment Hub",
    highlights: [
      "paceville nightlife",
      "spinola bay",
      "portomaso marina",
      "balluta bay",
    ],
  },
  {
    name: "Rabat",
    description:
      "Adjacent to Mdina, Rabat is known for its catacombs, ancient churches, and Roman heritage.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.4,
    duration: "1 day",
    category: "Historical Village",
    highlights: [
      "st. paul’s catacombs",
      "domus romana",
      "st. agatha's crypt",
      "howard gardens",
    ],
  },
  {
    name: "Marsaxlokk",
    description:
      "A traditional fishing village famous for colorful boats, Sunday markets, and fresh seafood.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.5,
    duration: "Half-day to 1 day",
    category: "Seaside Village",
    highlights: [
      "luzzu fishing boats",
      "sunday fish market",
      "st. peter’s pool",
      "waterfront dining",
    ],
  },
];

const parisAttractions = [
  {
    name: "St. John's Co-Cathedral",
    description:
      "A stunning Baroque cathedral in Valletta, adorned with gold and Caravaggio's masterpieces",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Blue Lagoon",
    description:
      "A crystal-clear turquoise bay on Comino Island, perfect for swimming and snorkeling",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Mdina",
    description:
      "A medieval walled city known as the 'Silent City', filled with narrow streets and historic charm",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Ħal Saflieni Hypogeum",
    description:
      "A prehistoric underground burial site dating back over 5,000 years, a UNESCO World Heritage Site",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Upper Barrakka Gardens",
    description:
      "A beautiful public garden in Valletta offering panoramic views of the Grand Harbour",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Marsaxlokk Fishing Village",
    description:
      "A traditional village known for colorful boats, seafood markets, and a relaxed seaside vibe",
    image: "/placeholder.svg?height=300&width=400",
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
          <img
            src="/placeholder.svg?height=600&width=1200"
            alt="Paris"
            className="w-full h-full object-cover"
          />
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Malta</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Malta awaits with its ancient wonders, crystal-clear waters, and
              captivating Mediterranean charm.
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
              Book Malta Tour
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
              Cities in Malta
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the most iconic landmarks and hidden gems that make Malta
              a top destination for travelers worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {franceCities.map((attraction, index) => (
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
                    <Badge className="absolute top-3 right-3 bg-blue-600 text-white">
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
                        <Camera className="h-4 w-4 mr-2 text-blue-600" />
                        Highlights
                      </h4>
                      <div className="grid grid-cols-1 gap-1">
                        {attraction.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="text-sm text-gray-600 flex items-center"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Add to Itinerary
                    </Button> */}
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
                Ready to Explore Malta?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Book your Malta adventure today and experience the magic of the
                islands with historic landmarks and stunning coastal beauty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  Book Malta Tour
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
              Tourist Attractions in Malta
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
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg">
                  <div className="relative overflow-hidden">
                    <img
                      src={attraction.image || "/placeholder.svg"}
                      alt={attraction.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900 first-letter:uppercase">
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
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Explore Malta?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Book your Malta adventure today and experience the magic of the
                islands with historic landmarks and stunning coastal beauty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  Book Malta Tour
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
