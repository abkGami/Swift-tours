"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section id="contact" className="section py-20 bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 "
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your adventure? Contact our travel experts to plan
            your perfect journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          Contact Form
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
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input type="tel" placeholder="+1 (555) 123-4567" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Travel Interest
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Select your interest</option>
                      <option>Europe Tours</option>
                      <option>Asia Tours</option>
                      <option>Chartered Boats</option>
                      <option>Luxury Transfers</option>
                      <option>Custom Package</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell us about your dream vacation..."
                      rows={4}
                    />
                  </div>

                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    size="lg"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
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
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@swifttours.com</p>
                    <p className="text-gray-600">bookings@swifttours.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">123 Travel Street</p>
                    <p className="text-gray-600">Adventure City, AC 12345</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
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
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <Card className="bg-red-50 border-red-200">
              <CardHeader>
                <CardTitle className="text-red-800">
                  24/7 Emergency Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-700 mb-2">
                  For urgent travel assistance:
                </p>
                <p className="font-semibold text-red-800">+1 (555) 911-HELP</p>
                <p className="text-sm text-red-600 mt-2">
                  Available for travelers currently on Swift Tours packages
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16"
        >
          <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <MapPin className="h-12 w-12 mx-auto mb-4" />
              <p className="text-lg font-medium">Interactive Map</p>
              <p className="text-sm">Find our office location</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
