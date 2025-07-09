"use client";

import { motion } from "framer-motion";
import {
  Plane,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.png" alt="" className="h-16 w-16" />
              <span className="text-base font-bold">Swift Tours & Travels</span>
            </div>
            <p className="text-gray-400 mb-6">
              Creating unforgettable travel experiences across several
              continents with luxury, comfort, and personalized service.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              {/* <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
              >
                <Twitter className="h-5 w-5" />
              </motion.a> */}
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              {/* <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
              >
                <Youtube className="h-5 w-5" />
              </motion.a> */}
            </div>
          </motion.div>

          {/* Quick Links */}
          {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Chartered Boats", "Transfers", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div> */}

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                { label: "Tour Destinations", href: "/destinations" },
                { label: "Boat Trip", href: "/boat-trip" },
                { label: "Chartered Boats", href: "/boats" },
                { label: "Transfers", href: "/transfers" },
                { label: "Contact Us", href: "/contact" },
                { label: "Customer Reviews", href: "/reviews" },
              ].map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <div className="flex flex-col">
                  <span className="text-gray-400">+44 7446 989954</span>
                  <span className="text-gray-400">+44 7446 161857</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 w-full">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400 text-sm">
                  info.swifttoursandtravels@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-15 text-blue-400" />
                <span className="text-gray-400 text-sm">
                  info.swifttoursandrentals@gmail.com
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Swift Tours and Travels. All rights reserved.
            </p>
            {/* <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </div> */}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
