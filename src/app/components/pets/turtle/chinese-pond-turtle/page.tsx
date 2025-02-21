import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const ChinesePondTurtlePage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Chinese Pond Turtle"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/chinese.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Chinese Pond Turtle 🐢
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                The **Chinese Pond Turtle** (also known as the **Chinemys reevesii**) is a species of freshwater turtle 
                native to the ponds and streams of **China** and **Taiwan**. Known for its **small size** and **distinctive 
                markings**, this turtle has a beautiful, highly detailed shell with yellow lines and a dark brown or black background.

                The Chinese Pond Turtle is a **semi-aquatic species**, spending most of its time in freshwater but requiring 
                both aquatic and terrestrial environments for basking. It is an **omnivore**, feeding on a varied diet of 
                insects, fish, aquatic plants, and small invertebrates.

                This species is commonly kept as a **pet** due to its manageable size and docile nature. The Chinese Pond Turtle 
                is also known for being **easy to care for**, requiring a clean tank with a basking area and access to freshwater. 
                They are a peaceful addition to any reptile collection, making them a great option for beginners in turtle care. 🐢✨
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center mt-6">
                <span className="title-font font-bold text-3xl text-gray-900">$29.99</span>
                
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

export default ChinesePondTurtlePage;
