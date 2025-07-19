"use client";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Image from "next/image";
import { boats } from "@/data/boats/page";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import { Fragment, useState } from "react";
import emailjs from "emailjs-com";

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
  const [modalOpen, setModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const { id } = useParams();
  const searchParams = useSearchParams();

  const boat = boats.find((b) => b.id === id);

  // Get exp, duration, city from query params
  const exp = searchParams.get("exp");
  const duration = searchParams.get("duration");
  const city = searchParams.get("city");
  const country = searchParams.get("country");
  const withSkipper = searchParams.get("withSkipper");
  const type = searchParams.get("type");
  const owner = searchParams.get("owner");

  const [selectedBudget, setSelectedBudget] = useState(1000);
  const [numPeople, setNumPeople] = useState(2);
  const [departureDate, setDepartureDate] = useState(
    searchParams.get("departureDate") || ""
  );
  const [returnDate, setReturnDate] = useState(
    searchParams.get("returnDate") || ""
  );
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
            {type?.toLowerCase() !== "rigid inflatable boat (kayak)" &&
              withSkipper === "yes" && (
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
                  {owner} is an experienced boat renter with excellent reviews
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
              Request Quotation
            </Dialog.Title>
            <div className="space-y-4 mb-4">
              <div>
                <strong>Departure Date:</strong>{" "}
                <input
                  type="date"
                  className="border border-gray-300 rounded px-2 py-1 ml-2"
                  value={departureDate}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => setDepartureDate(e.target.value)}
                />
              </div>
              <div>
                <strong>Return Date:</strong>{" "}
                <input
                  type="date"
                  className="border border-gray-300 rounded px-2 py-1 ml-2"
                  value={returnDate}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => setReturnDate(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Budget (€100 - €5000)
              </label>
              <input
                type="range"
                min={100}
                max={5000}
                step={50}
                value={selectedBudget}
                onChange={(e) => setSelectedBudget(Number(e.target.value))}
                className="w-full"
              />
              <div className="text-right text-sm text-gray-600 mt-1">
                Selected: €{selectedBudget}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Number of People
              </label>
              <input
                type="number"
                min={1}
                max={30}
                value={numPeople}
                onChange={(e) => setNumPeople(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              {/* <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                rows={4}
                value={`Hello ${owner}, I'm interested in the ${exp} in ${city}, ${country}, on the ${
                  boat.type
                } from ${searchParams.get(
                  "departureDate"
                )} to ${searchParams.get(
                  "returnDate"
                )}. My budget is €${selectedBudget} and there will be ${numPeople} of us on board. Is it possible to make reservation? Thank You`}
                readOnly
              /> */}
              <div
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
                style={{ minHeight: 120, whiteSpace: "pre-line" }}
                contentEditable={false}
                suppressContentEditableWarning
              >
                {`Hello `}
                <b>{owner}</b>
                {`, I'm interested in the `}
                <b>{exp}</b>
                {` at `}
                <b>{city}</b>
                {`, `}
                <b>{country}</b>
                {`, on the `}
                <b>{boat.type}</b>
                {` from `}
                <b>{departureDate}</b>
                {` to `}
                <b>{returnDate}</b>
                {`. My budget is `}
                <b>{`€${selectedBudget}`}</b>
                {` and there will be `}
                <b>{numPeople}</b>
                {` of us on board. Is it possible to make reservation? `}
                <br />
                {` Thank You. `}
              </div>
            </div>
            <Button
              type="button"
              className="w-full bg-blue-600 hover:bg-blue-700 mt-2"
              onClick={() => {
                setModalOpen(false);
                setContactModalOpen(true);
              }}
            >
              Submit Request
            </Button>
          </div>
        </div>
      </Dialog>

      {/* Contact Info Modal */}
      <Dialog
        open={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        className="fixed z-50 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="fixed inset-0 bg-black bg-opacity-40" />
          <div className="relative bg-white rounded-lg shadow-xl max-w-lg w-full mx-auto p-8 z-50">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
              onClick={() => setContactModalOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <Dialog.Title className="text-2xl font-bold mb-4 text-gray-900">
              Enter Your Contact Details
            </Dialog.Title>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();

                const templateParams = {
                  // owner: owner,
                  // exp: exp,
                  // city: city,
                  // country: country,
                  // boat_type: boat.type,
                  // departure_date: departureDate,
                  // return_date: returnDate,
                  // budget: `€${selectedBudget}`,
                  // num_people: numPeople,
                  first_name: contactForm.firstName,
                  last_name: contactForm.lastName,
                  title: "Swift Travels Boat Trip",
                  // phone: contactForm.phone,
                  // email: contactForm.email,
                  message: `Hello ${owner}, 
                  I'm interested in the ${exp} in ${city}, ${country} on the ${boat.type}
                  from ${departureDate} to ${returnDate}. My budget is €${selectedBudget} and there will be ${numPeople} of us on board. 
                  Is it possible to make reservation? Thank You. My name is ${contactForm.firstName} ${contactForm.lastName}, 
                  my phone number is ${contactForm.phone}, and my email is ${contactForm.email}`,
                };

                emailjs
                  .send(
                    "service_nk0x5wv",
                    "template_ihrbiim",
                    templateParams,
                    "cSCC009c3HP3O5rHb"
                  )
                  .then((response) => {
                    console.log(
                      "Email sent successfully!",
                      response.status,
                      response.text
                    );
                    setContactModalOpen(false);
                    alert("Thank you! Your request has been submitted.");
                  })
                  .catch((error) => {
                    console.error("Failed to send email:", error);
                    alert(
                      "There was an error sending your request. Please try again."
                    );
                  });
              }}
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  value={contactForm.firstName}
                  onChange={(e) =>
                    setContactForm({
                      ...contactForm,
                      firstName: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  value={contactForm.lastName}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, lastName: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  value={contactForm.phone}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, phone: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  value={contactForm.email}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, email: e.target.value })
                  }
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 mt-2"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </Dialog>
      <Footer />
      <Footer />
    </div>
  );
}
