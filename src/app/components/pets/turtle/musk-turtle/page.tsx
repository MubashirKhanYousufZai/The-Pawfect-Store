import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const MuskTurtlePage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Musk Turtle"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/musk.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Musk Turtle 🐢
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                The **Musk Turtle** is a small and unique species of freshwater turtle, known for its **distinctive musky odor** that 
                it releases as a defense mechanism when threatened. These turtles are native to North America and can be found in 
                slow-moving rivers, ponds, and marshes.

                Musk Turtles are **omnivorous**, feeding on a variety of food sources including insects, worms, small fish, and aquatic 
                plants. Despite their small size, they are incredibly active and love to explore their environment. Musk Turtles are 
                typically more comfortable in a **water environment** with easy access to both land and water, and they enjoy basking in 
                the sun when given the chance.

                These turtles are relatively **low-maintenance** and make great pets for individuals who are looking for a **small, 
                hardy** aquatic pet. With the right habitat, the Musk Turtle can thrive and live a long, happy life. 🐢✨
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center mt-6">
                <span className="title-font font-bold text-3xl text-gray-900">$19.99</span>
                
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

export default MuskTurtlePage;
