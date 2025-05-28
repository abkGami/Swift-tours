"use client"

import { useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MapPin, Star, Clock, Plane, Camera } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

gsap.registerPlugin(ScrollTrigger)

const europeDestinations = [
  {
    name: "Paris, France",
    description: "Iconic landmarks like the Eiffel Tower and Louvre Museum",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    duration: "5-7 days",
    price: "From $1,299",
    highlights: ["Eiffel Tower", "Louvre Museum", "Seine River Cruise"],
    color: "from-rose-400 to-pink-600",
  },
  {
    name: "Rome, Italy",
    description: "Colosseum, Vatican City, and historic neighborhoods",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    duration: "4-6 days",
    price: "From $1,199",
    highlights: ["Colosseum", "Vatican City", "Trastevere"],
    color: "from-amber-400 to-orange-600",
  },
  {
    name: "Swiss Alps, Switzerland",
    description: "Year-round outdoor adventures and luxury resorts",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    duration: "6-8 days",
    price: "From $2,499",
    highlights: ["Matterhorn", "Jungfraujoch", "Luxury Resorts"],
    color: "from-blue-400 to-cyan-600",
  },
  {
    name: "Monaco",
    description: "Sustainable luxury, casinos, and Mediterranean charm",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    duration: "3-4 days",
    price: "From $1,899",
    highlights: ["Monte Carlo", "Prince's Palace", "Mediterranean Views"],
    color: "from-purple-400 to-indigo-600",
  },
]

const asiaDestinations = [
  {
    name: "Tokyo, Japan",
    description: "Blend of futuristic tech and traditional temples",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    duration: "6-8 days",
    price: "From $1,799",
    highlights: ["Shibuya Crossing", "Senso-ji Temple", "Mount Fuji"],
    color: "from-red-400 to-pink-600",
  },
  {
    name: "Bali, Indonesia",
    description: "Beaches, yoga retreats, and cultural ceremonies",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    duration: "7-10 days",
    price: "From $999",
    highlights: ["Ubud Rice Terraces", "Beach Resorts", "Cultural Tours"],
    color: "from-green-400 to-emerald-600",
  },
  {
    name: "Maldives",
    description: "Overwater bungalows and coral reefs",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    duration: "5-7 days",
    price: "From $2,999",
    highlights: ["Overwater Villas", "Coral Reefs", "Spa Treatments"],
    color: "from-cyan-400 to-blue-600",
  },
  {
    name: "Bhutan",
    description: "Remote Himalayan treks and Tiger's Nest Monastery",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    duration: "8-10 days",
    price: "From $2,199",
    highlights: ["Tiger's Nest", "Himalayan Treks", "Buddhist Culture"],
    color: "from-orange-400 to-red-600",
  },
]

