import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const AldabraTortoisePage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Aldabra Tortoise"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/aldabra.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Aldabra Tortoise 🐢
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                The **Aldabra Tortoise** (Aldabrachelys gigantea) is one of the **largest tortoise species in the world**, native 
                to the **Aldabra Atoll in the Seychelles**. These gentle giants are known for their **massive size, long lifespan, 
                and friendly nature**.
                
                Aldabra Tortoises are **herbivorous**, primarily feeding on **grasses, leaves, and vegetation**. They can grow to 
                over **4 feet in length** and weigh more than **500 pounds**. With proper care, they can live for **100+ years**, 
                making them true lifetime companions.
                
                This species requires a **large outdoor enclosure** with plenty of space to roam and bask in the sun. Due to their 
                size, they need a **specialized habitat** and are best suited for experienced reptile keepers or sanctuaries.
                
                If you are looking for an **incredible, prehistoric-looking tortoise** that can become a family legacy, the 
                Aldabra Tortoise is an amazing choice! 🐢✨
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center mt-6">
                <span className="title-font font-bold text-3xl text-gray-900">$4,999.99</span>
                
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

export default AldabraTortoisePage;
