"use client";
import { useParams, useSearchParams } from "next/navigation";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Image from "next/image";
import { boats } from "@/data/boats/page";

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
          <h1 className="text-3xl font-bold mb-4">{boat.name}</h1>
          <Image
            src={boat.image}
            alt={boat.name}
            width={800}
            height={400}
            className="rounded-lg mb-6"
          />
          <div className="mb-2">
            <strong>Capacity:</strong> {boat.capacity} people
          </div>
          <div className="mb-2">
            <strong>Features:</strong> {boat.features.join(", ")}
          </div>
          <div className="mb-2">
            <strong>Price:</strong> {boat.price}
          </div>
          <div className="mt-6 p-4 bg-blue-50 rounded">
            <div className="font-semibold text-blue-700">{exp}</div>
            <div className="text-sm text-gray-600">
              Duration: {duration} | City: {city}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
