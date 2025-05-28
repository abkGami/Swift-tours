"use client"

import { motion } from "framer-motion"
import { Anchor, Users, Star, Waves } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const boats = [
  {
    name: "Bayliner Element E16",
    type: "Family Cruiser",
    capacity: "6-8 people",
    price: "From $299/day",
    image: "/placeholder.svg?height=250&width=400",
    features: ["Spacious storage", "Easy handling", "GPS Navigation", "Safety Equipment"],
    rating: 4.8,
    description: "Perfect for family outings and leisure cruising",
  },
  {
    name: "Tracker Grizzly 1648 SC",
    type: "Aluminum Fishing Boat",
    capacity: "4 people",
    price: "From $199/day",
    image: "/placeholder.svg?height=250&width=400",
    features: ["Durable construction", "VERSATRACK mounting", "Fishing equipment", "Cooler storage"],
    rating: 4.7,
    description: "Ideal for fishing enthusiasts and small groups",
  },
  {
    name: "Mako Pro Skiff 15 CC",
    type: "Saltwater Fishing",
    capacity: "4 people",
    price: "From $349/day",
    image: "/placeholder.svg?height=250&width=400",
    features: ["Composite hull", "Aerated baitwell", "Rod storage", "Marine electronics"],
    rating: 4.9,
    description: "Professional-grade saltwater fishing experience",
  },
  {
    name: "Sun Tracker Party Barge",
    type: "Pontoon Boat",
    capacity: "10-12 people",
    price: "From $449/day",
    image: "/placeholder.svg?height=250&width=400",
    features: ["Bimini top", "Swim platform", "Stereo system", "Comfortable seating"],
    rating: 4.8,
    description: "Perfect for parties and large group entertainment",
  },
  {
    name: "Pro-Line 20 Sport",
    type: "Offshore Fishing",
    capacity: "7 people",
    price: "From $399/day",
    image: "/placeholder.svg?height=250&width=400",
    features: ["Center console", "Rod storage", "Live well", "Offshore capability"],
    rating: 4.9,
    description: "Built for serious offshore fishing adventures",
  },
]

export default function CharteredBoats() {
  return (
    <section id="boats" className="section py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <Anchor className="h-12 w-12 text-blue-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Chartered Boats</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the water with our premium fleet of boats. From family cruisers to professional fishing vessels,
            we have the perfect boat for your adventure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {boats.map((boat, index) => (
            <motion.div
              key={boat.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
                <div className="relative overflow-hidden">
                  <img
                    src={boat.image || "/placeholder.svg"}
                    alt={boat.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <Badge className="absolute top-3 right-3 bg-blue-600 text-white">{boat.price}</Badge>
                  <div className="absolute bottom-3 left-3 text-white">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm font-medium">{boat.rating}</span>
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{boat.name}</CardTitle>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      {boat.type}
                    </Badge>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-1" />
                      <span className="text-sm">{boat.capacity}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 mb-4">{boat.description}</p>

                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-gray-900 flex items-center">
                      <Waves className="h-4 w-4 mr-2 text-blue-600" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-1">
                      {boat.features.map((feature) => (
                        <div key={feature} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700">Book Now</Button>
                    <Button variant="outline" className="flex-1">
                      Details
                    </Button>
                  </div>
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
            <h3 className="text-2xl font-bold mb-4">Need a Custom Charter?</h3>
            <p className="text-blue-100 mb-6">
              Contact our team for personalized boat charter solutions tailored to your specific needs.
            </p>
            <Button variant="secondary" size="lg">
              Contact Charter Specialist
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
