"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Clock, Camera, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

const montenegroCities = [
  {
    name: "Kotor",
    description:
      "A UNESCO World Heritage town, Kotor is famed for its medieval old town, dramatic bay, and fortress views.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    duration: "2-3 days",
    category: "Historic Gem",
    highlights: [
      "kotor old town",
      "kotor fortress",
      "bay of kotor",
      "maritime museum",
    ],
  },
  {
    name: "Budva",
    description:
      "Known for its lively beaches, ancient city walls, and vibrant nightlife along the Adriatic coast.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    duration: "2-3 days",
    category: "Beach & Nightlife",
    highlights: [
      "budva old town",
      "mogren beach",
      "citadel",
      "slovenska plaza",
    ],
  },
  {
    name: "Herceg Novi",
    description:
      "A charming coastal town at the entrance to the Bay of Kotor, famous for its fortresses and lush gardens.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    duration: "1-2 days",
    category: "Coastal Beauty",
    highlights: [
      "fortress kanli kula",
      "herceg novi promenade",
      "savina monastery",
      "spanjola fortress",
    ],
  },
  {
    name: "Perast",
    description:
      "A picturesque village with baroque palaces and the iconic Our Lady of the Rocks island church.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    duration: "1 day",
    category: "Scenic Village",
    highlights: [
      "our lady of the rocks",
      "perast museum",
      "st. nicholas church",
      "waterfront promenade",
    ],
  },
  {
    name: "Podgorica",
    description:
      "Montenegro’s capital, offering a mix of modern culture, riverside parks, and Ottoman-era landmarks.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.5,
    duration: "1-2 days",
    category: "Modern Capital",
    highlights: [
      "millennium bridge",
      "clock tower",
      "moraca river",
      "king's park",
    ],
  },
  {
    name: "Cetinje",
    description:
      "The old royal capital, rich in history and culture, surrounded by mountains and national parks.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.5,
    duration: "1 day",
    category: "Royal Heritage",
    highlights: [
      "cetinje monastery",
      "national museum",
      "biljarda",
      "lovćen national park",
    ],
  },
];

const montenegroAttractions = [
  {
    name: "Bay of Kotor",
    description:
      "A breathtaking fjord-like bay surrounded by mountains, dotted with medieval towns and crystal-clear waters.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Our Lady of the Rocks",
    description:
      "A unique island church near Perast, built on an artificial islet with fascinating legends and art.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Lovćen National Park",
    description:
      "A mountainous park home to the Mausoleum of Njegoš, panoramic views, and rich biodiversity.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Sveti Stefan",
    description:
      "A world-famous islet and luxury resort, connected to the mainland by a narrow causeway.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Durmitor National Park",
    description:
      "A UNESCO-listed park with glacial lakes, deep canyons, and the Tara River Bridge—perfect for hiking and rafting.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Ostrog Monastery",
    description:
      "A dramatic Orthodox monastery built into a sheer cliff, attracting pilgrims from around the world.",
    image: "/placeholder.svg?height=300&width=400",
  },
];

export default function MontenegroPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Montenegro</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Montenegro awaits with its stunning Adriatic coastline, medieval
              towns, and breathtaking mountain landscapes.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>4.9 Rating</span>
              </div>
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
              Book Montenegro Tour
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
              Cities in Montenegro
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover Montenegro’s most beautiful cities and towns, each
              offering unique history, culture, and natural wonders.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {montenegroCities.map((city, index) => (
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
                    {/* <Badge className="mb-2 bg-gray-800 text-white">
                      {city.category}
                    </Badge>
                    <div className="flex items-center space-x-2 mb-2">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm font-medium text-gray-900">
                        {city.rating}
                      </span> */}
                    {/* <Clock className="h-4 w-4 ml-4 text-gray-800" />
                      <span className="text-sm text-gray-700">
                        {city.duration}
                      </span> */}
                    {/* </div> */}
                    <CardHeader className="p-0 mb-2">
                      <CardTitle className="text-xl text-gray-900">
                        {city.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-gray-800 mb-4">{city.description}</p>
                      <div className="space-y-2 mb-2">
                        <h4 className="font-semibold text-gray-900 flex items-center">
                          <Camera className="h-4 w-4 mr-2 text-gray-800" />
                          Highlights
                        </h4>
                        <ul className="list-disc list-inside text-gray-700 text-sm">
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
                Ready to Explore Montenegro?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Book your Montenegro adventure today and experience the magic of
                the Adriatic, ancient towns, and stunning national parks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  Book Montenegro Tour
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Tourist Attractions Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-9 mt-14"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tourist Attractions in Montenegro
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {montenegroAttractions.map((attraction, index) => (
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
                    <CardTitle className="text-xl text-gray-900 first-letter:uppercase">
                      {attraction.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-800 mb-2">
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
                Ready to Explore Montenegro?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Book your Montenegro adventure today and experience the magic of
                the Adriatic, ancient towns, and world-class nature.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  Book Montenegro Tour
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
