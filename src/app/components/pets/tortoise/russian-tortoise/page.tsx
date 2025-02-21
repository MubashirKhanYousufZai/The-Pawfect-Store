import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const RussianTortoisePage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Russian Tortoise"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/russian.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Russian Tortoise 🐢
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                The **Russian Tortoise** (Agrionemys horsfieldii) is a hardy and adaptable species native to **Central Asia**, 
                including parts of Russia, Afghanistan, and Iran. It is well-known for its **small size and high activity level**.
                
                Russian Tortoises are **herbivorous**, feeding on **grasses, leafy greens, and flowers**. They typically grow to 
                around **5-10 inches** in length, making them one of the most manageable pet tortoises.
                
                This species thrives in **dry, arid environments** and requires an enclosure with a warm basking area and plenty of 
                room to roam. With the right care, they can live for **40+ years**, making them a wonderful long-term companion.
                
                If you're looking for a **small, active, and low-maintenance** pet tortoise, the Russian Tortoise is an excellent 
                choice! 🐢✨
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center mt-6">
                <span className="title-font font-bold text-3xl text-gray-900">$129.99</span>
                
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

export default RussianTortoisePage;
