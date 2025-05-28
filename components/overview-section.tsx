"use client"

import { motion } from "framer-motion"
import { MapPin, Anchor, Car, BookOpen, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const overviewCards = [
  {
    title: "Destinations",
    description: "Explore breathtaking destinations across Europe and Asia with our curated travel experiences",
    icon: MapPin,
    image: "/placeholder.svg?height=300&width=400",
    href: "/destinations",
    color: "from-blue-500 to-purple-600",
    stats: "50+ Destinations",
  },
  {
    title: "Chartered Boats",
    description: "Experience luxury on the water with our premium fleet of boats and yachts",
    icon: Anchor,
    image: "/placeholder.svg?height=300&width=400",
    href: "/boats",
    color: "from-cyan-500 to-blue-600",
    stats: "15+ Boats Available",
  },
  {
    title: "Premium Transfers",
    description: "Travel in style with our luxury vehicles and professional transfer services",
    icon: Car,
    image: "/placeholder.svg?height=300&width=400",
    href: "/transfers",
    color: "from-green-500 to-teal-600",
    stats: "24/7 Service",
  },
  {
    title: "Travel Blog",
    description: "Get inspired with travel tips, destination guides, and insider knowledge",
    icon: BookOpen,
    image: "/placeholder.svg?height=300&width=400",
    href: "/blog",
    color: "from-orange-500 to-red-600",
    stats: "100+ Articles",
  },
]

export default function OverviewSection() {
  return (
    <section className="section py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 animate-element"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 gradient-text">Your Journey Starts Here</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover amazing destinations, luxury accommodations, and unforgettable experiences with Swift Tours
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {overviewCards.map((card, index) => {
            const IconComponent = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group animate-element"
              >
                <Link href={card.href}>
                  <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg h-full cursor-pointer">
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${card.color} opacity-60`} />
                      <div className="absolute top-4 left-4">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 right-4 text-white text-sm font-semibold">{card.stats}</div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                        {card.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent>
                      <p className="text-gray-600 mb-4">{card.description}</p>
                      <Button
                        variant="ghost"
                        className="w-full justify-between group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors"
                      >
                        Explore
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
