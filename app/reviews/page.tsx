"use client";

import { motion } from "framer-motion";
import { Star, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Image from "next/image";

// Dummy reviews data
const reviews = [
  {
    name: "Sophie Dubois",
    date: "2025-05-12",
    service: "Boat Trip",
    stars: 5,
    image: "/customers/customer1.jpg",
    review:
      "Service exceptionnel ! Nous avons passé une journée inoubliable sur le yacht. Merci à toute l'équipe.",
    language: "fr",
  },
  {
    name: "Carlos Martínez",
    date: "2025-04-28",
    service: "Private Transfer",
    stars: 5,
    image: "/customers/customer2.jpg",
    review:
      "¡Excelente servicio de traslado! Muy puntuales y el conductor fue muy amable.",
    language: "es",
  },
  {
    name: "Emily Johnson",
    date: "2025-06-01",
    service: "Tour Service",
    stars: 4,
    image: "/customers/customer3.jpg",
    review:
      "The tour was well organized and our guide was very knowledgeable. Highly recommend!",
    language: "en",
  },
  {
    name: "Giulia Rossi",
    date: "2025-05-20",
    service: "Boat Chartered",
    stars: 5,
    image: "/customers/customer4.jpg",
    review: "Esperienza fantastica! Barca pulita e staff molto professionale.",
    language: "it",
  },
  {
    name: "Hans Müller",
    date: "2025-05-15",
    service: "Boat Trip",
    stars: 5,
    image: "/customers/customer5.jpg",
    review: "Wunderbarer Ausflug! Alles war perfekt organisiert.",
    language: "de",
  },
  {
    name: "Lucía Fernández",
    date: "2025-05-10",
    service: "Tour Service",
    stars: 4,
    image: "/customers/customer6.jpg",
    review: "Muy buena experiencia, el guía fue excelente y aprendimos mucho.",
    language: "es",
  },
  {
    name: "Anna Nowak",
    date: "2025-04-30",
    service: "Private Transfer",
    stars: 5,
    image: "/customers/customer7.jpg",
    review: "Bardzo profesjonalna obsługa i wygodny transfer.",
    language: "pl",
  },
  {
    name: "Isabelle Lefevre",
    date: "2025-05-18",
    service: "Boat Chartered",
    stars: 5,
    image: "/customers/customer8.jpg",
    review: "Magnifique journée en mer, merci pour tout !",
    language: "fr",
  },
  {
    name: "David Smith",
    date: "2025-05-22",
    service: "Boat Trip",
    stars: 5,
    image: "/customers/customer9.jpg",
    review:
      "Absolutely loved the boat trip. The crew was friendly and the views were stunning.",
    language: "en",
  },
  {
    name: "Marta García",
    date: "2025-05-25",
    service: "Tour Service",
    stars: 4,
    image: "/customers/customer10.jpg",
    review: "El tour fue muy completo y divertido. ¡Repetiría sin dudarlo!",
    language: "es",
  },
  {
    name: "Jean-Pierre Martin",
    date: "2025-05-14",
    service: "Private Transfer",
    stars: 5,
    image: "/customers/customer11.jpg",
    review: "Chauffeur très sympathique et service impeccable.",
    language: "fr",
  },
  {
    name: "Elena Petrova",
    date: "2025-05-19",
    service: "Boat Chartered",
    stars: 5,
    image: "/customers/customer12.jpg",
    review: "Отличная поездка на яхте! Всё понравилось.",
    language: "ru",
  },
  {
    name: "Tomáš Novák",
    date: "2025-05-21",
    service: "Boat Trip",
    stars: 4,
    image: "/customers/customer13.jpg",
    review: "Skvělý zážitek, doporučuji všem.",
    language: "cs",
  },
  {
    name: "Maria Silva",
    date: "2025-05-16",
    service: "Tour Service",
    stars: 5,
    image: "/customers/customer14.jpg",
    review: "Passeio maravilhoso, guia muito atencioso.",
    language: "pt",
  },
  {
    name: "Peter Jensen",
    date: "2025-05-13",
    service: "Boat Chartered",
    stars: 5,
    image: "/customers/customer15.jpg",
    review: "Fantastisk service og en uforglemmelig dag på havet.",
    language: "da",
  },
  {
    name: "Sven Svensson",
    date: "2025-05-17",
    service: "Boat Trip",
    stars: 5,
    image: "/customers/customer16.jpg",
    review: "En fantastisk båttur med vennlig besetning.",
    language: "no",
  },
  {
    name: "Katarzyna Kowalska",
    date: "2025-05-11",
    service: "Private Transfer",
    stars: 5,
    image: "/customers/customer17.jpg",
    review: "Szybko, sprawnie i bardzo komfortowo.",
    language: "pl",
  },
  {
    name: "Andreas Papadopoulos",
    date: "2025-05-23",
    service: "Boat Chartered",
    stars: 5,
    image: "/customers/customer18.jpg",
    review: "Υπέροχη εμπειρία, το προσωπικό ήταν εξαιρετικό.",
    language: "el",
  },
  {
    name: "Charlotte Brown",
    date: "2025-05-24",
    service: "Tour Service",
    stars: 4,
    image: "/customers/customer19.jpg",
    review: "Great tour, very informative and fun!",
    language: "en",
  },
  {
    name: "Javier López",
    date: "2025-05-09",
    service: "Boat Trip",
    stars: 5,
    image: "/customers/customer20.jpg",
    review: "Un paseo en barco increíble, vistas espectaculares.",
    language: "es",
  },
  {
    name: "Nina Müller",
    date: "2025-05-08",
    service: "Boat Chartered",
    stars: 5,
    image: "/customers/customer21.jpg",
    review: "Sehr zufrieden, alles war perfekt.",
    language: "de",
  },
  {
    name: "Lucas Moreau",
    date: "2025-05-07",
    service: "Private Transfer",
    stars: 5,
    image: "/customers/customer22.jpg",
    review: "Service rapide et très professionnel.",
    language: "fr",
  },
  {
    name: "Sara Rossi",
    date: "2025-05-06",
    service: "Tour Service",
    stars: 4,
    image: "/customers/customer23.jpg",
    review: "Tour molto interessante e ben organizzato.",
    language: "it",
  },
  {
    name: "Marek Dvořák",
    date: "2025-05-05",
    service: "Boat Trip",
    stars: 5,
    image: "/customers/customer24.jpg",
    review: "Výborná služba, krásný zážitek.",
    language: "cs",
  },
  {
    name: "Emma Wilson",
    date: "2025-05-04",
    service: "Boat Chartered",
    stars: 5,
    image: "/customers/customer25.jpg",
    review: "The best boat charter experience ever!",
    language: "en",
  },
  {
    name: "Miguel Ángel",
    date: "2025-05-03",
    service: "Private Transfer",
    stars: 5,
    image: "/customers/customer26.jpg",
    review: "Muy buen servicio, lo recomiendo totalmente.",
    language: "es",
  },
  {
    name: "Paul Dupont",
    date: "2025-05-02",
    service: "Boat Trip",
    stars: 5,
    image: "/customers/customer27.jpg",
    review: "Superbe balade en bateau, équipe très sympathique.",
    language: "fr",
  },
  {
    name: "Linda Karlsson",
    date: "2025-05-01",
    service: "Tour Service",
    stars: 4,
    image: "/customers/customer28.jpg",
    review: "Mycket trevlig tur och kunnig guide.",
    language: "sv",
  },
  {
    name: "Ivana Petrović",
    date: "2025-04-30",
    service: "Boat Chartered",
    stars: 5,
    image: "/customers/customer29.jpg",
    review: "Odlična usluga i predivan dan na moru.",
    language: "hr",
  },
  {
    name: "Oliver Smith",
    date: "2025-04-29",
    service: "Boat Trip",
    stars: 5,
    image: "/customers/customer30.jpg",
    review: "Amazing trip, will definitely book again!",
    language: "en",
  },
  {
    name: "Sofia Almeida",
    date: "2025-04-28",
    service: "Tour Service",
    stars: 5,
    image: "/customers/customer31.jpg",
    review: "Guia excelente e passeio maravilhoso.",
    language: "pt",
  },
  {
    name: "Pablo Fernández",
    date: "2025-04-27",
    service: "Boat Chartered",
    stars: 5,
    image: "/customers/customer32.jpg",
    review: "Todo perfecto, muy recomendable.",
    language: "es",
  },
];

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function ReviewsPage() {
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
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from our happy customers about their experiences with our boat
            trips, private transfers, tours, and charter services.
          </p>
        </motion.div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
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
                      <div className="text-xs text-gray-500">
                        {formatDate(review.date)}
                      </div>
                      <div className="text-xs text-blue-700 font-medium">
                        {review.service}
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
