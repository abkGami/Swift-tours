"use client";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Globe,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useState } from "react";
import Script from "next/script";
import { useRef, useEffect } from "react";
import Link from "next/link";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { useParams } from "next/navigation";

// import PaymentsPage from "../Payment";

// Extend the Window interface to include google
declare global {
  interface Window {
    google?: any;
  }
}

export default function ContactPage() {
  const params = useParams();
  const id = decodeURIComponent(params.id as string);

  const [flightNumber, setFlightNumber] = useState("");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "",
    pickup: "",
    dropoff: "",
    startDate: "",
    stopDate: "",
    budget: "",
    message: "",
    // newsletter: false,
  });

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  // Handle input changes
  interface ContactFormState {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    interest: string;
    pickup: string;
    dropoff: string;
    startDate: string;
    stopDate: string;
    budget: string;
    message: string;
    // newsletter: boolean;
  }

  interface HandleChangeEvent
    extends React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    > {}

  const handleChange = (e: HandleChangeEvent) => {
    const { name, value, type } = e.target;
    setForm((prev: ContactFormState) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  // Handle form submit
  interface EmailJSParams {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    interest: string;
    pickup: string;
    dropoff: string;
    startDate: string;
    stopDate: string;
    budget: string;
    message: string;
    flightNumber: string;
    title: string;
    // to_email: string;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.send(
        "service_nk0x5wv", // replace with your EmailJS service ID
        "template_5aymgsp", // replace with your EmailJS template ID
        {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          interest: id,
          pickup: form.pickup,
          dropoff: form.dropoff,
          startDate: form.startDate,
          stopDate: form.stopDate,
          budget: form.budget,
          message: form.message,
          flightNumber: flightNumber,
          title: "For Private transfers Contact screen",
          // to_email: "yahabubakar2504@gmail.com", // recipient
        } as Record<string, unknown>,
        "cSCC009c3HP3O5rHb" // replace with your EmailJS user/public key
      );
      setSent(true);
    } catch (err) {
      alert("Failed to send message. Please try again.");
    }
    setSending(false);
  };

  const pickupRef = useRef<HTMLInputElement>(null);
  const dropoffRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!pickupRef.current) return;

    function initAutocomplete() {
      // @ts-ignore
      const autocomplete = new window.google.maps.places.Autocomplete(
        pickupRef.current,
        {
          types: ["(regions)"], // Allows both cities and countries (and regions)
        }
      );
      autocomplete.addListener("place_changed", () => {
        // @ts-ignore
        const place = autocomplete.getPlace();
        let city = "";
        let country = "";
        if (place.address_components) {
          for (const comp of place.address_components) {
            if (comp.types.includes("locality")) city = comp.long_name;
            if (comp.types.includes("country")) country = comp.long_name;
          }
        }
        // Compose "City, Country" or just "Country"
        let formatted = "";
        if (city && country) {
          formatted = `${city}, ${country}`;
        } else if (country) {
          formatted = country;
        } else {
          formatted = place.formatted_address || place.name || "";
        }
        console.log("Selected pick-up location:", formatted); // <-- log value here

        setForm((prev) => ({
          ...prev,
          pickup: formatted,
        }));
      });
    }

    if (window.google && window.google.maps && window.google.maps.places) {
      initAutocomplete();
    } else {
      const interval = setInterval(() => {
        if (window.google && window.google.maps && window.google.maps.places) {
          clearInterval(interval);
          initAutocomplete();
        }
      }, 300);
      return () => clearInterval(interval);
    }

    // Drop-off Autocomplete
    if (dropoffRef.current) {
      function initDropoffAutocomplete() {
        // @ts-ignore
        const autocomplete = new window.google.maps.places.Autocomplete(
          dropoffRef.current,
          { types: ["(regions)"] }
        );
        autocomplete.addListener("place_changed", () => {
          // @ts-ignore
          const place = autocomplete.getPlace();
          let city = "";
          let country = "";
          if (place.address_components) {
            for (const comp of place.address_components) {
              if (comp.types.includes("locality")) city = comp.long_name;
              if (comp.types.includes("country")) country = comp.long_name;
            }
          }
          let formatted = "";
          if (city && country) {
            formatted = `${city}, ${country}`;
          } else if (country) {
            formatted = country;
          } else {
            formatted = place.formatted_address || place.name || "";
          }
          console.log("Selected drop-off location:", formatted);
          setForm((prev) => ({
            ...prev,
            dropoff: formatted,
          }));
        });
      }
      if (window.google && window.google.maps && window.google.maps.places) {
        initDropoffAutocomplete();
      } else {
        const interval = setInterval(() => {
          if (
            window.google &&
            window.google.maps &&
            window.google.maps.places
          ) {
            clearInterval(interval);
            initDropoffAutocomplete();
          }
        }, 300);
        return () => clearInterval(interval);
      }
    }
  }, [pickupRef]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}libraries=places`}
          strategy="beforeInteractive"
        />
        .
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to start your adventure? Contact our travel experts to plan
              your perfect journey across the world
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" gap-12">
            {/* Contact Form */}
            <motion.div
            // initial={{ opacity: 0, x: 50 }}
            // whileInView={{ opacity: 1, x: 0 }}
            // transition={{ duration: 0.8 }}
            >
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">
                    Send us a Message
                  </CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-8" onSubmit={handleSubmit}>
                    {/* Personal Information */}
                    <div>
                      <h2 className="text-lg font-semibold text-blue-700 mb-4">
                        Personal Information
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            First Name <span className="text-red-500"> *</span>
                          </label>
                          <Input
                            name="firstName"
                            value={form.firstName}
                            onChange={handleChange}
                            placeholder=""
                            required
                            className="focus:ring-2 focus:ring-blue-400"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name <span className="text-red-500"> *</span>
                          </label>
                          <Input
                            name="lastName"
                            value={form.lastName}
                            onChange={handleChange}
                            placeholder=""
                            required
                            className="focus:ring-2 focus:ring-blue-400"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address{" "}
                            <span className="text-red-500"> *</span>
                          </label>
                          <Input
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            type="email"
                            placeholder=""
                            required
                            className="focus:ring-2 focus:ring-blue-400"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number{" "}
                            <span className="text-red-500"> *</span>
                          </label>
                          <Input
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            type="tel"
                            placeholder="+1 (555) 123-4567"
                            className="focus:ring-2 focus:ring-blue-400"
                          />
                        </div>
                      </div>
                    </div>

                    <hr className="my-6 border-blue-100" />

                    {/* Travel Details */}
                    <div>
                      <h2 className="text-lg font-semibold text-blue-700 mb-4">
                        Travel Details
                      </h2>
                      {(id === "Helicopter Transfers" ||
                        id === "Airport Concierge" ||
                        id === "Helicopter%20Transfers" ||
                        id === "Airport%20Concierge") && (
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Flight Number{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <Input
                            name="flightNumber"
                            value={flightNumber}
                            onChange={(e) => setFlightNumber(e.target.value)}
                            placeholder="e.g. BA1234"
                            required
                            className="focus:ring-2 focus:ring-blue-400"
                          />
                        </div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Pick-up Location{" "}
                            <span className="text-red-500"> *</span>
                          </label>
                          <GooglePlacesAutocomplete
                            selectProps={{
                              value: form.pickup
                                ? { label: form.pickup, value: form.pickup }
                                : null,
                              onChange: (option) => {
                                setForm((prev) => ({
                                  ...prev,
                                  pickup: option?.label || "",
                                }));
                              },
                              styles: {
                                control: (base) => ({
                                  ...base,
                                  borderColor: "#3b82f6",
                                  boxShadow: "0 0 0 1px #3b82f6",
                                }),
                              },
                            }}
                            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Drop-off Location{" "}
                            <span className="text-red-500"> *</span>
                          </label>
                          <GooglePlacesAutocomplete
                            selectProps={{
                              value: form.dropoff
                                ? { label: form.dropoff, value: form.dropoff }
                                : null,
                              onChange: (option) => {
                                setForm((prev) => ({
                                  ...prev,
                                  dropoff: option?.label || "",
                                }));
                              },
                              styles: {
                                control: (base) => ({
                                  ...base,
                                  borderColor: "#3b82f6",
                                  boxShadow: "0 0 0 1px #3b82f6",
                                }),
                              },
                            }}
                            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
                          />
                        </div>
                      </div>

                      <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Travel Interest{" "}
                          <span className="text-red-500"> *</span>
                        </label>
                        <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-blue-50">
                          <h1 className="font-medium text-gray-700">{id}</h1>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Start Date <span className="text-red-500"> *</span>
                          </label>
                          <Input
                            name="startDate"
                            value={form.startDate}
                            min={new Date().toISOString().split("T")[0]}
                            onChange={handleChange}
                            type="date"
                            required
                            className="focus:ring-2 focus:ring-blue-400"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Stop Date <span className="text-red-500"> *</span>
                          </label>
                          <Input
                            name="stopDate"
                            value={form.stopDate}
                            min={new Date().toISOString().split("T")[0]}
                            onChange={handleChange}
                            type="date"
                            required
                            className="focus:ring-2 focus:ring-blue-400"
                          />
                        </div>
                      </div>
                    </div>

                    <hr className="my-6 border-blue-100" />

                    {/* Preferences */}
                    <div>
                      <h2 className="text-lg font-semibold text-blue-700 mb-4">
                        Preferences
                      </h2>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Budget Range <span className="text-red-500"> *</span>
                        </label>
                        <select
                          name="budget"
                          value={form.budget}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                        >
                          <option value="">Select budget range</option>
                          <option value="100-500"> €100 - €500 </option>
                          <option value="500-1500"> €500 - €1500 </option>
                          <option value="1500-2500"> €1500 - €2500 </option>
                          <option value="2500-3500"> €2500 - €3500 </option>
                          <option value="3500-5000"> €3500 - €5000 </option>
                        </select>
                      </div>

                      <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Message <span className="text-red-500"> *</span>
                        </label>
                        <Textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell us about your dream vacation, special requirements, or any questions you have..."
                          rows={4}
                          required
                          className="focus:ring-2 focus:ring-blue-400"
                        />
                      </div>

                      <div className="flex items-center space-x-2 mt-4">
                        <input
                          name="newsletter"
                          // checked={checked}
                          onChange={handleChange}
                          type="checkbox"
                          id="newsletter"
                          className="rounded focus:ring-2 focus:ring-blue-400"
                        />
                        <label
                          htmlFor="newsletter"
                          className="text-sm text-gray-600"
                        >
                          Subscribe to our newsletter for travel tips and
                          exclusive offers
                        </label>
                      </div>
                    </div>

                    {/* Success Message */}
                    {sent && (
                      <div className="text-green-600 mt-2 text-center font-medium">
                        Message sent successfully!
                      </div>
                    )}

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        className="w-full bg-blue-600 hover:bg-blue-700 mt-4"
                        size="lg"
                        type="submit"
                        disabled={sending}
                      >
                        <Send className="h-5 w-5 mr-2" />
                        {sending ? "Sending..." : "Send Message"}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
//                       <div className="text-green-600 mt-2">
//                         Message sent successfully!
//                       </div>
//                     )}
//                   </form>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </div>

//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }
