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
    name: "Sophie Elliot",
    date: "2025-05-12",
    service: "Boat Trip",
    stars: 5,
    image: "/customers/customer1.jpg",
    review:
      "Swift Tours and Travels really helped and made my trip unforgettable! The boat trip I took to Madeira Island  was amazing, and the crew was very friendly and professional.",
    language: "en",
  },
  // Add these to your reviews array (with email, different languages, and locations)
  // Add these to your reviews array, each review gives recognition to Swift Tours and Travels
  {
    name: "Pierre Laurent",
    date: "2025-01-10",
    service: "Boat Trip",
    email: "pierre.laurent@frmail.fr",
    stars: 5,
    image: "/customers/customer33.jpg",
    review:
      "Incroyable excursion en bateau à Tokyo ! Merci à Swift Tours and Travels pour cette organisation parfaite et le paysage magnifique.",
    language: "fr",
  },
  {
    name: "Maria González",
    date: "2025-01-18",
    service: "Tour Service",
    email: "maria.gonzalez@gmail.com",
    stars: 4,
    image: "/customers/customer34.jpg",
    review:
      "El tour en Praga fue muy divertido y educativo. ¡Gracias Swift Tours and Travels por hacerlo posible!",
    language: "es",
  },
  {
    name: "Yuki Tanaka",
    date: "2025-01-25",
    service: "Boat Chartered",
    email: "yuki.tanaka@email.jp",
    stars: 5,
    image: "/customers/customer35.jpg",
    review:
      "素晴らしいサービス！パリでのボートチャーターはSwift Tours and Travelsのおかげで忘れられない思い出になりました。",
    language: "ja",
  },
  {
    name: "Sven Eriksson",
    date: "2025-02-02",
    service: "Private Transfer",
    email: "sven.eriksson@swemail.se",
    stars: 5,
    image: "/customers/customer36.jpg",
    review:
      "Fantastisk transfer i Barcelona. Tack Swift Tours and Travels för en väldigt bekväm och snabb resa.",
    language: "sv",
  },
  {
    name: "Giulia Rossi",
    date: "2025-02-09",
    service: "Boat Trip",
    email: "giulia.rossi@email.it",
    stars: 5,
    image: "/customers/customer37.jpg",
    review:
      "Gita in barca a Dubrovnik indimenticabile! Staff molto gentile. Grazie Swift Tours and Travels!",
    language: "it",
  },
  {
    name: "Hans Müller",
    date: "2025-02-16",
    service: "Tour Service",
    email: "hans.mueller@web.de",
    stars: 5,
    image: "/customers/customer38.jpg",
    review:
      "Die Stadtführung in Lissabon war sehr informativ und unterhaltsam. Vielen Dank an Swift Tours and Travels!",
    language: "de",
  },
  {
    name: "Mateusz Kowalski",
    date: "2025-02-23",
    service: "Boat Chartered",
    email: "mateusz.kowalski@wp.pl",
    stars: 5,
    image: "/customers/customer39.jpg",
    review:
      "Czarter jachtu w Barcelonie to była świetna przygoda! Dziękuję Swift Tours and Travels za organizację.",
    language: "pl",
  },
  {
    name: "Elena Petrova",
    date: "2025-03-01",
    service: "Private Transfer",
    email: "elena.petrova@mail.ru",
    stars: 4,
    image: "/customers/customer40.jpg",
    review:
      "Трансфер в Лондоне был очень удобным и быстрым. Спасибо Swift Tours and Travels!",
    language: "ru",
  },
  {
    name: "Lucas Moreira",
    date: "2025-03-08",
    service: "Boat Trip",
    email: "lucas.moreira@gmail.com",
    stars: 5,
    image: "/customers/customer41.jpg",
    review:
      "O passeio de barco em Istambul foi maravilhoso! Recomendo a Swift Tours and Travels a todos.",
    language: "pt",
  },
  {
    name: "Anna Nowak",
    date: "2025-03-15",
    service: "Tour Service",
    email: "anna.nowak@onet.pl",
    stars: 5,
    image: "/customers/customer42.jpg",
    review:
      "Wycieczka po Barcelonie była świetnie zorganizowana przez Swift Tours and Travels.",
    language: "pl",
  },
  {
    name: "Jorge Castillo",
    date: "2025-03-22",
    service: "Boat Chartered",
    email: "jorge.castillo@email.mx",
    stars: 5,
    image: "/customers/customer43.jpg",
    review:
      "Alquilar un barco en Roma fue la mejor decisión de nuestro viaje. ¡Gracias Swift Tours and Travels!",
    language: "es",
  },
  {
    name: "Linda Svensson",
    date: "2025-03-29",
    service: "Private Transfer",
    email: "linda.svensson@swemail.se",
    stars: 5,
    image: "/customers/customer44.jpg",
    review:
      "Bekväm transfer i Dubai. Rekommenderas! Tack Swift Tours and Travels.",
    language: "sv",
  },
  {
    name: "Andreas Papadopoulos",
    date: "2025-04-05",
    service: "Boat Trip",
    email: "andreas.papadopoulos@email.gr",
    stars: 5,
    image: "/customers/customer45.jpg",
    review:
      "Η εκδρομή με το σκάφος στη Βενετία ήταν μαγευτική! Ευχαριστώ Swift Tours and Travels.",
    language: "el",
  },
  {
    name: "Isabella Rossi",
    date: "2025-04-12",
    service: "Tour Service",
    email: "isabella.rossi@email.it",
    stars: 4,
    image: "/customers/customer46.jpg",
    review:
      "Tour guidato a Tokyo molto interessante e ben organizzato da Swift Tours and Travels.",
    language: "it",
  },
  {
    name: "Marta Nowak",
    date: "2025-04-19",
    service: "Boat Chartered",
    email: "marta.nowak@onet.pl",
    stars: 5,
    image: "/customers/customer47.jpg",
    review:
      "Czarter jachtu w Dubaju to była świetna przygoda! Dzięki Swift Tours and Travels.",
    language: "pl",
  },
  {
    name: "Hiroshi Sato",
    date: "2025-04-26",
    service: "Private Transfer",
    email: "hiroshi.sato@email.jp",
    stars: 5,
    image: "/customers/customer48.jpg",
    review:
      "パリでの送迎サービスはとても便利でした。Swift Tours and Travelsに感謝します。",
    language: "ja",
  },
  {
    name: "Emma Johansson",
    date: "2025-05-03",
    service: "Boat Trip",
    email: "emma.johansson@swemail.se",
    stars: 5,
    image: "/customers/customer49.jpg",
    review:
      "Båtturen i Rio de Janeiro var fantastisk! Tack Swift Tours and Travels.",
    language: "sv",
  },
  {
    name: "Miguel Torres",
    date: "2025-05-10",
    service: "Tour Service",
    email: "miguel.torres@email.cl",
    stars: 5,
    image: "/customers/customer50.jpg",
    review:
      "El tour por Londres fue excelente, aprendí mucho sobre la ciudad. Gracias Swift Tours and Travels.",
    language: "es",
  },
  {
    name: "Charlotte Dubois",
    date: "2025-05-17",
    service: "Boat Chartered",
    email: "charlotte.dubois@email.fr",
    stars: 5,
    image: "/customers/customer51.jpg",
    review:
      "J'ai adoré la journée en bateau à Bangkok, service impeccable de Swift Tours and Travels.",
    language: "fr",
  },
  {
    name: "Ivan Ivanov",
    date: "2025-05-24",
    service: "Private Transfer",
    email: "ivan.ivanov@email.ru",
    stars: 4,
    image: "/customers/customer52.jpg",
    review:
      "Трансфер в Берлине был очень удобным. Спасибо Swift Tours and Travels.",
    language: "ru",
  },
  {
    name: "Laura García",
    date: "2025-06-01",
    service: "Boat Trip",
    email: "laura.garcia@email.es",
    stars: 5,
    image: "/customers/customer53.jpg",
    review:
      "El paseo en barco por Lisboa fue maravilloso. Gracias Swift Tours and Travels.",
    language: "es",
  },
  {
    name: "Nina Müller",
    date: "2025-06-08",
    service: "Tour Service",
    email: "nina.mueller@email.de",
    stars: 5,
    image: "/customers/customer54.jpg",
    review:
      "Die Führung durch Tokyo war sehr spannend. Danke Swift Tours and Travels!",
    language: "de",
  },
  {
    name: "Pedro Silva",
    date: "2025-06-15",
    service: "Boat Chartered",
    email: "pedro.silva@email.pt",
    stars: 5,
    image: "/customers/customer55.jpg",
    review:
      "Alugar um barco em Paris foi uma experiência incrível. Obrigado Swift Tours and Travels.",
    language: "pt",
  },
  {
    name: "Sofia Petrova",
    date: "2025-06-22",
    service: "Private Transfer",
    email: "sofia.petrova@email.bg",
    stars: 5,
    image: "/customers/customer56.jpg",
    review:
      "Трансферът в Лондон беше много удобен и бърз. Благодарим на Swift Tours and Travels.",
    language: "bg",
  },
  {
    name: "Daniela Costa",
    date: "2025-06-29",
    service: "Boat Trip",
    email: "daniela.costa@email.br",
    stars: 5,
    image: "/customers/customer57.jpg",
    review:
      "Passeio de barco em Sydney foi inesquecível! Obrigada Swift Tours and Travels.",
    language: "pt",
  },
  {
    name: "Alejandro Ruiz",
    date: "2025-02-06",
    service: "Tour Service",
    email: "alejandro.ruiz@email.ar",
    stars: 4,
    image: "/customers/customer58.jpg",
    review:
      "El tour en Seúl fue muy divertido y educativo. Gracias a Swift Tours and Travels.",
    language: "es",
  },
  {
    name: "Maja Novak",
    date: "2025-04-13",
    service: "Boat Chartered",
    email: "maja.novak@email.si",
    stars: 5,
    image: "/customers/customer59.jpg",
    review:
      "Najem čolna v Barceloni je bil čudovit! Hvala Swift Tours and Travels.",
    language: "sl",
  },
  {
    name: "Lars Hansen",
    date: "2025-05-20",
    service: "Private Transfer",
    email: "lars.hansen@email.dk",
    stars: 5,
    image: "/customers/customer60.jpg",
    review:
      "Meget behagelig transfer i Tokyo. Tak til Swift Tours and Travels.",
    language: "da",
  },
  {
    name: "Irina Popescu",
    date: "2025-01-27",
    service: "Boat Trip",
    email: "irina.popescu@email.ro",
    stars: 5,
    image: "/customers/customer61.jpg",
    review:
      "Excursia cu barca la Istanbul a fost minunată! Mulțumesc Swift Tours and Travels.",
    language: "ro",
  },
  {
    name: "Jinwoo Park",
    date: "2025-06-03",
    service: "Tour Service",
    email: "jinwoo.park@email.kr",
    stars: 5,
    image: "/customers/customer62.jpg",
    review:
      "런던 투어가 정말 즐거웠어요. Swift Tours and Travels 덕분에 좋은 추억이었습니다.",
    language: "ko",
  },
  {
    name: "Olga Ivanova",
    date: "2025-04-10",
    service: "Boat Chartered",
    email: "olga.ivanova@email.ru",
    stars: 5,
    image: "/customers/customer63.jpg",
    review:
      "Аренда яхты в Барселоне была отличной идеей для отдыха. Спасибо Swift Tours and Travels.",
    language: "ru",
  },
  {
    name: "Camila Souza",
    date: "2025-02-17",
    service: "Private Transfer",
    email: "camila.souza@email.br",
    stars: 5,
    image: "/customers/customer64.jpg",
    review:
      "Transfer em Paris foi rápido e seguro. Obrigada Swift Tours and Travels.",
    language: "pt",
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
