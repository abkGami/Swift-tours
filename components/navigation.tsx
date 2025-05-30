"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Menu, X, Plane, Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState("");
  const [activeSubDropdown, setActiveSubDropdown] = useState("");

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navItems = [
    {
      name: "Destinations",
      href: "/destinations",
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Europe",
          href: "/destinations/europe",
          hasSubDropdown: true,
          subItems: [
            { name: "Paris, France", href: "/destinations/europe/paris" },
            { name: "Rome, Italy", href: "/destinations/europe/rome" },
            { name: "Swiss Alps", href: "/destinations/europe/swiss-alps" },
            { name: "Monaco", href: "/destinations/europe/monaco" },
            {
              name: "Barcelona, Spain",
              href: "/destinations/europe/barcelona",
            },
            { name: "Amsterdam", href: "/destinations/europe/amsterdam" },
          ],
        },
        {
          name: "Asia",
          href: "/destinations/asia",
          hasSubDropdown: true,
          subItems: [
            { name: "Tokyo, Japan", href: "/destinations/asia/tokyo" },
            { name: "Mongolia", href: "/destinations/asia/tokyo" },
            { name: "Bali, Indonesia", href: "/destinations/asia/bali" },
            { name: "Maldives", href: "/destinations/asia/maldives" },
            { name: "Bhutan", href: "/destinations/asia/bhutan" },
            { name: "Seoul, South Korea", href: "/destinations/asia/seoul" },
            {
              name: "Chiang Mai, Thailand",
              href: "/destinations/asia/chiang-mai",
            },
          ],
        },
      ],
    },
    { name: "Chartered Boats", href: "/boats" },
    { name: "Transfers", href: "/transfers" },
    // { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const languages = [
    { code: "EN", name: "English", flag: "🇺🇸" },
    { code: "ES", name: "Español", flag: "🇪🇸" },
    { code: "ZH", name: "中文", flag: "🇨🇳" },
  ];

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const mobileItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-200/50"
          : "bg-white/90 backdrop-blur-md shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <motion.div
              // animate={{
              //   rotate: [0, 360],
              //   scale: [1, 1.1, 1],
              // }}
              // transition={{
              //   rotate: {
              //     duration: 20,
              //     repeat: Number.POSITIVE_INFINITY,
              //     ease: "linear",
              //   },
              //   scale: {
              //     duration: 2,
              //     repeat: Number.POSITIVE_INFINITY,
              //     ease: "easeInOut",
              //   },
              // }}
              >
                <Plane className="h-8 w-8 text-blue-600" />
              </motion.div>
              <span className="text-xl font-bold gradient-text">
                Swift Tours
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <div
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === item.name ? "" : item.name
                    )
                  }
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium cursor-pointer select-none"
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                </div>
                {!item.hasDropdown && (
                  <Link
                    href={item.href}
                    className="absolute inset-0"
                    tabIndex={-1}
                  />
                )}

                {/* Dropdown Menu */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200  z-20"
                      >
                        {item.dropdownItems?.map((dropdownItem) => (
                          <div key={dropdownItem.name} className="relative">
                            <div
                              onClick={(e) => {
                                e.stopPropagation();
                                if (dropdownItem.hasSubDropdown) {
                                  setActiveSubDropdown(
                                    activeSubDropdown === dropdownItem.name
                                      ? ""
                                      : dropdownItem.name
                                  );
                                } else {
                                  setActiveDropdown(""); // close dropdown on click
                                }
                              }}
                              // onClick={() => {
                              //   setActiveSubDropdown(
                              //     activeSubDropdown === dropdownItem.name ? "" : dropdownItem.name
                              //   );
                              //   console.log("clicked");
                              // }}
                              className="flex items-center justify-between px-4 py-3 hover:bg-blue-50 cursor-pointer"
                            >
                              <div
                                className="flex-1"
                              >
                                <span
                                  className="text-gray-700 hover:text-blue-600"
                                >
                                  {dropdownItem.name} continent
                                </span>
                              </div>
                              {dropdownItem.hasSubDropdown && (
                                <ChevronDown className="h-3 w-3 rotate-[-90deg] ml-2" />
                              )}
                            </div>

                            {/* Sub-dropdown */}
                            {dropdownItem.hasSubDropdown &&
                              activeSubDropdown === dropdownItem.name && (
                                <div className="absolute left-full top-0 w-48 mt-0 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-30">
                                  {dropdownItem.subItems?.map((subItem) => (
                                    <Link
                                      key={subItem.name}
                                      href={subItem.href}
                                    >
                                      <motion.div  initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }} className="px-4 py-2 hover:bg-blue-50 cursor-pointer">
                                        <span className="text-sm text-gray-700 hover:text-blue-600">
                                          {subItem.name}
                                        </span>
                                      </motion.div>
                                    </Link>
                                  ))}
                                </div>
                              )}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            {/* <div className="relative group">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center space-x-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50"
              >
                <Globe className="h-4 w-4" />
                <span>{languages.find((l) => l.code === language)?.flag}</span>
                <span>{language}</span>
                <ChevronDown className="h-3 w-3" />
              </Button>

              <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className="flex items-center space-x-3 px-4 py-2 hover:bg-blue-50 w-full text-left"
                  >
                    <span>{lang.flag}</span>
                    <span className="text-sm">{lang.name}</span>
                  </button>
                ))}
              </div>
            </div> */}

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200/50"
    >
      <div className="px-2 pt-2 pb-3 space-y-1 ">
        {navItems.map((item) => (
          <div key={item.name} className="relative">
            <motion.div
              whileHover={{ x: 10, backgroundColor: "#eff6ff" }}
              onClick={() => {
                if (item.hasDropdown) {
                  setActiveDropdown(
                    activeDropdown === item.name ? "" : item.name
                  );
                } else {
                  setIsOpen(false);
                }
              }}
              className="flex px-3 py-2 rounded-md  flex-row items-center"
            >
              <span className=" text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">

              {item.name}
              </span>
              {item.hasDropdown && <ChevronDown className="h-3 w-3 ml-2" />}
            </motion.div>

            {!item.hasDropdown && (
                  <Link
                    href={item.href}
                    className="absolute inset-0"
                    tabIndex={-1}
                  />
                )}
            {item.hasDropdown && activeDropdown === item.name && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="mt-2 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden"
              >
                {item.dropdownItems?.map((dropdownItem) => (
                  <div key={dropdownItem.name} className="relative">
                    <motion.div
                      onClick={() => {
                        setActiveSubDropdown(
                          activeSubDropdown === dropdownItem.name ? "" : dropdownItem.name
                        );
                      }}
                      className="px-4 py-2 hover:bg-blue-50 cursor-pointer flex flex-row items-center"
                    >
                      <span className="text-sm text-gray-700 hover:text-blue-600">
                        {dropdownItem.name}
                      </span>
                      {dropdownItem.hasSubDropdown && (
                        <ChevronDown className="h-3 w-3  ml-1" />
                      )}
                    </motion.div>
                    {dropdownItem.hasSubDropdown && activeSubDropdown === dropdownItem.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="mt-2 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden"
                      >
                        {dropdownItem.subItems?.map((subItem) => (
                          <Link key={subItem.name} href={subItem.href}>
                            <motion.div className="px-4 py-2 hover:bg-blue-50 cursor-pointer">
                              <span className="text-sm text-gray-700 hover:text-blue-600">
                                {subItem.name}
                              </span>
                            </motion.div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  )}
</AnimatePresence>
      </div>
    </motion.nav>
  );
}
