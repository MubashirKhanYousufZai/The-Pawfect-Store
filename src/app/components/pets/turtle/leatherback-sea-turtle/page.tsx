import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const LeatherbackSeaTurtlePage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Leatherback Sea Turtle"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/leatherback.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Leatherback Sea Turtle 🐢
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                The **Leatherback Sea Turtle** is the largest species of sea turtle and one of the most iconic marine creatures 
                on the planet. Known for its **distinctive leathery shell**, unlike the hard shells of most other turtles, 
                the leatherback can grow up to 9 feet in length and weigh over 2,000 pounds.

                Leatherbacks are **incredible swimmers**, capable of diving to depths of over 4,000 feet in search of their 
                primary food source: **jellyfish**. These sea turtles play a crucial role in maintaining the balance of marine 
                ecosystems by controlling jellyfish populations.

                As a **marine species**, Leatherback Sea Turtles require a vast and unpolluted ocean environment. Unfortunately, 
                they face numerous threats, including **habitat loss**, **entanglement in fishing gear**, and **climate change**. 
                Conservation efforts are crucial to protect these majestic creatures from extinction.

                Leatherbacks are not kept as pets due to their size and marine lifestyle but remain an awe-inspiring symbol of 
                conservation efforts worldwide. 🐢✨
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center mt-6">
                <span className="title-font font-bold text-3xl text-gray-900">$999.99</span>
                
                <div className="flex-grow flex justify-end items-center space-x-4">
                  <Link href="/components/payment">
                    <button className="text-white bg-teal-500 border-0 py-3 px-6 text-lg font-medium focus:outline-none hover:bg-teal-600 rounded-lg transition-all">
                      Buy Now
                    </button>
                  </Link>

                  {/* Wishlist Button with React Icons */}
                  <button className="rounded-full w-12 h-12 bg-gray-200 flex items-center justify-center text-gray-500 hover:text-red-500 hover:bg-gray-300 transition-all">
                    <AiOutlineHeart size={26} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeatherbackSeaTurtlePage;
