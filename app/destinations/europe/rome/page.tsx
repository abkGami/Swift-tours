"use client"

import { motion } from "framer-motion"
import { MapPin, Star, Clock, Camera, Users, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const romeAttractions = [
  {
    name: "Colosseum",
    description: "Ancient amphitheater and iconic symbol of Imperial Rome",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    duration: "2-3 hours",
    category: "Historical Site",
    highlights: ["Gladiator Arena", "Underground Chambers", "Audio Guide"],
  },
  {
    name: "Vatican City",
    description: "Papal enclave with Sistine Chapel and St. Peter's Basilica",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    duration: "4-6 hours",
    category: "Religious Site",
    highlights: ["Sistine Chapel", "St. Peter's Basilica", "Vatican Museums"],
  },
  {
    name: "Roman Forum",
    description: "Ancient Roman public square with ruins and temples",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    duration: "2-3 hours",
    category: "Archaeological Site",
    highlights: ["Temple of Caesar", "Arch of Titus", "House of Vestal Virgins"],
  },
  {
    name: "Trevi Fountain",
    description: "Baroque fountain famous for coin-throwing tradition",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    duration: "30 minutes",
    category: "Landmark",
    highlights: ["Coin Throwing", "Neptune Statue", "Night Illumination"],
  },
  {
    name: "Pantheon",
    description: "Ancient Roman temple with impressive dome architecture",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    duration: "1 hour",
    category: "Historical Site",
    highlights: ["Dome Architecture", "Oculus", "Raphael's Tomb"],
  },
  {
    name: "Trastevere",
    description: "Charming neighborhood with cobblestone streets and nightlife",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    duration: "3-4 hours",
    category: "District",
    highlights: ["Local Restaurants", "Santa Maria Church", "Nightlife"],
  },
]

export default function RomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/placeholder.svg?height=600&width=1200" alt="Rome" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/70 to-red-900/70" />
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Rome, Italy</h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
              The Eternal City awaits with its ancient history, magnificent architecture, and timeless charm
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>4.8 Rating</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>4-6 Days Recommended</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>Perfect for History Lovers</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Best: Spring & Fall</span>
              </div>
            </div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Ancient Wonders of Rome</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the magnificent ruins and timeless treasures that make Rome an eternal destination
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {romeAttractions.map((attraction, index) => (
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
                    <Badge className="absolute top-3 right-3 bg-orange-600 text-white">{attraction.category}</Badge>
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
                        <Camera className="h-4 w-4 mr-2 text-orange-600" />
                        Highlights
                      </h4>
                      <div className="grid grid-cols-1 gap-1">
                        {attraction.highlights.map((highlight) => (
                          <div key={highlight} className="text-sm text-gray-600 flex items-center">
                            <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full bg-orange-600 hover:bg-orange-700">Add to Itinerary</Button>
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
            <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Explore Rome?</h3>
              <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
                Discover the eternal city with our expert guides and experience the magic of ancient Rome
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                  Book Rome Tour - From $1,199
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-orange-600"
                >
                  Customize Itinerary
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
