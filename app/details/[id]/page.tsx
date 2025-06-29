"use client";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Image from "next/image";
import { boats } from "@/data/boats/page";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import {
  CalendarX2Icon,
  Clock,
  Languages,
  Star,
  StarIcon,
  Trophy,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function BoatDetailPage() {
  const { id } = useParams();
  const searchParams = useSearchParams();

  const [modalOpen, setModalOpen] = useState(false);

  const boat = boats.find((b) => b.id === id);

  // Get exp, duration, city from query params
  const exp = searchParams.get("exp");
  const duration = searchParams.get("duration");
  const city = searchParams.get("city");
  const country = searchParams.get("country");
  const withSkipper = searchParams.get("withSkipper");

  const [current, setCurrent] = useState(0);

  if (!boat) {
    return (
      <div>
        <Navigation />
        <div className="text-center py-20 text-2xl">Boat not found.</div>
        <Footer />
      </div>
    );
  }

  const router = useRouter();

  const handleClick = () => {
    // router.push("/contact");
    setModalOpen(true);
  };

  // Use images array from boat data
  const images = boat.images;

  const prevImage = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-50">
      <Navigation />
      <div className="max-w-3xl mx-auto py-16 px-4">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="relative mb-6">
            {images.length > 0 && (
              <Image
                src={images[current]}
                alt={boat.name}
                width={800}
                height={400}
                className="rounded-lg object-cover w-full h-[400px] transition-transform duration-300 ease-in-out"
                style={{ objectFit: "contain" }}
                priority
              />
            )}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-blue-100"
                  aria-label="Previous image"
                >
                  &#8592;
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-blue-100"
                  aria-label="Next image"
                >
                  &#8594;
                </button>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, idx) => (
                    <span
                      key={idx}
                      className={`inline-block w-2 h-2 rounded-full ${
                        idx === current ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
          <h1 className="text-3xl font-bold mb-1">{exp}</h1>
          <div className="flex items-center space-x-2 mb-4">
            <div className="mb-2 font-medium text-gray-600">
              {city}, {country}
            </div>
          </div>

          <div className="border border-gray-300 rounded-xl flex justify-around items-center p-4 mb-4">
            {/* reviews  */}
            <div className="flex flex-col items-center">
              <div className="flex items-center text-center space-x-1 mb-1">
                <Star className="h-4 w-4 text-yellow-400 " />
                <span className="text-sm font-medium">{boat.rating}</span>
              </div>
              <div className="text-sm text-gray-600">
                {Math.floor(Math.random() * (31 - 8 + 1)) + 8} REVIEWS
              </div>
            </div>
            {/* people  */}
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-1 mb-1">
                <Users className="h-4 w-4 mr-1" />
                <span className="text-sm  font-medium">{boat.capacity}</span>
              </div>
              <div className="text-sm text-gray-600">PEOPLE</div>
            </div>
            {/* duration  */}
            {/* <div className="flex flex-col items-center">
              <div className="flex items-center space-x-1 mb-1">
                <Clock className="h-4 w-4 mr-1" />
                <span className="text-sm font-medium">{duration}</span>
              </div>
              <div className="text-sm text-gray-600">DURATION</div>
            </div> */}
          </div>

          <div>
            {withSkipper == "yes" && (
              <div className="flex items-center space-x-2 mb-4">
                <Languages />
                <div className="flex flex-col">
                  <strong>With Skipper</strong>
                  <span className="text-md text-gray-600">
                    You will be accompanied by a skipper speaking French,
                    English, Spanish
                  </span>
                </div>
              </div>
            )}

            <div className="flex items-center space-x-2 mb-4">
              <Trophy className="" />
              <div className="flex flex-col">
                <strong>Super Owner</strong>
                <span className="text-md text-gray-600">
                  Daniel is an experienced boat renter with excellent reviews
                  and is committed to providing quality services
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-2 mb-8">
              <CalendarX2Icon />
              <div className="flex flex-col">
                <strong>Free cancellation</strong>
                <span className="text-md text-gray-600">
                  Full refund until the day before departure (excluding service
                  fees and commission)
                </span>
              </div>
            </div>
          </div>

          <div className="mb-2">
            <strong>What's included?</strong>
            <ul className="list-disc ml-6 mt-1">
              {boat.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
          {/* <div className="mb-2"> */}
          {/* <strong>Price:</strong> {boat.price}
          </div>
          <div className="mt-6 p-4 bg-blue-50 rounded">
            <div className="font-semibold text-blue-700">{exp}</div>
            <div className="text-sm text-gray-600">
              Duration: {duration} | City: {city}
            </div>
          </div> */}
          <Button
            size={"lg"}
            type="button"
            className="w-full mt-6 font-semibold text-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            onClick={handleClick}
          >
            Request a quotation
          </Button>
        </div>
      </div>

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
              Request Quotation for {boat.name}
            </Dialog.Title>
            <div className="space-y-4">
              <div>
                <strong>Boat:</strong> {boat.name}
              </div>
              <div>
                <strong>Experience:</strong> {exp}
              </div>
              <div>
                <strong>City:</strong> {city}
              </div>
              <div>
                <strong>Country:</strong> {country}
              </div>
              <div>
                <strong>With Skipper:</strong>{" "}
                {withSkipper === "yes" ? "Yes" : "No"}
              </div>
              {/* Add more fields as needed */}
            </div>
            <Button
              type="button"
              className="w-full bg-blue-600 hover:bg-blue-700 mt-6"
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
