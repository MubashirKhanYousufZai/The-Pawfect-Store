import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const EasterEggerChickenPage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Easter Egger Chicken"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/easter-egger.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Easter Egger Chicken 🐔
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                <strong>The Pawfect Store</strong> proudly presents the delightful **Easter Egger Chicken** 🐔, a unique breed 
                known for its ability to lay beautiful **colored eggs** in shades of **blue**, **green**, and **pink**. These chickens 
                are not only loved for their colorful eggs but also for their **hardy nature** and **friendly demeanor**. Easter Eggers 
                are a mix of various breeds and are typically **great layers**, producing around 4-5 eggs per week. Their feathered 
                appearance can be quite varied, with some displaying fluffy tufts around their faces and others having sleek, glossy feathers. 
                Whether you are a backyard chicken keeper or a hobby farmer, Easter Eggers will add both beauty and variety to your flock. 🌈🥚✨
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center mt-6">
                <span className="title-font font-bold text-3xl text-gray-900">$18.99</span>
                
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

export default EasterEggerChickenPage;
