import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const DearDinPanahGoatPage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Dear Din Panah Goat"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/dear-din-panah.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Dear Din Panah Goat 🐐
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                The **Dear Din Panah Goat** is a **prestigious and rare breed** found in the **rural areas of Pakistan**. 
                With their **impressive stature, silky coat, and sturdy build**, these goats are admired for their 
                **robust health** and **high milk yield**.
                
                Known for their **docile temperament**, they are easy to handle and grow quickly. The Dear Din Panah 
                Goat is a great choice for dairy farming due to their **exceptional milk quality**, providing up to 
                **3-4 liters of milk per day**. The milk is **rich in taste and nutrients**, making it a preferred choice 
                for many dairy enthusiasts.
                
                This breed is also highly **resistant to diseases**, requiring less maintenance compared to other breeds. 
                They adapt well to different climates and are excellent for both **small-scale farms** and larger, more 
                commercial operations.
                
                If you are looking for a **resilient, high-yield dairy goat** with a **gentle nature**, the Dear Din Panah Goat 
                is an excellent option for your farm! 🐐✨
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center mt-6">
                <span className="title-font font-bold text-3xl text-gray-900">$899.99</span>
                
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

export default DearDinPanahGoatPage;
