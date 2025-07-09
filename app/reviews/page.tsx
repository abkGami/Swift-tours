"use client";


import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Image from "next/image";

// Assign emails and cities for each country
const countryAssignments: Record<string, { emails: string[]; cities: string[] }> = {
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
    emails: ["emilypedro347@outlook.com", "ivanaivetic@outlook.com", "sandranedcit@gmail.com"],
    cities: ["Lisbon", "Porto", "Madeira"],
  },
  Japan: {
    emails: ["isabella7hunters@gmail.com", "marmahlulu@yahoo.com", "rerheem7r2@gmail.com"],
    cities: ["Tokyo", "Osaka", "Kyoto"],
  },
  Spain: {
    emails: ["charityomeh553@gmail.com", "benkohle7@gmail.com", "Elizabethlinconk@gmail.com", "matteo7alessandro@gmail.com"],
    cities: ["Barcelona", "Madrid", "Ibiza", "Mallorca"],
  },
  France: {
    emails: ["annie07frank@gmail.com", "sofiagerald037@outlook.com", "captainmartin267@gmail.com", "Charlottehamzel@hotmail.com"],
    cities: ["Paris", "Nice", "Cannes", "Marseille"],
  },
  "United Kingdom": {
    emails: ["thomasssteve30@gmail.com", "oliviazerch@outlook.com", "monicahjefferson@hotmail.com", "tiffany.malvin@hotmail.com"],
    cities: ["London", "Manchester", "Edinburgh", "Glasgow"],
  },
  Italy: {
    emails: ["emilypedro347@outlook.com", "ivanaivetic@outlook.com", "sofiagerald037@outlook.com", "captainmartin267@gmail.com",],
    cities: ["Venice", "Rome", ],
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
    emails: ["captainmartin267@gmail.com", "Charlottehamzel@hotmail.com", ],
    cities: ["Dubai", "Abu Dhabi", ],
  },
  Brazil: {
    emails: ["oliviazerch@outlook.com"],
    cities: ["Rio de Janeiro"],
  },
};

