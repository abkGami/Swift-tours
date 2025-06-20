"use client";
import { useState } from "react";
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
import { boats, country as countryData } from "@/data/boats/page";
import { useRef } from "react";
import { useRouter } from "next/navigation";

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

const countryNames = countryData.map((c) => c.country);

function getRandomTitles(titles: any[], count: number) {
  if (!titles || titles.length === 0) return [];
  const shuffled = [...titles].sort(() => 0.5 - Math.random());
  while (shuffled.length < count) {
    shuffled.push(...titles);
  }
  return shuffled.slice(0, count);
}

export default function BoatsPage() {
  const [slideIndexes, setSlideIndexes] = useState<{ [id: string]: number }>(
    {}
  );

  // Helper to get current slide index for a boat
  const getCurrentSlide = (boatId: string, images: string[]) =>
    slideIndexes[boatId] ?? 0;

  // Handler to go to previous image
  const prevImage = (boatId: string, images: string[]) => {
    setSlideIndexes((prev) => ({
      ...prev,
      [boatId]:
        prev[boatId] === undefined
          ? images.length - 1
          : prev[boatId] === 0
          ? images.length - 1
          : prev[boatId] - 1,
    }));
  };

  // Handler to go to next image
  const nextImage = (boatId: string, images: string[]) => {
    setSlideIndexes((prev) => ({
      ...prev,
      [boatId]:
        prev[boatId] === undefined
          ? 1 % images.length
          : prev[boatId] === images.length - 1
          ? 0
          : prev[boatId] + 1,
    }));
  };

  const router = useRouter();

  const [searchCountry, setSearchCountry] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const [withSkipper, setWithSkipper] = useState("yes");
  const [place, setPlace] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [loading, setLoading] = useState(false);

  const resultsRef = useRef<HTMLDivElement>(null);

  // Find country object by searchCountry
  const countryObj = countryData.find(
    (c) => c.country.toLowerCase() === searchCountry.trim().toLowerCase()
  );

  // Filter boats by selected type
  const filteredBoats =
    countryObj && selectedType
      ? boats.filter((b) => b.type === selectedType)
      : [];

  // Randomly pick titles for each boat
  const randomTitles =
    countryObj && filteredBoats.length
      ? getRandomTitles(countryObj.title, filteredBoats.length)
      : [];

  // Search handler
  const handleSearch = () => {
    if (
      !searchCountry ||
      !place ||
      !departureDate ||
      !returnDate ||
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
                <input
                  type="text"
                  list="country-list"
                  value={searchCountry}
                  onChange={(e) => setSearchCountry(e.target.value)}
                  placeholder="Search country"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                <datalist id="country-list">
                  {countryNames.map((c) => (
                    <option key={c} value={c} />
                  ))}
                </datalist>
              </div>
              {/* New text input field below country */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Place
                </label>
                <input
                  type="text"
                  // onChange={(e) => console.log("Extra Info:", e.target.value)}
                  onChange={(e) => setPlace(e.target.value)}
                  placeholder=""
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
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
            <Loader2 className="animate-spin h-12 w-12 text-blue-600 mb-4" />
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
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Choose from our carefully maintained collection of boats, each
                  equipped with modern amenities and safety equipment
                </p>
              </motion.div>

              {countryObj && filteredBoats.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredBoats.map((boat, index) => {
                    const title = randomTitles[index];
                    const detailsUrl = `/details/${
                      boat.id
                    }?country=${encodeURIComponent(
                      searchCountry
                    )}&exp=${encodeURIComponent(
                      title.exp
                    )}&duration=${encodeURIComponent(
                      title.duration
                    )}&city=${encodeURIComponent(title.city)}`;

                    // Use images array for slideshow
                    const images =
                      (boat as any).images &&
                      Array.isArray((boat as any).images)
                        ? (boat as any).images
                        : [];

                    const currentSlide = getCurrentSlide(boat.id, images);
                    return (
                      <motion.div
                        key={boat.name + index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ y: -10, scale: 1.02 }}
                        className="group"
                        style={{ cursor: "pointer" }}
                      >
                        <a
                          href={detailsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ display: "block", height: "100%" }}
                        >
                          {" "}
                          <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
                            <div className="relative overflow-hidden">
                              {images.length > 0 && (
                                <Image
                                  width={1200}
                                  height={300}
                                  src={images[0] || "/placeholder.svg"}
                                  alt={boat.name}
                                  className="w-full h-[420px] object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                              )}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            </div>

                            <CardHeader className="flex flex-row items-center justify-between">
                              <CardTitle className="text-xl text-gray-900">
                                {title.exp}
                              </CardTitle>
                              <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center space-x-1">
                                  <Star className="h-4 w-4 text-yellow-400 " />
                                  <span className="text-sm font-medium">
                                    {boat.rating}
                                  </span>
                                </div>
                                {/* <div className="flex items-center text-gray-600">
                                <Users className="h-4 w-4 mr-1" />
                                <span className="text-sm">{boat.capacity}</span>
                              </div> */}
                              </div>
                            </CardHeader>

                            <CardContent>
                              <div className="mb-2">
                                <span className="font-semibold text-gray-600">
                                  {title.city}
                                </span>{" "}
                              </div>
                              <div className="mb-2">
                                <span className="font-normal">
                                  {title.duration}
                                </span>
                              </div>
                              <div className="bg-gray-100 rounded p-3 mt-2 flex flex-row items-center justify-between">
                                <div>
                                  <div className="flex flex-row items-center gap-2 md:text-xs">
                                    <LucideCheck color="blue" size={15} />
                                    <div>Fuel included</div>
                                  </div>
                                  <div className="flex flex-row items-center gap-2 md:text-xs">
                                    <LucideCheck color="blue" size={15} />
                                    <div>Skipper included</div>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <div className="font-semibold">
                                    {boat.price}
                                  </div>
                                  <div className="font-medium text-gray-800 md:text-sm">
                                    For groups of up to {boat.capacity} people
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </a>
                      </motion.div>
                    );
                  })}
                </div>
              ) : hasSearched && searchCountry && selectedType ? (
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
