"use client";
import { useRef, useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Anchor,
  Users,
  Star,
  Waves,
  Calendar,
  MapPin,
  LucideCheck,
  Loader2,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { boats } from "@/data/boats/page";
import { useRouter } from "next/navigation";
import CustomerSLideshow from "@/components/boatTrip-slideshow";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

interface Boat {
  name: string;
  type: string;
  image?: string;
  rating: number;
  capacity: number;
  price: string;
  features?: string[];
}

interface CountryTitle {
  exp: string;
  duration: string;
  city: string;
}

interface CountryData {
  country: string;
  title: CountryTitle[];
}

const getBoatTypes = (boats: Boat[]) => [
  ...new Set(boats.map((boat) => boat.type)),
];

// const countryNames = countryData.map((c) => c.country);

// function getRandomTitles(titles: any[], count: number) {
//   if (!titles || titles.length === 0) return [];
//   const shuffled = [...titles].sort(() => 0.5 - Math.random());
//   while (shuffled.length < count) {
//     shuffled.push(...titles);
//   }
//   return shuffled.slice(0, count);
// }

export default function BoatsPage() {
  const [slideIndexes, setSlideIndexes] = useState<{ [id: string]: number }>(
    {}
  );

  const country = [
    {
      name: "Italy",
      cities: [
        { name: "Venice", snorkeling: false },
        { name: "Sardinia", snorkeling: true },
        { name: "Naples", snorkeling: true },
        { name: "Sicily", snorkeling: true },
        { name: "Amalfi Coast", snorkeling: true },
        { name: "Lake Como", snorkeling: false },
        { name: "Lake Garda", snorkeling: false },
        { name: "Livorno", snorkeling: true },
      ],
    },
    {
      name: "Greece",
      cities: [
        { name: "Santorini", snorkeling: true },
        { name: "Mykonos", snorkeling: true },
        { name: "Corfu", snorkeling: true },
        { name: "Rhodes", snorkeling: true },
        { name: "Athens", snorkeling: true },
        { name: "Crete", snorkeling: true },
        { name: "Zakynthos", snorkeling: true },
        { name: "Paros", snorkeling: true },
        { name: "Naxos", snorkeling: true },
        { name: "Kos", snorkeling: true },
        { name: "Skiathos", snorkeling: true },
        { name: "Lefkada", snorkeling: true },
        { name: "Thessaloniki", snorkeling: false },
      ],
    },

    {
      name: "Spain",
      cities: [
        { name: "Ibiza", snorkeling: true },
        { name: "Mallorca", snorkeling: true },
        { name: "Menorca", snorkeling: true },
        { name: "Barcelona", snorkeling: false },
        { name: "Valencia", snorkeling: false },
        { name: "Galicia Coast", snorkeling: true }, // e.g. Vigo, Cíes Islands
        { name: "Costa Brava", snorkeling: true }, // e.g. Tossa de Mar, Lloret de Mar
      ],
    },
    {
      name: "France",
      cities: [
        { name: "Nice", snorkeling: true },
        { name: "Cannes", snorkeling: true },
        { name: "Marseille", snorkeling: true },
        { name: "Corsica", snorkeling: true },
        { name: "Monaco", snorkeling: true },
      ],
    },
    {
      name: "Croatia",
      cities: [
        { name: "Dubrovnik", snorkeling: true },
        { name: "Split", snorkeling: true },
        { name: "Hvar", snorkeling: true },
        { name: "Zadar", snorkeling: true },
        { name: "Korčula", snorkeling: true },
      ],
    },
    {
      name: "Portugal",
      cities: [
        { name: "Lagos", snorkeling: true },
        { name: "Faro", snorkeling: true },
        { name: "Madeira", snorkeling: true },
        { name: "Lisbon", snorkeling: false },
        { name: "Cascais", snorkeling: true },
      ],
    },
    {
      name: "Malta",
      cities: [
        { name: "Valletta", snorkeling: true },
        { name: "Comino", snorkeling: true },
        { name: "Gozo", snorkeling: true },
        { name: "Sliema", snorkeling: true },
      ],
    },
    {
      name: "Montenegro",
      cities: [
        { name: "Kotor", snorkeling: true },
        { name: "Budva", snorkeling: true },
        { name: "Herceg Novi", snorkeling: true },
        { name: "Tivat", snorkeling: true },
      ],
    },
    {
      name: "Turkey",
      cities: [
        { name: "Bodrum", snorkeling: true },
        { name: "Fethiye", snorkeling: true },
        { name: "Antalya", snorkeling: true },
        { name: "Marmaris", snorkeling: true },
        { name: "Gocek", snorkeling: true },
      ],
    },
    {
      name: "United Kingdom",
      cities: [
        { name: "London (Thames River)", snorkeling: false },
        { name: "Isle of Wight", snorkeling: false },
        { name: "Brighton", snorkeling: true },
        { name: "Portsmouth", snorkeling: true },
        { name: "Southampton", snorkeling: true },
        { name: "Scottish Highlands", snorkeling: false },
        { name: "Aberdeen", snorkeling: false },
        { name: "Dundee", snorkeling: false },
        { name: "Edinburgh", snorkeling: false },
        { name: "Glasgow", snorkeling: false },
        { name: "Dublin", snorkeling: false },
        { name: "Galway", snorkeling: false },
        { name: "Cork", snorkeling: true },
        { name: "Wexford", snorkeling: true },
      ],
    },
    {
      name: "Norway",
      cities: [
        { name: "Bergen", snorkeling: false },
        { name: "Geiranger", snorkeling: false },
        { name: "Ålesund", snorkeling: false },
        { name: "Tromsø", snorkeling: false },
      ],
    },
    {
      name: "Sweden",
      cities: [
        { name: "Stockholm Archipelago", snorkeling: false },
        { name: "Gothenburg", snorkeling: false },
        { name: "Visby", snorkeling: false },
      ],
    },
    {
      name: "Iceland",
      cities: [
        { name: "Reykjavik", snorkeling: false },
        { name: "Akureyri", snorkeling: false },
        { name: "Húsavík", snorkeling: false },
      ],
    },
    {
      name: "Thailand",
      cities: [
        { name: "Phuket", snorkeling: true },
        { name: "Krabi", snorkeling: true },
        { name: "Koh Samui", snorkeling: true },
        { name: "Phi Phi Islands", snorkeling: true },
      ],
    },
    {
      name: "Philippines",
      cities: [
        { name: "El Nido", snorkeling: true },
        { name: "Coron", snorkeling: true },
        { name: "Cebu", snorkeling: true },
        { name: "Boracay", snorkeling: true },
        { name: "Bohol", snorkeling: true },
      ],
    },
    {
      name: "Indonesia",
      cities: [
        { name: "Bali", snorkeling: true },
        { name: "Komodo", snorkeling: true },
        { name: "Lombok", snorkeling: true },
        { name: "Raja Ampat", snorkeling: true },
      ],
    },
    {
      name: "Vietnam",
      cities: [
        { name: "Ha Long Bay", snorkeling: false },
        { name: "Nha Trang", snorkeling: true },
        { name: "Phu Quoc", snorkeling: true },
      ],
    },
    {
      name: "Malaysia",
      cities: [
        { name: "Langkawi", snorkeling: true },
        { name: "Tioman Island", snorkeling: true },
        { name: "Perhentian Islands", snorkeling: true },
      ],
    },
    // {
    //   name: "India",
    //   cities: [
    //     { name: "Goa", snorkeling: true },
    //     { name: "Andaman Islands", snorkeling: true },
    //     { name: "Kerala (Alleppey)", snorkeling: false },
    //   ],
    // },
    {
      name: "Maldives",
      cities: [
        { name: "Malé", snorkeling: true },
        { name: "Maafushi", snorkeling: true },
        { name: "Addu Atoll", snorkeling: true },
      ],
    },
    {
      name: "Sri Lanka",
      cities: [
        { name: "Mirissa", snorkeling: true },
        { name: "Trincomalee", snorkeling: true },
        { name: "Galle", snorkeling: true },
      ],
    },
    {
      name: "United Arab Emirates",
      cities: [
        { name: "Dubai Marina", snorkeling: false },
        { name: "Abu Dhabi", snorkeling: false },
      ],
    },
    {
      name: "Brazil",
      cities: [
        { name: "Rio de Janeiro", snorkeling: true },
        { name: "Angra dos Reis", snorkeling: true },
        { name: "Ilhabela", snorkeling: true },
        { name: "Fernando de Noronha", snorkeling: true },
        { name: "Paraty", snorkeling: true },
      ],
    },
    {
      name: "Colombia",
      cities: [
        { name: "Cartagena", snorkeling: true },
        { name: "Santa Marta", snorkeling: true },
        { name: "San Andrés", snorkeling: true },
        { name: "Isla Barú", snorkeling: true },
      ],
    },
    {
      name: "Ecuador",
      cities: [
        { name: "Galápagos Islands", snorkeling: true },
        { name: "Puerto Ayora", snorkeling: true },
      ],
    },
    {
      name: "Chile",
      cities: [
        { name: "Patagonia Fjords", snorkeling: false },
        { name: "Puerto Montt", snorkeling: false },
        { name: "Chiloé Island", snorkeling: false },
      ],
    },
    {
      name: "Peru",
      cities: [
        { name: "Lake Titicaca", snorkeling: false },
        { name: "Paracas", snorkeling: false },
        { name: "Ballestas Islands", snorkeling: false },
      ],
    },
    {
      name: "Argentina",
      cities: [
        { name: "Buenos Aires (Tigre Delta)", snorkeling: false },
        { name: "Puerto Madryn", snorkeling: true }, // Known for marine life
      ],
    },
    {
      name: "Uruguay",
      cities: [
        { name: "Punta del Este", snorkeling: true },
        { name: "Montevideo", snorkeling: false },
      ],
    },
    {
      name: "Venezuela",
      cities: [
        { name: "Los Roques", snorkeling: true },
        { name: "Margarita Island", snorkeling: true },
      ],
    },
    {
      name: "Tahiti",
      cities: [
        { name: "Papeete", snorkeling: true },
        { name: "Moorea", snorkeling: true },
        { name: "Bora Bora", snorkeling: true },
        { name: "Raiatea", snorkeling: true },
        { name: "Huahine", snorkeling: true },
        { name: "Taha'a", snorkeling: true },
        { name: "Fakarava", snorkeling: true },
      ],
    },
    {
      name: "Hawaii",
      cities: [
        { name: "Honolulu", snorkeling: true },
        { name: "Maui", snorkeling: true },
        { name: "Kauai", snorkeling: true },
        { name: "Kailua-Kona", snorkeling: true },
        { name: "Hilo", snorkeling: true },
        { name: "Lanai", snorkeling: true },
        { name: "Molokai", snorkeling: true },
      ],
    },
  ];

  const tripTitles = [
    "3 hours boat trip",
    "Full day boat trip",
    "Romantic sunset boat trip",
    "Snorkeling",
    "Fishing trip",
    "6 hours boat trip",
    "Boat party trip",
  ];

  const router = useRouter();
  const [selectedCountry, setselectedCountry] = useState("");
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

  // Search handler
  const handleSearch = () => {
    if (
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

  // City search state and dropdown visibility
  const [citySearch, setCitySearch] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [showCityOptions, setShowCityOptions] = useState(false);
  const cityInputRef = useRef<HTMLInputElement>(null);

  // Memoized city options for selected country
  const cityOptions = useMemo(() => {
    const found = country.find((c) => c.name === selectedCountry);
    if (!found) return [];
    // If cities are objects, map to names
    return found.cities
      .map((city: any) => (typeof city === "string" ? city : city.name))
      .filter((city: string) =>
        city.toLowerCase().includes(citySearch.toLowerCase())
      );
  }, [selectedCountry, citySearch, country]);

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

  // Validate citySearch on blur
  const validateCity = () => {
    const found = country.find((c) => c.name === selectedCountry);
    if (!found) return;
    const valid = found.cities.some(
      (city: any) =>
        (typeof city === "string" ? city : city.name).toLowerCase() ===
        citySearch.toLowerCase()
    );
    if (!valid && citySearch) {
      alert("Please select a valid city from the list.");
      setSelectedCity("");
      setCitySearch("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-50">
      <Navigation />
      {
        // !loading
        !hasSearched ? <CustomerSLideshow /> : <div></div>
      }

      {/* Search Card */}
      <section className="pt-24 pb-8 flex justify-center">
        <Card className="w-full max-w-4xl mx-auto shadow-2xl border-0 p-8">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900 mb-4">
              Find Your Perfect Boat Trip
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
                    setSelectedCity("");
                    setCitySearch("");
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3"
                >
                  <option value="">Select Country</option>
                  <optgroup label="Europe">
                    {country
                      .filter((c) =>
                        [
                          "Italy",
                          "Greece",
                          "Spain",
                          "France",
                          "Croatia",
                          "Portugal",
                          "Malta",
                          "Montenegro",
                          "Turkey",
                          "United Kingdom",
                          "Norway",
                          "Sweden",
                          "Iceland",
                        ].includes(c.name)
                      )
                      .map((cont) => (
                        <option key={cont.name} value={cont.name}>
                          {cont.name}
                        </option>
                      ))}
                  </optgroup>
                  <optgroup label="Oceania">
                    {country
                      .filter((c) => ["Tahiti", "Hawaii"].includes(c.name))
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
                          "Philippines",
                          "United Arab Emirates",
                          "Indonesia",
                          "Vietnam",
                          "Malaysia",
                          "Maldives",
                          "Sri Lanka",
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
                          "Colombia",
                          "Ecuador",
                          "Chile",
                          "Peru",
                          "Argentina",
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
                    setSelectedCity(""); // Reset selectedCity if user types
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
                            setSelectedCity(city);
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
          <div className="flex flex-col items-center justify-center py-20">
            {/* <Loader2 className="animate-spin h-12 w-12 text-blue-600 mb-4" /> */}
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 border-b-4 "></div>

            <div className="text-lg text-blue-700 font-semibold">
              Searching for boats...
            </div>
          </div>
        )}
        {!loading && hasSearched && (
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
                {/* <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {selectedType
                    ? `Available ${selectedType}s`
                    : "Our Premium Fleet"}
                </h2> */}
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Choose from our carefully maintained collection of boats, each
                  equipped with modern amenities and safety equipment
                </p>
              </motion.div>

              {filteredBoats.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredBoats.map((boat, index) => {
                    const randomNames = [
                      "Alex Morgan",
                      "Sofia Rossi",
                      "Liam Smith",
                      "Emma Dubois",
                      "Lucas Müller",
                      "Mia Johansson",
                      "Noah Ivanov",
                      "Olivia Costa",
                      "Ethan Novak",
                      "Ava Kim",
                    ];
                    const randomOwner =
                      randomNames[
                        Math.floor(Math.random() * randomNames.length)
                      ];
                    // tripTitles.map((tripTitle, tIdx) => {
                    const detailsUrl = `/details/${
                      (boat as any).id
                    }?country=${encodeURIComponent(
                      selectedCountry
                    )}&city=${encodeURIComponent(
                      selectedCity
                    )}&type=${encodeURIComponent(
                      boat.type
                    )}&place=${encodeURIComponent(
                      place
                    )}&departureDate=${encodeURIComponent(
                      departureDate
                    )}&returnDate=${encodeURIComponent(
                      returnDate
                    )}&withSkipper=${encodeURIComponent(
                      withSkipper
                    )}&exp=${encodeURIComponent(
                      boat.exp
                    )}&owner=${encodeURIComponent(randomOwner)}`;

                    return (
                      <motion.div
                        key={boat.name + index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.05,
                        }}
                        whileHover={{ y: -10, scale: 1.02 }}
                        className="group"
                        style={{ cursor: "pointer" }}
                      >
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                            window.open(detailsUrl, "_blank");
                          }}
                          href={detailsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ display: "block", height: "100%" }}
                        >
                          {" "}
                          <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
                            <div className="relative overflow-hidden">
                              {/* {images.length > 0 && (
                                <Image
                                  width={1200}
                                  height={300}
                                  src={images[0] || "/placeholder.svg"}
                                  alt={boat.name}
                                  className="w-full h-[420px] object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                              )} */}
                              {(boat as any).images &&
                                Array.isArray((boat as any).images) &&
                                (boat as any).images.length > 0 && (
                                  <Image
                                    width={1200}
                                    height={300}
                                    src={
                                      (boat as any).images[0] ||
                                      "/placeholder.svg"
                                    }
                                    alt={boat.name}
                                    className="w-full h-[420px] object-cover group-hover:scale-110 transition-transform duration-300"
                                  />
                                )}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            </div>

                            <CardHeader className="flex flex-row items-center justify-between">
                              <CardTitle className="text-xl text-gray-900">
                                {boat.exp}
                                {/* Add "and snorkeling" if selected city has snorkeling: true, but not for certain exp or tour boat type */}
                                {(() => {
                                  const foundCountry = country.find(
                                    (c) => c.name === selectedCountry
                                  );
                                  const foundCity = foundCountry?.cities.find(
                                    (city: any) =>
                                      (typeof city === "string"
                                        ? city
                                        : city.name
                                      ).toLowerCase() ===
                                      selectedCity.toLowerCase()
                                  );
                                  // Only add "and snorkeling" if exp is not in the excluded list and type is not "tour boat"
                                  const excludedExps = [
                                    "3 hours boat trip",
                                    "Romantic sunset boat trip",
                                    "Full day fishing trip",
                                    "6 hours fishing trip",
                                  ];
                                  if (
                                    foundCity &&
                                    foundCity.snorkeling &&
                                    !excludedExps.includes(boat.exp) &&
                                    boat.type.toLowerCase() !== "tour boat"
                                  ) {
                                    return " and snorkeling";
                                  }
                                  return "";
                                })()}
                              </CardTitle>
                              <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center space-x-1">
                                  <Star className="h-4 w-4 text-yellow-400 " />
                                  <span className="text-sm font-medium">
                                    {boat.rating}
                                  </span>
                                </div>
                                {/* ...existing code... */}
                              </div>
                            </CardHeader>

                            <CardContent>
                              <div className="mb-2">
                                <span className="font-semibold text-gray-600">
                                  {/* {title.city} */}
                                </span>{" "}
                              </div>
                              <div className="mb-2">
                                <span className="font-normal">
                                  {/* {title.duration} */}
                                </span>
                              </div>
                              <div className="bg-gray-100 rounded p-3 mt-2 ">
                                <div>
                                  {boat.type.toLowerCase() !==
                                    "rigid inflatable boat (kayak)" && (
                                    <>
                                      <div className="flex flex-row items-center gap-2 md:text-xs">
                                        <LucideCheck color="blue" size={15} />
                                        <div>Fuel included</div>
                                      </div>
                                      <div className="flex flex-row items-center gap-2 md:text-xs">
                                        <LucideCheck color="blue" size={15} />
                                        <div>Skipper included</div>
                                      </div>
                                    </>
                                  )}
                                </div>
                                <div className="mt-2 flex flex-col items-start">
                                  {/* <div className="font-semibold">
                                    {boat.price}
                                  </div> */}
                                  <div className="font-medium text-gray-800 md:text-sm">
                                    For groups of up to {boat.capacity} people
                                  </div>
                                </div>
                              </div>
                              <div className="mt-4">
                                <Button
                                  className="bg-blue-600 hover:bg-blue-700 w-full"
                                  size="lg"
                                >
                                  View Details
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        </a>
                      </motion.div>
                    );
                  })}
                </div>
              ) : hasSearched && selectedCountry && selectedType ? (
                <div className="text-center text-gray-500 mt-10">
                  No boats found for this country and type.
                </div>
              ) : (
                <div className="text-center text-gray-400 mt-10">
                  Please select a country and boat type to search.
                </div>
              )}
            </div>
          </section>
        )}
      </div>

      <Footer />
    </div>
  );
}
