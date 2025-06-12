"use client";
import { useState } from "react";
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
import Link from "next/link";
import { boats } from "@/data/boats/page";

const boatTypes = [
  "Motorsailer",
  "Performance Cruiser",
  "Open Yacht",
  "Flybridge Yacht",
  "Sailing Catamaran",
];

const countries = [
  "Italy",
  "France",
  "Portugal",
  "Greece",
  "London",
  "Malta",
  "Spain",
  "Sweden",
  "Croatia",
  "Austria",
  "Mongolia",
  "Japan",
  "Indonesia",
  "Maldives",
  "Bhutan",
  "South Korea",
  "South Korea",
];

// Example boats data (replace or extend with real data as needed)
// const boats = [
//   {
//     id: "sea-breeze",
//     name: "Sea Breeze",
//     type: "Motorsailer",
//     image: "/placeholder.svg?height=300&width=400",
//     rating: 4.8,
//     capacity: 8,
//     features: ["3 cabins", "Full crew", "Fuel included"],
//     specifications: { year: 2020, length: 14 },
//     price: "€2,500/week",
//     description: "Italy, Amalfi Coast",
//   },
//   {
//     id: "ocean-dream",
//     name: "Ocean Dream",
//     type: "Sailing Catamaran",
//     image: "/placeholder.svg?height=300&width=400",
//     rating: 4.7,
//     capacity: 10,
//     features: ["4 cabins", "Skipper", "Fuel included"],
//     specifications: { year: 2019, length: 15 },
//     price: "€3,200/week",
//     description: "Greece, Santorini",
//   },
//   {
//     id: "blue-horizon",
//     name: "Blue Horizon",
//     type: "Flybridge Yacht",
//     image: "/placeholder.svg?height=300&width=400",
//     rating: 4.9,
//     capacity: 12,
//     features: ["5 cabins", "Full crew", "Fuel included"],
//     specifications: { year: 2021, length: 18 },
//     price: "€5,000/week",
//     description: "Spain, Mallorca",
//   },
// ];

export default function BoatsPage() {
  const router = useRouter();

  // Search/filter state
  const [searchCountry, setSearchCountry] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [withSkipper, setWithSkipper] = useState("yes");
  const [filteredBoats, setFilteredBoats] = useState(boats);

  // Search handler
  const handleSearch = () => {
    if (
      !searchCountry ||
      !departureDate ||
      !returnDate ||
      !selectedType ||
      (withSkipper !== "yes" && withSkipper !== "no")
    ) {
      alert("Please fill all fields and select skipper option.");
      return;
    }
    let results = boats;
    if (searchCountry) {
      results = results.filter(
        (boat) =>
          boat.description
            ?.toLowerCase()
            .includes(searchCountry.toLowerCase()) ||
          boat.name?.toLowerCase().includes(searchCountry.toLowerCase())
      );
    }
    // if (selectedType) {
    //   results = results.filter((boat) => boat.type === selectedType);
    // }
    // if (withSkipper !== "any") {
    //   results = results.filter((boat) =>
    //     withSkipper === "yes"
    //       ? boat.features?.some((f) => f.toLowerCase().includes("crew"))
    //       : !boat.features?.some((f) => f.toLowerCase().includes("crew"))
    //   );
    // }
    setFilteredBoats(results);
  };

  // ...existing code...

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
                  {countries.map((c) => (
                    <option key={c} value={c} />
                  ))}
                </datalist>
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
                  <option value="">Any</option>
                  {boatTypes.map((type) => (
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
            {filteredBoats.map((boat, index) => (
              <motion.div
                key={boat.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Link href={`/details/${boat.id}`} className="block h-full">
                  <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
                    <div className="relative overflow-hidden">
                      <Image
                        width={1200}
                        height={12}
                        src={boat.image || "/placeholder.svg"}
                        alt={boat.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
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
                        {/* <Badge
                          variant="secondary"
                          className="bg-blue-100 text-blue-800"
                        >
                          {boat.type}
                        </Badge> */}
                        <div className="flex items-center text-gray-600">
                          <Users className="h-4 w-4 mr-1" />
                          <span className="text-sm">{boat.capacity}</span>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      {/* Show search result details */}
                      <div className="mb-2">
                        <span className="font-semibold">Year:</span>{" "}
                        {boat.specifications.year || "N/A"}
                      </div>
                      <div className="mb-2">
                        <span className="font-semibold">Skipper:</span>{" "}
                        {withSkipper === "any"
                          ? "Optional"
                          : withSkipper === "yes"
                          ? "With Skipper"
                          : "Without Skipper"}
                      </div>
                      <div className="mb-2">
                        <span className="font-semibold">People:</span>{" "}
                        {boat.capacity}
                      </div>
                      <div className="mb-2">
                        <span className="font-semibold">Cabins:</span>{" "}
                        {boat.features
                          ?.find((f) => f.toLowerCase().includes("cabin"))
                          ?.match(/\d+/)?.[0] || "N/A"}
                      </div>
                      <div className="mb-2">
                        <span className="font-semibold">Berths:</span>{" "}
                        {/* You can add berths info to your data if available */}
                        {"N/A"}
                      </div>
                      <div className="mb-2">
                        <span className="font-semibold">Metres:</span>{" "}
                        {boat.specifications.length}
                      </div>
                      <div className="mb-2">
                        <span className="font-semibold">Fuel Included:</span>{" "}
                        {boat.features?.some((f) =>
                          f.toLowerCase().includes("fuel")
                        )
                          ? "Yes"
                          : "No"}
                      </div>
                      <div className="mb-2">
                        <span className="font-semibold">Price:</span>{" "}
                        {boat.price}
                      </div>
                      <Button
                        // onClick={handleClick}
                        className="w-full mt-4 bg-blue-600 hover:bg-blue-700"
                      >
                        Book Now
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Slideshow Album */}
      <SlideshowAlbum />

      <Footer />
    </div>
  );
}
