"use client"; // Ensure this is a Client Component

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaPaw, FaHome, FaInfoCircle, FaDog, FaUtensils, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/components/about", icon: <FaInfoCircle /> },
    { name: "Pets", path: "/components/pets", icon: <FaDog /> },
    { name: "Food", path: "/components/food", icon: <FaUtensils /> },
    { name: "Contact", path: "/components/contact", icon: <FaPhoneAlt /> },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-white bg-teal-500 body-font shadow-md"
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* Logo Section with animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Link
            href="/"
            className="flex title-font font-bold items-center text-white mb-4 md:mb-0 text-2xl transform transition duration-300 ease-in-out hover:scale-110"
          >
            <FaPaw className="text-4xl text-white" />
            <span className="ml-3">The Pawfect Store</span>
          </Link>
        </motion.div>

        {/* Navigation Menu with hover animations */}
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
                className={`mr-8 flex items-center space-x-2 hover:text-teal-200 transition-all duration-300 transform hover:scale-105 hover:bg-teal-600 px-4 py-2 rounded-lg ${
                  pathname === item.path
                    ? "bg-teal-700 text-white font-bold"
                    : "text-white"
                }`}
                aria-current={pathname === item.path ? "page" : undefined}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Call-to-Action Button with hover animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Link href="/components/about">
            <button
              className="inline-flex items-center bg-white text-teal-500 border-0 py-2 px-5 text-lg font-semibold rounded-lg focus:outline-none hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
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
