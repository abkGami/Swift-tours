"use client"

import { motion } from "framer-motion"
import { MapPin, Star, Clock, Users, Calendar, Waves } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useRouter } from "next/navigation"

const baliAttractions = [
  {
    name: "Ubud Rice Terraces",
    description: "UNESCO World Heritage rice paddies with stunning views",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    duration: "Half day",
    category: "Natural Wonder",
    highlights: ["Jatiluwih Terraces", "Traditional Farming", "Photography"],
  },
  {
    name: "Tanah Lot Temple",
    description: "Iconic sea temple perched on a rocky outcrop",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    duration: "2-3 hours",
    category: "Temple",
    highlights: ["Sunset Views", "Ocean Waves", "Hindu Architecture"],
  },
  {
    name: "Monkey Forest Sanctuary",
    description: "Sacred forest home to hundreds of Balinese macaques",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.5,
    duration: "1-2 hours",
    category: "Wildlife",
    highlights: ["Sacred Monkeys", "Ancient Temples", "Forest Walks"],
  },
  {
    name: "Mount Batur Sunrise Trek",
    description: "Active volcano with spectacular sunrise views",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    duration: "6-8 hours",
    category: "Adventure",
    highlights: ["Sunrise Views", "Volcanic Crater", "Hot Springs"],
  },
  {
    name: "Seminyak Beach",
    description: "Trendy beach with luxury resorts and beach clubs",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    duration: "Full day",
    category: "Beach",
    highlights: ["Beach Clubs", "Surfing", "Luxury Resorts"],
  },
  {
    name: "Uluwatu Temple",
    description: "Clifftop temple with traditional Kecak fire dance",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    duration: "3-4 hours",
    category: "Temple",
    highlights: ["Cliff Views", "Kecak Dance", "Ocean Sunset"],
  },
]

export default function BaliPage() {

  const router = useRouter()

  const handleClick = () => {
    router.push('/contact')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-10 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/placeholder.svg?height=600&width=1200" alt="Bali" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-emerald-900/70" />
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Bali, Indonesia</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Discover the Island of the Gods with its pristine beaches, ancient temples, and spiritual wellness
              retreats
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>4.7 Rating</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>7-10 Days Recommended</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>Perfect for Wellness & Beach</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Best: April - October</span>
              </div>
            </div>

            <Button variant="secondary" size="lg" className="mt-6 bg-white text-green-600 hover:bg-gray-100">
                  Book Bali Tour
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Tropical Paradise Awaits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the magic of Bali through its stunning landscapes, rich culture, and spiritual traditions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {baliAttractions.map((attraction, index) => (
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
                    <Badge className="absolute top-3 right-3 bg-green-600 text-white">{attraction.category}</Badge>
                    <div className="absolute bottom-3 left-3 text-white">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400" />
                        <span className="text-sm font-medium">{attraction.rating}</span>
                      </div>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">{attraction.name}</CardTitle>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">{attraction.duration}</span>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-600 mb-4">{attraction.description}</p>

                    <div className="space-y-2 mb-6">
                      <h4 className="font-semibold text-gray-900 flex items-center">
                        <Waves className="h-4 w-4 mr-2 text-green-600" />
                        Highlights
                      </h4>
                      <div className="grid grid-cols-1 gap-1">
                        {attraction.highlights.map((highlight) => (
                          <div key={highlight} className="text-sm text-gray-600 flex items-center">
                            <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* <Button className="w-full bg-green-600 hover:bg-green-700">Add to Itinerary</Button> */}
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
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready for Bali Bliss?</h3>
              <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                Escape to paradise and experience the perfect blend of relaxation, adventure, and spiritual renewal
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  Book Bali Tour
                </Button>
                {/* <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-green-600"
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
  )
}
