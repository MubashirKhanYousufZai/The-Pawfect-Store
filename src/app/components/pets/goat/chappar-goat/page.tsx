import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const ChapparGoatPage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Chappar Goat"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/chappar.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Chappar Goat 🐐
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                The **Chappar Goat** is a **strong and resilient breed** originating from the **rural areas of Pakistan**. 
                Known for their **compact build** and **good health**, Chappar goats are well-suited for both **meat** and 
                **milk production**.

                These goats are characterized by their **robustness**, which allows them to thrive in a variety of 
                **environmental conditions**. They are highly valued for their **meat quality**, which is tender and has 
                a distinct flavor. Chappar goats are also **excellent milk producers**, yielding up to **2-3 liters of milk** 
                per day, making them a reliable source of dairy for many farms.

                The Chappar Goat is known for its **docile nature**, making it easy to handle and manage, even for 
                inexperienced farmers. Their **resilient health** ensures they require minimal maintenance, and they are 
                well-suited for **small-scale farms** as well as larger commercial operations.
                
                If you are looking for a **hardy, high-quality meat and milk goat**, the Chappar Goat is a great choice for your farm! 🐐✨
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center mt-6">
                <span className="title-font font-bold text-3xl text-gray-900">$749.99</span>
                
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

export default ChapparGoatPage;
