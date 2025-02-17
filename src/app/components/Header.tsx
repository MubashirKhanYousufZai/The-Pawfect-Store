"use client"; // Ensure this is a Client Component

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaPaw } from "react-icons/fa";

const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/components/about" },
    { name: "Pets", path: "/components/pets" },
    { name: "Accessories", path: "/components/accessories" },
    { name: "Medication", path: "/components/medication" },
    { name: "Contact", path: "/components/contact" },
  ];

  return (
    <header className="text-white bg-teal-500 body-font shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* Logo Section */}
        <Link href="/" className="flex title-font font-bold items-center text-white mb-4 md:mb-0 text-2xl">
          <FaPaw className="text-4xl text-white" />
          <span className="ml-3">The Pawfect Store</span>
        </Link>

        {/* Navigation Menu */}
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-lg justify-center font-medium">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`mr-6 hover:text-gray-200 transition duration-300 ${
                pathname === item.path ? "underline font-bold" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Call-to-Action Button */}
        <Link href="/components/about">
          <button
            className="inline-flex items-center bg-white text-teal-500 border-0 py-2 px-5 text-lg font-semibold rounded-lg 
              focus:outline-none hover:bg-gray-100 transition duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            aria-label="Shop Now"
          >
            🛍️ Shop Now
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
