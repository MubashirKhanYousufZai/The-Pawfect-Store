"use client";

import Link from "next/link";
import React from "react";
import {
  GiSittingDog,
  GiClawSlashes,
  GiComb,
  GiDogHouse,
  GiBottleVapors,
  GiBoneKnife,
} from "react-icons/gi";
import { MdToys, MdPets } from "react-icons/md";
import { FaBath, FaDog } from "react-icons/fa";

const accessories = [
  {
    name: "Leash",
    icon: <FaDog />, 
    color: "text-blue-600",
    glow: "shadow-blue-300",
    emoji: "🔗",
    link: "/components/accessories/leash",
  },
  {
    name: "Collar",
    icon: <GiSittingDog />, 
    color: "text-teal-600",
    glow: "shadow-teal-300",
    emoji: "🦴",
    link: "/components/accessories/collar",
  },
  {
    name: "Toys",
    icon: <MdToys />, 
    color: "text-yellow-600",
    glow: "shadow-yellow-300",
    emoji: "🧸",
    link: "/components/accessories/toys",
  },
  {
    name: "Scratchers",
    icon: <GiClawSlashes />, 
    color: "text-orange-600",
    glow: "shadow-orange-300",
    emoji: "😼",
    link: "/components/accessories/scratchers",
  },
  {
    name: "Comb",
    icon: <GiComb />, 
    color: "text-pink-600",
    glow: "shadow-pink-300",
    emoji: "🧼",
    link: "/components/accessories/comb",
  },
  {
    name: "Shampoo",
    icon: <GiBottleVapors />, 
    color: "text-purple-600",
    glow: "shadow-purple-300",
    emoji: "🧴",
    link: "/components/accessories/shampoo",
  },
  {
    name: "Bath Tub",
    icon: <FaBath />, 
    color: "text-cyan-600",
    glow: "shadow-cyan-300",
    emoji: "🛁",
    link: "/components/accessories/bathtub",
  },
  {
    name: "Dog House",
    icon: <GiDogHouse />, 
    color: "text-rose-600",
    glow: "shadow-rose-300",
    emoji: "🏠",
    link: "/components/accessories/doghouse",
  },
  {
    name: "Chew Toys",
    icon: <GiBoneKnife />, 
    color: "text-lime-600",
    glow: "shadow-lime-300",
    emoji: "🦷",
    link: "/components/accessories/chew",
  },
  {
    name: "GroomingKit",
    icon: <MdPets />, 
    color: "text-indigo-600",
    glow: "shadow-indigo-300",
    emoji: "✂️",
    link: "/components/accessories/grooming",
  },
];

const AccessoriesPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-300 via-teal-100 to-teal-300 px-4 sm:px-8 py-16">
      <section className="max-w-7xl mx-auto">
        {/* Page Title */}
        <header className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 drop-shadow-lg mb-4">
            Pet Accessories 🎁
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-xl mx-auto">
            Upgrade your pets lifestyle with quality accessories — from cozy beds to squeaky toys!
          </p>
        </header>

        {/* Accessories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {accessories.map((item, index) => (
            <Link key={index} href={item.link} aria-label={`View ${item.name}`}>
              <div className="group bg-white/70 border border-gray-200 rounded-2xl p-6 text-center shadow-md hover:shadow-2xl transition duration-300 hover:scale-105 backdrop-blur-md cursor-pointer">
                <div
                  className={`text-5xl sm:text-6xl mb-4 mx-auto ${item.color} ${item.glow} group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}
                >
                  {item.icon}
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                  {item.name} <span className="text-lg">{item.emoji}</span>
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AccessoriesPage;
