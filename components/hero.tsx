"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { Search, MapPin, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

gsap.registerPlugin(TextPlugin);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [currentText, setCurrentText] = useState(0);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const heroTexts = [
    "Discover the World",
    "Explore Europe",
    "Adventure in Asia",
    "Luxury Awaits",
  ];

  useEffect(() => {
    // Advanced parallax background animation
    // gsap.to(backgroundRef.current, {
    //   yPercent: -50,
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: heroRef.current,
    //     start: "top bottom",
    //     end: "bottom top",
    //     scrub: 1,
    //   },
    // });

    // Floating particles animation
    gsap.to(".particle", {
      y: -20,
      x: 10,
      rotation: 360,
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.5,
    });

    // Text cycling animation
    const textTimeline = gsap.timeline({ repeat: -1 });

    heroTexts.forEach((text, index) => {
      textTimeline
        .to(titleRef.current, {
          text: text,
          duration: 1,
          ease: "power2.out",
        })
        .to({}, { duration: 2 }); // Pause
    });

    // Search bar entrance animation
    gsap.fromTo(
      ".search-container",
      {
        y: 100,
        opacity: 0,
        scale: 0.8,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        delay: 1,
        ease: "back.out(1.7)",
      }
    );

    // Stats counter animation
    gsap.fromTo(
      ".stat-number",
      {
        textContent: 0,
      },
      {
        textContent: (i: number, target: any) =>
          target.getAttribute("data-count"),
        duration: 2,
        delay: 1.5,
        ease: "power2.out",
        snap: { textContent: 1 },
        stagger: 0.2,
      }
    );
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <motion.section
      // ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{}}
    >
      {/* Animated Background with Parallax */}
      <motion.div
        // ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 "
        style={{
          y,
          backgroundImage: `url('/hero1.jpg')`,
          // backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/85" />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle absolute w-2 h-2 bg-white/30 rounded-full"
            // style={{
            //   left: `${Math.random() * 100}%`,
            //   top: `${Math.random() * 100}%`,
            // }}
            // animate={{
            //   y: [-20, 20],
            //   x: [-10, 10],
            //   opacity: [0.3, 0.8, 0.3],
            // }}
            // transition={{
            //   duration: 3 + Math.random() * 2,
            //   repeat: Number.POSITIVE_INFINITY,
            //   ease: "easeInOut",
            //   delay: Math.random() * 2,
            // }}
          />
        ))}
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
        // variants={containerVariants}
        // initial="hidden"
        // animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <motion.h1
            // ref={titleRef}
            className="text-5xl md:text-7xl font-bold mb-4 mt-10 pb-2"
            // className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mt-10 pb-2"
            // animate={{
            //   backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            // }}
            // transition={{
            //   duration: 3,
            //   repeat: Number.POSITIVE_INFINITY,
            //   ease: "linear",
            // }}
          >
            Discover the World
          </motion.h1>

          <motion.div
            className="flex items-center justify-center space-x-2 mb-6"
            // animate={{
            //   scale: [1, 1.05, 1],
            // }}
            // transition={{
            //   duration: 2,
            //   repeat: Number.POSITIVE_INFINITY,
            //   ease: "easeInOut",
            // }}
          >
            <Sparkles className="h-6 w-6 text-yellow-400" />
            <span className="text-xl text-yellow-200">
              Luxury tours across the world
            </span>
            <Sparkles className="h-6 w-6 text-yellow-400" />
          </motion.div>
        </motion.div>

        {/* Enhanced Search Bar */}
        {/* <motion.div
          variants={itemVariants}
          className="search-container bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-2xl mx-auto border border-white/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div
              className="flex items-center space-x-2 bg-white/20 rounded-lg p-3 hover:bg-white/30 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MapPin className="h-5 w-5" />
              <Input
                placeholder="Where to?"
                className="bg-transparent border-none text-white placeholder-gray-300"
              />
            </motion.div>
            <motion.div
              className="flex items-center space-x-2 bg-white/20 rounded-lg p-3 hover:bg-white/30 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Calendar className="h-5 w-5" />
              <Input
                type="date"
                className="bg-transparent border-none text-white"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white magnetic-btn">
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
            </motion.div>
          </div>
        </motion.div> */}

        {/* Enhanced Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-8 mt-12 max-w-md mx-auto"
        >
          {[
            { number: 50, label: "Destinations", suffix: "+", add: "+" },
            {
              number: 1000,
              label: "Happy Travelers",
              suffix: "+",
              add: "+",
            },
            { number: 10, label: "Years Experience", suffix: "+", add: "+" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              // className="text-center"
              // whileHover={{ scale: 1.1 }}
              // transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex flex-row justify-center items-center">
                <motion.div
                  className="text-3xl font-bold stat-number"
                  data-count={stat.number}
                  // animate={{
                  //   textShadow: [
                  //     "0 0 0px rgba(255,255,255,0.5)",
                  //     "0 0 20px rgba(255,255,255,0.8)",
                  //     "0 0 0px rgba(255,255,255,0.5)",
                  //   ],
                  // }}
                  // transition={{
                  //   duration: 2,
                  //   repeat: Number.POSITIVE_INFINITY,
                  //   ease: "easeInOut",
                  // }}
                >
                  0{stat.suffix}
                </motion.div>
                <div>{stat.add && <span> {stat.add}</span>}</div>
              </div>

              <div className="text-sm text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      {/* <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 2,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.2 }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center relative overflow-hidden">
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{
              y: [0, 16, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div> */}

      {/* Floating Action Button */}
      {/* <motion.div
        className="absolute bottom-20 right-8"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button className="rounded-full w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 shadow-2xl">
          <Sparkles className="h-6 w-6" />
        </Button>
      </motion.div> */}
    </motion.section>
  );
}
