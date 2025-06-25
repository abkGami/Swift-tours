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
import { useRef, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

type Boat = {
  name: string;
  type: string;
  capacity: string;
  price: string;
  image: string;
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
    name: "Gulet",
    type: "Motorsailer",
    capacity: "Up to 25 guests",
    price: "From $222,008 to $3,017,038",
    image: "/boat/one.jpg",
    features: [
      "Wooden classic yacht",
      "Built in Bodrum or Marmaris",
      "6 to 11 cabins",
      "Luxury sailing experience",
    ],
    rating: 4.8,
    description:
      "A traditional Turkish sailing vessel offering charm, comfort, and craftsmanship, ideal for private and charter use.",
    specifications: {
      length: "30 to 32 meters",
      engine: "Not specified",
      fuel: "Not specified",
      speed: "Not specified",
    },
  },
  {
    name: "Pershing 46",
    type: "Performance Cruiser",
    capacity: "Up to 6 guests",
    price: "From €310,000 (VAT paid)",
    image: "/boat/two.jpg",
    features: [
      "Sleek aerodynamic form",
      "Carbon-fiber hard-top",
      "Dynamic open aspect",
      "Three lower-deck cabins",
      "Cherrywood and leather surfaces",
    ],
    rating: 4.8,
    description:
      "Three Cabins with en-suite bathrooms and remarkably spacious exterior spaces.",
    specifications: {
      length: "49 feet",
      engine: "Not specified",
      fuel: "Not specified",
      speed: "Not specified",
    },
  },
  {
    name: "Sarnico 43",
    type: "Open Yacht",
    capacity: "1 guest cabin",
    price: "Not specified",
    image: "/boat/three.jpg",
    features: [
      "Fiberglass/GRP hull",
      "CE certification class B",
      "Speed up to 36 knots",
      "Draft of 1.08 meters",
    ],
    rating: 4.8,
    description:
      "A luxurious open yacht with refined style and quality execution, ideal for coastal cruising.",
    specifications: {
      length: "43 feet",
      engine: "Not specified",
      fuel: "Not specified",
      speed: "36 knots",
    },
  },
  {
    name: "Ferretti Yachts 1000",
    type: "Flybridge Yacht",
    capacity: "6-8 guests",
    price: "From $97,010 to $11,243,252",
    image: "/boat/four.jpg",
    features: [
      "Twin MTU engines",
      "3 Cabins",
      "High-tech innovation",
      "Luxury and comfort",
    ],
    rating: 4.8,
    description:
      "The largest yacht ever built by Ferretti Yachts offering maximum comfort and customization.",
    specifications: {
      length: "64 feet",
      engine: "Twin MTU engines",
      fuel: "Not specified",
      speed: "24-29 knots",
    },
  },
  {
    name: "Lagoon 46",
    type: "Sailing Catamaran",
    capacity: "10 guests",
    price: "€686,800",
    image: "/boat/five.jpg",
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
      cities: ["Monaco", "Paris", "Nice", "Cannes", "Marseille"],
    },
    {
      name: "Italy",
      cities: ["Venice", "Naples", "Amalfi", "Cinque Terre", "Sicily"],
    },
    {
      name: "Greece",
      cities: ["Athens", "Santorini", "Mykonos", "Corfu", "Rhodes"],
    },
    {
      name: "Spain",
      cities: ["Barcelona", "Ibiza", "Valencia", "Palma de Mallorca", "Malaga"],
    },
    {
      name: "Croatia",
      cities: ["Dubrovnik", "Split", "Hvar", "Zadar", "Rovinj"],
    },
    {
      name: "Turkey",
      cities: ["Bodrum", "Antalya", "Istanbul", "Fethiye", "Marmaris"],
    },
    {
      name: "Portugal",
      cities: ["Lisbon", "Porto", "Faro", "Lagos", "Madeira"],
    },
    {
      name: "Norway",
      cities: ["Bergen", "Geiranger", "Ålesund", "Oslo", "Tromsø"],
    },
    {
      name: "Thailand",
      cities: ["Phuket", "Krabi", "Bangkok", "Koh Samui", "Phi Phi Islands"],
    },
    {
      name: "Vietnam",
      cities: ["Halong Bay", "Hoi An", "Da Nang", "Phu Quoc", "Nha Trang"],
    },
    {
      name: "Indonesia",
      cities: ["Bali", "Lombok", "Jakarta", "Komodo", "Raja Ampat"],
    },
    {
      name: "Philippines",
      cities: ["Palawan", "Cebu", "Boracay", "Manila", "Bohol"],
    },
    {
      name: "Japan",
      cities: ["Tokyo Bay", "Hiroshima", "Nagasaki", "Okinawa", "Kobe"],
    },
    {
      name: "India",
      cities: [
        "Goa",
        "Kerala (Backwaters)",
        "Mumbai",
        "Andaman Islands",
        "Chilika Lake",
      ],
    },
    {
      name: "Malaysia",
      cities: [
        "Langkawi",
        "Kota Kinabalu",
        "Penang",
        "Kuala Terengganu",
        "Tioman Island",
      ],
    },
    {
      name: "Brazil",
      cities: [
        "Rio de Janeiro",
        "Paraty",
        "Angra dos Reis",
        "Salvador",
        "Manaus (Amazon)",
      ],
    },
    {
      name: "Argentina",
      cities: [
        "Buenos Aires",
        "Ushuaia",
        "Puerto Madryn",
        "Tigre",
        "Bariloche",
      ],
    },
    {
      name: "Chile",
      cities: [
        "Puerto Montt",
        "Valparaíso",
        "Punta Arenas",
        "Castro",
        "San Antonio",
      ],
    },
    {
      name: "Peru",
      cities: [
        "Lima",
        "Iquitos (Amazon)",
        "Puno (Lake Titicaca)",
        "Callao",
        "Paracas",
      ],
    },
    {
      name: "Colombia",
      cities: [
        "Cartagena",
        "Santa Marta",
        "San Andrés",
        "Barranquilla",
        "Turbo",
      ],
    },
    {
      name: "Ecuador",
      cities: [
        "Galápagos Islands",
        "Guayaquil",
        "Manta",
        "Puerto Ayora",
        "San Cristóbal",
      ],
    },
  ];

  const router = useRouter();
  const [selectedCountry, setselectedCountry] = useState("");
  const [selectedCity, setselectedCity] = useState("");
  const [form, setForm] = useState({
    pickup: "",
  });
  const [selectedType, setSelectedType] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const [withSkipper, setWithSkipper] = useState("yes");
  const [place, setPlace] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [loading, setLoading] = useState(false);

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
      !selectedCity ||
      !selectedCountry ||
      !departureDate ||
      !returnDate ||
      !form.pickup ||
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-50">
      <Navigation />

      <CustomerSLideshow />

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
              Find Your Perfect Boat
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
                    setselectedCity(""); // Reset city when continent changes
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
                          "Greece",
                          "Spain",
                          "Croatia",
                          "Turkey",
                          "Portugal",
                          "Norway",
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
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => setselectedCity(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  disabled={!selectedCountry}
                >
                  <option value="">Select cities</option>
                  {country
                    .find((c) => c.name === selectedCountry)
                    ?.cities.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                </select>
              </div>
              {/* pick-up location  */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pick-up Location
                </label>
                <GooglePlacesAutocomplete
                  selectProps={{
                    placeholder: "Search for your pick-up location",
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
                />
              </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boats.map((boat, index) => (
              <motion.div
                key={boat.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
                  <div className="relative overflow-hidden">
                    <Image //change to img and remove height and width
                      width={1200}
                      height={12}
                      src={boat.image || "/placeholder.svg"}
                      alt={boat.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    {/* <Badge className="absolute top-3 right-3 bg-blue-600 text-white">
                      {boat.price}
                    </Badge> */}
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
                    <p className="text-gray-600 mb-4">{boat.description}</p>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 flex items-center mb-2">
                          <Waves className="h-4 w-4 mr-2 text-blue-600" />
                          Key Features
                        </h4>
                        <div className="grid grid-cols-2 gap-1">
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
                        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                          <div>Length: {boat.specifications.length}</div>
                          <div>Engine: {boat.specifications.engine}</div>
                          <div>Fuel: {boat.specifications.fuel}</div>
                          <div>Max Speed: {boat.specifications.speed}</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button
                        onClick={handleClick}
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

          {/* Call to Action */}
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
              <Button onClick={handleClick} variant="secondary" size="lg">
                Contact Charter Specialist
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Slideshow Album */}
      {/* <SlideshowAlbum /> */}

      <Footer />
    </div>
  );
}
