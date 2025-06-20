"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Clock, Camera, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

const kazakhstanCities = [
  {
    name: "Almaty",
    description:
      "Kazakhstan's largest city, surrounded by the Trans-Ili Alatau mountains, known for its culture, food, and adventure tourism.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    duration: "3-4 days",
    category: "Mountain City",
    highlights: [
      "kok tobe hill",
      "big almaty lake",
      "zelyony bazaar",
      "shymbulak ski resort",
    ],
  },
  {
    name: "Astana",
    description:
      "The capital of Kazakhstan, Astana (Nur-Sultan) boasts futuristic architecture, museums, and government landmarks.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    duration: "2-3 days",
    category: "Capital City",
    highlights: [
      "bayterek tower",
      "hazret sultan mosque",
      "palace of peace and reconciliation",
      "nur alem pavilion",
    ],
  },
  {
    name: "Shymkent",
    description:
      "A vibrant southern city with a blend of modern Kazakh life, ancient ruins, and rich cuisine.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    duration: "2 days",
    category: "Cultural Hub",
    highlights: [
      "kemerov park",
      "ancient city of sayram",
      "shymkent central bazaar",
      "independence park",
    ],
  },
  {
    name: "Aktau",
    description:
      "A city on the shores of the Caspian Sea, ideal for beach relaxation, nature tours, and desert landscapes.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.5,
    duration: "1-2 days",
    category: "Coastal Town",
    highlights: [
      "caspian sea promenade",
      "bozzhyra canyon",
      "underground mosques",
      "rock formations of mangystau",
    ],
  },
  {
    name: "Turkistan",
    description:
      "Home to the stunning Mausoleum of Khoja Ahmed Yasawi, this city offers deep spiritual and historical insight.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.4,
    duration: "1 day",
    category: "Spiritual Landmark",
    highlights: [
      "yasawi mausoleum",
      "oriental bazaar",
      "silk road attractions",
      "karavan-saray complex",
    ],
  },
  {
    name: "Karaganda",
    description:
      "A central Kazakh city known for its coal mining history and memorials from the Soviet era.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.3,
    duration: "1-2 days",
    category: "Historical City",
    highlights: [
      "kar lag museum",
      "central park",
      "cathedral of our lady of fatima",
      "etno village",
    ],
  },
];

const kazakhstanAttractions = [
  {
    name: "Big Almaty Lake",
    description:
      "A stunning alpine lake located in the mountains just outside Almaty, known for its turquoise waters.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Bayterek Tower",
    description:
      "Astana's iconic observation tower symbolizing the Kazakh myth of the Tree of Life.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Khoja Ahmed Yasawi Mausoleum",
    description:
      "A UNESCO World Heritage site in Turkistan, showcasing stunning Timurid architecture.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Bozzhyra Canyon",
    description:
      "Otherworldly rock formations in the Mangystau region, perfect for trekking and photography.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Shymbulak Ski Resort",
    description:
      "Kazakhstan’s most popular ski resort offering scenic views, skiing, and hiking year-round.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Nur Alem Pavilion",
    description:
      "A massive spherical building in Astana dedicated to future energy and innovation from Expo 2017.",
    image: "/placeholder.svg?height=300&width=400",
  },
];

export default function KazakhstanPage() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/contact");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-50">
      <Navigation />

      <section className="pt-24 pb-10 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/placeholder.svg?height=600&width=1200"
            alt="Kazakhstan"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-green-900/70" />
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
              <span className="text-xl">Central Asia</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Kazakhstan</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Discover the vast landscapes, rich culture, and diverse
              experiences in the heart of Eurasia
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>4.8 Rating</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>Perfect for Nature & Culture</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Best: Spring & Autumn</span>
              </div>
            </div>

            <Button
              onClick={handleClick}
              variant="secondary"
              size="lg"
              className="bg-white mt-6 text-blue-600 hover:bg-gray-100"
            >
              Book Kazakhstan Tour
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
