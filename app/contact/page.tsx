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

export default function ContactPage() {
  const conversionRate = 0.88; // Example: 1 USD = 0.92 EUR
  const currencySymbol = "€";

  const budgetOptions = [
    { value: "1000-2500", min: 100, max: 250 },
    { value: "2500-5000", min: 250, max: 400 },
    { value: "5000-10000", min: 400, max: 500 },
    { value: "10000+", min: 500, max: null },
  ];

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "",
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
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
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
                  {/* <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <Input placeholder="" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <Input placeholder="" required />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input type="email" placeholder="" required />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input type="tel" placeholder="+1 (555) 123-4567" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Travel Interest *
                      </label>
                      <select
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">Select your interest</option>
                        <option value="europe">Europe Tours</option>
                        <option value="asia">Asia Tours</option>
                        <option value="boats">Chartered Boats</option>
                        <option value="transfers">Luxury Transfers</option>
                        <option value="custom">Custom Package</option>
                        <option value="group">Group Travel</option>
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
                          <Input type="date" required />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Stop Date
                          </label>
                          <Input type="date" required />
                        </div>
                      </div>
                    </div>

                     <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">Select budget range</option>
                        <option value="1000-2500">$100 - $250</option>
                        <option value="2500-5000">$250 - $400</option>
                        <option value="5000-10000">$400 - $500</option>
                        <option value="10000+">$500+</option>
                      </select>
                    </div> 

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">Select budget range</option>
                        {budgetOptions.map((opt) => {
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
                        })}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        placeholder="Tell us about your dream vacation, special requirements, or any questions you have..."
                        rows={4}
                        required
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
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
                      >
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </Button>
                    </motion.div>
                  </form> */}

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
                        <option value="boats">Boats Trip</option>
                        <option value="transfers">Luxury Transfers</option>
                        <option value="custom">Custom Package</option>
                        {/* <option value="group">Group Travel</option> */}
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
                        {budgetOptions.map((opt) => {
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
                        })}
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
                      <div>• Indonesia</div>
                      <div>• Maldives</div>
                      <div>• Bhutan</div>
                      <div>• South Korea</div>
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
