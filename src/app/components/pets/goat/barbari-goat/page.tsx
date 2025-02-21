import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const BarbariGoatPage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Barbari Goat"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/barbari.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Barbari Goat 🐐
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                The **Barbari Goat** is a **highly prized** breed known for its **compact size**, **fast growth**, and 
                **excellent meat quality**. Originating from the **western regions of India and Pakistan**, Barbari goats are 
                widely sought after for both **meat** and **milk** production.

                Barbari goats are **medium-sized** with **well-muscled bodies**, making them ideal for **meat farming**. 
                Their meat is **tender, lean, and flavorful**, which makes them popular among farmers and meat processors. 
                In addition to meat production, Barbari goats are also **good milk producers**, yielding around **1-2 liters of milk per day**.

                Known for their **resilience and adaptability**, Barbari goats are able to thrive in both **hot climates** 
                and **dry conditions**. They are also **easy to manage**, making them an ideal breed for **small-scale** or 
                **commercial farming**. 

                If you are looking for a **high-quality meat goat** with a **gentle temperament**, the Barbari Goat is a great addition to your farm! 🐐✨
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center mt-6">
                <span className="title-font font-bold text-3xl text-gray-900">$799.99</span>
                
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

export default BarbariGoatPage;
