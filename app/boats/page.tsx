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
import CustomerSLideshow from "@/components/chartered-slideshow";
import { useRef, useState, useEffect } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { Dialog } from "@headlessui/react";
import { useMemo } from "react";
import { X } from "lucide-react";

type Boat = {
  name: string;
  type: string;
  capacity: string;
  price: string;
  image: string[];
  features: string[];
  rating: number;
  description: string;
  specifications: {
    length: string;
    engine: string;
    fuel: string;
    speed: string;
  };
};

const boats: Boat[] = [
  {
    name: "Gulet Aegan",
    type: "Gulet",
    capacity: "Up to 25 guests",
    price: "From $222,008 to $3,017,038",
    image: [
      "/boat/chartered/c (1).jpg",
      "/boat/chartered/c (2).jpg",
      "/boat/chartered/c (3).jpg",
      "/boat/chartered/c (5).jpg",
      "/boat/chartered/c (6).jpg",
      "/boat/chartered/c (8).jpg",
    ],
    features: [
      "Wooden classic yacht",
      "Built in Bodrum or Marmaris",
      "6 to 11 cabins",
      "Luxury sailing experience",
      "Crew included",
      "Air conditioning, 24-hour generator",
    ],
    rating: 4.8,
    description:
      "A traditional Turkish sailing vessel offering charm, comfort, and craftsmanship, ideal for private and charter use.",
    specifications: {
      length: "30 to 32 meters",
      engine: "2 x 115 HP",
      fuel: "2,800 L",
      speed: "10 knots cruising",
    },
  },
  {
    name: "Gulet Agantur Ketch",
    type: "Gulet",
    capacity: "10 guests",
    price: "From $222,008 to $3,017,038",
    image: [
      "/boat/chartered/ca (7).jpg",
      "/boat/chartered/ca (2).jpg",
      "/boat/chartered/ca (3).jpg",
      "/boat/chartered/ca (4).jpg",
      "/boat/chartered/ca (5).jpg",
      "/boat/chartered/ca (6).jpg",
      "/boat/chartered/ca (1).jpg",
    ],
    features: [
      "Traditional wooden hull",
      "Ketch rig for stable sailing",
      "Spacious aft dining area",
      "Sunbathing deck with loungers",
      "Air conditioning in cabins",
      "Water sports equipment (snorkeling, kayak, paddleboard)",
    ],
    rating: 4.8,
    description:
      "Gulet Agantur Ketch is a beautifully crafted traditional gulet ideal for cruising the turquoise coasts of Turkey and the Greek islands. Offering comfort, authentic charm, and attentive crew service, she’s perfect for groups seeking a relaxing sailing holiday.",
    specifications: {
      length: "24 meters",
      engine: "2 x 250 HP Diesel",
      fuel: "Diesel",
      speed: "9-10 knots cruising",
    },
  },
  {
    name: "Gulet Custom 24m",
    type: "Gulet",
    capacity: "8-12 guests",
    price: "From $222,008 to $3,017,038",
    image: [
      "/boat/chartered/cb (1).jpg",
      "/boat/chartered/cb (4).jpg",
      "/boat/chartered/cb (6).jpg",
      "/boat/chartered/cb (5).jpg",
      "/boat/chartered/cb (3).jpg",
    ],
    features: [
      "Wooden hull and deck",
      "Spacious aft deck for dining",
      "Sunbathing area with loungers",
      "Fully equipped kitchen",
      "Air conditioning",
      "Water toys (kayak, paddleboard, snorkeling gear)",
    ],
    rating: 4.7,
    description:
      "A classic 24-meter gulet offering relaxed cruising along the Mediterranean coast. Perfect for families or groups seeking comfort, style, and authentic sailing experiences.",
    specifications: {
      length: "24 meters",
      engine: "2 x 280 HP Diesel",
      fuel: "Diesel",
      speed: "10 knots cruising",
    },
  },
  {
    name: "Gulet Turquia Mehmet 15 Meler",
    type: "Gulet",
    capacity: "8-12 guests",
    price: "From $222,008 to $3,017,038",
    image: [
      "/boat/chartered/cc (1).jpg",
      "/boat/chartered/cc (4).jpg",
      "/boat/chartered/cc (5).jpg",
      "/boat/chartered/cc (6).jpg",
      "/boat/chartered/cc (7).jpg",
      "/boat/chartered/cc (2).jpg",
    ],
    features: [
      "Wooden hull and deck",
      "Spacious aft deck for dining",
      "Sunbathing area with loungers",
      "Fully equipped kitchen",
      "Air conditioning",
      "Water toys (kayak, paddleboard, snorkeling gear)",
    ],
    rating: 4.7,
    description:
      "A classic 24-meter gulet offering relaxed cruising along the Mediterranean coast. Perfect for families or groups seeking comfort, style, and authentic sailing experiences.",
    specifications: {
      length: "24 meters",
      engine: "2 x 280 HP Diesel",
      fuel: "Diesel",
      speed: "10 knots cruising",
    },
  },
  {
    name: "Gulet Bodrum Shipyard Tirandil",
    type: "Gulet",
    capacity: "8-10 guests",
    price: "From $222,008 to $3,017,038",
    image: [
      "/boat/chartered/cd (1).jpg",
      "/boat/chartered/cd (3).jpg",
      "/boat/chartered/cd (4).jpg",
      "/boat/chartered/cd (5).jpg",
      "/boat/chartered/cd (6).jpg",
      "/boat/chartered/cd (7).jpg",
      "/boat/chartered/cd (8).jpg",
    ],
    features: [
      "spacious living room",
      "Spacious aft deck for dining",
      "Sunbathing area with loungers",
      "Fully equipped kitchen",
      "Air conditioning",
      "wifi available",
      "Water toys (kayak, paddleboard, snorkeling gear)",
    ],
    rating: 4.7,
    description:
      "The Tirandila, a 22mt tirandil, with a classic line, made with exquisite wood, extremely elegant and with great space and comfort for the guests.",
    specifications: {
      length: "24 meters",
      engine: "2 x 280 HP Diesel",
      fuel: "Diesel",
      speed: "10 knots cruising",
    },
  },
  // sailboat
  {
    name: "Sailboat Hanse Custom Yacht",
    type: "Sailboat",
    capacity: "Up to 8 guests",
    price: "From €310,000 (VAT paid)",
    image: [
      "/boat/chartered/d.jpg",
      "/boat/chartered/d2.jpg",
      "/boat/chartered/d3.jpg",
      "/boat/chartered/d4.jpg",
      "/boat/chartered/d5.jpg",
      "/boat/chartered/d6.jpg",
      "/boat/chartered/d1.jpg",
    ],
    features: [
      "17.5 m fiberglass hull with 5.5 m beam",
      "High-performance North Sails 3D rig",
      "Carbon V‑boom",
      "Spacious saloon (+35% volume)",
      "2 guest cabins + master cabin",
      "2‑3 bathrooms",
      "Self‑tacking jib and modern deck layout",
      "Taller rig and self‑tacking systems for ‘Easy Sailing’",
    ],
    rating: 4.8,
    description:
      "The Hanse 575 Custom offers the perfect blend of performance and luxury. Built for sailors who want speed without sacrificing comfort, it features a sporty hull, carbon boom, and spacious living areas. Ideal for Mediterranean charters with friends or family.",
    specifications: {
      length: "17.50 m",
      engine: "twin or single diesel (e.g. Volvo D3‑150)",
      fuel: "≈ 1,200 L",
      speed: "peaks of 12–13 kn under sail",
    },
  },
  {
    name: "Sailboat Hanse 510",
    type: "Sailboat",
    capacity: "Up to 8 guests",
    price: "From €310,000 (VAT paid)",
    image: [
      "/boat/chartered/da.jpg",
      "/boat/chartered/da1.jpg",
      "/boat/chartered/da2.jpg",
      "/boat/chartered/da3.jpg",
      "/boat/chartered/da4.jpg",
      "/boat/chartered/da5.jpg",
      "/boat/chartered/da6.jpg",
      "/boat/chartered/da7.jpg",
      "/boat/chartered/da.jpg",
    ],
    features: [
      "Optional FCL performance rig or standard rig",
      "Self-tacking jib for effortless sailing",
      "Large cockpit with dual helm stations",
      "Optional T-top over cockpit for sun protection",
      "Bright, spacious saloon with panoramic windows",
      "3 or 4 cabins layout options",
      "Innovative tender garage with fold-down swim platform",
    ],
    rating: 4.8,
    description:
      "The Hanse 510 is a modern, fast cruiser combining innovative design and superior sailing performance. With her wide beam, sleek lines, and user-friendly sail handling systems, she’s perfect for sailors who want comfort without sacrificing speed. The large cockpit and elegant interior make her an ideal yacht for Mediterranean or offshore cruising.",
    specifications: {
      length: "15.97 meters",
      engine: "Standard Yanmar 80 HP diesel",
      fuel: "≈ 200 L",
      speed: "Up to 9–10 knots cruising; higher under sail",
    },
  },
  {
    name: "Sailboat Dufour Grand Large 460",
    type: "Sailboat",
    capacity: "Up to 10 guests",
    price: "From €265,000 (VAT paid)",
    image: [
      "/boat/chartered/db1.jpg",
      "/boat/chartered/db.jpg",
      "/boat/chartered/db2.jpg",
      "/boat/chartered/db3.jpg",
      "/boat/chartered/db4.jpg",
      "/boat/chartered/db5.jpg",
      "/boat/chartered/db6.jpg",
      "/boat/chartered/db7.jpg",
    ],
    features: [
      "Spacious cockpit with twin helms and folding table",
      "Self-tacking jib for easy handling",
      "Integrated outdoor galley with grill and sink",
      "Bright, modern saloon with panoramic windows",
      "3 or 4 cabin layouts with 2 or 3 heads",
      "Large fold-down swim platform",
      "Electric winches option for effortless sailing",
    ],
    rating: 4.7,
    description:
      "The Dufour Grand Large 460 is a modern cruiser delivering exceptional comfort and great sailing performance. Her spacious cockpit and clever outdoor galley are perfect for socializing, while her bright interior offers generous living space. Ideal for family or group charters across the Mediterranean or long coastal voyages.",
    specifications: {
      length: "14.15 meters",
      engine: "Volvo Penta D2-55 (55 HP)",
      fuel: "250 L",
      speed: "7–9 knots cruising under power; higher under sail",
    },
  },
  {
    name: "Sailboat Bavaria 50 Cruiser",
    type: "Sailboat",
    capacity: "Up to 10 guests",
    price: "From €160,000 (VAT paid, used market)",
    image: [
      "/boat/chartered/dc1.jpg",
      "/boat/chartered/dc2.jpg",
      "/boat/chartered/dc3.jpg",
      "/boat/chartered/dc4.jpg",
      "/boat/chartered/dc5.jpg",
      "/boat/chartered/dc6.jpg",
    ],
    features: [
      "Spacious cockpit with twin wheels and large table",
      "Large saloon with U-shaped seating and navigation station",
      "5 cabins layout (3 double + 2 bunk cabins)",
      "3 bathrooms with showers",
      "Electric anchor windlass",
      "Wide swim platform for easy water access",
      "Self-tacking jib and in-mast furling options",
    ],
    rating: 4.6,
    description:
      "The Bavaria 50 Cruiser is a popular blue-water sailing yacht offering impressive comfort, robust build, and easy handling. Her spacious interior and versatile cabin layouts make her perfect for family holidays or group charters in the Mediterranean and beyond.",
    specifications: {
      length: "15.43 meters",
      engine: "Volvo Penta D2-75 (75 HP)",
      fuel: "320 L",
      speed: "7–9 knots cruising under power; higher under sail",
    },
  },

  // open yacht
  // {
  //   name: "Sarnico 43",
  //   type: "Open Yacht",
  //   capacity: "1 guest cabin",
  //   price: "Not specified",
  //   image: [
  //     "/boat/three.jpg",
  //     "/boat/boats/g.jpg",
  //     "/boat/boats/g (17).jpg",
  //     "/boat/boats/g (2).jpg",
  //     "/boat/boats/g (20).jpg",
  //     "/boat/boats/g (15).jpg",
  //   ],
  //   features: [
  //     "Fiberglass/GRP hull",
  //     "CE certification class B",
  //     "Speed up to 36 knots",
  //     "Draft of 1.08 meters",
  //   ],
  //   rating: 4.8,
  //   description:
  //     "A luxurious open yacht with refined style and quality execution, ideal for coastal cruising.",
  //   specifications: {
  //     length: "43 feet",
  //     engine: "Not specified",
  //     fuel: "Not specified",
  //     speed: "36 knots",
  //   },
  // },
  // flybridge yatch
  {
    name: "46' Sea Ray Flybridge",
    type: "Luxury Yacht",
    capacity: "12 guests",
    price: "From $97,010 to $11,243,252",
    image: [
      "/boat/chartered/b (1).jpg",
      "/boat/chartered/b (2).jpg",
      "/boat/chartered/b (4).jpg",
      "/boat/chartered/b (5).jpg",
      "/boat/chartered/b (6).jpg",
      "/boat/chartered/b (8).jpg",
    ],
    features: [
      "Flybridge with Lounge Seating",
      "Spacious Salon with Panoramic Views",
      "2 Cabins + 2 Bathrooms",
      "Luxury and comfort",
    ],
    rating: 4.8,
    description:
      "The 46' Sea Ray Flybridge combines elegance and performance with expansive upper-deck views, making it ideal for both luxury day charters and overnight cruising. Whether you're hosting a sunset party or enjoying a relaxed family outing, this yacht offers both comfort and style.",
    specifications: {
      length: "14.02 meters",
      engine: "2 x 550 HP Cummins",
      fuel: "1,500 L",
      speed: "20–26 knots (cruising)",
    },
  },
  {
    name: "Azimut Flybridge",
    type: "Luxury Yacht",
    capacity: "6-8 guests",
    price: "From $97,010 to $11,243,252",
    image: [
      "/boat/chartered/bc (1).jpg",
      "/boat/chartered/bc (2).jpg",
      "/boat/chartered/bc (3).jpg",
      "/boat/chartered/bc (4).jpg",
    ],
    features: [
      "Spacious Flybridge with Sun Lounge",
      "Luxury and comfort",
      "3 Cabins + Crew Quarters",
      "Panoramic Salon Windows",
    ],
    rating: 4.8,
    description:
      "The Azimut Flybridge blends Italian design with cutting-edge engineering, offering an elegant yet powerful cruising experience. With luxurious interiors, expansive decks, and refined finishes, it’s a favorite for private charters and high-end leisure cruising.",
    specifications: {
      length: "15.88 meters",
      engine: "2 x 670 HP Volvo Penta",
      fuel: "2,200 L",
      speed: "24–30 knots (cruising)",
    },
  },
  {
    name: "Azimut Salt Shaker",
    type: "Luxury Yacht",
    capacity: "13 guests",
    price: "From $97,010 to $11,243,252",
    image: [
      "/boat/chartered/bb (1).jpg",
      "/boat/chartered/bb (2).jpg",
      "/boat/chartered/bb (3).jpg",
      "/boat/chartered/bb (4).jpg",
    ],
    features: [
      "Expansive Flybridge with Lounging Area",
      "3 Luxurious Guest Cabins + Crew Quarters",
      "Air-Conditioned Interior Lounge",
      "Full Galley with Dining Space",
      "Bluetooth Sound System & TVs",
      "Hydraulic Swim Platform",
    ],
    rating: 4.8,
    description:
      "The Azimut 'Salt Shaker' is a stunning 55-ft motor yacht offering Italian luxury, power, and comfort for unforgettable charters. Ideal for daytime cruising, events, or multi-day escapes, this vessel features open-plan decks, plush interiors, and panoramic sea views from the flybridge.",
    specifications: {
      length: "16.7 meters",
      engine: "2 x 730 HP MAN",
      fuel: "2,500 L",
      speed: "26–31 knots (cruising)",
    },
  },
  {
    name: "Ferretti Lumar",
    type: "Luxury Yacht",
    capacity: "12 guests",
    price: "From $97,010 to $11,243,252",
    image: [
      "/boat/chartered/bd.jpg",
      "/boat/chartered/bd (4).jpg",
      "/boat/chartered/bd (5).jpg",
      "/boat/chartered/bd (1).jpg",
    ],
    features: [
      "Elegant Flybridge with Lounge Area",
      "3 Spacious Guest Cabins + Crew Cabin",
      "Contemporary Italian Interior Design",
      "Large Sunbathing Deck & Swim Platform",
      "Full-Service Galley and Dining Area",
      "Stabilizers for Smooth Cruising",
      "High-tech innovation",
      "Luxury and comfort",
    ],
    rating: 4.8,
    description:
      "The Ferretti Lumar is a refined luxury motor yacht built for high-end cruising. Combining world-class Italian craftsmanship with modern performance, it offers an exceptional charter experience for families, groups, or corporate retreats. With expansive decks, elegant interiors, and attentive crew service, 'Lumar' delivers both comfort and style on the sea.",
    specifications: {
      length: "21.0 meters",
      engine: "2 x 1100 HP MAN",
      fuel: "4,000 L",
      speed: "24–30 knots (cruising)",
    },
  },
  //  cataraman
  {
    name: "Lagoon 46",
    type: "Sailing Catamaran",
    capacity: "10 guests",
    price: "€686,800",
    image: [
      "/boat/five.jpg",
      "/boat/chartered/a (4).jpg",
      "/boat/chartered/a (6).jpg",
      "/boat/chartered/a (7).jpg",
      "/boat/chartered/a (11).jpg",
    ],
    features: [
      "Fiberglass/GRP hull",
      "CE certification class A",
      "3 Cabins",
      "Sail area of 140.1 m²",
    ],
    rating: 4.8,
    description:
      "A perfect long-term cruising catamaran offering easy responsive performance and functional luxury.",
    specifications: {
      length: "13.99 meters",
      engine: "Not specified",
      fuel: "Not specified",
      speed: "Not specified",
    },
  },
  {
    name: "Lagoon 42",
    type: "Sailing Catamaran",
    capacity: "10 guests",
    price: "€686,800",
    image: [
      "/boat/chartered/a (3).jpg",
      "/boat/chartered/a (5).jpg",
      "/boat/chartered/a (2).jpg",
      "/boat/chartered/a (10).jpg",
    ],
    features: [
      "Fiberglass/GRP hull",
      "CE certification class A",
      "3 Cabins + 3 Bathrooms",
      "Sail area of 140.1 m²",
    ],
    rating: 4.8,
    description:
      "A perfect long-term cruising catamaran offering easy responsive performance and functional luxury. The Lagoon 42 blends comfort, style, and seaworthiness in a compact yet spacious design.",
    specifications: {
      length: "12.80 meters",
      engine: "2 x 57 HP Yanmar",
      fuel: "300 L",
      speed: "8–9 knots (cruising)",
    },
  },
  {
    name: "Lagoon 450",
    type: "Sailing Catamaran",
    capacity: "12 guests",
    price: "€740,000",
    image: [
      "/boat/chartered/a (16).jpg",
      "/boat/chartered/a (17).jpg",
      "/boat/chartered/a (14).jpg",
      "/boat/chartered/a (13).jpg",
    ],
    features: [
      "Spacious Dual-Hull Design",
      "4 Cabins with Ensuite Bathrooms",
      "Onboard Kitchen & Lounge",
      "Sunbathing Deck and Net",
      "Shaded Outdoor Seating Area",
    ],
    rating: 4.9,
    description:
      "The Lagoon 450 is a luxury catamaran combining spacious comfort, top-tier performance, and reliable handling — ideal for family cruising or private charters.",
    specifications: {
      length: "13.96 meters",
      engine: "2 x 45 HP Yanmar",
      fuel: "2 x 520 L",
      speed: "8–10 knots (cruising)",
    },
  },

  {
    name: "Lagoon 50",
    type: "Sailing Catamaran",
    capacity: "14 guests",
    price: "€686,800",
    image: [
      "/boat/chartered/a (1).jpg",
      "/boat/chartered/a (8).jpg",
      "/boat/chartered/a (6).jpg",
      "/boat/chartered/a (12).jpg",
    ],
    features: [
      "Fiberglass/GRP hull",
      "CE certification class A",
      "3 Cabins",
      "Sail area of 140.1 m²",
    ],
    rating: 4.8,
    description:
      "The Lagoon 50 strikes the perfect balance between volume, performance, and luxury, offering expansive living spaces and smooth sailing for long voyages or premium charters.",
    specifications: {
      length: "14.75 meters",
      engine: "2 x 57 HP Yanmar",
      fuel: "2 x 520 L",
      speed: "9–11 knots (cruising)",
    },
  },
  // fishing boat
  {
    name: "Swift Mariner",
    type: "Fishing Boat",
    capacity: "10 guests",
    price: "€686,800",
    image: [
      "/fishing/a (1).jpg",
      "/fishing/d (16).jpg",
      "/fishing/a (3).jpg",
      "/fishing/a (5).jpg",
      "/fishing/a (6).jpg",
      "/fishing/a (22).jpg",
      "/fishing/d (9).jpg",
      "/fishing/b (18).jpg",
    ],
    features: [
      "Fiberglass/GRP hull",
      "CE certification class A",
      "3 Cabins for guests or crew",
      "Sail area of 140.1 m²",
    ],
    rating: 4.8,
    description:
      "A perfect long-term cruising fishing boat offering easy handling, robust construction, and the functional luxury needed for extended fishing adventures. The Swift Mariner combines performance with comfort, making it ideal for serious anglers and leisure cruises alike.",
    specifications: {
      length: "13.99 meters",
      engine: "Twin diesel engines, 370 HP each",
      fuel: "1,200 liters",
      speed: "Up to 24 knots",
    },
  },
  {
    name: "Swift Sport Fisher",
    type: "Fishing Boat",
    capacity: "6 guests",
    price: "€950/day",
    image: [
      "/fishing/c (15).jpg",
      "/fishing/c (20).jpg",
      "/fishing/a (7).jpg",
      "/fishing/a (10).jpg",
      "/fishing/b (1).jpg",
      "/fishing/c (16).jpg",
      "/fishing/d (5).jpg",
    ],
    features: [
      "Spacious cockpit for fishing",
      "Rod holders and outriggers",
      "Live bait well",
      "Comfortable seating",
      "Swim ladder for easy access",
      "Sunshade canopy",
    ],
    rating: 4.7,
    description:
      "Swift Sport Fisher is a versatile fishing boat ideal for exciting offshore trips. Equipped with ample deck space, fishing gear storage, and comfortable seating, it offers both thrilling catches and enjoyable cruising.",
    specifications: {
      length: "8.5 meters",
      engine: "Twin 200 HP outboard engines",
      fuel: "Petrol",
      speed: "30 knots max",
    },
  },
  {
    name: "Swift Offshore Angler",
    type: "Fishing Boat",
    capacity: "6 guests",
    price: "€1,250/day",
    image: [
      "/fishing/d (27).jpg",
      "/fishing/d (1).jpg",
      "/fishing/c (6).jpg",
      "/fishing/d (8).jpg",
      "/fishing/c (8).jpg",
      "/fishing/b (22).jpg",
      "/fishing/c (3).jpg",
      // "/fishing/d (27).jpg",
    ],
    features: [
      "Center console layout",
      "Large live bait well",
      "Rod holders and tackle storage",
      "Integrated fish boxes",
      "Powerful outboard engines",
      "Ample deck space for big catches",
      "Comfortable seating and sunshade",
    ],
    rating: 4.9,
    description:
      "The Swift Offshore Angler is a premium sportfishing boat, ideal for deep-sea fishing adventures. It combines powerful performance with a spacious deck, making it perfect for reeling in trophy catches while enjoying a smooth and stable ride.",
    specifications: {
      length: "9.5 meters",
      engine: "Twin 250 HP outboards",
      fuel: "Petrol",
      speed: "32 knots max",
    },
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

const getBoatTypes = (boats: Boat[]) => [
  ...new Set(boats.map((boat) => boat.type)),
];

export default function BoatsPage() {
  const country = [
    {
      name: "France",
      countries: ["Nice", "Cannes", "Marseille", "Monaco", "Corsica"],
    },
    {
      name: "Italy",
      countries: ["Naples", "Amalfi", "Sicily", "Sardinia", "Venice"],
    },
    {
      name: "Spain",
      countries: ["Barcelona", "Ibiza", "Mallorca", "Valencia", "Marbella"],
    },
    {
      name: "Greece",
      countries: ["Athens", "Santorini", "Mykonos", "Corfu", "Rhodes"],
    },
    {
      name: "Croatia",
      countries: ["Split", "Dubrovnik", "Zadar", "Hvar", "Pula"],
    },
    {
      name: "Montenegro",
      countries: ["Kotor", "Budva", "Herceg Novi", "Tivat", "Bar"],
    },
    {
      name: "Turkey",
      countries: ["Bodrum", "Marmaris", "Fethiye", "Gocek", "Antalya"],
    },
    {
      name: "Portugal",
      countries: ["Lisbon", "Faro", "Lagos", "Madeira", "Cascais"],
    },
    {
      name: "Malta",
      countries: ["Valletta", "Sliema", "Gozo", "Comino"],
    },
    {
      name: "Norway",
      countries: ["Bergen", "Ålesund", "Tromsø", "Oslo", "Geiranger"],
    },
    {
      name: "Sweden",
      countries: ["Stockholm", "Gothenburg", "Malmö", "Visby"],
    },
    {
      name: "United Kingdom",
      countries: [
        "Southampton",
        "Plymouth",
        "Portsmouth",
        "Edinburgh",
        "Cardiff",
      ],
    },
    {
      name: "Netherlands",
      countries: ["Amsterdam", "Rotterdam", "The Hague", "Leeuwarden"],
    }, // end of europe
    {
      name: "Thailand",
      countries: ["Phuket", "Krabi", "Koh Samui", "Pattaya", "Phi Phi Islands"],
    },
    {
      name: "Indonesia",
      countries: ["Bali", "Komodo", "Raja Ampat", "Lombok", "Jakarta"],
    },
    {
      name: "Philippines",
      countries: ["Palawan", "Cebu", "Boracay", "Manila", "Bohol"],
    },
    {
      name: "Vietnam",
      countries: ["Halong Bay", "Da Nang", "Nha Trang", "Phu Quoc", "Hoi An"],
    },
    {
      name: "Malaysia",
      countries: [
        "Langkawi",
        "Penang",
        "Tioman Island",
        "Kota Kinabalu",
        "Kuala Terengganu",
      ],
    },
    {
      name: "Japan",
      countries: ["Tokyo Bay", "Okinawa", "Hiroshima", "Nagasaki", "Kobe"],
    },
    {
      name: "India",
      countries: [
        "Goa",
        "Kerala (Backwaters)",
        "Mumbai",
        "Andaman Islands",
        "Chilika Lake",
      ],
    },
    {
      name: "Sri Lanka",
      countries: ["Galle", "Trincomalee", "Mirissa", "Colombo", "Bentota"],
    },
    {
      name: "Singapore",
      countries: ["Sentosa", "Marina Bay", "Pulau Ubin"],
    },
    {
      name: "Maldives",
      countries: ["Male", "Maafushi", "Ari Atoll", "Baa Atoll", "Hulhumale"],
    },
    {
      name: "United Arab Emirates",
      countries: ["Dubai", "Abu Dhabi", "Fujairah", "Ras Al Khaimah"],
    }, //end of asia
    {
      name: "Brazil",
      countries: [
        "Rio de Janeiro",
        "Paraty",
        "Angra dos Reis",
        "Salvador",
        "Manaus (Amazon)",
      ],
    },
    {
      name: "Argentina",
      countries: [
        "Buenos Aires",
        "Ushuaia",
        "Puerto Madryn",
        "Tigre",
        "Bariloche",
      ],
    },
    {
      name: "Chile",
      countries: [
        "Valparaíso",
        "Puerto Montt",
        "Punta Arenas",
        "Castro",
        "San Antonio",
      ],
    },
    {
      name: "Peru",
      countries: [
        "Lima",
        "Iquitos (Amazon)",
        "Puno (Lake Titicaca)",
        "Callao",
        "Paracas",
      ],
    },
    {
      name: "Colombia",
      countries: [
        "Cartagena",
        "Santa Marta",
        "San Andrés",
        "Barranquilla",
        "Turbo",
      ],
    },
    {
      name: "Ecuador",
      countries: [
        "Galápagos Islands",
        "Guayaquil",
        "Puerto Ayora",
        "Manta",
        "San Cristóbal",
      ],
    },
    {
      name: "Uruguay",
      countries: ["Montevideo", "Punta del Este", "Colonia del Sacramento"],
    },
    {
      name: "Venezuela",
      countries: [
        "Margarita Island",
        "Puerto La Cruz",
        "Morrocoy National Park",
      ],
    },
  ];

  // Add slideshow index state for each boat card
  const [slideIndexes, setSlideIndexes] = useState<{ [key: string]: number }>(
    {}
  );

  // Add city search state
  const [selectedCity, setselectedCity] = useState("");
  const [citySearch, setCitySearch] = useState("");

  // Add state for budget and number of people
  const [selectedBudget, setSelectedBudget] = useState(1000);
  const [numPeople, setNumPeople] = useState(2);

  // Helper to get images array for each boat (fallback to single image if not array)
  const getBoatImages = (boat: Boat) => {
    // Use boat.image as the array of images
    if (Array.isArray(boat.image)) {
      return boat.image;
    }
    // fallback if not array
    return [boat.image];
  };

  // Slideshow navigation handlers
  const handlePrev = (boat: Boat) => {
    const images = getBoatImages(boat);
    setSlideIndexes((prev) => ({
      ...prev,
      [boat.name]:
        prev[boat.name] > 0 ? prev[boat.name] - 1 : images.length - 1,
    }));
  };
  const handleNext = (boat: Boat) => {
    const images = getBoatImages(boat);
    setSlideIndexes((prev) => ({
      ...prev,
      [boat.name]:
        prev[boat.name] < images.length - 1 ? prev[boat.name] + 1 : 0,
    }));
  };

  // Add state to control city dropdown visibility
  const [showCityOptions, setShowCityOptions] = useState(false);
  const cityInputRef = useRef<HTMLInputElement>(null);

  // Hide city options when a city is selected
  useEffect(() => {
    if (selectedCity) setShowCityOptions(false);
  }, [selectedCity]);

  // Hide city options when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        cityInputRef.current &&
        !cityInputRef.current.contains(event.target as Node)
      ) {
        setShowCityOptions(false);
      }
    }
    if (showCityOptions) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCityOptions]);

  // Validate citySearch on blur or search
  const validateCity = () => {
    const found = country.find((c) => c.name === selectedCountry);
    if (!found) return;
    const valid = found.countries.some(
      (city: string) => city.toLowerCase() === citySearch.toLowerCase()
    );
    if (!valid && citySearch) {
      alert("Please select a valid city from the list.");
      setselectedCity("");
      setCitySearch("");
    }
  };

  const router = useRouter();
  const [selectedCountry, setselectedCountry] = useState("");
  // const [selectedCity, setselectedCity] = useState("");
  const [form, setForm] = useState({
    pickup: "",
  });
  const [selectedType, setSelectedType] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  // Add city search state
  // Get the list of cities for the selected country
  const cityOptions = useMemo(() => {
    const found = country.find((c) => c.name === selectedCountry);
    if (!found) return [];
    // Use .countries for the city list
    return found.countries.filter((city: string) =>
      city.toLowerCase().includes(citySearch.toLowerCase())
    );
  }, [selectedCountry, citySearch, country]);

  const [withSkipper, setWithSkipper] = useState("yes");
  const [place, setPlace] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [loading, setLoading] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBoat, setSelectedBoat] = useState<Boat | null>(null);
  const [orderForm, setOrderForm] = useState({
    city: "",
    country: "",
    pickup: "",
    type: "",
    departureDate: "",
    returnDate: "",
    withSkipper: "",
    boatName: "",
  });

  // Handle Book Now click
  const handleBookNow = (boat: Boat) => {
    setSelectedBoat(boat);
    setOrderForm({
      city: citySearch,
      country: selectedCountry,
      pickup: form.pickup,
      type: boat.type,
      departureDate,
      returnDate,
      withSkipper,
      boatName: boat.name,
    });
    setSelectedBudget(1000);
    setNumPeople(2);
    setModalOpen(true);
  };

  // Handle order form change
  const handleOrderChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setOrderForm({ ...orderForm, [e.target.name]: e.target.value });
  };

  // Handle place order
  const handlePlaceOrder = () => {
    // You can send orderForm data to your backend here
    alert("Order placed!");
    setModalOpen(false);
  };

  const resultsRef = useRef<HTMLDivElement>(null);

  // Filter boats by selected type
  const filteredBoats = selectedType
    ? boats.filter((b) => b.type === selectedType)
    : [];

  const handleClick = () => {
    router.push("/contact");
  };

  const handleSearch = () => {
    if (
      !citySearch ||
      !selectedCountry ||
      !departureDate ||
      !returnDate ||
      // !form.pickup ||
      !selectedType ||
      (withSkipper !== "yes" && withSkipper !== "no")
    ) {
      alert("Please fill all fields correctly.");
      return;
    }
    setLoading(true);
    setHasSearched(false);

    // Scroll to results section after a short delay to ensure ref is rendered
    setTimeout(() => {
      setLoading(false);
      setHasSearched(true);
      if (resultsRef.current) {
        resultsRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 3000);

    // Scroll to loading animation immediately
    setTimeout(() => {
      if (resultsRef.current) {
        resultsRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const selectedCountryCode = useMemo(() => {
    // Map country names to ISO country codes for Google Places API
    const countryMap: Record<string, string> = {
      France: "fr",
      Italy: "it",
      Spain: "es",
      Montenegro: "me",
      Greece: "gr",
      Croatia: "hr",
      Turkey: "tr",
      Portugal: "pt",
      Malta: "mt",
      Norway: "no",
      Sweden: "se",
      "United Kingdom": "gb",
      Netherlands: "nl",
      Thailand: "th",
      Vietnam: "vn",
      Indonesia: "id",
      Philippines: "ph",
      Japan: "jp",
      India: "in",
      Malaysia: "my",
      Singapore: "sg",
      Maldives: "mv",
      "United Arab Emirates": "ae",
      Brazil: "br",
      Argentina: "ar",
      Chile: "cl",
      Peru: "pe",
      Colombia: "co",
      Ecuador: "ec",
      Uruguay: "uy",
      Venezuela: "ve",
    };
    return countryMap[selectedCountry] || undefined;
  }, [selectedCountry]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-50">
      <Navigation />

      {
        // !loading
        !hasSearched ? <CustomerSLideshow /> : <div></div>
      }
      {/* Hero Section */}
      {/* <section className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/chartered.jpg"
            alt="Luxury boats"
            className="w-full h-full object-cover "
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
      </section> */}

      {/* Search Card */}
      <section className="pt-24 pb-8 flex justify-center">
        <Card className="w-full max-w-4xl mx-auto shadow-2xl border-0 p-8">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900 mb-4">
              Find Your Perfect Boat to Charter
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Country Search */}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Country
                </label>
                <select
                  value={selectedCountry}
                  onChange={(e) => {
                    setselectedCountry(e.target.value);
                    // setselectedCity(""); // Reset city when continent changes
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3"
                >
                  <option value="">Select Country</option>
                  <optgroup label="Europe">
                    {country
                      .filter((c) =>
                        [
                          "France",
                          "Italy",
                          "Spain",
                          "Montenegro",
                          "Greece",
                          "Croatia",
                          "Portugal",
                          "Malta",
                          "Norway",
                          "Sweden",
                          "United Kingdom",
                          "Netherlands",
                        ].includes(c.name)
                      )
                      .map((cont) => (
                        <option key={cont.name} value={cont.name}>
                          {cont.name}
                        </option>
                      ))}
                  </optgroup>
                  <optgroup label="Asia">
                    {country
                      .filter((c) =>
                        [
                          "Thailand",
                          "Vietnam",
                          "Indonesia",
                          "Philippines",
                          "Japan",
                          "India",
                          "Malaysia",
                          "Singapore",
                          "Maldives",
                          "Turkey",
                          "United Arab Emirates",
                        ].includes(c.name)
                      )
                      .map((cont) => (
                        <option key={cont.name} value={cont.name}>
                          {cont.name}
                        </option>
                      ))}
                  </optgroup>
                  <optgroup label="South America">
                    {country
                      .filter((c) =>
                        [
                          "Brazil",
                          "Argentina",
                          "Chile",
                          "Peru",
                          "Colombia",
                          "Ecuador",
                          "Uruguay",
                          "Venezuela",
                        ].includes(c.name)
                      )
                      .map((cont) => (
                        <option key={cont.name} value={cont.name}>
                          {cont.name}
                        </option>
                      ))}
                  </optgroup>
                </select>
              </div>
              {/* City Search */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City
                </label>
                <input
                  ref={cityInputRef}
                  type="text"
                  placeholder="Search city"
                  value={citySearch}
                  onChange={(e) => {
                    setCitySearch(e.target.value);
                    setShowCityOptions(true);
                    setselectedCity(""); // Reset selectedCity if user types
                  }}
                  onFocus={() => setShowCityOptions(true)}
                  onBlur={validateCity}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
                  disabled={!selectedCountry}
                  autoComplete="off"
                />
                {/* Overlay city options */}
                {showCityOptions && selectedCountry && (
                  <div className="absolute left-0 right-0 z-30 max-h-40 overflow-y-auto border border-gray-200 rounded-md bg-white shadow-lg">
                    {cityOptions.length > 0 ? (
                      cityOptions.map((city) => (
                        <div
                          key={city}
                          className={`px-3 py-2 cursor-pointer hover:bg-blue-100 ${
                            selectedCity === city
                              ? "bg-blue-50 font-semibold"
                              : ""
                          }`}
                          onMouseDown={() => {
                            setselectedCity(city);
                            setCitySearch(city);
                            setShowCityOptions(false);
                          }}
                        >
                          {city}, {selectedCountry}
                        </div>
                      ))
                    ) : (
                      <div className="px-3 py-2 text-gray-400">
                        No cities found.
                      </div>
                    )}
                  </div>
                )}
              </div>
              {/* pick-up location  */}
              {/* <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pick-up Location
                </label>
                <GooglePlacesAutocomplete
                  selectProps={{
                    placeholder: "Search pick-up location",
                    value: form.pickup
                      ? { label: form.pickup, value: form.pickup }
                      : null,
                    onChange: (option) => {
                      setForm((prev) => ({
                        ...prev,
                        pickup: option?.label || "",
                      }));
                    },
                  }}
                  apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
                  autocompletionRequest={
                    selectedCountryCode
                      ? {
                          componentRestrictions: {
                            country: selectedCountryCode,
                          },
                        }
                      : undefined
                  }
                />
              </div> */}
              {/* Boat type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Boat Type
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="">----</option>
                  {getBoatTypes(boats).map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              {/* Date selectors */}
              <div className="flex gap-2">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Departure Date
                  </label>
                  <input
                    type="date"
                    value={departureDate}
                    min={new Date().toISOString().split("T")[0]}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Return Date
                  </label>
                  <input
                    type="date"
                    value={returnDate}
                    min={new Date().toISOString().split("T")[0]}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>

              {/* Skipper */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  With Skipper <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  <Button
                    type="button"
                    className={`flex-1 ${
                      withSkipper === "yes"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700"
                    }`}
                    onClick={() => setWithSkipper("yes")}
                    variant={withSkipper === "yes" ? "default" : "outline"}
                  >
                    With Skipper
                  </Button>
                  <Button
                    type="button"
                    className={`flex-1 ${
                      withSkipper === "no"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700"
                    }`}
                    onClick={() => setWithSkipper("no")}
                    variant={withSkipper === "no" ? "default" : "outline"}
                  >
                    Without Skipper
                  </Button>
                </div>
                {withSkipper === "any" && (
                  <div className="text-red-500 text-xs mt-1">
                    Please select an option.
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <Button
                className="bg-blue-600 hover:bg-blue-700"
                size="lg"
                onClick={handleSearch}
                type="button"
              >
                Search
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Boats Fleet Section */}
      <div ref={resultsRef}>
        {loading && (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 border-b-4 "></div>
            <p className="text-gray-600 ml-4">Loading results...</p>
          </div>
        )}
        {!loading && hasSearched && (
          // <div className="text-center py-8">
          //   <h2 className="text-3xl font-bold text-gray-900 mb-4">
          //     Available Boats
          //   </h2>
          //   {filteredBoats.length > 0 ? (
          //     <p className="text-gray-600">
          //       Found {filteredBoats.length} boats matching your criteria.
          //     </p>
          //   ) : (
          //     <p className="text-red-500">
          //       No boats found for the selected criteria.
          //     </p>
          //   )}
          // </div>
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
              {filteredBoats.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredBoats.map((boat, index) => (
                      <motion.div
                        key={boat.name}
                        // initial={{ opacity: 0, y: 50 }}
                        // whileInView={{ opacity: 1, y: 0 }}
                        // transition={{ duration: 0.6, delay: index * 0.1 }}
                        // whileHover={{ y: -10, scale: 1.02 }}
                        className="group"
                      >
                        <Card className="overflow-hidden  border-0 shadow-lg">
                          <div className="relative overflow-hidden">
                            {/* <Image //change to img and remove height and width
                              width={1200}
                              height={12}
                              src={boat.image || "/placeholder.svg"}
                              alt={boat.name}
                              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                            /> */}
                            {/* Slideshow */}
                            <div className="relative w-full h-72">
                              <img
                                src={
                                  getBoatImages(boat)[
                                    slideIndexes[boat.name] || 0
                                  ] || "/placeholder.svg"
                                }
                                alt={boat.name}
                                className="w-full h-72 object-cover "
                              />
                              {getBoatImages(boat).length > 1 && (
                                <>
                                  <button
                                    type="button"
                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-1 hover:bg-white z-10"
                                    onClick={() => handlePrev(boat)}
                                    aria-label="Previous"
                                  >
                                    &#8592;
                                  </button>
                                  <button
                                    type="button"
                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-1 hover:bg-white z-10"
                                    onClick={() => handleNext(boat)}
                                    aria-label="Next"
                                  >
                                    &#8594;
                                  </button>
                                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                                    {getBoatImages(boat).map(
                                      (_: any, idx: number) => (
                                        <span
                                          key={idx}
                                          className={`inline-block w-2 h-2 rounded-full ${
                                            idx ===
                                            (slideIndexes[boat.name] || 0)
                                              ? "bg-blue-600"
                                              : "bg-white/70"
                                          }`}
                                        />
                                      )
                                    )}
                                  </div>
                                </>
                              )}
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
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
                            <p className="text-gray-600 mb-4">
                              {boat.description}
                            </p>

                            <div className="space-y-4 mb-6">
                              <div>
                                <h4 className="font-semibold text-gray-900 flex items-center mb-2">
                                  <Waves className="h-4 w-4 mr-2 text-blue-600" />
                                  Key Features
                                </h4>
                                <div className="grid grid-cols-1 gap-1">
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
                                <div className="grid grid-cols-1 gap-2 text-sm text-gray-600">
                                  <div>
                                    Length: {boat.specifications.length}
                                  </div>
                                  <div>
                                    Engine: {boat.specifications.engine}
                                  </div>
                                  <div>Fuel: {boat.specifications.fuel}</div>
                                  <div>
                                    Max Speed: {boat.specifications.speed}
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="flex space-x-2">
                              <Button
                                onClick={() => handleBookNow(boat)}
                                className="flex-1 bg-blue-600 hover:bg-blue-700"
                              >
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
                      <Button
                        onClick={handleClick}
                        variant="secondary"
                        size="lg"
                      >
                        Contact Charter Specialist
                      </Button>
                    </div>
                  </motion.div>
                </>
              ) : (
                <div className="text-center py-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Available Boats
                  </h2>
                  <p className="text-red-500">
                    No boats found for the selected criteria.
                  </p>
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
                      <Button
                        onClick={handleClick}
                        variant="secondary"
                        size="lg"
                      >
                        Contact Charter Specialist
                      </Button>
                    </div>
                  </motion.div>
                </div>
              )}
            </div>
          </section>
        )}
      </div>

      {/* Slideshow Album */}
      {/* <SlideshowAlbum /> */}

      {/* Modal for placing order */}
      <Dialog
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        className="fixed z-50 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="fixed inset-0 bg-black bg-opacity-40" />
          <div className="relative bg-white rounded-lg shadow-xl max-w-lg w-full mx-auto p-8 z-50">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
              onClick={() => setModalOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <Dialog.Title className="text-2xl font-bold mb-4 text-gray-900">
              Request Quotation
            </Dialog.Title>
            {/* <div className="space-y-4 mb-4">
              <div>
                <strong>Boat Name:</strong> {selectedBoat?.name}
              </div>
              <div>
                <strong>Boat Type:</strong> {selectedBoat?.type}
              </div>
              <div>
                <strong>Location:</strong> {orderForm.city}, {orderForm.country}
              </div>
              <div>
                <strong>Departure Date:</strong> {orderForm.departureDate}
              </div>
              <div>
                <strong>Return Date:</strong> {orderForm.returnDate}
              </div>
            </div> */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Budget (€100 - €5000)
              </label>
              <input
                type="range"
                min={100}
                max={5000}
                step={50}
                value={selectedBudget}
                onChange={(e) => setSelectedBudget(Number(e.target.value))}
                className="w-full"
              />
              <div className="text-right text-sm text-gray-600 mt-1">
                Selected: €{selectedBudget}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Number of People
              </label>
              <input
                type="number"
                min={1}
                max={30}
                value={numPeople}
                onChange={(e) => setNumPeople(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                rows={4}
                value={`Hello, I'm interested in the ${
                  selectedBoat?.name || ""
                } in ${orderForm.city}, ${orderForm.country}, from ${
                  orderForm.departureDate
                } to ${
                  orderForm.returnDate
                }. My budget is €${selectedBudget} and there will be ${numPeople} of us on board. Is it possible to make reservation? Thank You`}
                readOnly
              />
            </div>
            <Button
              type="button"
              className="w-full bg-blue-600 hover:bg-blue-700 mt-2"
              onClick={() => {
                setModalOpen(false);
                alert("Quotation request sent!");
              }}
            >
              Submit Request
            </Button>
          </div>
        </div>
      </Dialog>

      <Footer />
    </div>
  );
}
