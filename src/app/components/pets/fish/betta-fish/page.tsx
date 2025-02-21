import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const BettaFishPage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Betta Fish"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/betta.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Betta Fish 🐠
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                The **Betta Fish**, also known as the **Siamese fighting fish**, is a stunning and vibrant freshwater fish 
                native to Southeast Asia. Known for their **brilliant colors** and **long, flowing fins**, Betta Fish are a 
                favorite among aquarium enthusiasts. They are easy to care for and come in a wide variety of colors including 
                red, blue, purple, and green.

                Betta Fish are **territorial** and can be kept alone in a tank or with compatible species. They are **low-maintenance**, 
                making them ideal for beginner aquarists. These fish are known for their **bold personality** and **graceful movement** 
                as they swim through the water. 

                Whether you're adding a **beautiful centerpiece** to your aquarium or looking for a **hardy and resilient fish**, 
                Betta Fish make a perfect choice. 🐠✨
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center mt-6">
                <span className="title-font font-bold text-3xl text-gray-900">$14.99</span>
                
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

export default BettaFishPage;
