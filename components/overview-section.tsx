"use client";

import { motion } from "framer-motion";
import { MapPin, Anchor, Car, ShipIcon, ArrowRight, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const overviewCards = [
  {
    title: "Boat Trip",
    description:
      "Discover breathtaking boat trips across coastal cities and hidden islands. Sail with style and comfort.",
    icon: ShipIcon,
    image: "/placeholder.svg?height=300&width=400",
    href: "/boat-trip",
    color: "from-sky-500 to-teal-600",
    stats: "25+ Unique Routes",
  },

  {
    title: "Chartered Boats",
    description:
      "Experience luxury on the water with our premium fleet of boats and yachts",
    icon: Anchor,
    image: "/placeholder.svg?height=300&width=400",
    href: "/boats",
    color: "from-cyan-500 to-blue-600",
    stats: "15+ Boats Available",
  },
  {
    title: "Premium Transfers",
    description:
      "Travel in style with our luxury vehicles and professional transfer services",
    icon: Car,
    image: "/placeholder.svg?height=300&width=400",
    href: "/transfers",
    color: "from-green-500 to-teal-600",
    stats: "24/7 Service",
  },
  {
    title: "Contact Us",
    description: "Reach out to us for personalized travel planning and support",
    icon: Phone,
    image: "/placeholder.svg?height=300&width=400",
    href: "/contact",
    color: "from-orange-500 to-red-600",
    stats: "100% Satisfaction",
  },
];

export default function OverviewSection() {
  const router = useRouter();

  return (
    <section className="section py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 animate-element"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 gradient-text">
            Your Journey Starts Here
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover amazing destinations, luxury accommodations, and
            unforgettable experiences with Swift Tours
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {overviewCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.title}
                // initial={{ opacity: 0, y: 50 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // transition={{ duration: 0.6, delay: index * 0.1 }}
                // whileHover={{ y: -10, scale: 1.02 }}
                className="group animate-element"
                onClick={() => router.push(card.href)}
                style={{ cursor: "pointer" }}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    router.push(card.href);
                  }
                }}
              >
                <div>
                  <Card className="overflow-hidden transition-all duration-500 border-0 shadow-lg h-full cursor-pointer">
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${card.color} opacity-60`}
                      />
                      <div className="absolute top-4 left-4">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 right-4 text-white text-sm font-semibold">
                        {card.stats}
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                        {card.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent>
                      <p className="text-gray-600 mb-4">{card.description}</p>
                      {/* <Button
                        variant="ghost"
                        className="w-full justify-between transition-colors"
                      >
                        Explore
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button> */}
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* About Section */}
        {/* <div className="about-section mt-12">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg mb-6">Discover our services and explore the top visited places.</p>
          <div className="services mb-6">
            <h3 className="text-3xl font-semibold mb-2">Our Services</h3>
            <ul className="list-disc list-inside">
              <li>Guided Tours</li>
              <li>Custom Itineraries</li>
              <li>Travel Assistance</li>
            </ul>
          </div>
          <div className="top-places">
            <h3 className="text-3xl font-semibold mb-2">Top Visited Places</h3>
            <ul className="list-disc list-inside">
              <li>Place 1</li>
              <li>Place 2</li>
              <li>Place 3</li>
            </ul>
          </div>
        </div> */}
      </div>
    </section>
  );
}
