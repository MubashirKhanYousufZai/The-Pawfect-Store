import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const AfricanSideneckTurtlePage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="African Sideneck Turtle"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/africansideneck.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                African Sideneck Turtle 🐢
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                The **African Sideneck Turtle** is a striking and unique species native to the freshwater rivers and lakes of 
                sub-Saharan Africa. Named for its distinctive sideways neck movement, this turtle can **retract its head sideways** 
                into its shell, unlike most turtles that retract their head directly into their shell.

                African Sideneck Turtles are **omnivores**, feeding on a variety of plant material, aquatic invertebrates, and small 
                fish. They are highly aquatic and require access to both water and a basking area where they can soak up the sun. 
                They are known for being **relatively easy to care for** in captivity, as long as they are given proper care and a 
                spacious environment.

                With their **gentle temperament** and unique appearance, the African Sideneck Turtle is a fascinating addition to 
                any reptile enthusiast's collection. They are long-lived and can make wonderful pets for those willing to provide 
                them with a suitable habitat. 🐢✨
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center mt-6">
                <span className="title-font font-bold text-3xl text-gray-900">$59.99</span>
                
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

export default AfricanSideneckTurtlePage;
