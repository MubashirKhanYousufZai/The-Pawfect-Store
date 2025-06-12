"use client";

import React from "react";
import Link from "next/link";
import { FaPaw } from "react-icons/fa";
import { TbDogBowl } from "react-icons/tb";
import { GiDogHouse } from "react-icons/gi";

const items = [
  { icon: <FaPaw size={40} />, title: "Pets", link: "/components/pets" },
  { icon: <TbDogBowl size={40} />, title: "Food", link: "/components/food" },
  { icon: <GiDogHouse size={40} />, title: "Accessories", link: "/components/accessories" },
];

const Gives = () => {
  return (
    <section className="relative bg-teal-100 py-16 px-6 sm:px-12 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-300 opacity-20 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-teal-400 opacity-20 rounded-full blur-2xl z-0" />

      <div className="relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-gray-900 text-4xl sm:text-5xl font-extrabold leading-tight">
            What <span className="text-teal-500">The Pawfect Store</span> provides!
          </h1>
          <p className="text-gray-700 text-lg sm:text-xl mt-6 leading-relaxed">
            At <span className="font-semibold text-teal-500">The Pawfect Store</span>, we provide top-quality pet essentials—premium food, cozy beds, durable toys, and grooming products. Everything your pet needs, in one place!
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {items.map((item, index) => (
            <div key={index} className="p-4">
              <div className="border border-gray-200 px-6 py-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 bg-white flex flex-col items-center text-center">
                {/* Icon with Link */}
                <Link
                  href={item.link}
                  aria-label={`Go to ${item.title}`}
                  className="flex justify-center items-center bg-teal-100 p-6 rounded-full text-teal-500 w-24 h-24 hover:bg-teal-500 hover:text-white transition duration-300 transform hover:scale-110 cursor-pointer"
                >
                  {item.icon}
                </Link>

                {/* Title */}
                <p className="text-2xl font-semibold text-gray-900 mt-6">{item.title}</p>

                {/* Shop Now Button */}
                <Link href={item.link}>
                  <button className="mt-5 bg-teal-500 text-white px-6 py-3 text-lg font-semibold rounded-xl shadow-md hover:bg-teal-600 transition duration-300">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="text-center mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-teal-600">
            Because every pet deserves The Pawfect Store! 🛍️✨
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Gives;
