import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const SuffolkSheepPage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Suffolk Sheep"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/suffolk.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Suffolk Sheep 🐑
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                The **Suffolk Sheep** is a **high-quality meat breed** known for its **fast growth**, **excellent carcass quality**, 
                and **resilient nature**. Originating in the **United Kingdom**, Suffolk sheep are highly prized by farmers for their 
                ability to produce **lean, tender lamb** and their **robustness** in various climates.

                Known for their **distinct black faces** and **white bodies**, Suffolk sheep are often used in commercial breeding 
                programs due to their superior meat production. They are also known for their **calm temperament**, making them easy 
                to handle and manage. 

                Suffolk sheep are a great choice for those looking to raise sheep for meat production, and they adapt well to a variety 
                of environments, whether its **small-scale farming** or larger operations. If you are looking for a reliable and profitable 
                breed, the Suffolk Sheep is a perfect addition to your farm. 🐑✨
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center mt-6">
                <span className="title-font font-bold text-3xl text-gray-900">$599.99</span>
                
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

export default SuffolkSheepPage;
