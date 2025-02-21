import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const PahariGoatPage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Pahari Goat"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/pahari.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Pahari Goat 🐐
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                The **Pahari Goat** is a **hardy and versatile breed** found in the **hilly and mountainous regions** of 
                Pakistan. Known for their **strong constitution** and ability to adapt to harsh climates, these goats 
                are highly valued by farmers and breeders alike.
                
                Pahari goats are excellent for **meat production**, with their meat being **tender and flavorful**. They 
                are also good milk producers, though their primary value lies in their **robust health** and ability to 
                thrive in difficult environments. They can produce **1-2 liters of milk per day**, which is perfect for 
                local dairy needs.
                
                These goats are **medium-sized**, agile, and able to travel long distances in rugged terrains. Their 
                **thick coats** help protect them in cold weather, making them a suitable choice for farmers in **mountainous** 
                or **rough terrain** areas.
                
                If you are looking for a **resilient and adaptable goat** that can thrive in challenging conditions, the 
                Pahari Goat is a great choice for your farm! 🐐✨
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

export default PahariGoatPage;
