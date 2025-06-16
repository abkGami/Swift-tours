"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const albumImages = [
  {
    src: "/placeholder.svg?height=600&width=800",
    title: "Swiss Alps, Switzerland",
    description: "Breathtaking mountain views and luxury resorts",
    location: "Europe",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    title: "Santorini, Greece",
    description: "Iconic blue domes and stunning sunsets",
    location: "Europe",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    title: "Tokyo, Japan",
    description: "Modern cityscape meets traditional culture",
    location: "Asia",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    title: "Bali, Indonesia",
    description: "Tropical paradise with rice terraces",
    location: "Asia",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    title: "Paris, France",
    description: "City of Light and romantic atmosphere",
    location: "Europe",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    title: "Maldives",
    description: "Crystal clear waters and overwater villas",
    location: "Asia",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    title: "Rome, Italy",
    description: "Ancient history and architectural marvels",
    location: "Europe",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    title: "Kyoto, Japan",
    description: "Traditional temples and zen gardens",
    location: "Asia",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    title: "Rome, Italy",
    description: "Ancient history and architectural marvels",
    location: "Europe",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    title: "Kyoto, Japan",
    description: "Traditional temples and zen gardens",
    location: "Asia",
  },
];

export default function CustomerSLideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % albumImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + albumImages.length) % albumImages.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % albumImages.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Amazing Customers Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a visual journey through some of our esteemed customers at the
            most breathtaking destinations
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Slideshow */}
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img
                  src={albumImages[currentIndex].src || "/placeholder.svg"}
                  alt={albumImages[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Image Info */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="absolute bottom-8 left-8 text-white"
                >
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-blue-600 rounded-full text-sm font-medium">
                      {albumImages[currentIndex].location}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {albumImages[currentIndex].title}
                  </h3>
                  <p className="text-gray-200 max-w-md">
                    {albumImages[currentIndex].description}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="absolute inset-y-0 left-4 flex items-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={goToPrevious}
                className="bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </motion.button>
            </div>

            <div className="absolute inset-y-0 right-4 flex items-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={goToNext}
                className="bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </motion.button>
            </div>

            {/* Play/Pause Button */}
            <div className="absolute top-4 right-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={togglePlayPause}
                className="bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors"
              >
                {isPlaying ? (
                  <Pause className="h-5 w-5" />
                ) : (
                  <Play className="h-5 w-5" />
                )}
              </motion.button>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center mt-5 space-x-2 overflow-x-auto pb-4 pt-4">
            {albumImages.map((image, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentIndex(index)}
                className={`relative flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentIndex
                    ? "ring-4 ring-blue-500 ring-offset-2"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                {index === currentIndex && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-blue-500/20"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mt-6">
            <div className="flex space-x-2">
              {albumImages.map((_, index) => (
                <motion.div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-blue-600"
                      : "w-2 bg-gray-300"
                  }`}
                  animate={{
                    backgroundColor:
                      index === currentIndex ? "#2563eb" : "#d1d5db",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
