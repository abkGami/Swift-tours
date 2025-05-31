"use client"

import { motion } from "framer-motion"
import { MapPin, Star, Clock, Users, Calendar, Mountain } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useRouter } from "next/navigation"

const mongoliaAttractions = [
  {
    name: "Gobi Desert",
    description: "Vast desert with stunning landscapes and unique wildlife",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    duration: "Full day",
    category: "Desert",
    highlights: ["Sand Dunes", "Camel Rides", "Nomadic Culture"],
  },
  {
    name: "Karakorum",
    description: "Ancient capital of the Mongol Empire",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    duration: "2-3 hours",
    category: "Historic Site",
    highlights: ["Erdene Zuu Monastery", "Historical Ruins", "Cultural Heritage"],
  },
  {
    name: "Terelj National Park",
    description: "Beautiful national park with rock formations and hiking trails",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    duration: "2-3 hours",
    category: "National Park",
    highlights: ["Turtle Rock", "Aryabal Monastery", "Scenic Views"],
  },
  {
    name: "Ulaanbaatar",
    description: "Capital city with vibrant culture and history",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    duration: "2-3 hours",
    category: "City",
    highlights: ["Gandan Monastery", "Sukhbaatar Square", "National Museum"],
  },
  {
    name: "Lake Khövsgöl",
    description: "Pristine lake surrounded by mountains",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    duration: "2-3 days",
    category: "Lake",
    highlights: ["Boating", "Fishing", "Hiking"],
  },
  {
    name: "Naadam Festival",
    description: "Traditional festival celebrating Mongolian culture",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    duration: "3 days",
    category: "Festival",
    highlights: ["Wrestling", "Archery", "Horse Racing"],
  },
];

export default function MongoliaPage() {

  const router = useRouter();

  const handleClick = () => {
    router.push('/contact')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-10 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/placeholder.svg?height=600&width=1200" alt="Mongolia" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-blue-900/70" />
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Mongolia</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Explore the vast landscapes of Mongolia, from the Gobi Desert to the lush mountains and vibrant culture
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>4.8 Rating</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>8-10 Days Recommended</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>Perfect for Adventure & Culture</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Best: June-August</span>
              </div>
            </div>

            <Button onClick={handleClick} variant="secondary" size="lg" className="mt-6 bg-white text-green-600 hover:bg-gray-100">
                  Book Mongolia Tour 
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Discover Mongolia</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the rich culture and stunning landscapes of Mongolia, where tradition meets adventure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mongoliaAttractions.map((attraction, index) => (
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
                        <Mountain className="h-4 w-4 mr-2 text-green-600" />
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
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Explore Mongolia?
              </h3>
              <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                Book your Mongolian adventure today and experience the magic of the vast landscapes and rich culture
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-green-600 hover:bg-gray-100"
                >
                  Book Mongolia Tour
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
  );
}
