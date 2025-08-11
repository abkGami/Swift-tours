"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Image from "next/image";

// Assign emails and cities for each country
const countryAssignments: Record<
  string,
  { emails: string[]; cities: string[] }
> = {
  "Saudi Arabia": {
    emails: ["sandranedcit@gmail.com", "isabella7hunters@gmail.com"],
    cities: ["Riyadh", "Jeddah"],
  },
  Egypt: {
    emails: ["marmahlulu@yahoo.com", "rerheem7r2@gmail.com"],
    cities: ["Nile", "Cairo"],
  },
  Morocco: {
    emails: ["charityomeh553@gmail.com", "benkohle7@gmail.com"],
    cities: ["Marrakech", "Casablanca"],
  },
  Hawaii: {
    emails: ["Elizabethlinconk@gmail.com", "matteo7alessandro@gmail.com"],
    cities: ["Honolulu", "Maui"],
  },
  Tahiti: {
    emails: ["annie07frank@gmail.com", "sofiagerald037@outlook.com"],
    cities: ["Papeete", "Moorea"],
  },
  Argentina: {
    emails: ["captainmartin267@gmail.com", "Charlottehamzel@hotmail.com"],
    cities: ["Buenos Aires", "Patagonia"],
  },
  Malta: {
    emails: ["thomasssteve30@gmail.com", "oliviazerch@outlook.com"],
    cities: ["Valletta", "Sliema"],
  },
  Montenegro: {
    emails: ["monicahjefferson@hotmail.com", "tiffany.malvin@hotmail.com"],
    cities: ["Kotor", "Podgorica"],
  },
  Portugal: {
    emails: [
      "emilypedro347@outlook.com",
      "ivanaivetic@outlook.com",
      "sandranedcit@gmail.com",
    ],
    cities: ["Lisbon", "Porto", "Madeira"],
  },
  Japan: {
    emails: [
      "isabella7hunters@gmail.com",
      "marmahlulu@yahoo.com",
      "rerheem7r2@gmail.com",
    ],
    cities: ["Tokyo", "Osaka", "Kyoto"],
  },
  Spain: {
    emails: [
      "charityomeh553@gmail.com",
      "benkohle7@gmail.com",
      "Elizabethlinconk@gmail.com",
      "matteo7alessandro@gmail.com",
    ],
    cities: ["Barcelona", "Madrid", "Ibiza", "Mallorca"],
  },
  France: {
    emails: [
      "annie07frank@gmail.com",
      "sofiagerald037@outlook.com",
      "captainmartin267@gmail.com",
      "Charlottehamzel@hotmail.com",
    ],
    cities: ["Paris", "Nice", "Cannes", "Marseille"],
  },
  "United Kingdom": {
    emails: [
      "thomasssteve30@gmail.com",
      "oliviazerch@outlook.com",
      "monicahjefferson@hotmail.com",
      "tiffany.malvin@hotmail.com",
    ],
    cities: ["London", "Manchester", "Edinburgh", "Glasgow"],
  },
  Italy: {
    emails: [
      "emilypedro347@outlook.com",
      "ivanaivetic@outlook.com",
      "sofiagerald037@outlook.com",
      "captainmartin267@gmail.com",
    ],
    cities: ["Venice", "Rome"],
  },
  Germany: {
    emails: ["sandranedcit@gmail.com", "isabella7hunters@gmail.com"],
    cities: ["Berlin", "Rhine"],
  },
  Australia: {
    emails: ["marmahlulu@yahoo.com", "rerheem7r2@gmail.com"],
    cities: ["Sydney", "Melbourne"],
  },
  Turkey: {
    emails: ["charityomeh553@gmail.com", "benkohle7@gmail.com"],
    cities: ["Istanbul", "Ankara"],
  },
  Thailand: {
    emails: ["Elizabethlinconk@gmail.com", "matteo7alessandro@gmail.com"],
    cities: ["Bangkok", "Phuket"],
  },
  Croatia: {
    emails: ["annie07frank@gmail.com", "sofiagerald037@outlook.com"],
    cities: ["Dubrovnik", "Split"],
  },
  "United Arab Emirates": {
    emails: ["captainmartin267@gmail.com", "Charlottehamzel@hotmail.com"],
    cities: ["Dubai", "Abu Dhabi"],
  },
  Brazil: {
    emails: ["oliviazerch@outlook.com"],
    cities: ["Rio de Janeiro"],
  },
  "Czech Republic": {
    emails: ["thomasssteve30@gmail.com", "oliviazerch@outlook.com"],
    cities: ["Prague", "Brno"],
  },
  "South Korea": {
    emails: ["marmahlulu@yahoo.com", "rerheem7r2@gmail.com"],
    cities: ["Seoul", "Busan"],
  },
  "Puerto Rico": {
    emails: [
      "benkohle7@gmail.com",
      "isabella7hunters@gmail.com",
      "thomasssteve30@gmail.com",
      "oliviazerch@outlook.com",
    ],
    cities: [],
  },
};

