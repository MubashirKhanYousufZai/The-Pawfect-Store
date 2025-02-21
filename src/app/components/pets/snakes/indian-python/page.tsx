import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const IndianPythonPage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Indian Python"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/indian.jpeg" // Replace with actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Indian Python 🐍
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                The **Indian Python** (*Python molurus*) is a **large and non-venomous** snake native to the **forests and grasslands of the Indian subcontinent**. 
                Known for its **impressive size** and **beautiful patterns**, this species can grow up to **20 feet** in length and is admired by reptile enthusiasts worldwide.  

                Although gentle in nature, Indian Pythons require **spacious enclosures**, proper humidity, and a **dedicated reptile keeper** due to their size and strength. 
                They are **excellent climbers and swimmers**, making them a fascinating species to observe. With **proper care**, these majestic creatures can live for over **25 years**! 🐍✨  
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center mt-6">
                <span className="title-font font-bold text-3xl text-gray-900">$299.99</span>
                
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

export default IndianPythonPage;
