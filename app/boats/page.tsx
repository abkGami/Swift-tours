"use client";

import { motion } from "framer-motion";
import { Anchor, Users, Star, Waves, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SlideshowAlbum from "@/components/slideshow-album";
import { useRouter } from "next/navigation";
import Image from "next/image";

const boats = [
  {
    name: "Gulet",
    type: "Motorsailer",
    capacity: "Up to 25 guests",
    price: "From $222,008 to $3,017,038",
    image: "/boat/one.jpg",
  features: [
      "Wooden classic yacht",
      "Built in Bodrum or Marmaris",
      "6 to 11 cabins",
      "Luxury sailing experience"
    ],
    rating: 4.8,
    description: "A traditional Turkish sailing vessel offering charm, comfort, and craftsmanship, ideal for private and charter use.",
    specifications: {
      length: "30 to 32 meters",
      engine: "Not specified",
      fuel: "Not specified",
      speed: "Not specified"
    }
  },
  {
    name: "Pershing 46",
    type: "Performance Cruiser",
    capacity: "Up to 6 overnight guests",
    price: "From €310,000 (VAT paid)",
    image: "/boat/two.jpg",
    features: [
      "Sleek aerodynamic form",
      "Carbon-fiber hard-top",
      "Dynamic open aspect",
      "Three lower-deck cabins",
      "Cherrywood and leather surfaces"
    ],
    rating: 4.8,
    description: "Three Cabins with en-suite bathrooms and remarkably spacious exterior spaces.",
    specifications: {
      length: "49 feet",
      engine: "Not specified",
      fuel: "Not specified",
      speed: "Not specified"
    }
  },
  {
    name: "Sarnico 43",
    type: "Open Yacht",
    capacity: "1 guest cabin",
    price: "Not specified",
    image: "/boat/three.jpg",
    features: [
      "Fiberglass/GRP hull",
      "CE certification class B",
      "Speed up to 36 knots",
      "Draft of 1.08 meters"
    ],
    rating: 4.8,
    description: "A luxurious open yacht with refined style and quality execution, ideal for coastal cruising.",
    specifications: {
      length: "43 feet",
      engine: "Not specified",
      fuel: "Not specified",
      speed: "36 knots"
    }
  },
  {
    name: "Ferretti Yachts 1000",
    type: "Flybridge Yacht",
    capacity: "6-8 guests",
    price: "From $97,010 to $11,243,252",
    image: "/boat/four.jpg",
    features: [
      "Twin MTU engines",
      "3 Cabins",
      "High-tech innovation",
      "Luxury and comfort"
    ],
    rating: 4.8,
    description: "The largest yacht ever built by Ferretti Yachts offering maximum comfort and customization.",
    specifications: {
      length: "64 feet",
      engine: "Twin MTU engines",
      fuel: "Not specified",
      speed: "24-29 knots"
    }
  },
  {
    name: "Lagoon 46",
    type: "Sailing Catamaran",
    capacity: "10 guests",
    price: "€686,800",
    image: "/boat/five.jpg",
    features: [
      "Fiberglass/GRP hull",
      "CE certification class A",
      "3 Cabins",
      "Sail area of 140.1 m²"
    ],
    rating: 4.8,
    description: "A perfect long-term cruising catamaran offering easy responsive performance and functional luxury.",
    specifications: {
      length: "13.99 meters",
      engine: "Not specified",
      fuel: "Not specified",
      speed: "Not specified"
    }
  },
  // {
  //   name: "Luxury Yacht Charter",
  //   type: "Luxury Yacht",
  //   capacity: "20+ people",
  //   price: "From $1,299/day",
  //   image: "/placeholder.svg?height=250&width=400",
  //   features: [
  //     "Full crew",
  //     "Gourmet catering",
  //     "Water sports equipment",
  //     "Luxury amenities",
  //   ],
  //   rating: 5.0,
  //   description: "Ultimate luxury experience on the water",
  //   specifications: {
  //     length: "65 feet",
  //     engine: "Twin 800 HP",
  //     fuel: "500 gallons",
  //     speed: "30 mph",
  //   },
  // },
];

export default function BoatsPage() {

  const router = useRouter()

  const handleClick = () => {
    router.push('/contact')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/placeholder.svg?height=600&width=1200"
            alt="Luxury boats"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-cyan-900/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="flex items-center justify-center mb-4">
              <Anchor className="h-12 w-12 mr-3" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Chartered Boats
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Experience the water with our premium fleet of boats. From family
              cruisers to professional fishing vessels, we have the perfect boat
              for your adventure.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Waves className="h-5 w-5 mr-2" />
                <span>15+ Boats Available</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>4-20+ Capacity</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Daily & Weekly Rentals</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Multiple Locations</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Boats Fleet Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Premium Fleet
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our carefully maintained collection of boats, each
              equipped with modern amenities and safety equipment
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
                    <Image  //change to img and remove height and width
                    width={1200}
                    height={12}
                      src={boat.image || "/placeholder.svg"}
                      alt={boat.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <Badge className="absolute top-3 right-3 bg-blue-600 text-white">
                      {boat.price}
                    </Badge>
                    <div className="absolute bottom-3 left-3 text-white">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400" />
                        <span className="text-sm font-medium">
                          {boat.rating}
                        </span>
                      </div>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">
                      {boat.name}
                    </CardTitle>
                    <div className="flex items-center justify-between">
                      <Badge
                        variant="secondary"
                        className="bg-blue-100 text-blue-800"
                      >
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

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 flex items-center mb-2">
                          <Waves className="h-4 w-4 mr-2 text-blue-600" />
                          Key Features
                        </h4>
                        <div className="grid grid-cols-2 gap-1">
                          {boat.features.map((feature) => (
                            <div
                              key={feature}
                              className="text-sm text-gray-600 flex items-center"
                            >
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Specifications
                        </h4>
                        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                          <div>Length: {boat.specifications.length}</div>
                          <div>Engine: {boat.specifications.engine}</div>
                          <div>Fuel: {boat.specifications.fuel}</div>
                          <div>Max Speed: {boat.specifications.speed}</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button onClick={handleClick} className="flex-1 bg-blue-600 hover:bg-blue-700">
                        Book Now
                      </Button>
                      {/* <Button variant="outline" className="flex-1">
                        Details
                      </Button> */}
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
              <h3 className="text-2xl font-bold mb-4">
                Need a Custom Charter?
              </h3>
              <p className="text-blue-100 mb-6">
                Contact our team for personalized boat charter solutions
                tailored to your specific needs.
              </p>
              <Button variant="secondary" size="lg">
                Contact Charter Specialist
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Slideshow Album */}
      <SlideshowAlbum />

      <Footer />
    </div>
  );
}
