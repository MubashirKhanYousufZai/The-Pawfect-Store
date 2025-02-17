import React from "react";
import { FaPaw } from "react-icons/fa";
import { FaSuitcaseMedical } from "react-icons/fa6";
import { SlBadge } from "react-icons/sl";
import { TbDogBowl } from "react-icons/tb";

const Gives = () => {
  const items = [
    { icon: <FaPaw />, title: "Pets", link: "/components/pets" },
    { icon: <TbDogBowl />, title: "Food", link: "/components/food" },
    { icon: <FaSuitcaseMedical />, title: "Medication", link: "/components/medication" },
    { icon: <SlBadge />, title: "Accessories", link: "/components/accessories" },
  ];

  return (
    <div className="bg-teal-100 py-16 px-6 sm:px-12">
      <h1 className="text-gray-900 text-center text-4xl sm:text-5xl font-extrabold">
        What <span className="text-teal-500">The Pawfect Store</span> provides!
      </h1>

      <p className="text-gray-700 text-lg sm:text-xl text-center max-w-3xl mx-auto mt-6 leading-relaxed">
        At <span className="font-semibold text-teal-500">The Pawfect Store</span>, we provide a wide range of 
        high-quality pet essentials to keep your furry friends happy and comfortable. Our collection includes 
        premium pet food, cozy beds, durable toys, stylish collars and leashes, grooming products, and healthcare 
        essentials—all carefully selected for safety and comfort.
      </p>

      <p className="text-gray-700 text-lg sm:text-xl text-center max-w-3xl mx-auto mt-4 leading-relaxed">
        Whether you have a playful pup, a curious cat, or a small critter, we have everything you need to give them 
        the love and care they deserve. With affordable prices, top-quality products, and a passion for pets, we ensure 
        that your pets happiness is just a click away! 🐶🐱🐾
      </p>

      <h2 className="text-center text-2xl sm:text-3xl font-bold text-teal-600 mt-10">
        Because every pet deserves The Pawfect Store! 🛍️✨
      </h2>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {items.map((item, index) => (
          <div key={index} className="p-4">
            <div className="border border-gray-200 px-6 py-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 bg-white flex flex-col items-center text-center">
              {/* Clickable Icon */}
              <a
                href={item.link}
                className="flex justify-center items-center bg-teal-100 p-5 rounded-full text-teal-500 text-5xl w-20 h-20 hover:bg-teal-500 hover:text-white transition duration-300 transform hover:scale-110"
              >
                {item.icon}
              </a>
              <h2 className="text-3xl font-semibold text-gray-900 mt-4">{item.title}</h2>
              {/* Shop Now Button */}
              <a href={item.link}>
                <button className="mt-4 bg-teal-500 text-white px-5 py-2 text-lg font-semibold rounded-lg shadow-md hover:bg-teal-600 transition duration-300">
                  Shop Now
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gives;
