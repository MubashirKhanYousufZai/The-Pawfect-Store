import Link from "next/link";
import React from "react";
import { FaCat, FaDog, FaHorse } from "react-icons/fa";
import { GiChicken, GiCow, GiDuck, GiGoat, GiRabbit, GiRat, GiSheep, GiSnake, GiTortoise } from "react-icons/gi";
import { LuFish, LuTurtle } from "react-icons/lu";
import { PiBirdFill } from "react-icons/pi";

const animals = [
  { name: "Cat", icon: <FaCat />, color: "text-teal-500", glow: "shadow-teal-500", emoji: "🐈", link: "/components/pets/cat" },
  { name: "Dog", icon: <FaDog />, color: "text-yellow-500", glow: "shadow-yellow-500", emoji: "🐕", link: "/components/pets/dog" },
  { name: "Parrot", icon: <PiBirdFill/>, color: "text-green-500", glow: "shadow-green-500", emoji: "🦜", link: "/components/pets/parrot" },
  { name: "Hen", icon: <GiChicken />, color: "text-orange-500", glow: "shadow-orange-500", emoji: "🐔", link: "/components/pets/hen" },
  { name: "Duck", icon: <GiDuck />, color: "text-blue-500", glow: "shadow-blue-500", emoji: "🦆", link: "/components/pets/duck" },
  { name: "Rabbit", icon: <GiRabbit />, color: "text-pink-500", glow: "shadow-pink-500", emoji: "🐇", link: "/components/pets/rabbit" },
  { name: "Guinea Pig", icon: <GiRat />, color: "text-purple-500", glow: "shadow-purple-500", emoji: "🐁", link: "/components/pets/guinea-pig" },
  { name: "Cow", icon: <GiCow />, color: "text-red-500", glow: "shadow-red-500", emoji: "🐄", link: "/components/pets/cow" },
  { name: "Goat", icon: <GiGoat />, color: "text-lime-500", glow: "shadow-lime-500", emoji: "🐐", link: "/components/pets/goat" },
  { name: "Sheep", icon: <GiSheep />, color: "text-emerald-500", glow: "shadow-emerald-500", emoji: "🐑", link: "/components/pets/sheep" },
  { name: "Horse", icon: <FaHorse />, color: "text-rose-500", glow: "shadow-rose-500", emoji: "🐎", link: "/components/pets/horse" },
  { name: "Snake", icon: <GiSnake />, color: "text-gray-500", glow: "shadow-gray-500", emoji: "🐍", link: "/components/pets/snake" },
  { name: "Turtle", icon: <LuTurtle />, color: "text-indigo-500", glow: "shadow-indigo-500", emoji: "🐢", link: "/components/pets/turtle" },
  { name: "Tortoise", icon: <GiTortoise />, color: "text-fuchsia-500", glow: "shadow-fuchsia-500", emoji: "🐢", link: "/components/pets/tortoise" },
  { name: "Fish", icon: <LuFish />, color: "text-cyan-500", glow: "shadow-cyan-500", emoji: "🐠", link: "/components/pets/fish" },
];

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 via-teal-200 to-purple-200 px-6 py-16">
      <section className="w-full max-w-7xl">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 drop-shadow-lg">
            Our Animals 🐾
          </h1>
          <p className="text-lg text-gray-700 md:w-3/5 mx-auto">
            &quot;Explore our adorable animals and find your perfect pet!&quot;
          </p>
        </div>

        {/* Animal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {animals.map((animal, index) => (
            <Link key={index} href={animal.link}>
              <div className="relative flex flex-col items-center justify-center p-6 bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-2xl border border-gray-200 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-2xl hover:border-transparent hover:bg-opacity-60">
                <div className={`text-6xl ${animal.color} mb-4 transition-transform duration-300 hover:rotate-12 hover:scale-110 ${animal.glow}`}>
                  {animal.icon}
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 drop-shadow-md">
                  {animal.name} {animal.emoji}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