export default function Destinations() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  useEffect(() => {
    // Create floating animation for destination cards
    gsap.to(".destination-card", {
      y: -5,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.3,
    })

    // Parallax effect for section background
    gsap.to(".parallax-bg", {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    })

    // Image hover animations
    const cards = gsap.utils.toArray(".destination-card")
    cards.forEach((card: any) => {
      const image = card.querySelector(".card-image")
      const overlay = card.querySelector(".card-overlay")

      card.addEventListener("mouseenter", () => {
        gsap.to(image, { scale: 1.1, duration: 0.5, ease: "power2.out" })
        gsap.to(overlay, { opacity: 0.8, duration: 0.3 })
      })

      card.addEventListener("mouseleave", () => {
        gsap.to(image, { scale: 1, duration: 0.5, ease: "power2.out" })
        gsap.to(overlay, { opacity: 0.6, duration: 0.3 })
      })
    })
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      rotateX: -15,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  }

  const DestinationCard = ({ destination, index }: { destination: any; index: number }) => (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -20,
        rotateY: 5,
        transition: { type: "spring", stiffness: 300 },
      }}
      className="destination-card float-card group perspective-1000"
    >
      <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg transform-gpu">
        <div className="relative overflow-hidden">
          <motion.img
            src={destination.image || "/placeholder.svg"}
            alt={destination.name}
            className="card-image w-full h-48 object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Animated Gradient Overlay */}
          <motion.div
            className={`card-overlay absolute inset-0 bg-gradient-to-t ${destination.color} opacity-60`}
            initial={{ opacity: 0.6 }}
            whileHover={{ opacity: 0.8 }}
          />

          {/* Floating Price Badge */}
          <motion.div
            className="absolute top-3 right-3"
            animate={{
              y: [0, -5, 0],
              rotate: [0, 2, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <Badge className="bg-white/90 text-gray-900 font-semibold shadow-lg">{destination.price}</Badge>
          </motion.div>

          {/* Animated Icons */}
          <div className="absolute bottom-3 left-3 flex space-x-2">
            <motion.div
              className="bg-white/20 backdrop-blur-sm rounded-full p-2"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <Camera className="h-4 w-4 text-white" />
            </motion.div>
            <motion.div
              className="bg-white/20 backdrop-blur-sm rounded-full p-2"
              whileHover={{ scale: 1.2, rotate: -360 }}
              transition={{ duration: 0.3 }}
            >
              <Plane className="h-4 w-4 text-white" />
            </motion.div>
          </div>
        </div>

        <CardHeader>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <CardTitle className="text-lg text-reveal">{destination.name}</CardTitle>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <motion.div className="flex items-center" whileHover={{ scale: 1.1 }}>
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                <span className="font-semibold">{destination.rating}</span>
              </motion.div>
              <motion.div className="flex items-center" whileHover={{ scale: 1.1 }}>
                <Clock className="h-4 w-4 mr-1" />
                {destination.duration}
              </motion.div>
            </div>
          </motion.div>
        </CardHeader>

        <CardContent>
          <motion.p
            className="text-gray-600 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.2 }}
          >
            {destination.description}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-1 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            {destination.highlights.map((highlight: string, i: number) => (
              <motion.div
                key={highlight}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.4 + i * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <Badge variant="secondary" className="text-xs">
                  {highlight}
                </Badge>
              </motion.div>
            ))}
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 magnetic-btn">
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                Book Now
              </motion.span>
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )

  return (
    <section ref={sectionRef} id="destinations" className="section py-20 bg-white relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div className="parallax-bg absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 animate-element"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-reveal"
            animate={{
              backgroundImage: [
                "linear-gradient(45deg, #3b82f6, #8b5cf6)",
                "linear-gradient(45deg, #8b5cf6, #ec4899)",
                "linear-gradient(45deg, #ec4899, #3b82f6)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            Discover Amazing Destinations
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            From the romantic streets of Paris to the serene beaches of Bali, explore our handpicked destinations across
            Europe and Asia
          </motion.p>
        </motion.div>

        {/* Europe Section */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-gray-900 mb-8 flex items-center animate-element"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <MapPin className="h-8 w-8 text-blue-600 mr-3" />
            </motion.div>
            <span className="text-reveal">Europe</span>
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {europeDestinations.map((destination, index) => (
              <DestinationCard key={destination.name} destination={destination} index={index} />
            ))}
          </motion.div>
        </div>

        {/* Asia Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold text-gray-900 mb-8 flex items-center animate-element"
          >
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <MapPin className="h-8 w-8 text-purple-600 mr-3" />
            </motion.div>
            <span className="text-reveal">Asia</span>
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {asiaDestinations.map((destination, index) => (
              <DestinationCard key={destination.name} destination={destination} index={index + 4} />
            ))}
          </motion.div>
        </div>

        {/* Floating Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1, duration: 0.8, type: "spring" }}
          className="text-center mt-16"
        >
          <motion.div
            className="inline-block"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white px-8 py-4 text-lg magnetic-btn"
            >
              <motion.span
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                Explore All Destinations
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
