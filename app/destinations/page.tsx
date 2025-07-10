"use client";

import { motion } from "framer-motion";
import { MapPin, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Link from "next/link";

// Mock data for every country you have a file for, grouped by continent
const destinations = [
  {
    region: "Europe",
    description:
      "Discover the rich history, stunning architecture, and diverse cultures of Europe",
    image: "/placeholder.svg?height=400&width=600",
    color: "from-blue-500 to-purple-600",
    destinations: [
      {
        name: "France",
        description: "Iconic landmarks like the Eiffel Tower and Louvre Museum",
        rating: 4.9,
        highlights: ["Eiffel Tower", "Louvre Museum", "Seine River Cruise"],
        href: "/destinations/europe/paris",
      },
      {
        name: "Italy",
        description: "Ancient ruins and world-class cuisine",
        rating: 4.9,
        highlights: ["Colosseum", "Vatican City", "Trevi Fountain"],
        href: "/destinations/europe/rome",
      },
      {
        name: "Portugal",
        description: "Colorful streets and scenic river views",
        rating: 4.7,
        highlights: ["Belém Tower", "Alfama District", "Tram 28"],
        href: "/destinations/europe/portugal",
      },
      {
        name: "Montenegro",
        description:
          "Stunning Adriatic coastline, medieval towns, and breathtaking mountain landscapes",
        rating: 4.8,
        highlights: [
          "Bay of Kotor",
          "Kotor Old Town",
          "Sveti Stefan",
          "Durmitor National Park",
        ],
        href: "/destinations/europe/montenegro",
      },
      {
        name: "United Kingdom",
        description:
          "Historic castles, royal palaces, and vibrant city life in London and beyond",
        rating: 4.8,
        highlights: ["Buckingham Palace", "Tower of London", "Big Ben"],
        href: "/destinations/europe/england",
      },

      {
        name: "Spain",
        description:
          "Famous for vibrant cities, unique architecture, and beautiful Mediterranean beaches",
        rating: 4.8,
        highlights: ["Sagrada Familia", "Park Güell", "La Rambla"],
        href: "/destinations/europe/spain",
      },

      {
        name: "Greece",
        description:
          "Ancient ruins, stunning islands, and a blend of rich history and modern culture",
        rating: 4.7,
        highlights: ["Acropolis", "Santorini", "Delphi"],
        href: "/destinations/europe/greece",
      },

      {
        name: "Malta",
        description:
          "Stunning coastal nation with medieval cities and crystal-clear waters",
        rating: 4.8,
        highlights: ["Mdina Old City", "Blue Lagoon", "Valletta Waterfront"],
        href: "/destinations/europe/dubrovnik",
      },

      {
        name: "Sweden",
        description:
          "Modern design, beautiful archipelagos, and vibrant Nordic culture",
        rating: 4.7,
        highlights: ["Gamla Stan", "Vasa Museum", "Stockholm Archipelago"],
        href: "/destinations/europe/sweden",
      },

      {
        name: "Switzerland",
        description:
          "Alpine scenery, luxury resorts, and world-class chocolate",
        rating: 4.8,
        highlights: ["Matterhorn", "Lake Geneva", "Jungfraujoch"],
        href: "/destinations/europe/switzerland",
      },

      {
        name: "Croatia",
        description:
          "Adriatic coastline, historic cities, and beautiful national parks",
        rating: 4.8,
        highlights: [
          "Dubrovnik Old Town",
          "Plitvice Lakes",
          "Diocletian's Palace",
        ],
        href: "/destinations/europe/croatia",
      },

      {
        name: "Austria",
        description: "Imperial palaces, classical music, and alpine landscapes",
        rating: 4.8,
        highlights: [
          "Schönbrunn Palace",
          "St. Stephen's Cathedral",
          "Vienna State Opera",
        ],
        href: "/destinations/europe/austria",
      },
      {
        name: "Iceland",
        description:
          "Land of glaciers, volcanoes, waterfalls, and the magical northern lights",
        rating: 4.8,
        highlights: ["Blue Lagoon", "Golden Circle", "Northern Lights"],
        href: "/destinations/europe/iceland",
      },
    ],
  },
  {
    region: "Asia",
    description:
      "Experience the exotic beauty, ancient traditions, and modern marvels of Asia",
    image: "/placeholder.svg?height=400&width=600",
    color: "from-orange-500 to-red-600",
    destinations: [
      {
        name: "Japan",
        description: "Blend of futuristic tech and traditional temples",
        rating: 4.8,
        highlights: ["Shibuya Crossing", "Senso-ji Temple", "Mount Fuji"],
        href: "/destinations/asia/tokyo",
      },
      {
        name: "Mongolia",
        description: "Vast steppes, nomadic culture, and unique landscapes",
        rating: 4.7,
        highlights: ["Gobi Desert", "Terelj National Park", "Ulaanbaatar"],
        href: "/destinations/asia/mongolia",
      },
      {
        name: "Maldives",
        description: "Overwater bungalows and coral reefs",
        rating: 4.9,
        highlights: ["Overwater Villas", "Coral Reefs", "Spa Treatments"],
        href: "/destinations/asia/maldives",
      },
      {
        name: "Bhutan",
        description: "Remote Himalayan treks and Tiger's Nest Monastery",
        rating: 4.8,
        highlights: ["Tiger's Nest", "Himalayan Treks", "Buddhist Culture"],
        href: "/destinations/asia/bhutan",
      },
      {
        name: "Thailand",
        description: "Bustling city with vibrant street life and temples",
        rating: 4.7,
        highlights: ["Grand Palace", "Floating Markets", "Wat Arun"],
        href: "/destinations/asia/thailand",
      },
      {
        name: "Uzbekistan",
        description:
          "Silk Road cities, blue-tiled mosques, and ancient history",
        rating: 4.8,
        highlights: ["Registan", "Bukhara", "Khiva"],
        href: "/destinations/asia/uzbekistan",
      },
      {
        name: "Singapore",
        description: "Futuristic cityscape and multicultural cuisine",
        rating: 4.8,
        highlights: [
          "Marina Bay Sands",
          "Gardens by the Bay",
          "Sentosa Island",
        ],
        href: "/destinations/asia/singapore",
      },
      {
        name: "Kazakhstan",
        description: "Modern cities, steppe landscapes, and nomadic heritage",
        rating: 4.9,
        highlights: ["Astana", "Charyn Canyon", "Almaty"],
        href: "/destinations/asia/kazakhstan",
      },
      {
        name: "Vietnam",
        description: "Lush landscapes, vibrant cities, and rich history",
        rating: 4.9,
        highlights: ["Ha Long Bay", "Hanoi Old Quarter", "Hoi An"],
        href: "/destinations/asia/vietnam",
      },
      {
        name: "Philippines",
        description:
          "Tropical islands, white sand beaches, and friendly locals",
        rating: 4.9,
        highlights: ["Palawan", "Boracay", "Chocolate Hills"],
        href: "/destinations/asia/istanphilippinesbul",
      },
      {
        name: "UAE",
        description:
          "Futuristic skylines, desert adventures, and world-class attractions in Dubai and Abu Dhabi",
        rating: 4.8,
        highlights: [
          "Burj Khalifa",
          "Sheikh Zayed Grand Mosque",
          "Desert Safari",
        ],
        href: "/destinations/asia/uae",
      },
      {
        name: "Saudi Arabia",
        description:
          "Ancient heritage, vibrant cities, and the gateway to Mecca and Medina",
        rating: 4.8,
        highlights: ["Al Masjid al-Haram", "Al-Ula", "Edge of the World"],
        href: "/destinations/asia/saudi-arabia",
      },
    ],
  },
  {
    region: "Africa",
    description:
      "Embark on a journey through Africa's diverse landscapes and vibrant cultures",
    image: "/placeholder.svg?height=400&width=600",
    color: "from-green-600 to-yellow-500",
    destinations: [
      {
        name: "Morocco",
        description: "Exotic souks and stunning palaces",
        rating: 4.7,
        highlights: ["Jemaa el-Fnaa", "Majorelle Garden", "Koutoubia Mosque"],
        href: "/destinations/africa/morocco",
      },
      {
        name: "Egypt",
        description: "Ancient wonders and bustling bazaars",
        rating: 4.8,
        highlights: ["Pyramids of Giza", "Egyptian Museum", "Khan el-Khalili"],
        href: "/destinations/africa/egypt",
      },
      {
        name: "Kenya",
        description: "World-famous safaris, Maasai Mara, and beautiful beaches",
        rating: 4.9,
        highlights: ["Maasai Mara", "Diani Beach", "Nairobi National Park"],
        href: "/destinations/africa/kenya",
      },
      {
        name: "South Africa",
        description: "Diverse wildlife, Table Mountain, and vibrant Cape Town",
        rating: 4.9,
        highlights: ["Table Mountain", "Kruger Park", "Cape Town Waterfront"],
        href: "/destinations/africa/south-africa",
      },
      {
        name: "Seychelles",
        description: "Idyllic islands, turquoise waters, and unique wildlife",
        rating: 4.8,
        highlights: ["Anse Source d’Argent", "Vallée de Mai", "La Digue"],
        href: "/destinations/africa/seychelles",
      },
      {
        name: "Tanzania",
        description: "Legendary Serengeti, Zanzibar beaches, and Kilimanjaro",
        rating: 4.9,
        highlights: ["Serengeti", "Zanzibar", "Mount Kilimanjaro"],
        href: "/destinations/africa/tanzania",
      },
      {
        name: "Tunisia",
        description: "Mediterranean beaches, ancient ruins, and desert oases",
        rating: 4.8,
        highlights: ["El Jem Amphitheatre", "Medina of Tunis", "Sahara Desert"],
        href: "/destinations/africa/tunisia",
      },
    ],
  },
  {
    region: "South America",
    description:
      "Vibrant cities, natural wonders, and ancient civilizations await in South America",
    image: "/placeholder.svg?height=400&width=600",
    color: "from-yellow-500 to-red-600",
    destinations: [
      {
        name: "Brazil",
        description:
          "Famous for its vibrant culture, iconic landmarks, and breathtaking natural beauty",
        rating: 4.9,
        highlights: [
          "Christ the Redeemer",
          "Copacabana Beach",
          "Sugarloaf Mountain",
        ],
        href: "/destinations/southAmerica/brazil",
      },
      {
        name: "Argentina",
        description:
          "Home of tango, delicious cuisine, and stunning landscapes from Patagonia to Iguazu Falls",
        rating: 4.8,
        highlights: ["La Boca", "Recoleta", "Teatro Colón"],
        href: "/destinations/southAmerica/argetina",
      },
      {
        name: "Peru",
        description:
          "Gateway to Machu Picchu, ancient Incan history, and the Andes mountains",
        rating: 4.9,
        highlights: ["Machu Picchu", "Sacsayhuamán", "Sacred Valley"],
        href: "/destinations/southAmerica/peru",
      },
      {
        name: "Colombia",
        description:
          "Lush coffee regions, colonial cities, and Caribbean beaches",
        rating: 4.7,
        highlights: [
          "Old Town Cartagena",
          "Castillo San Felipe",
          "Rosario Islands",
        ],
        href: "/destinations/southAmerica/colombia",
      },
      {
        name: "Chile",
        description:
          "Dramatic landscapes from the Atacama Desert to Patagonia and vibrant Santiago",
        rating: 4.7,
        highlights: ["Torres del Paine", "Atacama Desert", "Valparaíso"],
        href: "/destinations/southAmerica/chile",
      },
      {
        name: "Ecuador",
        description:
          "Home to the Galápagos Islands, Andean peaks, and rich indigenous culture",
        rating: 4.7,
        highlights: ["Galápagos Islands", "Quito Old Town", "Cotopaxi Volcano"],
        href: "/destinations/southAmerica/ecuador",
      },
      {
        name: "Uruguay",
        description:
          "Charming colonial towns, Atlantic beaches, and vibrant Montevideo",
        rating: 4.7,
        highlights: [
          "Colonia del Sacramento",
          "Punta del Este",
          "Montevideo Rambla",
        ],
        href: "/destinations/southAmerica/uruguay",
      },
      {
        name: "Bolivia",
        description:
          "High-altitude adventures, salt flats, and colorful indigenous traditions",
        rating: 4.7,
        highlights: ["Salar de Uyuni", "La Paz", "Lake Titicaca"],
        href: "/destinations/southAmerica/bolivia",
      },
      {
        name: "Venezuela",
        description: "Angel Falls, Caribbean coastline, and diverse wildlife",
        rating: 4.7,
        highlights: [
          "Angel Falls",
          "Mérida Cable Car",
          "Los Roques Archipelago",
        ],
        href: "/destinations/southAmerica/venezuela",
      },
    ],
  },
];

// --- RENDERING CODE ---

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Amazing Destinations
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Explore breathtaking destinations across the world with our
              curated travel experiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Destinations Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {destinations.map((region) => (
            <div key={region.region} className="mb-20">
              {/* Region Header */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <div className="flex items-center mb-6">
                  <MapPin className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-4xl font-bold text-gray-900">
                    {region.region}
                  </h2>
                </div>
                <p className="text-xl text-gray-600 mb-8">
                  {region.description}
                </p>
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  {/* <img
                    src={region.image || "/placeholder.svg"}
                    alt={region.region}
                    className="w-full h-full object-cover"
                  /> */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${region.color} opacity-60`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-3xl font-bold text-white">
                      Explore {region.region}
                    </h3>
                  </div>
                </div>
              </motion.div>

              {/* Destinations Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {region.destinations.map((destination, index) => (
                  <motion.div
                    key={destination.name}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                  >
                    <Link href={destination.href}>
                      <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg cursor-pointer">
                        <CardHeader>
                          <CardTitle className="text-lg">
                            {destination.name}
                          </CardTitle>
                          <div className="flex items-center text-sm text-gray-600">
                            <Star className="h-4 w-4 text-yellow-400 mr-1" />
                            {destination.rating}
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 mb-4">
                            {destination.description}
                          </p>
                          <div className="flex flex-wrap gap-1 mb-4">
                            {destination.highlights.map((highlight) => (
                              <Badge
                                key={highlight}
                                variant="secondary"
                                className="text-xs"
                              >
                                {highlight}
                              </Badge>
                            ))}
                          </div>
                          <Button className="w-full bg-blue-600 hover:bg-blue-700">
                            Explore Destination
                          </Button>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
