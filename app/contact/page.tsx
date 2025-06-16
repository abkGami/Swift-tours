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
// import PaymentsPage from "../Payment";

// Extend the Window interface to include google
declare global {
  interface Window {
    google?: any;
  }
}

export default function ContactPage() {
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
    newsletter: false,
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
    newsletter: boolean;
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
    newsletter: string;
    to_email: string;
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
          interest: form.interest,
          pickup: form.pickup,
          dropoff: form.dropoff,
          startDate: form.startDate,
          stopDate: form.stopDate,
          budget: form.budget,
          message: form.message,
          newsletter: form.newsletter ? "Yes" : "No",
          to_email: "yahabubakar2504@gmail.com", // recipient
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
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
          strategy="beforeInteractive"
        />
        ;
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
              your perfect journey across Europe and Asia
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
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
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <Input
                          name="firstName"
                          value={form.firstName}
                          onChange={handleChange}
                          placeholder=""
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <Input
                          name="lastName"
                          value={form.lastName}
                          onChange={handleChange}
                          placeholder=""
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        type="email"
                        placeholder=""
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pick-up Location *
                      </label>
                      <div>
                        <Input
                          ref={pickupRef}
                          name="pickup"
                          value={form.pickup}
                          onChange={handleChange}
                          placeholder="Enter pick-up location"
                          required
                          autoComplete="off"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Drop-off Location *
                      </label>
                      <div>
                        <Input
                          ref={dropoffRef}
                          name="dropoff"
                          value={form.dropoff}
                          onChange={handleChange}
                          placeholder="Enter drop-off location"
                          required
                          autoComplete="off"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Travel Interest *
                      </label>
                      <select
                        name="interest"
                        value={form.interest}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">Select your interest</option>
                        <option value="boats">Chartered Boats</option>
                        <option value="Tours">Tours</option>
                        <option value="boats">Boats Trip</option>
                        <option value="transfers">Luxury Transfers</option>
                        <option value="custom">Custom Package</option>
                        <option value="group">Private Driver</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Travel Date
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Start Date
                          </label>
                          <Input
                            name="startDate"
                            value={form.startDate}
                            onChange={handleChange}
                            type="date"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Stop Date
                          </label>
                          <Input
                            name="stopDate"
                            value={form.stopDate}
                            onChange={handleChange}
                            type="date"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select budget range</option>
                        {/* {budgetOptions.map((opt) => {
                          const minConverted = Math.round(
                            opt.min * conversionRate
                          );
                          const maxConverted = opt.max
                            ? Math.round(opt.max * conversionRate)
                            : null;
                          const label = maxConverted
                            ? `$${opt.min} - $${opt.max}  (${currencySymbol}${minConverted} - ${currencySymbol}${maxConverted}) `
                            : ` $${opt.min}+  (${currencySymbol}${minConverted}+) `;
                          return (
                            <option key={opt.value} value={opt.value}>
                              {label}
                            </option>
                          );
                        })} */}
                        <option value="100-500"> €100 - €500 </option>
                        <option value="500-1500"> €500 - €1500 </option>
                        <option value="1500-2500"> €1500 - €2500 </option>
                        <option value="500-1500"> €2500 - €3500 </option>
                        <option value="500-1500"> €3500 - €5000 </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your dream vacation, special requirements, or any questions you have..."
                        rows={4}
                        required
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        name="newsletter"
                        checked={form.newsletter}
                        onChange={handleChange}
                        type="checkbox"
                        id="newsletter"
                        className="rounded"
                      />
                      <label
                        htmlFor="newsletter"
                        className="text-sm text-gray-600"
                      >
                        Subscribe to our newsletter for travel tips and
                        exclusive offers
                      </label>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        className="w-full bg-blue-600 hover:bg-blue-700"
                        size="lg"
                        type="submit"
                        disabled={sending}
                      >
                        <Send className="h-5 w-5 mr-2" />
                        {sending ? "Sending..." : "Send Message"}
                      </Button>
                    </motion.div>

                    {sent && (
                      <div className="text-green-600 mt-2">
                        Message sent successfully!
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* <PaymentsPage /> */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md"
                  >
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-gray-600">+1 (555) 987-6543</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Available 9 AM - 6 PM EST
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md"
                  >
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">info@swifttours.com</p>
                      <p className="text-gray-600">bookings@swifttours.com</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Response within 24 hours
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md"
                  >
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Address</h4>
                      <p className="text-gray-600">123 Travel Street</p>
                      <p className="text-gray-600">Adventure City, AC 12345</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Visit by appointment
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md"
                  >
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Business Hours
                      </h4>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM
                      </p>
                      <p className="text-gray-600">
                        Saturday: 10:00 AM - 4:00 PM
                      </p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Emergency Contact */}
              <motion.div whileHover={{ scale: 1.02 }}>
                <Card className="bg-red-50 border-red-200">
                  <CardHeader>
                    <CardTitle className="text-red-800 flex items-center">
                      <MessageCircle className="h-5 w-5 mr-2" />
                      24/7 Emergency Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-red-700 mb-2">
                      For urgent travel assistance:
                    </p>
                    <p className="font-semibold text-red-800 text-lg">
                      +1 (555) 911-HELP
                    </p>
                    <p className="text-sm text-red-600 mt-2">
                      Available for travelers currently on Swift Tours packages
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Additional Services */}
              <motion.div whileHover={{ scale: 1.02 }}>
                <Card className="bg-green-50 border-green-200">
                  <CardHeader>
                    <CardTitle className="text-green-800 flex items-center">
                      <Globe className="h-5 w-5 mr-2" />
                      Global Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-green-700 mb-2">
                      We have local representatives in:
                    </p>
                    <div className="grid grid-cols-4 gap-2 text-sm text-green-600">
                      <div>• France</div>
                      <div>• Italy</div>
                      <div>• Portugal</div>
                      <div>• London</div>
                      <div>• Greece</div>
                      <div>• Spain</div>
                      <div>• Malta</div>
                      <div>• Sweden</div>
                      <div>• Croatia</div>
                      <div>• Austria</div>
                      <div>• Mongolia</div>
                      <div>• Japan</div>
                      <div>• Maldives</div>
                      <div>• Bhutan</div>
                      <div>• Morocco</div>
                      <div>• Egypt</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>

          {/* Map and Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Map Placeholder */}
              {/* <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin className="h-12 w-12 mx-auto mb-4" />
                  <p className="text-lg font-medium">Interactive Map</p>
                  <p className="text-sm">Find our office location</p>
                </div>
              </div> */}

              {/* FAQ Section */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        How far in advance should I book?
                      </h4>
                      <p className="text-gray-600 text-sm">
                        We recommend booking 2-3 months in advance for the best
                        availability and rates.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Do you offer travel insurance?
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Yes, we partner with leading insurance providers to
                        offer comprehensive travel protection.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Can you arrange custom itineraries?
                      </h4>
                      <p className="text-gray-600 text-sm">
                        We specialize in creating personalized travel
                        experiences tailored to your preferences.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