const reviews = [
  // July 2025
  {
    name: "João Silva", // European
    date: "2025-07-01",
    service: "Boat Trip",
    stars: 5,
    image: "/reviews/a (23).jpg",
    review:
      "Amazing boat trip in Lisbon! The staff was super friendly and the views were breathtaking. Highly recommend Swift Tours and Travels!",
    language: "en",
    country: "Portugal",
  },
  {
    name: "Daniela Costa", // South American
    date: "2025-06-29",
    service: "Boat Trip",
    stars: 5,
    image: "/reviews/g.jpg",
    review:
      "¡El paseo en barco en Sydney fue inolvidable! Gracias Swift Tours and Travels por la experiencia increíble.",
    language: "es",
    country: "Australia",
  },
  {
    name: "Jack Thompson", // European
    date: "2025-06-25",
    service: "Boat Trip",
    stars: 5,
image: "/reviews/a (21).jpg",
    review:
      "Sydney boat trip was unforgettable! Highly recommend Swift Tours and Travels for anyone visiting Australia.",
    language: "en",
    country: "Australia",
  },
  {
    name: "Rachel Tom", // European
    date: "2025-06-25",
    service: "Tour Service",
    stars: 5,
image: "/reviews/a.jpg",
    review:
      "Swift Tours and Travels planned our Puerto Rico trip flawlessly! Samuel customized our itinerary, booked tours, and arranged transportation. Everything ran smoothly, and we loved the desert experience. Highly recommend!",
    language: "en",
    country: "Puerto Rico",
  },
  {
    name: "Sophie Martin", // European
    date: "2025-06-20",
    service: "Boat Chartered",
    stars: 5,
image: "/reviews/b.jpg",
    review:
      "Chartering a boat in Tahiti with Swift Tours and Travels was a dream come true!",
    language: "en",
    country: "Tahiti",
  },
  {
    name: "Gabriel White", // European
    date: "2025-06-20",
    service: "Tour Service",
    stars: 4,
image: "/reviews/a1.jpg",
    review:
      "Great tour in Melbourne. Learned a lot and had fun! Thanks to Swift Tours and Travels!",
    language: "en",
    country: "Australia",
  },
  {
    name: "James Wilson", // European
    date: "2025-06-18",
    service: "Tour Service",
    stars: 5,
image: "/reviews/b (3).jpg",
    review:
      "London tour was excellent. Our guide from Swift Tours and Travels was friendly and knowledgeable.",
    language: "en",
    country: "United Kingdom",
  },
  {
    name: "Fernanda Silva", // South American
    date: "2025-06-18",
    service: "Boat Trip",
    stars: 5,
image: "/reviews/b (4).jpg",
    review:
      "The boat trip in Honolulu was the highlight of our trip. Swift Tours and Travels made it perfect!",
    language: "en",
    country: "Hawaii",
  },
  {
    name: "Marco Grech", // European
    date: "2025-06-16",
    service: "Boat Trip",
    stars: 5,
image: "/reviews/c (5).jpg",
    review:
      "The boat trip around Malta was amazing. Swift Tours and Travels provided excellent service!",
    language: "en",
    country: "Malta",
  },
  {
    name: "Hans Mueller", // European
    date: "2025-06-15",
    service: "Boat Chartered",
    stars: 5,
image: "/reviews/b (19).jpg",
    review:
      "Renting a boat in Paris was an incredible experience. Thank you Swift Tours and Travels for making it memorable!",
    language: "en",
    country: "France",
  },
  {
    name: "Anatoly Costa", // European
    date: "2025-06-15",
    service: "Tour Service",
    stars: 4,
image: "/reviews/b (24).jpg",
    review:
      "Great city tour in Porto. Learned a lot and had fun! Thank you Swift Tours and Travels for the wonderful experience!",
    language: "en",
    country: "Portugal",
  },
  {
    name: "Zara Mwangi", // African
    date: "2025-06-15",
    service: "Boat Trip",
    stars: 5,
image: "/reviews/i.jpg",
    review:
      "The Nile boat trip was unforgettable. Swift Tours and Travels provided excellent service!",
    language: "en",
    country: "Egypt",
  },
  {
    name: "Sarah Mark", // African
    date: "2025-06-15",
    service: "Tour Service",
    stars: 5,
image: "/reviews/i3.jpg",
    review:
      "Swift Tours and Travels planned our Puerto Rico trip flawlessly! Samuel customized our itinerary, booked tours, and arranged transportation. Everything ran smoothly, and we loved the desert experience. Highly recommend!",
    language: "en",
    country: "Puerto Rico",
  },
  {
    name: "Klaus Schmidt", // European
    date: "2025-06-14",
    service: "Private Transfer",
    stars: 5,
image: "/reviews/c (8).jpg",
    review:
      "Transfer in Berlin was quick and easy. Great service from Swift Tours and Travels!",
    language: "en",
    country: "Germany",
  },
  {
    name: "Lucia Fernandez", // South American
    date: "2025-06-14",
    service: "Tour Service",
    stars: 5,
image: "/reviews/c.jpg",
    review:
      "Buenos Aires city tour was fantastic. Swift Tours and Travels made it so much fun!",
    language: "en",
    country: "Argentina",
  },
  {
    name: "Nikola Petrovic", // European
    date: "2025-06-13",
    service: "Boat Trip",
    stars: 5,
image: "/reviews/c (14).jpg",
    review:
      "The boat trip in Kotor Bay was stunning. Swift Tours and Travels made it unforgettable!",
    language: "en",
    country: "Montenegro",
  },
  {
    name: "Emma Thompson", // European
    date: "2025-06-12",
    service: "Private Transfer",
    stars: 5,
image: "/reviews/d.jpg",
    review:
      "Very convenient transfer service in Manchester. Will use Swift Tours and Travels again!",
    language: "en",
    country: "United Kingdom",
  },
  {
    name: "Santiago Herrera", // South American
    date: "2025-06-12",
    service: "Tour Service",
    stars: 5,
image: "/reviews/corfu (2).jpg",
    review:
      "Exploring Marrakech with Swift Tours and Travels was a fantastic experience!",
    language: "en",
    country: "Morocco",
  },
  {
    name: "Somchai Pattana", // Asian
    date: "2025-06-11",
    service: "Boat Chartered",
    stars: 5,
image: "/reviews/h1.jpg",
    review:
      "Chartered a boat in Bangkok with Swift Tours and Travels. Fantastic experience!",
    language: "en",
    country: "Thailand",
  },
  {
    name: "Pierre Dubois", // European
    date: "2025-06-10",
    service: "Boat Chartered",
    stars: 5,
image: "/reviews/h2.jpg",
    review:
      "Chartering a boat in Paris was a dream come true. Thank you Swift Tours and Travels for the amazing service!",
    language: "en",
    country: "France",
  },
  {
    name: "Amara Okafor", // African
    date: "2025-06-10",
    service: "Tour Service",
    stars: 5,
image: "/reviews/e.jpg",
    review:
      "The Riyadh city tour was amazing! Swift Tours and Travels made everything easy and enjoyable.",
    language: "en",
    country: "Saudi Arabia",
  },
  {
    name: "Marko Horvat", // European
    date: "2025-06-09",
    service: "Boat Trip",
    stars: 5,
image: "/reviews/h3.jpg",
    review:
      "Dubrovnik boat trip was the best part of our holiday! Thank you Swift Tours and Travels for making it so special!",
    language: "en",
    country: "Croatia",
  },
  {
    name: "Giovanni Bianchi", // European
    date: "2025-06-07",
    service: "Boat Chartered",
    stars: 5,
image: "/reviews/h4.jpg",
    review:
      "Amazing boat charter in Venice. The crew from Swift Tours and Travels was fantastic!",
    language: "en",
    country: "Italy",
  },
  {
    name: "Dominik Schmidt", // European

    date: "2025-06-07",
    service: "Tour Service",
    stars: 5,
image: "/reviews/h5.jpg",
    review:
      "Swift Tours and Travels took us to Puerto Rico's top spots, including Flamenco Beach in Culebra and El Yunque National Forest in Río Grande. Excellent service, transportation, and accommodations. Highly recommend!",
    language: "en",
    country: "Puerto Rico",
  },
  {
    name: "Marco Rossi", // European
    date: "2025-06-05",
    service: "Boat Trip",
    stars: 5,
image: "/reviews/h6.jpg",
    review:
      "The boat trip in Barcelona was the highlight of our vacation. Everything was perfect thanks to Swift Tours and Travels!",
    language: "en",
    country: "Spain",
  },
  {
    name: "Hiroshi Tanaka", // Asian
    date: "2025-06-03",
    service: "Tour Service",
    stars: 5,
image: "/reviews/h7.jpg",
    review:
      "The London tour was really enjoyable. Thanks to Swift Tours and Travels for the great memories!",
    language: "en",
    country: "United Kingdom",
  },
  {
    name: "Valentina Ramirez", // South American
    date: "2025-06-01",
    service: "Boat Trip",
    stars: 5,
image: "/reviews/h8.jpg",
    review:
      "El paseo en barco por Lisboa fue maravilloso. Gracias Swift Tours and Travels por la experiencia increíble.",
    language: "es",
    country: "Portugal",
  },
  {
    name: "Mateo Gomez", // South American
    date: "2025-05-31",
    service: "Boat Trip",
    stars: 4,
image: "/reviews/i1.jpg",
    review:
      "The boat trip in Patagonia was breathtaking. Thank you Swift Tours and Travels!",
    language: "en",
    country: "Argentina",
  },
  {
    name: "Isabella Martinez", // South American
    date: "2025-05-30",
    service: "Tour Service",
    stars: 5,
image: "/reviews/g.jpg",
    review:
      "The Paris city tour was very informative and enjoyable. Would book again with Swift Tours and Travels!",
    language: "en",
    country: "France",
  },
  {
    name: "Omar Hassan", // African
    date: "2025-05-30",
    service: "Tour Service",
    stars: 5,
image: "/reviews/h8.jpg",
    review:
      "Cairo city tour was very informative. Thank you Swift Tours and Travels for a wonderful day!",
    language: "en",
    country: "Egypt",
  },
  {
    name: "Niran Thanakit", // Asian
    date: "2025-05-29",
    service: "Tour Service",
    stars: 4,
image: "/reviews/i2.jpg",
    review:
      "Bangkok city tour was fun and informative. Would recommend Swift Tours and Travels!",
    language: "en",
    country: "Thailand",
  },
  {
    name: "Rodrigo Peña", // South American
    date: "2025-05-29",
    service: "Tour Service",
    stars: 5,
image: "/reviews/j1.jpg",
    review:
      "Great tour of Maui! Thank you Swift Tours and Travels for the amazing experience.",
    language: "en",
    country: "Hawaii",
  },
  {
    name: "Sofia Andersson", // European
    date: "2025-05-28",
    service: "Private Transfer",
    stars: 4,
image: "/reviews/h.jpg",
    review:
      "Private transfer from the airport was smooth and comfortable. Highly recommend Swift Tours and Travels for transfers in Spain!",
    language: "en",
    country: "Spain",
  },
  {
    name: "Lana James", // European
    date: "2025-05-28",
    service: "Private Transfer",
    stars: 4,
image: "/reviews/i4.jpg",
    review:
      "We just returned from an incredible trip to Puerto Rico, thanks to Swift Tours and Travels! From the moment we arrived, Samuel took care of everything - arranging transportation, booking tours, and even recommending the best local eats. The desert experience was breathtaking, and our driver, Carlos, was knowledgeable and friendly.",
    language: "en",
    country: "Puerto Rico",
  },
  {
    name: "David Borg", // European
    date: "2025-05-28",
    service: "Tour Service",
    stars: 5,
image: "/reviews/j1.jpg",
    review:
      "Great tour of Valletta. Thank you Swift Tours and Travels for a memorable day!",
    language: "en",
    country: "Malta",
  },
  {
    name: "Catalina Moreno", // South American
    date: "2025-05-27",
    service: "Boat Trip",
    stars: 4,
image: "/reviews/i6.jpg",
    review:
      "The boat trip in Casablanca was beautiful. Thanks to Swift Tours and Travels for the great memories!",
    language: "en",
    country: "Morocco",
  },
  {
    name: "Milica Jovanovic", // European
    date: "2025-05-26",
    service: "Tour Service",
    stars: 4,
image: "/reviews/i7.jpg",
    review:
      "Loved the city tour in Podgorica. Thank you Swift Tours and Travels for the great experience!",
    language: "en",
    country: "Montenegro",
  },
  {
    name: "Francesca Romano", // European
    date: "2025-05-25",
    service: "Tour Service",
    stars: 4,
image: "/reviews/i8.jpg",
    review:
      "Rome city tour was very interesting and well organized by Swift Tours and Travels.",
    language: "en",
    country: "Italy",
  },
  {
    name: "Paul Dupont", // European
    date: "2025-05-25",
    service: "Tour Service",
    stars: 4,
image: "/reviews/h8.jpg",
    review:
      "The island tour in Tahiti was wonderful. Thank you Swift Tours and Travels for the great service!",
    language: "en",
    country: "Tahiti",
  },
  {
    name: "Camila Gutierrez", // South American
    date: "2025-05-24",
    service: "Private Transfer",
    stars: 4,
image: "/reviews/i9.jpg",
    review:
      "Le transfert à Berlin était très pratique et rapide. Merci Swift Tours and Travels!",
    language: "fr",
    country: "Germany",
  },
  {
    name: "Ingrid Larsson", // European
    date: "2025-05-22",
    service: "Boat Trip",
    stars: 5,
image: "/reviews/j3.jpg",
    review:
      "Loved the boat trip on the Rhine. Beautiful scenery and excellent staff from Swift Tours and Travels.",
    language: "en",
    country: "Germany",
  },
  {
    name: "Kwame Asante", // African
    date: "2025-05-22",
    service: "Private Transfer",
    stars: 4,
image: "/reviews/j4.jpg",
    review:
      "Great transfer service in Jeddah. Thank you Swift Tours and Travels for the comfort and reliability!",
    language: "en",
    country: "Saudi Arabia",
  },
  {
    name: "Yuki Tanaka", // Asian
    date: "2025-05-20",
    service: "Tour Service",
    stars: 5,
image: "/reviews/j7.jpg",
    review:
      "Tokyo city tour was fantastic! Our guide from Swift Tours and Travels was knowledgeable and very helpful.",
    language: "en",
    country: "Japan",
  },
  {
    name: "Olivier Dubois", // European
    date: "2025-05-20",
    service: "Private Transfer",
    stars: 5,
image: "/reviews/j.jpg",
    review:
      "Very comfortable transfer in Tokyo. Thanks to Swift Tours and Travels for the excellent service.",
    language: "en",
    country: "Japan",
  },
  {
    name: "Petra Novak", // European
    date: "2025-05-19",
    service: "Tour Service",
    stars: 4,
image: "/reviews/f.jpg",
    review:
      "Loved the walking tour in Split. Great guide and beautiful city. Thanks Swift Tours and Travels!",
    language: "en",
    country: "Croatia",
  },
  {
    name: "Charlotte Dubois", // European
    date: "2025-05-17",
    service: "Boat Chartered",
    stars: 5,
image: "/reviews/france (1).jpg",
    review:
      "J'ai adoré la journée en bateau à Bangkok, service impeccable de Swift Tours and Travels.",
    language: "fr",
    country: "Thailand",
  },
  {
    name: "Winston Elliot", // European
    date: "2025-05-12",
    service: "Boat Trip",
    stars: 5,
image: "/reviews/k.jpg",
    review:
      "Swift Tours and Travels really helped and made my trip unforgettable! The boat trip to Madeira Island was amazing!",
    language: "en",
    country: "Portugal",
  },
  {
    name: "Takeshi Yamamoto", // Asian
    date: "2025-05-10",
    service: "Boat Chartered",
    stars: 5,
image: "/reviews/paris.jpg",
    review:
      "Wonderful boat charter experience in Osaka. Thank you Swift Tours and Travels for making it memorable!",
    language: "en",
    country: "Japan",
  },
  {
    name: "Alejandro Morales", // South American
    date: "2025-05-10",
    service: "Tour Service",
    stars: 5,
image: "/reviews/k21.jpg",
    review:
      "El tour por Londres fue excelente, aprendí mucho sobre la ciudad. Gracias Swift Tours and Travels.",
    language: "es",
    country: "United Kingdom",
  },
  {
    name: "Rafael Santos", // South American
    date: "2025-05-03",
    service: "Boat Trip",
    stars: 5,
image: "/reviews/paris1.jpg",
    review:
      "The boat trip in Rio de Janeiro was fantastic! Thanks Swift Tours and Travels for the amazing experience.",
    language: "en",
    country: "Brazil",
  },
  {
    name: "Mariel Leclerc", // European
    date: "2025-04-26",
    service: "Private Transfer",
    stars: 5,
image: "/reviews/j9.jpg",
    review:
      "Le service de transfert à Paris était très pratique. Merci à Swift Tours and Travels pour l'excellent service!",
    language: "fr",
    country: "France",
  },
  {
    name: "Marta Kowalski", // European
    date: "2025-04-19",
    service: "Boat Chartered",
    stars: 5,
image: "/reviews/j8.jpg",
    review:
      "Yacht charter in Dubai was a great adventure! Thanks Swift Tours and Travels for the amazing experience.",
    language: "en",
    country: "United Arab Emirates",
  },
  {
    name: "Carlos Rodriguez", // South American
    date: "2025-04-13",
    service: "Boat Chartered",
    stars: 5,
image: "/reviews/k4.jpg",
    review:
      "Chartering a boat in Barcelona was an amazing experience! Thank you Swift Tours and Travels for the excellent service.",
    language: "en",
    country: "Spain",
  },
  {
    name: "Akiko Sato", // Asian
    date: "2025-04-12",
    service: "Tour Service",
    stars: 4,
image: "/reviews/k5.jpg",
    review:
      "Guided tour in Tokyo very interesting and well organized by Swift Tours and Travels.",
    language: "en",
    country: "Japan",
  },
  {
    name: "Elena Popovic", // European
    date: "2025-04-10",
    service: "Boat Chartered",
    stars: 5,
image: "/reviews/k6.jpg",
    review:
      "Alquilar un yate en Barcelona fue la mejor decisión de nuestro viaje. ¡Gracias Swift Tours and Travels!",
    language: "es",
    country: "Spain",
  },
  {
    name: "Andreas Papadopoulos", // European
    date: "2025-04-05",
    service: "Boat Trip",
    stars: 5,
image: "/reviews/k5a.jpg",
    review:
      "The boat trip in Venice was magical! Thank you Swift Tours and Travels for the wonderful experience.",
    language: "en",
    country: "Italy",
  },
  {
    name: "Linda Svensson", // European
    date: "2025-03-29",
    service: "Private Transfer",
    stars: 5,
image: "/reviews/k3.jpg",
    review:
      "Comfortable transfer in Dubai. Highly recommended! Thanks Swift Tours and Travels.",
    language: "en",
    country: "United Arab Emirates",
  },
  {
    name: "Mateo Silva", // South American
    date: "2025-03-22",
    service: "Boat Chartered",
    stars: 5,
image: "/reviews/c (5).jpg",
    review:
      "Alquilar un barco en Roma fue la mejor decisión de nuestro viaje. ¡Gracias Swift Tours and Travels!",
    language: "es",
    country: "Italy",
  },
  {
    name: "Diego Fernandez", // South American
    date: "2025-03-15",
    service: "Tour Service",
    stars: 5,
image: "/reviews/h9.jpg",
    review:
      "La excursión por Barcelona fue perfectamente organizada por Swift Tours and Travels. ¡Excelente servicio!",
    language: "es",
    country: "Spain",
  },
//   {
//     name: "Min-jun Kim", // Asian
//     date: "2025-02-06",
//     service: "Tour Service",
//     stars: 4,
// image: "/reviews/a (21).jpg",
//     review:
//       "The tour in Seoul was very fun and educational. Thanks to Swift Tours and Travels for the great experience.",
//     language: "en",
//     country: "South Korea",
//   },
//   {
//     name: "Lucia Santos", // South American
//     date: "2025-02-17",
//     service: "Private Transfer",
//     stars: 5,
// image: "/reviews/a (21).jpg",
//     review:
//       "Transfert à Paris rapide et sécurisé. Merci Swift Tours and Travels pour le service impeccable!",
//     language: "fr",
//     country: "France",
//   },
//   {
//     name: "Adriana Vargas", // South American
//     date: "2025-01-27",
//     service: "Boat Trip",
//     stars: 5,
// image: "/reviews/a (21).jpg",
//     review:
//       "La excursión en barco por Estambul fue maravillosa! Gracias Swift Tours and Travels por la experiencia.",
//     language: "es",
//     country: "Turkey",
//   },
//   {
//     name: "Pavel Novák", // European
//     date: "2025-01-18",
//     service: "Tour Service",
//     stars: 4,
// image: "/reviews/a (21).jpg",
//     review:
//       "The tour in Prague was very fun and educational. Thanks Swift Tours and Travels for making it possible!",
//     language: "en",
//     country: "Czech Republic",
//   },
//   {
//     name: "Pierre Laurent", // European
//     date: "2025-01-10",
//     service: "Boat Trip",
//     stars: 5,
// image: "/reviews/a (21).jpg",
//     review:
//       "Le voyage en bateau à Istanbul était fantastique! Merci Swift Tours and Travels pour cette expérience.",
//     language: "fr",
//     country: "Turkey",
//   },
];

