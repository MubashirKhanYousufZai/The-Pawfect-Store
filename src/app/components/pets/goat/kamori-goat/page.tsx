import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const KamoriGoatPage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Kamori Goat"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/kamori.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Kamori Goat 🐐
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                The **Kamori Goat** is a **premium dairy breed** originating from **Sindh, Pakistan**. Known for its 
                **distinctive long ears, unique brown coat with white spots, and elongated face**, the Kamori goat is 
                one of the most **expensive and sought-after breeds** in the world.
                
                These goats are **excellent milk producers**, yielding **up to 2-3 liters of milk per day**. Their 
                **high-quality milk** is rich in nutrients, making them a favorite among dairy farmers.
                
                Kamori goats are **large and sturdy**, requiring proper care, a spacious living environment, and a 
                well-balanced diet. They are also **docile and easy to handle**, making them a great choice for 
                experienced breeders and newcomers alike.
                
                If you are looking for a **luxurious and high-yield dairy goat**, the Kamori Goat is the perfect addition 
                to your farm! 🐐✨
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center mt-6">
                <span className="title-font font-bold text-3xl text-gray-900">$999.99</span>
                
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

export default KamoriGoatPage;
