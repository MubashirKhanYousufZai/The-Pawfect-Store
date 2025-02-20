import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const BrahmaChickenPage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Brahma Chicken"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/brahma.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Brahma Chicken 🐔
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                <strong>The Pawfect Store</strong> proudly presents the majestic **Brahma Chicken** 🐔, a breed known for its 
                impressive size and calm demeanor. Often referred to as the King of Chickens, Brahmas are known for their 
                **large stature**, with roosters often reaching over 10 pounds. These gentle giants are not just for their size; 
                they are excellent **egg layers**, producing large brown eggs regularly. Their **feathered legs** and **fluffy plumage** 
                make them one of the most striking chicken breeds. Despite their imposing size, Brahmas are **docile** and **friendly**, 
                making them great pets for families. Their **hardiness** and **ability to thrive in colder climates** make them a popular 
                choice for year-round egg production and backyard flocks. 🍳❄️🐓
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center mt-6">
                <span className="title-font font-bold text-3xl text-gray-900">$22.99</span>
                
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

export default BrahmaChickenPage;