// ... existing code ...
const reviewsWithAssignments = reviews.map((review, idx) => {
  const assignment = countryAssignments[review.country];
  let city = "";
  let email = "";
  if (assignment) {
    // Use idx % length to cycle if more reviews than assignments
    city = assignment.cities[idx % assignment.cities.length];
    email = assignment.emails[idx % assignment.emails.length];
  }
  return { ...review, city, email };
});

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function ReviewsPage() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  // Filter reviews by country (case-insensitive, partial match)
  const filteredReviews = query
    ? reviewsWithAssignments.filter(
        (r) =>
          r.country &&
          r.country.toLowerCase().includes(query.trim().toLowerCase())
      )
    : reviewsWithAssignments;

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-50">
      <Navigation />
      <section className="pt-24 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Customer Reviews
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Hear from our happy customers about their experiences with our boat
            trips, private transfers, tours, and charter services.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setQuery(search);
            }}
            className="flex justify-center gap-2 mt-4"
          >
            <input
              type="text"
              placeholder="Search by country (e.g. France, Japan)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-64 px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Search
            </button>
          </form>
          {query && (
            <div className="mt-2 text-sm text-gray-500">
              Showing reviews for country:{" "}
              <span className="font-semibold">{query}</span>
              {filteredReviews.length === 0 && (
                <span className="ml-2 text-red-500">No reviews found.</span>
              )}
            </div>
          )}
        </motion.div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReviews.map((review, idx) => (
              <motion.div
                key={review.name + idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.03 }}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg h-full">
                  <div className="flex items-center gap-4 p-4">
                    <Image
                      src={review.image}
                      alt={review.name}
                      width={64}
                      height={64}
                      className="rounded-full object-cover border-2 border-blue-200"
                    />
                    <div>
                      <div className="font-semibold text-lg text-gray-900">
                        {review.name}
                      </div>
                      <div className="text-xs text-gray-400 mb-1">
                        {review.email ? (
                          <a
                            href={`mailto:${review.email}`}
                            className="underline hover:text-blue-600 transition"
                          >
                            {review.email}
                          </a>
                        ) : null}
                      </div>
                      <div className="text-xs text-gray-500">
                        {formatDate(review.date)}
                      </div>
                      <div className="text-xs text-blue-700 font-medium">
                        {review.service}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {review.city ? `${review.city}, ` : ""}
                        {review.country}
                      </div>
                    </div>
                  </div>
                  <CardHeader className="pb-0 pt-0">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(review.stars)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400" />
                      ))}
                      {[...Array(5 - review.stars)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-gray-300" />
                      ))}
                    </div>
                    <CardTitle className="text-base text-gray-800 font-normal">
                      <span className="italic">{review.review}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 mt-2">
                      <Users className="h-4 w-4 text-blue-600" />
                      <span className="text-xs text-gray-500 capitalize">
                        {review.language}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
