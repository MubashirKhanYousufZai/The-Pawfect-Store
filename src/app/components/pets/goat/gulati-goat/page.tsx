import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const GulatiGoatPage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Gulati Goat"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/gulati.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Gulati Goat 🐐
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                The **Gulati Goat** is a **famous breed** primarily found in the **Punjab region of India and Pakistan**. 
                Known for its **excellent meat production** and **gentle nature**, Gulati goats are highly valued by farmers.

                These goats are **medium to large-sized**, with a **muscular frame**, making them ideal for **meat farming**. 
                The **lean and tender meat** of the Gulati goat is sought after for its superior taste and texture. 
                Additionally, they produce **1-2 liters of milk per day**, which is nutritious and has good butterfat content.

                Gulati goats are **hardy**, **resilient**, and can thrive in a variety of **climates**, from **hot** to **moderate conditions**. 
                Their **docile and calm temperament** makes them easy to manage, making them suitable for both **new and experienced breeders**.

                If you are looking for a **robust, high-quality meat goat** with a **calm nature**, the Gulati Goat is a fantastic option for your farm! 🐐✨
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center mt-6">
                <span className="title-font font-bold text-3xl text-gray-900">$849.99</span>
                
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

export default GulatiGoatPage;
