"use client"

import { motion } from "framer-motion"
import { Car, Plane, Shield, Leaf, Crown, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const transferOptions = [
  {
    title: "Luxury Vehicles",
    icon: Crown,
    description: "Premium comfort with Mercedes-Benz V-Class and BMW 7 Series",
    features: ["Professional chauffeur", "Wi-Fi & refreshments", "Airport meet & greet", "Flexible scheduling"],
    vehicles: ["Mercedes-Benz V-Class", "BMW 7 Series", "Audi A8", "Range Rover"],
    price: "From $89/hour",
    image: "/placeholder.svg?height=200&width=300",
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Private Drivers",
    icon: Users,
    description: "Multilingual guides for personalized tours and transfers",
    features: ["Local expertise", "Multilingual support", "Flexible itinerary", "Cultural insights"],
    vehicles: ["Comfortable sedans", "SUVs", "Minivans", "Luxury coaches"],
    price: "From $65/hour",
    image: "/placeholder.svg?height=200&width=300",
    color: "from-blue-400 to-purple-500",
  },
  {
    title: "Eco-Friendly Options",
    icon: Leaf,
    description: "Electric and hybrid vehicles for sustainable travel",
    features: ["Zero emissions", "Quiet operation", "Modern technology", "Environmental responsibility"],
    vehicles: ["Tesla Model S", "BMW i7", "Mercedes EQS", "Hybrid options"],
    price: "From $75/hour",
    image: "/placeholder.svg?height=200&width=300",
    color: "from-green-400 to-emerald-500",
  },
  {
    title: "Helicopter Transfers",
    icon: Plane,
    description: "VIP helicopter transfers for ultimate luxury and speed",
    features: ["Scenic routes", "Time-saving", "Exclusive experience", "Professional pilots"],
    vehicles: ["Airbus H125", "Bell 407", "Robinson R44", "Luxury helicopters"],
    price: "From $1,200/hour",
    image: "/placeholder.svg?height=200&width=300",
    color: "from-purple-400 to-pink-500",
  },
  {
    title: "Airport Concierge",
    icon: Shield,
    description: "Meet-and-greet services with luggage handling",
    features: ["Fast-track security", "Luggage assistance", "VIP lounges", "Immigration support"],
    vehicles: ["Luxury transfers", "Private terminals", "Expedited service", "Personal assistance"],
    price: "From $150/service",
    image: "/placeholder.svg?height=200&width=300",
    color: "from-indigo-400 to-blue-500",
  },
]

export default function Transfers() {
  return (
    <section id="transfers" className="section py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <Car className="h-12 w-12 text-blue-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Premium Transfers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Travel in style and comfort with our comprehensive transfer services. From luxury vehicles to helicopter
            transfers, we ensure your journey is as memorable as your destination.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transferOptions.map((option, index) => {
            const IconComponent = option.icon
            return (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg h-full">
                  <div className="relative">
                    <div className={`h-32 bg-gradient-to-r ${option.color} flex items-center justify-center`}>
                      <IconComponent className="h-16 w-16 text-white" />
                    </div>
                    <Badge className="absolute top-3 right-3 bg-white text-gray-900">{option.price}</Badge>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">{option.title}</CardTitle>
                    <p className="text-gray-600">{option.description}</p>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Features</h4>
                        <div className="space-y-1">
                          {option.features.map((feature) => (
                            <div key={feature} className="text-sm text-gray-600 flex items-center">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Available Options</h4>
                        <div className="flex flex-wrap gap-1">
                          {option.vehicles.slice(0, 2).map((vehicle) => (
                            <Badge key={vehicle} variant="secondary" className="text-xs">
                              {vehicle}
                            </Badge>
                          ))}
                          {option.vehicles.length > 2 && (
                            <Badge variant="secondary" className="text-xs">
                              +{option.vehicles.length - 2} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-2 mt-6">
                      <Button className="flex-1 bg-blue-600 hover:bg-blue-700">Book Transfer</Button>
                      <Button variant="outline" className="flex-1">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Special Offers */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Special Transfer Packages</h3>
                <p className="text-blue-100 mb-6">
                  Book multiple transfers and save up to 25%. Perfect for extended stays and multi-city tours.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-blue-100">
                    <div className="w-2 h-2 bg-white rounded-full mr-3" />
                    Airport + Hotel transfers included
                  </div>
                  <div className="flex items-center text-blue-100">
                    <div className="w-2 h-2 bg-white rounded-full mr-3" />
                    24/7 customer support
                  </div>
                  <div className="flex items-center text-blue-100">
                    <div className="w-2 h-2 bg-white rounded-full mr-3" />
                    Flexible cancellation policy
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">25% OFF</div>
                <div className="text-blue-100 mb-4">Multi-transfer packages</div>
                <Button variant="secondary" size="lg">
                  View Packages
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
