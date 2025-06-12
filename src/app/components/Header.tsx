"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaPaw,
  FaHome,
  FaInfoCircle,
  FaDog,
  FaUtensils,
  FaPhoneAlt,
} from "react-icons/fa";
import { GiDogHouse } from "react-icons/gi";
import { motion } from "framer-motion";

const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/components/about", icon: <FaInfoCircle /> },
    { name: "Pets", path: "/components/pets", icon: <FaDog /> },
    { name: "Food", path: "/components/food", icon: <FaUtensils /> },
    { name: "Accessories", path: "/components/accessories", icon: <GiDogHouse /> },
    { name: "Contact", path: "/components/contact", icon: <FaPhoneAlt /> },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-teal-500 shadow-md sticky top-0 z-50"
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center hover:text-white">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Link
            href="/"
            className="flex items-center text-2xl font-bold text-teal-900 hover:scale-110 transition-transform"
          >
            <FaPaw className="text-4xl text-teal-800" />
            <span className="ml-2">The Pawfect Store</span>
          </Link>
        </motion.div>

        {/* Navigation */}
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-lg justify-center font-medium">
          {navItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Link
                href={item.path}
                className={`mr-6 flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  pathname === item.path
                    ? "bg-teal-600 text-white font-bold shadow"
                    : "text-teal-800 hover:bg-white/40 hover:text-teal-900"
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Link href="/components/about">
            <button
              className="inline-flex items-center bg-white text-teal-600 font-semibold py-2 px-5 rounded-lg shadow hover:bg-gray-200 hover:shadow-md transition-all transform hover:scale-105"
              aria-label="Shop Now"
            >
              🛍️ Shop Now
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
