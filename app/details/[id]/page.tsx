"use client";
import { useParams, useSearchParams } from "next/navigation";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Image from "next/image";
import { boats } from "@/data/boats/page";
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

export default function BoatDetailPage() {
  const { id } = useParams();
  const searchParams = useSearchParams();

  const boat = boats.find((b) => b.id === id);

  // Get exp, duration, city from query params
  const exp = searchParams.get("exp");
  const duration = searchParams.get("duration");
  const city = searchParams.get("city");

  if (!boat) {
    return (
      <div>
        <Navigation />
        <div className="text-center py-20 text-2xl">Boat not found.</div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-50">
      <Navigation />
      <div className="max-w-3xl mx-auto py-16 px-4">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <Image
            src={boat.image}
            alt={boat.name}
            width={800}
            height={400}
            className="rounded-lg mb-6"
          />
          <h1 className="text-3xl font-bold mb-1">{exp}</h1>
          <div className="mb-2 font-medium text-gray-600">{city}</div>

          <div className="border border-gray-300 rounded-xl flex justify-around items-center p-4 mb-4">
            {/* reviews  */}
            <div className="flex flex-col items-center">
              <div className="flex items-center text-center space-x-1 mb-1">
                <Star className="h-4 w-4 text-yellow-400 " />
                <span className="text-sm font-medium">{boat.rating}</span>
              </div>
              <div className="text-sm text-gray-600">5 REVIEWS</div>
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
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-1 mb-1">
                <Clock className="h-4 w-4 mr-1" />
                <span className="text-sm font-medium">{duration}</span>
              </div>
              <div className="text-sm text-gray-600">DURATION</div>
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Languages />
              <div className="flex flex-col">
                <strong>With Skipper</strong>
                <span className="text-md text-gray-600">
                  You will be accompanied by a skipper speaking French, English,
                  Spanish
                </span>
              </div>
            </div>
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
          >
            Request a quotation
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
