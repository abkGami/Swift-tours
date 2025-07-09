"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Clock, Camera, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

const southAfricaCities = [
  {
    name: "Cape Town",
    description:
      "A vibrant city nestled between mountains and sea, famous for Table Mountain, Robben Island, and stunning beaches.",
    image: "/south-africa/cape-town.jpg",
    rating: 4.9,
    duration: "3-5 days",
    category: "Scenic City",
    highlights: [
      "table mountain",
      "v&a waterfront",
      "robben island",
      "boulders beach penguins",
    ],
  },
  {
    name: "Johannesburg",
    description:
      "South Africa’s largest city, a dynamic metropolis known for its history, culture, and vibrant urban life.",
    image: "/south-africa/johannesburg.jpg",
    rating: 4.7,
    duration: "2-3 days",
    category: "Urban & Heritage",
    highlights: [
      "apartheid museum",
      "mandela house",
      "maboneng precinct",
      "gold reef city",
    ],
  },
  {
    name: "Durban",
    description:
      "A coastal city with golden beaches, a warm subtropical climate, and a unique blend of Zulu, Indian, and colonial influences.",
    image: "/south-africa/durban.jpg",
    rating: 4.7,
    duration: "2-4 days",
    category: "Beach & Culture",
    highlights: [
      "umhlanga rocks",
      "golden mile",
      "ushaka marine world",
      "indian quarter",
    ],
  },
  {
    name: "Kruger National Park",
    description:
      "One of Africa’s largest game reserves, renowned for its Big Five safaris and diverse wildlife experiences.",
    image: "/south-africa/kruger.jpg",
    rating: 4.9,
    duration: "2-4 days",
    category: "Safari Destination",
    highlights: [
      "big five safari",
      "panorama route",
      "guided bush walks",
      "birdwatching",
    ],
  },
  {
    name: "Garden Route",
    description:
      "A breathtaking stretch of coastline with forests, lagoons, and adventure activities, perfect for road trips.",
    image: "/south-africa/garden-route.jpg",
    rating: 4.8,
    duration: "3-5 days",
    category: "Road Trip & Nature",
    highlights: [
      "knysna heads",
      "tsitsikamma national park",
      "plettenberg bay",
      "stormsrivier bridge",
    ],
  },
  {
    name: "Stellenbosch",
    description:
      "A charming university town in the heart of wine country, known for its Cape Dutch architecture and vineyards.",
    image: "/south-africa/stellenbosch.jpg",
    rating: 4.7,
    duration: "1-2 days",
    category: "Wine & Culture",
    highlights: [
      "wine tasting",
      "historic town center",
      "jonkershoek nature reserve",
      "art galleries",
    ],
  },
];

const southAfricaAttractions = [
  {
    name: "Table Mountain",
    description:
      "An iconic flat-topped mountain offering panoramic views of Cape Town and the Atlantic Ocean. Accessible by cable car or hiking.",
    image: "/south-africa/table-mountain.jpg",
  },
  {
    name: "Kruger National Park",
    description:
      "World-famous for its Big Five safaris, guided bush walks, and diverse wildlife in a vast natural setting.",
    image: "/south-africa/kruger-attraction.jpg",
  },
  {
    name: "Robben Island",
    description:
      "A UNESCO World Heritage Site where Nelson Mandela was imprisoned, now a symbol of freedom and reconciliation.",
    image: "/south-africa/robben-island.jpg",
  },
  {
    name: "Boulders Beach",
    description:
      "A sheltered beach near Simon’s Town, home to a colony of African penguins and crystal-clear waters.",
    image: "/south-africa/boulders-beach.jpg",
  },
  {
    name: "Garden Route",
    description:
      "A scenic drive along South Africa’s southern coast, featuring forests, lagoons, and charming towns.",
    image: "/south-africa/garden-route-attraction.jpg",
  },
  {
    name: "V&A Waterfront",
    description:
      "A lively harbor area in Cape Town with shops, restaurants, entertainment, and views of Table Mountain.",
    image: "/south-africa/va-waterfront.jpg",
  },
];

export default function SouthAfricaPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              South Africa
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
              Explore South Africa’s diverse landscapes, vibrant cities, world-class
              safaris, and rich cultural heritage.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>4.9 Rating</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>Perfect for Adventure & Culture</span>
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
              Book South Africa Tour
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Top Cities & Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {southAfricaCities.map((city, idx) => (
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
            {southAfricaAttractions.map((attraction) => (
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
