"use client"

import { motion } from "framer-motion"
import { MapPin, Star, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"

const destinations = [
  {
    region: "Europe",
    description: "Discover the rich history, stunning architecture, and diverse cultures of Europe",
    image: "/placeholder.svg?height=400&width=600",
    color: "from-blue-500 to-purple-600",
    destinations: [
      {
        name: "Paris, France",
        description: "Iconic landmarks like the Eiffel Tower and Louvre Museum",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4.9,
        duration: "5-7 days",
        price: "From $1,299",
        highlights: ["Eiffel Tower", "Louvre Museum", "Seine River Cruise"],
        href: "/destinations/europe/paris",
      },
      {
        name: "Rome, Italy",
        description: "Colosseum, Vatican City, and historic neighborhoods",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4.8,
        duration: "4-6 days",
        price: "From $1,199",
        highlights: ["Colosseum", "Vatican City", "Trastevere"],
        href: "/destinations/europe/rome",
      },
      {
        name: "Swiss Alps, Switzerland",
        description: "Year-round outdoor adventures and luxury resorts",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4.9,
        duration: "6-8 days",
        price: "From $2,499",
        highlights: ["Matterhorn", "Jungfraujoch", "Luxury Resorts"],
        href: "/destinations/europe/swiss-alps",
      },
      {
        name: "Monaco",
        description: "Sustainable luxury, casinos, and Mediterranean charm",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4.9,
        duration: "3-4 days",
        price: "From $1,899",
        highlights: ["Monte Carlo", "Prince's Palace", "Mediterranean Views"],
        href: "/destinations/europe/monaco",
      },
    ],
  },
  {
    region: "Asia",
    description: "Experience the exotic beauty, ancient traditions, and modern marvels of Asia",
    image: "/placeholder.svg?height=400&width=600",
    color: "from-orange-500 to-red-600",
    destinations: [
      {
        name: "Tokyo, Japan",
        description: "Blend of futuristic tech and traditional temples",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4.8,
        duration: "6-8 days",
        price: "From $1,799",
        highlights: ["Shibuya Crossing", "Senso-ji Temple", "Mount Fuji"],
        href: "/destinations/asia/tokyo",
      },
      {
        name: "Bali, Indonesia",
        description: "Beaches, yoga retreats, and cultural ceremonies",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4.7,
        duration: "7-10 days",
        price: "From $999",
        highlights: ["Ubud Rice Terraces", "Beach Resorts", "Cultural Tours"],
        href: "/destinations/asia/bali",
      },
      {
        name: "Maldives",
        description: "Overwater bungalows and coral reefs",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4.9,
        duration: "5-7 days",
        price: "From $2,999",
        highlights: ["Overwater Villas", "Coral Reefs", "Spa Treatments"],
        href: "/destinations/asia/maldives",
      },
      {
        name: "Bhutan",
        description: "Remote Himalayan treks and Tiger's Nest Monastery",
        image: "/placeholder.svg?height=300&width=400",
        rating: 4.8,
        duration: "8-10 days",
        price: "From $2,199",
        highlights: ["Tiger's Nest", "Himalayan Treks", "Buddhist Culture"],
        href: "/destinations/asia/bhutan",
      },
    ],
  },
]

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Amazing Destinations</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Explore breathtaking destinations across Europe and Asia with our curated travel experiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Destinations Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {destinations.map((region, regionIndex) => (
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
                  <h2 className="text-4xl font-bold text-gray-900">{region.region}</h2>
                </div>
                <p className="text-xl text-gray-600 mb-8">{region.description}</p>
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <img
                    src={region.image || "/placeholder.svg"}
                    alt={region.region}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${region.color} opacity-60`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-3xl font-bold text-white">Explore {region.region}</h3>
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
                        <div className="relative overflow-hidden">
                          <img
                            src={destination.image || "/placeholder.svg"}
                            alt={destination.name}
                            className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                          <Badge className="absolute top-3 right-3 bg-white/90 text-gray-900">
                            {destination.price}
                          </Badge>
                        </div>

                        <CardHeader>
                          <CardTitle className="text-lg">{destination.name}</CardTitle>
                          <div className="flex items-center justify-between text-sm text-gray-600">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-400 mr-1" />
                              {destination.rating}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {destination.duration}
                            </div>
                          </div>
                        </CardHeader>

                        <CardContent>
                          <p className="text-gray-600 mb-4">{destination.description}</p>
                          <div className="flex flex-wrap gap-1 mb-4">
                            {destination.highlights.map((highlight) => (
                              <Badge key={highlight} variant="secondary" className="text-xs">
                                {highlight}
                              </Badge>
                            ))}
                          </div>
                          <Button className="w-full bg-blue-600 hover:bg-blue-700">Explore Destination</Button>
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
  )
}
