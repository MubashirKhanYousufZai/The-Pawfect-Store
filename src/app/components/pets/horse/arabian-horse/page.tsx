import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const ArabianHorsePage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Arabian Horse"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/arabianhorse.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Arabian Horse 🐎
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                The **Arabian Horse** is one of the oldest and most recognizable horse breeds in the world, known for its **elegance**, 
                **stamina**, and **intelligence**. Originating from the **Arabian Peninsula**, these horses have been revered for their 
                **loyalty** and **versatility** across centuries.

                Arabian horses are renowned for their **beautiful, refined** physical appearance, with a distinctive **arched neck** 
                and **large, expressive eyes**. They have excellent endurance and agility, making them perfect for long-distance racing, 
                as well as riding and showing. Due to their **gentle nature** and strong bond with their owners, Arabians are not only 
                prized in competition but also cherished as companions. 

                Whether you're a professional equestrian or a lover of this majestic breed, the **Arabian Horse** offers unparalleled 
                **grace** and **strength**. 🐎✨
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center mt-6">
                <span className="title-font font-bold text-3xl text-gray-900">$1,200.00</span>
                
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

export default ArabianHorsePage;