// Dummy reviews data
// Add a `country` field to each review for filtering
const reviews = [
  // --- Saudi Arabia ---
  {
    name: "Ahmed Al-Fahad",
    date: "2025-06-10",
    service: "Tour Service",
    stars: 5,
    image: "/profile.jpg",
    review: "The Riyadh city tour was amazing! Swift Tours and Travels made everything easy and enjoyable.",
    language: "en",
    country: "Saudi Arabia",
  },
  {
    name: "Fatima Al-Saud",
    date: "2025-05-22",
    service: "Private Transfer",
    stars: 4,
    image: "/profile.jpg",
    review: "Great transfer service in Jeddah. Thank you Swift Tours and Travels for the comfort and reliability!",
    language: "en",
    country: "Saudi Arabia",
  },
  // --- Egypt ---
  {
    name: "Omar Hassan",
    date: "2025-06-15",
    service: "Boat Trip",
    stars: 5,
    image: "/profile.jpg",
    review: "The Nile boat trip was unforgettable. Swift Tours and Travels provided excellent service!",
    language: "en",
    country: "Egypt",
  },
  {
    name: "Layla Mostafa",
    date: "2025-05-30",
    service: "Tour Service",
    stars: 5,
    image: "/profile.jpg",
    review: "Cairo city tour was very informative. Thank you Swift Tours and Travels for a wonderful day!",
    language: "en",
    country: "Egypt",
  },
  // --- Morocco ---
  {
    name: "Youssef Benali",
    date: "2025-06-12",
    service: "Tour Service",
    stars: 5,
    image: "/profile.jpg",
    review: "Exploring Marrakech with Swift Tours and Travels was a fantastic experience!",
    language: "en",
    country: "Morocco",
  },
  {
    name: "Salma Idrissi",
    date: "2025-05-27",
    service: "Boat Trip",
    stars: 4,
    image: "/profile.jpg",
    review: "The boat trip in Casablanca was beautiful. Thanks to Swift Tours and Travels for the great memories!",
    language: "en",
    country: "Morocco",
  },
  // --- Hawaii ---
  {
    name: "Jessica Lee",
    date: "2025-06-18",
    service: "Boat Trip",
    stars: 5,
    image: "/profile.jpg",
    review: "The boat trip in Honolulu was the highlight of our trip. Swift Tours and Travels made it perfect!",
    language: "en",
    country: "Hawaii",
  },
  {
    name: "Michael Kim",
    date: "2025-05-29",
    service: "Tour Service",
    stars: 5,
    image: "/profile.jpg",
    review: "Great tour of Maui! Thank you Swift Tours and Travels for the amazing experience.",
    language: "en",
    country: "Hawaii",
  },
  // --- Tahiti ---
  {
    name: "Sophie Martin",
    date: "2025-06-20",
    service: "Boat Chartered",
    stars: 5,
    image: "/profile.jpg",
    review: "Chartering a boat in Tahiti with Swift Tours and Travels was a dream come true!",
    language: "en",
    country: "Tahiti",
  },
  {
    name: "Paul Dupont",
    date: "2025-05-25",
    service: "Tour Service",
    stars: 4,
    image: "/profile.jpg",
    review: "The island tour in Tahiti was wonderful. Thank you Swift Tours and Travels for the great service!",
    language: "en",
    country: "Tahiti",
  },
  // --- Argentina ---
  {
    name: "Lucia Fernandez",
    date: "2025-06-14",
    service: "Tour Service",
    stars: 5,
    image: "/profile.jpg",
    review: "Buenos Aires city tour was fantastic. Swift Tours and Travels made it so much fun!",
    language: "en",
    country: "Argentina",
  },
  {
    name: "Mateo Gomez",
    date: "2025-05-31",
    service: "Boat Trip",
    stars: 4,
    image: "/profile.jpg",
    review: "The boat trip in Patagonia was breathtaking. Thank you Swift Tours and Travels!",
    language: "en",
    country: "Argentina",
  },
  // --- Malta ---
  {
    name: "Maria Grech",
    date: "2025-06-16",
    service: "Boat Trip",
    stars: 5,
    image: "/profile.jpg",
    review: "The boat trip around Malta was amazing. Swift Tours and Travels provided excellent service!",
    language: "en",
    country: "Malta",
  },
  {
    name: "David Borg",
    date: "2025-05-28",
    service: "Tour Service",
    stars: 5,
    image: "/profile.jpg",
    review: "Great tour of Valletta. Thank you Swift Tours and Travels for a memorable day!",
    language: "en",
    country: "Malta",
  },
  // --- Montenegro ---
  {
    name: "Jovana Petrovic",
    date: "2025-06-13",
    service: "Boat Trip",
    stars: 5,
    image: "/profile.jpg",
    review: "The boat trip in Kotor Bay was stunning. Swift Tours and Travels made it unforgettable!",
    language: "en",
    country: "Montenegro",
  },
  {
    name: "Marko Vukovic",
    date: "2025-05-26",
    service: "Tour Service",
    stars: 4,
    image: "/profile.jpg",
    review: "Loved the city tour in Podgorica. Thank you Swift Tours and Travels for the great experience!",
    language: "en",
    country: "Montenegro",
  },
  // --- Portugal ---
  {
    name: "Lucas Pereira",
    date: "2025-07-01",
    service: "Boat Trip",
    stars: 5,
    image: "/profile.jpg",
    review: "Amazing boat trip in Lisbon! The staff was super friendly and the views were breathtaking. Highly recommend Swift Tours and Travels for anyone visiting Portugal!",
    language: "en",
    country: "Portugal",
  },
  {
    name: "Ana Silva",
    date: "2025-06-15",
    service: "Tour Service",
    stars: 4,
    image: "/profile.jpg",
    review: "Great city tour in Porto. Learned a lot and had fun! Thank you Swift Tours and Travels for the wonderful experience!",
    language: "en",
    country: "Portugal",
  },
  // --- Japan ---
  {
    name: "Emily Johnson",
    date: "2025-05-20",
    service: "Tour Service",
    stars: 5,
    image: "/profile.jpg",
    review: "Tokyo city tour was fantastic! Our guide from Swift Tours and Travels was knowledgeable and very helpful.",
    language: "en",
    country: "Japan",
  },
  {
    name: "Takashi Ito",
    date: "2025-05-10",
    service: "Boat Chartered",
    stars: 5,
    image: "/profile.jpg",
    review: "Wonderful boat charter experience in Osaka. Thank you Swift Tours and Travels for making it memorable!",
    language: "en",
    country: "Japan",
  },
  // --- Spain ---
  {
    name: "Carlos Martinez",
    date: "2025-06-05",
    service: "Boat Trip",
    stars: 5,
    image: "/profile.jpg",
    review: "The boat trip in Barcelona was the highlight of our vacation. Everything was perfect thanks to Swift Tours and Travels!",
    language: "en",
    country: "Spain",
  },
  {
    name: "Sarah Lee",
    date: "2025-05-28",
    service: "Private Transfer",
    stars: 4,
    image: "/profile.jpg",
    review: "Private transfer from the airport was smooth and comfortable. Highly recommend Swift Tours and Travels for transfers in Spain!",
    language: "en",
    country: "Spain",
  },
  // --- France ---
  {
    name: "Marie Dubois",
    date: "2025-06-10",
    service: "Boat Chartered",
    stars: 5,
    image: "/profile.jpg",
    review: "Chartering a boat in Paris was a dream come true. Thank you Swift Tours and Travels for the amazing service!",
    language: "en",
    country: "France",
  },
  {
    name: "John Smith",
    date: "2025-05-30",
    service: "Tour Service",
    stars: 5,
    image: "/profile.jpg",
    review: "The Paris city tour was very informative and enjoyable. Would book again with Swift Tours and Travels!",
    language: "en",
    country: "France",
  },
  // --- United Kingdom ---
  {
    name: "Olivia Brown",
    date: "2025-06-18",
    service: "Tour Service",
    stars: 5,
    image: "/profile.jpg",
    review: "London tour was excellent. Our guide from Swift Tours and Travels was friendly and knowledgeable.",
    language: "en",
    country: "United Kingdom",
  },
  {
    name: "James Wilson",
    date: "2025-06-12",
    service: "Private Transfer",
    stars: 5,
    image: "/profile.jpg",
    review: "Very convenient transfer service in Manchester. Will use Swift Tours and Travels again!",
    language: "en",
    country: "United Kingdom",
  },
  // --- Italy ---
  {
    name: "Giovanni Bianchi",
    date: "2025-06-07",
    service: "Boat Chartered",
    stars: 5,
    image: "/profile.jpg",
    review: "Amazing boat charter in Venice. The crew from Swift Tours and Travels was fantastic!",
    language: "en",
    country: "Italy",
  },
  {
    name: "Emma Rossi",
    date: "2025-05-25",
    service: "Tour Service",
    stars: 4,
    image: "/profile.jpg",
    review: "Rome city tour was very interesting and well organized by Swift Tours and Travels.",
    language: "en",
    country: "Italy",
  },
  // --- Germany ---
  {
    name: "Max Müller",
    date: "2025-06-14",
    service: "Private Transfer",
    stars: 5,
    image: "/profile.jpg",
    review: "Transfer in Berlin was quick and easy. Great service from Swift Tours and Travels!",
    language: "en",
    country: "Germany",
  },
  {
    name: "Sophie Schneider",
    date: "2025-05-22",
    service: "Boat Trip",
    stars: 5,
    image: "/profile.jpg",
    review: "Loved the boat trip on the Rhine. Beautiful scenery and excellent staff from Swift Tours and Travels.",
    language: "en",
    country: "Germany",
  },
  // --- Australia ---
  {
    name: "Jack Thompson",
    date: "2025-06-25",
    service: "Boat Trip",
    stars: 5,
    image: "/profile.jpg",
    review: "Sydney boat trip was unforgettable! Highly recommend Swift Tours and Travels for anyone visiting Australia.",
    language: "en",
    country: "Australia",
  },
  {
    name: "Samantha White",
    date: "2025-06-20",
    service: "Tour Service",
    stars: 4,
    image: "/profile.jpg",
    review: "Great tour in Melbourne. Learned a lot and had fun! Thanks to Swift Tours and Travels for a great day!",
    language: "en",
    country: "Australia",
  },
  // --- Turkey ---
  {
    name: "Aylin Kaya",
    date: "2025-06-03",
    service: "Boat Trip",
    stars: 5,
    image: "/profile.jpg",
    review: "The Istanbul boat trip was amazing. The views were stunning! Thank you Swift Tours and Travels for the wonderful experience!",
    language: "en",
    country: "Turkey",
  },
  {
    name: "David Clark",
    date: "2025-05-18",
    service: "Tour Service",
    stars: 5,
    image: "/profile.jpg",
    review: "Tour in Ankara was very well organized. Thank you Swift Tours and Travels for making it special!",
    language: "en",
    country: "Turkey",
  },
  // --- Thailand ---
  {
    name: "Ben Harris",
    date: "2025-06-11",
    service: "Boat Chartered",
    stars: 5,
    image: "/profile.jpg",
    review: "Chartered a boat in Bangkok with Swift Tours and Travels. Fantastic experience!",
    language: "en",
    country: "Thailand",
  },
  {
    name: "Lisa Evans",
    date: "2025-05-29",
    service: "Tour Service",
    stars: 4,
    image: "/profile.jpg",
    review: "Bangkok city tour was fun and informative. Would recommend Swift Tours and Travels!",
    language: "en",
    country: "Thailand",
  },
  // --- Croatia ---
  {
    name: "Marko Horvat",
    date: "2025-06-09",
    service: "Boat Trip",
    stars: 5,
    image: "/profile.jpg",
    review: "Dubrovnik boat trip was the best part of our holiday! Thank you Swift Tours and Travels for making it so special!",
    language: "en",
    country: "Croatia",
  },
  {
    name: "Jessica Taylor",
    date: "2025-05-19",
    service: "Tour Service",
    stars: 4,
    image: "/profile.jpg",
    review: "Loved the walking tour in Split. Great guide and beautiful city. Thanks Swift Tours and Travels!",
    language: "en",
    country: "Croatia",
  },
  {
    name: "Sophie Elliot",
    date: "2025-05-12",
    service: "Boat Trip",
    stars: 5,
    image: "/profile.jpg",
    review:
      "Swift Tours and Travels really helped and made my trip unforgettable! The boat trip I took to Madeira Island  was amazing, and the crew was very friendly and professional.",
    language: "en",
    country: "Portugal",
  },
  // Add these to your reviews array (with email, different languages, and locations)
  // Add these to your reviews array, each review gives recognition to Swift Tours and Travels
  {
    name: "Pierre Laurent",
    date: "2025-01-10",
    service: "Boat Trip",
    stars: 5,
    image: "/profile.jpg",
    review:
      "Incroyable excursion en bateau à Tokyo ! Merci à Swift Tours and Travels pour cette organisation parfaite et le paysage magnifique.",
    language: "fr",
    country: "Japan",
  },
  {
    name: "Maria González",
    date: "2025-01-18",
    service: "Tour Service",
    stars: 4,
    image: "/profile.jpg",
    review:
      "El tour en Praga fue muy divertido y educativo. ¡Gracias Swift Tours and Travels por hacerlo posible!",
    language: "es",
    country: "Czech Republic",
  },
  {
    name: "Yuki Tanaka",
    date: "2025-01-25",
    service: "Boat Chartered",
    stars: 5,
    image: "/profile.jpg",
    review:
      "素晴らしいサービス！パリでのボートチャーターはSwift Tours and Travelsのおかげで忘れられない思い出になりました。",
    language: "ja",
    country: "France",
  },
  {
    name: "Sven Eriksson",
    country: "Spain",
    date: "2025-02-02",
    service: "Private Transfer",
    stars: 5,
    image: "/profile.jpg",
    review:
      "Fantastisk transfer i Barcelona. Tack Swift Tours and Travels för en väldigt bekväm och snabb resa.",
    language: "sv",
  },
  {
    name: "Giulia Rossi",
    country: "Croatia",
    date: "2025-02-09",
    service: "Boat Trip",
    stars: 5,
    image: "/profile.jpg",
    review:
      "Gita in barca a Dubrovnik indimenticabile! Staff molto gentile. Grazie Swift Tours and Travels!",
    language: "it",
  },
  {
    name: "Hans Müller",
    country: "Portugal",
    date: "2025-02-16",
    service: "Tour Service",
    stars: 5,
    image: "/profile.jpg",
    review:
      "Die Stadtführung in Lissabon war sehr informativ und unterhaltsam. Vielen Dank an Swift Tours and Travels!",
    language: "de",
  },
  {
    name: "Mateusz Kowalski",
    country: "Spain",
    date: "2025-02-23",
    service: "Boat Chartered",
    stars: 5,
    image: "/profile.jpg",
    review:
      "Czarter jachtu w Barcelonie to była świetna przygoda! Dziękuję Swift Tours and Travels za organizację.",
    language: "pl",
  },
  {
    name: "Elena Petrova",
    country: "United Kingdom",
    date: "2025-03-01",
    service: "Private Transfer",
    stars: 4,
    image: "/profile.jpg",
    review:
      "Трансфер в Лондоне был очень удобным и быстрым. Спасибо Swift Tours and Travels!",
    language: "ru",
  },
  {
    name: "Lucas Moreira",
    country: "Turkey",
    date: "2025-03-08",
    service: "Boat Trip",
    stars: 5,
    image: "/profile.jpg",
    review:
      "O passeio de barco em Istambul foi maravilhoso! Recomendo a Swift Tours and Travels a todos.",
    language: "pt",
  },
  {
    name: "Anna Nowak",
    country: "Spain",
    date: "2025-03-15",
    service: "Tour Service",
    stars: 5,
    image: "/profile.jpg",
    review:
      "Wycieczka po Barcelonie była świetnie zorganizowana przez Swift Tours and Travels.",
    language: "pl",
  },
  {
    name: "Jorge Castillo",
    country: "Italy",
    date: "2025-03-22",
    service: "Boat Chartered",
    stars: 5,
    image: "/profile.jpg",
    review:
      "Alquilar un barco en Roma fue la mejor decisión de nuestro viaje. ¡Gracias Swift Tours and Travels!",
    language: "es",
  },
  {
    name: "Linda Svensson",
    country: "United Arab Emirates",
    date: "2025-03-29",
    service: "Private Transfer",
    stars: 5,
    image: "/profile.jpg",
    review:
      "Bekväm transfer i Dubai. Rekommenderas! Tack Swift Tours and Travels.",
    language: "sv",
  },
  {
    name: "Andreas Papadopoulos",
    country: "Italy",
    date: "2025-04-05",
    service: "Boat Trip",
    stars: 5,
    image: "/profile.jpg",
    review:
      "Η εκδρομή με το σκάφος στη Βενετία ήταν μαγευτική! Ευχαριστώ Swift Tours and Travels.",
    language: "el",
  },
  {
    name: "Isabella Rossi",
    country: "Japan",
    date: "2025-04-12",
    service: "Tour Service",
    stars: 4,
    image: "/profile.jpg",
    review:
      "Tour guidato a Tokyo molto interessante e ben organizzato da Swift Tours and Travels.",
    language: "it",
  },
  {
    name: "Marta Nowak",
    country: "United Arab Emirates",
    date: "2025-04-19",
    service: "Boat Chartered",
    stars: 5,
    image: "/profile.jpg",
    review:
      "Czarter jachtu w Dubaju to była świetna przygoda! Dzięki Swift Tours and Travels.",
    language: "pl",
  },
  {
    name: "Hiroshi Sato",
    country: "France",
    date: "2025-04-26",
    service: "Private Transfer",
    stars: 5,
    image: "/profile.jpg",
    review:
      "パリでの送迎サービスはとても便利でした。Swift Tours and Travelsに感謝します。",
    language: "ja",
  },
  {
    name: "Emma Johansson",
    country: "Brazil",
    date: "2025-05-03",
    service: "Boat Trip",
    stars: 5,
    image: "/profile.jpg",
    review:
      "Båtturen i Rio de Janeiro var fantastisk! Tack Swift Tours and Travels.",
    language: "sv",
  },
  {
    name: "Miguel Torres",
    country: "United Kingdom",
    date: "2025-05-10",
    service: "Tour Service",
    stars: 5,
    image: "/profile.jpg",
    review:
      "El tour por Londres fue excelente, aprendí mucho sobre la ciudad. Gracias Swift Tours and Travels.",
    language: "es",
  },
  {
    name: "Charlotte Dubois",
    country: "Thailand",
    date: "2025-05-17",
    service: "Boat Chartered",
    stars: 5,
    image: "/profile.jpg",
    review:
      "J'ai adoré la journée en bateau à Bangkok, service impeccable de Swift Tours and Travels.",
    language: "fr",
  },
  {
    name: "Ivan Ivanov",
    country: "Germany",
    date: "2025-05-24",
    service: "Private Transfer",
    stars: 4,
    image: "/profile.jpg",
    review:
      "Трансфер в Берлине был очень удобным. Спасибо Swift Tours and Travels.",
    language: "ru",
  },
  {
    name: "Laura García",
    country: "Portugal",
    date: "2025-06-01",
    service: "Boat Trip",
    stars: 5,
    image: "/profile.jpg",
    review:
      "El paseo en barco por Lisboa fue maravilloso. Gracias Swift Tours and Travels.",
    language: "es",
  },
  {
    name: "Nina Müller",
    country: "Japan",
    date: "2025-06-08",
    service: "Tour Service",
    stars: 5,
    image: "/profile.jpg",
    review:
      "Die Führung durch Tokyo war sehr spannend. Danke Swift Tours and Travels!",
    language: "de",
  },
  {
    name: "Pedro Silva",
    country: "France",
    date: "2025-06-15",
    service: "Boat Chartered",
    stars: 5,
    image: "/profile.jpg",
    review:
      "Alugar um barco em Paris foi uma experiência incrível. Obrigado Swift Tours and Travels.",
    language: "pt",
  },
  {
    name: "Sofia Petrova",
    country: "United Kingdom",
    date: "2025-06-22",
    service: "Private Transfer",
    stars: 5,
    image: "/profile.jpg",
    review:
      "Трансферът в Лондон беше много удобен и бърз. Благодарим на Swift Tours and Travels.",
    language: "bg",
  },
  {
    name: "Daniela Costa",
    country: "Australia",
    date: "2025-06-29",
    service: "Boat Trip",
    stars: 5,
    image: "/profile.jpg",
    review:
      "Passeio de barco em Sydney foi inesquecível! Obrigada Swift Tours and Travels.",
    language: "pt",
  },
  {
    name: "Alejandro Ruiz",
    country: "South Korea",
    date: "2025-02-06",
    service: "Tour Service",
    stars: 4,
    image: "/profile.jpg",
    review:
      "El tour en Seúl fue muy divertido y educativo. Gracias a Swift Tours and Travels.",
    language: "es",
  },
  {
    name: "Maja Novak",
    country: "Spain",
    date: "2025-04-13",
    service: "Boat Chartered",
    stars: 5,
    image: "/profile.jpg",
    review:
      "Najem čolna v Barceloni je bil čudovit! Hvala Swift Tours and Travels.",
    language: "sl",
  },
  {
    name: "Lars Hansen",
    country: "Japan",
    date: "2025-05-20",
    service: "Private Transfer",
    stars: 5,
    image: "/profile.jpg",
    review:
      "Meget behagelig transfer i Tokyo. Tak til Swift Tours and Travels.",
    language: "da",
  },
  {
    name: "Irina Popescu",
    country: "Turkey",
    date: "2025-01-27",
    service: "Boat Trip",
    stars: 5,
    image: "/profile.jpg",
    review:
      "Excursia cu barca la Istanbul a fost minunată! Mulțumesc Swift Tours and Travels.",
    language: "ro",
  },
  {
    name: "Jinwoo Park",
    country: "United Kingdom",
    date: "2025-06-03",
    service: "Tour Service",
    stars: 5,
    image: "/profile.jpg",
    review:
      "런던 투어가 정말 즐거웠어요. Swift Tours and Travels 덕분에 좋은 추억이었습니다.",
    language: "ko",
  },
  {
    name: "Olga Ivanova",
    country: "Spain",
    date: "2025-04-10",
    service: "Boat Chartered",
    stars: 5,
    image: "/profile.jpg",
    review:
      "Аренда яхты в Барселоне была отличной идеей для отдыха. Спасибо Swift Tours and Travels.",
    language: "ru",
  },
  {
    name: "Camila Souza",
    country: "France",
    date: "2025-02-17",
    service: "Private Transfer",
    stars: 5,
    image: "/profile.jpg",
    review:
      "Transfer em Paris foi rápido e seguro. Obrigada Swift Tours and Travels.",
    language: "pt",
  },
];

// Assign city and email to each review
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
    ? reviewsWithAssignments.filter((r) =>
        r.country && r.country.toLowerCase().includes(query.trim().toLowerCase())
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
            onSubmit={e => {
              e.preventDefault();
              setQuery(search);
            }}
            className="flex justify-center gap-2 mt-4"
          >
            <input
              type="text"
              placeholder="Search by country (e.g. France, Japan)"
              value={search}
              onChange={e => setSearch(e.target.value)}
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
              Showing reviews for country: <span className="font-semibold">{query}</span>
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
