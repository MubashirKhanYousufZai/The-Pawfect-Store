import React from "react";
import Link from "next/link";
import { FaPaw } from "react-icons/fa";
import { TbDogBowl } from "react-icons/tb";

const Gives = () => {
  const items = [
    { icon: <FaPaw />, title: "Pets", link: "/components/pets" },
    { icon: <TbDogBowl />, title: "Food", link: "/components/food" },
  ];

  return (
    <section className="bg-teal-100 py-16 px-6 sm:px-12">
      {/* Section Title */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-gray-900 text-4xl sm:text-5xl font-extrabold leading-tight">
          What <span className="text-teal-500">The Pawfect Store</span> provides!
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl mt-6 leading-relaxed">
          At <span className="font-semibold text-teal-500">The Pawfect Store</span>, we provide top-quality pet essentials—premium food, cozy beds, durable toys, and grooming products. Everything your pet needs, in one place!
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16">
        {items.map((item, index) => (
          <div key={index} className="p-4">
            <div className="border border-gray-200 px-6 py-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 bg-white flex flex-col items-center text-center">
              {/* Clickable Icon */}
              <Link
                href={item.link}
                className="flex justify-center items-center bg-teal-100 p-6 rounded-full text-teal-500 text-5xl w-24 h-24 hover:bg-teal-500 hover:text-white transition duration-300 transform hover:scale-110"
              >
                {item.icon}
              </Link>
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
    </section>
  );
};

export default Gives;
