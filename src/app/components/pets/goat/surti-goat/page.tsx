import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const SurtiGoatPage = () => {
  return (
    <div className="bg-green-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-green-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Surti Goat"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/surti.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-green-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Surti Goat 🐐
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                The **Surti Goat** is a **premium breed** originating from the **Gujarat region of India**. Known for its **adaptability** 
                and **high-quality meat production**, the Surti goat is a popular choice for both small-scale and commercial farming.

                Surti goats are **medium-sized** with a **well-built, muscular body**, making them ideal for **meat production**. 
                The meat is **lean**, **tender**, and of **superior quality**, making it a highly sought-after product in the market. 
                They are also **good milk producers**, yielding up to **1-2 liters of milk per day**, which is rich and nutritious.

                These goats are **hardy**, able to thrive in **hot and dry conditions** typical of Gujarat. Their **docile nature** 
                makes them easy to handle and manage, and they are well-suited for both **first-time farmers** and experienced breeders.

                If you are looking for a **high-quality meat and milk goat**, the Surti Goat is an excellent choice for your farm! 🐐✨
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center mt-6">
                <span className="title-font font-bold text-3xl text-gray-900">$799.99</span>
                
                <div className="flex-grow flex justify-end items-center space-x-4">
                  <Link href="/components/payment">
                    <button className="text-white bg-green-500 border-0 py-3 px-6 text-lg font-medium focus:outline-none hover:bg-green-600 rounded-lg transition-all">
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

export default SurtiGoatPage;
