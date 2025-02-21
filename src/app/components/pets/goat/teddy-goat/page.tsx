import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const TeddyGoatPage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Teddy Goat"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/teddy.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Teddy Goat 🐐
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                The **Teddy Goat** is a **unique and adorable breed** known for its **soft, fluffy coat** and **friendly nature**. 
                Originally from **Pakistan**, the Teddy Goat is often sought after for its **cute appearance** and docile temperament, 
                making it a great choice for both **pet lovers** and **small-scale farmers**.

                This breed is known for its **small to medium size**, making it an easy-to-manage goat. They have a **high-quality coat** 
                that requires regular grooming to maintain their fluffy appearance. Teddy goats are also **fairly resilient** to various 
                weather conditions, especially in milder climates.

                While they may not be as productive in terms of milk as other breeds, they are still known to produce **1-2 liters** 
                of milk per day, which is perfect for **small household needs**. The **Teddy Goat** is also a great option if you're looking 
                for a **charming companion** on your farm!

                If you're looking for a **cuddly, low-maintenance goat** with a **cute personality**, the Teddy Goat is a great fit! 🐐✨
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center mt-6">
                <span className="title-font font-bold text-3xl text-gray-900">$649.99</span>
                
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

export default TeddyGoatPage;
