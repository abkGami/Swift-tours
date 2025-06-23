"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Clock, Users, Calendar, Mountain } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

const bhutanCities = [
  {
    name: "Thimphu",
    description:
      "Bhutan's charming capital city, blending modernity with ancient tradition, surrounded by Himalayan peaks.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    duration: "3-4 days",
    category: "Cultural Capital",
    highlights: [
      "buddha dordenma",
      "tashichho dzong",
      "memorial chorten",
      "folk heritage museum",
    ],
  },
  {
    name: "Paro",
    description:
      "A picturesque valley town, home to Bhutan's iconic Tiger’s Nest Monastery and ancient fortresses.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    duration: "2-3 days",
    category: "Spiritual Town",
    highlights: [
      "paro taktsang",
      "paro dzong",
      "national museum",
      "kyichu lhakhang",
    ],
  },
  {
    name: "Punakha",
    description:
      "Once the capital of Bhutan, known for its majestic riverside dzong and scenic rice fields.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    duration: "2 days",
    category: "Historic Town",
    highlights: [
      "punakha dzong",
      "chimi lhakhang",
      "suspension bridge",
      "mo chhu river",
    ],
  },
  {
    name: "Trongsa",
    description:
      "A central Bhutanese town with sweeping views and a key historical fortress connecting the country’s past.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.5,
    duration: "1-2 days",
    category: "Historic Significance",
    highlights: [
      "trongsa dzong",
      "ta dzong museum",
      "black mountain range",
      "ancestral sites of monarchy",
    ],
  },
  {
    name: "Jakar (Bumthang)",
    description:
      "Considered Bhutan’s spiritual heartland, filled with monasteries, legends, and pastoral beauty.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    duration: "2-3 days",
    category: "Spiritual Valley",
    highlights: [
      "jampey lhakhang",
      "kurjey lhakhang",
      "jakar dzong",
      "burning lake",
    ],
  },
  {
    name: "Phuentsholing",
    description:
      "Bhutan’s southern gateway town near the Indian border, offering a blend of cultures and commerce.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.3,
    duration: "1-2 days",
    category: "Border Town",
    highlights: [
      "karbandi monastery",
      "amo chhu crocodile breeding center",
      "zangtopelri lhakhang",
      "bhutan gate",
    ],
  },
];

const bhutanAttractions = [
  {
    name: "Paro Taktsang (Tiger’s Nest Monastery)",
    description:
      "A sacred Buddhist monastery perched on a cliffside in Paro, offering breathtaking views and spiritual serenity.",
    image: "https://images.pexels.com/photos/2908176/pexels-photo-2908176.jpeg",
  },
  {
    name: "Punakha Dzong",
    description:
      "A stunning riverside fortress and former administrative capital, known for its intricate architecture and history.",
    image: "https://images.pexels.com/photos/4788801/pexels-photo-4788801.jpeg",
  },
  {
    name: "Dochula Pass",
    description:
      "A scenic mountain pass featuring 108 chortens and panoramic views of the Himalayas.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/8c/Dochula_Pass.JPG",
  },
  {
    name: "Buddha Dordenma",
    description:
      "A massive golden Buddha statue overlooking Thimphu Valley, symbolizing peace and prosperity.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Buddha_Dordenma_Thimphu_Bhutan.jpg",
  },
  {
    name: "Wangdue Phodrang Dzong",
    description:
      "An impressive fortress-monastery at the confluence of two rivers, known for its dramatic hilltop setting.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/11/Wangdue_Phodrang_Dzong.jpg",
  },
  {
    name: "Erdene Zuu Monastery",
    description:
      "Bhutan’s oldest Buddhist monastery, built on the ruins of the ancient capital at Kharkhorin.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/Erdene_Zuu_museum.jpg",
  },
];

export default function BhutanPage() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/contact");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-10 relative overflow-hidden">
        <div className="absolute inset-0">
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
              <span className="text-xl">Asia</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Bhutan</h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
              Discover the Last Shangri-La with its pristine Himalayan
              landscapes, ancient monasteries, and unique Buddhist culture
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>4.8 Rating</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>Perfect for Culture & Trekking</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Best: March-May, Sept-Nov</span>
              </div>
            </div>

            <Button
              onClick={handleClick}
              variant="secondary"
              size="lg"
              className="mt-6 bg-white text-orange-600 hover:bg-gray-100"
            >
              Book Bhutan Tour
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The Last Shangri-La
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the mystical kingdom of Bhutan, where Gross National
              Happiness matters more than GDP
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bhutanCities.map((city, index) => (
              <motion.div
                key={city.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/90">
                  <div className="p-6">
                    <Badge className="mb-2 bg-orange-700 text-white">
                      {city.category}
                    </Badge>
                    <div className="flex items-center space-x-2 mb-2">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm font-medium text-orange-900">
                        {city.rating}
                      </span>
                      <Clock className="h-4 w-4 ml-4 text-orange-700" />
                      <span className="text-sm text-orange-700">
                        {city.duration}
                      </span>
                    </div>
                    <CardHeader className="p-0 mb-2">
                      <CardTitle className="text-xl text-orange-900">
                        {city.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-orange-800 mb-4">{city.description}</p>
                      <div className="space-y-2 mb-2">
                        <h4 className="font-semibold text-orange-900 flex items-center">
                          <Mountain className="h-4 w-4 mr-2 text-orange-700" />
                          Highlights
                        </h4>
                        <ul className="list-disc list-inside text-orange-700 text-sm">
                          {city.highlights.map((highlight) => (
                            <li key={highlight}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </div>
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
              <h3 className="text-2xl font-bold mb-4">
                Ready for Bhutan Adventure?
              </h3>
              <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
                Embark on a spiritual journey to the Last Shangri-La and
                experience the magic of Bhutan's unique culture
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100"
                >
                  Book Bhutan Tour
                </Button>
              </div>
            </div>
          </motion.div>

          {/* tourist attraction  */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-9 mt-14"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tourist Attractions in Bhutan
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {bhutanAttractions.map((attraction, index) => (
              <motion.div
                key={attraction.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/90">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-900 first-letter:uppercase">
                      {attraction.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-800 mb-2">
                      {attraction.description}
                    </p>
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
              <h3 className="text-2xl font-bold mb-4">
                Ready for Bhutan Adventure?
              </h3>
              <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
                Embark on a spiritual journey to the Last Shangri-La and
                experience the magic of Bhutan's unique culture
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100"
                >
                  Book Bhutan Tour
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
